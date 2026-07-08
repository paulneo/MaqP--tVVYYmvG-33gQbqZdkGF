#!/usr/bin/env node
// Migra todas las imágenes de public/images/posts/ a Cloudinary
// y actualiza los frontmatter de los posts para apuntar a las URLs
// nuevas de Cloudinary.
//
// Requiere env vars:
//   CLOUDINARY_CLOUD_NAME
//   CLOUDINARY_API_KEY
//   CLOUDINARY_API_SECRET
//
// Uso:
//   CLOUDINARY_CLOUD_NAME=vadks4nc \
//   CLOUDINARY_API_KEY=411... \
//   CLOUDINARY_API_SECRET=... \
//   node scripts/migrate-images-to-cloudinary.mjs

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const IMAGES_DIR = path.join(ROOT, 'public/images/posts')
const POSTS_DIR = path.join(ROOT, 'src/content/posts')
const MAPPING_FILE = path.join(ROOT, '.cloudinary-mapping.json')

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.CLOUDINARY_API_KEY
const API_SECRET = process.env.CLOUDINARY_API_SECRET
const FOLDER = 'mundo-ingenieria'
const CONCURRENCY = 4

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('❌ Faltan env vars: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET')
  process.exit(1)
}

// ─── Cloudinary signed upload ────────────────────────────────────────

function sign(params) {
  const sorted = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&')
  return createHash('sha1').update(sorted + API_SECRET).digest('hex')
}

async function uploadOne(filepath, publicId) {
  const timestamp = Math.floor(Date.now() / 1000)
  const signedParams = {
    folder: FOLDER,
    overwrite: 'true',
    public_id: publicId,
    timestamp: timestamp.toString(),
  }
  const signature = sign(signedParams)

  const buffer = await readFile(filepath)
  const blob = new Blob([buffer])
  const formData = new FormData()
  formData.append('file', blob, path.basename(filepath))
  formData.append('api_key', API_KEY)
  formData.append('timestamp', timestamp.toString())
  formData.append('signature', signature)
  formData.append('folder', FOLDER)
  formData.append('public_id', publicId)
  formData.append('overwrite', 'true')

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`HTTP ${res.status}: ${err}`)
  }

  return res.json()
}

// ─── Sube todas las imágenes ─────────────────────────────────────────

async function uploadAllImages(existingMapping) {
  const files = (await readdir(IMAGES_DIR)).filter(f =>
    /\.(webp|jpg|jpeg|png)$/i.test(f) && !f.startsWith('.')
  )

  const mapping = { ...existingMapping }
  const errors = []
  let uploaded = 0
  let skipped = 0
  const total = files.length

  const uploadFile = async (filename) => {
    if (mapping[filename]) {
      skipped++
      return
    }
    const filepath = path.join(IMAGES_DIR, filename)
    const nameNoExt = filename.replace(/\.(webp|jpg|jpeg|png)$/i, '')
    const publicId = nameNoExt

    try {
      const result = await uploadOne(filepath, publicId)
      mapping[filename] = {
        public_id: result.public_id,
        secure_url: result.secure_url,
        format: result.format,
        width: result.width,
        height: result.height,
      }
      uploaded++
      if (uploaded % 20 === 0) {
        console.log(`  ${uploaded + skipped}/${total} imágenes procesadas...`)
        // Save mapping progressively
        await writeFile(MAPPING_FILE, JSON.stringify(mapping, null, 2))
      }
    } catch (err) {
      errors.push({ filename, error: err.message })
      console.error(`  ❌ ${filename}: ${err.message.slice(0, 100)}`)
    }
  }

  // Procesa en batches de CONCURRENCY
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY)
    await Promise.all(batch.map(uploadFile))
  }

  await writeFile(MAPPING_FILE, JSON.stringify(mapping, null, 2))
  return { mapping, uploaded, skipped, errors, total }
}

// ─── Actualiza frontmatter de posts ──────────────────────────────────

function transformUrl(cloudinaryData) {
  // f_auto → devuelve WebP/AVIF según browser
  // q_auto → optimiza calidad automáticamente
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${cloudinaryData.public_id}`
}

async function updatePosts(mapping) {
  const files = (await readdir(POSTS_DIR)).filter(f => f.endsWith('.md'))
  let updated = 0
  const notFound = []

  for (const filename of files) {
    const filepath = path.join(POSTS_DIR, filename)
    const raw = await readFile(filepath, 'utf-8')

    // Extraer image path del frontmatter
    const imageMatch = raw.match(/^image:\s*(.+?)$/m)
    if (!imageMatch) continue

    const oldImage = imageMatch[1].trim().replace(/^["']|["']$/g, '')
    if (!oldImage.startsWith('/images/posts/')) continue
    // Ya migrado, skip
    if (oldImage.startsWith('http')) continue

    const localFilename = path.basename(oldImage)
    const mapped = mapping[localFilename]

    if (!mapped) {
      notFound.push({ post: filename, image: localFilename })
      continue
    }

    const newUrl = transformUrl(mapped)
    const newRaw = raw.replace(
      /^image:\s*(.+?)$/m,
      `image: ${newUrl}`
    )

    await writeFile(filepath, newRaw, 'utf-8')
    updated++
  }

  return { updated, notFound }
}

// ─── Run ─────────────────────────────────────────────────────────────

console.log('━━━━━ Migración de imágenes → Cloudinary ━━━━━\n')

// Cargar mapping existente si hay (para reanudar)
let existingMapping = {}
if (existsSync(MAPPING_FILE)) {
  existingMapping = JSON.parse(await readFile(MAPPING_FILE, 'utf-8'))
  console.log(`Cargado mapping existente con ${Object.keys(existingMapping).length} imágenes ya subidas.\n`)
}

console.log('Paso 1: Subiendo imágenes a Cloudinary...')
const uploadResult = await uploadAllImages(existingMapping)
console.log(`  ✓ ${uploadResult.uploaded} nuevas | ${uploadResult.skipped} ya existían | ${uploadResult.errors.length} errores | ${uploadResult.total} total\n`)

if (uploadResult.errors.length > 0 && uploadResult.errors.length < 20) {
  console.log('  Errores detallados:')
  uploadResult.errors.forEach(e => console.log(`    - ${e.filename}: ${e.error.slice(0, 120)}`))
  console.log('')
}

console.log('Paso 2: Actualizando frontmatter de los posts...')
const postResult = await updatePosts(uploadResult.mapping)
console.log(`  ✓ ${postResult.updated} posts actualizados`)
if (postResult.notFound.length > 0) {
  console.log(`  ⚠️  ${postResult.notFound.length} posts con imagen NO encontrada en el mapping:`)
  postResult.notFound.slice(0, 10).forEach(nf => console.log(`    - ${nf.post} → ${nf.image}`))
  if (postResult.notFound.length > 10) console.log(`    ... y ${postResult.notFound.length - 10} más`)
}

console.log('\n━━━━━ Migración completa ━━━━━')
console.log(`\nMapping guardado en ${MAPPING_FILE}`)
console.log(`(este archivo NO se commitea — sirve solo para posibles reintentos)`)

#!/usr/bin/env node
// Segunda migración: sube a Cloudinary las imágenes que se quedaron afuera
// de la primera pasada (public/images/*, public/images/categories/*,
// public/mecanica_automotriz/*). Después actualiza referencias en el código.
//
// Requiere las mismas env vars que scripts/migrate-images-to-cloudinary.mjs.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const MAPPING_FILE = path.join(ROOT, '.cloudinary-mapping-remaining.json')

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.CLOUDINARY_API_KEY
const API_SECRET = process.env.CLOUDINARY_API_SECRET
const CONCURRENCY = 6

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('❌ Faltan env vars: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET')
  process.exit(1)
}

// ─── Fuentes a migrar ──────────────────────────────────────────────────
// { srcDir, publicPrefix, cloudinaryFolder }
const SOURCES = [
  {
    srcDir: path.join(ROOT, 'public/images'),
    publicPrefix: '/images/',
    cloudinaryFolder: 'mundo-ingenieria/legacy-root',
    recursive: false,
  },
  {
    srcDir: path.join(ROOT, 'public/images/categories'),
    publicPrefix: '/images/categories/',
    cloudinaryFolder: 'mundo-ingenieria/categories',
    recursive: false,
  },
  {
    srcDir: path.join(ROOT, 'public/mecanica_automotriz'),
    publicPrefix: '/mecanica_automotriz/',
    cloudinaryFolder: 'mundo-ingenieria/legacy-mecanica',
    recursive: false,
  },
  {
    srcDir: path.join(ROOT, 'public/news'),
    publicPrefix: '/news/',
    cloudinaryFolder: 'mundo-ingenieria/legacy-news',
    recursive: false,
  },
]

// ─── Cloudinary signed upload ─────────────────────────────────────────

function sign(params) {
  const sorted = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&')
  return createHash('sha1').update(sorted + API_SECRET).digest('hex')
}

async function uploadOne(filepath, publicId, folder) {
  const timestamp = Math.floor(Date.now() / 1000)
  const signedParams = {
    folder,
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
  formData.append('folder', folder)
  formData.append('public_id', publicId)
  formData.append('overwrite', 'true')

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  }
  return res.json()
}

// ─── Recorre fuentes y sube ────────────────────────────────────────────

async function uploadAll(existingMapping) {
  const mapping = { ...existingMapping }
  let uploaded = 0
  let skipped = 0
  const errors = []
  const IMG_RE = /\.(webp|jpg|jpeg|png)$/i

  // Recolectar TODO como { srcAbs, publicPath, folder, publicId }
  const tasks = []
  for (const { srcDir, publicPrefix, cloudinaryFolder } of SOURCES) {
    if (!existsSync(srcDir)) continue
    const files = (await readdir(srcDir, { withFileTypes: true }))
      .filter(d => d.isFile() && IMG_RE.test(d.name))
      .map(d => d.name)
    for (const filename of files) {
      const nameNoExt = filename.replace(IMG_RE, '')
      tasks.push({
        srcAbs: path.join(srcDir, filename),
        publicPath: publicPrefix + filename,
        cloudinaryFolder,
        publicId: nameNoExt,
      })
    }
  }

  console.log(`Encontrados ${tasks.length} archivos a subir.\n`)

  const worker = async (task) => {
    if (mapping[task.publicPath]) { skipped++; return }
    try {
      const result = await uploadOne(task.srcAbs, task.publicId, task.cloudinaryFolder)
      mapping[task.publicPath] = {
        public_id: result.public_id,
        secure_url: result.secure_url,
        cloudinary_url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${result.public_id}`,
      }
      uploaded++
      if (uploaded % 20 === 0) {
        console.log(`  ${uploaded + skipped}/${tasks.length}...`)
        await writeFile(MAPPING_FILE, JSON.stringify(mapping, null, 2))
      }
    } catch (err) {
      errors.push({ file: task.publicPath, error: err.message.slice(0, 120) })
      console.error(`  ❌ ${task.publicPath}: ${err.message.slice(0, 100)}`)
    }
  }

  for (let i = 0; i < tasks.length; i += CONCURRENCY) {
    await Promise.all(tasks.slice(i, i + CONCURRENCY).map(worker))
  }

  await writeFile(MAPPING_FILE, JSON.stringify(mapping, null, 2))
  return { mapping, uploaded, skipped, errors, total: tasks.length }
}

// ─── Reemplaza referencias en el código ────────────────────────────────

async function walkDir(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git' || e.name === '_archive-old-stack' || e.name === 'dist' || e.name === '.astro') continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) await walkDir(p, out)
    else if (/\.(md|astro|ts|tsx|js|mjs|yml|yaml)$/i.test(e.name)) out.push(p)
  }
  return out
}

async function replaceReferences(mapping) {
  const paths = Object.keys(mapping)
  // Ordenar de más largo a más corto para evitar reemplazos parciales
  paths.sort((a, b) => b.length - a.length)

  const targetFiles = await walkDir(path.join(ROOT, 'src'))
  targetFiles.push(path.join(ROOT, 'public/admin/config.yml'))

  let filesUpdated = 0
  let totalReplacements = 0
  const details = []

  for (const filepath of targetFiles) {
    if (!existsSync(filepath)) continue
    let raw = await readFile(filepath, 'utf-8')
    let changed = false
    let replacementsInFile = 0

    for (const localPath of paths) {
      if (raw.includes(localPath)) {
        const cloudinaryUrl = mapping[localPath].cloudinary_url
        const before = raw
        raw = raw.split(localPath).join(cloudinaryUrl)
        const occurrences = (before.match(new RegExp(localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
        replacementsInFile += occurrences
        changed = true
      }
    }

    if (changed) {
      await writeFile(filepath, raw, 'utf-8')
      filesUpdated++
      totalReplacements += replacementsInFile
      const rel = path.relative(ROOT, filepath)
      details.push({ file: rel, count: replacementsInFile })
    }
  }

  return { filesUpdated, totalReplacements, details }
}

// ─── Run ───────────────────────────────────────────────────────────────

console.log('━━━━━ Segunda migración a Cloudinary ━━━━━\n')

let existingMapping = {}
if (existsSync(MAPPING_FILE)) {
  existingMapping = JSON.parse(await readFile(MAPPING_FILE, 'utf-8'))
  console.log(`Cargado mapping previo con ${Object.keys(existingMapping).length} entradas.\n`)
}

console.log('Paso 1: Subiendo imágenes...')
const up = await uploadAll(existingMapping)
console.log(`  ✓ ${up.uploaded} nuevas | ${up.skipped} ya existían | ${up.errors.length} errores | ${up.total} total\n`)

if (up.errors.length && up.errors.length < 20) {
  up.errors.forEach(e => console.log(`    - ${e.file}: ${e.error}`))
  console.log('')
}

console.log('Paso 2: Reemplazando referencias en el código...')
const rep = await replaceReferences(up.mapping)
console.log(`  ✓ ${rep.filesUpdated} archivos actualizados | ${rep.totalReplacements} reemplazos totales\n`)

if (rep.details.length && rep.details.length < 40) {
  rep.details.forEach(d => console.log(`    - ${d.file} (${d.count} refs)`))
}

console.log('\n━━━━━ Migración completa ━━━━━')
console.log(`Mapping en ${MAPPING_FILE} (NO se commitea)`)

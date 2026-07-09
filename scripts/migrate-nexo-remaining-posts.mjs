#!/usr/bin/env node
// Migra los posts que están en el repo Nexo Mundial pero NO existen en
// Mundo Ingeniería. Copia el .md, sube la imagen a Cloudinary bajo el
// folder mundo-ingenieria, y reescribe el frontmatter `image:` con la
// URL de Cloudinary.
//
// Requiere env vars: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY,
// CLOUDINARY_API_SECRET.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import path from 'node:path'

const NEXO_ROOT = '/Users/frontend/Projects/personal/nexoM-j5CHGexBc44a-e-amp-kiAGopx8fE0'
const MUNDO_ROOT = '/Users/frontend/Projects/personal/MaqP--tVVYYmvG-33gQbqZdkGF'

const NEXO_POSTS = path.join(NEXO_ROOT, 'src/content/posts')
const MUNDO_POSTS = path.join(MUNDO_ROOT, 'src/content/posts')
const NEXO_IMAGES = path.join(NEXO_ROOT, 'public/images/posts')

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.CLOUDINARY_API_KEY
const API_SECRET = process.env.CLOUDINARY_API_SECRET
const FOLDER = 'mundo-ingenieria'

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('❌ Faltan env vars Cloudinary (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET)')
  process.exit(1)
}

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

  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  return res.json()
}

async function findMissingSlugs() {
  const nexoFiles = await readdir(NEXO_POSTS)
  const mundoFiles = await readdir(MUNDO_POSTS)

  const nexoSlugs = nexoFiles.filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
  const mundoSlugs = new Set(mundoFiles.filter(f => f.endsWith('.md')).map(f => f.replace('.md', '')))

  return nexoSlugs.filter(s => !mundoSlugs.has(s))
}

async function migratePost(slug) {
  const nexoPost = path.join(NEXO_POSTS, `${slug}.md`)
  const mundoPost = path.join(MUNDO_POSTS, `${slug}.md`)

  if (!existsSync(nexoPost)) {
    console.warn(`  ⚠ Post no encontrado en Nexo: ${slug}`)
    return { slug, ok: false, reason: 'source-missing' }
  }

  let content = await readFile(nexoPost, 'utf-8')

  const imgMatch = content.match(/^image:\s*(.+?)$/m)
  if (imgMatch) {
    const localImagePath = imgMatch[1].trim().replace(/^["']|["']$/g, '')
    if (localImagePath.startsWith('/images/posts/')) {
      const filename = path.basename(localImagePath)
      const nameNoExt = filename.replace(/\.(webp|jpg|jpeg|png)$/i, '')
      const localAbsPath = path.join(NEXO_IMAGES, filename)

      if (existsSync(localAbsPath)) {
        console.log(`  ⬆ Subiendo imagen: ${filename}`)
        try {
          const result = await uploadOne(localAbsPath, nameNoExt)
          const cloudinaryUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${result.public_id}`
          content = content.replace(/^image:\s*(.+?)$/m, `image: ${cloudinaryUrl}`)
        } catch (err) {
          console.error(`  ❌ Error subiendo ${filename}: ${err.message.slice(0, 100)}`)
        }
      } else {
        console.warn(`  ⚠ Imagen local no existe: ${localAbsPath}`)
      }
    } else if (localImagePath.startsWith('http')) {
      // Ya es URL externa (probablemente ya Cloudinary), dejar como está
    }
  }

  await writeFile(mundoPost, content, 'utf-8')
  return { slug, ok: true }
}

// ─── Run ─────────────────────────────────────────────────────────────

console.log('━━━━━ Migración Nexo → Mundo (posts faltantes) ━━━━━\n')

const missing = await findMissingSlugs()
console.log(`Encontrados ${missing.length} slugs a migrar:\n`)
missing.forEach(s => console.log(`  - ${s}`))
console.log('')

const results = []
for (const slug of missing) {
  console.log(`Migrando: ${slug}`)
  const r = await migratePost(slug)
  results.push(r)
}

const ok = results.filter(r => r.ok).length
const fail = results.filter(r => !r.ok).length

console.log(`\n━━━━━ Resultado ━━━━━`)
console.log(`✓ ${ok} posts migrados`)
if (fail > 0) console.log(`✗ ${fail} fallidos`)

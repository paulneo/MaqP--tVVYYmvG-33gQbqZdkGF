#!/usr/bin/env node
// Migra los 517 posts viejos de Mundo Ingenieria desde
// _archive-old-stack/content-viejo/{blog,news}/ al schema nuevo en
// src/content/posts/, normalizando frontmatter, fechas, categorías,
// slugs e imagen paths.
//
// Uso: node scripts/migrate-mundo-content.mjs

import { readFile, writeFile, readdir, mkdir, copyFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const ARCHIVE = path.join(ROOT, '_archive-old-stack/content-viejo')
const TARGET = path.join(ROOT, 'src/content/posts')
const PUBLIC_DIR = path.join(ROOT, 'public')
const NEW_IMG_DIR = path.join(PUBLIC_DIR, 'images/posts')

// ─── Helpers ─────────────────────────────────────────────────────────

const stripAccents = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

const slugify = (s) =>
  stripAccents(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)

// Normaliza una categoría vieja al schema nuevo
const normalizeCategory = (raw) => {
  if (!raw) return 'ingenieria-basica'
  const cleaned = stripAccents(raw)
    .toLowerCase()
    .replace(/['"\s]/g, '')
    .replace(/_/g, '-')

  // Map de variantes a categorías canónicas
  const map = {
    construccion: 'construccion',
    'maquinaria-pesada': 'maquinaria-pesada',
    'maquinarias-pesadas': 'maquinaria-pesada',
    'maquinarias-pesadasa': 'maquinaria-pesada',
    'mecanica-automotriz': 'mecanica-automotriz',
    electricidad: 'electricidad',
  }
  return map[cleaned] || 'ingenieria-basica'
}

// Parsea fechas en formato "Jun 02 2024" o "April 5 2024" o ISO
const parseDate = (raw) => {
  if (!raw) return null
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return null
  return d.toISOString().slice(0, 10) // "2024-06-02"
}

// Saca el filename del path de heroImage (lo aplanamos en /images/posts/)
const extractImageName = (raw) => {
  if (!raw) return null
  const cleaned = raw.replace(/^["']|["']$/g, '').trim()
  return path.basename(cleaned)
}

// Parsea YAML frontmatter manualmente (sin dependencias)
const parseFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { fm: null, body: content }

  const fm = {}
  const lines = match[1].split('\n')
  let currentKey = null
  let collectingArray = false
  let arrayBuf = ''

  for (const line of lines) {
    if (collectingArray) {
      arrayBuf += ' ' + line.trim()
      if (line.includes(']')) {
        try {
          fm[currentKey] = JSON.parse(
            arrayBuf
              .replace(/'/g, '"')
              .replace(/,\s*]/g, ']')
          )
        } catch {
          fm[currentKey] = arrayBuf
            .replace(/^\s*\[|\]\s*$/g, '')
            .split(',')
            .map((s) => s.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        }
        collectingArray = false
        arrayBuf = ''
      }
      continue
    }

    const m = line.match(/^(\w+):\s*(.*)$/)
    if (!m) continue
    const [, key, val] = m
    currentKey = key
    const trimmed = val.trim()

    if (trimmed.startsWith('[')) {
      if (trimmed.includes(']')) {
        try {
          fm[key] = JSON.parse(trimmed.replace(/'/g, '"'))
        } catch {
          fm[key] = trimmed
            .replace(/^\[|\]$/g, '')
            .split(',')
            .map((s) => s.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        }
      } else {
        collectingArray = true
        arrayBuf = trimmed
      }
    } else if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
      fm[key] = trimmed.replace(/^["']|["']$/g, '')
    } else {
      fm[key] = trimmed.replace(/^["']|["']$/g, '')
    }
  }

  return { fm, body: match[2] }
}

// Genera frontmatter YAML del nuevo schema
const generateNewFrontmatter = (data) => {
  const lines = ['---']
  lines.push(`title: ${JSON.stringify(data.title)}`)
  lines.push(`published: ${data.published}`)
  if (data.updatedAt) lines.push(`updatedAt: ${data.updatedAt}`)
  lines.push(`draft: false`)
  lines.push(`featured: false`)
  lines.push(`description: ${JSON.stringify(data.description)}`)
  lines.push(`category: ${data.category}`)
  lines.push(`formato: concepto`)
  lines.push(`nivel: intermedio`)
  if (data.tags && data.tags.length) {
    lines.push(`tags:`)
    for (const t of data.tags) lines.push(`  - ${JSON.stringify(t)}`)
  } else {
    lines.push(`tags: []`)
  }
  if (data.image) lines.push(`image: ${data.image}`)
  lines.push(`author: jean-paul`)
  lines.push(`reviewedBy: jean-paul`)
  lines.push(`aiAssisted: false`)
  lines.push('---')
  return lines.join('\n')
}

// Asegura que title cumpla 10-80 chars
const fitTitle = (title) => {
  const t = title.trim()
  if (t.length >= 10 && t.length <= 80) return t
  if (t.length > 80) {
    // Truncar en el último espacio antes de 80
    const cut = t.slice(0, 80).lastIndexOf(' ')
    return (cut > 30 ? t.slice(0, cut) : t.slice(0, 80)).trim()
  }
  // Si es muy corto, agregar contexto (raro pero por las dudas)
  return t.length >= 10 ? t : `${t} (Mundo Ingeniería)`
}

// Asegura description 50-180 chars
const fitDescription = (desc, fallbackBody) => {
  let d = (desc || '').trim()
  if (d.length >= 50 && d.length <= 180) return d
  if (d.length > 180) {
    const cut = d.slice(0, 180).lastIndexOf('. ')
    return (cut > 100 ? d.slice(0, cut + 1) : d.slice(0, 177) + '...').trim()
  }
  // Si es muy corta, sumamos contexto del body
  if (fallbackBody) {
    const firstPar = fallbackBody.replace(/\n+/g, ' ').replace(/[#*]/g, '').trim().slice(0, 200)
    const combined = (d + ' ' + firstPar).trim()
    if (combined.length >= 50) {
      return combined.length > 180
        ? combined.slice(0, 177).trim() + '...'
        : combined
    }
  }
  return d || 'Artículo de Mundo Ingeniería sobre maquinaria pesada, mecánica automotriz e ingeniería aplicada para profesionales y estudiantes de Latinoamérica.'
}

// ─── Main migration ──────────────────────────────────────────────────

async function migrate() {
  const stats = {
    total: 0,
    migrated: 0,
    errors: [],
    warnings: [],
    byCategory: {},
    slugCollisions: 0,
  }

  await mkdir(NEW_IMG_DIR, { recursive: true })

  // Borrar los posts placeholder de Nexo
  const existing = await readdir(TARGET).catch(() => [])
  for (const f of existing) {
    if (f.endsWith('.md')) {
      const p = path.join(TARGET, f)
      // Solo borrar los .md que son de Nexo (no los nuevos que vamos a crear)
      await import('node:fs/promises').then(({ rm }) => rm(p))
    }
  }

  const seenSlugs = new Set()

  for (const folder of ['blog', 'news']) {
    const dir = path.join(ARCHIVE, folder)
    if (!existsSync(dir)) continue
    const files = await readdir(dir)

    for (const filename of files) {
      if (!filename.endsWith('.md') && !filename.endsWith('.mdx')) continue
      stats.total++

      const filepath = path.join(dir, filename)
      const raw = await readFile(filepath, 'utf-8')
      const { fm, body } = parseFrontmatter(raw)

      if (!fm) {
        stats.errors.push(`${filename}: no frontmatter parseable`)
        continue
      }

      const title = fitTitle(fm.title || filename.replace(/\.md$/, ''))
      const description = fitDescription(fm.description, body)
      const published = parseDate(fm.pubDate) || '2024-01-01'
      const category = normalizeCategory(fm.category)
      const imageName = extractImageName(fm.heroImage)
      const image = imageName ? `/images/posts/${imageName}` : undefined
      const tags = Array.isArray(fm.tags)
        ? fm.tags.map((t) => slugify(t)).filter(Boolean).slice(0, 10)
        : []

      let slug = slugify(filename.replace(/\.md$/, ''))
      if (seenSlugs.has(slug)) {
        slug = `${slug}-${folder}`
        stats.slugCollisions++
      }
      seenSlugs.add(slug)

      const newFm = generateNewFrontmatter({
        title,
        description,
        published,
        category,
        tags,
        image,
      })

      const newContent = `${newFm}\n\n${body.trim()}\n`
      const outPath = path.join(TARGET, `${slug}.md`)
      await writeFile(outPath, newContent, 'utf-8')

      stats.migrated++
      stats.byCategory[category] = (stats.byCategory[category] || 0) + 1
    }
  }

  return stats
}

// ─── Image migration ─────────────────────────────────────────────────

async function migrateImages() {
  const stats = { copied: 0, skipped: 0, errors: [] }

  const sources = [
    path.join(PUBLIC_DIR, 'mecanica_automotriz'),
    path.join(PUBLIC_DIR, 'news'),
    path.join(PUBLIC_DIR, 'images'),
  ]

  for (const src of sources) {
    if (!existsSync(src)) continue
    const entries = await readdir(src, { withFileTypes: true })
    for (const e of entries) {
      if (!e.isFile()) continue
      const srcPath = path.join(src, e.name)
      const destPath = path.join(NEW_IMG_DIR, e.name)
      if (existsSync(destPath)) {
        stats.skipped++
        continue
      }
      try {
        await copyFile(srcPath, destPath)
        stats.copied++
      } catch (err) {
        stats.errors.push(`${e.name}: ${err.message}`)
      }
    }
  }

  return stats
}

// ─── Run ─────────────────────────────────────────────────────────────

console.log('━━━━━ Migración Mundo Ingeniería → schema nuevo ━━━━━\n')

console.log('Paso 1: Copiando imágenes a public/images/posts/...')
const imgStats = await migrateImages()
console.log(`  ✓ ${imgStats.copied} copiadas | ${imgStats.skipped} ya existían | ${imgStats.errors.length} errores\n`)

console.log('Paso 2: Migrando posts...')
const stats = await migrate()
console.log(`  ✓ ${stats.migrated}/${stats.total} migrados`)
if (stats.slugCollisions > 0) console.log(`  ⚠️  ${stats.slugCollisions} slug collisions (resueltas con sufijo)`)
console.log('\n  Por categoría:')
for (const [cat, n] of Object.entries(stats.byCategory).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${cat}: ${n}`)
}

if (stats.errors.length > 0) {
  console.log(`\n  Errores (${stats.errors.length}):`)
  for (const e of stats.errors.slice(0, 10)) console.log(`    - ${e}`)
  if (stats.errors.length > 10) console.log(`    ... y ${stats.errors.length - 10} más`)
}

console.log('\n━━━━━ Migración completa ━━━━━')

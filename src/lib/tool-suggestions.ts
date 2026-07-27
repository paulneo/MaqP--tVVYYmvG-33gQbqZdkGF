/**
 * Sistema de sugerencia automática de calculadoras para posts.
 *
 * Dado un post (slug, category, tags), devuelve la calculadora más relevante
 * de /herramientas/. Se usa desde src/pages/posts/[...slug].astro para
 * insertar un callout visual automáticamente — sin necesidad de tocar cada
 * archivo .md de los 561 posts.
 *
 * Reglas: se prioriza por match en el slug del post (más específico), luego
 * por tags, y finalmente por category general.
 */

import { getToolBySlug, type Tool } from './tools'

type PostContext = {
  slug: string
  category?: string
  tags?: string[]
  title?: string
}

// Regla: si el slug del post contiene alguno de estos keywords, sugerir esta calculadora.
// Orden importa: la primera que matchea gana.
const SLUG_RULES: { keywords: RegExp; toolSlug: string }[] = [
  // Hormigón / concreto
  { keywords: /hormig(o|ó)n|concreto|cubicaje/, toolSlug: 'cubicaje-de-hormigon' },
  { keywords: /cemento|dosificaci(o|ó)n|mezcla-concreto/, toolSlug: 'bolsas-de-cemento-por-metro-cubico' },

  // Ladrillos / mampostería
  { keywords: /ladrillo|mamposter(i|í)a|muro-de-ladrillo/, toolSlug: 'ladrillos-por-metro-cuadrado' },

  // Acero
  { keywords: /acero|varilla|refuerzo|kilos-acero|barra-corrugada/, toolSlug: 'kilos-de-acero-por-varilla' },

  // Pintura
  { keywords: /pintura|pintar|barniz|esmalte/, toolSlug: 'pintura-litros-por-metro-cuadrado' },

  // Agua / tanques
  { keywords: /tanque-agua|cisterna|volumen-tanque|tinaco/, toolSlug: 'volumen-tanque-cisterna' },

  // Techos
  { keywords: /calamina|teja|techo|cubierta-metalica|panel-sandwich/, toolSlug: 'calculadora-techo-calamina-tejas' },

  // Consumo eléctrico
  { keywords: /consumo-electr|kwh|factura-luz|electrodomest|watt/, toolSlug: 'consumo-electrico-kwh-costo' },

  // Escaleras
  { keywords: /escalera|escalones|huella-contrahuella|peldan/, toolSlug: 'calculo-de-escaleras' },

  // Presupuesto obra
  { keywords: /presupuesto-obra|cuanto-cuesta-construir|precio-construccion|costo-m2/, toolSlug: 'presupuesto-construccion-por-metro-cuadrado' },

  // Maquinaria pesada — excavadora
  { keywords: /rendimiento-excavadora|productividad-excavadora|m3-hora/, toolSlug: 'rendimiento-de-excavadora' },
  { keywords: /costo-hora|precio-hora-maquinaria|costo-operacion/, toolSlug: 'costo-hora-operacion-excavadora' },
  { keywords: /consumo-combustible|litros-diesel|combustible-maquinaria/, toolSlug: 'consumo-combustible-maquinaria' },
  { keywords: /amortizacion|depreciacion|vida-util-maquinaria|valor-contable/, toolSlug: 'amortizacion-maquinaria-pesada' },
]

// Fallback por categoría — si ningún slug matchea, sugerir según la categoría del post.
const CATEGORY_FALLBACK: Record<string, string> = {
  'maquinaria-pesada': 'costo-hora-operacion-excavadora',
  'mecanica-automotriz': 'consumo-combustible-maquinaria',
  'construccion': 'cubicaje-de-hormigon',
  'arquitectura': 'calculo-de-escaleras',
  'ingenieria-basica': 'consumo-electrico-kwh-costo',
}

// Regla especial: si el slug del post contiene alguno de estos keywords en tags,
// también matchear.
const TAG_MAP: Record<string, string> = {
  hormigon: 'cubicaje-de-hormigon',
  concreto: 'cubicaje-de-hormigon',
  cemento: 'bolsas-de-cemento-por-metro-cubico',
  ladrillos: 'ladrillos-por-metro-cuadrado',
  acero: 'kilos-de-acero-por-varilla',
  pintura: 'pintura-litros-por-metro-cuadrado',
  techo: 'calculadora-techo-calamina-tejas',
  calamina: 'calculadora-techo-calamina-tejas',
  escalera: 'calculo-de-escaleras',
  agua: 'volumen-tanque-cisterna',
  cisterna: 'volumen-tanque-cisterna',
  electricidad: 'consumo-electrico-kwh-costo',
  consumo: 'consumo-electrico-kwh-costo',
  excavadora: 'rendimiento-de-excavadora',
  combustible: 'consumo-combustible-maquinaria',
  diesel: 'consumo-combustible-maquinaria',
  amortizacion: 'amortizacion-maquinaria-pesada',
  depreciacion: 'amortizacion-maquinaria-pesada',
  presupuesto: 'presupuesto-construccion-por-metro-cuadrado',
}

/**
 * Devuelve la herramienta más relevante para el post dado, o null si no hay match.
 */
export function suggestToolForPost(ctx: PostContext): Tool | null {
  const slug = ctx.slug.toLowerCase()

  // Paso 1: match por slug (más específico)
  for (const rule of SLUG_RULES) {
    if (rule.keywords.test(slug)) {
      const tool = getToolBySlug(rule.toolSlug)
      if (tool && tool.status === 'active') return tool
    }
  }

  // Paso 2: match por tags
  if (ctx.tags && ctx.tags.length > 0) {
    for (const tag of ctx.tags) {
      const tagLower = tag.toLowerCase()
      for (const [key, toolSlug] of Object.entries(TAG_MAP)) {
        if (tagLower.includes(key)) {
          const tool = getToolBySlug(toolSlug)
          if (tool && tool.status === 'active') return tool
        }
      }
    }
  }

  // Paso 3: fallback por categoría
  if (ctx.category && CATEGORY_FALLBACK[ctx.category]) {
    const tool = getToolBySlug(CATEGORY_FALLBACK[ctx.category])
    if (tool && tool.status === 'active') return tool
  }

  return null
}

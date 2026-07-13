/**
 * Registro central de todas las herramientas / calculadoras del sitio.
 *
 * Cada herramienta declara aquí su metadata. La landing `/herramientas/` y
 * cada página individual `/herramientas/{slug}/` leen de este registro para
 * construir grids, breadcrumbs, structured data y links relacionados.
 *
 * Para agregar una calculadora nueva:
 *   1. Añadir su entrada al array `TOOLS`.
 *   2. Crear `src/pages/herramientas/{slug}.astro` importando el ToolLayout
 *      y el island Svelte con la lógica.
 *   3. (Opcional) crear el island en `src/components/tools/{Componente}.svelte`.
 */

export type ToolCategory =
  | 'construccion'
  | 'maquinaria'
  | 'mecanica-automotriz'
  | 'arquitectura'
  | 'ingenieria-general'

export type Tool = {
  /** Slug de la URL: /herramientas/{slug}/ */
  slug: string
  /** Título mostrado en el header + <title> del SEO */
  title: string
  /** Descripción corta (meta description + card en landing) */
  description: string
  /** Categoría para agrupar en la landing */
  category: ToolCategory
  /** Icono de Iconify (ej: 'material-symbols:calculate-outline') */
  icon: string
  /** Slug del post educativo relacionado (para cross-link) */
  relatedPost?: string
  /** Slugs de otras herramientas relacionadas */
  relatedTools?: string[]
  /** Keywords para SEO */
  keywords: string[]
  /** Volumen aprox. de búsqueda mensual en Latam (opcional, para priorización interna) */
  searchVolume?: number
  /** Estado de la herramienta */
  status: 'active' | 'coming-soon'
  /** Nivel de la herramienta */
  tier: 'free' | 'pro'
}

export const CATEGORY_LABEL: Record<ToolCategory, string> = {
  construccion: 'Construcción',
  maquinaria: 'Maquinaria pesada',
  'mecanica-automotriz': 'Mecánica automotriz',
  arquitectura: 'Arquitectura',
  'ingenieria-general': 'Ingeniería general',
}

export const CATEGORY_DESCRIPTION: Record<ToolCategory, string> = {
  construccion:
    'Cálculos de obra: cubicaje, materiales, cimentaciones, escalones y presupuestos.',
  maquinaria:
    'Costo de operación, comparativas de modelos, consumos y planificación de flota.',
  'mecanica-automotriz':
    'Torque, transmisión, consumo y diagnóstico técnico automotriz.',
  arquitectura:
    'Áreas, superficies, escalas y cálculos aplicados al diseño.',
  'ingenieria-general':
    'Conversión de unidades, resistencia de materiales y utilidades técnicas.',
}

export const CATEGORY_ICON: Record<ToolCategory, string> = {
  construccion: 'material-symbols:construction',
  maquinaria: 'material-symbols:agriculture',
  'mecanica-automotriz': 'material-symbols:garage',
  arquitectura: 'material-symbols:architecture',
  'ingenieria-general': 'material-symbols:engineering',
}

export const TOOLS: Tool[] = [
  {
    slug: 'cubicaje-de-hormigon',
    title: 'Calculadora de cubicaje de hormigón',
    description:
      'Calculá los m³ de hormigón necesarios para losas, columnas, vigas y zapatas. Con conversión a bolsas de cemento, arena y agregado.',
    category: 'construccion',
    icon: 'material-symbols:foundation',
    relatedPost: 'como-se-calcula-el-cubicaje-de-hormigon',
    keywords: [
      'cubicaje hormigón',
      'metros cúbicos hormigón',
      'cálculo concreto',
      'hormigón por m2',
      'bolsas de cemento',
    ],
    searchVolume: 5000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'ladrillos-por-metro-cuadrado',
    title: 'Calculadora de ladrillos por metro cuadrado',
    description:
      'Estimá cuántos ladrillos necesitás según las dimensiones de la pared y el tipo de ladrillo (cerámico, hueco, macizo). Incluye desperdicio recomendado.',
    category: 'construccion',
    icon: 'material-symbols:grid-4x4',
    relatedPost: 'cuantos-ladrillos-por-metro-cuadrado-de-pared',
    keywords: [
      'ladrillos por metro cuadrado',
      'cuantos ladrillos necesito',
      'cálculo mampostería',
      'ladrillos por m2',
    ],
    searchVolume: 3000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'costo-hora-operacion-excavadora',
    title: 'Calculadora de costo por hora de operación de excavadora',
    description:
      'Calculá cuánto cuesta operar una excavadora por hora: combustible, mantenimiento, depreciación, operador y utilidad. Base para presupuestar obras.',
    category: 'maquinaria',
    icon: 'material-symbols:oil-barrel',
    keywords: [
      'costo hora excavadora',
      'precio hora maquinaria',
      'costo operativo excavadora',
      'presupuesto operación',
    ],
    searchVolume: 800,
    status: 'active',
    tier: 'free',
  },
]

/** Devuelve las herramientas activas (excluye coming-soon) */
export function getActiveTools(): Tool[] {
  return TOOLS.filter((t) => t.status === 'active')
}

/** Agrupa herramientas por categoría */
export function getToolsByCategory(): Record<ToolCategory, Tool[]> {
  const grouped = {} as Record<ToolCategory, Tool[]>
  for (const tool of getActiveTools()) {
    if (!grouped[tool.category]) grouped[tool.category] = []
    grouped[tool.category].push(tool)
  }
  return grouped
}

/** Busca una herramienta por slug */
export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug)
}

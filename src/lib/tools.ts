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
  {
    slug: 'kilos-de-acero-por-varilla',
    title: 'Calculadora de kilos de acero por varilla',
    description:
      'Calculá el peso en kilos de las varillas de acero según el diámetro (6, 8, 10, 12, 16, 20, 25 mm) y la longitud. Incluye costo total estimado.',
    category: 'construccion',
    icon: 'fa6-solid:helmet-safety',
    keywords: [
      'kilos varilla acero',
      'peso varilla',
      'cuantos kilos pesa varilla del 12',
      'acero de refuerzo por metro',
      'cálculo acero obra',
    ],
    searchVolume: 4000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'bolsas-de-cemento-por-metro-cubico',
    title: 'Calculadora de bolsas de cemento por m³ de hormigón',
    description:
      'Calculá cuántas bolsas de cemento, arena, grava y agua necesitás por metro cúbico de hormigón según la resistencia (H15, H21, H25, H30, H40).',
    category: 'construccion',
    icon: 'material-symbols:construction',
    keywords: [
      'bolsas de cemento por metro cubico',
      'dosificación hormigón',
      'cemento por m3',
      'proporción cemento arena grava',
      'mezcla de concreto',
    ],
    searchVolume: 6000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'rendimiento-de-excavadora',
    title: 'Calculadora de rendimiento de excavadora (m³/hora)',
    description:
      'Estimá la producción real de una excavadora en m³/hora según capacidad del cucharón, tiempo de ciclo, factor de llenado y eficiencia operativa.',
    category: 'maquinaria',
    icon: 'fa6-solid:tractor',
    relatedTools: ['costo-hora-operacion-excavadora', 'consumo-combustible-maquinaria'],
    keywords: [
      'rendimiento excavadora',
      'producción excavadora m3 hora',
      'productividad excavadora',
      'cálculo rendimiento maquinaria',
    ],
    searchVolume: 1500,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'consumo-combustible-maquinaria',
    title: 'Calculadora de consumo de combustible de maquinaria pesada',
    description:
      'Calculá el consumo de diesel y el costo total por horas de operación según el tipo y tamaño de máquina (excavadora, bulldozer, cargador, motoniveladora).',
    category: 'maquinaria',
    icon: 'material-symbols:local-gas-station',
    relatedTools: ['costo-hora-operacion-excavadora', 'rendimiento-de-excavadora'],
    keywords: [
      'consumo combustible maquinaria',
      'litros diesel por hora',
      'consumo excavadora',
      'consumo bulldozer',
      'costo combustible obra',
    ],
    searchVolume: 2500,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'presupuesto-construccion-por-metro-cuadrado',
    title: 'Calculadora de presupuesto de construcción por m²',
    description:
      'Estimá el costo total de construir una casa en Latam según país (Perú, México, Colombia, Argentina, Chile, Uruguay, Bolivia) y calidad (económica, estándar, premium).',
    category: 'construccion',
    icon: 'material-symbols:home-work',
    keywords: [
      'cuanto cuesta construir una casa',
      'presupuesto construcción por metro cuadrado',
      'costo m2 construcción Latam',
      'presupuesto obra Perú México Colombia',
      'costo construcción casa',
    ],
    searchVolume: 12000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'calculo-de-escaleras',
    title: 'Calculadora de escaleras: huella, contrahuella y escalones',
    description:
      'Calculá la cantidad de escalones, huella y contrahuella de tu escalera según la altura del piso y la regla de Blondel. Incluye validación de comodidad.',
    category: 'arquitectura',
    icon: 'material-symbols:stairs',
    keywords: [
      'cálculo de escaleras',
      'huella y contrahuella',
      'cuantos escalones necesito',
      'regla de Blondel',
      'diseño escalera residencial',
    ],
    searchVolume: 5000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'amortizacion-maquinaria-pesada',
    title: 'Calculadora de amortización de maquinaria pesada',
    description:
      'Calculá la depreciación anual, por hora y el valor contable de tu maquinaria pesada. Método lineal + método por horómetro para excavadoras, cargadores y camiones.',
    category: 'maquinaria',
    icon: 'material-symbols:trending-down',
    relatedTools: ['costo-hora-operacion-excavadora'],
    keywords: [
      'amortización maquinaria pesada',
      'depreciación excavadora',
      'valor contable maquinaria',
      'depreciación por hora',
      'vida útil maquinaria',
    ],
    searchVolume: 900,
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

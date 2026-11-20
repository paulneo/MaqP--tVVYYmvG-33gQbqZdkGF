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
      'Calcule los m³ de hormigón necesarios para losas, columnas, vigas y zapatas. Con conversión a bolsas de cemento, arena y agregado.',
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
      'Estime cuántos ladrillos necesita según las dimensiones de la pared y el tipo de ladrillo (cerámico, hueco, macizo). Incluye desperdicio recomendado.',
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
      'Calcule cuánto cuesta operar una excavadora por hora: combustible, mantenimiento, depreciación, operador y utilidad. Base para presupuestar obras.',
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
      'Calcule el peso en kilos de las varillas de acero según el diámetro (6, 8, 10, 12, 16, 20, 25 mm) y la longitud. Incluye costo total estimado.',
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
      'Calcule cuántas bolsas de cemento, arena, grava y agua necesita por metro cúbico de hormigón según la resistencia (H15, H21, H25, H30, H40).',
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
      'Estime la producción real de una excavadora en m³/hora según capacidad del cucharón, tiempo de ciclo, factor de llenado y eficiencia operativa.',
    category: 'maquinaria',
    icon: 'fa6-solid:tractor',
    relatedTools: ['numero-de-volquetes-por-excavadora', 'esponjamiento-de-suelos', 'costo-hora-operacion-excavadora'],
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
      'Calcule el consumo de diesel y el costo total por horas de operación según el tipo y tamaño de máquina (excavadora, bulldozer, cargador, motoniveladora).',
    category: 'maquinaria',
    icon: 'material-symbols:local-gas-station',
    relatedTools: ['costo-hora-operacion-excavadora', 'rendimiento-de-excavadora', 'produccion-bulldozer'],
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
      'Estime el costo total de construir una casa en Latam según país (Perú, México, Colombia, Argentina, Chile, Uruguay, Bolivia) y calidad (económica, estándar, premium).',
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
      'Calcule la cantidad de escalones, huella y contrahuella de su escalera según la altura del piso y la regla de Blondel. Incluye validación de comodidad.',
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
      'Calcule la depreciación anual, por hora y el valor contable de su maquinaria pesada. Método lineal + método por horómetro para excavadoras, cargadores y camiones.',
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
  {
    slug: 'pintura-litros-por-metro-cuadrado',
    title: 'Calculadora de pintura: litros por m² con descuento de aberturas',
    description:
      'Calcule cuántos litros de pintura necesita según superficie (yeso, cemento, madera, hierro), cantidad de manos y descuento automático de puertas y ventanas.',
    category: 'construccion',
    icon: 'material-symbols:format-paint',
    keywords: [
      'calculadora pintura',
      'litros pintura por metro cuadrado',
      'cuanta pintura necesito',
      'rendimiento pintura',
      'pintura pared m2',
    ],
    searchVolume: 20000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'volumen-tanque-cisterna',
    title: 'Calculadora de volumen de tanque y cisterna de agua',
    description:
      'Calcule el volumen en litros y m³ de su tanque o cisterna: rectangular, cilíndrico vertical, cilíndrico horizontal o tinaco esférico. Incluye duración según consumo familiar.',
    category: 'ingenieria-general',
    icon: 'material-symbols:water-drop',
    keywords: [
      'volumen tanque agua',
      'capacidad cisterna litros',
      'calculadora tanque cilíndrico',
      'volumen tinaco',
      'litros cisterna',
    ],
    searchVolume: 15000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'calculadora-techo-calamina-tejas',
    title: 'Calculadora de techo: calamina, tejas y área total',
    description:
      'Calcule los m² de su techo (1 agua, 2 aguas, 4 aguas o plano) y la cantidad de calamina, tejas o panel sándwich necesaria según el material elegido.',
    category: 'construccion',
    icon: 'material-symbols:roofing',
    keywords: [
      'calculadora techo calamina',
      'cuantas tejas por metro cuadrado',
      'área techo dos aguas',
      'calamina metros cuadrados',
      'pendiente techo',
    ],
    searchVolume: 12000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'consumo-electrico-kwh-costo',
    title: 'Calculadora de consumo eléctrico en kWh y costo mensual',
    description:
      'Calcule cuánto consume cada electrodoméstico en kWh y cuánto paga por mes en su factura de luz. Precios por país (Perú, México, Colombia, Argentina, Chile).',
    category: 'ingenieria-general',
    icon: 'material-symbols:electric-bolt',
    keywords: [
      'calculadora consumo eléctrico',
      'cuánto consume mi aire acondicionado',
      'kwh factura luz',
      'consumo electrodomésticos',
      'costo energía eléctrica',
    ],
    searchVolume: 25000,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'agregados-hormigon-arena-grava',
    title: 'Calculadora de agregados para hormigón (arena, grava, cemento)',
    description:
      'Calcule kilos de cemento, m³ de arena y m³ de grava según proporción (1:2:3, 1:3:5, 1:1.5:3) y volumen de hormigón. Con desperdicio ajustable.',
    category: 'construccion',
    icon: 'material-symbols:landscape',
    relatedTools: ['bolsas-de-cemento-por-metro-cubico', 'cubicaje-de-hormigon'],
    keywords: [
      'agregados hormigón',
      'cuanta arena y grava para 1 m3',
      'proporción hormigón 1 2 3',
      'dosificación cemento arena grava',
      'cálculo agregados obra',
    ],
    searchVolume: 4500,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'consumo-def-adblue-flota',
    title: 'Calculadora de consumo de DEF/AdBlue para flota Tier 4',
    description:
      'Estime litros de AdBlue por mes según consumo diésel de su flota y ratio SCR típico (3-6%). Con costo mensual y proyección anual.',
    category: 'maquinaria',
    icon: 'material-symbols:water-drop',
    relatedTools: ['consumo-combustible-maquinaria', 'costo-hora-operacion-excavadora'],
    keywords: [
      'consumo adblue',
      'def flota diesel',
      'cuánto adblue por litro diésel',
      'scr tier 4',
      'costo adblue mensual',
    ],
    searchVolume: 1200,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'encofrado-madera-por-m2',
    title: 'Calculadora de encofrado de madera por m² (losa, muro, columna)',
    description:
      'Calcule tablero, puntales y clavos necesarios para encofrar losas, muros o columnas por m². Con reuso configurable y desperdicio ajustable.',
    category: 'construccion',
    icon: 'material-symbols:carpenter',
    relatedTools: ['cubicaje-de-hormigon', 'kilos-de-acero-por-varilla'],
    keywords: [
      'encofrado madera por m2',
      'cuanta madera para encofrado',
      'puntales por metro cuadrado',
      'cálculo encofrado losa',
      'materiales encofrado',
    ],
    searchVolume: 2200,
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'fuerza-cilindro-hidraulico',
    title: 'Calculadora de fuerza de cilindro hidráulico',
    description:
      'Calcule la fuerza de empuje y de retracción de un cilindro hidráulico según diámetro, vástago y presión, y su velocidad según el caudal de la bomba.',
    category: 'maquinaria',
    icon: 'material-symbols:compress',
    relatedPost: 'principios-hidraulica',
    relatedTools: ['conversor-presion-torque', 'rendimiento-de-excavadora'],
    keywords: [
      'fuerza cilindro hidráulico',
      'cálculo cilindro hidráulico',
      'fuerza de empuje cilindro',
      'velocidad cilindro hidráulico caudal',
      'toneladas cilindro hidráulico',
    ],
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'conversor-presion-torque',
    title: 'Conversor de presión y torque (bar, psi, MPa, N·m, lb·ft)',
    description:
      'Convierta presión entre bar, psi, MPa, kPa, kgf/cm² y atm, y torque entre N·m, lb·ft, lb·in y kgf·m. Útil para manuales de taller y maquinaria.',
    category: 'ingenieria-general',
    icon: 'material-symbols:swap-horiz',
    relatedTools: ['fuerza-cilindro-hidraulico', 'consumo-combustible-maquinaria'],
    keywords: [
      'convertir bar a psi',
      'psi a bar',
      'convertir lb ft a nm',
      'conversor de torque',
      'kgf/cm2 a psi',
    ],
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'produccion-bulldozer',
    title: 'Calculadora de producción de bulldozer (m³/hora)',
    description:
      'Estime la producción de un tractor de orugas empujando material: capacidad de la hoja, distancia de empuje, velocidades y factores de eficiencia.',
    category: 'maquinaria',
    icon: 'fa6-solid:snowplow',
    relatedTools: ['esponjamiento-de-suelos', 'rendimiento-de-excavadora', 'consumo-combustible-maquinaria'],
    keywords: [
      'producción bulldozer',
      'rendimiento tractor de orugas',
      'cálculo producción tractor',
      'rendimiento bulldozer m3 hora',
    ],
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'produccion-motoniveladora',
    title: 'Calculadora de rendimiento de motoniveladora',
    description:
      'Calcule el área que nivela una motoniveladora por hora y el tiempo para perfilar un tramo de vía según velocidad, ancho efectivo y número de pasadas.',
    category: 'maquinaria',
    icon: 'material-symbols:road',
    relatedTools: ['produccion-bulldozer', 'consumo-combustible-maquinaria'],
    keywords: [
      'rendimiento motoniveladora',
      'producción motoniveladora m2 hora',
      'cálculo motoniveladora pasadas',
      'tiempo de perfilado motoniveladora',
    ],
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'numero-de-volquetes-por-excavadora',
    title: 'Calculadora de número de volquetes por excavadora',
    description:
      'Calcule cuántos volquetes o camiones necesita una excavadora para no detenerse: pases por camión, ciclo de acarreo y factor de acoplamiento.',
    category: 'maquinaria',
    icon: 'material-symbols:local-shipping-outline',
    relatedTools: ['rendimiento-de-excavadora', 'esponjamiento-de-suelos', 'consumo-combustible-maquinaria'],
    keywords: [
      'cuántos volquetes necesito',
      'número de camiones por excavadora',
      'ciclo de acarreo volquete',
      'factor de acoplamiento',
      'cálculo de volquetes',
    ],
    status: 'active',
    tier: 'free',
  },
  {
    slug: 'esponjamiento-de-suelos',
    title: 'Calculadora de esponjamiento de suelos (banco, suelto, compactado)',
    description:
      'Convierta volúmenes de tierra entre banco, suelto y compactado con el factor de esponjamiento y de contracción de cada material.',
    category: 'construccion',
    icon: 'fa6-solid:mound',
    relatedPost: 'tipos-de-suelo-en-ingenieria-civil',
    relatedTools: ['numero-de-volquetes-por-excavadora', 'rendimiento-de-excavadora', 'produccion-bulldozer'],
    keywords: [
      'factor de esponjamiento',
      'esponjamiento de suelos',
      'volumen suelto y compactado',
      'm3 banco a m3 suelto',
      'coeficiente de esponjamiento tierra',
    ],
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

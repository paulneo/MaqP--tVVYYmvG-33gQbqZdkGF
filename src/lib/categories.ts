/**
 * Metadata visual de las categorías de Mundo Ingeniería. Centralizado para
 * que cards, headers, páginas de categoría y home usen los mismos colores
 * e iconos.
 */

export type CategoryMeta = {
  slug: string
  label: string
  short: string          // versión corta para chips/kickers
  description: string
  icon: string           // nombre iconify
  bg: string             // tailwind bg class para fallback de cover
  text: string           // tailwind text class para iconos sobre el bg
  chip: string           // tailwind classes para el chip de categoría
  image?: string         // path a la imagen del card del home, fallback si no existe
}

export const CATEGORIES: Record<string, CategoryMeta> = {
  'maquinaria-pesada': {
    slug: 'maquinaria-pesada',
    label: 'Maquinaria pesada',
    short: 'Maquinaria',
    description: 'Excavadoras, cargadores, retroexcavadoras, sistemas hidráulicos, operación, mantenimiento y comparativas de equipos pesados.',
    icon: 'fa6-solid:tractor',
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-300',
    chip: 'text-amber-800 bg-amber-50 dark:text-amber-300 dark:bg-amber-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/maquinaria-pesada',
  },
  'mecanica-automotriz': {
    slug: 'mecanica-automotriz',
    label: 'Mecánica automotriz',
    short: 'Automotriz',
    description: 'Sistemas mecánicos y electrónicos de vehículos, frenos, ECU, sensores, diagnóstico y mantenimiento automotor.',
    icon: 'material-symbols:directions-car',
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-700 dark:text-red-300',
    chip: 'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/mecanica-automotriz',
  },
  'ingenieria-basica': {
    slug: 'ingenieria-basica',
    label: 'Ingeniería',
    short: 'Ingeniería',
    description: 'Conceptos técnicos aplicados al rubro: estructural, suelos, hidráulica, materiales y tecnología aplicada.',
    icon: 'material-symbols:engineering',
    bg: 'bg-violet-100 dark:bg-violet-900/30',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'text-violet-700 bg-violet-50 dark:text-violet-300 dark:bg-violet-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/ingenieria-basica',
  },
  'arquitectura': {
    slug: 'arquitectura',
    label: 'Arquitectura',
    short: 'Arquitectura',
    description: 'Diseño, planos, urbanismo, teoría arquitectónica y conceptos del oficio.',
    icon: 'material-symbols:architecture',
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/arquitectura',
  },
  'construccion': {
    slug: 'construccion',
    label: 'Construcción',
    short: 'Construcción',
    description: 'Obra, materiales, técnicas constructivas, cimentación y estructuras.',
    icon: 'fa6-solid:helmet-safety',
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-700 dark:text-orange-300',
    chip: 'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/construccion',
  },
  'electricidad': {
    slug: 'electricidad',
    label: 'Electricidad',
    short: 'Electricidad',
    description: 'Sistemas eléctricos, instalaciones, motores, controladores y electrotecnia aplicada.',
    icon: 'material-symbols:bolt',
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    text: 'text-yellow-700 dark:text-yellow-300',
    chip: 'text-yellow-700 bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/electricidad',
  },
  'glosario-y-guias': {
    slug: 'glosario-y-guias',
    label: 'Glosario y guías',
    short: 'Glosario',
    description: 'Definiciones, términos del oficio y guías de referencia rápida.',
    icon: 'material-symbols:menu-book',
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/30',
    image: 'https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/categories/glosario-y-guias',
  },
}

export const CATEGORY_LIST: CategoryMeta[] = [
  CATEGORIES['maquinaria-pesada'],
  CATEGORIES['mecanica-automotriz'],
  CATEGORIES['ingenieria-basica'],
  CATEGORIES['construccion'],
  CATEGORIES['arquitectura'],
  CATEGORIES['electricidad'],
  CATEGORIES['glosario-y-guias'],
]

export function getCategory(slug?: string): CategoryMeta | undefined {
  if (!slug) return undefined
  return CATEGORIES[slug]
}

export const FORMATO_LABEL: Record<string, string> = {
  'guia': 'Guía',
  'concepto': 'Concepto',
  'comparativa': 'Comparativa',
  'resumen': 'Resumen',
  'tutorial': 'Tutorial',
  'glosario': 'Glosario',
}

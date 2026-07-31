/**
 * i18n helpers para Mundo Ingeniería.
 *
 * Uso:
 *   import { useTranslations, getLocaleFromUrl } from '@/i18n'
 *   const t = useTranslations('es')  // o 'en'
 *   t('nav.home')  // → "Inicio"
 */

import es from './es.json'
import en from './en.json'

export const languages = {
  es: 'Español',
  en: 'English',
} as const

export const defaultLang = 'es' as const

export type Lang = keyof typeof languages

const translations: Record<Lang, any> = { es, en }

/**
 * Devuelve el idioma activo según la URL.
 * URLs /en/... → 'en'. Todas las demás → 'es' (default).
 */
export function getLocaleFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/')
  if (first === 'en') return 'en'
  return 'es'
}

/**
 * Hook de traducción. Devuelve una función que resuelve claves anidadas
 * como 'nav.home' contra el JSON del idioma correspondiente.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const parts = key.split('.')
    let value: any = translations[lang]
    for (const p of parts) {
      value = value?.[p]
      if (value === undefined) break
    }
    if (typeof value === 'string') return value
    // Fallback al español si la clave no existe en inglés
    if (lang !== 'es') {
      let fallback: any = translations.es
      for (const p of parts) {
        fallback = fallback?.[p]
        if (fallback === undefined) break
      }
      if (typeof fallback === 'string') return fallback
    }
    return key
  }
}

/**
 * Devuelve la URL equivalente en el otro idioma.
 * Usada por el LanguageSelector para navegar al gemelo.
 *
 * Ejemplo:
 *   currentPath='/posts/motor-cummins/', currentLang='es', targetLang='en'
 *   → '/en/posts/motor-cummins/'  (asume mismo slug; en producción puede ser distinto)
 */
export function getAlternateLangUrl(
  pathname: string,
  currentLang: Lang,
  targetLang: Lang,
): string {
  if (currentLang === targetLang) return pathname

  if (targetLang === 'en') {
    // Español → inglés: agregar /en/ al inicio
    return `/en${pathname}`
  }

  // Inglés → español: sacar /en/ del inicio
  if (pathname.startsWith('/en/')) {
    return pathname.replace(/^\/en/, '') || '/'
  }
  return pathname
}

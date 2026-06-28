import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Mundo Ingeniería',
  subtitle: 'Portal de ingeniería, maquinaria pesada, mecánica automotriz y tecnología — análisis, guías técnicas y noticias para profesionales y estudiantes de Latinoamérica.',
  lang: 'es',
  themeColor: {
    hue: 170,         // mantener teal por ahora; se puede ajustar al rebrand final
    fixed: true,
  },
  banner: {
    enable: false,
    src: '',
  },
  favicon: [
    {
      src: 'favicon.png',
    },
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    { name: 'Maquinaria',  url: '/categorias/maquinaria-pesada/',   external: false },
    { name: 'Automotriz',  url: '/categorias/mecanica-automotriz/', external: false },
    { name: 'Ingeniería',  url: '/categorias/ingenieria-basica/',   external: false },
    { name: 'Categorías',  url: '/categorias/',                     external: false },
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: '',
  name: 'Mundo Ingeniería',
  bio: 'Portal técnico de ingeniería para Latinoamérica. Guías prácticas, análisis y noticias sobre maquinaria pesada, mecánica automotriz, ingeniería básica y tecnología aplicada.',
  links: [],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

/**
 * Google AdSense publisher ID — viene heredado del proyecto viejo
 * Mundo Ingeniería que ya tenía cuenta aprobada.
 * Si queda como string vacío, NO se carga el script de AdSense.
 */
export const adsenseId: string = 'ca-pub-7253543815310863'

/**
 * Google Analytics 4 measurement ID.
 * TODO: reemplazar por el measurement ID propio de Mundo Ingeniería
 * para conservar la historia de 12+ meses de tráfico ya acumulado.
 * Sacar del panel: GA4 → Admin → Data Streams → Web → arriba a la
 * derecha "ID de medición: G-XXXXXXXXX"
 */
export const ga4Id: string = 'G-M7K3WMX98Z'

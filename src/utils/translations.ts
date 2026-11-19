import { getCollection } from 'astro:content'
import { isPostPublishable } from './content-utils'

/**
 * Slugs that exist in BOTH languages. Only these pages may advertise an
 * alternate-language URL; pointing every page at /en/<path> produced
 * hundreds of 404s in Google Search Console.
 */
let cache: Promise<Set<string>> | undefined

export function getTranslatedSlugs(): Promise<Set<string>> {
  cache ??= (async () => {
    const [es, en] = await Promise.all([
      getCollection('posts', ({ data }) => isPostPublishable(data)),
      getCollection('posts-en', ({ data }) => isPostPublishable(data)),
    ])
    const esIds = new Set(es.map((p) => p.id))
    return new Set(en.map((p) => p.id).filter((id) => esIds.has(id)))
  })()
  return cache
}

/** Returns the post slug for /posts/<slug>/ or /en/posts/<slug>/, else null. */
export function postSlugFromPath(pathname: string): string | null {
  const m = pathname.match(/^(?:\/en)?\/posts\/([^/]+)\/?$/)
  return m ? m[1] : null
}

/** True when the page at `pathname` has a counterpart in the other language. */
export async function hasTranslation(pathname: string): Promise<boolean> {
  if (pathname === '/' || pathname === '/en/' || pathname === '/en') return true
  const slug = postSlugFromPath(pathname)
  if (!slug) return false
  return (await getTranslatedSlugs()).has(slug)
}

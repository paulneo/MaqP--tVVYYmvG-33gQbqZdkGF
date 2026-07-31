import { defineCollection, reference, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * Schema editorial de Mundo Ingeniería.
 *
 * Migrado a Content Layer (Astro 6+):
 *   - loader: glob({...}) reemplaza el detección automática antigua
 *   - Sin type: 'content' (deprecated en 6)
 *   - Ubicado en src/content.config.ts (no en src/content/config.ts)
 */

const FORMATOS = ['guia', 'concepto', 'comparativa', 'resumen', 'glosario', 'tutorial'] as const
const NIVELES = ['basico', 'intermedio', 'avanzado'] as const

const sourceSchema = z.object({
  title: z.string(),
  url: z.union([z.string().url(), z.literal('')]).optional(),
  author: z.string().optional(),
  year: z.number().int().optional(),
})

const faqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
})

const postsSchema = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    title: z.string().min(10).max(80),
    published: z.date(),
    draft: z.boolean().default(false),
    description: z.string().min(50).max(180).optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),

    updatedAt: z.date().optional(),
    formato: z.enum(FORMATOS).default('guia'),
    nivel: z.enum(NIVELES).default('basico'),
    featured: z.boolean().default(false),
    lang: z.string().default('es'),

    author: reference('authors').optional(),

    aiAssisted: z.boolean().default(false),
    reviewedBy: reference('authors').optional(),

    sources: z.array(sourceSchema).optional(),
    faq: z.array(faqItemSchema).optional(),

    related: z.array(z.string()).optional(),

    seo: z
      .object({
        canonical: z.string().url().optional(),
        ogImage: z.string().optional(),
        noindex: z.boolean().default(false),
      })
      .optional(),

    cover: z
      .object({
        src: image(),
        alt: z.string(),
        credit: z.string().optional(),
      })
      .optional(),
  })

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: postsSchema,
})

const postsEnCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts-en' }),
  schema: postsSchema,
})

const draftsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/drafts' }),
  schema: postsSchema,
})

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().min(40).max(500),
      avatar: image().optional(),
      email: z.string().email().optional(),
      social: z
        .object({
          twitter: z.string().url().optional(),
          linkedin: z.string().url().optional(),
          github: z.string().url().optional(),
          web: z.string().url().optional(),
        })
        .optional(),
    }),
})

const glosarioCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glosario' }),
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).default([]),
    category: z.string().optional(),
    short: z.string().min(20).max(220),
    related: z.array(z.string()).optional(),
    sources: z.array(sourceSchema).optional(),
    updatedAt: z.date().optional(),
  }),
})

const categoriesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().int().default(99),
  }),
})

const tagsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tags' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

export const collections = {
  posts: postsCollection,
  'posts-en': postsEnCollection,
  drafts: draftsCollection,
  authors: authorsCollection,
  glosario: glosarioCollection,
  categories: categoriesCollection,
  tags: tagsCollection,
}

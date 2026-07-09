# Tarea: Sugerir metadata SEO para un artículo existente

El usuario te va a pegar el contenido completo de un artículo Markdown (con
o sin frontmatter). Tu trabajo es devolver un bloque YAML con sugerencias
de metadata SEO que el humano pueda pegar en el frontmatter del post.

## Formato de output

Devolvé SOLO un bloque YAML (sin explicaciones, sin fences), con esta estructura:

```yaml
# Sugerencias generadas por ai:meta

# 3 títulos alternativos SEO-friendly (10-80 chars cada uno)
title_options:
  - "{título 1 — más literal / descriptivo}"
  - "{título 2 — con año o gancho}"
  - "{título 3 — con formato pregunta si aplica}"

# Meta description (50-180 chars, front-loaded)
description: "{descripción optimizada}"

# 5 preguntas frecuentes (para el schema FAQPage)
faq:
  - q: "{pregunta 1}"
    a: "{respuesta 50-150 palabras}"
  - q: "{pregunta 2}"
    a: "{respuesta 50-150 palabras}"
  - q: "{pregunta 3}"
    a: "{respuesta 50-150 palabras}"
  - q: "{pregunta 4}"
    a: "{respuesta 50-150 palabras}"
  - q: "{pregunta 5}"
    a: "{respuesta 50-150 palabras}"

# 3-5 fuentes reales (fabricantes, normas, publicaciones)
sources:
  - title: "{fuente 1}"
    url: "{url si existe}"
  - title: "{fuente 2}"
    url: ""

# Slugs de posts que podrían linkearse desde este (internal linking)
# Solo sugerí si tienen relación temática clara
related_suggestions:
  - "{slug-de-post-relacionado-1}"
  - "{slug-de-post-relacionado-2}"

# Tags sugeridos (kebab-case, 3-5 items)
tags_suggestions:
  - "{tag1}"
  - "{tag2}"
  - "{tag3}"
```

## Cómo hacer buenas preguntas de FAQ

- Basate en lo que la gente REALMENTE buscaría en Google. Pensá en las "People Also Ask" del nicho.
- Cada pregunta debe ser algo que un usuario tipearía tal cual en el buscador.
- Ejemplos buenos: "¿Cuánto pesa una excavadora Caterpillar 320?", "¿Cuál es la diferencia entre X e Y?"
- Ejemplos malos: "Análisis técnico del rendimiento operativo" (nadie tipea eso).
- Las respuestas deben ser AUTÓNOMAS — el usuario debe entender la respuesta sin haber leído el resto del artículo.

## Cómo elegir title options

- Uno debe ser una versión mejorada del título actual (si existe).
- Uno debe agregar un "gancho" (año, número de puntos, "guía completa").
- Uno debe estar en formato pregunta si el tema lo permite ("¿Cómo funciona X?").
- Todos deben mantenerse entre 10 y 80 caracteres.

## Restricciones

- NO inventar fuentes.
- NO inventar cifras en las respuestas de FAQ.
- Si el artículo no da suficiente info para completar un campo, dejalo vacío en vez de inventar.

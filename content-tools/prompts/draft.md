# Tarea: Redactar borrador a partir de outline

El usuario te va a pegar un outline (formato definido en outline.md). Tu
trabajo es devolver el artículo COMPLETO listo para publicar en Mundo
Ingeniería.

## Formato de output

Devolvé un archivo Markdown con frontmatter YAML + body:

```markdown
---
title: "{título del outline}"
published: {fecha actual en formato YYYY-MM-DD}
draft: true
featured: false
description: "{50-180 caracteres. Aparece en Google. Front-loaded con el value prop.}"
category: {slug de categoría}
formato: {formato del outline}
nivel: {nivel del outline}
tags:
  - "tag1"
  - "tag2"
  - "tag3"
image: ""
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "{pregunta 1}"
    a: "{respuesta completa, 50-150 palabras}"
  - q: "{pregunta 2}"
    a: "{respuesta completa}"
  - q: "{pregunta 3}"
    a: "{respuesta completa}"
sources:
  - title: "{fuente 1}"
    url: "{url si aplica, o vacío}"
  - title: "{fuente 2}"
    url: ""
---

{párrafo introductorio 2-3 oraciones — engancha al lector, plantea el problema o la pregunta}

## {H2 sección 1}

{contenido de la sección — 150-300 palabras típicamente}

### {H3 subsección si aplica}

{contenido}

## {H2 sección 2}

{...}

{...continuar con todas las secciones del outline}

## Conclusión

{2-3 oraciones cerrando el tema, con una nota sobre cuándo consultar un profesional si aplica}
```

## Reglas de redacción

- **Longitud objetivo**: la del outline. Si dice 1000-1500 palabras, apuntá a ese rango en el body.
- **Cifras**: cuando cites datos numéricos, verificá que sean correctos. Si dudás, escribí un rango razonable ("15 a 20 toneladas") en lugar de un número exacto inventado.
- **Sin adjetivos vacíos**: nada de "revolucionario", "sorprendente", "increíble".
- **Con ejemplos concretos**: cuando expliques un concepto abstracto, seguilo con un ejemplo tangible (marca+modelo, obra real, escenario típico).
- **Internal linking**: si conocés otro post relacionado en Mundo Ingeniería, sugerí un link en el body (formato: `[texto de anchor](/posts/slug-del-otro-post)`).
- **NO alucines fuentes**: en `sources`, solo incluí fuentes reales que existan (fabricantes reales, normas técnicas reales, publicaciones reales).

## Frontmatter — validaciones

- `title`: 10-80 caracteres exactos.
- `description`: 50-180 caracteres exactos.
- `category` debe ser uno de: maquinaria-pesada, mecanica-automotriz, ingenieria-basica, construccion, arquitectura, electricidad, glosario-y-guias.
- `formato`: guia, concepto, comparativa, tutorial, resumen, glosario.
- `nivel`: basico, intermedio, avanzado.
- `faq`: 3-5 items.
- `aiAssisted: true` (siempre, porque este script genera con IA).
- `draft: true` (siempre, porque el humano lo revisa antes de publicar).

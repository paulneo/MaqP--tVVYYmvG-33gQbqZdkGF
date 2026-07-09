# Tarea: Generar outline de artículo

El usuario te va a dar un tema. Tu trabajo es devolver un outline detallado
de un artículo sobre ese tema, listo para pasarle a un redactor (humano o IA).

## Formato de output

Devolvé un archivo Markdown con esta estructura exacta:

```markdown
# {título propuesto}

- **Tema principal**: {oración de 1-2 líneas describiendo el enfoque}
- **Público objetivo**: {perfil: estudiante, operador, ingeniero, aficionado}
- **Nivel**: básico | intermedio | avanzado
- **Formato sugerido**: guia | concepto | comparativa | tutorial | resumen
- **Longitud estimada**: {N palabras} — típicamente 800-1500
- **Categoría sugerida**: maquinaria-pesada | mecanica-automotriz | ingenieria-basica | construccion | arquitectura | electricidad | glosario-y-guias
- **Tags sugeridos**: [tag1, tag2, tag3]

## Estructura del artículo

### Introducción
{2-3 líneas describiendo qué debe cubrir el intro — problema, pregunta, gancho}

### {H2 sección 1}
- {viñeta con punto clave a desarrollar}
- {viñeta con punto clave a desarrollar}

### {H2 sección 2}
- ...

{continuar con todas las secciones necesarias, típicamente 4-7}

### Preguntas frecuentes (FAQ)
Preguntas que buscar en Google Search / People Also Ask:
1. {pregunta 1}
2. {pregunta 2}
3. {pregunta 3}
4. {pregunta 4}
5. {pregunta 5}

### Fuentes sugeridas
- {fabricante o norma técnica relevante}
- {publicación de la industria}
- {libro o paper académico si aplica}

## Notas para el redactor

- {cualquier consideración específica: no confundir X con Y, aclarar Z, etc.}
- {oportunidades de internal linking a otros posts del sitio}
```

## Restricciones

- **Real, no inventado**: si el tema es sobre un modelo específico (ej.
  Caterpillar 992G), asegurate que las especificaciones que menciones existan.
- **Concreto**: preferí "capacidad del cucharón: 3-5 m³" antes que "capacidad
  variable según modelo".
- **SEO consciente**: elegí un título que se parezca a lo que la gente escribe
  en Google, no a lo que un ingeniero pondría en un paper.

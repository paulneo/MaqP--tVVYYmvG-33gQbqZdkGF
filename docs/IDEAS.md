# Ideas y roadmap — Mundo Ingeniería

Este archivo es la brújula del proyecto. Todo lo que se nos ocurra que "algún día
haremos" va acá antes de olvidarlo. Priorizado por impacto real (revenue, SEO,
utilidad para el user), no por lo que suena más lindo.

**Cómo se usa este archivo:**
- Cada idea tiene una prioridad (🔴 alta, 🟡 media, 🟢 baja) y un estimado de esfuerzo.
- Cuando arrancamos algo, mover a la sección "En curso".
- Cuando se termina, mover a "Hecho" con la fecha.
- Si una idea deja de tener sentido, borrarla (no acumular ruido).

---

## 📍 Estado actual del proyecto (2026-07-13)

**Stack técnico:**
- Astro 5.18 + Svelte 5 + Tailwind 3.4
- Hosting: Netlify (`maquinariaspesadas` site, dominio custom `mundoingenieria.org`)
- Imágenes: Cloudinary (`vadks4nc`, folder `mundo-ingenieria`)
- CMS: Sveltia CMS en `/admin` con OAuth vía Cloudflare Worker
- Search: Pagefind (estático)

**Contenido:**
- 543 posts publicados en 7 categorías
- Concentración: `maquinaria-pesada` (335, 61%) + `mecanica-automotriz` (184, 33%)
- Otras 5 categorías suman 31 posts (6%) — ruido editorial

**Monetización:**
- Google AdSense aprobado (publisher `pub-1325551810977848`)
- Auto-ads activo con densidad Alta, In-page 3/3, Overlay minimizado
- Wise USD account lista para recibir pagos (cuando se alcance el threshold)

**SEO:**
- Google Search Console verificado + sitemap enviado
- ~292 páginas indexadas de 995 conocidas por Google
- BreadcrumbList + Article + FAQPage schemas activos
- Redirects 301 desde Nexo Mundial (dominio consolidado)

---

## 🔥 En curso

*(vacío por ahora — cuando arranquemos algo, se mueve acá)*

---

## 🎯 Prioridad ALTA

### Módulo de Herramientas (`/herramientas/`) 🔴

**Un hub dedicado con calculadoras y utilidades técnicas.** Tratado como una vertical
propia del sitio, con su propia identidad, URL y taxonomía. La idea es escalable —
hoy 5 calculadoras, en 6 meses 30-40.

**Por qué es alta prioridad:**
- Traffic magnets: rankean rápido en Google (2-4 semanas) para queries "high intent".
- Alto CTR de ads: users a punto de decidir/comprar → contexto premium para AdSense.
- Alto tiempo en página: SEO signal fuerte.
- Recurring users: la gente vuelve a usar la calculadora.
- Diferenciación: nadie hace esto bien en Latam en español.

**Arquitectura URL propuesta:**

```
/herramientas/                              ← landing con todas las herramientas
/herramientas/construccion/                 ← agrupación por categoría
/herramientas/maquinaria/
/herramientas/mecanica-automotriz/
/herramientas/arquitectura/
/herramientas/ingenieria-general/

/herramientas/cubicaje-hormigon/            ← herramientas individuales
/herramientas/ladrillos-metro-cuadrado/
/herramientas/costo-hora-operacion-excavadora/
```

**Stack técnico:**
- Astro pages para SEO estático (`src/pages/herramientas/...`)
- Svelte islands para la interactividad (inputs, cálculos, resultados)
- Structured data JSON-LD (`SoftwareApplication` o `HowTo`) para rich snippets
- Design system compartido (layout consistente: título, inputs, resultados, explicación, ejemplos)

**Roadmap de calculadoras:**

**Nivel 1 — MVP (empezar acá):**

| # | Calculadora | Categoría | Búsqueda mensual Latam (aprox) | Post existente |
|---|---|---|---|---|
| 1 | Cubicaje de hormigón (m³) | Construcción | ~5.000 | ✅ Sí |
| 2 | Ladrillos por metro cuadrado | Construcción | ~3.000 | ✅ Sí |
| 3 | Bolsas de cemento por m³ | Construcción | ~2.500 | — |
| 4 | Escalones — huella y contrahuella | Construcción | ~1.500 | — |
| 5 | Costo por hora de operación de maquinaria | Maquinaria | ~800 (alto CPM) | — |

**Nivel 2 — Segundo batch:**

- Conversión de unidades técnicas (kW/HP, PSI/bar, Nm/lb-ft)
- Comparador side-by-side de 2 excavadoras
- Consumo de combustible por modelo (Cat 320, 336, 349, etc.)
- Presupuesto rápido de obra por m²
- Torque de tornillos según tamaño y grado

**Nivel 3 — Nicho específico (fase futura):**

- Presión de bombeo hidráulico
- Selección de aceite hidráulico por temperatura
- Selección de neumáticos por carga
- Relación de transmisión
- Cálculo de escalones de motor (compresión, cilindrada)
- Cálculo de resistencia estructural básica
- Cálculo de área/perímetro con formas irregulares (arquitectura)

**Impacto proyectado a 6 meses con 10-15 calculadoras:**
- Tráfico orgánico adicional: +30-50%
- CPM en páginas de calculadoras: 2-3x más que posts (users high intent)
- Revenue AdSense extra: +$30-100/mes adicional
- Newsletter subs: +200-500 (widget en cada calculadora)

**Decisiones pendientes:**
- Estructura URL final: `/herramientas/nombre/` vs `/herramientas/categoria/nombre/` vs otra.
- Empezar con MVP de 1 o con 5 en bloque.
- Con qué calculadora arrancar el MVP.

---

### Cerrar deuda técnica menor de Fase 1 🟡

Del análisis externo del 2026-07-09 quedaron 3 items menores:

- [ ] Fix typos en 5 posts identificados con "rabajador" y variantes
- [ ] Consolidar `src/consts.ts` con `src/config.ts` (boilerplate Fuwari duplicado)
- [ ] Auditar los ~50 posts con `<500` words → refresh o consolidar

Baja urgencia. 30-45 min de trabajo. Cuando haya un rato muerto.

---

## 🟡 Prioridad MEDIA

### Expandir glosario técnico

Actualmente `/glosario/` tiene 3 entradas. Un glosario de 50-100 términos técnicos
es **SEO fácil** por dos razones:

1. Cada término es 1 URL indexable → 50-100 URLs nuevas.
2. Long-tail SEO: nadie compite por definiciones específicas ("¿qué es el par motor?",
   "¿qué es un servo hidráulico?").

**Términos a agregar (ejemplos):**
- Componentes de máquina: cucharón, pluma, balancín, castillo, aguilón
- Sistemas: servo hidráulico, actuador, ECU, ABS, ESP
- Física aplicada: par motor, torque, RPM, cilindrada, potencia, presión
- Materiales: acero Hardox, hormigón armado, cemento portland
- Términos de obra: encofrado, zapata, dintel, jamba, alfeizar

**Método de creación:**
- Generar con IA (los scripts `ai:outline`, `ai:draft`, `ai:meta` ya existen) → revisión humana → publicar.
- Ritmo objetivo: 5-10 términos por semana.

---

### Fichas técnicas de modelos de maquinaria

Una página por modelo específico de máquina con:
- Especificaciones técnicas (potencia, peso, capacidad)
- Precio de mercado aproximado en Latam
- Comparación con 2-3 competidores directos
- PDF/manual referencial (si conseguimos)
- Botón "Ver calculadora de costos para este modelo" → linkea al módulo de herramientas

**MVP:** empezar con top 20 modelos Caterpillar (excavadoras + cargadores frontales)
porque ya son los que rankean mejor en el sitio.

**Estructura URL:**

```
/modelos/                                   ← listado de todos los modelos
/modelos/caterpillar/                       ← por marca
/modelos/caterpillar/320d/                  ← ficha del modelo
```

---

### Sección de Preguntas y Respuestas (Q&A)

Como Quora pero para el nicho técnico. Los users mandan preguntas y vos (o IA) responden.
Cada pregunta se convierte en una URL indexable.

**Ventajas:**
- Contenido generado por la comunidad — escalable sin trabajo tuyo.
- Cada pregunta responde a una query específica de Google.
- Mejora engagement y SEO (tiempo en página, backlinks).

**MVP:** simple formulario que crea un `draft` en el CMS. Cuando respondés (o IA responde),
lo promotes a post.

---

### Newsletter

**El único tráfico que NO depende de Google.** Si mañana el algoritmo cambia, la newsletter
te salva.

**Setup mínimo:**
- Widget "Suscribite" en sidebar y en cada calculadora (leads magnet natural)
- Email semanal: "3 posts nuevos + 1 análisis técnico + 1 herramienta nueva"
- Provider: **Buttondown** (gratis hasta 100 subs), **ConvertKit** (gratis hasta 1000)

**Contenido del email:**
- Curación de contenido nuevo del sitio
- 1 pregunta técnica interesante que llegó de la comunidad
- Link a la última calculadora del módulo

---

## 🟢 Prioridad BAJA (nice-to-have)

### Comentarios (Giscus)

Sistema de comentarios basado en GitHub Discussions. Gratis, sin backend, sin spam.
Aumenta engagement y agrega contenido único (comentarios técnicos = SEO signal).

**Consideración:** en nichos técnicos Latam los comentarios son bajos. Puede quedar vacío
y verse feo. Mejor implementar cuando tengamos comunidad más activa.

---

### Videos embebidos en posts

Curar y embedear videos de YouTube en posts relevantes. Aumenta tiempo en página (SEO
signal fuerte). Sin filmar nada tuyo — solo curar videos oficiales de fabricantes
(Caterpillar, Volvo, Komatsu, etc.).

**Método:**
- Cada post técnico revisado gana 1 video oficial relacionado en la sección "Ver también"
- Prioridad: los 20 posts top que ya identificamos

---

### Bing Webmaster Tools

Setup análogo a Google Search Console pero para Bing (que también sirve a Yahoo y
DuckDuckGo). En Latam, ~5-10% del tráfico usa Edge/Bing.

**Setup:** 15 min. Trámite parecido a Search Console.

---

### Conectar Search Console con GA4

Dashboard integrado en GA4 que muestra "queries de Google → páginas → engagement".
Sin esto, para ver el funnel completo hay que abrir dos herramientas.

**Setup:** 5 min desde GA4 Admin.

---

### Auditoría de contenido "news brief"

Del análisis externo se marcaron posts cortos tipo "news brief" con nombres propios
en contextos legales (ej. `grua-muerto-houston`, `tesla-demanda-frenos`).

Ya borramos 6 en la limpieza inicial pero **puede haber más**. Un pass sistemático:
- Filtrar posts `<500` words
- Filtrar posts con nombres propios de empresas + verbos como "demanda", "muerte", "accidente"
- Decidir: expandir con valor editorial o despublicar

Legalmente riesgoso mantenerlos thin. Editorialmente débil.

---

## 💰 Herramientas Pro y suscripciones — monetización directa

**Idea clave**: además de AdSense (revenue pasivo), monetizar directamente con
productos y servicios pagos aprovechando la audiencia y expertise del sitio.

### Modelos de monetización identificados

1. **Freemium en calculadoras**: básicas gratis, avanzadas paga.
2. **Suscripción "Mundo Ingeniería Pro"**: acceso a todas las herramientas Pro,
   guardar cálculos, exportar PDF con logo, múltiples proyectos. $9/mes o $79/año.
3. **Productos digitales one-time**: guías PDF, templates Notion/Excel, bundles de
   calculadoras descargables. $9-49 según tipo.
4. **Pay-per-use** (créditos): compras 10 créditos por $9, cada cálculo consume 1-2.
5. **Consultoría técnica** ($50-200/consulta): alta rentabilidad pero no escalable.

### Herramientas Pro concretas (para construir después del MVP free)

- **Costo total de propiedad (TCO)** de una máquina (vida útil + depreciación +
  combustible + mantenimiento + operador + financiamiento).
- **Comparador ROI** de 3 modelos side-by-side.
- **Presupuesto detallado de obra** por m² con inputs granulares.
- **Optimizador de flota** — dado un proyecto, cuántas máquinas de cada tipo.
- **Análisis de aceite predictivo** — cargás resultados, te dice si es normal o alerta.
- **Dimensionamiento hidráulico** — input caudal + presión + carga → bombas + válvulas.
- **Planificador de mantenimiento** — genera calendario personalizado con alertas.

### Opciones técnicas de implementación (por complejidad)

**A — Simple**: Gumroad / Lemon Squeezy para vender productos digitales one-time.
Sin código custom. Comisión ~10%. Ideal para arrancar y validar demanda.

**B — Media**: Memberful u Outseta para membership/subscripción. Ellos manejan pagos,
users, login; nosotros integramos widget/embed. Comisión ~5% + Stripe. Bueno cuando
la subscripción demuestra tener demanda.

**C — Avanzada**: Stripe + Supabase + Astro SSR (propio). Full control, sin
comisiones de terceros. 2-4 semanas de código. Justificable cuando la subscripción
llega a $500-1000 MRR.

### Roadmap sugerido

**Fase 1 (mes 1-2) — Validar con productos simples**:
- Vender 1-2 productos digitales one-time vía Gumroad.
- Ejemplos: "Pack de 5 calculadoras profesionales en Excel" ($15),
  "Guía PDF: Mantenimiento preventivo Cat 320D" ($19).
- Meta: 20-50 ventas en 60 días para validar disposición a pagar.

**Fase 2 (mes 3-4) — Herramientas Pro con Memberful**:
- Módulo `/herramientas/pro/` con 5-8 calculadoras avanzadas.
- Login/pago vía Memberful.
- Meta: 20 suscripciones activas en 3 meses = ~$180/mes MRR.

**Fase 3 (mes 6-12) — Sistema propio + flagship**:
- Migrar a stack propio si MRR pasa $500-1000.
- Producto flagship: curso en video estructurado o consultoría paquetizada.

### Proyección realista de revenue (12 meses)

Con tráfico actual + crecimiento moderado + `maquinariaspesadas.org` estable:

| Mes | AdSense Mundo | Productos digital | Suscripción Pro | maquinariaspesadas.org | Total mensual |
|---|---|---|---|---|---|
| 1-2 | $30-80 | $150-300 (una vez) | — | $700 | ~$800-1000 |
| 3-4 | $80-150 | $300-600 (una vez) | $100-200 | $700 | ~$1000-1400 |
| 6 | $150-300 | $200-500/mes | $300-500 | $700 | ~$1400-2000 |
| 12 | $300-500 | $500-1000/mes | $700-1200 | $700 | ~$2200-3400 |

---

## 💰 Estrategia de productos digitales (largo plazo)

Idea del análisis externo del 2026-07-09: **el sitio ya tiene lo que otros creadores
de productos digitales están buscando**: audiencia + nicho + contenido + expertise
demostrado. AdSense es solo el piso. Productos digitales pueden ser el techo.

**Productos posibles:**

| Producto | Precio sugerido | Cuándo tiene sentido |
|---|---|---|
| Manual PDF premium ("Guía de mantenimiento preventivo Cat 320") | $19-29 | Cuando haya tráfico consistente en posts sobre ese modelo |
| Templates Notion (control de mantenimiento de flota) | $25-49 | Fácil de armar, mercado B2B pequeño |
| Bundle de fichas técnicas por marca | $15-25 | Cuando el módulo de Fichas Técnicas esté armado |
| Curso corto en video (Diagnóstico eléctrico automotriz para mecánicos Latam) | $49-99 | Requiere producción de video, alto esfuerzo |
| Calculadoras "Pro" (versión avanzada, más marcas/modelos) | $5-10/mes | Cuando las calculadoras free tengan uso comprobado |

**Método:** validar antes de producir. Publicar un post con "landing page" del producto
+ botón "Comprar" que abre modal "en desarrollo, dejá tu email". Si 20 personas dejan
email en 1 mes, vale la pena producirlo.

**Timeline:** después de 3-6 meses de AdSense con data real de qué queries traen tráfico
de mayor intención de compra.

---

## 📚 Referencias y notas

**Cosas que aprendimos en el camino:**

- **Auto-ads es 100% controlado por Google.** El sitio solo carga el script; Google decide
  dónde inserta los ads. No hay forma de "reservar espacios" desde el código (salvo con
  Manual Ad Units, que requieren slot IDs por unidad).
- **Multiplex ads se ven como "temas relacionados"** intencionalmente. Es la estrategia
  de Google para vencer la banner blindness. Alto CTR (1.5-3%) pero puede sentirse
  engañoso para audiencias sofisticadas.
- **Cloudinary con URLs completas en el frontmatter funciona** siempre que `isCdnRef()`
  reconozca `https://res.cloudinary.com/` como CDN válido (fix aplicado en commit `cc87fd2`).
- **Los redirects 301 al Nexo Mundial preservan link juice** — Google los procesa
  como "URL mudada" y transfiere ranking. Uno a uno específico > wildcard cuando hay
  slugs que coinciden.

---

## 🏗️ Estrategia dual de dominios — DECISIÓN ESTRATÉGICA

Jean Paul opera **DOS dominios** en el mismo nicho técnico. La decisión estratégica
tomada el 2026-07-13 es **mantenerlos separados con roles complementarios**:

### `maquinariaspesadas.org` — Biblioteca de recursos ($700/mes)

- **Stack**: WordPress + LiteSpeed (self-hosted)
- **Rol**: distribución de manuales, cursos, catálogos, fotos y videos.
- **Estado**: activo desde ~2018, ~1.000-3.000 posts, monetización probada con Google
  AdSense en $700/mes.
- **Consigna**: **NO TOCAR**. Sigue funcionando, sigue generando revenue estable.

### `mundoingenieria.org` — Portal editorial (nuevo, en crecimiento)

- **Stack**: Astro 5 + Netlify + Cloudinary
- **Rol**: guías originales, calculadoras interactivas, análisis técnicos, fichas de
  modelos, contenido educativo escrito por Jean Paul.
- **Estado**: AdSense aprobado 2026-07-09, monetización arrancando. Potencial de
  crecer a $100-500/mes en 6 meses con buena estrategia editorial + módulo de
  herramientas.
- **Consigna**: enfocado en **contenido ORIGINAL**. NO subir manuales que ya están
  en Maquinarias Pesadas.

### Cross-linking bidireccional

Los dos sitios se retroalimentan con enlaces:

- **Desde Mundo Ingeniería**: cuando un post hable de un modelo/tema donde
  Maquinarias Pesadas tiene el manual, linkear con formato *"¿Necesitás el manual
  completo? Descargalo en Maquinarias Pesadas"*.
- **Desde Maquinarias Pesadas**: en las páginas de descarga, linkear a la guía
  editorial en Mundo Ingeniería con *"¿Querés entender el fondo técnico?"*.

**Beneficios de esta estrategia:**

1. Doble revenue diversificado ($700/mes actuales + potencial de Mundo).
2. Link juice cruzado aumenta la autoridad de ambos.
3. Cada sitio hace lo que mejor sabe hacer (Maquinarias ranquea en queries
   "descarga gratis manual", Mundo ranquea en queries "cómo funciona X").
4. Cuenta AdSense de Mundo se mantiene "limpia" (sin contenido duplicado o
   copyright dudoso que podría poner en riesgo la cuenta joven).

---

## ⚠️ Ideas descartadas (con motivo, para no reconsiderarlas)

### ❌ Subir a Mundo Ingeniería los archivos que ya están en Maquinarias Pesadas

**Idea original:** aprovechar el tráfico de Mundo para monetizar también los manuales
y cursos que Jean Paul ya tiene en Mega/Drive y también en Maquinarias Pesadas.

**Motivo del descarte:**

- **Riesgo asimétrico**: la ganancia potencial es marginal (+$50-100/mes en el mejor
  caso) y la pérdida potencial es alta (perder la cuenta AdSense de Mundo, que tiene
  días de aprobada).
- **Duplicate content penalization**: si los mismos archivos están en dos dominios
  del mismo owner, Google penaliza al "sitio nuevo" (Mundo) y prioriza al histórico
  (Maquinarias Pesadas). Mundo pierde ranking, Maquinarias no gana nada.
- **Riesgo cruzado**: Google podría auditar Maquinarias por "sitio hermano sospechoso",
  poniendo en riesgo los $700/mes que ya funcionan.
- **La cuenta AdSense de Mundo es frágil**: recién aprobada, Google observa con lupa
  las cuentas nuevas. Un solo strike puede tirar meses de trabajo.

**Alternativa que aplicamos:** dejar los archivos donde están (Maquinarias Pesadas),
y desde Mundo Ingeniería solo linkear a esos recursos cuando el post lo justifique.
El link juice y el tráfico calificado benefician a ambos sitios.

---

### 📚 Recursos técnicos curados (reemplazo legal del descargas)

**Prioridad:** 🟡 Media

Página o subsección con:
- Links directos a manuales de operador gratuitos publicados por los fabricantes.
- PDFs originales creados por Jean Paul (guías, checklists, cheatsheets).
- Fichas técnicas resumidas con atribución a fuentes oficiales.
- Comparativas y tablas de autoría propia.

**Ventajas:**
- Legal y sostenible.
- Los PDFs originales son diferenciadores — nadie más los tiene.
- Los links curados son un servicio real al user.
- Cada PDF puede ser lead magnet para la newsletter.

**URL sugerida:** `/recursos/` con subpáginas por marca y tipo de recurso.

**Ideas iniciales de PDFs originales para producir:**
- Guía práctica de mantenimiento preventivo de excavadoras Cat 320D
- Checklist diario de operador de cargador frontal
- Manual de bolsillo: diagnóstico de fallas hidráulicas más comunes
- Cheatsheet de conversiones de unidades técnicas de campo
- Guía de aceites hidráulicos por temperatura y tipo de máquina

---

## 🌱 Brain dump — ideas de expansión (agrupadas por categoría)

Ideas surgidas del brainstorming del 2026-07-13. Priorizadas por impacto potencial /
complejidad. La mayoría va a quedar en modo "backlog" — solo unas pocas se ejecutan
cada 6-12 meses.

### Contenido y autoridad temática

- **Reviews con affiliate** ("Los 5 mejores compresores para taller 2026") con links a
  MercadoLibre / Amazon. Alto CTR, comisión 3-8%. 🔴 Alto impacto + baja complejidad.
- **Base de datos de normas técnicas** explicadas (ISO, ASTM, NTP peruana). Cada norma
  = URL indexable con explicación del alcance. NO alojar la norma (copyright), solo
  explicarla + linkear a la fuente oficial. 🟢 Bajo esfuerzo.
- **Análisis de accidentes / incidentes técnicos**. Casos reales con análisis educativo.
  Alto volumen de búsqueda. 🟡 Delicado editorialmente pero muy demandado.
- **Directorio de institutos técnicos** (SENATI, TECSUP, SENA, SENAI, etc.). Cada
  institución = URL con carreras + info. 🟢 Bajo esfuerzo, SEO Latam sólido.
- **Comparador universal de máquinas** con filtros por marca/capacidad/precio +
  ranking + reviews. Monetización con featured listings + affiliate. 🟡 Media complejidad,
  alto revenue.

### Multi-formato y distribución

- **YouTube channel** con videos de las calculadoras en acción + explicaciones
  visuales. Segundo canal de tráfico, monetizable con YouTube Ads.
- **TikTok / Reels técnicos** de 60 segundos explicando conceptos. Distribución Latam
  fuerte, tráfico gratis al sitio.
- **Podcast** con entrevistas a expertos + análisis de casos. Distribuido en Spotify /
  Apple Podcasts. Barrera de producción alta.
- **PWA (Progressive Web App)** — todo el sitio y las calculadoras funcionando offline
  en móvil. Diferenciador FUERTE para uso EN obra sin internet. 🔴 Alto impacto.
- **Widgets embebibles para blogs terceros** ("Powered by Mundo Ingeniería"). Otros
  sitios embedean nuestras calculadoras → backlinks gratis + branding. **SEO play
  extremo.**

### Comunidad y engagement

- **Foro / Discord de la comunidad** técnica Latam. Aumenta retención + engagement.
  Discourse embebido o Discord server externo.
- **Sistema Q&A técnicas** tipo Quora del nicho. Los users preguntan, respondemos vos
  o IA. Cada pregunta = URL indexable. 🔴 Alto impacto (contenido generado por la
  comunidad).
- **Newsletter Pro paga** ($5/mes vía Substack). Análisis profundos, casos reales,
  entrevistas semanales. Bajo esfuerzo + ingreso recurrente.

### Monetización avanzada

- **Certificaciones digitales técnicas** ("Curso operador Cat", "Mantenimiento
  hidráulico"). Cursos + certificado descargable. Vender $100-500 por curso a
  operadores y empresas de capacitación. **El más rentable a largo plazo.**
- **Job board técnico**. Empresas publican vacantes de operadores/mecánicos/ingenieros;
  users postulan directo. Monetización: $20-50 por listing. Network effect si arranca.
- **Chatbot IA técnico** con Claude API entrenado con el contenido del sitio. Free
  tier limitado, Pro ilimitado ($9-20/mes por user). Diferenciador máximo.
- **Membresía Elite** ($50-100/mes). Acceso a todo + Discord privado + Q&A mensual
  con expertos + descuentos. Pocos users pagando mucho > muchos pagando poco.
- **API pública de calculadoras**. Otros sitios/apps consumen los cálculos con API
  key (free tier + paid). Nicho pero rentable $50-500/mes por client.
- **Contenido patrocinado** por marcas del rubro (Caterpillar, Volvo, Komatsu).
  Featured posts, reviews de productos. Requiere autoridad del sitio ya establecida.
  $200-2000 por deal cuando el sitio crezca.
- **Marketplace de PDFs terceros** — autores externos venden sus PDFs, comisión al
  sitio 10-20%. Escalable sin trabajo propio.

### Tecnología / producto ambicioso (fase 2+)

- **SaaS lite: Gestor de flota** con control de horas + mantenimientos multi-user. B2B
  para empresas de flota. $19-49/mes. **Muy alta complejidad, no priorizar por ahora**
  (mercado saturado, ya existen productos específicos).
- **Simulador visual de operación** de excavadora/cargador en browser. Educativo, muy
  compartible en redes. Complejidad muy alta, ROI incierto.
- **App nativa mobile** con fórmulas + conversiones + fichas técnicas. Compra única
  $5-15. Barrera de publicación en Apple/Google.
- **Integraciones Zapier** — calculadoras conectables a workflows automatizados. Muy
  nicho pero muy valioso para empresas.

### Priorización recomendada (para próximos 6 meses)

**🔴 Alto impacto + baja complejidad — empezar acá:**
1. Reviews con affiliate MercadoLibre / Amazon
2. Newsletter Pro (Substack, $5/mes)
3. Sistema Q&A técnicas
4. PWA de calculadoras (después del módulo herramientas)

**🟡 Alto impacto + alta complejidad — fase 2 (mes 6+):**
5. Certificaciones digitales
6. Chatbot IA técnico con Claude API
7. Job board técnico

**🟢 Experimentales — probar cuando haya tiempo:**
8. TikTok / Reels técnicos
9. Base de datos de normas
10. Directorio de institutos

**🚫 Descartar por ahora:**
- SaaS de flota (mercado saturado, alta complejidad)
- Simulador de operación (ROI incierto, muy caro)
- Podcast (barrera de producción alta, ROI incierto en Latam)

---

## 📝 Ideas sueltas (todavía sin categorizar)

*(Este es el buzón. Todo lo que se nos ocurra pero aún no sabemos si vale la pena,
va acá. Cuando maduren, se mueven arriba con prioridad asignada.)*

- Página `/marcas/` con listado de todas las marcas de maquinaria mencionadas en el
  sitio, con link a los posts que hablan de cada una.
- Comparador universal: seleccionás 2-3 modelos y te muestra tabla side-by-side.
- Widget "post trending" en sidebar — muestra los 5 posts con más views de la semana.
- Integración con Google My Business para si algún día abrís un servicio local
  (ej. consultoría de flota).
- Podcast del nicho (grabado en español, distribuido en Spotify). Alta barrera de
  producción pero muy alta diferenciación.
- App móvil con las calculadoras (después del módulo web). PWA es lo más simple.
- Foro / Discord de la comunidad técnica.
- Reviews de herramientas / maquinaria con affiliate links (Amazon, MercadoLibre).

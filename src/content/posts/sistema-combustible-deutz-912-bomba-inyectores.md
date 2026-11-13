---
title: "Sistema de combustible Deutz FL 912 y 413: bomba, inyectores y puesta a punto"
published: 2026-11-14
draft: false
featured: false
description: "Circuito de combustible de los diésel Deutz FL 912 y B/FL 413: alimentación, filtrado, bomba inyectora, avance, inyectores, purga y diagnóstico de humo y falta de potencia."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "deutz"
  - "sistema-de-combustible"
  - "bomba-inyectora"
  - "inyectores"
  - "avance-de-inyeccion"
  - "motor-refrigerado-por-aire"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/motores-diesel/sistema-combustible-deutz-912-bomba-inyectores
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué Deutz prohíbe los tanques de combustible galvanizados?"
    a: "El zinc del galvanizado reacciona con el azufre del diésel y forma sulfato de zinc, un residuo que obstruye los filtros y daña la bomba inyectora y los inyectores. El curso de capacitación de Deutz indica tanques de acero, aluminio o poliéster reforzado, y la misma regla aplica a las tuberías de suministro: cobre o acero, nunca galvanizado. En Latinoamérica es común encontrar tanques improvisados con tambores galvanizados; conviene reemplazarlos antes de culpar a la bomba por filtros que se tapan sin explicación."
  - q: "¿Por qué debe haber una separación entre la línea de succión y la de retorno en el tanque?"
    a: "El curso Deutz pide al menos 30 cm entre ambas, con el retorno dirigido hacia el fondo del tanque. Así el combustible caliente y con burbujas que regresa del motor no es aspirado de inmediato, lo que evita recircular aire y calor hacia la bomba. Además, el retorno al fondo impide que el combustible de la bomba inyectora se vacíe por vasos comunicantes hacia el tanque durante una parada, causa típica de arranque difícil."
  - q: "¿Cómo se sabe si el punto de inyección está adelantado o atrasado?"
    a: "En el procedimiento Deutz, con la bomba manual de alta presión se observa la gota que sale por el cuello de cisne del cilindro 1 mientras se gira el motor. Cuando el flujo baja a una gota cada 10 segundos, la marca PI de la polea debe coincidir con el indicador fijo. Si la marca no alcanza el indicador, el punto de inyección está adelantado; si lo sobrepasa, está atrasado. Se corrige girando el machón de accionamiento de la bomba y verificando de nuevo."
  - q: "¿Se puede bajar la potencia del motor para controlar el humo negro en altura?"
    a: "Sí. El curso explica que en altura falta oxígeno, por lo que se reduce el caudal máximo de combustible con el tornillo o tambor regulador de la bomba. Se controla el humo negro y la temperatura, a cambio de perder potencia. Es un ajuste reversible, pero debe hacerlo personal capacitado y respetando el valor del manual del fabricante, porque un ajuste irresponsable puede dañar el motor."
  - q: "¿Conviene cambiar solo un inyector cuando falla?"
    a: "El curso Deutz recomienda lo contrario: al llegar a la vida útil estimada, reemplazar todos los inyectores del motor, porque mezclar nuevos con usados produce fallas difíciles de diagnosticar (cilindros que trabajan con distinta presión y distinto patrón de pulverización). Si un inyector falla de forma prematura, primero se investiga la causa: agua, suciedad o temperatura anormal."
sources:
  - title: "Curso de capacitación técnica Motor Deutz (Service Training) — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/167-curso-capacitacion-tecnica-motor-deutz"
related:
  - componentes-funcionamiento-sistemas-combustible
  - guia-combustible-admision-escape-motores-diesel
  - vaciado-agua-combustible
  - sistema-alimentacion-motor-diesel
---

Los motores diésel refrigerados por aire de Deutz (series FL 912 y B/FL 413) siguen trabajando en grupos electrógenos, compresores, cargadores, trituradoras y maquinaria agrícola de toda Latinoamérica. Son sencillos y duran, pero tienen una condición: su sistema de combustible es mecánico y de tolerancias muy cerradas, y casi todas las fallas "misteriosas" (arranque difícil, humo blanco intermitente, falta de potencia) nacen en el circuito de baja presión o en un ajuste mal entendido de la bomba.

Esta guía reorganiza el material de combustible del curso de capacitación de Deutz en un orden práctico: cómo debe ser el circuito, qué hace cada componente y por qué, cómo se ajustan potencia y avance, cómo se revisan los inyectores y cómo se diagnostica un síntoma. Los valores publicados provienen del curso y se indican como tales; para cualquier ajuste real prevalece el manual oficial del motor exacto que tenga delante.

## Qué debe hacer el sistema de combustible

El curso resume la función en tres verbos que conviene memorizar porque ordenan todo el diagnóstico:

1. **Dosificar**: entregar la cantidad exacta de combustible según la carga.
2. **Sincronizar**: inyectarlo en el momento correcto del ciclo (el avance).
3. **Pulverizar**: atomizarlo finamente para que se mezcle con el aire comprimido.

Cada síntoma de campo corresponde a la falla de uno de los tres. Humo negro y pérdida de potencia suelen ser dosificación o aire; humo blanco y golpeteo suelen ser sincronización; mala combustión con consumo alto suele ser pulverización (inyectores).

## El circuito de baja presión paso a paso

El circuito básico que muestra el curso incluye: tanque, bomba manual de cebado, filtro de malla, bomba de alimentación (de levante), filtro doble, bomba inyectora, inyectores y una válvula de sobrepresión en la bomba, por donde el excedente retorna al tanque.

<figure class="diagram">
<svg viewBox="0 0 800 310" role="img" aria-label="Esquema del circuito de combustible: tanque, bomba de alimentación, filtros, bomba inyectora e inyectores, con retorno al tanque" style="width:100%;height:auto;font-family:inherit">
<title>Circuito de combustible de un diésel Deutz refrigerado por aire</title>
<defs>
<marker id="sc-ar-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d4ed8"/></marker>
<marker id="sc-ar-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#b91c1c"/></marker>
<marker id="sc-ar-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker>
</defs>
<rect x="0" y="0" width="800" height="310" rx="12" fill="#f1f5f9"/>
<text x="400" y="34" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Circuito de combustible (esquema simplificado, ilustración propia)</text>
<rect x="20" y="90" width="110" height="70" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="75" y="130" text-anchor="middle" font-size="15" fill="#1e293b">Tanque</text>
<rect x="165" y="90" width="120" height="70" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="225" y="120" text-anchor="middle" font-size="14" fill="#1e293b">Bomba de</text>
<text x="225" y="138" text-anchor="middle" font-size="14" fill="#1e293b">alimentación</text>
<rect x="320" y="90" width="110" height="70" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="375" y="120" text-anchor="middle" font-size="14" fill="#1e293b">Filtros</text>
<text x="375" y="138" text-anchor="middle" font-size="14" fill="#1e293b">(doble)</text>
<rect x="465" y="90" width="120" height="70" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="525" y="120" text-anchor="middle" font-size="14" fill="#1e293b">Bomba</text>
<text x="525" y="138" text-anchor="middle" font-size="14" fill="#1e293b">inyectora</text>
<rect x="640" y="90" width="120" height="70" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="700" y="130" text-anchor="middle" font-size="15" fill="#1e293b">Inyectores</text>
<line x1="130" y1="125" x2="163" y2="125" stroke="#1d4ed8" stroke-width="3" marker-end="url(#sc-ar-b)"/>
<line x1="285" y1="125" x2="318" y2="125" stroke="#1d4ed8" stroke-width="3" marker-end="url(#sc-ar-b)"/>
<line x1="430" y1="125" x2="463" y2="125" stroke="#1d4ed8" stroke-width="3" marker-end="url(#sc-ar-b)"/>
<line x1="585" y1="125" x2="638" y2="125" stroke="#b91c1c" stroke-width="4" marker-end="url(#sc-ar-r)"/>
<path d="M700 160 V225 H540 V160" fill="none" stroke="#475569" stroke-width="2.5" stroke-dasharray="7 4"/>
<path d="M540 225 H75 V162" fill="none" stroke="#475569" stroke-width="2.5" stroke-dasharray="7 4" marker-end="url(#sc-ar-g)"/>
<text x="300" y="215" text-anchor="middle" font-size="14" fill="#1e293b">Retorno de combustible sobrante (válvula de sobrepresión)</text>
<line x1="150" y1="262" x2="190" y2="262" stroke="#1d4ed8" stroke-width="3"/>
<text x="198" y="267" font-size="13" fill="#1e293b">Baja presión</text>
<line x1="330" y1="262" x2="370" y2="262" stroke="#b91c1c" stroke-width="4"/>
<text x="378" y="267" font-size="13" fill="#1e293b">Alta presión</text>
<line x1="505" y1="262" x2="545" y2="262" stroke="#475569" stroke-width="2.5" stroke-dasharray="7 4"/>
<text x="553" y="267" font-size="13" fill="#1e293b">Retorno</text>
</svg>
<figcaption>Esquema simplificado del circuito: la bomba de alimentación empuja el combustible por los filtros hasta la bomba inyectora; lo que no se inyecta vuelve al tanque. Ilustración propia, no a escala.</figcaption>
</figure>

### Tanque y tuberías: donde empiezan la mitad de las fallas

El curso dedica varias páginas al tanque y sus conexiones porque un circuito mal instalado nunca se arregla con repuestos. Las reglas, y el motivo de cada una:

| Elemento | Regla del curso Deutz | Por qué |
|---|---|---|
| Material del tanque | Acero, aluminio o poliéster reforzado; nunca galvanizado | El zinc reacciona con el azufre del diésel y forma sulfato de zinc, que tapa filtros y daña bomba e inyectores |
| Tuberías de suministro | Cobre o acero; nunca galvanizadas; mangueras aptas para diésel | Mismo motivo; una manguera inadecuada se degrada y aspira aire |
| Toma de suministro y tapa de llenado | Al menos 1,5 in sobre el fondo | Evita recoger agua y sedimentos del fondo |
| Retorno | Separado de la succión al menos 30 cm y dirigido al fondo, a la altura de la toma | Evita recircular aire y combustible caliente; impide que la bomba se vacíe por vasos comunicantes |
| Ventilación | Con filtro en ambientes de mucho polvo | Un tanque sin respiración adecuada genera vacío y la bomba de alimentación lo siente |
| Ubicación | Lejos del múltiple de escape y silenciadores; diferencia de altura mínima respecto de la bomba de alimentación | El combustible caliente pierde densidad y favorece vapor; mucha altura sobrecarga la succión |
| Drenaje | Periódico, para eliminar agua y lodo | Es el único punto donde sale el contaminante acumulado |

Los diámetros interiores que indica el curso para las líneas de suministro dependen de la longitud: **8 mm (5/16 in) hasta 3 m, 10 mm (3/8 in) entre 3 y 5 m y 12 mm (1/2 in) sobre 5 m**. La línea de retorno debe tener la mitad del diámetro de la de succión, y todas las uniones deben estar selladas al 100 %, porque una unión que gotea hacia afuera casi siempre también aspira aire hacia adentro.

El curso insiste en que Deutz diseñó un circuito "Heavy Duty" de filtrado y alimentación y que cualquier modificación puede producir pérdida de potencia, mayor temperatura, dificultad de arranque, cavitación en bomba e inyectores y humo blanco intermitente. En la práctica, los "arreglos" de taller (acortar la línea de retorno, quitar el filtro doble, usar mangueras de agua) son una causa frecuente de reclamos.

### Las dos bombas de alimentación

El motor lleva una bomba mecánica que mueve el combustible desde el tanque hasta la bomba inyectora, accionada por una excéntrica del árbol de levas. El curso muestra dos variantes:

- **Bomba de diafragma** (aplicación B/FL 912): una palanca accionada por la excéntrica tira de una membrana contra un resorte. Se crea vacío entre las válvulas de retención y la membrana, que aspira combustible a través del filtro de malla; al liberarse la palanca, el resorte empuja la membrana y el combustible sale por la válvula de presión hacia la línea de servicio.
- **Bomba de pistón** (aplicación B/FL 413): la excéntrica empuja un rodillo y un pistón que comprime un resorte e impulsa el combustible por la válvula de presión; al liberarse, el resorte devuelve el pistón y aspira por la válvula de succión.

En ambas, el trabajo real lo hacen **dos válvulas de retención** y el resorte. Si una válvula pierde estanqueidad, la bomba "bombea" pero no presuriza, y el resultado es falta de combustible a carga alta o arranque difícil. El curso da, en la tabla de datos generales, la presión de combustible a la entrada de la bomba inyectora: **0,3 a 0,5 bar para la serie FL 912 W y 1 a 2 bar para la FL 413 FW/B**. Medirla con un manómetro de baja presión es la forma más rápida de distinguir un problema de alimentación de uno de bomba inyectora.

### Filtrado: en etapas y con límites

La recomendación del curso es filtrar en una sola pasada pero en etapas: separador de agua con filtro de malla, luego un filtro grueso y finalmente un filtro fino. Dos aclaraciones del propio material merecen subrayarse:

- Los filtros eliminan las sustancias en suspensión, pero **no son capaces de limpiar un combustible contaminado**. Un filtro no "arregla" un diésel con agua emulsionada o con bacterias.
- El período de cambio depende de las condiciones ambientales, la calidad del combustible y las instalaciones. No existe un número universal; se ajusta mirando el estado real del filtro y el historial de la flota.

La **válvula de sobrepresión** de la bomba inyectora también merece atención: de ella depende que llegue combustible suficiente a los inyectores y que el exceso retorne. El curso recomienda cambiarla periódicamente y seleccionarla por catálogo, no por parecido físico (válvulas con distinta presión de apertura se parecen mucho).

## La bomba inyectora: dosificación y potencia

Una bomba inyectora mecánica convierte el movimiento del árbol de levas en pulsos de alta presión, uno por cada cilindro y por cada ciclo. Según la configuración, el motor puede llevar una bomba que concentra todos los elementos o una unidad por cilindro (referencial; verificar en el manual del fabricante cuál corresponde a su motor). Lo importante para el diagnóstico es que cada elemento tiene tres ajustes que se afectan entre sí: **caudal máximo** (potencia y humo), **punto de inyección** (sincronización) y **regulación de velocidad**.

### Regulación de la potencia máxima

En el curso, el caudal máximo se modifica para adaptar el motor al lugar de trabajo. La lógica es simple: en altura hay menos oxígeno por litro de aire, así que si se entrega el mismo combustible el motor produce humo negro y sube la temperatura. Reducir el caudal máximo controla ambos, **a costa de potencia**. Es un proceso reversible, pero el curso advierte que una manipulación irresponsable puede causar daños serios.

Para la serie FL 413 W/B, el curso describe dos versiones del tope:

| Modelo | Procedimiento | Efecto |
|---|---|---|
| Antiguo | Desmontar la tapa, sujetar la tuerca de ajuste con una llave de 10 mm, aflojar la contratuerca con una llave de 8 mm | Desenroscar la tuerca aumenta la potencia; roscarla la disminuye |
| Nuevo | Aflojar los dos pernos de fijación y girar el tambor graduado; apretar los pernos al terminar | Mientras mayor es el número frente a la referencia, menor es la potencia |

En la serie FL 912 W/B el procedimiento es parecido: desmontar la tapa, aflojar la tuerca, girar el tornillo regulador (atornillar aumenta la potencia, destornillar la disminuye), apretar la tuerca y montar la tapa. Como cada modelo tiene su propio sentido de ajuste, conviene anotar la posición inicial del tornillo o del tambor antes de tocarlo y no fiarse de la memoria.

Dos criterios de taller que no vienen en la tabla pero evitan problemas: nunca se aumenta el caudal para "recuperar" potencia de un motor que humea (solo se empeora la combustión), y después de cualquier cambio se verifica la temperatura de escape y el humo con la máquina cargada.

## Avance de inyección: por qué importa y cómo se verifica

Inyectar demasiado pronto eleva la presión de combustión antes del punto muerto superior (golpeteo, esfuerzo en cojinetes y humo blanco); inyectar tarde pierde potencia, eleva la temperatura de escape y produce humo negro o blanco. Por eso el avance se especifica en grados antes del PMS.

Los valores del curso para la serie **FL 912 W** (tabla de datos generales):

| Condición | Comienzo de inyección |
|---|---|
| Hasta 2.300 rpm, sin graduador de avance, F3/4L | 22° |
| Hasta 2.300 rpm, sin graduador de avance, F5/6L | 24° |
| De 2.300 a 2.800 rpm, con graduador de avance, F3/4L | 18° |
| De 2.300 a 2.800 rpm, con graduador de avance, F5/6L | 20° |
| Aumento de avance por cada 1.000 m de altitud | 0,5° |

Para la serie **FL 413 FW/B** el curso indica **14°** en F6L, F8L, F10L y F12L, con un aumento de **1°** por cada 1.000 m de altitud. Como siempre, el valor que se aplica a un motor concreto sale de su placa y del manual oficial.

### Método del curso: marcar el punto de inyección en la polea

El procedimiento del curso (aplicable a FL 912 W/B y B/FL 413 FW/B) es muy didáctico porque no requiere instrumentos especiales. Resumido:

1. **Instalar un indicador fijo** (una varilla rígida con punta fina) apuntando al borde de la polea frontal, alineado con su centro.
2. **Ubicar el punto muerto superior (PMS)**: se gira el motor hasta el cruce de válvulas del cilindro 1 y luego 360°. Se coloca una llave Allen entre la válvula de escape y el balancín (6 mm en motores aspirados o turbocompensados, 10 mm en turboalimentados) y se gira suavemente la polea hasta que el pistón toque la válvula: primera marca. Se repite en sentido contrario para la segunda marca. El **PMS está en el punto medio** entre ambas marcas, y se borran las dos marcas iniciales.
3. **Calcular el arco del avance**: con el diámetro de la polea (Ø, en mm) y el avance especificado (Y°), la distancia sobre el borde es:

**Z (mm) = Ø × 3,14 × Y° ÷ 360°**

Ejemplo ilustrativo (no es un dato del motor): una polea de 200 mm y un avance de 22° dan Z = 200 × 3,14 × 22 ÷ 360 ≈ 38,4 mm. Esa distancia se marca desde el PMS hacia la derecha; esa es la marca **PI** (punto de inyección).

<figure class="diagram">
<svg viewBox="0 0 800 330" role="img" aria-label="Esquema de la polea frontal con las marcas PMS y PI, el arco de avance y la fórmula para calcularlo" style="width:100%;height:auto;font-family:inherit">
<title>Marcas PMS y PI en la polea frontal</title>
<rect x="0" y="0" width="800" height="330" rx="12" fill="#f1f5f9"/>
<circle cx="230" cy="185" r="100" fill="#ffffff" stroke="#334155" stroke-width="3"/>
<circle cx="230" cy="185" r="22" fill="none" stroke="#334155" stroke-width="2"/>
<text x="230" y="240" text-anchor="middle" font-size="14" fill="#1e293b">Polea frontal</text>
<line x1="230" y1="75" x2="230" y2="100" stroke="#b91c1c" stroke-width="4"/>
<line x1="280" y1="98.4" x2="287.5" y2="85.4" stroke="#1d4ed8" stroke-width="4"/>
<path d="M230 62 A123 123 0 0 1 336.5 123.5" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="5 4"/>
<text x="230" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#b91c1c">PMS</text>
<text x="330" y="86" font-size="14" font-weight="bold" fill="#1d4ed8">PI</text>
<text x="322" y="150" font-size="14" fill="#1e293b">Y°</text>
<path d="M140 40 H206" fill="none" stroke="#475569" stroke-width="2"/>
<text x="136" y="45" text-anchor="end" font-size="13" fill="#1e293b">Indicador fijo</text>
<text x="470" y="100" font-size="16" font-weight="bold" fill="#1e293b">Z (mm) = Ø × 3,14 × Y° ÷ 360°</text>
<text x="470" y="140" font-size="15" fill="#1e293b">Ø = diámetro de la polea (mm)</text>
<text x="470" y="168" font-size="15" fill="#1e293b">Y° = avance de inyección (grados)</text>
<text x="470" y="196" font-size="15" fill="#1e293b">Z = arco desde el PMS hasta la marca PI</text>
<text x="470" y="236" font-size="14" fill="#1e293b">La marca PI se traza desde el PMS</text>
<text x="470" y="256" font-size="14" fill="#1e293b">hacia la derecha, según el curso.</text>
</svg>
<figcaption>La marca PI se ubica sobre el borde de la polea a una distancia Z del PMS, equivalente al avance especificado. Esquema ilustrativo propio, no a escala.</figcaption>
</figure>

4. **Verificar con la bomba manual de alta presión**: se conecta a la entrada de combustible de la bomba inyectora, se retira la válvula reguladora de presión (en su lugar va un tapón) y se desconecta la tubería de inyección del cilindro 1 para instalar un "cuello de cisne". Se gira la polea hasta que la marca PI quede cerca de 1/8 de vuelta antes del indicador, se bombea hasta que salga combustible sin aire y luego se gira el motor suavemente en su sentido de giro hasta que el flujo se reduzca a **una gota cada 10 segundos**. En ese instante la marca PI debe coincidir con el indicador.
5. **Corregir**: si la marca no llega al indicador, el punto de inyección está adelantado; si lo sobrepasa, está atrasado. Se afloja el machón de accionamiento de la bomba y se gira en el sentido de giro para adelantar o en el contrario para atrasar, se aprieta y se repite la verificación.
6. **Cerrar**: desmontar la bomba manual, el cuello de cisne y el tapón, instalar las tuberías y la válvula de sobrepresión, y **purgar el circuito** (ver más abajo).

La lógica del método (interpretación general, no texto del curso) es que la gota que se ralentiza marca el instante en que el elemento de bomba deja de recibir combustible libremente y empieza a presurizar, de modo que se toma una referencia física y no una estimación visual.

## Inyectores: la pulverización

Cada inyector de estos motores tiene una galería de combustible, una tobera, una arandela de estanqueidad (golilla) y una conexión de retorno. Dentro, un resorte mantiene la aguja cerrada hasta que la presión del combustible la levanta; por eso la **presión de apertura** es el dato central.

Presión de inyección según la tabla de datos generales del curso:

| Motor | Tobera nueva | Tobera usada |
|---|---|---|
| FL 912 W | 120 bar (tolerancia indicada de 8 bar) | 115 bar (misma tolerancia) |
| FL 413 FW/B | 135 bar (tolerancia indicada de 8 bar) | 125 bar (misma tolerancia) |

La diferencia entre tobera nueva y usada refleja que el resorte se asienta con las horas. El curso enumera cuatro pruebas de banco:

- **Presión de apertura**: a qué presión comienza a abrir la aguja.
- **Test de fuga**: si el inyector gotea por debajo de la presión de apertura.
- **Patrón de rocío**: forma y simetría del chorro.
- **Estanqueidad**: asentamiento de la aguja en su sede.

> **Advertencia de seguridad.** El combustible que sale de un inyector lo hace a presión suficiente para penetrar la piel y provocar inyección subcutánea, una emergencia médica aunque la herida parezca mínima. Pruebe los inyectores solo en un probador diseñado para eso, con el chorro dirigido a la cámara del equipo, con protección de ojos y rostro, y nunca sostenga la mano ni un trapo frente a la tobera ni busque fugas con los dedos. Nunca afloje una tubería de inyección con el motor en marcha.

### Vida útil y reemplazo en bloque

El curso es claro: la vida útil depende de factores externos (calidad del petróleo, filtrado, temperatura de trabajo) y se determina por estudio. Al alcanzarla, **se reemplazan todos los inyectores del motor**; no es aconsejable mezclar nuevos con usados porque produce fallas difíciles de determinar. Aplique el mismo criterio a las arandelas de estanqueidad.

### Cambio de inyectores en motores con precámara

En los motores de tipo W (con precámara) el curso indica que se necesitan herramientas especiales (llave para inyector y extractor de arandela; el curso deja los números de herramienta en blanco, así que debe consultarse el catálogo oficial). La secuencia es: aflojar la tuerca de fijación con la llave adecuada, extraer la arandela con el extractor, instalar una arandela nueva con el dispositivo y montar el inyector apretando la tuerca de fijación a **100 ± 10 N·m**. La tabla de apretes del curso para el inyector indica 100 a 110 N·m; ante la diferencia entre ambas páginas, use el valor del manual oficial de su motor.

Un detalle de la precámara que se olvida: en este diseño el combustible se inyecta en una cámara auxiliar de la culata, donde se inicia la combustión antes de pasar a la cámara principal. Un asiento deficiente de la arandela o una arandela reutilizada provoca fuga de gases de combustión hacia el inyector, pérdida de compresión y carbonilla. Si desea comparar este diseño con la inyección directa, consulte [cámara de combustión: inyección directa e indirecta](/posts/camara-combustion-diesel-inyeccion-directa-indirecta/).

## Purga del sistema

Cualquier intervención (cambio de filtro, tanque vacío, reemplazo de bomba, desmontaje de tuberías) introduce aire, y el aire comprimido en las líneas absorbe el pulso de inyección. Una secuencia general de purga, siempre con el procedimiento del manual como referencia:

1. Verificar que el tanque tiene combustible y que la llave de paso (si existe) está abierta.
2. Accionar la bomba manual de cebado hasta sentir resistencia firme y ver combustible sin burbujas en los puntos de purga del filtro.
3. Aflojar los tornillos de purga del filtro y de la bomba inyectora, uno a la vez, hasta que salga combustible sin aire; apretar cada uno con el combustible aún saliendo.
4. Si el motor sigue sin arrancar, aflojar un poco las tuercas de las tuberías en los inyectores y arrancar brevemente, recogiendo el combustible y cuidando el chorro (ver advertencia anterior).
5. Retirar derrames, apretar todo y arrancar. Un motor que arranca y se detiene sigue teniendo aire: revisar uniones en la succión.

Si el motor es de tipo W con precalentamiento, recuerde que el curso describe un circuito de arranque en dos etapas (precalentamiento hasta que se ilumina el testigo, luego alimentación directa de bujías y sobreinyección durante el arranque) que mejora la partida en frío y reduce el humo; una falla ahí imita un problema de combustible. Para entender este circuito, revise [pre y poscalentamiento en motores diésel](/posts/pre-poscalentamiento-motores-diesel-clave-para-un-arranque-eficiente-y-duradero/).

## Diagnóstico: del síntoma a la causa

Esta tabla organiza causas probables por frecuencia de campo, partiendo de lo más barato de verificar. Es una guía general, no un manual de averías del fabricante.

| Síntoma | Causas probables, de más a menos frecuente | Primera verificación |
|---|---|---|
| **Arranque difícil** | Aire en el circuito; filtro tapado; bomba de alimentación con válvulas dañadas; combustible vaciado por la línea de retorno; avance atrasado; precalentamiento defectuoso (motores W) | Purgar y observar si sale combustible con burbujas; medir presión a la entrada de la bomba inyectora |
| **Humo blanco** | Avance atrasado; inyectores con baja presión de apertura o goteo; agua en el combustible; motor frío o con mala compresión | Verificar punto de inyección; probar inyectores; drenar el tanque |
| **Humo negro** | Exceso de combustible para la altitud; filtro de aire o posenfriador sucios; inyectores con mal patrón de pulverización; avance incorrecto | Revisar admisión y enfriador; comparar caudal máximo con el valor del manual |
| **Pérdida de potencia** | Filtros restringidos; baja presión de alimentación; caudal máximo reducido por un ajuste previo; inyectores desgastados; compresión baja | Presión de entrada a la bomba; confirmar el ajuste del tope de potencia |
| **Golpeteo diésel** | Avance excesivo; presión de apertura baja o aguja pegada; aire en el sistema | Comprobar punto de inyección; probar el inyector del cilindro que golpea |
| **Funcionamiento irregular / ralentí inestable** | Aire que entra por una unión; un inyector con fuga; elemento de bomba con desgaste | Mirar uniones húmedas en la succión; desconectar un cilindro a la vez |

El curso añade un dato útil para el humo negro en motores turboalimentados: el posenfriador sucio entrega aire más caliente y con menos oxígeno por litro, lo que produce humo negro y falta de potencia. Antes de manipular la bomba, revise que el aire llegue frío y limpio.

## El contexto latinoamericano: combustible de calidad variable

En muchos países de la región el diésel llega con más azufre, más agua y más partículas que el combustible para el que se diseñó el motor, y a eso se suman los tanques de campo, tambores rellenados y la humedad de zonas costeras o selváticas. Tres prácticas pagan su costo rápido:

- **Drenar el tanque y el separador de agua con frecuencia**, sobre todo después de lluvias o de recibir combustible a granel. Si necesita profundizar en el procedimiento, vea [vaciado de agua del sistema de combustible](/posts/vaciado-agua-combustible/).
- **Filtrar en origen**: un embudo con malla fina y un filtro separador antes del tanque cuestan menos que un juego de inyectores.
- **Registrar cada cambio de filtro** y la apariencia del elemento retirado: un filtro que se tapa rápido es una pista del combustible, no del filtro.

Para ampliar los fundamentos del circuito en otros motores diésel, revise [componentes y funcionamiento del sistema de combustible](/posts/componentes-funcionamiento-sistemas-combustible/), la [guía de combustible, admisión y escape](/posts/guia-combustible-admision-escape-motores-diesel/) y los [sistemas de alimentación con bombas de inyección](/posts/sistema-alimentacion-motor-diesel/). Si el problema se aproxima a compresión o culata, continúe con [mantenimiento del motor Deutz: aceite, compresión y culata](/posts/mantenimiento-motor-deutz-aceite-compresion-culata/), y para los datos generales de las series consulte los [datos técnicos del Deutz 912 refrigerado por aire](/posts/motor-deutz-912-refrigerado-por-aire-datos-tecnicos/).

## Resumen

El sistema de combustible de un Deutz FL 912 o B/FL 413 se entiende mejor si se piensa en **tres verbos** (dosificar, sincronizar, pulverizar) y **tres zonas** (tanque y baja presión, bomba inyectora, inyectores). La mayoría de las fallas nacen en la primera zona: material de tanque, retorno mal ubicado, aire en las uniones, filtros y agua. Después se verifica el avance con el método de la polea y la gota cada 10 segundos, se prueban los inyectores con las precauciones de seguridad y se reemplazan en bloque. Y para cualquier valor que vaya a aplicar, el manual oficial del motor exacto manda sobre este resumen.

**Fuentes:** Curso de capacitación técnica Motor Deutz (Deutz Service Training), páginas sobre sistema de combustible y datos generales de motores, publicado en [Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/167-curso-capacitacion-tecnica-motor-deutz). Los valores citados corresponden a ese curso y son referenciales; verificar siempre en el manual del fabricante.

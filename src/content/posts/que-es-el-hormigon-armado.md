---
title: Qué es el hormigón armado y cómo funciona
published: 2026-05-06
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo trabajan juntos hormigón y acero: resistencias f'c, recubrimientos, corrosión, proceso constructivo, un ejemplo de viga y los errores de obra más frecuentes."
category: construccion
formato: concepto
nivel: intermedio
tags:
  - "hormigon-armado"
  - "estructuras"
  - "acero-de-refuerzo"
  - "recubrimiento"
  - "materiales"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/que-es-el-hormigon-armado
author: redaccion-tecnica
aiAssisted: true
faq:
  - q: ¿Cuál es la diferencia entre hormigón y hormigón armado?
    a: El hormigón simple resiste bien la compresión pero muy poco la tracción, por lo que se agrieta y falla de forma frágil cuando se flexiona. El hormigón armado lleva barras de acero embebidas que toman la tracción, y estribos que resisten el corte. Así se pueden construir vigas, losas y cualquier elemento sometido a flexión. Cabe aclarar que hormigón y concreto son el mismo material con distinto nombre según el país.
  - q: ¿Por qué se llama armado?
    a: Por las barras de acero que forman la armadura, el esqueleto interno que se coloca antes de verter el hormigón. La armadura se diseña según los esfuerzos que recibirá cada elemento, en cantidad, diámetro y posición. Un elemento con la armadura mal colocada no tiene la resistencia calculada, aunque el hormigón sea bueno.
  - q: ¿Cuánto dura una estructura de hormigón armado?
    a: Una estructura bien diseñada, construida y mantenida puede superar los 50 años de vida útil, y muchas pasan de 100. No hay una cifra única, porque depende del ambiente, de la calidad del hormigón y del recubrimiento. Lo que suele limitar la vida útil no es el hormigón sino la corrosión del acero, causada por la carbonatación o por los cloruros en ambientes marinos o con sales.
  - q: ¿Qué significa f'c = 210 kg/cm²?
    a: Es la resistencia a compresión especificada del hormigón a los 28 días, medida en probetas cilíndricas normalizadas. 210 kg/cm² equivalen a unos 21 MPa. Es el valor que el proyectista exige y que el hormigón debe superar en los ensayos. No indica la resistencia a tracción, que es solo una fracción de esa cifra.
  - q: ¿Se puede agregar agua al hormigón en obra para que fluya mejor?
    a: No es recomendable. Cada litro de agua adicional aumenta la relación agua/cemento, lo que baja la resistencia y la durabilidad y aumenta la fisuración por retracción. Si la mezcla está seca para colocar, se corrige con un aditivo plastificante dosificado por el proveedor, no con agua de la manguera.
  - q: ¿Por qué el hormigón y el acero trabajan bien juntos?
    a: Por tres razones. Se adhieren entre sí, sobre todo con barras corrugadas. Se dilatan casi igual con la temperatura, lo que evita tensiones internas cuando cambia. Y el hormigón, por su alcalinidad, forma una capa pasiva alrededor del acero que lo protege de la oxidación mientras esté sano y con recubrimiento suficiente.
related:
  - que-es-la-resistencia-del-hormigon-fc
  - tipos-de-cimentacion-en-construccion
  - diferencia-entre-viga-y-columna
  - como-se-calcula-el-cubicaje-de-hormigon
  - diferencia-entre-cemento-hormigon-y-concreto
reviewedBy: redaccion-tecnica
---

El **hormigón armado** (o concreto reforzado) es el material estructural más
usado en el mundo. Cimentaciones, columnas, vigas, losas, muros de
contención, puentes y presas se construyen con él, porque combina dos
materiales con virtudes complementarias, se moldea en casi cualquier forma
y los ingredientes se consiguen en casi todas partes.

Este artículo explica por qué funciona, qué cifras manda conocer, cómo se
construye un elemento, qué hace durar o fallar a una estructura y un
ejemplo de cálculo sencillo para ver el orden de magnitud de la armadura.

## El problema que resuelve

El **hormigón** es una mezcla de cemento, agua, arena y grava. Al endurecer
se comporta como una piedra artificial: aguanta muy bien el **aplastamiento**
(compresión) y mal el **estiramiento** (tracción).

| Esfuerzo | Hormigón simple | Qué significa |
|---|---|---|
| Compresión | Alta: típicamente 175 a 350 kg/cm² (17 a 35 MPa) o más | Soporta columnas y muros cargados |
| Tracción | Baja: del orden del 8 al 12 % de la compresión | Se agrieta con poco estiramiento |

Una columna que solo recibe carga vertical y centrada podría hacerse de
hormigón simple. Una **viga** no: al flexionarse, la cara superior se
comprime y la inferior se estira. Una viga sin armadura falla de golpe por
la cara inferior, sin aviso, apenas la tracción supera esa resistencia baja.

El **acero** resiste muy bien la tracción, pero se pandea con facilidad si
trabaja a compresión en piezas esbeltas y se corroe si queda expuesto.

## La idea: cada material hace lo que mejor sabe

Al embeber barras de acero en el hormigón:

- El **hormigón** toma la compresión, protege al acero del fuego y de la
  oxidación y lo mantiene en posición.
- El **acero** toma la tracción y los esfuerzos de corte (con estribos) donde
  el hormigón no alcanza.

Tres coincidencias físicas hacen posible el material:

1. **Adherencia.** El hormigón se agarra a la superficie de las barras;
   las barras **corrugadas** tienen resaltes que mejoran ese agarre.
2. **Dilatación térmica similar.** Ambos materiales se dilatan en el
   orden de 10 a 12 millonésimas por grado, así que no se separan con los
   cambios de temperatura.
3. **Protección química.** El hormigón fresco es muy alcalino (pH cercano a
   12,5 o más) y crea sobre el acero una película que lo mantiene sin
   corroerse mientras esa alcalinidad se conserve.

## Datos que conviene tener claros

| Dato | Valor típico | Observaciones |
|---|---|---|
| Resistencia del hormigón f'c | 175, 210, 280, 350 kg/cm² | Equivalen a 17,5; 21; 28 y 35 MPa |
| Fluencia del acero fy | 4200 kg/cm² (420 MPa) | Acero corrugado grado 60 habitual en América Latina |
| Peso unitario del hormigón armado | Aprox. 2400 a 2500 kg/m³ | Sirve para estimar cargas muertas |
| Módulo de elasticidad del hormigón | Ec ≈ 15 100 × √f'c (kg/cm²) | Para f'c = 210: aprox. 219 000 kg/cm² |
| Módulo de elasticidad del acero | Es ≈ 2 100 000 kg/cm² | Casi 10 veces el del hormigón |

La resistencia **f'c** se mide en probetas cilíndricas de 15 × 30 cm
ensayadas a los 28 días. Qué f'c se usa en cada parte lo define el proyecto:

- **f'c = 175 kg/cm²:** elementos no estructurales o de baja solicitación,
  veredas, solados.
- **f'c = 210 kg/cm²:** muy común en viviendas y edificios de pocos pisos.
- **f'c = 280 kg/cm²:** edificios de mediana altura y elementos más
  cargados.
- **f'c = 350 kg/cm² o más:** edificios altos, puentes, pretensado,
  ambientes agresivos.

Para detalles sobre qué mide ese número y cómo se controla en obra, consulta
[qué es la resistencia del hormigón f'c](/posts/que-es-la-resistencia-del-hormigon-fc/).

## Los elementos de la armadura

- **Barras longitudinales:** toman la tracción por flexión y ayudan a la
  compresión en columnas.
- **Estribos:** aros de barra delgada que resisten el corte, confinan el
  hormigón y evitan que las barras longitudinales se pandeen. Sus
  separaciones se reducen cerca de los apoyos y en zonas sísmicas.
- **Malla electrosoldada:** retícula de alambres, usada en losas,
  pavimentos y contrapisos.
- **Separadores o calzas:** tacos que mantienen la armadura en su posición
  y garantizan el recubrimiento.

Los diámetros más comunes de barra corrugada en la región van desde 6 u 8
mm hasta 25 mm o más, y el peso por metro se obtiene con **0,00617 × d²**
(d en mm, resultado en kg/m). Una barra de 12 mm pesa 0,00617 × 144 ≈
0,89 kg/m; una de 12 m de largo, unos 10,7 kg. La
[calculadora de kilos de acero por varilla](/herramientas/kilos-de-acero-por-varilla/)
hace ese cálculo por diámetro y longitud.

## Cómo se construye un elemento

1. **Replanteo y encofrado.** Se traza el elemento y se arma el molde, que
   debe ser rígido, estanco y estar limpio. Para estimar madera, usa la
   [calculadora de encofrado](/herramientas/encofrado-madera-por-m2/).
2. **Armado.** Se corta, dobla y amarra la armadura según los planos, con
   estribos en las posiciones y separaciones indicadas. Se colocan los
   separadores.
3. **Revisión previa al vaciado.** Diámetros, cantidades, traslapes,
   recubrimiento, limpieza del encofrado y pases de instalaciones. Es el
   último momento para corregir.
4. **Vaciado.** El hormigón se coloca sin dejar caer desde gran altura, para
   evitar la segregación (que la grava se separe del mortero).
5. **Vibrado.** Se compacta para eliminar el aire atrapado y llenar entre
   las barras. Sin vibrado aparecen nidos de piedra o "hormigueros".
6. **Curado.** Se mantiene húmedo el hormigón durante varios días (7 es una
   referencia común, pero el proyecto o la norma mandan) para que
   desarrolle resistencia y no se fisure por secado rápido.
7. **Desencofrado.** Se retira el molde cuando el hormigón alcanzó la
   resistencia necesaria, según el elemento. Las losas y vigas se
   desencofran más tarde que los costados de columnas.

La resistencia de proyecto se alcanza a los 28 días, pero el hormigón gana
buena parte de ella en la primera semana, por eso se puede avanzar sin
esperar un mes completo. Las cantidades de material se estiman con la
[calculadora de cubicaje de hormigón](/herramientas/cubicaje-de-hormigon/)
y la de [bolsas de cemento por m³](/herramientas/bolsas-de-cemento-por-metro-cubico/).

## Recubrimiento: la capa que protege al acero

El **recubrimiento** es la distancia entre la superficie del hormigón y la
barra más cercana (estribo incluido). Es el factor más influyente en la
durabilidad: protege al acero del aire, la humedad, el fuego y los
agentes químicos.

Valores mínimos de referencia según el código ACI 318, que sirve de base
a muchas normas de la región. **Verifica siempre la norma que aplica en tu país
y las condiciones de exposición del proyecto:**

| Condición | Recubrimiento mínimo aprox. |
|---|---|
| Hormigón colocado directamente contra el suelo | 75 mm (7,5 cm) |
| Expuesto a intemperie o en contacto con el suelo, barras de 19 mm o más | 50 mm |
| Expuesto a intemperie, barras de 16 mm o menos | 40 mm |
| Vigas y columnas en interior | 40 mm |
| Losas y muros en interior, barras hasta 36 mm | 20 mm |

En obra se usa a veces un **hormigón de limpieza** (una capa delgada de
hormigón pobre) bajo las zapatas; en ese caso, algunos códigos aceptan
un recubrimiento menor al de contacto directo con el suelo. Las normas
locales y el proyecto mandan.

### Por qué falla el acero

El acero se corroe cuando se destruye su protección. Hay dos causas
principales:

- **Carbonatación.** El CO₂ del aire penetra en el hormigón y baja su
  alcalinidad. Cuando el frente de carbonatación llega al acero, comienza
  la oxidación.
- **Cloruros.** En ambientes marinos o con sales de deshielo, los cloruros
  rompen la capa protectora aun con el hormigón alcalino.

El óxido ocupa varias veces el volumen del acero, empuja el hormigón desde
adentro y lo agrieta y desprende. Es el deterioro típico de balcones,
fachadas y estructuras costeras. Un hormigón compacto, de baja relación
agua/cemento y con recubrimiento suficiente retrasa mucho ese proceso.

## Ejemplo: orden de magnitud de la armadura de una viga

Una viga simplemente apoyada de **4 m de luz**, sección **25 × 40 cm**
(d = 35 cm de altura útil), recibe una carga mayorada de **20 kN/m**,
f'c = 21 MPa y fy = 420 MPa.

1. Momento máximo: M = w × L² / 8 = 20 × 4² / 8 = **40 kN·m**.
2. Armadura a tracción aproximada: As ≈ M / (φ × fy × 0,9 × d), con
   φ = 0,9: As ≈ 40 × 10⁶ N·mm / (0,9 × 420 × 0,9 × 350) ≈ **340 mm²**,
   es decir, 3,4 cm².
3. Se elige 2 varillas de 16 mm, con 4,02 cm². Cuantía: 4,02 / (25 × 35) ≈
   0,46 %.
4. Cuantía mínima de flexión: 1,4 / fy = 1,4 / 420 ≈ 0,33 %. La cuantía
   cumple.

Este cálculo es solo ilustrativo. Un diseño real revisa cortante,
deflexiones, anclajes, cargas combinadas y detalles sísmicos, y lo firma un
ingeniero estructural. Sirve para entender por qué una viga tiene "dos
fierros abajo" y por qué no cualquier viga se puede copiar de otra obra.

## Ventajas e inconvenientes

| Ventajas | Inconvenientes |
|---|---|
| Material económico y de disponibilidad amplia | Pesado: unos 2400 a 2500 kg/m³ |
| Se moldea a casi cualquier forma | Requiere encofrado y mano de obra cuidadosa |
| Buena resistencia al fuego | La calidad depende de la ejecución en obra |
| Durable con buen recubrimiento | Corrosión del acero si hay fisuras y exposición |
| Monolítico, buen comportamiento ante cargas repetidas | Modificar o demoler es costoso |

## Errores frecuentes en obra

- **Agregar agua a la mezcla para que fluya.** Baja la resistencia.
- **Falta de separadores.** Las barras se apoyan en el encofrado, quedan sin
  recubrimiento y se oxidan.
- **Armaduras mal dobladas o con traslapes cortos.** El acero no desarrolla
  su capacidad si no está anclado.
- **Vibrado insuficiente o excesivo.** El primero deja huecos, el segundo
  segrega el material.
- **Curado omitido.** Una losa expuesta al sol sin curar se fisura y pierde
  resistencia superficial.
- **Juntas frías.** Si se interrumpe el vaciado y no se trata la junta, queda
  un plano débil.
- **Cortar o desplazar armadura para pasar tuberías.** Los pases deben
  preverse en el diseño.
- **Desencofrar demasiado pronto.** La losa puede deformarse o fisurarse.
- **Confundir las resistencias del proyecto con las del pedido.** Pide el
  f'c que figura en los planos, y exige el comprobante.

:::tip
**Qué revisar antes de autorizar el vaciado.** Diámetro y cantidad de
barras, separación de estribos, recubrimiento con separadores, limpieza
del encofrado (sin aserrín ni alambres) y apuntalamiento. Hacerlo toma una
hora y evita la demolición de una losa.
:::

## Dónde se usa

- **Cimentaciones:** zapatas, losas, pilotes, vigas de cimentación.
- **Estructura vertical:** columnas y muros de corte.
- **Estructura horizontal:** vigas, losas y escaleras.
- **Contención:** muros de contención y cisternas.
- **Infraestructura:** puentes, túneles, presas y pavimentos.

Para ver cómo se combina con el suelo, revisa [tipos de cimentación en
construcción](/posts/tipos-de-cimentacion-en-construccion/). Para entender
la función de cada elemento, la guía de [viga y columna](/posts/diferencia-entre-viga-y-columna/).

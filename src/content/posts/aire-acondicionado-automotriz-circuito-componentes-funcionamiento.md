---
title: "Aire acondicionado automotriz: circuito, componentes y funcionamiento"
published: 2026-11-26
draft: false
featured: false
description: "Cómo enfría el aire acondicionado del auto: compresor, condensador, filtro deshidratante, válvula de expansión, evaporador, refrigerante, aceite y diagnóstico."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "aire-acondicionado"
  - "climatizacion-automotriz"
  - "refrigerante-r134a"
  - "compresor-de-aire-acondicionado"
  - "mecanica-automotriz"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/climatizacion/aire-acondicionado-automotriz-circuito-componentes-funcionamiento
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Por qué el aire acondicionado del auto deja de enfriar si no hay una fuga visible?"
    a: "Muchas fugas de refrigerante son lentas y no dejan mancha, porque el fluido escapa como gas. Aun así, un circuito al que le falta carga casi siempre tiene una fuga en algún racor, junta, manguera o en el condensador. Otras causas sin fuga son un filtro deshidratante saturado, una válvula de expansión bloqueada, aire en el circuito o un embrague del compresor que no acopla. Por eso conviene medir presiones y temperaturas antes de recargar."
  - q: "¿Cada cuánto se cambia el filtro deshidratante del aire acondicionado?"
    a: "El curso de Valeo recomienda cambiarlo cada dos años y, además, siempre que se abra el circuito para una reparación. El desecante que contiene se satura de humedad con el tiempo y deja de proteger al compresor y a la válvula de expansión. El mismo criterio aplica al acumulador en los sistemas con orificio calibrado. Consulte también el plan de mantenimiento del fabricante del vehículo."
  - q: "¿Se puede mezclar refrigerante R12 con R134a o cambiar el tipo de aceite?"
    a: "No. El curso insiste en que R12 y R134a son incompatibles y que nunca deben mezclarse, y lo mismo vale para los aceites: el mineral corresponde al R12 y los sintéticos (PAG o éster) al R134a. Una mezcla altera la lubricación y puede dañar el compresor. Antes de añadir aceite o refrigerante, verifique el tipo indicado en la etiqueta del vehículo o en su manual."
  - q: "¿Qué temperatura debe salir por las rejillas con el aire acondicionado encendido?"
    a: "Como referencia del curso, con una temperatura ambiente de 15 a 25 °C, un circuito en buen estado entrega aire entre 2 y 10 °C en los difusores. Con más calor afuera el valor sube, y la medición depende del modo de prueba (recirculación, ventilador al máximo, régimen estable). Es un indicador de rendimiento, no un diagnóstico completo."
  - q: "¿Para qué sirven el subenfriamiento y el recalentamiento?"
    a: "Son las dos mediciones que permiten saber si la carga de refrigerante es correcta sin vaciar el circuito. El subenfriamiento se calcula en el lado de alta presión y el recalentamiento en el de baja; en el ejemplo del curso, ambos deberían quedar entre 2 y 10 °C. Valores fuera de ese rango orientan hacia falta o exceso de fluido, o hacia un filtro saturado."
sources:
  - title: "Curso: circuito de climatización, partes, funciones, diagramas y fluidos A/C — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/1791-curso-circuito-climatizacion-partes-funciones-diagramas-fluidos-ac"
related:
  - funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores
  - aceites-minerales-vs-sinteticos
  - sensores-en-vehiculos-modernos-tipos-funciones
---

El aire acondicionado de un auto no "fabrica" frío: saca calor del aire del
habitáculo y lo lleva afuera, al frente del vehículo. Para hacerlo usa un
fluido que hierve a baja temperatura y un circuito cerrado que lo obliga a
evaporarse y condensarse una y otra vez. Si entiende en qué punto del
circuito el fluido es gas o líquido, y a qué presión, entiende también cómo
se diagnostica casi cualquier falla.

Esta guía recorre el ciclo frigorífico, los componentes, los refrigerantes y
aceites, y el diagnóstico básico con manómetros y termómetro. Está basada en un curso de formación de **Valeo Clim Service**,
por lo que las presiones, temperaturas e intervalos que se citan son
**ejemplos de ese curso**. Para cargas, pares y presiones de servicio,
prevalece el manual del vehículo.

## Principios: el calor siempre va del cuerpo caliente al frío

Todo el sistema se apoya en tres ideas de termodinámica que el curso explica
antes de mostrar una sola pieza.

- **El calor pasa del más caliente al más frío.** Como en el radiador del
  motor. Aquí, el aire del habitáculo cede calor al refrigerante en el
  evaporador, y el refrigerante lo cede al aire exterior en el condensador.
- **Cambiar de estado absorbe o libera mucha energía.** El curso usa el agua
  como ejemplo: llevar 1 kg de agua de 0 a 100 °C cuesta unos 420 kJ (calor
  sensible), pero evaporarlo a 100 °C exige unos 2.250 kJ (calor latente) sin
  que la temperatura suba. El refrigerante aprovecha ese calor latente.
- **La temperatura de ebullición depende de la presión.** Con vacío, el agua
  hierve a 30 °C. El refrigerante, a baja presión, hierve cerca de 0 °C; a
  alta presión se condensa aunque esté a 60 °C. El compresor y la válvula de
  expansión crean esas dos presiones.

Un dato del curso explica por qué las mangueras tienen diámetros distintos:
1,2 kg de R134a a 20 °C ocupan 1 litro como líquido y 31 litros como gas. Por
eso las líneas de alta presión, que llevan líquido, son delgadas, y las de baja
presión, que llevan gas, son más gruesas.

## El ciclo frigorífico en cuatro etapas

El curso representa el ciclo sobre el **diagrama de Mollier** (presión frente
a entalpía) y lo divide en cuatro etapas, numerando ocho puntos del circuito.

1. **Compresión (1 → 2).** El compresor aspira gas a baja presión y lo
   descarga a alta presión y alta temperatura.
2. **Condensación (2 → 5).** En el condensador, el gas primero se enfría,
   luego se condensa a temperatura constante y al final se **subenfría**
   como líquido.
3. **Expansión (5 → 6).** La válvula de expansión deja pasar el líquido por un
   orificio estrecho: la presión cae de golpe y con ella la temperatura. A la
   salida, el fluido es una mezcla de líquido y gas.
4. **Evaporación (6 → 8).** En el evaporador, el líquido restante hierve
   tomando calor del aire que va al habitáculo; al final se **recalienta** unos
   grados ya como gas, y vuelve al compresor.

<figure class="diagram">
<svg viewBox="0 0 760 540" role="img" aria-label="Esquema del circuito de aire acondicionado con válvula de expansión: compresor, condensador, filtro deshidratante, válvula de expansión y evaporador unidos por líneas de alta presión en rojo y de baja presión en azul, con ocho puntos numerados y una tabla con la presión, la temperatura y el estado del refrigerante en cada punto según el ejemplo del curso" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="760" height="540" rx="14" fill="#f8fafc"/>
<text x="380" y="28" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Circuito de A/C con válvula de expansión (ejemplo del curso, R134a)</text>
<line x1="210" y1="48" x2="240" y2="48" stroke="#dc2626" stroke-width="5"/>
<text x="248" y="52" font-size="12" fill="#0f172a">Alta presión (HP)</text>
<line x1="420" y1="48" x2="450" y2="48" stroke="#0284c7" stroke-width="5"/>
<text x="458" y="52" font-size="12" fill="#0f172a">Baja presión (BP)</text>
<g fill="none" stroke-width="5" stroke-linejoin="round">
<path d="M310 100 V72 H95 V90" stroke="#dc2626"/>
<path d="M120 305 H180 V350 H290" stroke="#dc2626"/>
<path d="M336 350 H520" stroke="#dc2626"/>
<path d="M550 350 H615 V320" stroke="#0284c7"/>
<path d="M615 90 V72 H460 V135 H430" stroke="#0284c7"/>
</g>
<rect x="70" y="90" width="50" height="230" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<g stroke="#b91c1c" stroke-opacity="0.35" stroke-width="1.5">
<line x1="70" y1="150" x2="120" y2="150"/><line x1="70" y1="190" x2="120" y2="190"/><line x1="70" y1="230" x2="120" y2="230"/><line x1="70" y1="270" x2="120" y2="270"/>
</g>
<text x="95" y="342" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Condensador</text>
<circle cx="272" cy="135" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<circle cx="272" cy="135" r="5" fill="#334155"/>
<rect x="290" y="100" width="140" height="70" rx="10" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<text x="360" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Compresor</text>
<rect x="290" y="318" width="46" height="70" rx="14" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="313" y="408" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Filtro deshidratante</text>
<rect x="520" y="336" width="30" height="28" rx="3" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="535" y="384" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Válvula de expansión</text>
<rect x="590" y="90" width="50" height="230" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<g stroke="#0369a1" stroke-opacity="0.35" stroke-width="1.5">
<line x1="590" y1="150" x2="640" y2="150"/><line x1="590" y1="190" x2="640" y2="190"/><line x1="590" y1="230" x2="640" y2="230"/><line x1="590" y1="270" x2="640" y2="270"/>
</g>
<text x="700" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Evaporador</text>
<g fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M18 212 H60 M52 205 L60 212 L52 219" stroke="#0369a1"/>
<path d="M128 212 H170 M162 205 L170 212 L162 219" stroke="#b91c1c"/>
<path d="M500 212 H580 M572 205 L580 212 L572 219" stroke="#b45309"/>
<path d="M648 212 H700 M692 205 L700 212 L692 219" stroke="#0369a1"/>
</g>
<g font-size="11" fill="#0f172a">
<text x="18" y="185">Aire</text>
<text x="18" y="200">35 °C</text>
<text x="130" y="200" fill="#b91c1c">70 °C</text>
<text x="500" y="200">Aire 38 °C</text>
<text x="650" y="200">10 °C</text>
<text x="650" y="234">al habitáculo</text>
</g>
<g fill="#0f172a">
<circle cx="460" cy="105" r="11"/><circle cx="250" cy="72" r="11"/><circle cx="95" cy="120" r="11"/><circle cx="95" cy="285" r="11"/>
<circle cx="235" cy="350" r="11"/><circle cx="585" cy="350" r="11"/><circle cx="615" cy="130" r="11"/><circle cx="540" cy="72" r="11"/>
</g>
<g font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">
<text x="460" y="109">1</text><text x="250" y="76">2</text><text x="95" y="124">3</text><text x="95" y="289">4</text>
<text x="235" y="354">5</text><text x="585" y="354">6</text><text x="615" y="134">7</text><text x="540" y="76">8</text>
</g>
<rect x="20" y="424" width="720" height="102" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
<g font-size="12" fill="#0f172a">
<text x="36" y="446">1 Aspiración del compresor: gas, 3 bar, 5 °C</text>
<text x="36" y="466">2 Descarga del compresor: gas, 20 bar, 110 °C</text>
<text x="36" y="486">3 a 4 Condensación: líquido + gas, 19 bar, 65 °C</text>
<text x="36" y="506">5 Salida del condensador: líquido, 19 bar, 60 °C</text>
<text x="400" y="446">6 Entrada evaporador: líquido + gas, 3 bar, −1 °C</text>
<text x="400" y="466">6 a 7 Evaporación: líquido + gas, 3 bar, −1 °C</text>
<text x="400" y="486">8 Salida evaporador: gas recalentado, 3 bar, 3 °C</text>
<text x="400" y="506" font-size="11" fill="#475569">Valores de ejemplo del curso, no de servicio.</text>
</g>
</svg>
<figcaption>Circuito de aire acondicionado con válvula de expansión termostática y los ocho puntos que usa el curso de Valeo. El rojo marca el lado de alta presión y el azul el de baja. Ilustración propia, no a escala; las presiones y temperaturas son el ejemplo didáctico del curso.</figcaption>
</figure>

Los valores del esquema, tomados del ejemplo del curso, se resumen así:

| Punto | Lugar | Estado | Presión (bar) | Temperatura (°C) |
|---|---|---|---|---|
| 2 | Entrada al condensador | Gas | 20 | 110 |
| 2–3 | Enfriamiento del gas | Gas | 20–19 | 110–65 |
| 3–4 | Condensación | Líquido + gas | 19 | 65 |
| 4–5 | Subenfriamiento | Líquido | 19 | 60 |
| 6 | Entrada al evaporador | Líquido + gas | 3 | −1 |
| 6–7 | Evaporación | Líquido + gas | 3 | −1 |
| 7–8 | Recalentamiento | Gas | 3 | +3 |

Durante la condensación y la evaporación la temperatura no cambia: el calor se
usa en el cambio de estado. En el ejemplo, el aire exterior pasa por el
condensador de 35 a 70 °C, y el del habitáculo por el evaporador de 38 a 10 °C.

El curso no aclara si sus presiones son absolutas o relativas. Como criterio
general, las tablas de R134a dan alrededor de 19 bar **absolutos** para
condensar a 65 °C, de modo que el ejemplo parece expresado en presión
absoluta; los manómetros de taller leen presión **relativa**, cerca de 1 bar
menos. Si necesita pasar de bar a psi, use el
[conversor de presión y torque](/herramientas/conversor-presion-torque/).

## Componentes principales del circuito

### Compresor

Va fijado al bloque del motor y lo mueve la correa de accesorios, que a veces
también acciona la bomba de refrigerante y el alternador. Tiene dos
funciones: hacer circular el refrigerante por todo el circuito y comprimirlo
entre la salida del evaporador y la entrada del condensador.

El curso clasifica las tecnologías en tres grupos:

- **Alternativos:** de pistones con biela y manivela, o de pistones con
  plato oscilante (tipo "revólver"), donde un plato inclinado transforma el
  giro del eje en el vaivén de los pistones.
- **Rotativos:** de paletas.
- **Pseudorrotativos:** de espiral o *scroll*.

En los compresores de **cilindrada variable**, la inclinación del plato
cambia la carrera de los pistones según la presión en el cárter, que regula
una válvula de control. El caudal se ajusta a la demanda, sin el ciclo "todo
o nada" del compresor fijo: menos tirones al motor, aire más estable y mayor
vida del embrague y las correas.

El compresor se conecta con un **embrague electromagnético**: al energizar la
bobina, el campo magnético atrae el plato de embrague hacia la polea, vence
las láminas elásticas y el giro pasa al eje. Cuando el habitáculo alcanza la
temperatura pedida, el control lo desconecta. Esa carga que entra y sale es la
que el motor compensa en ralentí; vea cómo lo hace en
[la válvula de control de ralentí ISCV](/posts/funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores/).

**Averías típicas según el curso:** agarrotamiento por falta de lubricación o
por suciedad en el circuito, fugas por las juntas de culata y retenes, placa
de válvulas dañada, corrosión interna por humedad, fallas eléctricas del
embrague y rotura interna por llegada de refrigerante **líquido** al
compresor, que solo debe aspirar gas.

### Condensador

Está en el frente del vehículo, entre el compresor y el filtro deshidratante.
Es un intercambiador de calor: el gas caliente que sale del compresor cede su
calor al aire que lo atraviesa y se convierte en líquido. El curso muestra dos
construcciones (tubos con intercaladores y serpentín) y pide reemplazarlo por
uno de prestaciones equivalentes.

**Averías típicas:** perforación por corrosión, aletas tapadas por insectos
u otros cuerpos extraños, fugas en los racores de entrada y salida, y falta de
rendimiento por montar un condensador "adaptable" en lugar del específico.

### Filtro deshidratante

Se ubica entre el condensador y la válvula de expansión, en el compartimento
del motor. Cumple tres tareas: es un **depósito** de refrigerante líquido,
contiene un **desecante** que retiene el agua y tiene **filtros** para las
impurezas. El refrigerante entra con algo de gas en la parte alta, atraviesa
filtro y desecante, se acumula en el fondo y sale por un tubo que aspira desde
abajo para enviar solo líquido. Algunos llevan un **testigo** (visor).

Si el desecante se satura, ocurren dos cosas: el filtro se obstruye y provoca
una caída de presión antes de la válvula (la **preexpansión**), y el agua
reacciona con el aceite y forma ácidos que corroen el compresor y la válvula
de expansión. Valeo recomienda cambiarlo **cada dos años** y **siempre que se
abra el circuito**. En un circuito sin fugas, la humedad puede entrar por
mangueras en mal estado.

### Válvula de expansión termostática

Está siempre junto al evaporador, a su entrada. Es un orificio regulable que
baja la presión del refrigerante y, a la vez, **dosifica el caudal** que entra
al evaporador para mantener constante el recalentamiento a la salida. Sus
características principales son la capacidad frigorífica y el recalentamiento
que asegura.

El mecanismo es un equilibrio de fuerzas sobre una membrana. Encima actúa la
presión del gas del bulbo o cabeza termostática, que siente la temperatura a
la salida del evaporador (Fa). Debajo actúan la presión de evaporación (Fc) y
el resorte tarado en fábrica (Fb). En el ejemplo del curso, con 3 bar de
evaporación y un resorte equivalente a 1 bar, la válvula queda en equilibrio
cuando el bulbo empuja con 4 bar. Si la salida del evaporador se calienta, el
bulbo empuja más y la válvula abre; si se enfría, cierra.

Hay versiones **de ángulo**, con bulbo separado unido por un capilar, y
**monobloc**, con el sensor integrado en el cuerpo. Algunos bulbos llevan
una carga adsorbente para amortiguar las oscilaciones de temperatura.

Recomendaciones del curso que conviene tomar al pie de la letra:

- **No la regule nunca.** El tornillo de tarado viene ajustado de fábrica;
  cualquier giro cambia sus características.
- No la golpee ni tuerza el capilar: puede perder la carga del bulbo.
- No la someta a más de 15 bar de presión interna; la membrana se deforma de
  forma irreversible.
- Partículas mayores de 50 micras pueden bloquearla. Tape siempre el circuito
  abierto durante una intervención.

**Averías típicas:** válvula bloqueada abierta o cerrada, obstrucción por
suciedad o por hielo, pérdida de carga del bulbo (monobloc), bulbo despegado
(ángulo) y bajo rendimiento por una válvula "adaptable" de diámetro
incorrecto. El curso advierte que esta última falla se confunde con falta de
refrigerante.

### Evaporador

Va detrás del tablero, entre la válvula de expansión y el compresor. Tiene
dos funciones: **enfriar** el aire que entra al habitáculo y **secarlo**. El
aire frío retiene menos humedad, que se condensa en las aletas; por eso el aire
acondicionado ayuda a desempañar. Puede ser de
placas o de tubo y aleta.

**Averías típicas:** perforación por corrosión, aletas obstruidas por hielo,
fugas en los racores, bajo rendimiento por un evaporador no específico y
malos olores por bacterias en la superficie. Para limpiarlo, use solo
productos adecuados.

## Variante: orificio calibrado y acumulador

Algunos circuitos reemplazan la válvula de expansión por un **orificio
calibrado**, siempre a la entrada del evaporador. También produce la caída de
presión y de temperatura, pero **no regula el caudal**. Por eso va asociado a
un **acumulador**, ubicado entre el evaporador y el compresor, en el vano
motor.

El acumulador cumple la misma función de filtrado y secado que el filtro
deshidratante, pero además separa el líquido del gas: un deflector y un tubo
de aspiración hacen que solo llegue gas al compresor, y un pequeño orificio
devuelve el aceite. El curso lo vincula con los compresores de cilindrada
variable. La recomendación de cambio es la misma: cada dos años y siempre que
se abra el circuito.

## Componentes de control y del habitáculo

- **Presostato.** Va en la línea de alta presión, en el 90 % de los casos
  sobre el filtro deshidratante o en las tuberías de alta. En el ejemplo del
  curso corta el compresor por sobrepresión a unos 27 bar, impide el arranque
  si la presión es menor de 2 bar y conecta la segunda velocidad del
  electroventilador (GMV, grupo motoventilador) a unos 18 bar. Bajo −10 °C
  exteriores la presión cae de 2 bar y el sistema no arranca: es normal.
- **Sonda del evaporador.** Un sensor sobre las aletas, en el punto más frío,
  que evita la formación de hielo. En el ejemplo corta el compresor a −1 °C y
  lo reconecta a 4 °C.
- **Sensores de temperatura (CTN).** En los climatizadores automáticos, el
  calculador lee la temperatura exterior, del habitáculo, del evaporador y
  del aire a la salida del radiador de calefacción. Son termistores cuya
  resistencia baja al subir la temperatura; vea más sobre este tipo de
  sensores en
  [sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/).
- **Filtro de habitáculo.** Retiene polvo y polen. Saturado, reduce el
  caudal y el desempañado. El curso propone cambiarlo cada año o cada
  15.000 km, o antes si hay olor o poco caudal.

## Refrigerantes y aceites

El curso compara los dos refrigerantes de su época:

| Aspecto | R12 | R134a |
|---|---|---|
| Familia | CFC (clorofluorocarbono) | HFC (hidrofluorocarbono) |
| Capa de ozono | La destruye | No la daña |
| Efecto invernadero | Sí | Sí, contribuye |
| Situación | Producción terminada; prohibido en posventa | Reemplazó al R12 |
| Aceite asociado | Mineral (parafínico o nafténico) | Sintético: PAG; éster en reconversiones |

Ambos tienen alto calor de evaporación y se mezclan con el aceite, que viaja
con el refrigerante por todo el circuito. Pero **son incompatibles entre sí y nunca deben mezclarse**. Muchos vehículos
recientes usan otros refrigerantes, como el R1234yf, que el curso no trata:
use siempre el que indique la etiqueta del vehículo.

El aceite lubrica las piezas móviles, refrigera el compresor, mejora la
estanqueidad de juntas y arrastra impurezas. Todos son **higroscópicos**
(absorben agua), en distinto grado:

- **PAG (polialquilenglicol):** compatible con R134a, muy higroscópico y
  agresivo con metales, elastómeros y plásticos cuando hay agua.
- **Éster:** buena lubricación, higroscopia media; compatible con ambos
  refrigerantes y usado sobre todo para reconvertir circuitos.
- **Mineral:** higroscopia muy baja, solo con R12; **nunca** con R134a.

Para el contexto general de bases minerales y sintéticas, lea
[aceites minerales vs sintéticos](/posts/aceites-minerales-vs-sinteticos/).
En el aire acondicionado, la regla es más estricta: no se mezclan nunca y
los envases deben permanecer cerrados para que no absorban humedad.

## Diagnóstico básico: subenfriamiento y recalentamiento

Las presiones se leen con dos manómetros, el de **alta presión (HP)** para la
condensación y el de **baja presión (BP)** para la evaporación, y las
temperaturas de las tuberías con un termómetro de contacto. Con esos datos
se calculan dos valores clave.

**Subenfriamiento** = temperatura de condensación (la que corresponde a la
presión HP leída) − temperatura del líquido a la salida del condensador. En
el ejemplo del curso: 65 − 60 = 5 °C.

**Recalentamiento** = temperatura del gas a la salida del evaporador −
temperatura de evaporación (la que corresponde a la presión BP). En el
ejemplo: 5 − 0 = 5 °C.

Según el curso, ambos deben quedar **entre 2 y 10 °C**. Un subenfriamiento
bajo indica falta de fluido en el condensador; uno alto, exceso. Un
recalentamiento alto indica falta de fluido en el evaporador; uno bajo,
exceso. Con estos cruces se arma la tabla de diagnóstico:

| Síntoma: no enfría bien | Mediciones | Causa probable |
|---|---|---|
| Aire poco frío | BP baja, recalentamiento alto, subenfriamiento bajo | Falta de refrigerante (hay una fuga) |
| Aire poco frío | Recalentamiento bajo, HP alta, subenfriamiento alto | Exceso de refrigerante |
| Aire poco frío | Recalentamiento normal, subenfriamiento alto, diferencia de temperatura en la línea de líquido | Filtro deshidratante saturado |
| Aire poco frío | BP alta, HP baja | Compresor averiado (en cilindrada variable puede ser normal) |
| Aire caliente | BP y HP altas, subenfriamiento normal | Aire (incondensables) por un vacío mal hecho |

Dos comprobaciones simples completan el cuadro. Para detectar la
preexpansión, mida con dos sondas de contacto la temperatura a la entrada y a
la salida del filtro deshidratante: en el ejemplo del curso, 40 °C contra
32 °C revela un filtro que estrangula el paso. Y si el filtro tiene visor,
las burbujas indican que el fluido llega con gas, por falta de carga o por
saturación.

Como medida global, el curso usa la temperatura del aire en los difusores:
entre 2 y 10 °C con 15 a 25 °C de ambiente indica un circuito sano. No mida
con menos de 16 °C afuera: el compresor se desconecta o pasa a cilindrada
mínima antes de estabilizarse. Un grado de error puede cambiar el
diagnóstico.

Antes de recargar, recuerde que un circuito al que le falta fluido tiene una
fuga. Para localizarla y entender juntas y sellos, vea
[fugas y estanqueidad](/posts/fugas-estanqueidad/).

## Errores comunes

- **Recargar sin buscar la fuga.** El refrigerante volverá a escaparse.
- **Recargar "a ojo" o por presión sola,** sin calcular subenfriamiento ni
  recalentamiento. El curso es explícito: nunca recargue sin controlarlos, y
  ponga siempre la carga exacta del fabricante.
- **Mezclar refrigerantes o aceites,** o usar aceite mineral con R134a.
- **Abrir el circuito y no cambiar el filtro deshidratante** o el acumulador.
- **Hacer mal el vacío.** El aire que queda dentro no se condensa y sube
  ambas presiones.
- **Girar el tornillo de la válvula de expansión** para "corregir" presiones.
- **Olvidar el filtro de habitáculo.** Un filtro tapado se parece a un
  aire acondicionado débil.

## Para seguir leyendo

- [Control de ralentí y válvula ISCV](/posts/funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores/): cómo absorbe el motor la carga del compresor.
- [Sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/): termistores y otros captadores.
- [Aceites minerales vs sintéticos](/posts/aceites-minerales-vs-sinteticos/): bases de aceite.
- [Fugas y estanqueidad](/posts/fugas-estanqueidad/): juntas, sellos y búsqueda de fugas.
- [Conversor de presión](/herramientas/conversor-presion-torque/): bar, psi y kPa.

**Fuentes:** curso de formación de Valeo Clim Service sobre el circuito de
climatización, publicado en
[Mecánico Automotriz](https://www.mecanicoautomotriz.org/1791-curso-circuito-climatizacion-partes-funciones-diagramas-fluidos-ac).
Las presiones, temperaturas e intervalos son ejemplos de ese curso; la
observación sobre presión absoluta y la mención del R1234yf son criterios
generales no incluidos en la fuente. Valores referenciales; prevalece el
manual de servicio del vehículo.

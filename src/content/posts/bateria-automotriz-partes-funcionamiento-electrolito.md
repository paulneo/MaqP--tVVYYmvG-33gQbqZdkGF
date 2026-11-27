---
title: "Batería automotriz: partes, funcionamiento y electrolito"
published: 2026-11-27
draft: false
featured: false
description: "Partes de la batería de plomo-ácido, cómo se carga y descarga, qué indica la densidad del electrolito y cómo probarla y mantenerla sin riesgos para usted."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "bateria"
  - "plomo-acido"
  - "electrolito"
  - "sistema-electrico-automotriz"
  - "mantenimiento-de-baterias"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/electricidad-automotriz/bateria-automotriz-partes-funcionamiento-electrolito
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Qué líquido se le pone a una batería de auto cuando le falta?"
    a: "Solo agua destilada o desmineralizada, y únicamente en baterías con tapones de llenado. Lo que se pierde con el uso es sobre todo agua, porque la carga descompone parte de ella en hidrógeno y oxígeno; el ácido sulfúrico permanece dentro. Agregar ácido o agua de la llave altera la concentración o introduce minerales que dañan las placas. Si el electrolito se derramó, el reemplazo lo debe hacer un taller con el producto adecuado."
  - q: "¿Cuántos voltios debe tener una batería de 12 V cargada?"
    a: "Medida en reposo, sin consumo y varias horas después de cargar o de apagar el motor, una batería de arranque convencional completamente cargada suele marcar alrededor de 12,6 V. Cerca de 12,2 V está aproximadamente a la mitad, y por debajo de unos 12,0 V se considera descargada. Son valores típicos; el fabricante de la batería puede indicar otros, en especial en baterías AGM."
  - q: "¿Por qué el borne positivo es más grueso que el negativo?"
    a: "Para que no se confundan al conectar los cables. Invertir la polaridad puede quemar fusibles, diodos del alternador y módulos electrónicos en un instante. Además del tamaño, los bornes suelen ir marcados con los signos + y −, y el cable positivo suele ser rojo."
  - q: "¿Cuál es el orden correcto para pasar corriente con cables?"
    a: "Primero el cable rojo al positivo de la batería descargada y luego al positivo de la batería auxiliar. Después, el cable negro al negativo de la batería auxiliar y su otro extremo a una pieza metálica sin pintura del motor del vehículo averiado, alejada de la batería, no a su borne negativo. Para retirar los cables se sigue el orden inverso. Si el manual indica puntos de conexión remotos, use esos."
  - q: "¿Por qué una batería descargada se puede congelar?"
    a: "Porque al descargarse el ácido pasa a formar sulfato de plomo sobre las placas y el electrolito queda cada vez más cerca del agua pura, que se congela a temperaturas mucho menos extremas. Una batería bien cargada resiste el frío habitual sin problemas. Nunca intente cargar ni pasar corriente a una batería congelada: puede reventar."
sources:
  - title: "Curso: baterías, partes, componentes, funcionamiento y electrolito — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/1013-curso-baterias-partes-componentes-funcionamiento-electrolito"
related:
  - sistema-de-carga-alternador-funcionamiento-inspeccion
  - electricidad-fundamentos-componentes
  - motor-de-arranque-componetes-y-construcciones
---

La batería es el único componente eléctrico del vehículo que trabaja con el
motor apagado. Alimenta el motor de arranque en el momento de mayor exigencia,
mantiene la memoria de los módulos electrónicos durante la noche y sostiene la
tensión de la red cuando el alternador no alcanza a cubrir el consumo. Cuando
falla, el auto no arranca; cuando se maltrata, dura la mitad.

Esta guía explica cómo está construida una batería de plomo-ácido, qué pasa
químicamente al cargarla y descargarla, qué es el electrolito y cómo se
interpreta su densidad, y cómo probarla y mantenerla con seguridad. Se basa en
un curso de láminas sobre baterías publicado en Mecánico Automotriz; donde el
curso no entra en detalle (pruebas, especificaciones de capacidad, conexión de
cables) se completa con práctica general del oficio, señalada como tal.

## Qué es una batería y qué hace en el vehículo

El curso la define como un **acumulador de energía**: cuando se le aplica
corriente continua transforma la energía eléctrica en energía química, y
cuando se le conecta un consumidor hace el proceso inverso. No "guarda
electricidad" como un depósito guarda líquido; guarda materiales químicamente
activos que, al reaccionar, entregan electrones.

En el vehículo cumple tres funciones:

1. **Arranque.** Entrega en pocos segundos la corriente alta que exige el
   [motor de arranque](/posts/motor-de-arranque-componetes-y-construcciones/).
2. **Fuente independiente del motor.** Con el motor térmico apagado, es la
   que abastece a luces, radio, cierre centralizado y módulos.
3. **Amortiguador de la red.** Con el motor en marcha, el
   [alternador](/posts/sistema-de-carga-alternador-funcionamiento-inspeccion/)
   la recarga y ella absorbe picos y caídas de tensión.

## Partes de la batería

Una batería de 12 V es, en realidad, seis baterías de 2 V conectadas en serie
dentro de un mismo recipiente. Cada una se llama **celda**, **elemento** o
**vaso**. El curso enumera estas piezas:

| Parte | Material / forma | Función |
| --- | --- | --- |
| Recipiente (monobloque) | Plástico moldeado, dividido en 3 o 6 elementos | Contener las celdas y el electrolito; 3 celdas para 6 V, 6 para 12 V |
| Tabiques | Paredes del mismo recipiente | Separar una celda de otra |
| Tapa | Plástico moldeado con engaste o soldadura hermética | Cerrar el recipiente y sostener bornes y tapones |
| Tapones u orificios de llenado | Plástico, con agujeros para la salida de gases | Permitir rellenar y revisar el nivel, y ventilar los gases |
| Placas positivas | Rejilla de aleación de plomo rellena de dióxido de plomo (PbO₂) | Material activo del polo positivo |
| Placas negativas | Rejilla de aleación de plomo rellena de plomo activo esponjoso (Pb) | Material activo del polo negativo |
| Separadores | Plástico resistente al ácido | Evitar cortocircuitos entre placas sin impedir que circule el electrolito |
| Puentes de unión | Plomo | Unir las placas de igual polaridad de una celda y conectar las celdas en serie |
| Bornes | Plomo; el positivo es más ancho | Conectar los cables del vehículo |
| Apoyos de elementos y cámara de sedimentos | Nervios en el fondo del recipiente | Sostener las placas y recoger los residuos de la reacción |
| Electrolito | Ácido sulfúrico diluido en agua destilada | Medio químico donde ocurre la reacción |

Detalles de construcción que explican fallas de taller:

- Las placas son **rejillas** (mallas) que forman compartimentos llenos de
  material activo. La rejilla conduce la corriente y da forma; el material
  activo es el que reacciona. Si el material se desprende, la placa pierde
  capacidad aunque la rejilla siga entera.
- Dentro de cada celda las placas positivas y negativas se alternan, cada
  grupo unido por su puente. Cuantas más placas y más superficie, más
  corriente instantánea puede entregar la celda.
- Los residuos que se desprenden caen al fondo, entre los apoyos de las
  placas, en las **cámaras de decantación**. Si el sedimento acumulado llega a
  tocar las placas, puede cortocircuitar una celda.

<figure class="diagram">
<svg viewBox="0 0 760 460" role="img" aria-label="Corte esquemático de una batería de plomo-ácido de 12 V: recipiente dividido en seis celdas por tabiques, cada celda con placas positivas de dióxido de plomo y negativas de plomo alternadas con separadores, sumergidas en electrolito cuyo nivel queda por encima de las placas; puentes de unión que conectan las celdas en serie, tapones con respiradero, borne negativo y borne positivo más ancho, y cámara de sedimentos en el fondo. Seis celdas de 2 V suman 12 V nominales" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="760" height="460" rx="14" fill="#f8fafc"/>
<text x="320" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Batería de plomo-ácido de 12 V en corte (esquema)</text>
<rect x="60" y="94" width="520" height="286" fill="#ffffff" stroke="#334155" stroke-width="2.5"/>
<rect x="62" y="125" width="516" height="220" fill="#e0f2fe"/>
<line x1="62" y1="125" x2="578" y2="125" stroke="#0369a1" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="62" y="345" width="516" height="33" fill="#f1f5f9"/>
<rect x="50" y="70" width="540" height="24" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<g stroke="#334155" stroke-width="2.5">
<line x1="147" y1="94" x2="147" y2="380"/><line x1="233" y1="94" x2="233" y2="380"/><line x1="320" y1="94" x2="320" y2="380"/><line x1="407" y1="94" x2="407" y2="380"/><line x1="493" y1="94" x2="493" y2="380"/>
</g>
<g fill="#94a3b8" stroke="#475569" stroke-width="1"><rect x="68" y="140" width="7" height="195"/><rect x="98" y="140" width="7" height="195"/><rect x="128" y="140" width="7" height="195"/><rect x="155" y="140" width="7" height="195"/><rect x="185" y="140" width="7" height="195"/><rect x="215" y="140" width="7" height="195"/><rect x="241" y="140" width="7" height="195"/><rect x="271" y="140" width="7" height="195"/><rect x="301" y="140" width="7" height="195"/><rect x="328" y="140" width="7" height="195"/><rect x="358" y="140" width="7" height="195"/><rect x="388" y="140" width="7" height="195"/><rect x="415" y="140" width="7" height="195"/><rect x="445" y="140" width="7" height="195"/><rect x="475" y="140" width="7" height="195"/><rect x="501" y="140" width="7" height="195"/><rect x="531" y="140" width="7" height="195"/><rect x="561" y="140" width="7" height="195"/></g>
<g fill="#b45309" stroke="#78350f" stroke-width="1"><rect x="83" y="140" width="7" height="195"/><rect x="113" y="140" width="7" height="195"/><rect x="170" y="140" width="7" height="195"/><rect x="200" y="140" width="7" height="195"/><rect x="256" y="140" width="7" height="195"/><rect x="286" y="140" width="7" height="195"/><rect x="343" y="140" width="7" height="195"/><rect x="373" y="140" width="7" height="195"/><rect x="430" y="140" width="7" height="195"/><rect x="460" y="140" width="7" height="195"/><rect x="516" y="140" width="7" height="195"/><rect x="546" y="140" width="7" height="195"/></g>
<g stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"><line x1="78.5" y1="146" x2="78.5" y2="330"/><line x1="93.5" y1="146" x2="93.5" y2="330"/><line x1="108.5" y1="146" x2="108.5" y2="330"/><line x1="123.5" y1="146" x2="123.5" y2="330"/><line x1="165.5" y1="146" x2="165.5" y2="330"/><line x1="180.5" y1="146" x2="180.5" y2="330"/><line x1="195.5" y1="146" x2="195.5" y2="330"/><line x1="210.5" y1="146" x2="210.5" y2="330"/><line x1="251.5" y1="146" x2="251.5" y2="330"/><line x1="266.5" y1="146" x2="266.5" y2="330"/><line x1="281.5" y1="146" x2="281.5" y2="330"/><line x1="296.5" y1="146" x2="296.5" y2="330"/><line x1="338.5" y1="146" x2="338.5" y2="330"/><line x1="353.5" y1="146" x2="353.5" y2="330"/><line x1="368.5" y1="146" x2="368.5" y2="330"/><line x1="383.5" y1="146" x2="383.5" y2="330"/><line x1="425.5" y1="146" x2="425.5" y2="330"/><line x1="440.5" y1="146" x2="440.5" y2="330"/><line x1="455.5" y1="146" x2="455.5" y2="330"/><line x1="470.5" y1="146" x2="470.5" y2="330"/><line x1="511.5" y1="146" x2="511.5" y2="330"/><line x1="526.5" y1="146" x2="526.5" y2="330"/><line x1="541.5" y1="146" x2="541.5" y2="330"/><line x1="556.5" y1="146" x2="556.5" y2="330"/></g>
<g fill="#cbd5e1" stroke="#64748b" stroke-width="1"><rect x="74" y="335" width="10" height="43"/><rect x="122" y="335" width="10" height="43"/><rect x="161" y="335" width="10" height="43"/><rect x="209" y="335" width="10" height="43"/><rect x="247" y="335" width="10" height="43"/><rect x="295" y="335" width="10" height="43"/><rect x="334" y="335" width="10" height="43"/><rect x="382" y="335" width="10" height="43"/><rect x="421" y="335" width="10" height="43"/><rect x="469" y="335" width="10" height="43"/><rect x="507" y="335" width="10" height="43"/><rect x="555" y="335" width="10" height="43"/></g>
<g fill="#57534e"><rect x="131" y="104" width="32" height="8" rx="2"/><rect x="217" y="104" width="32" height="8" rx="2"/><rect x="304" y="104" width="32" height="8" rx="2"/><rect x="391" y="104" width="32" height="8" rx="2"/><rect x="477" y="104" width="32" height="8" rx="2"/></g>
<rect x="76" y="46" width="16" height="24" rx="3" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<rect x="548" y="44" width="24" height="26" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
<line x1="84" y1="94" x2="84" y2="112" stroke="#57534e" stroke-width="5"/>
<line x1="560" y1="94" x2="560" y2="112" stroke="#57534e" stroke-width="5"/>
<g fill="#fef3c7" stroke="#b45309" stroke-width="1.5"><rect x="112" y="63" width="16" height="7" rx="2"/><rect x="182" y="63" width="16" height="7" rx="2"/><rect x="268" y="63" width="16" height="7" rx="2"/><rect x="355" y="63" width="16" height="7" rx="2"/><rect x="442" y="63" width="16" height="7" rx="2"/><rect x="507" y="63" width="16" height="7" rx="2"/></g>
<text x="100" y="54" font-size="12" font-weight="700" fill="#0f172a">Borne negativo (−)</text>
<g stroke="#475569" stroke-width="1.2" fill="none">
<path d="M572 52 H594"/><path d="M523 66 L594 96"/><path d="M574 125 H594"/><path d="M553 190 H594"/><path d="M557 226 H594"/><path d="M568 262 H594"/><path d="M493 300 L594 300"/><path d="M509 108 L594 160"/><path d="M574 362 H594"/>
</g>
<g font-size="12" fill="#0f172a">
<text x="598" y="56" font-weight="700">Borne positivo (+)</text>
<text x="598" y="100">Tapón con respiradero</text>
<text x="598" y="122">Nivel de electrolito</text>
<text x="598" y="137" fill="#0369a1">≈ 1 cm sobre placas</text>
<text x="598" y="164">Puente de unión</text>
<text x="598" y="194" fill="#b45309">Placa positiva (PbO₂)</text>
<text x="598" y="230" fill="#15803d">Separador</text>
<text x="598" y="266" fill="#475569">Placa negativa (Pb)</text>
<text x="598" y="304">Tabique entre celdas</text>
<text x="598" y="358">Cámara de</text>
<text x="598" y="373">sedimentos</text>
</g>
<g font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle"><text x="103" y="400">2 V</text><text x="190" y="400">2 V</text><text x="277" y="400">2 V</text><text x="363" y="400">2 V</text><text x="450" y="400">2 V</text><text x="537" y="400">2 V</text></g>
<path d="M60 410 V418 H580 V410" fill="none" stroke="#334155" stroke-width="1.5"/>
<text x="320" y="440" text-anchor="middle" font-size="13" fill="#0f172a">6 celdas en serie × 2 V = 12 V nominales</text>
</svg>
<figcaption>Esquema de una batería de arranque de 12 V. Cada celda tiene placas positivas de dióxido de plomo y negativas de plomo, separadas por láminas aislantes y cubiertas por el electrolito; los puentes de unión conectan las seis celdas de 2 V en serie. Elaboración propia a partir de las láminas del curso.</figcaption>
</figure>

## El electrolito: composición, nivel y densidad

El líquido que hay dentro de la batería se llama **electrolito**. Según el
curso, es una mezcla de agua destilada y ácido sulfúrico con una proporción
del **34 % de ácido sulfúrico** y el resto agua, y su nivel debe quedar **un
centímetro por encima de las placas**. Las mismas láminas dan una densidad
nominal de **1,24 g/cm³** para el electrolito.

Tome esas cifras como orden de magnitud. La concentración y la densidad
exactas dependen del diseño, del clima para el que se fabricó la batería y,
sobre todo, de su estado de carga: la densidad no es un valor fijo, sube al
cargar y baja al descargar. Por eso se usa como indicador.

Tres reglas prácticas sobre el electrolito:

- **Nivel.** Las placas deben quedar siempre cubiertas. La parte expuesta al
  aire se sulfata y se pierde para siempre.
- **Relleno.** En servicio solo se agrega **agua destilada**. Lo que se pierde
  con el uso es agua (por evaporación y porque la carga descompone parte de
  ella en hidrógeno y oxígeno); el ácido se queda. Agregar ácido sube la
  concentración y acelera la corrosión de las rejillas.
- **Preparación.** Si alguna vez se diluye ácido, se vierte siempre el
  **ácido sobre el agua**, despacio, nunca el agua sobre el ácido: la
  reacción desprende mucho calor y puede salpicar. Es un trabajo de taller
  especializado, no de mantenimiento rutinario.

## Cómo funciona: la química de carga y descarga

El curso resume la batería de plomo-ácido así: el electrodo positivo es
**dióxido de plomo (PbO₂)**, el negativo es **plomo metálico (Pb)**, ambos
sumergidos en ácido sulfúrico, y la tensión nominal de cada celda es de
**2 V**.

### Descarga

Cuando se conecta un consumidor, las dos placas reaccionan con el ácido y
ambas se transforman en **sulfato de plomo (PbSO₄)**:

- Placa positiva: PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O
- Placa negativa: Pb + SO₄²⁻ → PbSO₄ + 2e⁻
- Reacción global: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O

Los electrones que libera la placa negativa viajan por el circuito externo
(el arranque, las luces) hasta la positiva. Fíjese en dos consecuencias
directas de la ecuación global:

1. Se **consume ácido** y se **produce agua**, así que el electrolito se
   diluye y su densidad baja. Esa es la base de la prueba con densímetro.
2. Las dos placas tienden a volverse del **mismo material** (sulfato de
   plomo). Cuanto más parecidas son, menos diferencia de potencial queda:
   la batería se descarga.

### Carga

Al aplicar corriente continua en sentido contrario, por ejemplo desde el
alternador o un cargador, la reacción se invierte: el sulfato de plomo vuelve
a ser dióxido de plomo en la placa positiva y plomo esponjoso en la negativa,
y el sulfato regresa al electrolito como ácido. La densidad sube.

Cerca del final de la carga, cuando ya queda poco sulfato por convertir, la
energía sobrante empieza a descomponer el agua del electrolito en **hidrógeno
y oxígeno**. Esa es la razón de los agujeros de ventilación en los tapones, de
la pérdida de agua con los años y del riesgo de explosión que se trata más
abajo.

### Sulfatación

Si la batería queda descargada mucho tiempo, el sulfato de plomo de las
placas se endurece y forma cristales que la carga normal ya no logra
disolver. Esa **sulfatación** reduce la superficie activa y la capacidad de
forma permanente. Por eso el curso anota como desventaja el **deterioro ante
descargas profundas**: una batería de arranque que se descarga a fondo varias
veces pierde buena parte de su vida.

## Tipos de baterías de plomo-ácido

El curso clasifica las baterías por su función, por el diseño de las placas,
por las aleaciones y por el electrolito. Por **función**:

| Tipo | Uso | Comportamiento |
| --- | --- | --- |
| De arranque | Autos y camiones | Entregan mucha corriente en poco tiempo; bajo costo; poca resistencia al ciclado; solo admiten descargas superficiales |
| De tracción | Vehículos eléctricos (montacargas, carritos) | Cargas y descargas profundas y rápidas; alta resistencia al ciclado; alto mantenimiento |
| Estacionarias | Sistemas de alimentación ininterrumpida (UPS) y alumbrado de emergencia | Pasan largos periodos en flotación, totalmente cargadas; resisten descargas profundas esporádicas; bajo consumo de agua |

Por **diseño de placa**, el curso menciona la placa **Planté** (plomo plano
cuyo material activo se forma con ciclos sucesivos de carga y descarga) y la
placa **Faure o empastada**, plana o tubular, en la que una rejilla retiene la
pasta de material activo. La placa tubular usa varillas de plomo aleado con
antimonio recubiertas de fibras sintéticas y se recomienda para trabajo en
ciclos.

La batería de arranque está pensada para entregar un pico de corriente y
recargarse enseguida, no para descargarse a fondo. Fuera de lo que cubre el
curso, hoy también son comunes las selladas de libre mantenimiento, las AGM
(electrolito absorbido en fibra de vidrio) y las EFB para vehículos con
parada y arranque automático, cada una con su tensión de carga recomendada.

## Ventajas y limitaciones

Las láminas comparan la batería de plomo-ácido con otros sistemas de
almacenamiento:

- **Ventajas:** gran disponibilidad, bajo costo, rendimiento moderado, alto
  número de ciclos de vida (en los diseños pensados para ciclar) y bajo nivel
  de autodescarga.
- **Desventajas:** baja densidad de energía (pesa mucho para lo que guarda),
  deterioro ante descargas profundas, deterioro ante sobrecargas y necesidad
  de mantenimiento.

Las dos formas de deterioro se ven a diario en el taller: la descarga
profunda sulfata las placas y la sobrecarga (por un regulador de tensión
defectuoso, por ejemplo) evapora el agua, calienta la batería y corroe las
rejillas positivas.

## Capacidad y especificaciones de la etiqueta

El curso no trata las especificaciones de capacidad. Las que aparecen
habitualmente en la etiqueta de una batería de arranque son:

- **Capacidad (Ah).** Amperios-hora que la batería puede entregar en una
  descarga lenta, normalmente referida a 20 horas.
- **Corriente de arranque en frío (CCA).** Corriente que una batería de 12 V
  cargada puede entregar durante 30 segundos a −18 °C manteniendo al menos
  7,2 V. Es la cifra que más importa para arrancar.
- **Capacidad de reserva (RC).** Minutos que puede entregar 25 A antes de
  bajar a 10,5 V; indica cuánto aguanta si el alternador deja de cargar.

Al reemplazar una batería, respete al menos la capacidad, la corriente de
arranque, la tecnología (convencional, EFB o AGM), el tamaño y la posición de
los bornes que pide el fabricante del vehículo.

## Inspección y pruebas

Siga un orden: muchos "no arranca" son bornes sulfatados o un alternador
que no carga.

### 1. Inspección visual

- Caja sin grietas, deformaciones ni hinchazón (la hinchazón suele indicar
  sobrecarga o congelamiento).
- Bornes y terminales sin sulfato blanco o verdoso, bien apretados.
- Soporte firme: una batería suelta vibra y se le desprende material activo.
- En baterías con tapones, nivel de electrolito sobre las placas en todas las
  celdas.

### 2. Tensión en reposo

Mida con un multímetro entre bornes, sin consumo y con la batería en reposo
varias horas (o tras encender las luces un minuto para eliminar la carga
superficial). Valores típicos de referencia para una batería de arranque
convencional a temperatura ambiente:

| Tensión en reposo | Densidad típica del electrolito | Estado de carga aproximado |
| --- | --- | --- |
| 12,6 V o más | 1,265 | 100 % |
| 12,4 V | 1,225 | 75 % |
| 12,2 V | 1,190 | 50 % |
| 12,0 V | 1,155 | 25 % |
| 11,9 V o menos | 1,120 o menos | Descargada |

Son valores generales del oficio, no del curso, y cambian según el diseño y
la temperatura; la ficha del fabricante de la batería prevalece.

### 3. Densidad por celda

En baterías con tapones, el densímetro (hidrómetro) mide la densidad del
electrolito celda por celda. Además del estado de carga, revela celdas
defectuosas: si una celda queda claramente por debajo de las demás (una
diferencia de unos 0,050 o más es el criterio habitual) después de una carga
completa, esa celda está dañada y la batería debe reemplazarse. No mida justo
después de agregar agua: espere a que se mezcle con una carga.

### 4. Prueba de carga o de conductancia

Una batería puede marcar 12,6 V en reposo y caerse al exigirle corriente. La
prueba de carga aplica una corriente alta durante unos segundos y observa
cuánto baja la tensión; los probadores de conductancia estiman el estado de
salud sin descargarla. Siga el procedimiento y los límites del equipo de
prueba que use.

### 5. Sistema de carga

Si la batería se descarga una y otra vez, revise el sistema de carga con el
motor en marcha y busque consumos parásitos con el motor apagado. Las
mediciones del alternador y del regulador se explican en
[el sistema de carga](/posts/sistema-de-carga-alternador-funcionamiento-inspeccion/);
para caídas de tensión en cables y masas, vea
[circuitos de alimentación y tierra](/posts/circuitos-alimentacion-tierra-control-electronico-motor/).

## Mantenimiento y carga

- Mantenga limpia la parte superior: la suciedad húmeda con ácido conduce y
  descarga la batería.
- Limpie el sulfato de los bornes con una solución de bicarbonato de sodio y
  agua, enjuague, seque y proteja con grasa o un protector para bornes.
  Evite que la solución entre por los respiraderos.
- Revise el nivel en las baterías con tapones y complete solo con agua
  destilada, hasta el nivel indicado; no la llene hasta el borde.
- Si el vehículo va a estar parado semanas, use un mantenedor de carga o
  desconecte el negativo.
- Cargue con un cargador adecuado al tipo de batería. Como regla práctica
  para baterías convencionales, una carga lenta con una corriente del orden
  del 10 % de la capacidad en Ah es más saludable que una carga rápida. Las
  AGM y EFB requieren el perfil que indique su fabricante.

## Seguridad: ácido, hidrógeno y conexión de cables

La batería combina un ácido corrosivo, un gas explosivo y una fuente capaz de
entregar cientos de amperios.

**Ácido sulfúrico.** Use lentes de seguridad y guantes resistentes a químicos.
Si el electrolito le salta a los ojos, enjuague con abundante agua limpia
durante al menos 15 minutos y busque atención médica. En la piel o la ropa,
lave con mucha agua. Los derrames se neutralizan con bicarbonato de sodio
antes de limpiarlos.

**Hidrógeno.** Durante la carga, y sobre todo al final de ella, la batería
desprende hidrógeno, que mezclado con el aire es explosivo. Cargue en un
lugar ventilado, sin llamas ni cigarrillos cerca, y conecte o desconecte las
pinzas del cargador con el cargador apagado para que la chispa no salte junto
a la batería.

**Conexión y desconexión.** Al retirar la batería, desconecte **primero el
negativo**; al instalarla, conecte **el negativo al final**. Así, si la llave
toca la carrocería mientras afloja el borne positivo, no hay cortocircuito.
Nunca apoye herramientas sobre la batería.

**Pasar corriente con cables.** El orden habitual es:

1. Rojo al positivo (+) de la batería descargada.
2. El otro extremo rojo al positivo (+) de la batería auxiliar.
3. Negro al negativo (−) de la batería auxiliar.
4. El otro extremo negro a una pieza metálica sin pintura del motor o del
   chasis del vehículo averiado, alejada de la batería.

Arranque primero el vehículo auxiliar y luego el averiado; retire los cables
en el orden inverso. No pase corriente a una batería congelada, hinchada o
con fugas. Muchos vehículos modernos tienen puntos de conexión remotos para
esta maniobra: si el manual los indica, úselos.

## Errores comunes

- **Rellenar con agua de la llave o con ácido.** Solo agua destilada.
- **Dejar la batería descargada** días o semanas: se sulfata.
- **Medir la tensión justo después de cargar o de apagar el motor**, con la
  carga superficial todavía presente; la lectura sale optimista.
- **Cambiar la batería sin revisar el alternador** ni buscar consumos
  parásitos; la nueva también se descargará.
- **Instalar una convencional donde el vehículo pide AGM o EFB**, sobre todo
  con parada y arranque automático.
- **Invertir la polaridad** al conectar cables o una batería nueva.
- **Conectar el último cable de pasar corriente al borne negativo** de la
  batería descargada, justo donde puede haber hidrógeno.
- **Golpear los terminales para encajarlos**; se daña el borne o el sello.
- **Dejar el soporte flojo**: la vibración desprende material activo y
  acorta la vida de la batería.

## Para seguir leyendo

La batería es una pieza de un sistema. Si quiere repasar tensión, corriente y
resistencia antes de medir, empiece por el
[manual básico de electricidad](/posts/electricidad-fundamentos-componentes/).
Para entender el principal consumidor de la batería, vea los
[tipos de motores de arranque](/posts/funcionamiento-y-tipos-de-motores-de-arranque/)
y
[su construcción](/posts/motor-de-arranque-componetes-y-construcciones/).
Para medir con método, lea sobre el
[comprobador de mano](/posts/comprobador-de-mano-herramienta-clave-para-el-diagnostico-automotriz/)
y, si trabaja con equipos pesados, sobre las
[fallas eléctricas en maquinaria](/posts/fallas-electricas-maquinaria/).

**Fuentes:** curso de láminas sobre baterías (partes, componentes,
funcionamiento y electrolito) publicado en
[Mecánico Automotriz](https://www.mecanicoautomotriz.org/1013-curso-baterias-partes-componentes-funcionamiento-electrolito).
Las pruebas, las especificaciones de la etiqueta, la tabla de tensión y
densidad y el procedimiento para pasar corriente son práctica general del
oficio, no incluidos en el curso. Valores referenciales; prevalece el manual
de servicio del vehículo.

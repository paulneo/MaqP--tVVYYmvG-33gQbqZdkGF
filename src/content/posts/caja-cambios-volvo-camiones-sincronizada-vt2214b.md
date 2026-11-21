---
title: "Caja de cambios Volvo de camión: SR1700/1900, VT2514 y VT2214B"
published: 2026-11-21
draft: false
featured: false
description: "Cómo funciona una caja Volvo de 14 marchas con divisor y gama: aire, inhibidores, sincronización, lubricación y el mando por cables de la VT2214B."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "caja-de-cambios"
  - "volvo-camiones"
  - "vt2214b"
  - "divisor-y-gama"
  - "transmision-camiones"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camiones/caja-cambios-volvo-camiones-sincronizada-vt2214b
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Cómo se llega a 14 marchas en una caja Volvo SR o VT?"
    a: "La caja básica tiene tres marchas de avance más una ultralenta y la marcha atrás. El divisor (splitter) desdobla cada relación en dos y el grupo de gama (range) las vuelve a duplicar. Tres marchas por dos por dos dan las 12 marchas sincronizadas de ruta, y la ultralenta desdoblada por el divisor aporta las otras dos. Las cuatro marchas atrás no están sincronizadas."
  - q: "¿Por qué la caja no deja cambiar de gama con una marcha metida?"
    a: "Porque el aire que alimenta el cilindro de gama pasa por una válvula de inhibición que se cierra cuando la palanca engrana una marcha de la caja básica. Es una protección mecánica y neumática para que el divisor, la gama y la caja básica no cambien a la vez. En el sentido inverso, un cilindro de inhibición bloquea la palanca mientras se está cambiando de gama."
  - q: "¿Qué hace el sensor que impide pasar a gama baja a más de 30 km/h?"
    a: "Mide la velocidad del árbol secundario y, por señal eléctrica, cierra el paso de aire a la válvula de relé del cilindro de gama cuando se superan unas 700 rpm, equivalentes a 30 km/h en el modelo descrito. Evita acoplar la gama baja con el camión demasiado rápido, algo que sobrecargaría los sincronizadores y la transmisión. Ese umbral es el del curso para la SR1700/1900, no un valor universal."
  - q: "¿Qué cambió con la VT2214B respecto de las cajas SR?"
    a: "El curso describe la servosincronización con un muelle de disco más robusto, un nuevo sensor de velocidad con dos señales, estriado evolvente en el eje primario, una carcasa de mando común y el mando por dos cables sin ajuste. El resultado buscado es menos esfuerzo de palanca, menos vibración y menor recorrido."
  - q: "¿Hay que ajustar los cables de cambio de la VT2214B?"
    a: "Según el curso, no: el conjunto tolera una desviación de más o menos 15 mm y cada extremo lleva amortiguadores de goma. Los cables van marcados por color para no confundir el movimiento longitudinal con el lateral al montarlos. Ante una anomalía, siga el procedimiento del manual de servicio del camión."
sources:
  - title: "Manual de caja de cambios de camiones Volvo SR1700/1900 y VT2014/2514 — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/668-manual-caja-cambios-camiones-volvo"
  - title: "Manual de caja de cambios VT2214B para camiones Volvo FH, NH y FM — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/979-manual-caja-cambios-vt2214b-camiones-fh-nh-fm-volvo"
related:
  - caja-cambios-mercedes-actros-atego-grupos-divisor-reductor
  - guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios
  - arbol-transmision
---

Las cajas manuales Volvo de las series SR y VT comparten una idea que se
repite en casi todos los camiones pesados europeos: una caja básica corta de
pocas marchas, un grupo adelante que **desdobla** cada relación y un grupo
atrás que la **duplica** con un salto grande. Lo que las distingue es cómo se
gobiernan esos grupos con aire comprimido, qué bloqueos impiden un cambio
equivocado y, en la VT2214B, cómo se llevó el movimiento de la palanca hasta
la caja con cables en vez de varillas.

Esta guía recorre el camino de la fuerza, el sistema neumático con sus
inhibidores, la lubricación y lo que cambia en la VT2214B. Está basada en dos
cursos de formación de Volvo y los valores que aparecen son **de esos
modelos**, no universales. Para el despiece, los pares de apriete y los
procedimientos, prevalece el manual de servicio de su camión.

Si le interesa comparar con otra arquitectura, vea la caja de 16 marchas de
Mercedes-Benz en [Actros y Atego: grupos divisor y
reductor](/posts/caja-cambios-mercedes-actros-atego-grupos-divisor-reductor/).
Allí el énfasis está en los pares de piñones y el mando electroneumático; aquí
está en el circuito de aire y los inhibidores de la caja Volvo.

## Cómo se obtienen 14 marchas

El curso describe la SR1700/1900 como una caja de **14 velocidades**: dos de
marcha ultralenta y doce de cambios sincronizados, más cuatro marchas atrás
que **no** están sincronizadas. La caja básica aporta tres marchas de avance,
una ultralenta y la marcha atrás. A esa caja básica se suman dos grupos:

- **Divisor (splitter).** Va delante de la caja básica y tiene dos posiciones,
  baja y alta velocidad. Desdobla cada relación de la caja básica en dos
  escalones cercanos.
- **Gama (range).** Va detrás, conectada al árbol secundario de la caja
  básica, con dos posiciones, gama baja y gama alta. Vuelve a duplicar las
  relaciones con un salto grande.

Las matemáticas son de multiplicación, no de suma: 3 marchas × 2 posiciones del
divisor × 2 gamas = **12 marchas sincronizadas**. La ultralenta, desdoblada por
el divisor, aporta las dos restantes, y la marcha atrás, también combinada,
explica las cuatro de retroceso. Es una reconstrucción mía a partir de las cifras
del curso, que da el total pero no desarrolla la cuenta.

Una nota de nomenclatura, porque el texto fuente la mezcla. La sigla de la
caja usa **S** para el divisor delantero y **R** para el grupo de gama
trasero, y el curso llama a veces "reductora" al divisor y "mecanismo de
alcances" a la gama. Además habla de "gama alta y baja" tanto para el
divisor como para el grupo trasero. En este artículo uso **divisor** y
**gama** para no confundirlos. En las cajas de la serie H, los cables se
designan GSS-RC (gama accionada por cable) o GSS-SRC (divisor y gama
accionados por cable).

<figure class="diagram">
<svg viewBox="0 0 800 400" role="img" aria-label="Diagrama de una caja Volvo de 14 marchas: el motor y el embrague alimentan el divisor, luego la caja básica de tres marchas más ultralenta y marcha atrás, luego el grupo de gama y la salida; abajo, el aire comprimido pasa por válvulas de relé a los cilindros del divisor y de la gama, con inhibidores entre ellos" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="800" height="400" rx="14" fill="#f8fafc"/>
<text x="400" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Caja SR/VT: camino de la fuerza y mando neumático</text>
<rect x="20" y="64" width="110" height="90" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<text x="75" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Motor y</text>
<text x="75" y="124" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">embrague</text>
<rect x="175" y="64" width="130" height="90" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<text x="240" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Divisor (S)</text>
<text x="240" y="118" text-anchor="middle" font-size="12" fill="#0f172a">2 pasos: baja / alta</text>
<text x="240" y="136" text-anchor="middle" font-size="12" fill="#0f172a">por 2</text>
<rect x="350" y="64" width="160" height="90" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="430" y="94" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Caja básica</text>
<text x="430" y="114" text-anchor="middle" font-size="12" fill="#0f172a">3 marchas + ultralenta</text>
<text x="430" y="132" text-anchor="middle" font-size="12" fill="#0f172a">+ marcha atrás</text>
<rect x="555" y="64" width="130" height="90" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="620" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Gama (R)</text>
<text x="620" y="118" text-anchor="middle" font-size="12" fill="#0f172a">2 pasos: baja / alta</text>
<text x="620" y="136" text-anchor="middle" font-size="12" fill="#0f172a">por 2</text>
<rect x="725" y="84" width="55" height="50" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<text x="752" y="114" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Salida</text>
<g stroke="#334155" stroke-width="2.5" fill="none">
<path d="M130 109 H175"/><path d="M305 109 H350"/><path d="M510 109 H555"/><path d="M685 109 H725"/>
</g>
<g fill="#334155">
<polygon points="175,109 166,104 166,114"/><polygon points="350,109 341,104 341,114"/><polygon points="555,109 546,104 546,114"/><polygon points="725,109 716,104 716,114"/>
</g>
<text x="400" y="188" text-anchor="middle" font-size="13" fill="#0f172a">3 marchas × 2 (divisor) × 2 (gama) = 12 sincronizadas; la ultralenta aporta 2 más</text>
<rect x="20" y="215" width="130" height="70" rx="8" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="85" y="243" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Pomo de palanca</text>
<text x="85" y="262" text-anchor="middle" font-size="12" fill="#0f172a">válvulas de mando</text>
<rect x="195" y="215" width="130" height="70" rx="8" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="260" y="243" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Relé + cilindro</text>
<text x="260" y="262" text-anchor="middle" font-size="12" fill="#0f172a">del divisor</text>
<rect x="555" y="215" width="130" height="70" rx="8" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="620" y="243" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Relé + cilindro</text>
<text x="620" y="262" text-anchor="middle" font-size="12" fill="#0f172a">de la gama</text>
<g stroke="#334155" stroke-width="2" fill="none" stroke-dasharray="6 4">
<path d="M150 250 H195"/>
<path d="M85 285 V302 H650 V285"/>
<path d="M240 215 V154"/><path d="M620 215 V154"/>
</g>
<rect x="195" y="322" width="490" height="50" rx="8" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="440" y="344" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Inhibidores</text>
<text x="440" y="362" text-anchor="middle" font-size="10.5" fill="#0f172a">sin gama con marcha metida / sin marcha durante cambio de gama / sin gama baja a más de 30 km/h</text>
<g stroke="#b91c1c" stroke-width="2" fill="none">
<path d="M300 322 V285"/><path d="M580 322 V285"/>
</g>
<text x="400" y="395" text-anchor="middle" font-size="11" fill="#475569">Trazos discontinuos: aire comprimido. Esquema simplificado, no a escala.</text>
</svg>
<figcaption>Camino de la fuerza (arriba) y mando neumático (abajo) de una caja Volvo SR o VT. Ilustración propia, simplificada, basada en la descripción de los cursos de formación.</figcaption>
</figure>

## El camino de la fuerza

El par del motor entra por el eje primario a través del embrague, pasa por el
divisor, atraviesa los piñones de la caja básica y sale por el grupo de gama
hacia el árbol de transmisión. El curso incluye una animación del camino de la
potencia en cada velocidad de la SR1700/1900; lo útil para el diagnóstico es
la lógica: **toda marcha usa un paso del divisor, uno de la caja básica y uno
de la gama**, de modo que un síntoma que aparece solo en la mitad alta o solo
en una de las dos gamas apunta al grupo correspondiente y no a la caja
básica.

La **caja de selección de ejes** va montada encima del cárter. Su trabajo es
trasladar el movimiento de la palanca a los dos fiadores de cambio de la caja
básica. Incluye un inhibidor de selección que impide que los dos fiadores
funcionen a la vez, un fiador que mantiene engranadas las marchas y otro que
ofrece una ligera resistencia al llevar la palanca a marcha atrás o a la
ultralenta. Su posición se ajusta con dos tornillos.

## Sistema neumático: divisor y gama

El aire comprimido alimenta dos cilindros de doble efecto: el de la gama, en
el extremo posterior de la caja, y el del divisor, junto al anterior. Ambos se
mandan desde el pomo de la palanca, y el curso señala que el aire pasa por un
filtro propio instalado en el distribuidor de aire, fijado en el chasis, que
retiene las impurezas antes de que lleguen a la caja.

**Gama.** La válvula del pomo abre o cierra el paso de aire a la válvula de
relé del cilindro de gama. Esa válvula tiene un resorte que mantiene el pistón
en gama alta; al pedir gama baja, el aire vence el resorte y desplaza el
pistón, y el aire se descarga por la propia válvula de relé, que además actúa
de tope trasero. El cilindro se ajusta con chapas de relleno entre el cilindro
y el mecanismo, de modo que los rodillos de la horquilla queden bien
posicionados respecto del anillo de acople del sincronizador.

**Divisor.** Su válvula de relé trabaja de forma parecida: en posición baja la
retiene un resorte, y al elegir la posición alta el aire vence ese resorte. Un
disyuntor enciende un testigo en el tablero. El curso es ambiguo aquí: en un
punto dice que el testigo indica la posición alta del divisor y en otro que
indica la baja. Compruebe en el manual de su modelo qué posición señala el
testigo antes de usarlo como dato de diagnóstico.

## Los inhibidores: qué impiden y por qué

La parte más didáctica de estas cajas es el conjunto de bloqueos que impiden
combinar mal los grupos. El curso describe cuatro:

1. **Cambio de gama con marcha engranada.** Una válvula de inhibición corta
   el aire hacia el cilindro de gama cuando la palanca tiene una marcha de la
   caja básica metida. Solo se permite cambiar de gama con la palanca en
   punto muerto. Es la que revisa primero un técnico cuando "no cambia de
   gama".
2. **Cambio de marcha durante el cambio de gama.** Un cilindro de inhibición,
   de efecto simple con resorte y un pasador, entra en la muesca de la palanca
   y bloquea la caja básica en punto muerto mientras la gama está cambiando. La
   válvula que lo gobierna la acciona el vástago del cilindro de gama.
3. **Cambio del divisor sin embrague.** El divisor solo se cambia con el pedal
   de embrague pisado a fondo, haya o no marcha metida. Una válvula de
   inhibición del divisor abre el paso de aire únicamente con el pedal
   pisado.
4. **Gama baja a alta velocidad.** El inhibidor impide pasar a gama baja cuando
   el árbol secundario supera las 700 rpm (30 km/h en el modelo del curso).
   Una señal del indicador de velocidad cierra, por vía eléctrica, el aire a la
   válvula de relé del cilindro de gama.

La lógica es la misma que en cualquier caja con grupos: el divisor y la gama
engranan con dientes y sincronizadores bajo el par total de la transmisión, de
modo que un cambio fuera de secuencia puede dañarlos. Por eso estos bloqueos
no se deben anular ni "puentear" para salir de un apuro.

## Lubricación y refrigeración

El curso describe una bomba de aceite de tipo excéntrica, accionada por un
piñón del eje intermedio a través del piñón propio de la bomba montado en el
árbol de marcha atrás. El aceite pasa por el filtro y luego por los conductos
que lo llevan a cojinetes y componentes de la sincronización.

Hay un **radiador de aceite** opcional: consiste en un soporte y un
termopermutador instalados donde normalmente va el filtro, de modo que el aceite
de la bomba atraviesa primero el radiador, después el filtro y luego los
conductos. El enfriamiento se hace con líquido del circuito de
refrigeración del motor, que llega por tubos metálicos y mangueras.

En la VT2014/2514 la distribución se mantiene: el 70 % del aceite se dirige a
lubricar el mecanismo de gama y el 30 % restante al resto de componentes. Las
novedades son que la **válvula de seguridad** que se abre si el filtro se
obstruye pasa a estar en la bomba, que el orificio de llenado, el indicador de
nivel y el drenaje van en agujeros separados en un lateral y que el nivel
puede verse por una ventanilla. Además, puede montarse un termopermutador en
la propia caja, por el que pasa el aceite antes de enviarse a los componentes,
para mantener la temperatura estable.

El curso no da especificación de aceite, capacidad ni intervalo de cambio.
Para eso use el manual del camión; si necesita criterios generales sobre
grados de viscosidad y especificaciones, hay una [guía de lubricantes para
cajas de cambios](/posts/guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios/),
y sobre contaminación y cambio de aceite, [esta otra
sobre intervalos](/posts/intervalos-cambio-contaminacion-aceite/).

## Qué cambia en la VT2014/2514

Las cajas VT2014/2514 se basan en la SR1900. El curso las describe con la
misma configuración de 14 marchas (dos ultralentas y doce sincronizadas, con
las cuatro marchas atrás sin sincronizar) y explica la nomenclatura: VT es
"transmisión Volvo"; 20 o 25 indican el par máximo de la caja, 2050 o 2450 N·m;
14 es el número de marchas. Las diferencias con la SR son:

- **Mecanismo de sincronización nuevo**, que reduce de forma considerable el
  esfuerzo del cambio. Se compone de corona, anillos interior y exterior,
  arandela, anillo de sincronización, muelle de hojas, cuerpo de embrague,
  manguito de acoplamiento y ganchos de muelle, incluidos dos específicos del
  punto muerto.
- **Bomba y filtro de aceite** con la válvula de seguridad en la bomba y el
  nivel visible por ventanilla, como se vio arriba.
- **Refrigeración** con termopermutador opcional en la caja.
- **Cilindro de inhibición con una función más:** con la caja en punto muerto y
  el pedal sin pisar, el resorte del cilindro bloquea el cambio. Al pisar el
  embrague, el aire llega a su base a través de la válvula de inhibición del
  divisor y vence el resorte. Resultado: **no se puede meter una marcha sin
  pisar el embrague.**
- **Componentes eléctricos** con más señales: unidad de conexión del divisor,
  unidad de la marcha atrás con testigo y señal acústica, válvula eléctrica
  de inhibición de gama, sensor de velocidad, sensor de posición del
  mecanismo de gama (que informa a la unidad central y activa la válvula
  eléctrica que evita cambios incorrectos), válvula que inhibe el engrane de la
  primera, sensor de punto muerto y sensor de temperatura del aceite.

## La VT2214B: servosincronización y mando por cables

El segundo curso se refiere a las cajas manuales de los camiones FH, NH y FM
con designaciones VT1708B, VT2009B, VT2214B, VTO2214B, VT2514B y VTO2514B. Las
letras tienen sentido: la **B** indica estriado evolvente en el eje primario
para el disco de embrague, y la **O** indica la versión con supermarcha. La
VT1708B se presenta como actualización de la R1500, y la VT2009B, de las
R1900/1700 y 1400.

Las modificaciones que enumera son:

- **Servosincronización** con un muelle de disco más robusto y de mayor fuerza
  expansora para primera y segunda. El muelle limita la fuerza sobre las
  superficies de fricción durante la sincronización y facilita el cambio. Las
  cajas VT1708B y VT2009B pueden combinarse con una servobomba de emergencia.
- **Sensor de velocidad** nuevo, atornillado en la caja de gama. Envía al
  tacógrafo dos señales, una en tiempo real y otra codificada, que deben ser
  idénticas; si no lo son, el tacógrafo guarda un código de avería. Al instalar un
  sensor o un tacógrafo nuevo hay que activar el sensor, y no debe activarse
  más de uno a la vez.
- **Estriado evolvente** en el eje primario y en el cubo del disco de embrague,
  de mayor resistencia. El curso es tajante: **no utilizar grasa durante el
  montaje.**
- **Cableado con conectores comunes** a todas las cajas manuales y **carcasa de
  mando común**, con tubos guía entre secciones que facilitan la instalación.

### Mando por cables

El sistema de cambio de marchas lleva el movimiento mediante dos cables de tipo
contrafase y antitorsión: uno, gris, para el movimiento longitudinal y otro,
negro, para el lateral. El curso lo presenta como una mejora ergonómica: menos
vibración en la palanca, menos esfuerzo en el cambio habitual y un recorrido
más corto.

Existen tres versiones del conjunto de palanca, para FH, para FM con volante
a la izquierda y para FM con volante a la derecha, instaladas en el piso de
la cabina con los cables saliendo por debajo y hacia delante. Los datos
prácticos son estos:

- **No se ajustan.** El conjunto tolera una desviación de ±15 mm y lleva
  amortiguadores de goma en cada extremo.
- **Fijación de enganche rápido**, marcada por colores: negro para el
  movimiento lateral y blanco para el longitudinal del lado del conjunto de
  palanca; azul para el longitudinal y naranja para el lateral del lado de la
  caja de mando.
- Los cables pasan por debajo del piso de la cabina, rodean el centro de
  basculamiento y siguen el lado izquierdo del bastidor, sujetos con presillas.
- La caja de mando tiene dos brazos, uno para el recorrido de cambio y otro
  para la selección, y un contrapeso en el lado opuesto para mejorar el
  cambio.

Como la cabina bascula, conviene comprobar al cerrarla que los cables
sigan bien alojados en sus presillas y sin pinzar; es una inferencia mía, no
un paso del curso, pero un cable mal ruteado daría cambios imprecisos que
se confunden con un problema de sincronizadores.

## Diagnóstico orientado

El curso no incluye una tabla de averías; esta es una lectura de su lógica
para ordenar la revisión. No sustituye el manual ni los códigos de falla del
camión.

| Síntoma | Causa probable según la lógica del sistema | Qué revisar primero |
| --- | --- | --- |
| No cambia de gama | Marcha engranada en la básica, falta de aire o inhibidor eléctrico activo | Palanca en punto muerto, presión de aire, filtro del distribuidor, válvula 614 y sensor de posición de gama |
| No entra gama baja en marcha | Velocidad del secundario por encima del umbral de inhibición | Velocidad real, señal del sensor de velocidad, válvula eléctrica de inhibición |
| La palanca queda bloqueada tras tocar la gama | Cilindro de inhibición pegado o válvula de inhibición mal posicionada | Retorno del pasador, aire residual, ajuste con chapas del cilindro de gama |
| El divisor no cambia | Pedal de embrague no pisado a fondo o válvula de inhibición del divisor sin abrir | Recorrido del pedal, válvula de inhibición, alimentación de aire al pomo |
| Testigo del divisor incoherente | Disyuntor o cableado | Disyuntor del divisor y su conector; confirme en el manual qué posición indica |
| Velocidad errática en el tacógrafo | Señales del sensor distintas o sensor no activado | Código de avería del tacógrafo, activación del sensor, un solo sensor activo |
| Cambios imprecisos o duros en VT2214B | Cables mal ruteados o pinzados, o desgaste de sincronización | Fijaciones por color, recorrido de cables, amortiguadores de goma |
| Calentamiento de la caja | Aceite bajo o refrigeración deficiente | Nivel por la ventanilla, termopermutador, sensor de temperatura de aceite |

## Errores comunes

- **Confundir el divisor con la gama.** El curso usa ambos términos de forma
  poco consistente. Antes de diagnosticar, identifique cuál de los dos
  cilindros está fallando.
- **Ajustar cables que no se ajustan.** En la VT2214B, forzar la tensión de un
  cable cambia la sensación de la palanca sin corregir nada.
- **Engrasar el estriado evolvente.** El curso lo prohíbe expresamente en el
  montaje del disco de embrague.
- **Anular un inhibidor.** Cortar la señal del sensor de velocidad o pasar por
  alto la válvula de inhibición permite cambios que el sistema evita por
  diseño.
- **Instalar un sensor de velocidad nuevo sin activarlo.** El tacógrafo
  guardará un código de avería y la velocidad registrada no será fiable.

## Para seguir leyendo

Para comparar con una caja de 16 marchas y mando electroneumático, vea
[Mercedes-Benz Actros y Atego](/posts/caja-cambios-mercedes-actros-atego-grupos-divisor-reductor/).
Si trabaja con cajas robotizadas, el artículo sobre el [cambio automático
Telligent](/posts/cambio-automatico-telligent-actros-embrague-sensores/)
explica cómo se sustituye el pedal por actuadores. Para el último tramo de la
línea de mando, el [árbol de transmisión](/posts/arbol-transmision/), y para
criterios de aceite, la [guía de lubricantes de cajas de
cambios](/posts/guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios/).

**Fuentes:** cursos de formación de Volvo sobre cajas SR1700/1900 y
VT2014/2514 ([Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/668-manual-caja-cambios-camiones-volvo))
y sobre la caja VT2214B de los camiones FH, NH y FM
([Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/979-manual-caja-cambios-vt2214b-camiones-fh-nh-fm-volvo)).
Valores referenciales de esos modelos; prevalece el manual de servicio del
camión.

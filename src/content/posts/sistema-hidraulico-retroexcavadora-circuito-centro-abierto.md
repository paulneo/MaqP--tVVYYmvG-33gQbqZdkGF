---
title: "Sistema hidráulico de la retroexcavadora: centro abierto y load sensing"
published: 2026-11-11
draft: false
featured: false
description: "Cómo funciona el sistema hidráulico de una retroexcavadora: bomba, válvulas del cargador y del retro, estabilizadores, giro y dirección, con centro abierto vs. load sensing."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "retroexcavadora"
  - "sistema-hidraulico"
  - "load-sensing"
  - "centro-abierto"
  - "komatsu-wb93r-5"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/retroexcavadoras/sistema-hidraulico-retroexcavadora-circuito-centro-abierto
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Cuál es la diferencia entre un circuito de centro abierto y uno load sensing?"
    a: "En el centro abierto la bomba (normalmente de engranajes y caudal fijo) entrega siempre todo su caudal; cuando las palancas están en neutro, el aceite atraviesa las válvulas y vuelve al tanque casi sin presión, y la energía sobrante se pierde en forma de calor. En el load sensing, una bomba de pistones de caudal variable recibe una señal de presión de carga (LS) y ajusta su desplazamiento para entregar solo lo que el operador pide, manteniendo una diferencia de presión constante a través de los carretes. El resultado es menos calor, menos consumo de combustible y un control más fino de los movimientos combinados."
  - q: "¿Qué significa ΔPLS y por qué se mide?"
    a: "Es la diferencia entre la presión de descarga de la bomba (Pp) y la presión LS que sale de la válvula de control, que refleja la carga del actuador. La bomba modifica el ángulo del plato para mantener esa diferencia constante. En el curso de Komatsu consultado el ejemplo usa 28 kg/cm² (cerca de 27,5 bar). Si al medirla en campo el valor es muy bajo o muy alto con el motor en alta, apunta a la válvula LS de la bomba, a la línea de señal LS o al ajuste del regulador; por eso es la primera medición del diagnóstico en un equipo load sensing."
  - q: "¿Por qué la dirección tiene prioridad sobre el cargador y el retro?"
    a: "Porque perder la dirección en movimiento es un riesgo de seguridad. Una válvula de prioridad envía primero el caudal que la dirección demanda y solo el sobrante se reparte entre los implementos. Por eso, si se opera el cargador a máxima velocidad y se gira el volante, el movimiento del cucharón se ralentiza un instante: es el comportamiento normal, no una falla."
  - q: "¿Para qué sirven las válvulas de alivio de los circuitos individuales?"
    a: "La válvula de alivio principal limita la presión máxima del sistema. Las válvulas de seguridad de cada puerto (por ejemplo, giro, cucharón o pluma) protegen un circuito concreto contra picos de presión producidos por cargas externas, como un golpe del cucharón contra roca o la inercia del giro al frenar. Evitan que ese pico llegue a mangueras, sellos y cilindros, y además permiten reponer aceite al lado que quedó en vacío."
  - q: "¿Cómo noto en campo que la bomba o el sistema LS están fallando?"
    a: "Los síntomas típicos son movimientos lentos en todos los implementos a la vez, falta de fuerza que mejora o empeora con la temperatura, ruido o vibración en la bomba, y aceite muy caliente. Antes de desmontar nada, mide presión de descarga y ΔPLS con manómetro, revisa filtros, nivel y respiradero, y compara contra la especificación del manual. Un sistema load sensing exige además verificar la línea de señal LS: una manguera obstruida o un orificio tapado produce síntomas que parecen una bomba defectuosa."
sources:
  - title: "Komatsu WB93R-5 / WB97R-5 Backhoes — Hydraulic System Course (Komatsu Utility Europe)"
    url: "https://www.heavyequipments.org/blog/236-komatsu-wb93r5-wb97r5-backhoes-hydraulic-system-course"
  - title: "Curso: estructura y función hidráulica de retroexcavadora Komatsu (sección 2_3)"
    url: "https://www.maquinariaspesadas.org/blog/1928-curso-estructura-funcion-hidraulica-retroexcavadora-wb416-5-komatsu"
related:
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - valvulas-hidraulicas-tipos-funcionamiento
  - circuitos-hidraulicos-abiertos-cerrados-diferencias
  - sistema-hidraulico-excavadora-recorrido-aceite
---

La retroexcavadora es una de las pocas máquinas que hace dos trabajos
con un solo circuito hidráulico: cargador frontal adelante, brazo
excavador atrás, más estabilizadores, giro, dirección y, en muchos
equipos, accesorios como martillo o cucharón multipropósito. Todo eso
sale de una o dos bombas que alimentan un bloque de válvulas. Entender
cómo se reparte el aceite entre esas funciones es la diferencia entre
diagnosticar con un manómetro y cambiar piezas por intuición.

En esta guía recorremos el circuito completo, comparamos los dos
esquemas que verás en los talleres de Latinoamérica (**centro abierto**
y **load sensing**) y usamos como ejemplo los cursos de Komatsu para
las retroexcavadoras WB93R-5 y WB97R-5, que usan un sistema load
sensing con compensadores de presión.

## Dos reglas que explican casi todo

Antes de hablar de válvulas conviene fijar dos ideas que Komatsu repite
al inicio de su curso, porque de ellas se deduce el resto:

- **El caudal define la velocidad.** Cuanto más aceite por segundo llega
  a un cilindro, más rápido se mueve. El caudal de la bomba depende de
  las revoluciones del motor y, en bombas de pistones, del ángulo del
  plato oscilante.
- **La resistencia define la presión.** La presión no la "produce" la
  bomba: aparece cuando el caudal encuentra resistencia, ya sea por un
  orificio estrecho o por la carga del actuador. Cuando se alcanza la
  presión de alivio, la máquina no puede dar más fuerza y el movimiento
  se detiene.

Para el diagnóstico esto se traduce así: **si todo es lento, sospecha
del caudal; si falta fuerza pero la velocidad es normal, sospecha de la
presión.** La potencia hidráulica es el producto de ambos, por lo que
al subir la presión disponible para la misma potencia de motor baja el
caudal.

## Cómo viaja el aceite en una retroexcavadora

El recorrido general es el mismo en cualquier marca:

1. **Depósito** y filtro de succión o colador.
2. **Bomba principal**, accionada por el motor diésel.
3. **Bloque de válvulas de control**, dividido en secciones.
4. **Actuadores**: cilindros del cargador, cilindros del retro,
   estabilizadores, motor o cilindros de giro y cilindro de dirección.
5. **Retorno** al depósito a través del filtro y, en algunos equipos, de
   un enfriador.

En paralelo existe un circuito de **mando piloto (PPC)**: las palancas
no abren los carretes por esfuerzo mecánico, sino que modulan una
presión piloto baja que empuja el carrete. Es un circuito aparte, con
su propio filtro y sus propias válvulas reductoras. Para repasar la
anatomía general de estos componentes puedes leer
[qué es un sistema hidráulico en una excavadora](/posts/que-es-un-sistema-hidraulico-en-una-excavadora/)
y [cómo funciona la bomba hidráulica](/posts/como-funciona-la-bomba-hidraulica-de-una-excavadora/).

## La bomba: engranajes o pistones de caudal variable

### Bomba de engranajes (caudal fijo)

Es la solución clásica de retroexcavadoras económicas y de generaciones
anteriores. Entrega un caudal proporcional a las rpm del motor, sin
posibilidad de variar la cilindrada. Es robusta, barata y tolera bien
condiciones de taller poco ideales. Su costo está en la eficiencia: si
las palancas están en neutro, la bomba sigue moviendo todo el aceite y
la potencia se disipa como calor. Ese es el comportamiento del
**centro abierto**.

### Bomba de pistones de caudal variable

El curso de Komatsu para estos modelos describe una bomba de pistones
axiales con plato oscilante. El plato inclinado determina cuánto aceite
llena cada cámara de pistón: más ángulo, más caudal; menos ángulo,
menos caudal. Dos válvulas gobiernan el ángulo:

- **Válvula LS (load sensing)**: compara la presión de descarga con la
  señal LS y mantiene constante la diferencia entre ambas.
- **Válvula PC (control de potencia)**: limita el caudal cuando la
  presión sube, para que la bomba nunca pida más par del que el motor
  puede dar. En el curso se muestra además un solenoide que, al
  activarse, reduce la entrega de la bomba: es el **modo económico**.

El curso en español de Komatsu da, como datos del modelo que usa de
ejemplo, un caudal máximo de **165 L/min**, una presión constante
máxima de **245 bar** y un pico de **319 bar**. Son valores de ese
equipo; **no los tomes como referencia para otra máquina y verifica
siempre en el manual del tuyo**.

## Centro abierto vs. load sensing

Ambos esquemas alimentan los mismos cilindros, pero gestionan el aceite
sobrante de forma opuesta.

<figure class="diagram">
<svg viewBox="0 0 800 330" role="img" aria-labelledby="rh-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="rh-d1-title">Comparación esquemática entre circuito de centro abierto y circuito load sensing con la bomba, la válvula y el tanque</title>
<rect x="0" y="0" width="800" height="330" rx="12" fill="#f8fafc"/>
<line x1="400" y1="20" x2="400" y2="310" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="200" y="36" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Centro abierto</text>
<text x="600" y="36" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Load sensing</text>
<circle cx="70" cy="150" r="30" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="70" y="155" text-anchor="middle" font-size="14" fill="#0f172a">Bomba</text>
<rect x="160" y="115" width="100" height="70" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="210" y="155" text-anchor="middle" font-size="14" fill="#0f172a">Válvula</text>
<rect x="320" y="125" width="60" height="50" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="350" y="155" text-anchor="middle" font-size="14" fill="#0f172a">Cilindro</text>
<path d="M100 150 H160" stroke="#d97706" stroke-width="5" fill="none"/>
<path d="M260 150 H320" stroke="#d97706" stroke-width="5" fill="none" stroke-dasharray="3 6"/>
<path d="M210 185 V250 H320" stroke="#d97706" stroke-width="5" fill="none"/>
<rect x="320" y="235" width="60" height="30" rx="4" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
<text x="350" y="255" text-anchor="middle" font-size="14" fill="#0f172a">Tanque</text>
<text x="200" y="272" text-anchor="middle" font-size="13" fill="#0f172a">Neutro: todo el caudal</text>
<text x="200" y="290" text-anchor="middle" font-size="13" fill="#0f172a">pasa al tanque sin trabajo útil</text>
<circle cx="470" cy="150" r="30" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="470" y="155" text-anchor="middle" font-size="14" fill="#0f172a">Bomba</text>
<rect x="560" y="115" width="100" height="70" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="610" y="155" text-anchor="middle" font-size="14" fill="#0f172a">Válvula</text>
<rect x="720" y="125" width="60" height="50" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="750" y="155" text-anchor="middle" font-size="14" fill="#0f172a">Cilindro</text>
<path d="M500 150 H560" stroke="#d97706" stroke-width="5" fill="none"/>
<path d="M660 150 H720" stroke="#d97706" stroke-width="5" fill="none"/>
<path d="M690 150 V90 H470 V120" stroke="#0f172a" stroke-width="2" fill="none" stroke-dasharray="6 4"/>
<text x="590" y="80" text-anchor="middle" font-size="13" fill="#0f172a">Señal LS</text>
<text x="600" y="215" text-anchor="middle" font-size="13" fill="#0f172a">La bomba entrega solo lo que</text>
<text x="600" y="235" text-anchor="middle" font-size="13" fill="#0f172a">pide la válvula; en neutro</text>
<text x="600" y="255" text-anchor="middle" font-size="13" fill="#0f172a">reduce el caudal al mínimo</text>
</svg>
<figcaption>Esquema comparativo simplificado: a la izquierda, el aceite sobrante fluye al tanque; a la derecha, la señal LS ordena a la bomba bajar su caudal. Ilustración propia, no a escala.</figcaption>
</figure>

| Característica | Centro abierto | Load sensing |
|---|---|---|
| Bomba típica | Engranajes, caudal fijo | Pistones, caudal variable |
| Pérdidas en neutro | Altas: todo el caudal circula | Bajas: la bomba reduce su entrega |
| Calentamiento del aceite | Mayor | Menor |
| Movimientos combinados | El implemento de menor carga "roba" aceite | Compensadores reparten el caudal con independencia de la carga |
| Costo y complejidad | Bajo, fácil de reparar | Mayor; exige medir presiones |
| Consumo de combustible | Mayor | Menor |

La explicación de por qué el centro abierto "roba" caudal es sencilla:
el aceite siempre sigue el camino de **menor resistencia**. Si accionas
el brazo y la pluma a la vez, el actuador que necesita menos presión
recibe el aceite primero y el otro se queda corto. El load sensing
corrige ese comportamiento con compensadores de presión, como veremos
más abajo. Para ampliar la teoría general de ambas arquitecturas,
revisa [circuitos hidráulicos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/).

## El control load sensing paso a paso

El curso de Komatsu explica el principio con una analogía de
resistencias: la presión de la bomba (**Pp**) es la suma de dos
resistencias en serie, la del carrete de la válvula (R1) y la del
actuador (R2). La señal LS (**PLS**) se toma aguas abajo del carrete,
por lo que equivale a R2. Restando, queda:

**ΔPLS = Pp − PLS = R1**

Es decir, el ΔPLS mide cuánta presión "consume" la apertura del
carrete. Si la bomba mantiene ese valor constante, el caudal que pasa
por el carrete depende únicamente de cuánto lo abra el operador, y no
de la carga. Eso es lo que da control fino.

<figure class="diagram">
<svg viewBox="0 0 800 300" role="img" aria-labelledby="rh-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="rh-d2-title">Lazo de control load sensing: la presión de la bomba Pp y la presión de carga PLS determinan el ángulo del plato</title>
<rect x="0" y="0" width="800" height="300" rx="12" fill="#f8fafc"/>
<rect x="250" y="25" width="300" height="50" rx="8" fill="#fef3c7" stroke="#0f172a" stroke-width="2.5"/>
<text x="400" y="56" text-anchor="middle" font-size="15" fill="#0f172a">Válvula LS de la bomba</text>
<circle cx="90" cy="170" r="42" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="90" y="166" text-anchor="middle" font-size="14" fill="#0f172a">Bomba</text>
<text x="90" y="184" text-anchor="middle" font-size="13" fill="#0f172a">de pistones</text>
<rect x="290" y="130" width="140" height="80" rx="8" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="360" y="167" text-anchor="middle" font-size="15" fill="#0f172a">Carrete de</text>
<text x="360" y="187" text-anchor="middle" font-size="15" fill="#0f172a">la válvula</text>
<rect x="610" y="140" width="150" height="60" rx="8" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.5"/>
<text x="685" y="176" text-anchor="middle" font-size="15" fill="#0f172a">Actuador</text>
<path d="M132 170 H290" stroke="#d97706" stroke-width="6" fill="none"/>
<path d="M430 170 H610" stroke="#d97706" stroke-width="6" fill="none"/>
<text x="210" y="155" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Pp</text>
<text x="520" y="155" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">PLS</text>
<path d="M210 170 V50 H250" stroke="#0f172a" stroke-width="2" fill="none"/>
<path d="M520 170 V50 H550" stroke="#0f172a" stroke-width="2" fill="none" stroke-dasharray="6 4"/>
<path d="M250 50 H150 V135 L122 148" stroke="#0f172a" stroke-width="2" fill="none" stroke-dasharray="2 4"/>
<text x="110" y="105" text-anchor="end" font-size="13" fill="#0f172a">Ajusta el</text>
<text x="110" y="122" text-anchor="end" font-size="13" fill="#0f172a">ángulo del plato</text>
<text x="400" y="262" text-anchor="middle" font-size="14" fill="#0f172a">Objetivo: mantener constante ΔPLS = Pp − PLS</text>
</svg>
<figcaption>Lazo load sensing simplificado: la válvula LS recibe Pp y PLS, y ajusta el ángulo del plato para conservar ΔPLS constante. Ilustración propia.</figcaption>
</figure>

### Ejemplo numérico del curso

El curso de Komatsu usa números sencillos para ilustrar el equilibrio:
si el actuador necesita 150 kg/cm² y la bomba entrega 178 kg/cm², el
ΔPLS es **28 kg/cm²** y el sistema está equilibrado. Entonces:

| Situación | Qué ocurre | Reacción de la bomba |
|---|---|---|
| El operador abre más el carrete | Pp baja y ΔPLS se reduce | Aumenta el ángulo del plato: más caudal, vuelve a subir Pp |
| El operador cierra el carrete | Pp sube y ΔPLS aumenta | Reduce el ángulo del plato: menos caudal |
| Aumenta la carga del actuador (160 kg/cm²) | ΔPLS cae a 18 | Más caudal hasta que Pp llegue a 188 kg/cm² y ΔPLS vuelva a 28 |
| Disminuye la carga (155 kg/cm²) | ΔPLS sube a 33 | Menos caudal hasta que Pp baje a 183 kg/cm² |

Esos números son didácticos, no valores de ajuste que debas buscar en
tu máquina. Recuerda la conversión: 1 kg/cm² es aproximadamente
0,98 bar, de modo que 28 kg/cm² son cerca de 27,5 bar. Ten presente
esa equivalencia al comparar manómetros en bar con manuales en kg/cm².

### Válvula de subdescarga: qué pasa en neutro y a mínimo recorrido

El curso incluye una válvula de **subdescarga** en el bloque de control.
Su función es mantener el ΔPLS en el valor de diseño cuando la bomba
entrega más aceite del que piden los carretes:

- **Palancas en neutro**: la presión LS es cero y un resorte regula la
  presión de la bomba a 28 kg/cm² (valor del curso). El caudal sobrante
  se envía a tanque.
- **Mando fino**: la señal LS ayuda al resorte, y el ΔPLS se conserva.
  Gran parte del caudal todavía regresa al tanque, solo una fracción va
  al actuador.
- **Carrete a fondo**: Pp y PLS se acercan, el resorte cierra el paso a
  tanque y todo el caudal se dirige a los actuadores.

Esto explica un hallazgo de taller muy común: en un load sensing sano,
la presión en neutro **no es cero**; es el valor de espera del sistema.
Medirla es el primer punto de la verificación.

### Compensadores de presión

Aquí aparece la mejora más importante frente al centro abierto. Cuando
se mueven dos funciones a la vez, cada sección lleva un **compensador de
presión** que obliga a que la caída de presión en cada carrete sea la
misma, sin importar cuánta carga tenga cada actuador. Komatsu lo
presenta como la gran innovación de sus retroexcavadoras: el aceite se
divide en proporción a la apertura de cada carrete y no a su carga. La
sección más cargada fija la señal LS que ve la bomba, y las demás se
"compensan" para no robar caudal.

En la práctica, el operador nota que puede levantar el cargador y
volcar el cucharón, o girar y extender el brazo, sin que un movimiento
detenga al otro.

## Las secciones del bloque de válvulas

Según el curso, el bloque de control se organiza por secciones
apiladas, lo que facilita el mantenimiento: se retira una sección sin
reemplazar todo el conjunto.

| Zona del bloque | Contenido (según el curso) |
|---|---|
| Tapa superior | Válvula de seguridad |
| Sección intermedia | Entrada de bomba, suministro y ajuste de presión piloto, suministro de presión a la dirección, válvula de alivio principal |
| Cargador | Cucharón y pluma del cargador |
| Retro | Brazo, giro, pluma y cucharón del retro |
| Accesorios | Martillo, cucharón multipropósito y brazo telescópico |
| Estabilizadores | Una sección para ambos estabilizadores |
| Cambio lateral | Solo en la versión europea (KUE) |

Como regla de lectura: **cada función tiene su carrete, y cada carrete
puede tener su válvula de seguridad**. El curso muestra válvulas de
seguridad específicas para giro, cucharón y pluma, además de la válvula
de alivio principal y la de alivio de la presión LS.

## Válvulas de prioridad, alivio y mando piloto

### Prioridad a la dirección

Una válvula de prioridad separa el caudal que exige la dirección antes
de repartir el resto. Esta decisión de diseño es de seguridad: sin
dirección, la máquina en movimiento es un riesgo. Si, trabajando con el
cargador a fondo, notas que el cucharón "titubea" cuando giras el
volante, es la prioridad actuando. Para entender el circuito de
dirección completo, revisa
[direcciones hidráulicas](/posts/direcciones-hidraulicas-oleohidraulicas/).

### Prioridad del circuito piloto y autorreducción

El curso también menciona una **válvula de prioridad PPC** y una
válvula de **autorreducción PPC**, que aseguran presión piloto
suficiente y estable para los carretes incluso cuando el sistema
principal está muy demandado. Si la presión piloto baja, los carretes
no se desplazan completamente y el síntoma es una máquina "floja" con
la bomba en buen estado: un clásico de diagnóstico mal orientado.

### Alivios: tres niveles de protección

1. **Alivio principal**: limita la presión máxima del circuito.
2. **Alivios de seguridad por puerto**: protegen un actuador contra picos
   por inercia o golpes externos (giro, cucharón, pluma).
3. **Alivio de la señal LS**: limita la presión de la señal que gobierna
   la bomba, de modo que fija el techo del sistema.

Cada uno se ajusta con un manómetro y un procedimiento específico; no
se "afinan" a oído ni se aumenta la presión para ganar fuerza, porque
los componentes, las mangueras y la estructura están calculados para
un límite.

### Mando piloto y válvulas solenoide

Las palancas del operador modulan válvulas **PPC** de reducción: con la
palanca en neutro, los puertos de salida quedan conectados a tanque;
al mover la palanca, una presión proporcional llega a un lado del
carrete mientras el opuesto sigue en retorno. El recorrido máximo
entrega la presión piloto máxima. El curso añade un **grupo de
solenoides** que gestiona funciones como el modo potencia/economía, el
bloqueo del diferencial, el bloqueo de la pluma del retro, el
bloqueo del cucharón y el activado del mando PPC del retro.
Esos solenoides son un puente con el sistema eléctrico; si un
carrete no responde y la presión hidráulica es correcta, el siguiente
paso es revisar el solenoide y su alimentación. Para esa parte, mira
[sistema eléctrico de la retroexcavadora](/posts/sistema-electrico-retroexcavadora-diagnostico/).

## Qué hace el aceite al operar el cargador y el retro

### Con el cargador

Al elevar la pluma o volcar el cucharón, el mando piloto desplaza el
carrete correspondiente. La bomba detecta la presión de carga por la
señal LS, aumenta su ángulo y envía caudal. Si levantas la pluma con el
cucharón lleno, la presión sube; la bomba compensa con más caudal para
mantener el ΔPLS hasta que se alcanza el límite del control de
potencia (PC), que reduce el caudal para no ahogar al motor. Si el
motor cae de rpm al cargar, el caudal baja con él: **por eso se
trabaja con el motor en régimen alto**.

### Con el retro

Aquí intervienen más secciones y casi siempre combinadas: pluma, brazo,
cucharón y giro. Es el escenario donde el compensador de presión
demuestra su valor, porque el giro (que exige mucho caudal para
arrancar y poco para sostener) no debe robar aceite a la pluma. Los
estabilizadores suelen operarse con la máquina quieta, de modo que
son los primeros en recibir la señal de carga cuando bajas ambos para
nivelar.

### Estabilizadores y giro

- **Estabilizadores**: son cilindros de doble efecto con **válvula de
  retención de bloqueo** (a veces llamada válvula de contención), que
  impide que el cilindro ceda cuando se suelta la palanca. Si la
  máquina "se hunde" lentamente al excavar, la causa habitual es una
  fuga interna en el cilindro o en esa válvula, no en la bomba.
- **Giro**: el movimiento brusco de arranque y parada genera picos de
  presión que absorben las válvulas de seguridad del giro. Si el giro
  se "frena a golpes" o tarda en detenerse, revisa esas válvulas antes
  que el freno de giro.

## Verificaciones de campo

Un diagnóstico ordenado ahorra horas. Esta secuencia sirve para
cualquier retroexcavadora, con las adaptaciones de cada marca:

1. **Nivel y estado del aceite**, respiradero y filtros (consulta
   [filtros y depósitos](/posts/filtros-depositos-sistema-hidraulico/)).
2. **Temperatura de operación** estable antes de medir.
3. **Presión de descarga** con manómetro en la toma de prueba, en
   neutro y con una función bloqueada en alivio (según el manual).
4. **ΔPLS** en equipos load sensing: compara contra la especificación,
   no contra el ejemplo del curso.
5. **Presión piloto**: debe estar dentro del rango del fabricante.
6. **Tiempos de ciclo** de cada función, comparados con la tabla del
   manual.
7. **Solenoides y válvulas de prioridad** si el problema es de un solo
   movimiento.

Guía rápida de síntomas (**referencial; verificar en el manual del
equipo**):

| Síntoma | Causa más probable | Primer chequeo |
|---|---|---|
| Todo lento, aceite caliente | Fuga interna de bomba, aceite degradado o filtro tapado | Temperatura, presión de descarga, análisis de aceite |
| Falta de fuerza en todos los implementos | Alivio principal desajustado o bomba desgastada | Presión máxima con manómetro |
| Un solo movimiento lento | Alivio de seguridad de ese puerto, cilindro con fuga, carrete trabado | Presión en el puerto, test de deriva del cilindro |
| La dirección es dura con el cargador activo | Válvula de prioridad o presión LS | Presión en la línea de dirección |
| Movimientos intermitentes o "nerviosos" | Señal LS inestable, aire en el sistema | Línea LS, nivel, succión |

Para fallas más generales, usa
[fallas comunes del sistema hidráulico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/)
y, para entender los símbolos de los planos de tu máquina,
[símbolos hidráulicos ISO 1219](/posts/simbolos-hidraulicos-iso-1219-como-leer/).

## Contexto latinoamericano

- **Mezcla de generaciones**: en una misma flota conviven retroexcavadoras
  de centro abierto con bomba de engranajes y equipos más recientes
  load sensing. No apliques el procedimiento de uno al otro.
- **Calidad del combustible y del aceite**: el sistema load sensing es
  más sensible a la contaminación por sus orificios calibrados y
  compensadores. Un aceite sucio provoca síntomas que parecen fallas de
  bomba.
- **Altitud y temperatura**: en zonas altas y frías, el aceite espeso
  eleva la presión diferencial de los filtros y reduce la respuesta.
  Calienta la máquina antes de exigirla.
- **Documentación**: pide el manual de servicio del número de serie
  exacto. Los valores cambian entre modelos de una misma familia.

## Resumen

La retroexcavadora combina varias funciones sobre un mismo bloque de
válvulas. El caudal define la velocidad y la resistencia define la
presión; de ahí nacen los dos esquemas principales. El **centro
abierto** es simple y robusto, pero desperdicia energía en neutro y
reparte mal el caudal en movimientos combinados. El **load sensing**
con bomba de pistones y compensadores mantiene un ΔPLS constante, entrega
solo lo necesario y permite trabajar con varias funciones a la vez. En
ambos casos, la lógica de diagnóstico es la misma: aceite limpio,
presiones medidas con manómetro y valores comparados con el manual del
modelo exacto.

Para seguir con la máquina completa: [partes y componentes de la
retroexcavadora](/posts/partes-retroexcavadora-componentes-funciones/),
[transmisión con power shuttle](/posts/transmision-retroexcavadora-power-shuttle-convertidor/),
[mantenimiento e intervalos](/posts/mantenimiento-retroexcavadora-checklist-intervalos/)
y [cómo elegir una retroexcavadora](/posts/como-elegir-retroexcavadora-comparativa-modelos/).
Si quieres ver el circuito en excavadoras, lee
[recorrido del aceite en una excavadora](/posts/sistema-hidraulico-excavadora-recorrido-aceite/)
y [válvulas hidráulicas](/posts/valvulas-hidraulicas-tipos-funcionamiento/).

**Fuentes**: curso de sistema hidráulico Komatsu WB93R-5 / WB97R-5
([heavyequipments.org](https://www.heavyequipments.org/blog/236-komatsu-wb93r5-wb97r5-backhoes-hydraulic-system-course))
y curso de estructura y función hidráulica de retroexcavadora Komatsu
([maquinariaspesadas.org](https://www.maquinariaspesadas.org/blog/1928-curso-estructura-funcion-hidraulica-retroexcavadora-wb416-5-komatsu)).
Los esquemas de este artículo son ilustraciones propias; no reproducen
los diagramas del fabricante.

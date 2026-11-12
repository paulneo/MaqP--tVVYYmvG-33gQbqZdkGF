---
title: "Partes de una retroexcavadora: componentes y función de cada sistema"
published: 2026-11-11
draft: false
featured: false
description: "Guía de las partes de una retroexcavadora: motor, tren de potencia, cargador frontal, brazo excavador, estabilizadores, cabina, frenos y dirección, con el 310G como ejemplo."
category: maquinaria-pesada
formato: guia
nivel: basico
tags:
  - "retroexcavadora"
  - "partes-retroexcavadora"
  - "john-deere-310g"
  - "cargador-frontal"
  - "estabilizadores"
  - "controles-pilotados"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/retroexcavadoras/partes-retroexcavadora-componentes-funciones
author: redaccion-maquinaria
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Cuáles son las dos partes principales de una retroexcavadora?"
    a: "Son el conjunto cargador frontal (brazos y cucharón delantero, para cargar, empujar y nivelar) y el conjunto retroexcavador (pluma, balancín y cucharón trasero, para excavar zanjas y cimientos). Ambos van montados sobre un mismo chasis con motor, transmisión, ejes, cabina y estabilizadores. Cada conjunto trabaja en un sentido distinto: el cargador hacia adelante y la retro hacia atrás, con el operador girando el asiento."
  - q: "¿Para qué sirven los estabilizadores y por qué no se excava sin bajarlos?"
    a: "Los estabilizadores son patas hidráulicas que apoyan la máquina en el suelo y descargan el peso de los neumáticos y de la suspensión. Convierten el chasis en una plataforma rígida: sin ellos, la fuerza de excavación levanta o mece la máquina, se pierde precisión y se pone en riesgo la estabilidad lateral. Por regla de seguridad, la retro solo excava con los estabilizadores apoyados sobre piso firme, a veces con zapatas o tablones en terreno blando."
  - q: "¿Qué diferencia hay entre una retroexcavadora de pivote central y una de desplazamiento lateral?"
    a: "En la de pivote central (center-pivot) el brazo excavador gira sobre un mástil fijo en el centro de la parte trasera, así que solo se puede excavar en el eje de la máquina. En la de desplazamiento lateral (side-shift) todo el conjunto se desliza sobre un riel o carro transversal, lo que permite excavar pegado a muros o bordillos sin reposicionar la máquina. A cambio, el mecanismo agrega peso, piezas de desgaste y mantenimiento, y en general la rigidez es algo menor. Es referencial; verificar en el manual del equipo."
  - q: "¿Qué es el patrón SAE y el patrón ISO en los controles de la retro?"
    a: "Son dos asignaciones distintas de las funciones del brazo excavador a las palancas. En el patrón ISO (el mismo de las excavadoras), la palanca izquierda combina giro y balancín, y la derecha combina pluma y cucharón. En el patrón SAE de retroexcavadora, pluma y balancín intercambian lugar. Muchas máquinas traen un selector o una válvula para cambiar de patrón, e indican el patrón activo con una placa frente al operador. Antes de operar una máquina ajena, verifica siempre el patrón con la placa y con movimientos lentos."
  - q: "¿Para qué sirve el convertidor de par en una retroexcavadora?"
    a: "Es un acoplamiento hidráulico entre el motor y la transmisión que multiplica el par cuando la máquina está cargada o a baja velocidad, y permite detener el vehículo sin calar el motor. Esto es muy útil en el trabajo con cargador, donde se avanza contra una pila de material con el motor acelerado. El 310G del ejemplo usa un convertidor de 280 mm con relación de calado de 2,63:1, es decir, el par puede multiplicarse hasta ese valor cuando la salida está detenida."
sources:
  - title: "Manual de retroexcavadora 310G John Deere: motor, tren de mando y sistemas (TM2769)"
    url: "https://www.maquinariaspesadas.org/blog/2357-manual-retroexcavadora-310g-john-deere-motor-tren-mando-sistemas"
  - title: "Komatsu WB93R-5 y WB97R-5: cabina y controles (Komatsu Utility Europe)"
    url: "https://www.heavyequipments.org/blog/228-komatsu-wb93r5-wb97r5-backhoes-cabin-controls-course"
related:
  - diferencia-retroexcavadora-cargador-frontal
  - circuitos-hidraulicos-moviles
  - cilindros-hidraulicos-excavadora-pluma-balancin-cazo
---

La retroexcavadora es probablemente la máquina más versátil de una obra
pequeña o mediana: cava la zanja, carga el camión, nivela la base y
mueve los tubos. Pero esa versatilidad viene de una arquitectura poco
común: **dos máquinas montadas sobre un solo chasis**, una mirando hacia
adelante (el cargador) y otra mirando hacia atrás (la retro). Para
operarla, mantenerla o comprarla con criterio, lo primero es conocer sus
partes y entender qué problema resuelve cada una.

Esta guía es el punto de entrada a nuestra serie sobre retroexcavadoras.
Recorremos las partes de adelante hacia atrás usando como ejemplo
práctico el **John Deere 310G**, un modelo muy visto en Latinoamérica,
y la comparamos con otras máquinas de la región: **Case 580, JCB 3CX,
Caterpillar 416 y Komatsu WB97**. Al final encontrarás los enlaces a las
guías de profundización de cada sistema.

## Vista general: una máquina, dos herramientas

Antes de entrar al detalle, conviene ubicar los grandes bloques sobre
un esquema.

<figure class="diagram">
<svg viewBox="0 0 800 400" role="img" aria-label="Vista lateral esquemática de una retroexcavadora con diez partes numeradas: motor, brazos del cargador, cucharón del cargador, cabina, tren de potencia, mástil giratorio, pluma, balancín, cucharón de la retro y estabilizador" style="width:100%;height:auto;font-family:inherit">
<title>Esquema lateral de una retroexcavadora con sus partes principales numeradas</title>
<rect x="0" y="0" width="800" height="400" rx="12" fill="#f1f5f9"/>
<line x1="20" y1="335" x2="780" y2="335" stroke="#64748b" stroke-width="2"/>
<circle cx="500" cy="290" r="45" fill="#334155"/>
<circle cx="500" cy="290" r="20" fill="#94a3b8"/>
<circle cx="215" cy="307" r="28" fill="#334155"/>
<circle cx="215" cy="307" r="12" fill="#94a3b8"/>
<rect x="200" y="235" width="400" height="40" rx="4" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
<path d="M215 235 V205 H330 V235 Z" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
<rect x="345" y="125" width="130" height="110" rx="6" fill="#cbd5e1" stroke="#1e293b" stroke-width="2"/>
<rect x="355" y="137" width="100" height="70" rx="3" fill="#e2e8f0" stroke="#1e293b" stroke-width="1"/>
<rect x="338" y="116" width="144" height="9" rx="3" fill="#1e293b"/>
<polyline points="340,225 235,205 130,285" fill="none" stroke="#1e293b" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/>
<polyline points="340,225 235,205 130,285" fill="none" stroke="#f59e0b" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
<line x1="320" y1="233" x2="250" y2="214" stroke="#475569" stroke-width="5"/>
<polygon points="100,270 150,262 168,312 98,312" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
<rect x="590" y="215" width="30" height="70" rx="4" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
<polyline points="605,235 640,150 700,120" fill="none" stroke="#1e293b" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/>
<polyline points="605,235 640,150 700,120" fill="none" stroke="#f59e0b" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
<polyline points="700,120 745,230 725,305" fill="none" stroke="#1e293b" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/>
<polyline points="700,120 745,230 725,305" fill="none" stroke="#f59e0b" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
<polygon points="712,300 748,296 760,330 722,334" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
<line x1="595" y1="285" x2="575" y2="331" stroke="#1e293b" stroke-width="9" stroke-linecap="round"/>
<rect x="558" y="331" width="36" height="8" rx="2" fill="#1e293b"/>
<g font-size="14" font-weight="700" text-anchor="middle" fill="#ffffff">
<circle cx="290" cy="183" r="13" fill="#1e293b"/><text x="290" y="188">1</text>
<circle cx="170" cy="215" r="13" fill="#1e293b"/><text x="170" y="220">2</text>
<circle cx="115" cy="240" r="13" fill="#1e293b"/><text x="115" y="245">3</text>
<circle cx="410" cy="92" r="13" fill="#1e293b"/><text x="410" y="97">4</text>
<circle cx="350" cy="305" r="13" fill="#1e293b"/><text x="350" y="310">5</text>
<circle cx="648" cy="262" r="13" fill="#1e293b"/><text x="648" y="267">6</text>
<circle cx="640" cy="105" r="13" fill="#1e293b"/><text x="640" y="110">7</text>
<circle cx="778" cy="185" r="13" fill="#1e293b"/><text x="778" y="190">8</text>
<circle cx="783" cy="290" r="13" fill="#1e293b"/><text x="783" y="295">9</text>
<circle cx="560" cy="368" r="13" fill="#1e293b"/><text x="560" y="373">10</text>
</g>
<g font-size="14" fill="#0f172a" text-anchor="middle">
<text x="150" y="375">Lado cargador</text>
<text x="690" y="375">Lado retroexcavadora</text>
</g>
</svg>
<figcaption>Esquema original, no a escala. Los números corresponden a la tabla siguiente.</figcaption>
</figure>

| N.º | Parte | Función en una frase |
|---|---|---|
| 1 | Motor diésel | Fuente única de potencia: mueve la máquina y la bomba hidráulica |
| 2 | Brazos del cargador | Levantan y bajan el cucharón delantero |
| 3 | Cucharón del cargador | Carga, empuja y nivela; el tipo 4 en 1 también abre |
| 4 | Cabina o ROPS | Protege al operador y concentra los mandos |
| 5 | Tren de potencia | Convertidor, transmisión y ejes que llevan la fuerza a las ruedas |
| 6 | Mástil giratorio | Pivote que hace girar todo el brazo excavador |
| 7 | Pluma (boom) | Primer tramo del brazo: da altura y alcance |
| 8 | Balancín (dipper o stick) | Segundo tramo: controla la profundidad |
| 9 | Cucharón de la retro | Corta y carga el material en la zanja |
| 10 | Estabilizadores | Patas que apoyan la máquina durante la excavación |

## El motor: una sola fuente para todo

Una retroexcavadora lleva **un solo motor diésel** que cumple dos
trabajos a la vez: mover las ruedas por medio de la transmisión, y
accionar la bomba hidráulica que alimenta los dos conjuntos de trabajo,
la dirección y, en muchos modelos, los frenos. Por eso la velocidad del
motor se usa como "perilla" de productividad: más rpm significan más
caudal hidráulico y, por tanto, ciclos de excavación más rápidos.

En el ejemplo del **John Deere 310G**, el manual especifica un motor
John Deere 4045D de **4 cilindros y 4,52 L** de cilindrada, con
**57 kW (76 hp) brutos SAE y 53 kW (71 hp) netos** a 2.200 rpm, y un par
neto máximo de **296 N·m**. Son cifras de ese modelo. Como referencia
del segmento, las retros compactas de la región (Case 580, JCB 3CX,
Caterpillar 416) suelen ubicarse en la franja de 70 a 100 hp, pero el
dato exacto depende de la versión y del año; verifica en el manual del
equipo.

Dos detalles que importan al mecánico y al operador:

- **Alternador y sistema de 12 V.** El 310G trae alternador de 65 A, o
  de 95 A en la versión con cabina, porque la cabina suma carga eléctrica
  (aire acondicionado, ventilador, luces de trabajo). Lo revisamos con
  calma en la guía de [sistema eléctrico de la retroexcavadora](/posts/sistema-electrico-retroexcavadora-diagnostico/).
- **Filtración de aire en dos etapas.** El manual describe un filtro de
  aire seco con prefiltro y elemento. En obras polvorientas, que son la
  norma en minería, caminos y canteras de la región, ese conjunto es el
  primer seguro contra el desgaste prematuro de camisas y anillos.

## Tren de potencia: del motor a las ruedas

Aquí está una de las partes que más confunde a quien llega de un
tractor o de un camión. La secuencia típica es:

<figure class="diagram">
<svg viewBox="0 0 800 260" role="img" aria-label="Diagrama de bloques del tren de potencia: el motor diésel entrega potencia al convertidor de par, luego a la transmisión y finalmente a los ejes trasero y delantero; el motor también acciona la bomba hidráulica que alimenta cargador, retro, dirección y frenos" style="width:100%;height:auto;font-family:inherit">
<title>Flujo de potencia en una retroexcavadora</title>
<defs>
<marker id="pr-arr-d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker>
<marker id="pr-arr-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#b45309"/></marker>
</defs>
<rect x="0" y="0" width="800" height="260" rx="12" fill="#f1f5f9"/>
<g fill="#ffffff" stroke="#1e293b" stroke-width="2">
<rect x="20" y="60" width="120" height="60" rx="6"/>
<rect x="180" y="60" width="130" height="60" rx="6"/>
<rect x="350" y="60" width="130" height="60" rx="6"/>
<rect x="540" y="30" width="130" height="50" rx="6"/>
<rect x="540" y="110" width="130" height="50" rx="6"/>
</g>
<g fill="#fef3c7" stroke="#b45309" stroke-width="2">
<rect x="20" y="170" width="120" height="60" rx="6"/>
<rect x="180" y="170" width="300" height="60" rx="6"/>
</g>
<g font-size="14" fill="#0f172a" text-anchor="middle">
<text x="80" y="95">Motor diésel</text>
<text x="245" y="87">Convertidor</text><text x="245" y="105">de par</text>
<text x="415" y="87">Transmisión</text><text x="415" y="105">e inversor</text>
<text x="605" y="60">Eje trasero</text>
<text x="605" y="130">Eje delantero</text><text x="605" y="148">(solo 4WD)</text>
<text x="80" y="195">Bomba</text><text x="80" y="213">hidráulica</text>
<text x="330" y="195">Cargador, retro, dirección</text><text x="330" y="213">y estabilizadores</text>
</g>
<g stroke="#1e293b" stroke-width="3" fill="none">
<line x1="140" y1="90" x2="178" y2="90" marker-end="url(#pr-arr-d)"/>
<line x1="310" y1="90" x2="348" y2="90" marker-end="url(#pr-arr-d)"/>
<path d="M480 90 H510"/>
<path d="M510 55 V135"/>
<line x1="510" y1="55" x2="538" y2="55" marker-end="url(#pr-arr-d)"/>
<line x1="510" y1="135" x2="538" y2="135" marker-end="url(#pr-arr-d)"/>
</g>
<g stroke="#b45309" stroke-width="3" fill="none">
<line x1="80" y1="120" x2="80" y2="168" marker-end="url(#pr-arr-a)"/>
<line x1="140" y1="200" x2="178" y2="200" marker-end="url(#pr-arr-a)"/>
</g>
<g font-size="14" fill="#0f172a">
<text x="520" y="205">Línea oscura: potencia mecánica</text>
<text x="520" y="228">Línea ámbar: potencia hidráulica</text>
</g>
</svg>
<figcaption>Flujo de potencia simplificado. Algunas máquinas con transmisión mecánica sin convertidor omiten el segundo bloque.</figcaption>
</figure>

### Convertidor de par

Es un acoplamiento hidrocinético: una turbina impulsada por el motor
mueve aceite contra otra turbina conectada a la transmisión. Tiene dos
ventajas prácticas. Primero, **permite frenar la máquina sin calar el
motor**, algo imposible con un embrague seco sin pisarlo. Segundo,
**multiplica el par** cuando la salida va lenta o detenida, justo cuando
el cargador empuja contra una pila. El manual del 310G indica un
convertidor de **280 mm con relación de calado de 2,63:1**.

El costo es calor: el aceite del convertidor se calienta cuando se
"patina" contra una carga, por eso los tableros de las máquinas incluyen
una luz de temperatura de aceite de transmisión, como se ve en los
tableros del Komatsu WB93R-5 y WB97R-5. Los modelos con servotransmisión
(power shuttle) que cambian de sentido sin embrague se explican en
la guía de
[transmisión de la retroexcavadora, power shuttle y convertidor](/posts/transmision-retroexcavadora-power-shuttle-convertidor/).

### Transmisión e inversor

El 310G tiene una **transmisión de 4 marchas de engranajes helicoidales,
sincronizada, con inversor hidráulico**. El inversor es el elemento
clave del trabajo con cargador: permite pasar de avance a retroceso con
una palanca, sin detener la máquina ni usar el pedal, lo que acelera el
ciclo "cargar, retroceder, girar, descargar". Las velocidades de avance
que da el manual para el 310G con transmisión de cambio manual y
neumáticos traseros 19.5L-24 son:

| Marcha | Velocidad de avance (310G) |
|---|---|
| 1.ª | 5,5 km/h |
| 2.ª | 9,0 km/h |
| 3.ª | 21,7 km/h |
| 4.ª | 36,7 km/h |

La primera y la segunda son marchas de trabajo; la tercera y la cuarta
son de traslado. El Komatsu WB97R-5, en cambio, reemplaza la palanca
simple de sentido por un selector de marchas ATC26 en el tablero de
mando, y ofrece un botón de "kick down" (reducción rápida de marcha)
que el WB93R-5 no tiene, según su documentación de cabina.

### Ejes, mandos finales y tracción 4WD

Detrás de la transmisión salen los ejes. Dos conceptos:

- **Mandos finales planetarios.** El 310G usa planetarios montados al
  interior, con carga de impacto distribuida en tres engranajes
  enfriados por aceite. Reducen la velocidad y aumentan el par justo en
  la rueda, de modo que el diferencial y los semiejes trabajen con
  menos esfuerzo.
- **Tracción en las cuatro ruedas (4WD o TDM).** Es una opción en el
  310G, que en esa versión agrega unos 168 kg al peso y un eje delantero
  motriz con su propia caja y planetarios en cada rueda. En la práctica
  mejora la tracción sobre barro, arena y pendientes, y es una de las
  primeras configuraciones que se pide en minería, caminos rurales y
  zonas de lluvia intensa. Los tableros del Komatsu incluyen un
  interruptor de tracción 4x4 y un bloqueo de diferencial.

Importante: el eje delantero **sin tracción** gira libre y es más ligero
y barato; con tracción, el radio de giro cambia. El manual del 310G
indica un radio de viraje de 3,57 m con eje delantero no motorizado y
frenos aplicados, y de 3,34 m con puente motorizado y frenos aplicados.

## Conjunto cargador frontal

El cargador es lo que distingue a una retro de una simple excavadora
sobre ruedas: es la herramienta de **carga, empuje, nivelación y
relleno**. Se compone de tres partes.

1. **Brazos.** Dos brazos paralelos que parten de la parte media del
   chasis y se levantan con cilindros hidráulicos. Su geometría define
   la altura de descarga: el 310G anuncia una altura de carga de
   camión de 3,3 m a la máquina estándar.
2. **Cucharón.** El estándar del 310G tiene 0,86 m³ colmados. Puede
   ser universal o de servicio severo con reborde largo.
3. **Cilindros de inclinación.** Giran el cucharón para recoger o
   descargar.

### Cucharón 4 en 1

Es el accesorio que más productividad agrega al lado cargador. El
cucharón se divide en dos mitades articuladas, de modo que puede
**abrirse como almeja**, funcionar como pala para empujar, como
cuchilla para nivelar o como mordaza para sujetar material largo
como tubería. En el Komatsu WB93R-5 y WB97R-5, la apertura y el plegado del 4 en 1
se mandan con dos botones ubicados en la palanca del cargador, junto con
el bloqueo de diferencial y el botón de desacople de transmisión
(declutch). Este último corta la transmisión momentáneamente para
mandar todo el caudal hidráulico al levante del cargador.

## Conjunto retroexcavador

La retro es una cadena articulada de cuatro movimientos, accionados
cada uno por un cilindro: **giro** (swing), **pluma**, **balancín** y
**cucharón**. Es el mismo concepto que una excavadora, solo que montado
en la parte trasera de un chasis con ruedas. Para entender la
geometría en detalle, revisa nuestra guía de
[cilindros hidráulicos de pluma, balancín y cucharón](/posts/cilindros-hidraulicos-excavadora-pluma-balancin-cazo/).

### Mástil giratorio, pluma, balancín y cucharón

- **Mástil o torre giratoria.** Es el pivote vertical. Dos cilindros
  de giro empujan el brazo a izquierda y derecha. Las especificaciones
  del 310G miden el alcance desde el centro de este mástil.
- **Pluma (boom).** Parte del mástil y sube en ángulo. Define cuánto
  puede subir y cuánto alcance tiene la máquina.
- **Balancín (dipper o stick).** Es el brazo que cuelga de la punta de
  la pluma. Controla la profundidad: a mayor longitud, mayor
  profundidad de zanja.
- **Cucharón de la retro.** Se pueden elegir anchos de zanja. El manual
  del 310G lista cucharones de entre **305 mm y 762 mm** de ancho, por
  ejemplo el de 610 mm con 0,18 m³ colmados. Los cucharones angostos
  penetran mejor en suelo duro; los anchos mueven más volumen en suelo
  suelto.

El 310G alcanza una **profundidad máxima de excavación de 4,34 m** sin
brazo extensible, y la rotación del cucharón es de 190°, según su tabla de
especificaciones.

### Balancín extensible

El balancín extensible (extendible dipper) es un tubo telescópico
interno que se desliza dentro del balancín principal. Agrega alcance y
profundidad sin cambiar la máquina. En el 310G, el manual indica que la
profundidad máxima sube de 4,34 m a **5,46 m** con el brazo extendido,
con un peso adicional de 200 kg. Es una opción popular porque convierte
una retro compacta en una máquina capaz de cavar zanjas más profundas.

Ten en cuenta que al extenderlo, la capacidad de levante baja
(la palanca es más larga), y el brazo extendido suma desgaste en las
guías deslizantes, que requieren engrase periódico. El manual del 310G
incluye una grasa específica para el brazo extensible, un detalle que
muchos talleres pasan por alto.

### Pivote central o desplazamiento lateral

Esta es una decisión que se toma al comprar la máquina.

| Característica | Pivote central (center-pivot) | Desplazamiento lateral (side-shift) |
|---|---|---|
| Posición del brazo | Fija, al centro de la parte trasera | Se desliza sobre un riel transversal |
| Excavar junto a un muro | Hay que reposicionar la máquina | Se corre el brazo sin mover el chasis |
| Rigidez | Mayor, estructura más simple | Algo menor por el carro y el bloqueo |
| Mantenimiento | Menos puntos de desgaste | Riel, pasadores y bloqueo que revisar |
| Uso típico | Excavación en general, mayor robustez | Trabajo urbano, zanjas junto a edificios |

Es una comparación general y referencial; verificar en el manual del
equipo. El **Komatsu WB93R-5** documenta un interruptor de "bloqueo de
deslizamiento del brazo" (backhoe sliding lock), señal de que existe
una versión de brazo deslizante. Si te interesa el tema urbano,
mira el caso de las retros de cambio lateral en
[retroexcavadoras de cambio lateral para trabajos urbanos](/posts/retroexcavadora-trabajos-urbanos/).

## Estabilizadores

Son las dos patas hidráulicas traseras que se bajan antes de excavar.
La razón es mecánica: una retro monta el brazo en un chasis sobre
neumáticos, que son elásticos. Sin estabilizadores, cada vez que el
cucharón hace fuerza contra el suelo, la máquina "respira" sobre las
llantas, se desnivela y se pierde precisión. Con ellos, el chasis se
convierte en una base rígida y el peso se reparte sobre el suelo.

Algunos datos del 310G: el ancho de estabilizadores en posición de
transporte es de 2,18 m y de **3,10 m** abiertos en operación. Este
último número es el que determina si la máquina cabe en una zanja
angosta o en un patio estrecho.

Buenas prácticas, válidas para cualquier marca:

- Bajar los dos estabilizadores en terreno firme y nivelar el chasis
  antes de excavar. En suelo blando, usar zapatas o tablones.
- No usar los estabilizadores para empujar la máquina.
- Antes de transitar, subirlos completamente y colocar los seguros.
- Las máquinas modernas con control pilotado, como el WB97R-5, mandan
  los estabilizadores con control electrohidráulico desde el panel o
  la palanca.

## Cabina y controles

La cabina de una retro tiene una particularidad: **el asiento gira**.
El operador conduce y usa el cargador mirando hacia adelante, y gira
180 grados para excavar mirando hacia atrás. Por eso hay dos grupos de
mandos: los de conducción y cargador en la parte delantera, y las
palancas de la retro en la parte trasera.

### Mandos de conducción y cargador

Volante, acelerador, palanca de sentido de marcha, pedales de freno y
una palanca para el cargador. En máquinas modernas, la palanca del
cargador integra botones para bloqueo de diferencial, desacople de
transmisión y funciones del cucharón 4 en 1, como se ve en la
documentación del Komatsu WB93R-5 y WB97R-5. El tablero muestra
luces de aviso sobre presión de aceite del motor, temperatura del
refrigerante, filtro hidráulico tapado, filtro de aire obstruido y
freno de estacionamiento.

### Controles de la retro: mecánicos y pilotados

Existen dos tecnologías para mandar el brazo excavador:

| Aspecto | Palancas mecánicas | Mandos pilotados (PPC o hidráulicos) |
|---|---|---|
| Cómo mandan | Varillaje que mueve directamente el carrete de la válvula | Palancas que mandan una presión piloto, y esta mueve la válvula |
| Esfuerzo del operador | Mayor, se siente la resistencia | Bajo, movimientos suaves |
| Precisión | Depende del ajuste del varillaje | Proporcional y consistente |
| Costo y mantenimiento | Más simple y barato | Más caro, requiere circuito piloto limpio |
| Ajuste ergonómico | Limitado | Columnas inclinables y apoyamuñecas regulables |

El 310G de nuestro ejemplo es una máquina mecánica clásica: su manual
indica, para la retro sin brazo extensible, dos palancas, y para la que
lleva brazo extensible, un **pedal derecho** adicional que acciona la
extensión. Por su parte, Komatsu ofrece en el WB93R-5 una versión de
mandos mecánicos y otra de mandos PPC "estilo excavadora", con
movimientos proporcionales y control electrohidráulico de estabilizadores
y brazo telescópico mediante un interruptor en la palanca derecha. Los
mandos PPC se activan con un interruptor general en el panel lateral,
y las columnas de las palancas son inclinables y ajustables.

### Patrones de control: SAE e ISO

El patrón indica qué función va en cada eje de cada palanca. Los dos
más comunes en retros son:

| Palanca | Patrón ISO (tipo excavadora) | Patrón SAE (retroexcavadora) |
|---|---|---|
| Izquierda | Giro y balancín | Giro y pluma |
| Derecha | Pluma y cucharón | Balancín y cucharón |

Es una síntesis referencial; verifica en el manual del equipo, porque
las direcciones exactas (adelante o atrás) varían por fabricante. En el
Komatsu, el patrón de la máquina se indica con una placa frente a la
palanca. Cambiar de patrón entre máquinas, o de operador, es una
fuente conocida de accidentes: antes de excavar cerca de redes de
servicios, mueve las palancas lentamente y comprueba.

## Frenos y dirección

### Frenos

El 310G usa **frenos de servicio hidráulicos de discos en baño de
aceite**, montados al interior del eje, autoajustables y autoequilibrados. La
ventaja de los discos en baño de aceite es que están protegidos del
polvo y del barro, y que casi no requieren ajuste. El **freno de
estacionamiento** es un sistema independiente: se aplica por resorte
y se suelta por presión hidráulica, con control eléctrico en la
consola lateral. Este diseño "falla a seguro": si cae la presión, el
resorte frena la máquina.

En obra es común que los operadores traben los dos pedales de freno
juntos para traslado y los separen para ayudar al giro en el trabajo del
cargador. En el 310G, esa diferencia se nota en el radio de giro: 3,57 m
con frenos aplicados y 4,04 m con frenos sueltos (eje no motorizado).

### Dirección

La dirección es **hidrostática**: no hay conexión mecánica entre volante
y ruedas, solo una unidad hidráulica de dirección que dirige aceite a
los cilindros. Con el motor apagado la dirección se endurece, porque no
hay caudal. Es muy cómoda: el 310G da entre 2,3 y 3,0 vueltas de tope
a tope. Si quieres entender cómo funcionan estas unidades, lee
[direcciones hidráulicas y oleohidráulicas](/posts/direcciones-hidraulicas-oleohidraulicas/).

## El sistema hidráulico: el hilo que une todo

Casi todas las partes que vimos se mueven con aceite a presión. El
310G usa un **sistema de centro abierto con bomba de engranajes**, con
alivio de presión de **25.000 kPa (3.625 psi)** en la retro y
**19.000 kPa (2.750 psi)** en el cargador, y un caudal de 106 L/min a
2.200 rpm. El depósito es de solo 37 L y el filtro de retorno es de
10 micrones, según el manual. En un sistema tan compacto, la
limpieza del aceite es crítica.

Para entender por qué se usa centro abierto y qué implica en la
operación, ve la guía de
[sistema hidráulico de la retroexcavadora y el circuito de centro abierto](/posts/sistema-hidraulico-retroexcavadora-circuito-centro-abierto/).
Como base teórica, también tenemos
[circuitos hidráulicos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/)
y [circuitos hidráulicos móviles](/posts/circuitos-hidraulicos-moviles/).

## Comparación rápida con otros modelos de la región

No todas las retros son iguales. Estas son las diferencias generales de
las marcas que más circulan por Latinoamérica; son referencias
cualitativas, no datos de ficha técnica.

| Modelo | Rasgo distintivo habitual |
|---|---|
| John Deere 310 | Línea robusta, motor PowerTech, mandos mecánicos o pilotados según versión |
| Case 580 | Muy extendida, disponible con pivote central y desplazamiento lateral, hay versión eléctrica (580 EV) |
| JCB 3CX | Marca pionera, con brazo desplazable en muchas versiones y buena tracción |
| Caterpillar 416 | Enfoque en confiabilidad y red de soporte |
| Komatsu WB97 | Opción de mandos PPC tipo excavadora y cabina moderna |

Para profundizar en la decisión, revisa la guía de
[cómo elegir una retroexcavadora y comparar modelos](/posts/como-elegir-retroexcavadora-comparativa-modelos/).
Sobre la versión eléctrica de Case, lee
[Case 580 EV, el futuro eléctrico de la retroexcavadora](/posts/580ev-evolucion-electrica/).

## Mantenimiento: qué mirar según cada parte

Conocer las partes sirve para mantener cada una. Esta es una guía
rápida de qué vigilar en cada sistema, a modo de introducción:

| Parte | Qué revisar |
|---|---|
| Motor | Nivel de aceite, refrigerante, filtro de aire |
| Convertidor y transmisión | Nivel y temperatura de aceite |
| Ejes y mandos finales | Nivel de aceite, fugas en retenes |
| Brazos del cargador | Pasadores y bujes, engrase |
| Pluma, balancín y cucharón | Engrase diario, juego en pasadores, dientes y cuchillas |
| Estabilizadores | Fugas en cilindros, zapatas, pasadores |
| Frenos | Funcionamiento del freno de estacionamiento |
| Hidráulico | Nivel, filtro de retorno, mangueras |

Los intervalos exactos están en el manual de cada máquina. Para un
plan completo, usa la guía de
[mantenimiento de la retroexcavadora: checklist e intervalos](/posts/mantenimiento-retroexcavadora-checklist-intervalos/).
Y si dudas sobre la diferencia entre esta máquina y un cargador,
lee [diferencia entre retroexcavadora y cargador frontal](/posts/diferencia-retroexcavadora-cargador-frontal/)
o la guía de [componentes del cargador frontal](/posts/componentes-cargador-frontal/).

## Resumen

Una retroexcavadora son **dos máquinas en un chasis**: un cargador
frontal para empujar y cargar, y una retro trasera para excavar. Ambas
dependen de un único motor que reparte potencia por dos caminos: el
mecánico (convertidor, transmisión, ejes) y el hidráulico (bomba,
válvulas, cilindros). Los estabilizadores dan la rigidez para
excavar; la cabina giratoria y los mandos, mecánicos o pilotados, dan
el control. Con el 310G como ejemplo vimos cómo cada decisión de diseño,
como convertidor, frenos en baño de aceite, dirección hidrostática o
centro abierto, responde a un problema real de obra.

El siguiente paso es profundizar en cada sistema:
[transmisión y power shuttle](/posts/transmision-retroexcavadora-power-shuttle-convertidor/),
[circuito hidráulico de centro abierto](/posts/sistema-hidraulico-retroexcavadora-circuito-centro-abierto/),
[sistema eléctrico y diagnóstico](/posts/sistema-electrico-retroexcavadora-diagnostico/),
[mantenimiento y checklist](/posts/mantenimiento-retroexcavadora-checklist-intervalos/)
y [cómo elegir un modelo](/posts/como-elegir-retroexcavadora-comparativa-modelos/).

**Fuentes:** datos de especificaciones del 310G tomados del
[manual de la retroexcavadora 310G John Deere](https://www.maquinariaspesadas.org/blog/2357-manual-retroexcavadora-310g-john-deere-motor-tren-mando-sistemas);
descripción de cabina y controles del
[curso de cabina Komatsu WB93R-5 y WB97R-5](https://www.heavyequipments.org/blog/228-komatsu-wb93r5-wb97r5-backhoes-cabin-controls-course).
Las cifras corresponden a esos modelos y ediciones del manual. Los
valores típicos de otras marcas son referenciales; verificar en el
manual del equipo.

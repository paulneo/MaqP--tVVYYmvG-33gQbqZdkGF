---
title: "Recorrido del aceite hidráulico en una excavadora, paso a paso"
published: 2026-11-09
draft: false
featured: false
description: "Del depósito a las bombas, la válvula de control, los actuadores y el retorno: el camino del aceite en una excavadora, con circuito piloto, prioridades y consejos de taller."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "sistema-hidraulico"
  - "excavadora"
  - "circuito-piloto"
  - "valvula-de-control"
  - "bombas-hidraulicas"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistemas-hidraulicos/sistema-hidraulico-excavadora-recorrido-aceite
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué una excavadora tiene dos bombas principales y no una sola?"
    a: "Porque dos bombas de pistones axiales de caudal variable, normalmente montadas en un mismo cuerpo y accionadas por el mismo eje, permiten repartir los movimientos en dos circuitos independientes. Si solo se mueve la pluma, la válvula de control puede sumar el caudal de ambas (confluencia) para ir más rápido. Si se combinan giro y balancín, cada bomba alimenta un lado y los movimientos no se estorban. Además, con dos circuitos la potencia del motor diésel se reparte con más finura: el regulador de potencia limita la suma de ambas bombas para que el motor no se ahogue."
  - q: "¿Qué hace el circuito piloto y por qué trabaja a baja presión?"
    a: "El circuito piloto (o servo) usa una bomba pequeña, normalmente de engranajes, que entrega típicamente 30-45 bar. Esa presión baja viaja por palancas, válvulas solenoides y mangueras finas hasta los extremos de los carretes de la válvula de control y los desplaza proporcionalmente al movimiento de la palanca. Se usa baja presión porque el operador mueve el mando con poco esfuerzo, se pueden usar mangueras livianas y la regulación es suave. Los 300 bar del circuito principal quedan confinados a la válvula, las mangueras gruesas y los actuadores."
  - q: "¿Qué significa control negativo (negative flow control) en las bombas?"
    a: "Es una estrategia para no gastar potencia cuando nadie pide aceite. Con las palancas en neutro, el aceite de las bombas cruza la válvula por el conducto central hasta un restrictor al final del recorrido; ahí se genera una presión de señal que viaja al regulador de la bomba y la lleva a caudal mínimo. Cuando el operador mueve una palanca, el carrete cierra el conducto central, la señal cae y la bomba aumenta caudal. Un restrictor sucio, una señal con fuga o un regulador pegado producen síntomas típicos: movimientos lentos, falta de fuerza o consumo alto de combustible en neutro."
  - q: "¿Por qué el aceite pasa por un enfriador y qué es la válvula de retención en esa línea?"
    a: "Toda pérdida de presión y toda fuga interna se convierten en calor, y el aceite de retorno es el lugar más cómodo para extraerlo. El enfriador (de aire, tipo radiador) baja la temperatura hacia un rango de trabajo típico de 50-80 °C. Delante del enfriador suele haber una válvula de retención o de alivio de pocos bar para proteger el núcleo contra picos de caudal, y un bypass que deja pasar el aceite si el enfriador está tapado o el aceite está muy frío y espeso. En obras con polvo o a gran altitud, mantener limpio el radiador de aceite es una de las tareas más rentables."
  - q: "¿A qué presión se debe medir el sistema y cuándo?"
    a: "Las presiones de alivio principal, alivio de sobrecarga y alivio piloto se verifican con el aceite a temperatura de trabajo (típicamente 45-55 °C en la mayoría de procedimientos de fabricante), con manómetros calibrados de rango adecuado, en los puertos de prueba de la bomba y de la válvula. Medir con aceite frío da lecturas engañosas porque cambian la viscosidad y la fuga interna. Siempre debe seguirse el procedimiento y los valores del manual de servicio del modelo exacto: los rangos varían entre marcas y entre versiones de una misma máquina."
sources:
  - title: "Manual de sistemas hidráulicos para excavadoras JS330 (JCB) — maquinariaspesadas.org"
    url: "https://www.maquinariaspesadas.org/blog/192-manual-sistemas-hidraulicos-excavadoras-js330-jcb"
  - title: "Bosch Rexroth — Mobile Hydraulics: Fundamentals and Components"
    url: "https://www.boschrexroth.com/"
  - title: "Parker Hannifin — Mobile Hydraulic Technology"
    url: "https://www.parker.com/"
  - title: "ISO 1219-1 — Fluid power systems and components: Graphical symbols and circuit diagrams"
    url: "https://www.iso.org/standard/81981.html"
related:
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - valvulas-hidraulicas-tipos-funcionamiento
  - circuitos-hidraulicos-abiertos-cerrados-diferencias
---

Cuando una excavadora "no tiene fuerza" o "está lenta", el diagnóstico
empieza por una pregunta simple: **¿en qué punto del recorrido se está
perdiendo el aceite, la presión o el caudal?** Para responderla hay que
conocer el camino completo, de punta a punta.

En este artículo seguimos al aceite desde el depósito hasta los
actuadores y de vuelta, incluyendo el circuito piloto que ordena todo.
Tomamos como ejemplo de trabajo una excavadora de 30 toneladas
(JCB JS330, según su manual de servicio), pero la lógica es la misma
en las Caterpillar, Komatsu, Hitachi, Volvo o Hyundai que se ven en
minería y construcción en Perú, Chile, México o Colombia.

## Visión general del circuito

La excavadora es un **circuito abierto**: el aceite sale del depósito,
trabaja y regresa al depósito (hay una explicación detallada en
[circuitos hidráulicos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/)).
Dos líneas conviven: el circuito principal de potencia y el circuito
piloto de mando.

<figure class="diagram">
<svg viewBox="0 0 800 380" role="img" aria-labelledby="she-title" aria-describedby="she-desc" style="width:100%;height:auto;font-family:inherit">
<title id="she-title">Recorrido del aceite en una excavadora hidráulica</title>
<desc id="she-desc">Diagrama de bloques: el depósito alimenta las bombas principales, que envían aceite a la válvula de control y a los actuadores; el retorno pasa por enfriador y filtro y vuelve al depósito. Una bomba piloto alimenta los mandos que gobiernan la válvula.</desc>
<defs>
<marker id="she-ma" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#f59e0b"/></marker>
<marker id="she-mc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
</defs>
<g fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5">
<rect x="20" y="150" width="100" height="70" rx="6"/>
<rect x="190" y="150" width="110" height="70" rx="6"/>
<rect x="380" y="150" width="120" height="70" rx="6"/>
<rect x="590" y="80" width="190" height="200" rx="6"/>
<rect x="190" y="30" width="110" height="50" rx="6"/>
<rect x="380" y="30" width="120" height="50" rx="6"/>
<rect x="290" y="300" width="110" height="50" rx="6"/>
<rect x="150" y="300" width="110" height="50" rx="6"/>
</g>
<g fill="currentColor" font-size="14" text-anchor="middle">
<text x="70" y="182">Depósito</text><text x="70" y="201" font-size="12">+ filtro succión</text>
<text x="245" y="182">Bombas</text><text x="245" y="201" font-size="12">principales P1 + P2</text>
<text x="440" y="182">Válvula</text><text x="440" y="201" font-size="12">de control</text>
<text x="685" y="108" font-weight="bold">Actuadores</text>
<text x="685" y="140">Pluma (2 cilindros)</text>
<text x="685" y="166">Balancín (1 cilindro)</text>
<text x="685" y="192">Cazo (1 cilindro)</text>
<text x="685" y="218">Motor de giro</text>
<text x="685" y="244">Motores de traslación</text>
<text x="245" y="52">Bomba piloto</text><text x="245" y="69" font-size="12">30-45 bar</text>
<text x="440" y="52">Palancas y</text><text x="440" y="69" font-size="12">solenoides piloto</text>
<text x="345" y="330">Enfriador</text>
<text x="205" y="330">Filtro retorno</text>
</g>
<g fill="none" stroke="#f59e0b" stroke-width="3">
<path d="M120,185 H188" marker-end="url(#she-ma)"/>
<path d="M300,185 H378" marker-end="url(#she-ma)"/>
<path d="M500,185 H588" marker-end="url(#she-ma)"/>
</g>
<g fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-opacity="0.65">
<path d="M440,220 V325 H402" marker-end="url(#she-ma)"/>
<path d="M685,280 V325 H440"/>
<path d="M290,325 H262" marker-end="url(#she-ma)"/>
<path d="M150,325 H70 V222" marker-end="url(#she-ma)"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4">
<path d="M70,150 V55 H188" marker-end="url(#she-mc)"/>
<path d="M300,55 H378" marker-end="url(#she-mc)"/>
<path d="M440,80 V148" marker-end="url(#she-mc)"/>
</g>
<g font-size="12" fill="currentColor">
<text x="525" y="175">alta presión</text>
<text x="470" y="318" fill-opacity="0.8">retorno</text>
<text x="456" y="115">señal piloto</text>
</g>
</svg>
<figcaption>Trazo ámbar continuo: aceite de potencia (grueso, hacia los actuadores; fino, retorno). Trazo punteado: circuito piloto de mando a baja presión.</figcaption>
</figure>

## Etapa 1: depósito y succión

El recorrido empieza en el **depósito hidráulico**, que en una
excavadora de 30 t típicamente almacena entre 150 y 300 litros. No es
un simple tanque: separa el aire, deja decantar partículas y disipa
parte del calor (hay más detalle en
[filtros y depósitos del sistema hidráulico](/posts/filtros-depositos-sistema-hidraulico/)).

Antes de llegar a la bomba, el aceite atraviesa una **malla o
prefiltro de succión** de malla gruesa. Su único trabajo es frenar
objetos grandes. Un prefiltro tapado es una de las causas clásicas de
**cavitación**: la bomba "chupa" aire y el ruido cambia a un
silbido o traqueteo metálico.

Datos prácticos:

- La succión debe llegar con **menos de 0,2-0,3 bar de depresión**: por
  eso el depósito suele estar por encima o al mismo nivel que las bombas.
- Muchos depósitos se presurizan ligeramente con el respiradero (unas
  décimas de bar) para ayudar al llenado de las bombas.
- A gran altitud (minas sobre 3.500 m en Perú, Chile o Bolivia) hay
  menos presión atmosférica disponible para llenar la bomba, por lo que
  la cavitación aparece con un prefiltro menos sucio que a nivel del mar.

## Etapa 2: las bombas principales

El motor diésel acciona, por un acople flexible, una **bomba doble de
pistones axiales de caudal variable**: dos bombas (P1 y P2) en un solo
cuerpo. En el ejemplo de la JS330, cada una entrega del orden de
290 L/min a 2.000 rpm, con presión nominal cercana a 350 bar (valores
del fabricante; en otras máquinas de 20-40 t los rangos típicos son
200-300 L/min por bomba y 300-350 bar).

Lo importante no es la cifra sino el **regulador**. Cada bomba cambia
el ángulo de su plato oscilante para entregar justo el caudal que se
necesita. Dos estrategias trabajan juntas (ver
[bombas hidráulicas](/posts/bombas-hidraulicas-tipos-engranajes-paletas-pistones/)):

| Función | Qué hace | Por qué importa |
|---|---|---|
| Control negativo | Con palancas en neutro, el caudal sobrante genera una señal que baja la bomba a mínimo | Ahorra combustible y evita calentar aceite sin trabajo |
| Control de potencia (torque constante) | Limita la suma de P1 + P2 × presión a lo que el motor diésel puede entregar | Evita que el motor se ahogue al excavar con carga |
| Control electrónico (ECU) | Ajusta consumo según modo de trabajo (eco, normal, potencia) | Menor consumo y respuesta adaptada a la tarea |

## Etapa 3: el circuito piloto

Aquí está el aspecto que más confunde a quien llega de la hidráulica
industrial. Las palancas del operador **no abren ni cierran el aceite
principal**. Controlan un circuito paralelo de baja presión que
desplaza los carretes de la válvula.

Una **bomba piloto de engranajes** (en el ejemplo, 15 cm³/rev, unos
44 bar) alimenta:

1. Un **filtro piloto** propio, mucho más fino que el principal porque
   las válvulas piloto tienen holguras muy pequeñas.
2. Las **palancas de mando** (joysticks), que son válvulas reductoras
   de presión: cuanto más se inclina la palanca, más presión piloto se
   envía al extremo del carrete.
3. Un bloque de **válvulas solenoides** que, por orden del controlador,
   activan funciones: bloqueo de giro, freno de giro, velocidad de
   traslación, caudal máximo, modo martillo, aislador de seguridad.

El resultado es una relación casi proporcional: **desplazamiento del
carrete ≈ presión piloto**. Por eso los movimientos finos son posibles
y por eso una palanca desgastada o una manguera piloto con fuga se
sienten como "mando impreciso" o "movimiento que no responde".

El **aislador** (o bloqueo hidráulico de cabina) es una de las
seguridades más importantes: al levantar la palanca de bloqueo se
corta el piloto y la máquina queda inmovilizada aunque se toquen los
mandos.

## Etapa 4: la válvula de control principal

Es el "centro de distribución". Un bloque de acero con varios
**carretes** (uno por función: pluma, balancín, cazo, giro, cada oruga,
opcional) alimentados por las dos bombas. Los conceptos básicos de
carretes y centros están en
[válvulas hidráulicas](/posts/valvulas-hidraulicas-tipos-funcionamiento/).

Qué ocurre en su interior:

- **Centro abierto con control negativo**: en neutro el aceite recorre
  todos los carretes por un conducto central y vuelve al depósito a
  través de un restrictor y una válvula de alivio de unos 40 bar (en el
  ejemplo). Esa contrapresión es la señal que baja las bombas.
- **Al mover un carrete** se cierra el conducto central para esa
  función y el aceite se dirige a una de las dos cámaras del actuador;
  la cámara opuesta se conecta al retorno.
- **Alivio principal**: limita la presión máxima del circuito. En
  excavadoras de esta clase suele estar tarado entre 300 y 350 bar; en
  el ejemplo, unos 320 bar, con una subida momentánea (power boost) a
  poco más de 345 bar.
- **Alivios de sobrecarga (anticavitación)** en los puertos de cada
  actuador: protegen contra picos por inercia o golpes y reponen aceite
  si se genera vacío.
- **Válvulas de retención de carga** en pluma y balancín: impiden que
  el brazo caiga si se rompe una manguera.

### Prioridades y confluencia

Dos bombas deben repartirse entre varios actuadores que a veces
piden a la vez. La válvula resuelve el conflicto con lógicas fijas:

| Situación | Lo que hace la válvula | Resultado para el operador |
|---|---|---|
| Traslación recta mientras se mueve el equipo | Dedica una bomba a cada oruga (carrete de traslación recta) | La máquina camina derecho aunque se use el brazo |
| Giro + balancín adentro | Da prioridad al giro o al balancín según el diseño, con un carrete de prioridad | Se ajusta la sensación de "quién gana" en excavación |
| Pluma arriba | Suma el caudal de P1 y P2 (confluencia) | Levanta más rápido y con menos tiempo de ciclo |
| Pluma arriba + giro | Una señal solenoide restringe el caudal al giro para favorecer la pluma | Mejor carga de camión |
| Balancín adentro | Confluencia de ambas bombas | Mayor velocidad de penetración |

## Etapa 5: los actuadores

El aceite llega a seis tipos de actuadores. La fuerza depende de la
presión por el área, y la velocidad del caudal sobre el área (ver
[cilindros hidráulicos](/posts/cilindros-hidraulicos-simple-doble-efecto/)).

| Actuador | Qué hace | Detalle típico |
|---|---|---|
| Cilindros de pluma (×2) | Levantan y bajan el conjunto | En la JS330: pistón 140 mm, vástago 100 mm |
| Cilindro de balancín (×1) | Cierra o abre el brazo | Pistón 160 mm: es el que más fuerza de excavación aporta |
| Cilindro de cazo (×1) | Abre o cierra el cucharón | Pistón 140 mm; suele ir con bieletas (relación de palancas) |
| Motor de giro | Hace girar la torre | Pistones de caudal fijo con reductor planetario y freno de disco negativo |
| Motores de traslación (×2) | Mueven las orugas | Dos velocidades automáticas (cilindrada variable) |
| Cilindros auxiliares | Hoja, pata o accesorios | Según modelo |

Tres detalles que conviene tener presentes:

- **Giro**: el motor tiene válvulas de alivio propias en cada puerto
  que amortiguan arranques y frenadas bruscas de la torre. El freno de
  estacionamiento del giro es de resorte y se libera con presión
  (típicamente 20-40 bar), es decir, **cae por defecto** si falta
  aceite piloto.
- **Traslación**: el aceite llega a las orugas a través de un
  **acoplamiento giratorio** (swivel) en el centro de la torre. Es un
  punto de fuga clásico en máquinas con muchas horas y es lo que
  conecta chasis y estructura superior sin torcer las mangueras.
- **Cilindros**: al extender se usa toda el área del pistón (más fuerza,
  más lento); al retraer solo el área anular (menos fuerza, más rápido).
  Esa asimetría condiciona qué movimientos usan cuál cámara.

### Regeneración

Muchas excavadoras reutilizan el aceite que sale del lado de retorno
del cilindro para sumarlo al caudal de entrada y así acelerar el
movimiento. Es la **regeneración**: típica en el descenso de pluma
o en el balancín cuando se trabaja en vacío. Se activa por una válvula
interna o un carrete especial y, según el fabricante, puede
desactivarse al detectar presión alta, para no robar fuerza durante
la excavación. El efecto práctico: ciclos más rápidos con menos caudal
de bomba y menos calentamiento.

## Etapa 6: retorno, enfriador y filtros

El aceite que sale por la cámara de retorno de cada actuador vuelve a
la válvula de control y de ahí sigue una ruta común:

1. **Válvula de retención o de alivio de poco bar** antes del
   enfriador, para proteger el núcleo contra picos (en el ejemplo, de
   unos 4 bar).
2. **Enfriador de aceite** (radiador aire-aceite), con un bypass
   térmico para que el aceite frío y espeso no se fuerce por tubos
   finos.
3. **Filtro de retorno**, que atrapa las partículas generadas por el
   desgaste del propio sistema, con válvula de bypass si se tapa.
4. **Depósito**, con deflectores que calman el flujo antes de la
   succión.

La temperatura de trabajo ideal está en el rango de **50-80 °C**. Por
encima de unos 85-90 °C, el aceite pierde viscosidad, se oxida más
rápido y acorta la vida de sellos y bombas (ver
[fluidos hidráulicos](/posts/fluidos-hidraulicos-propiedades-tipos-aceites/)).

## Contexto LATAM: lo que cambia en la práctica

- **Polvo y minería a cielo abierto**: el radiador de aceite se
  obstruye con polvo fino mezclado con humedad. Limpiarlo con aire cada
  turno evita muchos casos de sobrecalentamiento.
- **Altitud (3.000-4.500 m)**: el motor diésel entrega menos potencia y
  el control de potencia de las bombas lo compensa bajando caudal. La
  máquina se siente "más lenta" sin que haya falla.
- **Frío en la cordillera y calor en trópico**: en arranques con
  menos de 0 °C hay que calentar con carga ligera hasta ver el aceite
  sobre 30-40 °C. En trópico, vigilar los 90 °C.
- **Repuestos**: las bombas de pistones y los reguladores son las
  piezas con más demora de importación; conviene tener claros los
  códigos y una política de reacondicionamiento (ver
  [inspección de motores de pistones](/posts/inspeccion-motores-hidraulicos-pistones-desgaste/)).

## Consejos de taller para seguir el recorrido

1. **Empezar por lo simple**: nivel y estado del aceite, filtros,
   respiradero y radiador, antes de tocar un manómetro.
2. **Medir en puntos conocidos**: presión de alivio principal en los
   puertos de prueba de la bomba o de la válvula; presión piloto en el
   puerto del filtro piloto; señal de control negativo en el puerto de
   la bomba. Siempre con aceite caliente.
3. **Aislar por zonas**: si solo falla una función, sospechar de su
   carrete, su alivio o su cilindro. Si fallan todas, sospechar de la
   bomba, el piloto o el alivio principal.
4. **Comparar temperatura**: un tramo de manguera o un componente
   notablemente más caliente que el resto indica fuga interna en ese
   punto.
5. **Revisar el piloto antes de condenar la bomba**: muchos "no
   levanta" resultan ser un filtro piloto tapado o un solenoide pegado.
6. **Leer el esquema**: aprender a interpretar los símbolos acelera el
   diagnóstico (ver
   [símbolos hidráulicos ISO 1219](/posts/simbolos-hidraulicos-iso-1219-como-leer/)).

Para un diagnóstico más estructurado, está la guía de
[fallas comunes y diagnóstico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/).
Y si hay que cambiar o revisar líneas, conviene consultar
[mangueras y conexiones hidráulicas](/posts/mangueras-conexiones-hidraulicas-tipos-seleccion/).
Para estimar qué caudal necesita realmente una obra, la calculadora de
[rendimiento de excavadora](/herramientas/rendimiento-de-excavadora/)
ayuda a dimensionar el trabajo.

## En resumen

- El aceite sigue una ruta fija: **depósito, succión, bombas
  principales, válvula de control, actuadores, retorno, enfriador,
  filtro, depósito**.
- El **circuito piloto**, de baja presión, es el que traduce el
  movimiento de las palancas en desplazamiento de los carretes.
- Las **bombas de caudal variable** con control negativo y de
  potencia entregan solo lo necesario, y la **válvula de control**
  reparte, da prioridades y suma caudales.
- Entender el recorrido permite **ubicar la falla por zonas** en lugar
  de cambiar piezas por intuición.

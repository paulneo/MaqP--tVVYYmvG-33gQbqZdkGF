---
title: "Sistema de carga: cómo funciona el alternador y cómo inspeccionarlo"
published: 2026-11-21
draft: false
featured: false
description: "Cómo trabajan el alternador, el rectificador y el regulador de tensión, qué indica la luz de carga y cómo medir la tensión regulada y la corriente de salida en el vehículo."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "sistema-de-carga"
  - "alternador"
  - "regulador-de-tension"
  - "bateria"
  - "diagnostico-electrico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistema-electrico/sistema-de-carga-alternador-funcionamiento-inspeccion
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Por qué la luz de carga se enciende al girar la llave si el motor está parado?"
    a: "Porque el regulador la enciende cuando detecta que el alternador no genera tensión. Con el contacto en ON y el motor detenido, la bobina del rotor recibe una pequeña corriente de la batería para dejar listo el campo magnético, pero el rotor no gira y no hay salida. Al arrancar, la tensión del alternador sube, el regulador lo detecta y apaga la luz. Si la luz sigue encendida con el motor en marcha, hay una falla en el sistema de carga."
  - q: "¿Qué tensión debe medirse en la batería con el motor en marcha?"
    a: "Depende del vehículo y de la temperatura. En el curso técnico que sirvió de base, un alternador con regulador de circuito integrado debía entregar entre 13,5 V y 15,1 V a 2.000 rpm y con carga eléctrica mínima. Es un ejemplo de un modelo: use siempre el rango del manual de servicio de su vehículo."
  - q: "¿Un alternador defectuoso puede dañarse más si se desconecta la batería con el motor en marcha?"
    a: "Sí, es una práctica que debe evitarse. Sin la batería que absorbe las variaciones, la tensión en el terminal de salida puede subir de forma anormal; el propio manual fuente describe que el regulador intenta limitarla a unos 20 V cuando pierde la conexión del terminal B, justamente para proteger al alternador y al regulador. Para comprobar si el alternador genera, mida la tensión con instrumentos, no desconectando cables."
  - q: "¿Una correa floja puede descargar la batería?"
    a: "Sí. Si la correa resbala, el alternador gira más lento de lo debido y genera menos electricidad; si el consumo supera lo que se genera, la batería cubre la diferencia y se va agotando. Por eso la revisión de la correa y de su tensión es el primer paso de cualquier diagnóstico de carga."
  - q: "¿Cuándo conviene cambiar el alternador y cuándo solo el regulador?"
    a: "En la mayoría de los vehículos actuales el regulador de circuito integrado va montado dentro del alternador, junto con el portaescobillas, y puede reemplazarse por separado en algunos modelos. La decisión depende de lo que muestre la prueba: tensión por encima del límite apunta al regulador; tensión o corriente por debajo del límite apunta a otros componentes (rotor, estátor, rectificador, escobillas o correa)."
sources:
  - title: "Manual: sistema de carga, batería y alternador, funcionamiento e inspección — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/4297-manual-sistema-carga-bateria-alternador-funcionamiento-inspeccion"
related:
  - electricidad-fundamentos-componentes
  - motor-de-arranque-componetes-y-construcciones
  - comprobador-de-mano-herramienta-clave-para-el-diagnostico-automotriz
---

Un vehículo consume electricidad con el motor parado y con el motor en
marcha: luces, inyección, ventilador, bomba de combustible, calefacción,
radio. La batería la entrega mientras el motor está detenido y durante el
arranque, pero no puede abastecer todo eso durante mucho tiempo. De la
generación se encarga el **sistema de carga**, cuyo componente principal es
el alternador. En esta guía vemos cómo trabaja cada parte, cómo interpreta
el regulador lo que ocurre en el circuito y cómo se comprueba el sistema
en el propio vehículo.

Los valores numéricos son **referenciales**: provienen de un curso técnico
de servicio y corresponden a un modelo concreto. El manual de servicio de su
vehículo siempre prevalece.

## Qué componentes forman el sistema de carga

El sistema reúne cinco elementos que trabajan juntos:

- **Alternador**: genera electricidad mientras el motor gira, en una
  cantidad aproximadamente igual a la que consumen los dispositivos
  eléctricos más la que necesita la batería para mantenerse cargada.
- **Regulador de tensión**: mantiene la tensión generada en un valor
  constante aunque cambie el régimen del motor o el consumo. En los
  vehículos actuales está integrado en el alternador.
- **Batería**: alimenta el vehículo con el motor parado, aporta la corriente
  de arranque y cubre los picos de consumo; cuando el motor funciona recibe
  carga del alternador.
- **Luz de aviso de carga**: informa al conductor cuando el sistema no
  genera o cuando el regulador detecta una anomalía.
- **Interruptor de encendido**: al pasarlo a ON energiza el circuito de
  campo y el regulador; al arrancar el motor, el alternador empieza a
  generar.

### Qué ocurre con la llave en cada posición

Con la llave en LOCK o en ACC, el alternador no participa: la batería
alimenta solo los accesorios que estén habilitados. Con la llave en ON y el
motor parado, circula una corriente desde la batería hacia el alternador,
y esto sorprende a quien ve el sistema por primera vez: **el rotor del
alternador es un electroimán, no un imán permanente**. Necesita recibir
corriente para crear el campo magnético, y esa corriente inicial la entrega
la batería. Con el motor ya en marcha, el alternador se autoalimenta y pasa
a cargar la batería y a abastecer al resto del vehículo.

## Cómo genera el alternador: tres funciones en una pieza

El alternador cumple tres funciones: **generar** corriente alterna,
**rectificarla** a corriente continua y **regular** la tensión.

<figure class="diagram">
<svg viewBox="0 0 760 430" role="img" aria-label="Esquema de bloques del sistema de carga: el rotor, alimentado por el regulador, crea un campo que induce corriente alterna trifásica en el estátor; el rectificador la convierte en corriente continua hacia la batería; el regulador lee la tensión de la batería por el terminal S, recibe positivo del interruptor de encendido por IG y gobierna la luz de aviso por L" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker>
</defs>
<rect x="40" y="30" width="490" height="310" rx="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 5" opacity="0.6"/>
<text x="56" y="54" font-size="15" font-weight="600" fill="currentColor">Alternador</text>
<g stroke="currentColor" stroke-width="2" fill="rgba(100,116,139,0.15)">
<rect x="70" y="80" width="140" height="70" rx="6"/>
<rect x="270" y="80" width="140" height="70" rx="6"/>
<rect x="70" y="230" width="140" height="60" rx="6"/>
<rect x="270" y="230" width="140" height="60" rx="6"/>
<rect x="600" y="80" width="120" height="70" rx="6" fill="rgba(217,119,6,0.18)"/>
<rect x="600" y="300" width="120" height="44" rx="6"/>
<rect x="50" y="372" width="170" height="40" rx="6" fill="rgba(217,119,6,0.18)"/>
</g>
<g font-size="14" fill="currentColor" text-anchor="middle">
<text x="140" y="110">Estátor</text>
<text x="140" y="130" font-size="12">3 bobinas en Y</text>
<text x="340" y="110">Rectificador</text>
<text x="340" y="130" font-size="12">6 diodos</text>
<text x="140" y="256">Rotor</text>
<text x="140" y="274" font-size="12">bobina de campo</text>
<text x="340" y="256">Regulador</text>
<text x="340" y="274" font-size="12">de IC</text>
<text x="660" y="110">Batería</text>
<text x="660" y="130" font-size="12">y consumidores</text>
<text x="660" y="318" font-size="13">Interruptor</text><text x="660" y="335" font-size="13">de encendido</text>
<text x="135" y="397">Luz de aviso de carga</text>
</g>
<g stroke="currentColor" stroke-width="2" fill="none" marker-end="url(#ah)">
<path d="M210 115 H268"/>
<path d="M410 115 H598"/>
<path d="M268 260 H212"/>
<path d="M140 228 V152" stroke-dasharray="6 4"/>
<path d="M660 152 V260 H412"/>
<path d="M600 322 H340 V292"/>
<path d="M300 292 V392 H222"/>
</g>
<g font-size="12" fill="currentColor">
<text x="238" y="106" text-anchor="middle">CA</text>
<text x="500" y="106" text-anchor="middle">B (CC)</text>
<text x="240" y="282" text-anchor="middle">campo</text>
<text x="150" y="198">campo magnético giratorio</text>
<text x="540" y="252">S (sensor de tensión)</text>
<text x="470" y="316">IG</text>
<text x="312" y="350">L</text>
</g>
</svg>
<figcaption>Esquema de bloques del sistema de carga con regulador de tipo sensor de batería. Ilustración propia, simplificada: los nombres de terminales (B, S, IG, L) siguen la convención del curso fuente y pueden variar según el fabricante.</figcaption>
</figure>

### Generación: un electroimán que gira dentro de tres bobinas

La correa en V hace girar la polea, y la polea al rotor. El rotor, con
corriente en su bobina, es un electroimán; al girar dentro del estátor,
induce en las bobinas de este una tensión alterna. Una sola bobina
entregaría una onda que se anula dos veces por vuelta, así que el alternador
usa **tres bobinas separadas 120° entre sí**. Se obtienen tres ondas
desfasadas, lo que se llama corriente alterna trifásica, y es lo que usan
todos los alternadores de automóvil actuales. Las tres bobinas se conectan
en estrella (conexión en Y) y el punto donde se unen los tres extremos es el
**punto neutro**.

### Rectificación: seis diodos

La instalación del vehículo trabaja con corriente continua, así que la
alterna del estátor debe convertirse. El **rectificador** hace una
rectificación de onda completa con seis diodos: en cada instante, la
corriente sale de la bobina que está en positivo, atraviesa uno de los
diodos del lado positivo, alimenta la carga y regresa por un diodo del lado
negativo a la bobina que está en negativo. Como las tres fases se suceden,
la salida es una tensión continua con una pequeña ondulación.

Algunos alternadores añaden **dos diodos más conectados al punto neutro**.
El curso fuente explica que la tensión del punto neutro es en promedio la
mitad de la tensión de salida y que, a partir de unos 2.000 a 3.000 rpm del
alternador, su componente alterna supera la de salida; recoger esa energía
con los diodos adicionales aumenta la corriente disponible a régimen alto
(la fuente cita un 10 a 15 % cerca de las 5.000 rpm del alternador, en ese
modelo). Además, la tensión del punto neutro se usa en algunos diseños como
señal para el relé de la luz de aviso.

### Regulación: se actúa sobre el campo, no sobre la velocidad

Para mantener constante la tensión hay dos formas posibles en teoría:
cambiar la velocidad del imán o cambiar su fuerza magnética. La velocidad
no se puede controlar, porque el rotor gira con el motor. Lo que sí es
controlable es la **corriente de campo** que circula por la bobina del
rotor. El regulador la aumenta cuando la tensión baja y la reduce cuando
sube, conectando y desconectando un transistor de potencia (el Tr1 de la
figura) muchas veces por segundo.

## Construcción interna

| Pieza | Qué hace | Qué suele fallar |
|---|---|---|
| Polea | Recibe el movimiento de la correa; algunas incorporan embrague unidireccional que absorbe las variaciones de régimen del motor y alivia la correa | Rodamiento ruidoso, embrague unidireccional que patina, correa desalineada |
| Rotor | Electroimán con bobina de campo y núcleo de polos; lleva ventiladores a ambos lados | Bobina abierta o en cortocircuito, anillos deslizantes desgastados |
| Escobillas y anillos | Llevan la corriente de campo a la bobina del rotor; el grafito metálico reduce la resistencia de contacto | Escobillas gastadas, mal contacto, anillos sucios |
| Estátor | Núcleo con las tres bobinas; es la pieza que más calor genera y va cableada con aislamiento resistente | Bobina quemada, fase abierta o a masa |
| Rectificador | Seis diodos (ocho con los de punto neutro) sobre una aleta que disipa calor | Diodo abierto o en cortocircuito por sobrecalentamiento |
| Regulador de IC | Controla la corriente de campo y la luz de aviso | Tensión fuera de rango, luz que no apaga |
| Bastidores y cojinetes | Soportan el rotor y llevan pasos de aire para refrigerar | Cojinetes con ruido, fijaciones flojas |

El diodo es un semiconductor y no tolera bien el calor, por eso el
rectificador se monta sobre una aleta de la mayor superficie posible y los
bastidores tienen aberturas para el aire que mueven los ventiladores del
rotor.

## El regulador y la luz de aviso: cómo interpretan el circuito

El regulador vigila la tensión por uno de dos caminos. El **tipo sensor de
batería** lee la tensión en el terminal S, conectado a la batería, y la
mantiene en el valor especificado. El **tipo sensor de alternador** no lleva
terminal S: mide directamente la tensión en el terminal de salida B. El
funcionamiento básico es el mismo.

La secuencia normal en un regulador de tipo sensor de batería es esta:

1. **Contacto en ON, motor parado.** El regulador recibe positivo por el
   terminal IG y activa el transistor de campo de forma intermitente para
   consumir lo mínimo posible de la batería. Como en el terminal P (salida de
   una fase) no hay tensión, detecta que el alternador no genera y enciende
   la luz de aviso.
2. **Motor en marcha, tensión por debajo de la regulada.** El regulador deja
   el transistor de campo conectado, la tensión sube, aparece tensión en P y
   el regulador apaga la luz. Cuando la tensión en B supera la de la batería,
   la corriente fluye hacia ella y hacia los consumidores.
3. **Tensión por encima de la regulada.** El regulador desconecta el
   transistor; la corriente de campo decae a través de un diodo que absorbe
   la tensión inversa de la bobina, y la tensión baja. Al caer por debajo del
   valor regulado, el transistor se conecta de nuevo. El ciclo se repite
   continuamente.

### Qué hace el regulador ante una anomalía

El curso fuente describe varios casos que ayudan a entender qué significa
una luz encendida. El regulador enciende la luz de aviso cuando detecta:

- circuito abierto o cortocircuito en la bobina del rotor (en el
  cortocircuito además corta el transistor de campo para protegerse);
- desconexión del terminal S: la luz se enciende y el regulador pasa a
  regular con la tensión del terminal B, hacia unos 14 V, para evitar una
  tensión anormalmente alta;
- desconexión del terminal B: la batería no se carga y su tensión baja; el
  regulador intenta compensar aumentando el campo, pero limita la tensión en
  B a un máximo de 20 V para proteger alternador y regulador;
- cortocircuito entre el terminal F (campo) y masa: la corriente de campo
  no puede regularse y aparece sobretensión.

### La tensión regulada depende de la temperatura

Por diseño, la tensión de salida baja cuando sube la temperatura del
regulador y sube cuando hace frío. Es intencional: la batería acepta carga
de forma distinta según la temperatura, y el sistema se ajusta a ella. De
ahí que no deba esperarse exactamente el mismo valor en un día de verano
que en una mañana fría.

Otras dos características que conviene tener presentes:

- La salida del alternador **no crece sin límite**: a partir de cierto
  régimen la corriente máxima es prácticamente constante, y si la carga
  eléctrica la supera, la tensión cae.
- La corriente máxima disminuye al calentarse el alternador, porque las
  resistencias de los componentes cambian con la temperatura.

En ralentí el alternador gira poco y entrega poca corriente. Con muchos
consumidores encendidos (calefacción, faros, desempañador) y el motor al
ralentí durante mucho tiempo, la batería puede descargarse aunque el sistema
esté sano.

## Variantes que conviene conocer

- **Alternador de tipo SC (conductor de segmento).** Reemplaza el bobinado
  convencional por conductores de segmento soldados en el estátor, con una
  resistencia eléctrica menor, más compacto y de mayor potencia y
  eficiencia. Usa dos juegos de bobinas trifásicas desfasados 30°, lo que
  reduce el ruido magnético, y un regulador con el transistor de campo en el
  lado positivo (lado alto).
- **Regulador de contactos (de puntos).** Más grande, trabaja con
  alternadores convencionales; conmuta mecánicamente contactos para regular
  la tensión y para controlar el relé de la luz de aviso. Es propio de
  vehículos más antiguos.
- **Regulador con terminal M.** Informa a la unidad de control del motor
  del estado de generación; en vehículos con calefactor eléctrico auxiliar,
  la unidad puede subir el ralentí o limitar el calefactor para que el
  consumo no supere lo que el alternador puede entregar.
- **Alternador con bomba de vacío.** La bomba que alimenta el servofreno va
  acoplada al eje del alternador, a uno u otro lado de la polea.

## Inspección en el vehículo

Antes de medir, revise lo básico: **estado y tensión de la correa**, limpieza
y apriete de los bornes de la batería, conexiones del terminal B y de masa,
y que la batería tenga carga suficiente. Una correa suelta o una batería
muy descargada falsean las pruebas. Mida con un voltímetro y un amperímetro
adecuados, o con un comprobador de sistemas de carga.

### Prueba sin carga: tensión regulada

Sirve para comprobar si la tensión generada se mantiene constante aunque
cambie la velocidad.

1. Con la carga eléctrica reducida al mínimo (el curso indica que la
   corriente de salida debe ser de **10 A como máximo**), acelere el motor a
   unas **2.000 rpm**.
2. Mida la tensión en el terminal B del alternador o en los bornes de la
   batería.
3. Compare con el rango especificado. En el curso fuente, para un
   alternador con regulador de IC, es de **13,5 V a 15,1 V** a 2.000 rpm.

Por qué el límite de 10 A: si la corriente de salida es mayor, la tensión
puede quedar dentro de rango aunque el regulador esté fallando y la prueba
no sirve para juzgarlo.

Cómo interpretar el resultado: si la tensión **supera el límite máximo**, el
problema está en el regulador. Si queda **por debajo del límite mínimo**, la
causa es otro componente del alternador, no el regulador.

### Prueba con carga: corriente de salida

Comprueba que el alternador puede entregar la corriente que exige la carga.

1. Con el motor a unas 2.000 rpm, conecte un amperímetro en el terminal B y
   aplique la mayor carga eléctrica posible: luces, ventilador al máximo,
   desempañador, o un comprobador de carga.
2. Lea la corriente de salida y compárela con la especificada para ese
   alternador.

Lo importante es que la carga sea suficiente. El curso fuente señala que si
la salida es de 30 A o menos hay que aumentar la carga y repetir, porque con
poca carga un alternador sano también mostraría poca corriente. Si con carga
suficiente la corriente queda por debajo de lo especificado, el fallo se
sitúa en la función de generar o de rectificar. Y un valor alto no
garantiza que el alternador entregue su potencia nominal máxima: eso se
verifica aumentando la carga hasta que la tensión empieza a caer.

Una precisión sobre esta parte: el texto fuente, que viene de un curso
traducido, es confuso en la redacción del criterio de los 30 A. La idea
práctica es la que acabamos de describir: no concluir nada con la carga
baja.

### Valores de referencia del ejemplo

| Prueba | Condición | Valor en el curso fuente |
|---|---|---|
| Sin carga | 2.000 rpm, salida de 10 A o menos | 13,5 a 15,1 V (regulador de IC) |
| Con carga | 2.000 rpm, máxima carga posible | Corriente según la especificación del alternador |
| Protección en B abierto | Terminal B desconectado | Tensión limitada a unos 20 V |
| Regulador con terminal B abierto | Tensión en S de 11 V a 13 V | El regulador la interpreta como batería sin carga y enciende la luz |

## Síntomas y causas probables

| Síntoma | Causas probables | Qué revisar |
|---|---|---|
| Luz de carga encendida con el motor en marcha | Alternador sin generar, correa suelta, regulador, terminal B o S desconectado | Correa, conexiones, tensión en la batería |
| Luz que no se enciende al poner el contacto | Lámpara fundida, circuito de aviso interrumpido, regulador | Circuito de L, lámpara del tablero |
| Batería que se descarga | Correa floja, salida insuficiente, consumo excesivo, batería agotada | Prueba con carga, consumo en reposo |
| Tensión alta (por encima del límite) | Regulador defectuoso, cortocircuito F-masa, mala conexión del sensor | Tensión sin carga, terminal S |
| Tensión baja con carga | Alternador débil, diodos defectuosos, escobillas gastadas | Corriente de salida, rectificador, escobillas |
| Ruido de rodamiento o chirrido | Cojinetes, correa, polea con embrague unidireccional | Giro libre, estado de correa y polea |
| Luces que varían con el régimen | Regulador, escobillas, conexión de masa | Tensión a distintas rpm, masas |

## Errores comunes

- **Cambiar el alternador sin revisar la correa ni los bornes.** Una correa
  que resbala o un borne sulfatado produce los mismos síntomas.
- **Diagnosticar con la batería muy descargada.** Cárguela primero; de otro
  modo el alternador quedará trabajando al máximo y las lecturas no
  representan el estado normal.
- **Medir con mucha carga eléctrica en la prueba sin carga.** Para juzgar al
  regulador, la salida debe ser pequeña.
- **Desconectar la batería con el motor en marcha** para "ver si genera".
  Puede producir picos de tensión y dañar al regulador y a otros
  componentes electrónicos.
- **Esperar un valor fijo de tensión.** La tensión regulada varía con la
  temperatura y con el modelo; compare con el manual de su vehículo.
- **Olvidar el resto del circuito.** Los síntomas de carga también los
  causan masas flojas, fusibles y cables de potencia con caída de tensión.

## Para seguir leyendo

Si necesita repasar los conceptos de tensión, corriente y resistencia, el
[manual básico de electricidad](/posts/electricidad-fundamentos-componentes/)
es un buen punto de partida. El otro gran consumidor de la batería es el
arranque: vea
[componentes y construcción del motor de arranque](/posts/motor-de-arranque-componetes-y-construcciones/)
y los
[tipos de motores de arranque](/posts/funcionamiento-y-tipos-de-motores-de-arranque/).
Para hacer las mediciones con método, lea sobre el
[comprobador de mano](/posts/comprobador-de-mano-herramienta-clave-para-el-diagnostico-automotriz/)
y las
[pruebas con multímetro en inyección electrónica](/posts/pruebas-sensores-inyeccion-electronica-gasolina-multimetro/).

**Fuentes:** curso técnico sobre sistema de carga, batería y alternador
publicado en
[Mecánico Automotriz](https://www.mecanicoautomotriz.org/4297-manual-sistema-carga-bateria-alternador-funcionamiento-inspeccion).
Valores referenciales de un modelo concreto; prevalece el manual de servicio
del vehículo.

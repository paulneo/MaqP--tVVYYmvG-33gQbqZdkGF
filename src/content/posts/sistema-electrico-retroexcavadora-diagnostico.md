---
title: "Sistema eléctrico de la retroexcavadora: diagnóstico con multímetro"
published: 2026-11-12
draft: false
featured: false
description: "Batería, alternador, arranque con seguridad de neutro, relés, fusibles y solenoides de una retroexcavadora, con diagnóstico paso a paso con multímetro y tablas de fallas."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "retroexcavadora"
  - "sistema-electrico"
  - "diagnostico-electrico"
  - "multimetro"
  - "bateria"
  - "alternador"
  - "komatsu"
  - "jcb"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/retroexcavadoras/sistema-electrico-retroexcavadora-diagnostico
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué la retroexcavadora no arranca si la batería tiene carga?"
    a: "Una batería con buen voltaje en reposo no garantiza que llegue corriente al motor de arranque. Las causas más frecuentes son bornes sulfatados o flojos, una masa corroída, un relé de arranque que no cierra, el interruptor o relé de seguridad de neutro que no da permiso (la palanca del inversor o selector no está bien en neutro) y un solenoide de arranque con contactos quemados. El método correcto es medir la caída de voltaje en el cable positivo y en la masa mientras se intenta arrancar, en lugar de cambiar piezas por intuición."
  - q: "¿Qué voltaje debe haber en la batería con el motor funcionando?"
    a: "En un sistema de 12 V, el alternador suele mantener entre 13,8 y 14,8 V con el motor a ritmo medio; en un sistema de 24 V, el doble (aproximadamente 27,6 a 29,6 V). Es un valor referencial; verificar en el manual del equipo. Si con el motor en marcha lee casi lo mismo que con el motor apagado, el alternador no está cargando. Si supera con claridad el rango, el regulador falla y se corre el riesgo de hervir el electrolito y dañar la electrónica."
  - q: "¿Cómo se mide el consumo parásito de corriente?"
    a: "Con todo apagado y la llave retirada, se desconecta el cable negativo y se intercala un multímetro en modo amperímetro (escala de corriente continua, con el fusible de protección del instrumento en buen estado) entre el borne negativo y el cable. Se espera a que los módulos entren en reposo, y se lee. Como referencia general, un consumo menor a unos 50 mA es normal; varios cientos de miliamperios descargan la batería en pocos días. Luego se retiran fusibles de uno en uno hasta que la lectura caiga: ese circuito es el culpable."
  - q: "¿Para qué sirve el interruptor de neutro en el arranque?"
    a: "Es una seguridad que impide arrancar el motor con la transmisión engranada. En retroexcavadoras con transmisión de cambios al volante o powershift, el circuito de arranque pasa por un contacto del selector de marcha o por un relé dedicado (el manual JCB lo lista como 'Neutral start'). Si el contacto está desgastado o desajustado, la máquina no gira el motor de arranque aunque todo lo demás esté bien. Puentearlo para 'arrancar de emergencia' elimina una protección y es peligroso: la máquina puede avanzar al encender."
  - q: "¿Los solenoides de la transmisión pueden fallar de forma intermitente?"
    a: "Sí, y es una de las fallas más difíciles de atrapar. Las causas típicas son un conector con humedad o pines flojos, un cable fatigado por el movimiento, una masa en mal estado o una bobina que cambia su resistencia al calentarse. La máquina pierde la marcha o la tracción de forma aleatoria. La técnica es medir la alimentación y la masa del solenoide en el momento de la falla, mover el arnés mientras se mide y comparar la resistencia de la bobina en frío y en caliente con el valor del manual."
sources:
  - title: "Curso del sistema eléctrico de retroexcavadoras Komatsu (documento WETT001304, Komatsu Utility Europe)"
    url: "https://www.heavyequipments.org/blog/22-course-electric-system-backhoe-loaders-komatsu"
  - title: "Manual JCB 2CX: sistemas, componentes, eléctrico e hidráulico (mantenimiento y sistema eléctrico)"
    url: "https://www.heavyequipments.org/blog/767-manual-jcb-2cx-backhoes-systems-components-electrics-hydraulics"
related:
  - fallas-electricas-maquinaria
  - electricidad-fundamentos-componentes
  - funcionamiento-y-tipos-de-motores-de-arranque
---

Cuando una retroexcavadora no arranca, pierde la tracción o se descarga
cada noche, la mayoría de los mecánicos sospecha primero de la pieza
más cara: el motor de arranque, el alternador o el módulo de control. Y
en una gran parte de los casos el problema real es mucho más barato y
más aburrido: un borne sulfatado, una masa corroída, un relé cansado o
un conector con humedad. La diferencia entre cambiar piezas por
intuición y encontrar la falla a la primera es **entender el circuito y
medir con método**.

Esta guía recorre el sistema eléctrico de una retroexcavadora de punta
a punta: qué hace cada componente, cómo funciona el circuito de
arranque con su seguridad de neutro, qué protegen los fusibles y
relés, y cómo diagnosticar con un multímetro las tres pruebas que
resuelven la mayoría de las fallas: caída de voltaje, consumo parásito
y prueba de carga. Usamos como ejemplos los esquemas de las
retroexcavadoras **Komatsu** (serie WB93R-5 y WB97R-5) y el manual de
la **JCB 2CX**.

## Visión general: una red de 12 V con retorno por masa

La retroexcavadora típica trabaja con un sistema de **12 V** en
corriente continua (algunos equipos grandes o de otros fabricantes usan
24 V; el manual de la máquina lo indica). Todo el sistema se organiza en
tres bloques:

1. **Fuente**: la batería almacena la energía y el alternador la
   repone mientras el motor funciona.
2. **Distribución y protección**: cables de potencia, fusibles de
   enlace en la batería, caja de fusibles y relés.
3. **Cargas y mando**: motor de arranque, luces, instrumentos,
   solenoides hidráulicos y de transmisión, sensores, aire acondicionado.

El manual de la JCB 2CX indica que la máquina es de **polaridad
negativa a masa**: el borne negativo de la batería va unido al chasis y
al bloque motor, y estas piezas metálicas hacen de cable de retorno
para casi todos los circuitos. Es una idea clave para el diagnóstico:
**cada circuito tiene dos mitades**, el positivo que lleva la energía y
el retorno por masa. Una falla en cualquiera de las dos se ve igual
desde fuera.

## Batería: la fuente que más fallas origina

La batería suministra la gran corriente que necesita el motor de
arranque y estabiliza el voltaje para toda la electrónica. Sus
problemas típicos no son siempre de la batería en sí:

- **Bornes sulfatados o flojos**: añaden resistencia justo donde pasa
  la mayor corriente de la máquina.
- **Descarga profunda** por consumo parásito o por un alternador que no
  carga.
- **Nivel de electrolito bajo** en baterías convencionales. El manual
  de la JCB indica que, en baterías sin mantenimiento, no debería hacer
  falta rellenar, salvo operación prolongada en clima tropical o
  sobrecarga del alternador; en ese caso se revisa que el electrolito
  cubra las placas unos 6 mm y se completa **solo con agua destilada o
  desionizada**, nunca con ácido.

Reglas de seguridad que el mismo manual destaca y que conviene aplicar
siempre:

- **Desconectar primero el cable negativo (masa) y conectarlo al
  final.** Así una herramienta que toque el chasis mientras se trabaja
  en el positivo no genera un cortocircuito.
- **No desconectar la batería con el motor en marcha**: los picos de
  voltaje pueden dañar los circuitos electrónicos.
- Evitar chispas y llamas cerca de la batería: libera gases
  explosivos.
- No probar la carga haciendo puente con una herramienta entre bornes;
  se usa un hidrómetro o un voltímetro.

### Qué dice el voltaje en reposo

Con la batería en reposo (varias horas sin cargar ni descargar) y un
sistema de 12 V, el voltaje es una guía rápida del estado de carga. Son
valores referenciales; verificar en el manual del equipo:

| Voltaje en reposo (12 V) | Lectura práctica |
|---|---|
| 12,6 a 12,8 V | Batería cargada |
| Cerca de 12,4 V | Carga parcial, alrededor de tres cuartas partes |
| Cerca de 12,0 V | Muy descargada, recargar antes de diagnosticar |
| Menos de 11,8 V | Posible celda dañada o sulfatación avanzada |

Para un sistema de 24 V, los valores son aproximadamente el doble.
Una batería que marca bien en reposo pero cae por debajo de unos 9,6 V
mientras se intenta arrancar (referencial) está perdiendo capacidad: se
confirma con un probador de carga. El propio manual JCB incluye en su
lista de herramientas un probador de baterías y un multímetro tipo
Fluke 85, lo que da una idea de lo básico del equipo de diagnóstico.

## Alternador: de dónde sale la carga

El alternador convierte el movimiento del motor en corriente alterna,
la rectifica con diodos y la entrega a la batería con un **regulador**
que limita el voltaje. En los esquemas Komatsu aparece como generador
con tres conexiones relevantes: el borne de potencia (B+), el
terminal **W** que entrega una señal de frecuencia proporcional al giro
(la usa el tablero para la luz de carga y el control) y la excitación
desde la llave.

Qué puede fallar y cómo se nota:

- **Correa floja o gastada**: carga solo a ratos, chirrido al acelerar.
  En la JCB, el manual de mantenimiento indica ajustar la tensión de
  la correa hasta lograr una flecha de unos 10 mm (3/8 in) al presionar
  el tramo libre.
- **Diodos o regulador dañados**: no carga o sobrecarga.
- **Conexiones sueltas o masa deficiente**: el alternador es bueno pero
  el voltaje no llega a la batería.

Por eso la prueba de carga (más abajo) mide en la batería y también en
el alternador: la diferencia entre ambos puntos revela una caída
oculta en el cable de carga.

## Circuito de arranque y seguridad de neutro

En una retroexcavadora el arranque no es un simple "llave, motor". La
llave solo envía una señal de **mando** de baja corriente; la potencia
(cientos de amperios) viaja por el cable grueso entre la batería y el
solenoide del motor de arranque. Entre ambos hay varios permisos:

<figure class="diagram">
<svg viewBox="0 0 820 250" role="img" aria-label="Diagrama simplificado del circuito de arranque: batería, llave en posición de arranque, interruptor de neutro, relé de arranque y solenoide con motor de arranque, con cable de potencia arriba y retorno por masa abajo" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="820" height="250" rx="12" fill="#f8fafc"/>
<path d="M94 70 V45 H726 V70" fill="none" stroke="#b45309" stroke-width="5"/>
<text x="410" y="34" text-anchor="middle" font-size="14" fill="#1e293b">Cable de potencia batería a solenoide (alta corriente)</text>
<path d="M94 140 V200 H726 V140" fill="none" stroke="#475569" stroke-width="4"/>
<text x="410" y="228" text-anchor="middle" font-size="14" fill="#1e293b">Retorno por masa (chasis y bloque motor)</text>
<rect x="29" y="70" width="130" height="70" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="94" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Batería</text>
<text x="94" y="122" text-anchor="middle" font-size="14" fill="#1e293b">12 V</text>
<rect x="187" y="70" width="130" height="70" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="252" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Llave</text>
<text x="252" y="122" text-anchor="middle" font-size="14" fill="#1e293b">posición START</text>
<rect x="345" y="70" width="130" height="70" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="410" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Seguridad</text>
<text x="410" y="122" text-anchor="middle" font-size="14" fill="#1e293b">de neutro</text>
<rect x="503" y="70" width="130" height="70" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="568" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Relé de</text>
<text x="568" y="122" text-anchor="middle" font-size="14" fill="#1e293b">arranque</text>
<rect x="661" y="70" width="130" height="70" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="726" y="92" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Solenoide y</text>
<text x="726" y="110" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">motor de</text>
<text x="726" y="128" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">arranque</text>
<path d="M159 105 H187" stroke="#1e293b" stroke-width="2.5"/>
<path d="M317 105 H345" stroke="#1e293b" stroke-width="2.5"/>
<path d="M475 105 H503" stroke="#1e293b" stroke-width="2.5"/>
<path d="M633 105 H661" stroke="#1e293b" stroke-width="2.5"/>
<path d="M181 98 l8 7 l-8 7 z" fill="#1e293b"/>
<path d="M339 98 l8 7 l-8 7 z" fill="#1e293b"/>
<path d="M497 98 l8 7 l-8 7 z" fill="#1e293b"/>
<path d="M655 98 l8 7 l-8 7 z" fill="#1e293b"/>
</svg>
<figcaption>Circuito de arranque simplificado. La cadena de mando (llave, seguridad de neutro y relé) es de baja corriente; el cable superior lleva la potencia. Ilustración propia, esquema genérico sin códigos de cable.</figcaption>
</figure>

**Cómo funciona la cadena de mando:**

1. Al girar la llave a START, la corriente de mando llega a la entrada
   del circuito de seguridad.
2. La **seguridad de neutro** solo deja pasar la señal si la
   transmisión está en neutro. En la JCB 2CX esta función aparece como
   un relé dedicado ("Neutral start") en la caja de relés, junto con
   los relés "Starter 1" y "Starter 2". En los esquemas Komatsu el
   mismo permiso se ve en el diagrama de relés, que recibe la señal de
   la llave (terminal 50), la del generador y la del contacto de neutro
   del selector de marcha.
3. El relé de arranque cierra y alimenta la bobina del **solenoide**
   montado sobre el motor de arranque.
4. El solenoide hace dos cosas: empuja el piñón hacia la corona del
   volante y cierra un contacto de potencia que conecta la batería al
   motor eléctrico.

Esto explica por qué un mismo síntoma ("no gira") tiene causas en tres
zonas distintas: **permisos** (neutro, relés), **potencia** (cables,
bornes, solenoide) y **retorno** (masas). Nota práctica: el manual JCB
muestra que la alimentación de los relés de arranque pasa por un
fusible pequeño propio (3 A en su tabla), un detalle fácil de olvidar
en la revisión.

Nunca se debe puentear la seguridad de neutro. Si la máquina "arranca
de emergencia" con la transmisión engranada, puede moverse en cuanto el
motor enciende.

## Fusibles, relés y fusibles de enlace

La protección está en dos niveles. El manual de la JCB 2CX lo describe
con claridad:

- **Caja de fusibles** en la consola delantera, con tres columnas de
  diez fusibles (A, B y C) y una batería de relés numerados. Los
  valores van de 1 A (radio y horómetro) a 30 A (calefacción y aire
  acondicionado).
- **Fusibles de enlace** montados junto a la batería, de mayor
  capacidad: en ese manual se indican 40 A, 50 A, 60 A y 50 A para
  grupos de circuitos (luces de emergencia y laterales; limpiaparabrisas
  y transmisión; luces de trabajo y carretera; encendido, calefacción y
  arranque en frío).

El manual advierte además dos reglas que valen para cualquier máquina:
**reponer siempre con el amperaje correcto** y, si un fusible se
quema, **buscar la causa antes de colocar el nuevo**. Un fusible
quemado es un síntoma, no la falla.

Ejemplos de lo que protegen, según la tabla de la JCB (las
asignaciones cambian con el modelo y el año; verificar en el manual
del equipo):

| Circuito protegido | Qué falla si el fusible se abre |
|---|---|
| Sistema de corte del motor (5 A) | El motor gira pero no enciende, o no se apaga |
| Transmisión (varios fusibles de 10 A) | Sin marcha adelante/atrás o sin velocidades |
| Relés de arranque (3 A) | No hay respuesta alguna al girar la llave |
| Instrumentos y tacómetro (5 A) | Tablero muerto con la máquina funcionando |
| Luces de trabajo (25 A cada grupo) | Sin iluminación, con riesgo de sobrecarga del cableado |

Entre los **relés** de la JCB aparecen los de arranque, el de neutro,
los de transmisión (adelante, atrás y "dump" o desconexión), el del
freno de estacionamiento y los de luces, bocina y zumbador. Un relé es
un interruptor accionado por electricidad: con una señal pequeña,
conmuta una carga grande. Su falla típica es el desgaste de los
contactos (resistencia alta, calentamiento) o la bobina abierta.

**Prueba rápida de un relé**: con el relé desmontado, se mide la
resistencia de la bobina (suele estar entre decenas y pocos cientos de
ohmios; confirmar en el manual) y la continuidad de los contactos con y
sin alimentar la bobina con una fuente de 12 V. También sirve
intercambiarlo con otro relé idéntico y ver si la falla se desplaza.

## Solenoides de transmisión, tracción y circuitos hidráulicos

En la retroexcavadora la electricidad no solo arranca el motor: **abre y
cierra válvulas**. El esquema Komatsu de la serie WB93R-5/WB97R-5 lista
decenas de electroválvulas con su código de esquema, por ejemplo:

- Válvulas de **velocidad** (1.ª, 2.ª, 3.ª y 4.ª marcha), de **avance y
  retroceso** y de **doble tracción (4WD)**.
- Válvula de **desconexión de transmisión** (declutch) accionada desde
  el pulsador de la palanca.
- Válvulas de **bloqueo de diferencial**, de **seguridad** de brazos y
  de control de marcha suave (ride control).
- Válvulas del martillo hidráulico y de apertura y cierre de la pala
  de cuatro en uno.

Los códigos exactos varían entre modelos y versiones del esquema;
usa el diagrama de tu máquina.

Un solenoide es una bobina que mueve un carrete cuando recibe tensión.
Fallan de cinco formas conocidas:

1. **Bobina abierta o en cortocircuito**: se detecta midiendo su
   resistencia y comparándola con el valor del manual.
2. **Alimentación ausente**: relé, fusible o contacto de mando en mal
   estado.
3. **Masa deficiente**: la bobina recibe positivo pero el retorno falla.
4. **Conector con humedad o pines sueltos**: causa clásica de fallas
   intermitentes.
5. **Carrete pegado** (falla hidráulica, no eléctrica): la bobina
   recibe tensión y se siente el "clic" pero la válvula no cambia de
   posición.

Esto último es importante: un solenoide eléctricamente sano puede
estar atascado hidráulicamente. Antes de cambiarlo, se confirma que
recibe tensión y que su bobina mide bien. Para el panorama hidráulico
mira [el sistema hidráulico de centro abierto](/posts/sistema-hidraulico-retroexcavadora-circuito-centro-abierto/)
y [la transmisión power shuttle](/posts/transmision-retroexcavadora-power-shuttle-convertidor/).

## Sensores, interruptores y luces de advertencia

Los instrumentos del tablero reciben información de sensores
sencillos. En los esquemas Komatsu aparecen, entre otros, el sensor de
**presión de aceite del motor**, el de **temperatura del refrigerante**,
la sonda de **temperatura de aceite de transmisión**, el de **nivel de
combustible** (flotador), el de **velocidad de transmisión**, el
indicador de **filtro de aire**, el de **nivel de aceite de frenos**,
las bujías de precalentamiento y el solenoide de corte del motor.

Dos ideas ayudan a diagnosticar luces de advertencia:

- Un **interruptor de presión** (como el de aceite) cierra a masa y
  enciende la luz cuando la presión cae. Si la luz está encendida con
  el motor apagado, es lo normal; si se enciende con el motor en
  marcha, se verifica la presión real con un manómetro antes de
  culpar al sensor.
- Un **sensor de temperatura** (termistor) cambia su resistencia
  según la temperatura. Un cable cortado o suelto produce lecturas
  absurdas (marcador clavado en frío o en caliente). Se mide la
  resistencia del sensor y se compara con la tabla del fabricante.

El manual JCB 2CX incluye un apartado de luces de advertencia del panel
frontal que asocia cada símbolo con su función; es el primer lugar al
que ir cuando una luz es desconocida.

## Masas: el componente que nadie mira

Las masas son los cables y puntos de unión que cierran el circuito
hacia el borne negativo: la trenza entre batería y chasis, la unión del
motor al chasis, las masas de las cargas y los puntos de unión del
arnés. Una masa corroída crea resistencia en serie y provoca síntomas
desconcertantes: luces tenues, solenoides lentos, tablero que parpadea
al accionar una carga fuerte, motor de arranque que gira débil aunque la
batería esté sana.

Cuando una masa falla, la corriente intenta volver por otro camino: a
veces por un cable de control, un cojinete o un eje, y de ahí los
"fantasmas" eléctricos que se mueven de un circuito a otro. Revisar y
limpiar las masas debería ser el primer paso de cualquier diagnóstico
eléctrico, no el último.

## Diagnóstico con multímetro: tres pruebas que resuelven casi todo

Con un multímetro en buen estado y pinzas amperimétricas o un
amperímetro adecuado para la corriente de arranque, estas tres pruebas
cubren la mayoría de los casos. Hacen falta, como mínimo, cables de
prueba con puntas finas y pinzas de cocodrilo bien sujetas.

### Prueba 1: caída de voltaje (la más valiosa)

La caída de voltaje mide cuánta tensión se "pierde" en un cable, un
borne o una masa **mientras circula corriente**. Una resistencia
pequeña que no se ve con el óhmetro puede ser enorme bajo carga.

<figure class="diagram">
<svg viewBox="0 0 820 290" role="img" aria-label="Diagrama de la prueba de caída de voltaje: un voltímetro conectado entre el borne positivo de la batería y el terminal del motor de arranque, mientras se intenta arrancar" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="820" height="290" rx="12" fill="#f8fafc"/>
<rect x="30" y="60" width="150" height="90" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="105" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Batería</text>
<text x="105" y="124" text-anchor="middle" font-size="14" fill="#1e293b">borne positivo (+)</text>
<rect x="640" y="60" width="150" height="90" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<text x="715" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Motor de</text>
<text x="715" y="122" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">arranque</text>
<path d="M180 105 H640" stroke="#b45309" stroke-width="8"/>
<text x="410" y="86" text-anchor="middle" font-size="14" fill="#1e293b">Cable positivo bajo prueba</text>
<circle cx="180" cy="105" r="7" fill="#1e293b"/>
<circle cx="640" cy="105" r="7" fill="#1e293b"/>
<path d="M180 105 V215 H355" fill="none" stroke="#1e293b" stroke-width="2.5"/>
<path d="M640 105 V215 H465" fill="none" stroke="#1e293b" stroke-width="2.5"/>
<circle cx="410" cy="215" r="55" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
<text x="410" y="224" text-anchor="middle" font-size="28" font-weight="bold" fill="#1e293b">V</text>
<text x="410" y="152" text-anchor="middle" font-size="14" fill="#1e293b">Voltímetro en VCC</text>
<text x="105" y="250" text-anchor="middle" font-size="14" fill="#1e293b">Punta roja en el borne</text>
<text x="715" y="250" text-anchor="middle" font-size="14" fill="#1e293b">Punta negra en el terminal</text>
<text x="715" y="270" text-anchor="middle" font-size="14" fill="#1e293b">del motor de arranque</text>
</svg>
<figcaption>Caída de voltaje del lado positivo: el voltímetro se conecta en paralelo con el cable completo y se lee mientras alguien intenta arrancar. Para el lado de masa, se mide entre el borne negativo y el bloque motor. Ilustración propia.</figcaption>
</figure>

**Procedimiento:**

1. Seleccionar voltios de corriente continua (VCC) en la escala más
   baja que admita el instrumento.
2. Conectar las puntas **en paralelo** con el tramo a probar: una en el
   borne de la batería y la otra en el terminal donde llega el cable.
3. Pedir a un ayudante que intente arrancar el motor (o accionar la carga
   que se estudia) y leer el voltaje durante el intento.
4. Repetir para el retorno: borne negativo de la batería contra el
   bloque motor (o contra el cuerpo del motor de arranque).

Valores de referencia usados con frecuencia en taller (referencial;
verificar en el manual del equipo):

| Tramo medido | Caída aceptable | Si se excede |
|---|---|---|
| Cable positivo, batería a motor de arranque | Hasta unos 0,5 V durante el arranque | Limpiar bornes, revisar cable y terminales |
| Retorno por masa, negativo a bloque motor | Hasta unos 0,3 V durante el arranque | Limpiar y reapretar masas, cambiar trenza |
| Contacto del solenoide, entrada a salida | Muy baja, cercana a 0,2 a 0,3 V | Contactos quemados, cambiar solenoide |

La clave es que **la caída se localiza**: si el total es alto, se
reduce el tramo de prueba (por ejemplo, solo el borne y luego solo el
cable) hasta que la tensión perdida aparezca en un punto concreto.

### Prueba 2: consumo parásito

Si la batería se descarga en la noche, hay una carga que no se apaga. El
procedimiento:

1. Apagar todo, retirar la llave y esperar unos minutos a que los
   módulos entren en modo reposo.
2. Desconectar el cable negativo e intercalar el multímetro en modo
   amperímetro (rango de corriente continua; empezar en la escala alta
   y bajar).
3. Leer el consumo. Como referencia general, hasta unos 50 mA es
   aceptable en una máquina con reloj, radio o módulos en espera.
   Más de 100 a 200 mA ya descarga una batería en pocos días.
4. Retirar los fusibles uno a uno (anotando cuál) hasta que la lectura
   baje: ese circuito contiene la carga.

**Precaución:** no arrancar el motor ni accionar cargas fuertes con el
amperímetro intercalado; la corriente de arranque funde el fusible
interno del instrumento. Los esquemas Komatsu ayudan a identificar qué
circuito alimenta cada fusible o relé.

### Prueba 3: carga del alternador

1. Medir el voltaje de la batería con el motor apagado (valor base).
2. Arrancar y subir a ritmo medio (cerca de 1.500 rpm, referencial).
3. Medir de nuevo en los bornes de la batería: en 12 V debe estar entre
   13,8 y 14,8 V; en 24 V, aproximadamente 27,6 a 29,6 V (referencial;
   verificar en el manual del equipo).
4. Encender luces de trabajo, ventilador y aire acondicionado y
   comprobar que el voltaje se mantiene en el rango.
5. Medir también en el borne B+ del alternador: si ahí hay mucho más
   voltaje que en la batería, existe una caída en el cable de carga.
6. Con el motor en marcha, medir **corriente alterna** entre el borne B+
   y masa: una lectura alta indica diodos defectuosos.

Un alternador que no carga con el cable bien conectado y la correa en
buen estado va al taller de reparación; uno que carga con el voltaje
dentro del rango pero con una batería que no sostiene la carga
apunta a la batería.

## Fallas frecuentes: síntoma, causa probable y prueba

| Síntoma | Causa probable | Prueba recomendada |
|---|---|---|
| Al girar la llave no pasa nada (sin clic, tablero normal) | Seguridad de neutro, relé de arranque o fusible de relés | Verificar posición de palanca en neutro, fusible, relés (intercambio), continuidad del mando |
| Un clic seco y el motor no gira | Batería baja, bornes sulfatados, contactos del solenoide | Voltaje en reposo, caída en positivo y masa durante el intento |
| Gira lento | Masa corroída, cable con alta resistencia, batería débil | Caída de voltaje en positivo y negativo, prueba de carga |
| Tablero muerto con la llave en ON | Fusible de instrumentos o de enlace, borne flojo | Revisar fusible de enlace en la batería, voltaje en los bornes del tablero |
| Batería descargada por las mañanas | Consumo parásito, alternador sin cargar | Prueba de consumo parásito y prueba de carga |
| Luces tenues, parpadeo al accionar cargas | Masa en mal estado, correa floja | Caída de voltaje en el retorno, tensión de correa |
| Solenoides de transmisión o 4WD intermitentes | Conector con humedad, cable fatigado, masa | Medir alimentación y masa en la falla, mover el arnés, resistencia de bobina |
| Sin marcha adelante o atrás | Relé o solenoide de dirección, fusible de transmisión | Revisar fusible, relé de avance y retroceso, tensión en el solenoide |
| Motor gira pero no enciende (diésel) | Solenoide de corte de combustible sin alimentación | Verificar fusible del sistema de corte y tensión en el solenoide |

## Mantenimiento preventivo eléctrico

El programa de mantenimiento del manual JCB incluye, en sus revisiones
periódicas, el estado y apriete de los bornes de batería y el nivel de
electrolito, además de operar todo el equipo eléctrico, comprobar las
luces de advertencia, y verificar el motor de arranque y la salida del
alternador. Se resume en una rutina simple:

- **Cada turno**: luces de advertencia al encender, luces y bocina,
  ausencia de olores a quemado.
- **Cada mes** (o según el intervalo del manual): limpiar y apretar bornes
  con grasa dieléctrica, revisar tensión de correa, inspeccionar masas
  principales.
- **Cada temporada**: prueba de carga de la batería, medición de
  caída de voltaje en arranque y revisión de conectores expuestos a
  agua y barro.

Para el programa completo de la máquina, consulta
[mantenimiento de la retroexcavadora: checklist e intervalos](/posts/mantenimiento-retroexcavadora-checklist-intervalos/).

## Resumen

El sistema eléctrico de una retroexcavadora se entiende como una **red
de dos caminos** (positivo y masa) con permisos de seguridad en el
medio. Con el multímetro, las tres pruebas esenciales son la caída de
voltaje (localiza resistencias ocultas), el consumo parásito (encuentra
cargas que no se apagan) y la prueba de carga (separa batería de
alternador). Antes de cambiar piezas caras, se revisan bornes, masas,
fusibles de enlace y relés: son las causas más baratas y más
frecuentes.

Para seguir profundizando, lee [fallas eléctricas en
maquinaria](/posts/fallas-electricas-maquinaria/), el [manual básico
de electricidad](/posts/electricidad-fundamentos-componentes/) y
[funcionamiento y tipos de motores de arranque](/posts/funcionamiento-y-tipos-de-motores-de-arranque/).
Si estás empezando, conviene ubicar las piezas en
[partes de la retroexcavadora y sus funciones](/posts/partes-retroexcavadora-componentes-funciones/), y si estás por
comprar una máquina, la
[comparativa de modelos](/posts/como-elegir-retroexcavadora-comparativa-modelos/)
ayuda a decidir.

**Fuentes:** curso del sistema eléctrico de retroexcavadoras Komatsu
(documento WETT001304) en
[heavyequipments.org](https://www.heavyequipments.org/blog/22-course-electric-system-backhoe-loaders-komatsu)
y manual de la JCB 2CX en
[heavyequipments.org](https://www.heavyequipments.org/blog/767-manual-jcb-2cx-backhoes-systems-components-electrics-hydraulics).
Los valores marcados como referenciales son prácticas generales de
taller y no sustituyen al manual de servicio de su equipo.

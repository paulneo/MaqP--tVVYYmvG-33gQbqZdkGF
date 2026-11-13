---
title: "Nissan D22 con motor YD25: inyección ECCS-D, bomba radial y mantenimiento"
published: 2026-11-16
draft: false
featured: false
description: "Cómo funciona el diésel YD25 de la Nissan D22: control ECCS-D, bomba de émbolos radiales, válvula derramadora, TCV, EGR, modo de falla y mantenimiento clave."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "nissan-d22"
  - "yd25"
  - "eccs-d"
  - "bomba-radial"
  - "diesel-livianos"
  - "mantenimiento-diesel"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camionetas-diesel/nissan-d22-motor-yd25-inyeccion-eccs-d-mantenimiento
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué se enciende la luz MIL en el tablero de una D22 diésel y no siempre es una falla electrónica?"
    a: "En este vehículo la misma lámpara cumple dos funciones: avisa fallas del control del motor y funciona como testigo de agua en el filtro de combustible. Si se enciende con el motor en marcha, lo primero que indica el manual es drenar el agua del separador, y hacerlo de inmediato, porque el agua mal drenada puede dañar seriamente el motor. Solo después de descartar el agua conviene conectar el escáner y buscar códigos."
  - q: "¿Qué hace la válvula derramadora de la bomba de inyección?"
    a: "Es una válvula de aguja accionada por una bobina que decide cuánto combustible se inyecta. Mientras está abierta, los émbolos aspiran y no generan presión; cuando la unidad de control de la bomba la cierra, el combustible se comprime y viaja hacia los inyectores. Cuando se abre otra vez, la presión cae y la inyección termina. El tiempo que permanece cerrada determina la cantidad inyectada."
  - q: "¿Qué valores de compresión indica el manual para el YD25?"
    a: "El manual de la D22 da 3.100 kPa (31,0 bar) como valor estándar, 2.500 kPa (25,0 bar) como mínimo y 490 kPa (4,9 bar) como diferencia máxima entre cilindros, medidos con el motor girando a unas 200 rpm. Importa tanto la diferencia entre cilindros como el valor absoluto: un cilindro bajo frente a los demás apunta a un problema localizado, como válvulas o anillos."
  - q: "¿Qué aceite pide el manual para el motor YD25?"
    a: "El manual de la D22 especifica aceite con clasificación API CD, CE, CF o CF-4, y una capacidad de 5,3 L sin cambiar filtro o 5,6 L cambiándolo. Estos datos corresponden al libro de texto del vehículo; antes de comprar el aceite conviene confirmar la viscosidad y la clasificación vigente en el manual del propietario del año y mercado de la camioneta."
  - q: "¿Qué pasa si falla el sensor del pedal del acelerador?"
    a: "El módulo no deja la camioneta inmovilizada: entra en modo de falla, usa valores preestablecidos y permite circular con rendimiento y respuesta reducidos. Además enciende la lámpara SERVICE en el tablero. Es un comportamiento de protección pensado para llegar al taller, no para trabajar así durante semanas."
sources:
  - title: "Manual Nissan D22 diésel: descripción (libro de texto de capacitación, motor YD25)"
    url: "https://www.mecanicoautomotriz.org/442-manual-nissan-d22-diesel-descripcion"
related:
  - sistema-alimentacion-motor-diesel
  - vaciado-agua-combustible
  - pre-poscalentamiento-motores-diesel-clave-para-un-arranque-eficiente-y-duradero
---

La Nissan D22 (vendida como NP300 o Frontier según el país) es una de
las camionetas diésel más comunes en talleres de Latinoamérica: flotas
de empresas de servicios, obras, agroindustria y transporte liviano.
Con el motor **YD25** de inyección directa, turbo e intercooler, tiene
una particularidad que desconcierta a quien viene del mundo de las
bombas mecánicas: su bomba de inyección es de **émbolos radiales con
control electrónico** y trabaja junto con una unidad de control propia.

Esta guía organiza lo que explica el libro de texto de la D22: cómo
está pensado el motor, cómo se reparten el trabajo el ECM y la bomba,
qué hacen la válvula derramadora y la válvula TCV, y qué mantenimiento
protege todo ese sistema. Al final tienes una tabla de síntomas y una
lista de revisión para el taller.

## Qué es el YD25 y por qué importa su diseño

El fabricante llama **NDiD** (inyección directa diésel Nissan) a la
filosofía del motor: buscar el bajo consumo de un motor de inyección
directa convencional, pero con el silencio y la suavidad de uno de
inyección indirecta. Para lograrlo combina varias decisiones de diseño:

- **Inyección directa** sobre una cámara labrada en la cabeza del
  pistón, para ahorrar combustible.
- **Combustión premezclada tipo "M-Fire"**: el combustible se inyecta
  más tarde de lo habitual, cerca o después del punto muerto superior,
  de modo que tiene tiempo de evaporarse y mezclarse antes de quemar.
  Eso baja el humo negro y el ruido.
- **Mucho EGR** a cargas bajas y medias, para frenar la velocidad de
  combustión y reducir los óxidos de nitrógeno (NOx).
- **Turbulencia fuerte** por dos puertos de admisión por cilindro
  (uno tangencial y uno helicoidal), con 4 válvulas y doble árbol de
  levas (DOHC).
- **Inyectores de varios orificios con apertura en dos etapas** y un
  catalizador de oxidación para reducir HC, CO y humo.

La consecuencia práctica es importante: casi todo lo que hace limpio y
silencioso a este motor depende de **tiempos de inyección muy precisos
y de control electrónico**. Por eso una pequeña desviación (agua en el
combustible, aire en el circuito, un conector con falso contacto)
se nota más que en un diésel mecánico antiguo.

Un detalle de mecánica que conviene recordar: la bomba de inyección
se mueve por la **cadena de distribución primaria**, junto con la bomba
de dirección hidráulica. Quien repare la cadena también está tocando
la sincronización de la bomba, y las marcas de punto de los engranajes
no son opcionales.

## Control electrónico ECCS-D: quién decide qué

El sistema ECCS-D tiene **dos cerebros**: el ECM (módulo de control del
motor) y la **unidad de control de la bomba de inyección**, montada en
la propia bomba. Se comunican por red **CAN**. El ECM procesa todo el
motor y el entorno, y le dice a la bomba cuánto combustible y qué avance
se necesita; la unidad de la bomba recibe de vuelta datos como la
velocidad de bombeo y la temperatura del combustible y ejecuta las
órdenes con precisión sobre dos válvulas.

¿Por qué dos unidades en lugar de una? Según el manual, así el circuito
que gobierna la válvula derramadora queda físicamente muy cerca de su
solenoide y se reduce la interferencia con otras señales. Es una
decisión de compatibilidad electromagnética: los pulsos de la válvula
son rápidos y de corriente alta, y conviene que no viajen por todo el
arnés del motor.

<figure class="diagram">
<svg viewBox="0 0 800 380" role="img" aria-labelledby="nd-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="nd-d1-title">Flujo de señales del sistema ECCS-D: sensores hacia el ECM y la unidad de control de la bomba, y de ahí hacia los actuadores</title>
<defs>
<marker id="nd-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1f2937"/></marker>
</defs>
<rect x="0" y="0" width="800" height="380" rx="14" fill="#f1f5f9"/>
<text x="125" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Sensores</text>
<text x="375" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Unidades de control</text>
<text x="670" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Actuadores</text>

<rect x="20" y="40" width="210" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="125" y="65" text-anchor="middle" font-size="14" fill="#1f2937">Posición del pedal</text>
<rect x="20" y="95" width="210" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="125" y="120" text-anchor="middle" font-size="14" fill="#1f2937">Cigüeñal (PMS)</text>
<rect x="20" y="150" width="210" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="125" y="175" text-anchor="middle" font-size="14" fill="#1f2937">Temp. del refrigerante</text>
<rect x="20" y="205" width="210" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="125" y="230" text-anchor="middle" font-size="14" fill="#1f2937">Presión de aire (turbo)</text>
<rect x="20" y="265" width="210" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="125" y="290" text-anchor="middle" font-size="14" fill="#1f2937">Temp. del combustible</text>
<rect x="20" y="320" width="210" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="125" y="345" text-anchor="middle" font-size="14" fill="#1f2937">Posición anillo de levas</text>

<rect x="310" y="50" width="130" height="140" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="375" y="112" text-anchor="middle" font-size="16" font-weight="bold" fill="#1f2937">ECM</text>
<text x="375" y="134" text-anchor="middle" font-size="14" fill="#1f2937">(ECCS-D)</text>
<rect x="310" y="255" width="130" height="105" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="375" y="300" text-anchor="middle" font-size="14" fill="#1f2937">Unidad de control</text>
<text x="375" y="320" text-anchor="middle" font-size="14" fill="#1f2937">de la bomba</text>
<line x1="375" y1="192" x2="375" y2="253" stroke="#1f2937" stroke-width="2" marker-start="url(#nd-arr)" marker-end="url(#nd-arr)"/>
<text x="387" y="228" font-size="14" font-weight="bold" fill="#1f2937">CAN</text>

<line x1="232" y1="60" x2="308" y2="75" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="232" y1="115" x2="308" y2="105" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="232" y1="170" x2="308" y2="135" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="232" y1="225" x2="308" y2="165" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="232" y1="285" x2="308" y2="295" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="232" y1="340" x2="308" y2="325" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>

<rect x="560" y="40" width="220" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="670" y="65" text-anchor="middle" font-size="14" fill="#1f2937">Relé de bujías</text>
<rect x="560" y="95" width="220" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="670" y="120" text-anchor="middle" font-size="14" fill="#1f2937">Válvula EGR (de pasos)</text>
<rect x="560" y="150" width="220" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="670" y="175" text-anchor="middle" font-size="14" fill="#1f2937">Ventilador del radiador</text>
<rect x="560" y="265" width="220" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="670" y="290" text-anchor="middle" font-size="14" fill="#1f2937">Válvula derramadora</text>
<rect x="560" y="320" width="220" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="670" y="345" text-anchor="middle" font-size="14" fill="#1f2937">Válvula TCV (avance)</text>

<line x1="442" y1="85" x2="558" y2="62" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="442" y1="120" x2="558" y2="115" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="442" y1="155" x2="558" y2="170" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="442" y1="295" x2="558" y2="287" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
<line x1="442" y1="320" x2="558" y2="340" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-arr)"/>
</svg>
<figcaption>Flujo de señales del ECCS-D: el ECM gobierna bujías, EGR y ventilador; la unidad de control de la bomba comanda la válvula derramadora y la TCV. Esquema simplificado, ilustración propia.</figcaption>
</figure>

### Sensores principales y para qué sirven

| Sensor | Qué mide | Para qué lo usa el sistema |
|---|---|---|
| Posición del pedal (con interruptor de ralentí integrado) | Cuánto pisa el conductor | Define la cantidad de combustible; el interruptor de pedal suelto fija el ralentí y sirve para diagnosticar el propio sensor |
| Cigüeñal (PMS) | Velocidad y posición, leídas en una rueda con muescas del volante | Base para el control de cantidad y del tiempo de inyección |
| Temperatura del motor | Termistor cuya resistencia baja al calentarse | Arranque en frío, ralentí rápido, bujías, EGR y ventilador |
| Temperatura del combustible | Temperatura en la bomba | Compensa la variación de cantidad inyectada por el combustible caliente o frío |
| Posición del anillo de levas | Giro del anillo dentro de la bomba | Informa el avance real y sirve de señal de respaldo de las rpm |
| Presión de aire | Presión del turbo | En condiciones normales no interviene en el control |

El manual insiste en un punto que ahorra dinero: el autodiagnóstico
revisa no solo sensores sino también **arneses y conectores**, y antes de
cambiar un sensor hay que descartar falsos contactos y terminales
flojas. Es la causa más barata y la más frecuente.

### Estrategias de inyección que aplica el ECM

El ECM no usa un solo cálculo; cambia de estrategia según la
situación:

- **Arranque**: cantidad preprogramada, corregida por temperatura del
  refrigerante y rpm, con más combustible en frío. Cuando el motor
  alcanza las rpm de arranque, pasa a ralentí o a control normal.
- **Ralentí**: regula la cantidad según la carga para mantener las rpm
  constantes, y sube el régimen en frío (ralentí rápido).
- **Normal**: compara pedal y rpm contra mapas almacenados.
- **Cantidad máxima**: limita el combustible según rpm, aire, temperatura
  y pedal, lo que evita sobrealimentar de combustible a gran altitud,
  donde el aire es menos denso, o durante una falla.
- **Desaceleración**: corta combustible con el pedal suelto para
  ahorrar.
- **Corte por sobrerrégimen**: con el motor en vacío por encima de
  2.700 rpm corta el suministro, y lo restablece al bajar a unas 1.500 rpm.

El ECM también corta temporalmente el aire acondicionado al pisar a
fondo el acelerador, o si el refrigerante se sobrecalienta.

## La bomba de émbolos radiales, paso a paso

Aquí está el corazón del sistema. La bomba tiene siete elementos
principales según el manual: bomba de alimentación de paletas con su
válvula reguladora, émbolos radiales con las válvulas de presión
constante, cabezal distribuidor, válvula derramadora, dispositivo de
avance con su válvula de control (TCV), sensor de posición del anillo
de levas y la unidad de control de la bomba.

<figure class="diagram">
<svg viewBox="0 0 800 300" role="img" aria-labelledby="nd-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="nd-d2-title">Circuito de combustible del YD25: tanque, filtro con separador de agua, bomba de alimentación, bomba de émbolos radiales con válvula derramadora y TCV, válvulas de presión constante, inyectores y retorno al tanque</title>
<defs>
<marker id="nd-a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1f2937"/></marker>
<marker id="nd-a2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d4ed8"/></marker>
<marker id="nd-a2r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#b91c1c"/></marker>
</defs>
<rect x="0" y="0" width="800" height="300" rx="14" fill="#f1f5f9"/>

<rect x="20" y="110" width="100" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="70" y="146" text-anchor="middle" font-size="14" fill="#1f2937">Tanque</text>
<rect x="160" y="110" width="120" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="220" y="136" text-anchor="middle" font-size="14" fill="#1f2937">Filtro con</text>
<text x="220" y="154" text-anchor="middle" font-size="14" fill="#1f2937">separador</text>
<rect x="320" y="110" width="130" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="385" y="136" text-anchor="middle" font-size="14" fill="#1f2937">Bomba de</text>
<text x="385" y="154" text-anchor="middle" font-size="14" fill="#1f2937">alimentación</text>
<rect x="490" y="110" width="130" height="60" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="555" y="136" text-anchor="middle" font-size="14" fill="#1f2937">Émbolos</text>
<text x="555" y="154" text-anchor="middle" font-size="14" fill="#1f2937">radiales</text>
<rect x="660" y="110" width="120" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="720" y="136" text-anchor="middle" font-size="14" fill="#1f2937">CPV e</text>
<text x="720" y="154" text-anchor="middle" font-size="14" fill="#1f2937">inyectores</text>

<line x1="122" y1="140" x2="158" y2="140" stroke="#1d4ed8" stroke-width="3" marker-end="url(#nd-a2b)"/>
<line x1="282" y1="140" x2="318" y2="140" stroke="#1d4ed8" stroke-width="3" marker-end="url(#nd-a2b)"/>
<line x1="452" y1="140" x2="488" y2="140" stroke="#1d4ed8" stroke-width="3" marker-end="url(#nd-a2b)"/>
<line x1="622" y1="140" x2="658" y2="140" stroke="#b91c1c" stroke-width="4" marker-end="url(#nd-a2r)"/>

<path d="M555 108 V70 H70 V106" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#nd-a2)"/>
<text x="312" y="60" text-anchor="middle" font-size="14" fill="#1f2937">Retorno (derrame) al tanque</text>

<rect x="400" y="215" width="160" height="40" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
<text x="480" y="240" text-anchor="middle" font-size="14" fill="#1f2937">Válvula derramadora</text>
<rect x="585" y="215" width="170" height="40" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
<text x="670" y="240" text-anchor="middle" font-size="14" fill="#1f2937">Válvula TCV (avance)</text>
<line x1="500" y1="213" x2="525" y2="172" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-a2)"/>
<line x1="650" y1="213" x2="600" y2="172" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-a2)"/>

<rect x="160" y="215" width="120" height="40" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="220" y="240" text-anchor="middle" font-size="14" fill="#1f2937">Drenaje de agua</text>
<line x1="220" y1="213" x2="220" y2="172" stroke="#1f2937" stroke-width="2" marker-end="url(#nd-a2)"/>

<text x="400" y="285" text-anchor="middle" font-size="13" fill="#1f2937">Azul: baja presión. Rojo: alta presión. Discontinuo: retorno.</text>
</svg>
<figcaption>Circuito de combustible simplificado del YD25. La alimentación de paletas asegura el caudal de baja presión; los émbolos radiales generan la alta presión que gobiernan la válvula derramadora y la TCV. Ilustración propia, no a escala.</figcaption>
</figure>

### Baja presión: caudal y refrigeración

La **bomba de alimentación de paletas** aspira combustible del tanque
a través del filtro y lo manda a la bomba radial. Una **válvula
reguladora** devuelve el excedente a la entrada cuando sube el régimen,
para que la presión se mantenga dentro de lo especificado. Hay además una
**válvula de descarga o sobreflujo** en el retorno: deja volver combustible
al tanque, enfría la bomba y ayuda a purgar el aire; el pequeño orificio
que tiene sirve para ese purgado automático.

Esto tiene una lectura práctica: el combustible que vuelve al tanque no
es "desperdicio", es **refrigeración y lubricación** de una bomba de
tolerancias muy finas. Si el combustible llega con agua o sin
lubricidad, la bomba lo paga primero.

### Alta presión: aspirar, comprimir y soltar

Los émbolos giran con el rotor y son empujados hacia afuera contra el
anillo de levas por la presión de alimentación y la fuerza centrífuga.
Las levas internas del anillo los obligan a moverse hacia adentro y
afuera. El ciclo tiene dos fases:

1. **Aspiración**: el émbolo se aleja del punto muerto superior, el
   volumen crece y entra combustible. La válvula derramadora está
   **abierta**.
2. **Compresión y entrega**: el émbolo es empujado por la leva, y con la
   válvula derramadora **cerrada** el combustible se comprime y se reparte,
   por las ranuras del rotor y las salidas del cabezal, hacia cada
   inyector. En el motor de cuatro cilindros hay cuatro ranuras y cuatro
   salidas.

Las salidas del cabezal están marcadas con las letras A, B, C y D, para
no cruzar las tuberías de los inyectores al armar. Es un detalle que
agradece quien desmonta el sistema.

### La válvula derramadora: dosifica por tiempo

Es una válvula de aguja con bobina. Cuando la unidad de control de la
bomba envía corriente, la aguja cierra su asiento y la presión sube
muy rápido: empieza la entrega. Cuando se corta la corriente, la
válvula abre y el combustible a presión se descarga hacia baja
presión; la presión cae, el inyector cierra y termina la inyección.

La idea clave: **la cantidad inyectada depende de cuánto tiempo la
válvula permanece cerrada mientras el émbolo sube**. Como la leva
sigue empujando aun después de la apertura, el exceso se acumula
momentáneamente en una cámara de diafragma, que amortigua y deja
combustible listo para la próxima inyección.

### Válvula de presión constante (CPV)

Está en cada salida del cabezal. Tiene tres tareas:

- Amortiguar la onda de presión de retorno cuando cierra el inyector,
  para que no se reabra.
- Evitar cavitación en las tuberías de alta presión, que las erosionaría.
- Mantener una **presión residual** en la tubería para que el inicio
  de la siguiente inyección sea estable.

### Control de avance: el papel de la TCV

El avance de la inyección se ajusta girando ligeramente el **anillo de
levas** mediante el pistón de avance: si el anillo gira en el sentido de
rotación, los rodillos alcanzan antes la leva y la inyección empieza
antes. La **válvula de control de avance (TCV)** regula la presión de
control en la cámara anular abriendo y cerrando rápidamente, como un
regulador variable, con una relación de trabajo (ciclo útil) que fija la
unidad de la bomba.

- **Más tiempo cerrado el retorno** de la cámara anular: sube la presión,
  el limitador hidráulico se mueve hacia la posición de avance y el
  anillo gira para adelantar la inyección.
- **Más tiempo abierto**: baja la presión y el muelle de retorno atrasa
  la inyección.

El ECM contiene mapas de avance según carga, velocidad y temperatura,
y la unidad de la bomba compara continuamente el avance deseado con el
real, que obtiene del **sensor de posición del anillo de levas**. Si hay
diferencia, corrige el ciclo de trabajo de la TCV. Ese sensor cumple
además dos funciones de respaldo: calcular la velocidad de la bomba y,
si falla el sensor del cigüeñal, aportar la señal de emergencia de rpm.

### Inyectores de dos etapas

Cada inyector lleva dos muelles en serie. En la primera etapa solo
actúa uno: la aguja se abre una carrera corta y deja pasar una pequeña
cantidad (inyección piloto). Al subir la presión, la corredera tope se
desplaza, ambos muelles actúan y la aguja abre del todo para la
inyección principal. Con esa entrada suave de combustible la
combustión es menos brusca, y por eso baja el ruido, sobre todo en
ralentí y cargas bajas.

## Bujías incandescentes y arranque en frío

El YD25 usa bujías con **elemento cerámico**, que alcanza temperatura
rápidamente. El ECM activa el relé según la temperatura del refrigerante:
al poner la llave en ON, el relé se activa durante un tiempo que depende de
esa temperatura, y la luz del tablero permanece encendida mientras dura.
Con motor frío el preencendido es más largo. Una vez arrancado, la
corriente sigue un tiempo (poscalentamiento) y el control se desactiva
cuando el refrigerante supera unos 75 °C aproximadamente.

El procedimiento de arranque del manual es simple y conviene respetarlo:
llave en ON, esperar que se apague la luz de bujías, arrancar sin pisar el
acelerador, no accionar el motor de arranque más de 20 segundos seguidos
(esperar otros 20 segundos antes de reintentar), y dejar el motor en
ralentí unos 30 segundos. Si quieres entender mejor el por qué del
preencendido y el poscalentamiento, revisa
[precalentamiento y poscalentamiento en motores diésel](/posts/pre-poscalentamiento-motores-diesel-clave-para-un-arranque-eficiente-y-duradero/).

La camioneta también incluye un **interruptor de calentamiento**: con el
motor frío, caja en neutro y pedal suelto, el ECM sube automáticamente el
ralentí. Se desactiva solo al empezar a circular.

## EGR electrónico

La válvula de control de volumen de EGR lleva un **motor de pasos**: el ECM
manda un número de pasos y el vástago abre más o menos el paso de gases de
escape hacia la admisión (más pasos, más caudal). Es la pieza que permite
meter bastante EGR sin dañar la conducción.

La válvula permanece cerrada en situaciones donde el EGR perjudicaría el
rendimiento: motor detenido o en arranque, refrigerante frío o
excesivamente caliente, altas rpm, acelerador casi a fondo, voltaje de
batería bajo y baja presión barométrica (la altitud, un dato relevante en
los Andes). En esas condiciones el motor trabaja sin recirculación.

Lo que sí es típico de un EGR con hollín: ralentí inestable, tirones a
carga baja y humo anormal. Es una pista, no un diagnóstico; se confirma
con escáner (comando de la válvula) y revisando el estado físico.

## Autodiagnóstico y modo de falla

El módulo verifica rangos de las señales de entrada y salida y declara una
falla cuando se cumplen condiciones concretas: valor fuera de rango,
durante cierto tiempo, con un error por encima de lo permitido. La
consulta se hace con el escáner del fabricante (CONSULT II en el manual).

Si un sensor falla, el ECM entra en **modo de falla** (fail-safe) y
sustituye el valor perdido por uno preestablecido:

| Señal que falla | Qué hace el sistema |
|---|---|
| Temperatura del motor, temperatura del combustible o flujo de aire | Usa un valor sustituto fijo en el programa |
| Sensor del cigüeñal | Usa la señal del sensor de posición del anillo de levas de la bomba |
| Sensor del pedal | Permite circular con menos rendimiento y respuesta, y enciende la lámpara SERVICE |

Dos consecuencias para el taller. Primero: la camioneta puede "seguir
funcionando" con un sensor degradado, pero con peor consumo, humo o
potencia; no es normal. Segundo: si el escáner no muestra códigos y los
síntomas persisten, el problema probablemente es **mecánico o de
combustible** (aire, agua, filtro, inyector), no electrónico.

## Mantenimiento que sí cambia la vida del sistema

### Purgado de aire

Tras cambiar el filtro, vaciar el separador o quedarse sin combustible, el
circuito debe purgarse con la **bomba cebadora manual**. El procedimiento
del manual es simple: accionar la cebadora hasta que el bombeo se vuelva
muy duro (señal de que ya no hay aire) y detenerse ahí. Si no se endurece,
se desconecta la manguera entre el filtro y la bomba de inyección, se
verifica que salga combustible (con recipiente para no ensuciar el motor),
se reconecta y se vuelve a bombear. Luego se arranca y se deja el motor en
ralentí aproximadamente un minuto.

### Filtro de combustible con separador de agua

- La luz MIL funciona también como **testigo de agua**: si se enciende con el
  motor en marcha, hay que drenar de inmediato.
- Para drenar: aflojar la llave de drenaje unas **4 o 5 vueltas** (sin
  quitarla), accionar la cebadora para sacar el agua y recoger todo en un
  recipiente. No apretar de más la llave, porque se daña la rosca. El manual
  indica que la luz parpadea con unos **90 a 150 ml** de agua acumulada.
- Después se purga el aire y se arranca para comprobar que la luz se apaga.
- Para cambiar el filtro: desconectar el conector del sensor, drenar, retirar
  los dos pernos del soporte, usar llave de banda, humedecer la junta del
  filtro nuevo con un poco de combustible, enroscar hasta sentir ligera
  resistencia y dar **2/3 de vuelta** adicional; instalar el sensor, purgar y
  revisar fugas con el motor en marcha.

Para el procedimiento general de drenaje y búsqueda de averías, tienes más
detalle en [vaciado de agua en el sistema de combustible](/posts/vaciado-agua-combustible/).

### Aceite y filtro de aceite

El manual pide aceite **API CD, CE, CF o CF-4** y da capacidades de
**5,3 L sin filtro y 5,6 L con filtro** (verifica en el manual de tu
vehículo, porque las clasificaciones y viscosidades recomendadas se
actualizan). Procedimiento: vehículo nivelado, motor caliente (y revisar
fugas), apagar y esperar 10 minutos, drenar, rellenar, arrancar para
comprobar fugas, apagar y reconfirmar el nivel tras otros 10 minutos,
llenando hasta la marca H de la varilla sin pasarse. El filtro es de
**elemento reemplazable**: se cambian el elemento y el sello O, no la
carcasa.

El turbo depende del aceite limpio. Por eso el manual recomienda dejar el
motor unos minutos al ralentí tras un trabajo exigente y no acelerar a
fondo apenas arrancado.

### Prueba de compresión

Con los datos del manual (referencia a unas 200 rpm de arranque):

| Valor | kPa | bar |
|---|---|---|
| Estándar | 3.100 | 31,0 |
| Mínimo | 2.500 | 25,0 |
| Diferencia máxima entre cilindros | 490 | 4,9 |

Pasos clave: motor caliente, sin códigos de falla, **retirar el fusible de la
bomba de inyección** (ENG CON3, 20 A) para que no inyecte durante la
prueba, retirar las bujías incandescentes (limpiando antes la zona),
instalar el adaptador y el manómetro, y hacer girar el motor con la
**batería bien cargada**. Si las rpm de arranque salen del rango
indicado, revisar primero la batería; si se pasan, revisar holgura de
válvulas y cámara de combustión. Al terminar: reponer bujías y fusible y
verificar con el escáner que no quedaron fallas.

### Presión de aceite

La comprobación se hace con el motor caliente, en neutro y sin carga, con
manómetro en lugar del interruptor de presión. Valores aproximados del
manual para la presión de descarga:

| Régimen | Presión mínima |
|---|---|
| Ralentí | más de 140 kPa (1,4 bar) |
| 2.000 rpm | más de 270 kPa (2,7 bar) |
| 4.000 rpm | más de 430 kPa (4,3 bar) |

Al reinstalar el interruptor se aplica sellador nuevo en la rosca y se
aprieta a 13-17 N·m. Si la presión es baja, el manual manda revisar
fugas en los conductos y la bomba de aceite.

### Filtro de aire

El manual advierte contra soplar con aire comprimido el filtro de papel
seco en caminos polvorientos: agranda los poros y deja pasar partículas
que rayan el motor. Se cambia según las condiciones de trabajo, no por
calendario fijo, y conviene revisar también el prefiltro centrífugo por
si está tapado de polvo.

## Síntomas, causas probables y criterio de taller

| Síntoma | Causas probables | Criterio de taller |
|---|---|---|
| Luz MIL encendida con motor en marcha | Agua en el separador | Drenar, purgar y comprobar que se apague; si reaparece pronto, revisar el origen (tanque, tapa, proveedor) |
| Arranque difícil o largo | Aire en el circuito, filtro tapado, bujías o relé con fallas, batería débil | Probar cebadora, medir batería, revisar circuito de incandescencia; verificar con escáner |
| Ralentí inestable | Aire en el circuito, EGR sucio o pegado, inyector con falla, sensor degradado | Escáner en vivo, revisar EGR; compresión si persiste |
| Pérdida de potencia, camioneta "lenta" | Modo de falla activo, filtros tapados, fuga de turbo, EGR | Leer fallas; revisar admisión y filtro; no asumir inyectores sin medir |
| Humo negro | Aire insuficiente (filtro, fuga de turbo), EGR, inyector, avance incorrecto | Revisar filtro y mangueras de admisión primero; diagnóstico de avance con escáner |
| Humo blanco al arrancar en frío | Bujías sin funcionar, combustible con agua, compresión baja | Verificar relé y bujías, drenar agua, prueba de compresión |
| Motor con tirones a carga baja | EGR abierto de más, inyector, aire en baja presión | Escáner y revisión visual de uniones del circuito |
| Presión de aceite baja | Bomba, aceite diluido, fugas internas | Medir con manómetro; **trabajo de taller**, no seguir circulando |
| Un cilindro con compresión muy distinta | Válvulas, anillos, junta de culata | Compara con la diferencia máxima del manual antes de abrir |

Una regla para el taller que sirve en toda la tabla: **primero lo barato y
medible** (agua, aire, filtros, batería, conectores) y luego lo costoso
(bomba, inyectores). La bomba de inyección y la culata no se abren por
intuición.

## Lista de mantenimiento recomendada

Los intervalos exactos los marca la póliza de mantenimiento del vehículo; esta
lista ordena las tareas, no fija kilometrajes.

- [ ] Drenar el separador de agua con regularidad y siempre que se encienda la MIL.
- [ ] Cambiar el filtro de combustible según póliza y con combustible dudoso antes de tiempo.
- [ ] Purgar el circuito cada vez que se abre o se queda sin combustible.
- [ ] Aceite y filtro con la clasificación indicada; esperar y comprobar el nivel.
- [ ] Revisar filtro de aire y prefiltro centrífugo según el polvo del trabajo.
- [ ] Verificar luz de bujías: debe encender y apagarse; si no, revisar relé y bujías.
- [ ] Inspeccionar conectores y arnés antes de culpar a un sensor.
- [ ] Prueba de compresión y presión de aceite ante pérdida de potencia o consumo.
- [ ] Dejar el turbo enfriarse con ralentí tras trabajo pesado.
- [ ] Revisar las bandas con el motor frío (el manual recomienda esperar unos 30 minutos tras detenerlo).

## El factor Latinoamérica: calidad del diésel y agua

En muchos mercados de la región el diésel llega con más azufre, menos
lubricidad o con agua de tanques de estación poco mantenidos. Para una bomba
radial de tolerancias finas y lubricada por el propio combustible, esto
importa más de lo que parece: el agua provoca corrosión y desgaste, y
la falta de lubricidad acelera el desgaste interno. Algunas prácticas
que ayudan, a criterio del taller:

- Cargar en estaciones de alto movimiento y evitar tanques casi vacíos
  (donde se acumulan sedimentos y agua).
- Conservar la tapa del tanque en buen estado y evitar lavados de motor
  a presión sobre conectores.
- No ignorar la luz MIL: en esta camioneta es también el aviso de agua.
- En zonas de altura, recordar que el motor ya recorta combustible y EGR
  por baja presión barométrica; la pérdida de potencia es esperable y no
  siempre una falla.
- Usar repuestos de calidad verificable: filtros de combustible falsificados
  son un problema recurrente en la región.

## Resumen

El YD25 de la D22 es un diésel moderno con un control repartido en dos
unidades. El ECM piensa el motor completo y la unidad de la bomba ejecuta:
la **válvula derramadora** fija cuánto se inyecta, la **TCV** fija cuándo. Todo
depende de combustible limpio, circuito sin aire y buena señal eléctrica,
por eso el mantenimiento que más rinde es sencillo: separador drenado,
filtros al día, aceite correcto y conectores en buen estado.

Para ampliar: el
[sistema de alimentación del motor diésel](/posts/sistema-alimentacion-motor-diesel/),
la [cámara de combustión en inyección directa e indirecta](/posts/camara-combustion-diesel-inyeccion-directa-indirecta/)
y la [guía de sincronización y control de emisiones](/posts/guia-sincronizacion-emisiones-motores-diesel/).
Si trabajas con otras pickups diésel, mira también
[Ford Power Stroke 2.8](/posts/ford-power-stroke-2-8-mantenimiento-especificaciones/)
y [Toyota Hilux diésel](/posts/toyota-hilux-diesel-plan-mantenimiento-intervalos/).

**Fuentes**: libro de texto Nissan D22 diésel (motor YD25), publicado en
[mecanicoautomotriz.org](https://www.mecanicoautomotriz.org/442-manual-nissan-d22-diesel-descripcion).
Los valores numéricos citados provienen de ese manual y deben
confirmarse en el manual del vehículo según año y mercado. Este contenido es
independiente y no está avalado por el fabricante.

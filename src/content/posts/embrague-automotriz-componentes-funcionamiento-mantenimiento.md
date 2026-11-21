---
title: "Embrague automotriz: componentes, accionamiento y mantenimiento"
published: 2026-11-22
draft: false
featured: false
description: "Cómo funciona el embrague de una transmisión manual: disco, placa de presión, muelle de diafragma, cojinete, accionamiento hidráulico, juego libre y diagnóstico de fallas."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "embrague"
  - "transmision-manual"
  - "muelle-de-diafragma"
  - "cilindro-maestro-de-embrague"
  - "mantenimiento-automotriz"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/embrague/embrague-automotriz-componentes-funcionamiento-mantenimiento
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Qué es el juego libre del pedal del embrague y por qué importa?"
    a: "Es la distancia que se puede pisar el pedal hasta que el cojinete de desembrague toca el muelle de diafragma. A medida que se desgasta el disco, ese juego se reduce; si llega a cero, el cojinete empieza a empujar el muelle con el pedal suelto, la placa de presión deja de apretar el disco por completo y el embrague patina. Por eso se ajusta en los sistemas con varilla regulable, y en los modelos con cilindro de desembrague autoajustable se mantiene constante."
  - q: "¿Por qué el embrague patina y qué se nota al conducir?"
    a: "Patinar significa que el disco no queda apretado con la fuerza suficiente entre el volante y la placa de presión, por desgaste de la guarnición, contaminación con aceite o un ajuste sin juego libre. Se nota porque las rpm suben sin que el vehículo acelere en proporción, sobre todo al cargar el motor en marchas largas, y puede aparecer olor a quemado. Es un problema progresivo: conviene revisarlo cuando aparecen los primeros síntomas."
  - q: "¿Qué diferencia hay entre este embrague y los de una transmisión automática?"
    a: "El embrague de una transmisión manual es un solo disco seco que el conductor acopla y desacopla con el pedal entre el motor y la caja. Los embragues de una transmisión automática son paquetes de discos que trabajan bañados en aceite y se accionan hidráulicamente desde la unidad de control para cambiar de marcha. Son piezas distintas con funciones distintas; las de la transmisión automática se explican en otro artículo de este sitio."
  - q: "¿Se puede cambiar solo el disco o conviene cambiar el kit completo?"
    a: "Lo habitual es cambiar disco, placa de presión con su tapa y cojinete de desembrague en conjunto, porque todos trabajan sometidos al mismo desgaste y el costo principal es el desmontaje de la caja. Además debe revisarse la cara del volante y el estado del cilindro de desembrague. Qué conviene en su vehículo lo indica el manual de servicio y el estado real de cada pieza."
  - q: "¿Cuándo se necesita purgar el sistema hidráulico del embrague?"
    a: "Cuando entra aire al circuito, por ejemplo tras abrir una línea o cambiar el cilindro maestro o el de desembrague, o si hay una fuga. El aire se comprime en lugar de transmitir la presión; el pedal queda blando o llega al fondo sin que el embrague desacople bien, y los cambios se vuelven difíciles. Se purga con el procedimiento del fabricante, igual que un circuito de frenos."
sources:
  - title: "Manual: embrague, componentes, función, accionamiento y mantenimiento — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/4148-manual-embrague-componentes-funcion-accionamiento-mantenimiento"
related:
  - como-funcionan-los-embragues-en-transejes-automaticos
  - por-que-vibra-la-palanca-de-cambios-de-tu-auto
  - guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios
---

En un vehículo con transmisión manual, el embrague es lo que permite
arrancar suavemente desde cero, cambiar de marcha sin romper los engranajes
y detenerse sin apagar el motor. Es una pieza de desgaste: cada arranque y
cada cambio roza un poco más la guarnición del disco, por lo que conviene
saber cómo está construido y cómo se acciona para interpretar sus síntomas.

Esta guía trata el **embrague de disco seco** de una transmisión manual.
No confundirlo con los embragues de las transmisiones automáticas, que son
paquetes de discos en baño de aceite controlados hidráulicamente; esos se
explican en
[cómo funcionan los embragues en transejes automáticos](/posts/como-funcionan-los-embragues-en-transejes-automaticos/).

Los datos proceden de un curso técnico de transmisión manual y se refieren
a un diseño concreto; el manual de servicio de su vehículo siempre
prevalece.

## Qué debe lograr un embrague

El embrague está ubicado entre el motor y la caja de cambios (transeje o
transmisión manual). Conecta y desconecta la potencia al pisar y soltar el
pedal, y debe cumplir tres requisitos:

1. **Acoplar con suavidad.** Al soltar el pedal, transmite el par poco a
   poco, de modo que el vehículo arranque sin sacudidas.
2. **No patinar una vez acoplado.** Con el pedal suelto debe transmitir toda
   la potencia del motor sin deslizamiento.
3. **Desacoplar rápido y por completo.** Al pisar el pedal debe cortar la
   transmisión con precisión para poder cambiar de marcha.

Mecánicamente se divide en dos partes: la que transmite la potencia (volante,
disco, placa de presión y tapa) y la que la acciona (pedal, cilindro maestro,
cilindro de desembrague, horquilla y cojinete).

<figure class="diagram">
<svg viewBox="0 0 760 400" role="img" aria-label="Corte esquemático de un embrague de disco seco: volante, disco con guarniciones entre el volante y la placa de presión, tapa, muelle de diafragma con su punto de apoyo, cojinete de desembrague, horquilla accionada por el cilindro de desembrague y eje de entrada de la caja" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="ae" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker>
<g id="half" stroke="currentColor" stroke-width="2">
<rect x="60" y="60" width="50" height="140" fill="rgba(100,116,139,0.25)"/>
<rect x="110" y="80" width="12" height="46" fill="rgba(217,119,6,0.55)"/>
<rect x="128" y="80" width="8" height="46" fill="rgba(217,119,6,0.55)"/>
<rect x="122" y="80" width="6" height="105" fill="rgba(100,116,139,0.45)"/>
<rect x="118" y="185" width="34" height="15" fill="rgba(100,116,139,0.45)"/>
<rect x="136" y="76" width="26" height="50" fill="rgba(100,116,139,0.35)"/>
<path d="M110 66 H222 V164" fill="none" stroke-width="4"/>
<path d="M162 112 L250 190" fill="none" stroke-width="4"/>
<circle cx="222" cy="165" r="4" fill="currentColor"/>
<rect x="252" y="178" width="26" height="20" fill="rgba(100,116,139,0.45)"/>
</g>
</defs>
<use href="#half"/>
<use href="#half" transform="translate(0,420) scale(1,-1)"/>
<rect x="84" y="200" width="276" height="20" fill="rgba(100,116,139,0.2)" stroke="currentColor" stroke-width="2"/>
<g stroke="currentColor" stroke-width="2" fill="none">
<path d="M265 178 L356 64"/>
<circle cx="324" cy="104" r="5" fill="currentColor"/>
<rect x="268" y="54" width="44" height="20" fill="rgba(100,116,139,0.25)"/>
<path d="M312 64 H350" marker-end="url(#ae)"/>
</g>
<g stroke="currentColor" stroke-width="1.2" fill="none">
<path d="M85 60 V45"/>
<path d="M118 80 V45"/>
<path d="M150 76 V45"/>
<path d="M190 66 V45"/>
<path d="M236 177 L256 112"/>
<path d="M265 242 V290"/>
<path d="M310 122 H372"/>
<path d="M290 54 V45"/>
<path d="M360 210 H374"/>
</g>
<g fill="rgba(100,116,139,0.12)" stroke="currentColor" stroke-width="1.2">
<circle cx="85" cy="36" r="9"/>
<circle cx="118" cy="36" r="9"/>
<circle cx="150" cy="36" r="9"/>
<circle cx="190" cy="36" r="9"/>
<circle cx="262" cy="104" r="9"/>
<circle cx="265" cy="300" r="9"/>
<circle cx="382" cy="122" r="9"/>
<circle cx="290" cy="36" r="9"/>
<circle cx="384" cy="210" r="9"/>
</g>
<g font-size="12" fill="currentColor" text-anchor="middle">
<text x="85" y="40">1</text>
<text x="118" y="40">2</text>
<text x="150" y="40">3</text>
<text x="190" y="40">4</text>
<text x="262" y="108">5</text>
<text x="265" y="304">6</text>
<text x="382" y="126">7</text>
<text x="290" y="40">8</text>
<text x="384" y="214">9</text>
</g>
<g font-size="14" fill="currentColor">
<text x="470" y="62">1  Volante del motor</text>
<text x="470" y="92">2  Disco con guarniciones</text>
<text x="470" y="122">3  Placa de presión</text>
<text x="470" y="152">4  Tapa del embrague</text>
<text x="470" y="182">5  Muelle de diafragma</text>
<text x="470" y="212">6  Cojinete de desembrague</text>
<text x="470" y="242">7  Horquilla de desembrague</text>
<text x="470" y="272">8  Cilindro de desembrague</text>
<text x="470" y="302">9  Eje de entrada de la caja</text>
</g>
</svg>
<figcaption>Corte esquemático de un embrague de disco seco, con el pedal suelto: el muelle de diafragma aprieta la placa de presión contra el disco y este contra el volante. Al pisar el pedal, la horquilla empuja el cojinete hacia el volante, los dedos del diafragma se desplazan y la placa se separa del disco. Ilustración propia, simplificada y no a escala.</figcaption>
</figure>

## Cómo trabaja la parte que transmite

### Volante, disco y placa de presión

Con el pedal suelto, el **disco de embrague** queda apretado entre la cara del
volante del motor y la **placa de presión**. La fricción de las guarniciones
arrastra al disco, y este, mediante su cubo estriado, hace girar el eje de
entrada de la caja. Al pisar el pedal se retira la fuerza de la placa: el
disco queda libre y la caja se separa del motor.

El disco lleva dos elementos para suavizar el acople:

- **Goma de torsión** (o muelles de torsión) en el núcleo, que se mueve un
  poco en sentido circunferencial y amortigua el impacto rotacional al
  acoplar.
- **Placa amortiguadora** curvada entre las dos caras de fricción, que cede
  cuando el embrague se acopla de golpe y permite que la potencia llegue
  progresivamente.

Si la goma de torsión se desgasta o se rompe, aparece un golpe y un ruido
notorios al acoplar el embrague.

### Tapa del embrague y muelle de diafragma

La **tapa** se atornilla al volante y lleva el resorte que empuja la placa
de presión. Debe estar bien equilibrada, porque gira con el motor, y disipar
bien el calor que se genera al acoplar. El resorte puede ser **helicoidal**
(varios resortes en círculo) o de **diafragma**, un disco de acero cónico con
dedos hacia el centro; este último es el que usa la mayoría de los embragues
actuales. El diafragma se apoya en anillos de pivote y se conecta a la placa
mediante resortes de recuperación. Algunos diseños recientes (tipo DST)
doblan las puntas de la tapa para sujetar el diafragma directamente, y las
correas que transmiten el par entre tapa y placa trabajan en dirección
tangencial.

¿Por qué el diafragma ha desplazado al resorte helicoidal? El curso fuente lo
explica con la gráfica de fuerza contra desplazamiento de la placa:

- **Con el disco nuevo**, para la misma fuerza de apriete, el diafragma
  necesita menos fuerza sobre el pedal que el resorte helicoidal. El pedal
  queda más liviano.
- **Con el disco desgastado**, la placa se acerca al volante. En el resorte
  helicoidal, la fuerza de apriete cae y el embrague empieza a patinar; en
  el diafragma, la fuerza se mantiene casi igual hasta llegar al límite de
  desgaste del disco. El embrague conserva su capacidad de transmitir par
  durante más tiempo.

## Cómo se acciona: del pedal a la placa

### Accionamiento hidráulico

El pedal empuja el pistón del **cilindro maestro**, que genera presión
hidráulica en el líquido, que suele ser líquido de frenos. Esa presión viaja
por una tubería al **cilindro de desembrague**, cuyo pistón empuja una varilla
contra la **horquilla**. La horquilla pivota y mueve el **cojinete de
desembrague** contra los dedos del diafragma.

El cilindro maestro trabaja así: al pisar el pedal, el pistón avanza, una
válvula cierra el paso hacia el depósito y la presión se acumula en la
cámara que va al cilindro de desembrague. Al soltar, el resorte devuelve el
pistón, baja la presión y la cámara vuelve a conectarse con el depósito, que
compensa pérdidas y dilataciones. Es el mismo principio de
[los frenos hidráulicos](/posts/ley-pascal-hidraulica-multiplicacion-fuerzas/).

**Aire en el circuito.** El aire se comprime y no transmite la presión
necesaria: el embrague no desacopla bien o los cambios entran con
dificultad. Se corrige purgando el circuito.

### Accionamiento por cable

Algunos vehículos reemplazan el circuito hidráulico por un **cable** entre
el pedal y la horquilla. Es más simple, pero requiere ajustar el cable a
medida que se desgasta el disco.

### El cojinete de desembrague

Absorbe la diferencia entre la horquilla, que no gira, y el diafragma, que
gira con el motor, para transmitir el movimiento sin fricción excesiva. En
muchos transejes de tracción delantera el cigüeñal y el eje de entrada
quedan ligeramente desplazados, lo que genera ruido por fricción contra el
diafragma. Para evitarlo se usa un **cojinete autocentrante**, que alinea
automáticamente el centro del cojinete con el del diafragma.

### El juego libre del pedal

Es la distancia que se puede pisar el pedal antes de que el cojinete toque
el diafragma. Existe a propósito: garantiza que, con el pedal suelto, el
cojinete no esté apoyado sobre los dedos. Al desgastarse el disco, la punta
del diafragma se desplaza y el juego se reduce; si llega a cero, el embrague
patina.

Hay dos soluciones de diseño:

- **Varilla regulable**: el juego libre se ajusta con la longitud de la
  varilla del cilindro de desembrague; la altura del pedal se regula con el
  perno de tope del pedal.
- **Cilindro de desembrague autoajustable**: un resorte mantiene la varilla
  siempre apoyada contra la horquilla, de manera que el juego libre no
  cambia con el desgaste. Los modelos actuales lo emplean con frecuencia.

Algunos pedales son de tipo **rotacional**: un resorte, instalado entre el
pedal y su soporte, cambia de dirección al pasar de cierta posición y pasa a
ayudar en vez de oponerse. Así se reduce el esfuerzo en el tramo final.

El mismo curso menciona un sistema automatizado (TFT) de un fabricante, en
el que no hay pedal: una unidad de control y un actuador hidráulico
accionan el embrague al cambiar de marcha. Es un caso particular, y no es
lo habitual.

## Diagnóstico de fallas

El curso fuente es una descripción de componentes y no trae una tabla de
averías; la siguiente es la relación habitual entre síntoma y causa, que debe
confirmarse siempre con medición y con el manual del vehículo.

| Síntoma | Causas probables | Qué revisar |
|---|---|---|
| Patina: rpm suben pero el vehículo no acelera | Guarnición gastada, aceite o grasa en el disco, juego libre nulo, diafragma debilitado | Juego libre, fugas de aceite (retén del cigüeñal o de la caja), espesor del disco |
| No desacopla (la marcha raspa o no entra) | Aire en el sistema hidráulico, fuga en el cilindro, cable estirado, disco deformado o pegado | Nivel y purga, cilindros, recorrido de la horquilla |
| Pedal blando o que se queda abajo | Aire, fuga o cilindro maestro con sellos gastados | Nivel del depósito, fugas, humedad en el cilindro de desembrague |
| Vibración o trepidación al arrancar | Superficie del volante irregular, disco con guarnición contaminada, soportes del motor, goma de torsión dañada | Volante, disco, soportes |
| Ruido al pisar el pedal | Cojinete de desembrague gastado | Escuche con el pedal pisado y suelto |
| Ruido en ralentí que desaparece al pisar | Rodamiento de la caja o del eje de entrada, no siempre del embrague | Comparar con y sin pedal pisado |
| Golpe al acoplar | Goma o muelles de torsión del disco desgastados, estrías sueltas | Disco, estrías del eje |
| Pedal duro | Pedal o pivotes sin lubricar, cable en mal estado, resorte de ayuda defectuoso | Pivotes, cable |

### Comprobaciones básicas

1. **Altura y juego libre del pedal.** Compare con el valor del manual. Con
   el motor apagado, presione el pedal hasta sentir la resistencia del
   diafragma y mida el recorrido.
2. **Estado del líquido.** Nivel en el depósito, color y fugas en el cilindro
   maestro, en el de desembrague y en las tuberías. Un nivel que baja sin fuga
   visible exterior puede indicar fuga interna hacia el pedal.
3. **Prueba de patinaje.** Se hace en un lugar seguro: con el freno de
   estacionamiento aplicado, una marcha larga engranada y el motor a bajas
   revoluciones, suelte el pedal con suavidad; un embrague en buen estado
   debe hacer que el motor se detenga. Si el motor sigue girando, patina.
4. **Prueba de desacople.** Con el motor en marcha y el vehículo detenido,
   pise el pedal a fondo y engrane la primera y la marcha atrás; deben
   entrar sin raspar. Si no, el embrague no corta del todo.

## Notas para un reemplazo

- Cambie en conjunto disco, placa con tapa y cojinete; revise la cara del
  volante (marcas de calor, rayas, alabeo) y repárela o cámbiela según el
  manual.
- Inspeccione el cojinete piloto del cigüeñal (si lo tiene), las estrías del
  eje de entrada y el retén delantero de la caja: un retén con fuga
  contaminará el disco nuevo.
- Mantenga el disco **limpio y sin grasa** en las guarniciones. Aplique una
  película delgada de grasa solo en las estrías del cubo y en los puntos de
  la horquilla que indique el fabricante.
- Centre el disco con una herramienta de alineación antes de apretar la
  tapa: si no queda centrado, la caja no entra.
- Apriete los pernos de la tapa en cruz y en etapas, al par que dice el
  manual.
- Después del montaje, compruebe el juego libre y purgue el circuito
  hidráulico si se abrió.

## Errores comunes

- **Apoyar el pie en el pedal al conducir.** Mantiene el cojinete en contacto
  con el diafragma y desgasta ambos.
- **Mantener el vehículo detenido en pendiente con el embrague.** Es un
  desgaste innecesario; use el freno.
- **Cambiar solo el disco** y dejar un diafragma o un cojinete en mal
  estado.
- **Ignorar una fuga de aceite** antes de montar el embrague nuevo.
- **No purgar** tras abrir el circuito, o purgar con el depósito vacío.
- **Confundir causas de ruido**: lo que parece embrague a veces es el
  rodamiento de la caja o un soporte del motor.

## Para seguir leyendo

Si quiere ver el contraste, lea sobre los
[embragues de una transmisión automática](/posts/como-funcionan-los-embragues-en-transejes-automaticos/).
Para entender el origen de vibraciones en la palanca, vea
[por qué vibra la palanca de cambios](/posts/por-que-vibra-la-palanca-de-cambios-de-tu-auto/).
La lubricación de la caja está en
[lubricantes para caja de cambios](/posts/guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios/),
y la parte hidráulica del accionamiento comparte principios con el
[sistema de frenos](/posts/funcionamiento-del-sistema-de-frenos-principios-hidraulicos-y-fallos/).

**Fuentes:** curso técnico sobre transeje manual y embrague publicado en
[Mecánico Automotriz](https://www.mecanicoautomotriz.org/4148-manual-embrague-componentes-funcion-accionamiento-mantenimiento).
Las secciones de diagnóstico y reemplazo son orientativas y no figuran en el
curso. Prevalece el manual de servicio del vehículo.

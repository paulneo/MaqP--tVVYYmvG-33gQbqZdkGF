---
title: "Mantenimiento del motor Deutz FL 912 y FL 413: aceite, compresión y culata"
published: 2026-11-15
draft: false
featured: false
description: "Guía de mantenimiento de motores Deutz FL 912 y FL 413 refrigerados por aire: arranque, aceite, presión de cárter, filtro de aire, aletas, compresión, culata y juego axial."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "deutz"
  - "motor-diesel-refrigerado-por-aire"
  - "mantenimiento-motor-diesel"
  - "prueba-de-compresion"
  - "presion-de-carter"
  - "cambio-de-aceite"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/motores-diesel/mantenimiento-motor-deutz-aceite-compresion-culata
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué indica una presión de cárter alta en un motor Deutz refrigerado por aire?"
    a: "Indica que pasa más gas de combustión de la cámara al cárter, es decir, que hay blow-by. Las causas habituales son anillos y cilindros desgastados, anillos pegados o un respiradero tapado. El curso Deutz da como valor normal 60 mm de columna de agua, medido con el motor caliente, a máximas revoluciones y plena carga, con una columna de agua conectada en la tapa de llenado de aceite. Una lectura claramente superior justifica complementar con una prueba de compresión."
  - q: "¿Cuándo se agrega aceite dentro del cilindro durante la prueba de compresión?"
    a: "Cuando un cilindro da una lectura baja y hay dudas sobre la causa. Se vierten unos 5 cc de aceite de motor por el orificio de la bujía de precalentamiento y se repite la medición. Si la presión sube, el aceite está sellando temporalmente la holgura de los anillos, por lo que el problema está en la unidad de potencia (cilindro, pistón, anillos). Si casi no cambia, el escape de presión ocurre por las válvulas."
  - q: "¿Se puede cambiar culata y cilindros para recuperar un motor gastado por uso?"
    a: "No. El curso Deutz es explícito: el cambio de culata y unidad de potencia sirve para reparar un motor dañado en alguno de sus componentes, nunca para recuperar uno desgastado de forma natural. Con cojinetes de bancada y de biela ya gastados, una unidad de potencia nueva aumenta la carga sobre ellos y puede dañar gravemente el cigüeñal."
  - q: "¿Por qué hay que lavar las aletas de refrigeración en sentido contrario al flujo del aire?"
    a: "Porque el polvo y el aceite que se acumulan entre aletas se compactan en el sentido en que el aire los empuja. Si se lava en el mismo sentido, el agua a presión los empuja más adentro. Lavar contra el flujo, de adentro hacia afuera, los desprende por donde entraron. Una aleta sucia reduce la transferencia de calor y en un motor sin líquido refrigerante eso se nota rápido en la temperatura de culata y de aceite."
  - q: "¿Qué aceite usa un Deutz FL 912 o FL 413 y cada cuánto se cambia?"
    a: "El curso Deutz indica aceites con clasificación API CD/CF4 para estos motores y pide elegir la viscosidad según la temperatura ambiente al arranque. El intervalo no es un número fijo: lo marca el análisis de aceite de cada faena y nunca puede superar lo que indica el fabricante. Como la nomenclatura API evoluciona, conviene confirmar en el manual Deutz del motor qué especificaciones vigentes equivalen a las del curso."
sources:
  - title: "Curso de capacitación técnica: motor Deutz (Deutz Service Training, motores FL 912 W y FL 413 FW/B)"
    url: "https://www.maquinariaspesadas.org/blog/167-curso-capacitacion-tecnica-motor-deutz"
  - title: "API — Engine oil classifications (categorías de aceite para motores diésel)"
    url: "https://www.api.org/"
related:
  - aceite-motor
  - sistemas-lubricacion
  - clasificaciones-api-sae-iso
---

Un motor refrigerado por aire como el Deutz FL 912 o el FL 413 no tiene
radiador, ni líquido, ni termostato. Todo el calor que no sale por el
escape lo evacúan el **aire** que mueve el ventilador y el **aceite**
del cárter. Eso explica por qué el mantenimiento de estos motores gira
alrededor de tres cosas: aire limpio de entrada, aletas libres de
suciedad y aceite en buen estado. Descuida una y las otras dos pagan
la cuenta.

Esta guía reorganiza el material de mantenimiento y reparación del
curso de capacitación Deutz Service Training: arranque, puntos de
medición, aceite, presión de cárter, filtro de aire, limpieza de aletas,
prueba de compresión, cambio de culata y unidad de potencia, juego
axial del cigüeñal y una tabla de control. Todos los valores numéricos
provienen de ese curso y se atribuyen como tal. **El manual oficial de
Deutz para tu motor y número de serie siempre prevalece.** Donde el
curso no da un dato, lo digo.

## Antes de arrancar: precalentamiento y puntos de medición

### Arranque en frío y bujías de precalentamiento

El procedimiento del curso describe una secuencia en dos tiempos. Primero
se energiza la etapa de precalentamiento hasta que el elemento
indicador (rotulado "R1" en el esquema) alcance la incandescencia.
Después, al enviar la señal de arranque, se alimentan las bujías de forma
directa y se activa un circuito de **sobreinyección** que entrega más
combustible durante el giro del motor de arranque.

El curso lista los beneficios de respetar esta secuencia:

- Mejor respuesta a bajas temperaturas.
- Menos humo blanco en frío.
- Menos fallas en los arranques.
- Menos averías de alternador y más vida útil de las baterías.

La lógica es simple. Un arranque que no prende a la primera obliga a
insistir con el motor de arranque, y cada intento descarga la batería y
carga de trabajo al alternador. Precalentar bien evita esos intentos
fallidos. En altitud (minería andina, altiplano) y en madrugadas frías,
este paso deja de ser opcional. Para el panorama completo del tema,
revisa [precalentamiento y poscalentamiento en motores
diésel](/posts/pre-poscalentamiento-motores-diesel-clave-para-un-arranque-eficiente-y-duradero/).

### Dónde se mide la temperatura

En estos motores la temperatura se vigila con sensores instalados en
la culata (o culatas). El curso muestra un conmutador térmico, un
detector de temperatura y los indicadores de tablero, para 12 V y 24 V.
En el cuadro de referencia aparecen los valores 170 °C para el FL 912 W
y 185 °C para el FL 413 FW; el curso no aclara en el texto si es el
punto de actuación del conmutador, por lo que esa lectura debes
confirmarla en el manual.

Sobre la ubicación:

- En motores en **V**, para aplicaciones de minería el curso indica que
  son necesarios los cuatro puntos: dos con detector de temperatura y
  dos con conmutador térmico.
- En motores **en línea** basta un punto con detector y otro con
  conmutador térmico.
- El elemento de control de temperatura de aceite tiene dos terminales:
  el ancho corresponde a un conmutador térmico (para luz o alarma) y el
  angosto es un detector que se conecta a un manómetro o indicador.

No confundas los dos terminales al reemplazar un sensor: conectar el
indicador al conmutador es una causa clásica de "el medidor no marca
nada" que se atribuye erróneamente al instrumento.

## Aceite lubricante: especificación, asentamiento y consumo

### Qué aceite usar

Para los motores Deutz refrigerados por aire y aceite, el curso exige
aceites con clasificación **API CD/CF4**, tanto en motores de aspiración
natural como turbocargados. La viscosidad se elige según la
**temperatura ambiente al momento de arrancar**, no según la temperatura
de trabajo.

Dos advertencias prácticas para Latinoamérica:

1. Las categorías API cambian con el tiempo. Una clasificación como CF-4
   puede estar superada por categorías más recientes. Confirma con el
   manual Deutz qué especificación vigente es la equivalente.
2. En faenas con ciclos de temperatura muy amplios (noches bajo cero y
   mediodías con sol en altura) revisa el rango de viscosidad antes de
   comprar a granel. Para entender las siglas, consulta
   [clasificaciones API, SAE e ISO](/posts/clasificaciones-api-sae-iso/) y
   [aceite de motor](/posts/aceite-motor/).

### Consumo normal de aceite

Todo motor de combustión consume aceite: la película que sella entre
anillos y cilindro se quema en parte en cada ciclo. El curso considera
normal un consumo de aceite de **0,3 % a 0,7 % del consumo de
combustible**.

Un ejemplo para ponerlo en perspectiva (cálculo propio, referencial): un
motor que consume 20 litros de combustible por hora tendría un consumo
normal de aceite de aproximadamente 0,06 a 0,14 litros por hora. Si tu
máquina rebasa esa banda de forma sostenida, ya hay un síntoma que
investigar con presión de cárter y compresión.

### Asentamiento: por qué el motor nuevo necesita trabajo real

Los motores modernos requieren menos asentamiento que los antiguos,
porque el diseño y los lubricantes son mejores. Aun así, el curso
señala que el consumo de aceite puede variar durante el asentamiento y
que debería estabilizarse después de unas **150 a 200 horas** de trabajo.
Si luego sigue alto pero va disminuyendo, hay que continuar el
asentamiento y **no desmontar la unidad**.

El caso problemático es la **carga baja constante**. Un motor que casi
nunca trabaja exigido no asienta bien en un tiempo razonable (alrededor
de 200 horas). Los anillos de pistón nunca terminan de ubicarse; el
rayado del rectificado (honing) de las paredes del cilindro se llena de
depósitos de carbón y la superficie queda pulida como un espejo. En ese
estado el aceite ya no se retiene en las paredes: se "bombea" a la
cámara y se quema parcialmente, con humo, humedad acumulada y fugas en
las empaquetaduras. Detectado a tiempo, se corrige operando a carga
completa en el equipo o en un dinamómetro. De lo contrario, hay que
bruñir los cilindros y reanillar los pistones.

La lección práctica: un generador o una bomba con motor Deutz que
trabaja al 20 % de su capacidad no está "cuidando el motor". Lo está
dañando. Dale ciclos de carga real.

### Cambio de aceite y filtros, paso a paso

El objetivo es retirar el aceite que ya cumplió su vida útil según el
análisis de cada faena, sin pasar nunca el intervalo del fabricante.
El procedimiento del curso, reorganizado:

1. Lleva el motor a **temperatura de trabajo**. El aceite caliente
   fluye mejor y arrastra en suspensión los contaminantes.
2. Retira el tapón o tapones del cárter y los filtros de aceite.
3. Deja escurrir unos **15 minutos**.
4. Monta **filtros nuevos llenos de aceite**, para que la bomba no
   trabaje en seco al arrancar mientras se llenan.
5. Coloca los tapones y llena el cárter hasta la **marca superior** de
   la varilla.
6. Arranca unos minutos y **vuelve a controlar el nivel**, porque el
   aceite que llena el filtro y los conductos baja la varilla.

En los motores **F10/12L y 413 FW** el curso advierte que hay que sacar
siempre los tapones 1 y 2, porque el cárter tiene **dos cámaras
separadas**. Olvidar una significa dejar aceite viejo y llenar de más.

Sobre el filtro: el sistema es de **flujo completo**. Todo el aceite que
va a los componentes móviles pasa por el filtro, y cada filtro lleva una
**válvula diferencial de presión** (bypass) que desvía el aceite
alrededor del elemento cuando está obstruido. Es una protección contra
quedarse sin lubricación, pero con la válvula abierta el aceite pasa sin
filtrar. Por eso un filtro tapado no se "aguanta" hasta el siguiente
servicio. Para entender los intervalos y qué mide un análisis, revisa
[intervalos de cambio y contaminación del
aceite](/posts/intervalos-cambio-contaminacion-aceite/) y [análisis SOS
del aceite](/posts/analisis-sos-aceite-lubricante/). El panorama general
del circuito está en [sistemas de lubricación](/posts/sistemas-lubricacion/).

### Presiones de aceite de referencia

El curso entrega estas presiones de aceite, medidas a **90 °C**:

| Condición | FL 912 W | FL 413 FW/B |
|---|---|---|
| Ralentí, mínima | 0,5 bar (650 rpm) | 1,0 bar (600 rpm) |
| Ralentí, normal | 2 bar (650 rpm) | 1,2 a 2 bar (600 rpm) |
| Régimen alto, normal | 4,5 a 6 bar (2300 a 2500 rpm) | 4,5 a 5 bar (2200 a 2500 rpm) |

Fuente: Deutz Service Training, datos generales de motores (pp. 91 y 92
del PDF). Verifica el valor con el manual de tu serie.

## Presión de cárter: lo que dice el blow-by

Durante la combustión una pequeña parte del aire comprimido y de los
gases pasa por los anillos hacia el cárter. Ese gas escapa por el
respiradero. Mientras los anillos y cilindros están sanos, la cantidad
es pequeña. Cuando se desgastan, **sube**. Es la forma más barata de
estimar el estado de la unidad de potencia sin desarmar nada.

El curso describe el método: se conecta una **columna de agua** a la
tapa de llenado de aceite y, con el motor **caliente, a máximas rpm y
plena carga**, se mide el desplazamiento de la columna. El valor normal
es de **60 mm de columna de agua (mmca)**.

| Lectura | Qué sugiere | Siguiente paso |
|---|---|---|
| Cerca de 60 mmca | Anillos y cilindros en estado normal | Seguir el programa de mantenimiento |
| Claramente superior | Más blow-by: desgaste o anillos pegados | Prueba de compresión con y sin aceite |
| Alta con respiradero obstruido | Presión atrapada, no necesariamente desgaste | Revisar y limpiar el respiradero primero |

La tercera fila es criterio de taller (no del curso), pero evita un
error caro: un respiradero tapado eleva la presión del cárter y puede
confundirse con desgaste, además de empujar aceite hacia sellos y
empaquetaduras.

## Aire de combustión y de refrigeración

### Filtros de aire: aceite, seco y seco con prefiltro

El curso compara tres tipos de depurador, con eficiencias indicativas
tal como las publica:

| Tipo | Eficiencia (según el curso) | Ventaja | Desventaja |
|---|---|---|---|
| Baño de aceite | Cerca de 98 % del polvo | Costo bajo; no hay elemento que cambiar, solo limpieza | Menos eficiente; el rendimiento baja si cae la velocidad del motor |
| Seco | 99,9 % de las impurezas | Eficiencia casi total a cualquier velocidad | El elemento se cambia: costo mayor |
| Seco con prefiltro (ciclónico) | 99 % del total | Los tubos ciclónicos eliminan el polvo más pesado y alargan la vida del elemento | Más complejo; los residuos se depositan en el colector del prefiltro |

En el filtro de **baño de aceite**, el aire entra por el tubo central a
una velocidad que arrastra gotas de aceite hacia una malla exterior; la
malla humedecida atrapa el polvo y deja pasar el aire limpio. El
servicio consiste en limpiar, no en cambiar un elemento. Como práctica
general de taller (el curso no detalla estos pasos, y el manual del
fabricante manda): retira el aceite sucio y el lodo del fondo del
recipiente, lava malla y cuerpo, y rellena con aceite limpio hasta la
marca de nivel. Un nivel por encima o por debajo de la marca reduce la
eficiencia o arrastra aceite a la admisión.

### Siete pasos que el curso pide al cambiar un elemento seco

Aunque el curso presenta estos pasos para el filtro seco, la disciplina
aplica a cualquier depurador:

1. Sacar el elemento usado con suavidad.
2. Limpiar con cuidado el alojamiento (la suciedad que queda dañará el
   motor).
3. Limpiar las superficies de sellado.
4. Revisar el elemento usado: una marca de polvo en el lado limpio
   indica fuga o sello deficiente.
5. Presionar el sello para verificar que está elástico.
6. Comprobar que el sello hermetice suavemente.
7. Verificar que ductos y conexiones sean herméticos: flanges,
   abrazaderas y pernos.

Y tres prohibiciones: no retirar el filtro "para inspeccionarlo" (la
suciedad de los sellos pasa al lado limpio), **nunca golpear** el
elemento para limpiarlo, y no usar un elemento inadecuado, aunque a
simple vista parezca igual.

### Indicador de restricción y contrapresión de escape

El indicador de restricción se instala **después del depurador** y antes
del turbocompensador de altura (o antes del múltiple en motores de
aspiración natural), y solo sirve con filtros **secos**. Puede ser de
diafragma (cierra un circuito eléctrico para una luz o alarma) o
mecánico (un émbolo, generalmente rojo, visible en una ventana). El
curso fija una restricción máxima de **650 mmca** para motores de más de
tres cilindros.

En el lado del escape se mide la **contrapresión** con el motor a plena
carga y rpm. Si no se puede aplicar carga, se mide a máximas rpm y el
valor se multiplica por 2,0. Los máximos del curso son, en pulgadas de
columna de agua: 20" para motores de dos cilindros, 25" para tres, y 30"
para cuatro o más. Un escape restringido limita el aire disponible para
la siguiente combustión y se traduce en temperatura, humo negro y
pérdida de potencia. En motores V6 la lectura pulsa y se toma el
promedio.

### Aire de refrigeración y limpieza de aletas

Sin aire de refrigeración limpio, el motor se sobrecalienta. Dos
referencias del curso:

- La **presión del aire de ventilación** se mide con una columna de
  agua, perforando 2 mm en el centro de la tapa superior. Valor normal:
  **110 mmca**.
- La temperatura del aire que entra al ventilador no debe superar en
  **10 °C** la temperatura ambiente. Si el motor aspira su propio aire
  caliente (recirculación), se pierde margen térmico.

Para la **limpieza**, el curso establece una secuencia opuesta al flujo
del aire:

1. Desmontar la tapa superior.
2. Desmontar las tapas laterales de cilindros.
3. Aplicar agua a presión entre cilindros.
4. Aplicar agua a presión a los ductos de ventilación de las culatas.
5. Aplicar agua a presión en los paneles de los radiadores de aceite
   del motor y del sistema hidráulico.
6. Repetir los pasos 3 a 5 de adentro hacia afuera.
7. Lavado general interior y exterior.

El criterio de término es práctico: los pasos 3 a 6 se dan por
cumplidos cuando el agua pasa sin dificultad entre las aletas. En
canteras y minas el polvo se mezcla con aceite y forma una costra; un
desengrasante previo ayuda, pero cuida de no mojar ni arrastrar agua
hacia el sistema eléctrico y las tomas de aire.

## Prueba de compresión

La prueba de compresión diagnostica el conjunto cilindro-válvulas.
Funciona bien junto con la presión de cárter.

### Condiciones previas del curso

- Motor frío, detenido unas 7 horas (según indica el curso).
- Baterías en buen estado y filtro de aire en buen estado.
- Válvulas reguladas.
- Poner en marcha el motor unos 3 minutos aproximadamente.

### Procedimiento

1. Desmontar todas las bujías de precalentamiento.
2. Colocar el parador de motor en posición de parada.
3. Soltar todas las cañerías de inyección.
4. Medir las rpm de arranque antes y después de la prueba. El rango
   normal que da el curso es de **150 a 200 rpm**.
5. Instalar una **bujía falsa** (adaptador) en el cilindro a controlar
   y conectar el compresímetro (rango sugerido de 10 a 40 bar).
6. Girar con el motor de arranque hasta que la lectura se estabilice,
   unos 5 segundos.
7. Repetir cilindro por cilindro y comparar con la especificación.

Valores de referencia del curso (datos generales): relación de
compresión **19:1** y presión de compresión **25 a 30 bar** para el
FL 912 W; **19,5:1** y **25 a 35 bar** para el FL 413 FW/B. El curso
agrega una **pérdida de compresión de alrededor de 10 % por cada 1000
msnm**, dato esencial en altura: en una faena a 3000 m una lectura
sensiblemente menor que a nivel del mar no indica falla por sí sola.

### Qué hacer con una lectura baja

<figure class="diagram">
<svg viewBox="0 0 760 350" role="img" aria-labelledby="mdc-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="mdc-d1-title">Diagrama de decisión de la prueba de compresión con 5 centímetros cúbicos de aceite: si la lectura sube, falla la unidad de potencia; si no cambia, fallan las válvulas</title>
<defs>
<marker id="mdc-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#374151"/></marker>
</defs>
<rect x="0" y="0" width="760" height="350" rx="14" fill="#f3f4f6"/>
<rect x="210" y="16" width="340" height="44" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="380" y="43" text-anchor="middle" font-size="15" font-weight="bold" fill="#1f2937">Lectura baja en un cilindro</text>
<line x1="380" y1="60" x2="380" y2="88" stroke="#374151" stroke-width="2" marker-end="url(#mdc-arrow)"/>
<rect x="210" y="90" width="340" height="62" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="380" y="116" text-anchor="middle" font-size="14" fill="#1f2937">Agregar unos 5 cc de aceite de motor</text>
<text x="380" y="136" text-anchor="middle" font-size="14" fill="#1f2937">por el orificio de la bujía incandescente</text>
<path d="M380 152 V180 H195 V208" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#mdc-arrow)"/>
<path d="M380 180 H565 V208" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#mdc-arrow)"/>
<rect x="30" y="210" width="330" height="96" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<text x="195" y="240" text-anchor="middle" font-size="15" font-weight="bold" fill="#0c4a6e">La lectura sube</text>
<text x="195" y="266" text-anchor="middle" font-size="14" fill="#1f2937">Unidad de potencia desgastada</text>
<text x="195" y="286" text-anchor="middle" font-size="14" fill="#1f2937">o dañada (cilindro, pistón, anillos)</text>
<rect x="400" y="210" width="330" height="96" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="565" y="240" text-anchor="middle" font-size="15" font-weight="bold" fill="#78350f">La lectura casi no cambia</text>
<text x="565" y="266" text-anchor="middle" font-size="14" fill="#1f2937">Válvulas en mal estado</text>
<text x="565" y="286" text-anchor="middle" font-size="14" fill="#1f2937">(asiento o sellado)</text>
<text x="380" y="334" text-anchor="middle" font-size="13" fill="#374151">Contrastar siempre con la presión de cárter. Esquema propio.</text>
</svg>
<figcaption>Lógica de la prueba de compresión húmeda descrita en el curso Deutz. El aceite sella temporalmente los anillos: si la presión sube, el escape estaba en la unidad de potencia. Ilustración propia.</figcaption>
</figure>

El razonamiento es de pura mecánica. El aceite que se vierte llena la
holgura entre anillos y cilindro durante unos ciclos. Si la fuga estaba
ahí, la presión mejora. Si la fuga estaba en el asiento de válvula, el
aceite no la sella y la lectura casi no cambia. El curso subraya que la
presión de cárter es importante para confirmar este diagnóstico. Para
entender el desgaste de la unidad de potencia, revisa [pistones, anillos
y camisas: desgaste en motores
diésel](/posts/pistones-anillos-camisas-motor-diesel-desgaste/).

## Cambio de culata y unidad de potencia

El curso advierte primero cuándo **no** hacerlo: esta operación recupera
un motor que sufrió daño en algún componente, **no** uno desgastado de
forma natural. Montar una unidad de potencia nueva sobre cojinetes
gastados sobrecarga los descansos y daña gravemente el cigüeñal. Antes de
comprar cilindros y pistones, hay que medir la condición del motor.

### Resumen del procedimiento

| Etapa | Qué se hace | Por qué importa |
|---|---|---|
| Preparación | Lavar el motor, con atención a la zona a intervenir; desmontar los componentes afectados | Que la suciedad no caiga al interior abierto |
| Limpieza | Limpiar el asiento del cilindro en el bloque y los hilos de los pernos de culata | Un asiento sucio impide el sellado; un hilo sucio falsea el apriete |
| Sellos | Montar un sello (o-ring) nuevo en el bloque | Nunca reutilizar sellos de la base |
| Pistón y anillos | Montar los anillos respetando el orden y con las marcas hacia arriba; aceite en la zona de anillos y falda; verificar que giren libres en sus ranuras; distribuir las aberturas según la figura del manual | Anillos mal ubicados pierden compresión y consumen aceite |
| Cilindro | Con la anillera (compresor de anillos), llevar el cilindro hacia abajo suavemente sobre el pistón | Evita romper un anillo |
| Culata | Colocar la laina de culata según especificación y asentar la culata sobre el cilindro: debe asentar libremente | Si "pelea", algo está mal puesto |
| Holgura | Medir con estaño (ver abajo) y corregir con la laina | Define la altura real pistón a culata |
| Cierre | Montar la culata definitiva, numerar los pernos, apretar según especificación, montar el soporte de balancines y regular las válvulas | Un apriete fuera de secuencia deforma la culata |

El curso no incluye en estas páginas el torque de los pernos de culata
ni la holgura objetivo: ambos están "según especificaciones", por lo que
debes tomarlos del manual de tu motor.

### La medición con estaño: cómo se define la holgura

Este paso es el corazón de la reparación. La idea es medir la distancia
real entre la cabeza del pistón y el fondo de la culata, que no se
puede medir con regla porque está cerrada.

<figure class="diagram">
<svg viewBox="0 0 760 340" role="img" aria-labelledby="mdc-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="mdc-d2-title">Corte esquemático de la unidad de potencia: culata, laina de culata, cilindro, pistón con trozos de estaño sobre la cabeza, laina de base y bloque</title>
<rect x="0" y="0" width="760" height="340" rx="14" fill="#f3f4f6"/>
<rect x="130" y="20" width="240" height="58" rx="6" fill="#d1d5db" stroke="#374151" stroke-width="2"/>
<rect x="130" y="86" width="240" height="8" fill="#b45309" stroke="#374151" stroke-width="1"/>
<rect x="150" y="102" width="24" height="152" fill="#9ca3af" stroke="#374151" stroke-width="2"/>
<rect x="326" y="102" width="24" height="152" fill="#9ca3af" stroke="#374151" stroke-width="2"/>
<rect x="180" y="150" width="140" height="100" rx="4" fill="#e5e7eb" stroke="#374151" stroke-width="2"/>
<rect x="205" y="140" width="16" height="10" fill="#0369a1" stroke="#0c4a6e" stroke-width="1"/>
<rect x="279" y="140" width="16" height="10" fill="#0369a1" stroke="#0c4a6e" stroke-width="1"/>
<rect x="140" y="256" width="220" height="8" fill="#b45309" stroke="#374151" stroke-width="1"/>
<rect x="120" y="266" width="260" height="54" rx="6" fill="#d1d5db" stroke="#374151" stroke-width="2"/>
<text x="250" y="298" text-anchor="middle" font-size="14" fill="#1f2937">Bloque del motor</text>
<line x1="370" y1="48" x2="400" y2="48" stroke="#374151" stroke-width="1.5"/>
<text x="410" y="53" font-size="14" fill="#1f2937">Culata</text>
<line x1="370" y1="90" x2="400" y2="98" stroke="#374151" stroke-width="1.5"/>
<text x="410" y="103" font-size="14" fill="#1f2937">Laina de culata (ajuste fino)</text>
<line x1="295" y1="145" x2="400" y2="146" stroke="#374151" stroke-width="1.5"/>
<text x="410" y="151" font-size="14" fill="#1f2937">Estaño aplastado: mide la holgura</text>
<line x1="320" y1="200" x2="400" y2="198" stroke="#374151" stroke-width="1.5"/>
<text x="410" y="203" font-size="14" fill="#1f2937">Pistón</text>
<line x1="350" y1="230" x2="400" y2="244" stroke="#374151" stroke-width="1.5"/>
<text x="410" y="249" font-size="14" fill="#1f2937">Cilindro</text>
<line x1="360" y1="260" x2="400" y2="286" stroke="#374151" stroke-width="1.5"/>
<text x="410" y="291" font-size="14" fill="#1f2937">Laina de base del cilindro</text>
</svg>
<figcaption>Esquema genérico, no a escala: la holgura pistón-culata se ajusta primero con la laina de culata y, si no alcanza, con la laina de la base del cilindro. Ilustración propia.</figcaption>
</figure>

El procedimiento del curso, reorganizado:

1. Colocar trozos de **estaño** sobre la cabeza del pistón.
2. Montar la culata con la laina elegida y apretar los pernos solo con
   la **primera etapa** indicada en las especificaciones.
3. Girar el motor **dos vueltas completas a mano**, con la herramienta
   de giro instalada en el amortiguador de vibraciones torsionales
   (damper).
4. Desmontar la culata, retirar los trozos de estaño aplastados y medirlos
   con micrómetro. Se consideran las lecturas **más bajas** y su
   promedio: esa es la distancia entre el pistón y el fondo de la culata.
5. Si no coincide con la especificación, se cambia la **laina de culata**.
   Si con eso no se logra, se puede cambiar la **laina de la base del
   cilindro**.
6. Montar la culata con la laina seleccionada, numerar los pernos y
   apretar según especificación; instalar el soporte de balancines,
   regular válvulas y montar lo que falte.

Girar a mano es clave: si el pistón golpea la culata, lo sentirás en la
herramienta de giro y no en el motor de arranque con la culata ya
apretada. Esa es la razón de hacerlo con la primera etapa y no con el
torque final.

### Apretes de referencia del curso

Del cuadro de apretes del curso, para el **FL 912 W** (verifica en el
manual de tu serie):

| Elemento | Apriete |
|---|---|
| Tapa de válvulas | 10 a 15 Nm |
| Soporte de balancines | 28 a 30 Nm |
| Inyector | 100 a 110 Nm |
| Tuerca central del acople de la bomba de inyección | 60 a 70 Nm |
| Pernos del acople de la bomba de inyección al piñón de accionamiento | 30 Nm |
| Perno central del ventilador | 30 Nm + 90° |

Para el FL 413 FW/B la misma tabla indica, entre otros, 12 a 15 Nm en la
tapa de válvulas, 100 a 110 Nm en el inyector y 50 Nm en los pernos del
acople al piñón. Nota la diferencia entre motores: **no copies valores de
un modelo al otro**. Para el sistema de inyección que acompaña a estos
apretes, mira el artículo hermano sobre el [sistema de combustible
Deutz 912, bomba e
inyectores](/posts/sistema-combustible-deutz-912-bomba-inyectores/).

## Juego axial del cigüeñal

El juego axial es el espacio que tiene el cigüeñal para desplazarse a
lo largo de su eje. Un juego excesivo acaba golpeando los cojinetes de
empuje y afecta el embrague o acople; uno insuficiente los atasca. El
curso pide controlarlo en un motor nuevo o reparado antes del montaje, y
de nuevo **al terminar**, con todo instalado y los soportes del motor
apretados. El valor final debe ser igual al inicial.

Procedimiento:

1. Instalar un comparador de carátula adosado al motor, midiendo en la
   zona del amortiguador (damper).
2. Desplazar el cigüeñal longitudinalmente con una palanca, soltarlo y
   poner el comparador a cero.
3. Aplicar la palanca en sentido opuesto y soltar: la lectura del
   comparador es el juego axial.
4. Comparar con la especificación.

Valores del curso: **FL 912 W**, normal 0,15 a 0,31 mm y límite 0,4 mm;
**FL 413 FW/B**, normal 0,17 a 0,31 mm y límite 0,6 mm. Si después de
montar todo el valor cambió respecto al inicial, algo se desplazó o se
apretó mal durante el armado.

## Tabla de control de mantenimiento

Este cuadro resume qué revisar y con qué criterio. No contiene
intervalos de horas, porque el curso no los fija en las páginas
consultadas: usa el programa del manual Deutz de tu motor y los
resultados de análisis de aceite de tu faena.

| Punto de control | Qué verificar | Criterio (según el curso) |
|---|---|---|
| Arranque | Secuencia de precalentamiento y sobreinyección | Bujías incandescentes antes de dar arranque |
| Temperatura | Sensores de culata y de aceite | Terminales correctos; confirmar umbral en manual |
| Aceite | Clasificación y viscosidad | API CD/CF4 según el curso; viscosidad por temperatura ambiente |
| Consumo de aceite | Litros por hora frente al combustible | 0,3 a 0,7 % del consumo de combustible |
| Presión de aceite | Manómetro a 90 °C | FL 912 W: 2 bar a 650 rpm; 4,5 a 6 bar a 2300 a 2500 rpm |
| Cambio de aceite | Motor caliente, 15 min de escurrido, filtros llenos | Marca superior de varilla; recheck tras arranque |
| Presión de cárter | Columna de agua en tapa de llenado | 60 mmca (caliente, rpm máx., plena carga) |
| Filtro de aire | Sellos, ductos, indicador de restricción | Máx. 650 mmca (más de 3 cilindros, filtro seco) |
| Contrapresión de escape | Plena carga o rpm máx. x 2,0 | 20", 25" y 30" de columna de agua (2, 3 y 4+ cilindros) |
| Aire de refrigeración | Presión y temperatura de entrada | 110 mmca; máx. 10 °C sobre ambiente |
| Aletas y radiadores | Lavado a contraflujo | Agua pasa libre entre aletas |
| Compresión | Compresímetro, bujía falsa | FL 912 W: 25 a 30 bar; FL 413 FW/B: 25 a 35 bar |
| Juego de válvulas (frío) | Admisión / escape | FL 912 W: 0,15 / 0,15 mm; FL 413 FW/B: 0,20 / 0,30 mm |
| Juego axial del cigüeñal | Comparador de carátula | FL 912 W: 0,15 a 0,31 mm, límite 0,4 mm |

Para complementar con el contexto del motor, lee el artículo hermano
sobre los [datos técnicos del motor Deutz 912 refrigerado por
aire](/posts/motor-deutz-912-refrigerado-por-aire-datos-tecnicos/).

## Notas prácticas para Latinoamérica

- **Altitud**: la pérdida de compresión de cerca de 10 % por cada
  1000 msnm que da el curso y el avance de la inyección con la altura
  (el curso menciona un aumento por cada 1000 msnm) deben tenerse en
  cuenta antes de condenar un motor en la sierra o el altiplano.
- **Polvo**: en canteras, minería a cielo abierto y construcción en
  zonas áridas, el filtro de aire y las aletas son el primer punto de
  desgaste. Un filtro con sello deficiente deja pasar más polvo que
  uno saturado.
- **Aceite**: compra en envase sellado de proveedor verificable. Un
  aceite adulterado o de especificación inferior estropea más que un
  intervalo largo.
- **Registro**: anota presión de cárter, presión de aceite y compresión en
  una planilla por equipo. Una lectura aislada dice poco; la tendencia en
  el tiempo, mucho.

## Resumen

En un Deutz refrigerado por aire, el mantenimiento se reduce a vigilar
tres flujos: el **aire** (filtro, restricción, aletas y recirculación),
el **aceite** (especificación, nivel, presión y filtro) y los **gases**
(blow-by en el cárter y compresión en el cilindro). El curso entrega
valores concretos para FL 912 W y FL 413 FW/B, pero esos números son
puntos de partida: el manual del motor y su número de serie mandan. Y la
regla más importante de la reparación: cambiar culata y unidad de
potencia es para componentes dañados, no para rescatar un motor ya
gastado.

Para seguir leyendo: [aceite de motor](/posts/aceite-motor/),
[sistemas de lubricación](/posts/sistemas-lubricacion/),
[clasificaciones API, SAE e ISO](/posts/clasificaciones-api-sae-iso/) y
[pistones, anillos y camisas](/posts/pistones-anillos-camisas-motor-diesel-desgaste/).

**Fuentes**: Deutz Service Training, [Curso de capacitación técnica:
motor Deutz](https://www.maquinariaspesadas.org/blog/167-curso-capacitacion-tecnica-motor-deutz)
(motores FL 912 W y FL 413 FW/B). Valores atribuidos al curso;
verificar siempre en el manual oficial del fabricante.

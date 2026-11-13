---
title: "Mando de traslación y giro de la excavadora Volvo EC210B: reductores y fallas"
published: 2026-11-15
draft: false
featured: false
description: "Cómo funcionan los reductores planetarios de traslación y giro de la EC210B: relaciones, aceite, frenos, juntas flotantes, síntomas de falla y tabla de diagnóstico."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "volvo-ec210b"
  - "mando-final"
  - "reductor-planetario"
  - "motor-de-giro"
  - "motor-de-traslacion"
  - "excavadoras"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/excavadoras/mando-traslacion-giro-excavadora-volvo-ec210b
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Cuánto aceite lleva el reductor de traslación de la EC210B y cada cuánto se cambia?"
    a: "Según el manual de taller de la EC210B, cada reductor de traslación lleva 5,8 litros de aceite de engranajes equivalente a API GL4/GL5 con aditivos EP. El primer cambio se hace a las 500 horas, los siguientes cada 2.000 horas y, tras una reparación, a las 250 horas. En todos los casos, al menos una vez al año. Son valores del manual de esa máquina: verifica siempre el del equipo que tienes enfrente."
  - q: "¿Por qué se vacía el aceite del reductor con la máquina caliente?"
    a: "Porque el aceite caliente es más fluido y arrastra consigo las partículas y la humedad que están en suspensión. Si se espera a que enfríe, parte de ese contaminante se asienta en el fondo de la carcasa y se queda dentro. El manual lo indica expresamente para ambos reductores. Eso sí: se trabaja con cuidado, porque la carcasa puede superar los 60 °C con facilidad y conviene medirla con termómetro en lugar de tocarla."
  - q: "¿Cómo se distingue una fuga por junta flotante de una fuga por tapón o tornillo?"
    a: "Primero se limpia el reductor y se opera unos minutos. Si el aceite sale en el plano de unión o alrededor de un tapón, casi siempre hay un tornillo flojo, un aro tórico dañado o junta líquida mal aplicada. Si sale por el anillo entre la carcasa fija y el cubo giratorio, y el aceite es espeso y con partículas finas, la sospecha es la junta flotante: sus caras de deslizamiento están desgastadas y el conjunto se sustituye completo."
  - q: "¿Qué indica encontrar metal en el aceite del reductor o del motor?"
    a: "Depende del tipo de partícula. Un polvillo fino y brillante tras muchas horas es desgaste normal. Escamas, virutas o lascas indican que hay picaduras en dientes, rodamientos de agujas o pistas de rodamiento. El manual propone, ante metal en el drenaje de la carcasa del motor de giro, sospechar de piezas internas y medir primero el caudal de drenaje y las presiones antes de desarmar a ciegas."
  - q: "¿Puede el freno de giro causar sobrecalentamiento o falta de giro?"
    a: "Sí. El freno de giro es de discos, se aplica por resorte y se libera con presión piloto. Si el émbolo se atasca o los discos se deforman, el freno queda arrastrando: la superestructura gira con dificultad y el motor y el reductor se calientan. Si en cambio los discos o los resortes están gastados, el freno no sostiene la inercia y la torre derrapa al parar. El manual enumera ambas causas por separado."
sources:
  - title: "Manual de taller de la excavadora hidráulica EC210B (Volvo), parte 02 — secciones 4:1 y 4:2: transmisión de potencia"
    url: "https://www.maquinariaspesadas.org/blog/613-manual-taller-excavadora-hidraulica-ec210b-volvo-02"
related:
  - inspeccion-motores-hidraulicos-pistones-desgaste
  - como-detectar-fugas-hidraulicas-en-una-excavadora
  - analisis-sos-aceite-lubricante
---

Un reductor de traslación o de giro trabaja bajo cargas brutales, en
polvo y barro, y casi nadie lo mira hasta que gotea o hace ruido. Sin
embargo, es la última pieza de la cadena de potencia: convierte el giro
rápido de un motor hidráulico de pistones en un giro lento con un par
enorme, capaz de mover una máquina de decenas de toneladas por una rampa o
de arrancar y frenar toda la superestructura.

Esta guía reúne lo que el manual de taller de la **Volvo EC210B**
documenta sobre esos dos conjuntos, y lo explica con criterio de
mecánico: cómo funciona la reducción planetaria, qué aceite y qué
intervalos pide cada reductor, cómo fallan las juntas flotantes y los
rodamientos, qué síntomas ve el operador y cómo ordenar el diagnóstico.
Es un resumen de comprensión, no un procedimiento de desarmado: para
intervenir se usa el manual completo y el número de serie de la máquina.

## Dónde encaja cada conjunto en la cadena de potencia

La EC210B tiene tres conjuntos de este tipo: dos mandos finales de
traslación (uno por oruga) y un mando de giro. Los tres comparten la
misma arquitectura: **motor hidráulico de pistones axiales + reductor
planetario**. Cambian el tamaño, la relación y la forma de frenar.

<figure class="diagram">
<svg viewBox="0 0 800 250" role="img" aria-labelledby="mt-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="mt-d1-title">Ruta de potencia de la traslación: bomba principal, motor hidráulico, reductor planetario de dos etapas y rueda motriz</title>
<rect x="0" y="0" width="800" height="250" rx="14" fill="#f3f4f6"/>
<text x="400" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f2937">Ruta de potencia de la traslación (un lado)</text>
<rect x="20" y="70" width="120" height="76" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="80" y="104" text-anchor="middle" font-size="14" fill="#1f2937">Bomba</text>
<text x="80" y="124" text-anchor="middle" font-size="14" fill="#1f2937">principal</text>
<rect x="175" y="70" width="140" height="76" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="245" y="104" text-anchor="middle" font-size="14" fill="#1f2937">Motor hidráulico</text>
<text x="245" y="124" text-anchor="middle" font-size="14" fill="#1f2937">de pistones</text>
<rect x="350" y="70" width="120" height="76" rx="8" fill="#fde68a" stroke="#374151" stroke-width="2"/>
<text x="410" y="104" text-anchor="middle" font-size="14" fill="#1f2937">Planetario</text>
<text x="410" y="124" text-anchor="middle" font-size="14" fill="#1f2937">1.ª etapa</text>
<rect x="505" y="70" width="110" height="76" rx="8" fill="#fde68a" stroke="#374151" stroke-width="2"/>
<text x="560" y="104" text-anchor="middle" font-size="14" fill="#1f2937">Planetario</text>
<text x="560" y="124" text-anchor="middle" font-size="14" fill="#1f2937">2.ª etapa</text>
<rect x="650" y="70" width="130" height="76" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="715" y="104" text-anchor="middle" font-size="14" fill="#1f2937">Rueda motriz</text>
<text x="715" y="124" text-anchor="middle" font-size="14" fill="#1f2937">(cubo de cadena)</text>
<path d="M140 108 H170" stroke="#b45309" stroke-width="4" fill="none"/>
<path d="M170 100 l8 8 l-8 8 z" fill="#b45309"/>
<path d="M315 108 H345" stroke="#b45309" stroke-width="4" fill="none"/>
<path d="M345 100 l8 8 l-8 8 z" fill="#b45309"/>
<path d="M470 108 H500" stroke="#b45309" stroke-width="4" fill="none"/>
<path d="M500 100 l8 8 l-8 8 z" fill="#b45309"/>
<path d="M615 108 H645" stroke="#b45309" stroke-width="4" fill="none"/>
<path d="M645 100 l8 8 l-8 8 z" fill="#b45309"/>
<text x="245" y="180" text-anchor="middle" font-size="14" fill="#1f2937">Giro rápido, par bajo</text>
<text x="715" y="180" text-anchor="middle" font-size="14" fill="#1f2937">Giro lento, par alto</text>
<text x="410" y="222" text-anchor="middle" font-size="14" fill="#1f2937">Reducción total del manual: 50,5 a 1</text>
</svg>
<figcaption>La traslación convierte caudal y presión en giro rápido, y los dos planetarios lo transforman en giro lento con mucho par. Esquema propio, no a escala.</figcaption>
</figure>

## Traslación: motor, reductor y freno de estacionamiento

### El motor de traslación

El manual describe un motor de **pistones axiales con plato oscilante
variable** y dos posiciones de cilindrada, lo que da dos velocidades de
marcha. Datos de la tabla de especificaciones de la EC210B:

| Dato | Valor del manual |
|---|---|
| Modelo | EM140V |
| Cilindrada (alta/baja velocidad) | 82,4 / 140,5 cm³ por vuelta |
| Presión nominal | 350 kgf/cm² (4.980 psi) |
| Caudal de entrada | 230 L/min |
| Presión de liberación del freno de estacionamiento | 6,0 kgf/cm² (85 psi) |
| Presión de carcasa (normal/pico) | máx. 2 / 7 kgf/cm² |
| Freno de estacionamiento | Discos húmedos, aplicado por resorte y liberado hidráulicamente |

Lo importante no es memorizar las cifras, sino entender la lógica de
cada elemento de la brida trasera:

- **Válvulas de retención**: dejan entrar el aceite al motor y evitan que
  cavite cuando la máquina baja una pendiente más rápido de lo que la
  bomba entrega.
- **Válvula de equilibrio (contrapeso)**: estrangula el retorno del
  motor para que la máquina no se embale por gravedad en una bajada. Es
  la razón por la que una oruga "se va sola" cuando falla.
- **Válvulas de sobrepresión cruzadas**: recortan los picos de presión
  al arrancar y al parar.
- **Válvula de cambio de cilindrada**: cambia el ángulo del plato entre
  baja velocidad con alto par y alta velocidad con bajo par.
- **Freno de estacionamiento**: se aplica solo cuando los carretes de la
  válvula de control están en neutro. Lo sostienen resortes y lo suelta
  la presión.

### El reductor planetario de traslación

Según el manual, es un planetario de **dos etapas**. Estos son los datos
de la tabla de especificaciones:

| Dato | Valor del manual |
|---|---|
| Tipo | Planetario de 2 etapas |
| Relación de reducción | 50,5 |
| Régimen máximo | 48,1 / 28,2 rpm (dos valores, según la velocidad) |
| Aceite de engranajes | 5,8 L (1,5 gal) |
| Tornillos de la reducción | 30 × M16, 27 ± 3 kgf·m (195 ± 22 lbf·ft) |
| Tornillos de la rueda motriz | 22 × M16, 27 ± 3 kgf·m (195 ± 22 lbf·ft) |
| Clase mínima de los tornillos | 10.9 |

La relación de 50,5 a 1 significa que el eje del motor da unas 50 vueltas
por cada vuelta del cubo de la rueda motriz. Por eso un motor que gira
a miles de rpm mueve una oruga a un paso de hombre, y por eso el par
sobre los dientes se multiplica en esa misma proporción. Ese par, más
las cargas de impacto de la oruga, es lo que castiga a los dientes y
rodamientos.

## Cómo funciona una reducción planetaria

Un tren planetario simple tiene cuatro elementos: el **sol**, los
**satélites**, el **portasatélites** y la **corona** (engranaje interno).
Se fija uno, se entra por otro y se sale por el tercero.

<figure class="diagram">
<svg viewBox="0 0 800 340" role="img" aria-labelledby="mt-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="mt-d2-title">Esquema de una etapa planetaria con sol, tres satélites, portasatélites y corona</title>
<rect x="0" y="0" width="800" height="340" rx="14" fill="#f3f4f6"/>
<circle cx="190" cy="165" r="115" fill="#ffffff" stroke="#6b7280" stroke-width="20"/>
<path d="M190 90 L125 202 L255 202 Z" fill="none" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="190" cy="165" r="45" fill="#f59e0b" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/>
<circle cx="190" cy="90" r="30" fill="#60a5fa" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/>
<circle cx="125" cy="202" r="30" fill="#60a5fa" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/>
<circle cx="255" cy="202" r="30" fill="#60a5fa" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/>
<circle cx="190" cy="90" r="4" fill="#1f2937"/>
<circle cx="125" cy="202" r="4" fill="#1f2937"/>
<circle cx="255" cy="202" r="4" fill="#1f2937"/>
<rect x="380" y="62" width="22" height="22" rx="3" fill="#f59e0b" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/>
<text x="414" y="79" font-size="15" fill="#1f2937">Sol: entra el giro rápido del motor</text>
<rect x="380" y="104" width="22" height="22" rx="3" fill="#60a5fa" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/>
<text x="414" y="121" font-size="15" fill="#1f2937">Satélites: engranan con sol y corona</text>
<rect x="380" y="146" width="22" height="22" rx="3" fill="none" stroke="#1f2937" stroke-width="2" stroke-dasharray="4 3"/>
<text x="414" y="163" font-size="15" fill="#1f2937">Portasatélites: sostiene los satélites</text>
<rect x="380" y="188" width="22" height="22" rx="3" fill="#ffffff" stroke="#6b7280" stroke-width="5"/>
<text x="414" y="205" font-size="15" fill="#1f2937">Corona: engranaje interno, fija</text>
<text x="380" y="252" font-size="15" fill="#1f2937">Salida por el portasatélites (lenta, par alto)</text>
<text x="380" y="290" font-size="15" font-weight="bold" fill="#1f2937">i = 1 + Zcorona / Zsol</text>
<text x="380" y="316" font-size="14" fill="#1f2937">Ejemplo ilustrativo: 20 y 60 dientes dan 4 a 1</text>
</svg>
<figcaption>Una etapa planetaria con la corona fija: el sol entra, el portasatélites sale. Dos etapas en serie multiplican sus relaciones. Esquema genérico propio; el diseño exacto de cada reductor cambia (en algunos la carcasa gira y se fija el portasatélites).</figcaption>
</figure>

Por qué se usa este diseño y no un engranaje recto simple:

1. **Reparte la carga**: el par se divide entre varios satélites a la vez
   (tres o cuatro), de modo que cada diente trabaja menos.
2. **Es compacto**: entrada y salida están sobre el mismo eje, y cabe
   dentro del cubo de la rueda motriz o bajo la torre.
3. **Reduce mucho en poco espacio**: con una etapa se logran relaciones de
   3 a 6 a 1. Para llegar a 20 o 50 a 1 se colocan dos etapas en serie.

El manual da las fórmulas con el número de dientes. En la forma simple,
la relación de una etapa con corona fija es 1 + Zcorona/Zsol, y la total
es el producto de las de cada etapa. Para el reductor de giro lo
expresa así: i = (Zr/Zs1 + 1) × (Zr/Zs2 + 1). Si cualquiera de los dos
planetarios pierde un diente o se pica, la relación efectiva no cambia,
pero sí el ruido, el calentamiento y el reparto de la carga.

## Mando de giro: motor, reductor y freno

### Reductor de giro

Su función es multiplicar el par del motor para acelerar y frenar la
superestructura. Es también una caja planetaria de dos etapas, con el
piñón de salida engranando en la corona de giro (el engranaje de dientes
internos de la pista de giro). Datos del manual:

| Dato | Valor del manual |
|---|---|
| Modelo | RGS100/20-00 |
| Relación de reducción | 20,01 |
| Par de salida teórico | 1.045 kgf·m (7.545 lbf·ft) |
| Régimen | 82 rpm |
| Aceite de engranajes | 6,0 L (1,6 gal) |
| Peso seco / húmedo | 189 kg / 195 kg |

Verificación de coherencia que conviene hacer: el motor de giro tiene
un régimen nominal de 1.645 rpm; dividido por 20,01 resulta en unas 82
rpm a la salida. Los datos de la tabla son consistentes entre sí.

### Motor de giro

| Dato | Valor del manual |
|---|---|
| Modelo | M2X120B-CHB |
| Tipo | Plato oscilante fijo, pistones axiales (9 pistones) |
| Cilindrada | 121,6 cm³ por vuelta |
| Presión de alivio | 270 kgf/cm² (3.840 psi) |
| Presión de liberación del freno | 29 kgf/cm² (412 psi) |
| Presión de carcasa | Dentro de 2 kgf/cm² |
| Retardo del freno | 5 s (+3 / -0) |
| Aceite de la carcasa del motor | 0,9 L |

Alrededor del motor hay dos válvulas que explican casi todo el
"carácter" del giro:

- **Válvula de sobrepresión**: limita la presión máxima que el motor
  puede ejercer al acelerar la torre (aquí, 270 kgf/cm²).
- **Válvula amortiguadora de rebote**: al frenar, la inercia de la torre
  intenta seguir empujando al motor, que se convierte en bomba y genera
  una presión en el lado opuesto. Esta válvula retarda el cierre y
  luego iguala las presiones, para que la torre se detenga sin dar un
  tirón hacia atrás. Es el motivo por el que, cuando falla, el operador
  nota un "latigazo" al parar el giro.

### El freno de giro

Es un freno de **discos múltiples, aplicado por resorte y liberado por
presión**. Los discos de fricción van acoplados por estrías al bloque
de cilindros y los discos de acoplamiento a la carcasa del motor.
Cuando la presión piloto se corta, los resortes empujan el émbolo, aprietan los discos y
bloquean el eje. Cuando llega presión piloto, ésta vence los resortes y
suelta el freno.

Dos ideas prácticas que se desprenden de ese diseño:

- Es un freno de **estacionamiento**, no un freno de servicio: el que
  detiene la torre en operación es el circuito hidráulico (con ayuda de
  las válvulas de alivio y amortiguación). El freno de discos solo
  sostiene la máquina cuando ya está detenida, por ejemplo en una
  pendiente.
- Si pierde presión de liberación, se aplica solo. Un freno que no se
  libera por completo se detecta como falta de giro, calor en el motor y
  olor a fricción.

## Aceite de los reductores: tipo, nivel e intervalos

Los dos reductores se lubrican con aceite de engranajes con aditivos de
presión extrema (EP), pero con intervalos y procedimientos distintos.

| Concepto | Reductor de traslación | Reductor de giro |
|---|---|---|
| Clasificación | API GL4/GL5 con aditivos EP | API GL4/GL5, SAE EP 90 o 140 |
| Capacidad | 5,8 L | 6,0 L |
| Primer cambio | 500 h | 500 h |
| Siguientes cambios | cada 2.000 h | cada 1.000 h |
| Tras una reparación | 250 h | 500 h |
| Mínimo calendario | 1 vez al año | 1 vez al año |
| Temperatura de la carcasa | menos de 90 °C en servicio continuo | menos de ambiente + 60 °C |

Atención al contraste: el reductor de giro pide el doble de frecuencia
que el de traslación, y la razón es física. El de giro sufre arranques,
paradas y cambios de sentido constantes con la inercia de toda la torre,
mientras que el de traslación trabaja en regímenes más estables y con
menos ciclos de carga. Pero en traslación el polvo y el agua son el
enemigo real, de modo que el límite de un año sigue aplicando aunque
no se alcancen las horas.

### Cómo se comprueba el nivel y se cambia el aceite

- **Traslación**: el reductor tiene tres tapones en la tapa extrema:
  llenado, nivel y vaciado. Se gira el cubo hasta que el tapón de vaciado
  y el de llenado queden sobre el mismo eje vertical. Se rellena por el
  agujero de llenado hasta que el aceite sale por el de nivel. Los
  aros tóricos de los tapones se revisan en cada servicio.
- **Giro**: se verifica con la varilla, que se limpia, se inserta y se
  extrae para ver que el aceite quede entre las líneas oblicuas. Esa
  varilla es además el **respiradero** de la caja. El cambio se hace por
  una válvula de vaciado con manguera de drenaje, y se rellena por el
  tubo de llenado con un embudo que deje respirar al tubo.

Reglas comunes que da el manual y que sirven como lista de campo:

1. Vaciar siempre con el aceite caliente para arrastrar contaminantes.
2. No mezclar aceites de distinta marca, clasificación o tipo.
3. Medir la temperatura de la carcasa con termómetro. Justo después de
   operar está a temperaturas peligrosas para la mano.
4. Antes de operar la función de marcha o de giro, comprobar que haya
   aceite al nivel correcto. Una caja seca se destruye en minutos.
5. Revisar fugas, tornillos sueltos, ruidos o vibraciones anormales y
   calentamiento tras un breve periodo de funcionamiento.
6. Inspeccionar el aceite drenado: un poco de polvillo fino es normal;
   escamas y virutas no lo son. Para interpretar un laboratorio, ver el
   [análisis SOS del aceite](/posts/analisis-sos-aceite-lubricante/).

## Sellos y rodamientos: cómo fallan

### Junta flotante (duo-cone)

La traslación usa una **junta flotante**: dos anillos metálicos
rectificados, uno fijo a la carcasa y otro a la parte giratoria, que se
mantienen apretados entre sí por aros elásticos. Sellan por la película
de aceite microscópica entre sus caras. Si se ensucian, rayan o
sufren un golpe de piedra, la superficie pierde planitud y el
aceite se escapa; el polvo entra y completa el daño. El manual lista como causas la
superficie de deslizamiento gastada y el aro tórico deformado, y el
remedio es siempre sustituir el conjunto completo, nunca un solo anillo.

### Retenes y aros tóricos

En ambos reductores y en el motor de giro, el manual pide **sustituir
retenes y aros tóricos en cada desarmado, aunque se vean sanos**. El
motivo es que el labio del retén toma la forma del eje y del
desgaste previo: una vez desmontado, ya no sella igual. En el motor de
giro, un retén del eje de salida con fuga puede deberse al labio dañado,
al eje marcado en la zona de contacto o a una presión interna anormal
en la carcasa (por ejemplo, con el tubo de drenaje obstruido).

### Rodamientos, dientes y pasadores

Los criterios de reemplazo del manual son útiles para saber qué mirar:

| Pieza | Qué se busca | Criterio del manual |
|---|---|---|
| Dientes de corona, sol y satélites (traslación) | Picaduras, desgaste desigual, grietas | Área picada no mayor al 5 % |
| Dientes (giro) | Picaduras en la superficie | Diámetro de picadura dentro de 1 mm y área dentro del 5 % |
| Rodamientos de agujas y angulares | Picaduras, escamas, no giran suaves a mano | Reemplazar |
| Pasadores de satélites | Grietas, desgaste, picado | Reemplazar |
| Arandelas de empuje | Desgaste excesivo en la cara | Reemplazar |
| Anillo de empuje (giro) | Holgura de diámetro 0,13 a 0,254 mm | Admisible hasta 0,45 mm |

Una regla de oro que repite el manual: los **juegos se reemplazan
completos**. Los piñones, rodamientos, pasadores y arandelas de un mismo
portasatélites se mantienen juntos y no se mezclan, porque cada juego se
asentó entre sí con un patrón de desgaste.

## Síntomas y qué significan

| Síntoma que ve el operador | Primeras sospechas |
|---|---|
| Fuga de aceite en el cubo o la tapa | Tornillos o tapones flojos, junta líquida mal aplicada, junta flotante gastada |
| Ruido metálico o vibración en la oruga | Dientes picados, rodamiento de agujas dañado, nivel bajo de aceite |
| Metal en el aceite del reductor | Picaduras, escamas; hay que abrir y revisar |
| La oruga avanza lenta o la máquina no sube rampas | Presión baja de alivio, fallo de bomba, fuga interna del motor |
| La máquina se desvía hacia un lado al avanzar | Diferencia de caudal o de drenaje entre los dos motores |
| La máquina no se sostiene en pendiente | Freno de estacionamiento (resortes, discos) o fuga en la válvula de freno |
| El giro es lento o sin fuerza | Presión de ajuste incorrecta, flujo insuficiente, fuga interna del motor |
| La torre derrapa al parar el giro | Discos o resortes del freno vencidos, válvula de retardo defectuosa |
| Reductor o motor de giro calientes | Poco aceite, rodamientos dañados, freno que arrastra, fuga interna |

## Tabla de diagnóstico basada en el manual

Estas tablas resumen los diagramas de localización de fallos de la
EC210B, reorganizados por síntoma.

### Reductor de traslación

| Estado | Causa probable | Acción |
|---|---|---|
| La caja no gira | Motor sobrecargado o caja gastada | Reducir la carga; cambiar la caja |
| Fuga por superficies de unión | Junta líquida mal aplicada, superficie dañada, tornillos o tapones sueltos | Reaplicar, reparar o apretar al par |
| Fuga en la carcasa | Grietas o porosidad; tapa dañada | Cambiar carcasa o tapa |
| Fuga por junta flotante | Superficie de deslizamiento gastada, aro tórico deformado | Cambiar el conjunto de la junta |
| Temperatura anormal | Poco aceite; engranaje o rodamiento dañado; aceite hidráulico mezclado con aceite de engranajes | Rellenar al nivel; cambiar la caja; cambiar el retén de aceite del motor |
| Ruido anormal | Caja dañada | Cambiar la caja |

Un detalle del diagrama que merece atención: si aparece **aceite
hidráulico mezclado con aceite de engranajes**, el manual apunta al retén
de aceite del motor, que es la barrera entre ambos circuitos.

### Motor de traslación

| Estado | Causa probable | Acción |
|---|---|---|
| El motor no gira, presión baja | Alivio principal bajo, fallo de bomba, fallo de la válvula solenoide de seguridad | Ajustar; reparar bomba; revisar solenoide |
| El motor no gira, presión normal | Válvula de freno (contrapeso), motor hidráulico, piñón de entrada de la caja dañado, sobrecarga | Reparar brida trasera; revisar aceite de la carcasa y cambiar el motor si está contaminado; reparar caja |
| No sostiene en pendiente | Baja eficiencia volumétrica, fuga interna en válvula de freno, resortes o discos del freno gastados | Cambiar motor, brida trasera, resortes o discos |
| La máquina zigzaguea | Diferencia de caudal o de drenaje entre motor izquierdo y derecho; presiones de alivio desbalanceadas | Controlar caudal de bomba y junta giratoria; ajustar presiones |
| Velocidad no aumenta | Salida de la bomba baja: regulador defectuoso o fuga interna | Reparar regulador o bomba |
| Ruido anormal | Motor o caja averiados; mangueras o tubos que vibran | Cambiar conjunto; purgar el circuito; apretar o sustituir abrazaderas |

### Mando de giro

| Estado | Causa probable | Acción |
|---|---|---|
| El giro no se produce, presión anormal | Ajuste o falla de las válvulas de amortiguación o sobrepresión, fuga interna, piezas internas dañadas | Reajustar, reparar válvula, medir drenaje, reparar motor o reductor |
| El giro no se produce, presión normal | Sobrecarga; freno que no se libera | Reducir la carga; revisar circuito de liberación y válvula de retardo; reparar freno |
| El sentido está invertido | Cuerpo de válvula mal montado; mangueras de entrada y salida o piloto intercambiadas | Reubicar válvula; intercambiar mangueras |
| El giro es lento | Ajuste incorrecto, flujo insuficiente, fuga interna | Reajustar válvula; revisar bomba y tuberías; medir drenaje |
| Par de frenado insuficiente | Presión de liberación no cortada, discos gastados, émbolo atascado, resortes vencidos | Revisar válvula de retardo; cambiar discos como juego; cambiar émbolo o resortes |
| Temperatura anormal | Fuga interna, ajuste de válvulas, nivel bajo de aceite, rodamientos dañados, freno rezagado | Medir drenaje; rellenar; reparar reductor o motor |
| Fuga por el retén del eje de salida | Labio dañado, eje marcado, presión interna anormal | Cambiar retén; cambiar eje y retén; medir drenaje; revisar tubería de drenaje |
| Fuga en el plano de acoplamiento | Aro tórico torcido o dañado, superficie de estanqueidad dañada, tornillos sueltos | Reinsertar o reemplazar; corregir; apretar al par |

### Medir antes de desarmar

El propio manual del motor de giro insiste en un orden de trabajo que
vale para cualquier motor de pistones: hablar con el operador, **no
desarmar al azar** y medir primero. Los pasos son:

1. **Inspeccionar el aceite de la carcasa** por el tapón de drenaje: si
   sale gran cantidad de partículas metálicas, hay daño interno.
2. **Escuchar** ruidos anormales.
3. **Medir presiones** en varios puntos del circuito.
4. **Medir el caudal de drenaje** de la carcasa del motor. En el de giro,
   con la torre bloqueada contra un obstáculo y la palanca a fondo, el
   manual da como máximo unos 23 L/min a 270 kgf/cm² y 100 °C de aceite,
   y menos de 0,6 L/min durante un giro normal. Un drenaje que se
   dispara indica fuga interna en pistones, placa de válvulas o
   cilindro.

Para el motor de traslación, la tabla da una referencia de caudal de
drenaje de unos 5,7 L/min en prueba con las orugas conectadas.
Considera esas cifras como valores de ese manual, no como regla para
otros modelos o para motores con muchas horas: lo útil es **comparar el
motor izquierdo con el derecho** y registrar la tendencia.

## Desarmado y armado: criterios generales

No es el objetivo reproducir el procedimiento paso a paso (para eso hay
un manual con herramientas especiales, pares de apriete y secuencias),
pero sí conviene conocer las precauciones comunes que establece:

- **Limpieza ante todo**: lavar el exterior antes de abrir y trabajar
  sobre una superficie protegida (una plancha de goma sobre el banco).
  La suciedad causa buena parte de las fallas de motores hidráulicos.
- **Marcar la posición relativa** de las piezas antes de separarlas
  (por ejemplo, la carcasa y el cuerpo de válvulas), y marcar cada
  pistón con su cilindro: se asientan con un patrón de desgaste propio.
- **No mezclar** rodamientos, pasadores, arandelas y piñones de un
  portasatélites con los de otro.
- **Rodamientos extraídos con extractor o prensa no se reutilizan**: el
  manual lo dice expresamente para pistas y rodamientos de rodillos del
  motor de giro.
- **Cambiar siempre** retenes, aros tóricos y anillos de apoyo.
- **Torque en cruz y por etapas** para tornillos de montaje, con tornillos
  de la clase de resistencia indicada, y con llave dinamométrica.
- **Prelubricar el motor** tras una reparación: en el de giro, el manual
  pide llenar la carcasa con 0,9 L de aceite hidráulico antes de
  arrancar, y **purgar el aire** de líneas y motor.
- **Medir los límites de desgaste**: en el motor de giro, por ejemplo,
  juego pistón-camisa de 0,032 mm nominal con límite recomendado de
  0,062 mm; zapata de 6 mm con límite de 5,8 mm y disco de fricción de
  4 mm con límite de 3,6 mm. Superado el límite, se reemplaza la pieza
  o el conjunto (cilindro, zapatas, discos), no se "tolera".
- **Seguridad**: levantar las piezas pesadas con aparejo y cable de
  acero, nunca soportar un reductor con las manos, y no tocar una
  carcasa que acaba de operar.

Para una inspección detallada de las piezas internas de un motor de
pistones y los criterios de reutilización, ver [inspección de motores
hidráulicos de pistones](/posts/inspeccion-motores-hidraulicos-pistones-desgaste/).

## Para completar el plan de mantenimiento

Los intervalos de este artículo son los del manual de la EC210B y deben
contrastarse con el plan del propio equipo. Para el resto de lubricantes
de la máquina, la guía de [lubricantes e intervalos de la
EC210B](/posts/mantenimiento-excavadora-volvo-ec210b-lubricantes-intervalos/)
cubre el conjunto, y el [mantenimiento del sistema hidráulico paso a
paso](/posts/mantenimiento-sistema-hidraulico-excavadora-paso-a-paso/)
completa la parte del circuito. Tras cualquier reparación: aceite al
nivel, purga de aire, prelubricación del motor y nueva revisión a las
pocas horas.

## Resumen

Los mandos de traslación y giro son conjuntos simétricos en su idea
(motor de pistones más reductor planetario más freno de resorte), pero
distintos en exigencias. La traslación sufre polvo, agua y golpes de
oruga, y por eso depende de su junta flotante y de la limpieza del
aceite; el giro sufre inercia y ciclos de arranque y parada, y por eso
cambia el aceite con el doble de frecuencia y depende de sus válvulas
de alivio y amortiguación. En ambos casos el método es el mismo: leer el
síntoma, **medir antes de desarmar** (aceite, presiones, drenaje),
cambiar retenes y juegos completos y respetar los intervalos del
fabricante.

Para seguir con el equipo: [diagnóstico de fallas del motor de la
EC210B](/posts/motor-excavadora-volvo-ec210b-diagnostico-fallas/),
[cómo detectar fugas hidráulicas en una
excavadora](/posts/como-detectar-fugas-hidraulicas-en-una-excavadora/) y
[cómo funciona la bomba hidráulica de una
excavadora](/posts/como-funciona-la-bomba-hidraulica-de-una-excavadora/).
Para la parte de aceites, revisa los [intervalos de cambio y la
contaminación del aceite](/posts/intervalos-cambio-contaminacion-aceite/).

**Fuentes:** manual de taller de la excavadora hidráulica Volvo EC210B,
parte 02, secciones 4:1 (caja de cambios y motor de orugas) y 4:2 (caja
de cambios y motor de giro), disponible en
[maquinariaspesadas.org](https://www.maquinariaspesadas.org/blog/613-manual-taller-excavadora-hidraulica-ec210b-volvo-02).
Texto y esquemas elaborados a partir del manual; los valores son los
publicados en él para la EC210B y deben verificarse con el manual del
equipo. Este contenido es independiente y no representa ni cuenta con la
aprobación de Volvo.

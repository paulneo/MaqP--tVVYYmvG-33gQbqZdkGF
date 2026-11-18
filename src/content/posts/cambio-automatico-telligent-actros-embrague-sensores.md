---
title: "Cambio automático Telligent del Actros: embrague, sensores y lógica AG"
published: 2026-11-20
draft: false
featured: false
description: "Cómo funciona el cambio automático Telligent de la generación Actros de 1999: circuitos neumático e hidráulico, servoembrague, sensores, aprendizaje y selección de marcha AG."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "telligent"
  - "caja-automatizada"
  - "servoembrague"
  - "sensor-de-embrague"
  - "camiones-pesados"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camiones/cambio-automatico-telligent-actros-embrague-sensores
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Por qué hay que hacer un aprendizaje después de cambiar un sensor o una unidad de control?"
    a: "Porque la unidad de control no conoce las posiciones físicas de la caja: las memoriza durante el aprendizaje, recorriendo todas las posiciones de un cambio y guardando el resultado como valores aprendidos en 'counts'. Si se reemplaza un sensor, una unidad o la propia caja, esas referencias dejan de corresponder con la mecánica real. Sin un nuevo aprendizaje, la unidad puede interpretar mal si un cambio terminó, y aparecen cortes o intentos fallidos. El procedimiento exacto lo define la documentación del fabricante para el modelo concreto."
  - q: "¿Qué pasa si el embrague se desgasta? ¿Se queda corto el recorrido?"
    a: "El sistema está pensado para compensar el desgaste. El servoembrague lleva un sensor de recorrido y la unidad guarda un valor aprendido mínimo y otro máximo. Al desgastarse el disco, el punto de cierre se desplaza y la unidad lo sigue dentro de esos límites. Si tras una reparación los valores actuales ya no coinciden con los aprendidos, hay que revisar y repetir el ajuste siguiendo el manual del fabricante."
  - q: "¿Por qué el camión arranca en una marcha distinta tras apagar y encender el contacto?"
    a: "Porque el cálculo de peso se reinicia. Según el curso, al conectar el encendido el sistema parte de una masa supuesta de 40 toneladas y aplica la corrección de pendiente memorizada. Con un camión ligero en pendiente, la marcha de arranque puede cambiar de forma notable hasta que se vuelva a estimar la masa tras unos cinco o seis cambios."
  - q: "¿Qué es el pedal de emergencia del embrague?"
    a: "Es un pedal plegable en la cabina, con su propio cilindro transmisor, que permite accionar el embrague a mano si el sistema automático de accionamiento falla. Se puede desplegar con el encendido conectado, pero solo se vuelve a plegar con el vehículo detenido y el encendido desconectado. Es una función de contingencia, no un modo normal de conducción."
  - q: "¿Esto aplica a los cambios automatizados actuales de camiones?"
    a: "No necesariamente. El material corresponde a un curso de 1999 sobre el sistema Telligent de esa generación del Actros. Las cajas automatizadas posteriores han cambiado en hardware, software y procedimientos. Este artículo sirve para entender la lógica, no como guía de servicio de un modelo actual."
sources:
  - title: "Manual caja de cambios camiones Mercedes-Benz Actros y Atego (curso de capacitación 03/1999) — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/2849-manual-caja-cambios-camiones-mercedes-benz-actros-atego"
related:
  - caja-cambios-mercedes-actros-atego-grupos-divisor-reductor
  - como-funcionan-los-embragues-en-transejes-automaticos
  - sistema-de-diagnostico-electronico-en-vehiculos
  - guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios
---

Una caja mecánica de 16 marchas exige coordinar pedal, palanca y revoluciones, y eso se paga en fatiga y en embragues quemados. El sistema **Telligent** lo resolvió a finales de los noventa sin cambiar los engranajes: añadió un embrague con servo, cilindros neumáticos que mueven la palanca interna y unidades de control que deciden la marcha.

Este artículo describe esa generación a partir de un curso de capacitación fechado en marzo de 1999 sobre el Actros y el Atego. **No describe las cajas automatizadas actuales**: los modelos posteriores han evolucionado y los procedimientos cambian. Su valor es que muestra la arquitectura con claridad: qué mide cada sensor, qué hace cada circuito y por qué un reemplazo obliga a "enseñarle" de nuevo la caja a la electrónica.

Para la parte mecánica (grupos divisor y reductor, esquema de marchas) hay un artículo complementario: [caja de cambios Actros y Atego: grupos divisor y reductor](/posts/caja-cambios-mercedes-actros-atego-grupos-divisor-reductor/).

## La arquitectura: quién decide y quién ejecuta

El curso separa el sistema en bloques con siglas propias. Conviene fijarlas porque el resto del artículo las usa:

| Sigla | Función | Qué hace en la práctica |
|---|---|---|
| **GS** | Control de marchas conectadas | Mueve la caja: activa electroválvulas y lee sensores de posición |
| **AG** | Selección automática de marcha | Calcula qué marcha conviene; no actúa directamente sobre válvulas |
| **KS** | Control del embrague | Gobierna el embrague y su ajuste |
| **KB** | Accionamiento del embrague | Unidad hidráulica que mueve el servoembrague |
| **FR** | Regulación de la marcha | Pedal del acelerador, Tempomat, Temposet |
| **MR** | Regulación del motor | Par y régimen del motor |

Todas hablan por líneas CAN (vehículo, motor, embrague y frenos). Es una **inteligencia descentralizada**: la AG no "siente" nada, recibe datos de otras unidades y propone una marcha; la GS la ejecuta.

## Tres circuitos en un mismo sistema

El curso divide la instalación en tres circuitos, y verlos por separado facilita el diagnóstico:

- **Eléctrico**: unidad GS, transmisor de marchas (la palanca de cabina), conector de la caja, sensores de posición y de revoluciones.
- **Neumático**: aire comprimido que alimenta los bloques de electroválvulas y los cilindros de marchas, pasillo, divisor y reductor.
- **Hidráulico**: del cilindro transmisor del embrague (con su depósito de compensación) hasta el servoembrague.

<figure class="diagram">
<svg viewBox="0 0 820 400" role="img" aria-label="Diagrama de actuación del cambio Telligent: el transmisor envía la orden a la unidad GS, que activa electroválvulas y cilindros neumáticos; los sensores devuelven la posición. En paralelo, KS y KB accionan hidráulicamente el servoembrague, cuyo sensor informa el recorrido." style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="tl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker>
</defs>
<rect x="0" y="0" width="820" height="400" rx="12" fill="#f1f5f9"/>
<text x="30" y="38" font-size="14" font-weight="700" fill="#0f172a">Cambio de marchas (GS)</text>
<rect x="30" y="55" width="160" height="80" rx="8" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
<text x="110" y="91" text-anchor="middle" font-size="14" fill="#0f172a">Transmisor de</text>
<text x="110" y="111" text-anchor="middle" font-size="14" fill="#0f172a">cambio de marchas</text>
<rect x="250" y="55" width="170" height="80" rx="8" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
<text x="335" y="91" text-anchor="middle" font-size="14" fill="#0f172a">Unidad de</text>
<text x="335" y="111" text-anchor="middle" font-size="14" fill="#0f172a">control GS</text>
<rect x="480" y="55" width="140" height="80" rx="8" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
<text x="550" y="91" text-anchor="middle" font-size="14" fill="#0f172a">Electroválvulas</text>
<text x="550" y="111" text-anchor="middle" font-size="14" fill="#0f172a">dobles (2/2)</text>
<rect x="680" y="55" width="120" height="80" rx="8" fill="#fef3c7" stroke="#334155" stroke-width="2"/>
<text x="740" y="82" text-anchor="middle" font-size="13" fill="#0f172a">Cilindros</text>
<text x="740" y="100" text-anchor="middle" font-size="13" fill="#0f172a">marchas, pasillo,</text>
<text x="740" y="118" text-anchor="middle" font-size="13" fill="#0f172a">divisor, reductor</text>
<line x1="190" y1="95" x2="248" y2="95" stroke="#334155" stroke-width="2" marker-end="url(#tl-arrow)"/>
<line x1="420" y1="95" x2="478" y2="95" stroke="#334155" stroke-width="2" marker-end="url(#tl-arrow)"/>
<line x1="620" y1="95" x2="678" y2="95" stroke="#334155" stroke-width="2" marker-end="url(#tl-arrow)"/>
<line x1="550" y1="150" x2="550" y2="137" stroke="#334155" stroke-width="2" marker-end="url(#tl-arrow)"/>
<text x="550" y="167" text-anchor="middle" font-size="12" fill="#0f172a">aire comprimido</text>
<rect x="480" y="185" width="320" height="44" rx="8" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
<text x="640" y="212" text-anchor="middle" font-size="14" fill="#0f172a">Sensores de posición (B60 a B63)</text>
<line x1="740" y1="135" x2="740" y2="183" stroke="#334155" stroke-width="2" marker-end="url(#tl-arrow)"/>
<path d="M480 207 H335 V138" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#tl-arrow)"/>
<text x="408" y="200" text-anchor="middle" font-size="12" fill="#0f172a">posición real</text>
<line x1="270" y1="137" x2="270" y2="258" stroke="#334155" stroke-width="2" marker-start="url(#tl-arrow)" marker-end="url(#tl-arrow)"/>
<text x="262" y="200" text-anchor="end" font-size="12" fill="#0f172a">bus CAN</text>
<text x="30" y="246" font-size="14" font-weight="700" fill="#0f172a">Embrague (KS y KB)</text>
<rect x="150" y="260" width="200" height="64" rx="8" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
<text x="250" y="288" text-anchor="middle" font-size="14" fill="#0f172a">Control KS y</text>
<text x="250" y="308" text-anchor="middle" font-size="14" fill="#0f172a">accionamiento KB</text>
<rect x="470" y="260" width="150" height="64" rx="8" fill="#fef3c7" stroke="#334155" stroke-width="2"/>
<text x="545" y="288" text-anchor="middle" font-size="14" fill="#0f172a">Servoembrague</text>
<text x="545" y="308" text-anchor="middle" font-size="13" fill="#0f172a">(hidráulico + aire)</text>
<rect x="680" y="260" width="120" height="64" rx="8" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
<text x="740" y="288" text-anchor="middle" font-size="14" fill="#0f172a">Sensor del</text>
<text x="740" y="308" text-anchor="middle" font-size="14" fill="#0f172a">embrague (B2)</text>
<line x1="350" y1="298" x2="468" y2="298" stroke="#334155" stroke-width="2" marker-end="url(#tl-arrow)"/>
<text x="409" y="288" text-anchor="middle" font-size="12" fill="#0f172a">hidráulica</text>
<line x1="620" y1="292" x2="680" y2="292" stroke="#334155" stroke-width="2"/>
<path d="M740 324 V362 H250 V326" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#tl-arrow)"/>
<text x="495" y="352" text-anchor="middle" font-size="12" fill="#0f172a">recorrido del embrague</text>
<text x="30" y="390" font-size="12" fill="#0f172a">Línea continua: orden o presión. Línea discontinua: señal de retorno. Esquema simplificado.</text>
</svg>
<figcaption>Flujo de actuación del Telligent: la orden baja por la cadena eléctrica y neumática hasta los cilindros, y los sensores devuelven la posición para cerrar el lazo. En paralelo, el embrague se acciona por vía hidráulica y su sensor informa el recorrido. Ilustración propia, basada en la descripción del curso.</figcaption>
</figure>

## Los cilindros neumáticos y sus electroválvulas

La caja de marchas no se mueve con un solo actuador, sino con cuatro conjuntos coordinados:

- **Cilindro de marchas (3 posiciones)**: un émbolo doble con superficies de distinto tamaño, unido por una palanca al dedo de mando. Tiene **cuatro electroválvulas**: dos de entrada de aire (MUB, MGB) y dos de salida (MUE, MGE). Para engranar una marcha impar se energizan la entrada y la salida del lado impar, de modo que la salida queda cerrada y la entrada abierta. Para llevarlo a **punto muerto** se energizan las cuatro. Por eso un cilindro de dos cámaras alcanza tres posiciones.
- **Cilindro de pasillo**: con un solo cilindro y un muelle de centrado se obtienen tres pasillos. Sin energía, el muelle deja el dedo de mando en el pasillo de 1/2. Con MG2 se va al de 3/4 hasta el tope en la tapa; con MG1, a marcha atrás hasta el tope en la carcasa. En 3/4 y en R la electroválvula sigue activada aun con la marcha engranada.
- **Grupo divisor y grupo reductor**: son cilindros de dos posiciones, totalmente retraídos o extendidos. En el reductor se eliminó la tubería entre válvula y cilindro: la conexión va por canales internos y solo el suministro de aire llega a las válvulas.

Los bloques de electroválvulas dobles de divisor, reductor y pasillo son iguales (válvulas 2/2, conector de tres polos). Pasar de 2.ª a marcha atrás es una **secuencia de tres pasos** (punto muerto, pasillo, marcha), y la unidad verifica cada uno con los sensores antes de seguir.

## Sensores y valores aprendidos

Los sensores de marcha (B60), pasillo (B61), grupo reductor (B63) y, en versiones anteriores, divisor (B62, dejó de instalarse a mediados de 1998) miden posición. Según el curso, valen **22 counts por milímetro** y rondan los **72 Ω** a temperatura ambiente. Además hay un sensor de revoluciones (B3) atornillado a la izquierda de la caja, que lee el segundo piñón del eje secundario (39 dientes). Con el vehículo parado, el motor en marcha y el embrague abierto, el eje primario debe estar detenido: así la unidad confirma que la caja está realmente desacoplada.

### Qué es el aprendizaje y por qué importa

La unidad no sabe "dónde" está cada posición hasta que se le enseña. En el aprendizaje el sistema recorre todas las posiciones necesarias para un cambio, comprueba que sean plausibles y **graba los resultados como valores aprendidos**. Después compara continuamente el valor actual con el aprendido.

Como ilustración, el curso muestra una caja G 211 con valores como 597 counts para el reductor lento y 905 para el rápido; con la caja en neutro y el reductor lento, el valor actual leído fue 598. Esa diferencia mínima es lo normal. Son datos de ejemplo de un vehículo, no valores de referencia para otro.

Dos conclusiones del curso son especialmente útiles en taller:

1. El desgaste o un cambio mecánico pueden desplazar los valores actuales **sin que aparezca ningún código de fallo**, pero producir interrupciones del cambio. El aprendizaje compensa hasta cierto punto.
2. Antes de repetir un aprendizaje hay que **anotar y comparar** valores actuales y aprendidos. Repetirlo a ciegas puede esconder la causa real; en el curso hay un caso de freno motor que volvía a fallar poco después de restablecerse con un aprendizaje.

## Embrague: servo, sensor y control KS/KB

### Qué hace el servoembrague

El embrague de disco seco se acciona con un **servoembrague** en la caja. Recibe presión hidráulica del cilindro transmisor, unidad KB, y cuenta con aire comprimido como asistencia. Un **sensor inductivo** (B2) mide el movimiento del émbolo; la inductancia varía con el recorrido y la unidad la traduce a counts, desde "abierto" hasta "cerrado".

Hay tres referencias:

- **Valor aprendido mínimo**: el extremo "embrague abierto".
- **Valor aprendido máximo**: el extremo "embrague cerrado", que se desplaza con el desgaste del disco.
- **Valor actual**: la posición del momento.

El curso propone verificar el recorrido comparando el valor actual con embrague cerrado contra el aprendido máximo, y con embrague abierto contra el mínimo; la diferencia entre ambos extremos es el **recorrido en counts**. Si el cierre y la apertura no llegan a sus extremos aprendidos, hay un problema de ajuste, de desgaste o de separación.

### Válvula de protección y pedal de emergencia

El circuito hidráulico incluye una **válvula de protección** biestable con dos posiciones, un interruptor activo (S55) y uno de fin de carrera (S54), y un **pedal de emergencia plegable** en la cabina con su propio cilindro transmisor. La válvula decide cuál de los dos transmisores, el de la unidad KB o el del pedal, queda conectado al servoembrague.

La lógica práctica que enseña el curso:

- Con una falla del accionamiento automático, el conductor despliega el pedal y lo acciona.
- El pedal se puede desplegar con el encendido conectado, pero **solo se pliega con el vehículo parado y el encendido desconectado**, porque la electrónica solo detecta el pliegue con el encendido puesto.
- Por ser biestable, el estado inicial de la válvula influye en cómo responde el pedal las primeras veces. El curso lo trabaja con dos procedimientos distintos que dan resultados diferentes.

## Puesta a punto: qué se hace y qué se vuelve a aprender

El curso agrupa tres operaciones: **aprendizaje "pequeño"**, **aprendizaje "grande"** y **ajuste del embrague**. Incluye una tabla que cruza cada trabajo (purga, cambio de embrague, sensor, cilindros, unidad KB, válvula de protección, caja, unidad GS o KS, motor) con la operación necesaria, pero la deja en blanco para completarla con el manual de diagnosis. La regla correcta es entonces consultar el procedimiento del fabricante para el modelo exacto, con su herramienta de diagnosis, y no deducirlo.

### Criterios que sí deja el curso

- **Purga**: el sistema hidráulico puede perder estanqueidad o contener aire, igual que un freno. En el ejercicio se pide recoger el líquido en un recipiente limpio, porque se reutiliza, y desplegar el pedal de emergencia durante la purga. El curso deja el motivo como pregunta; confírmelo en el manual.
- **Cambio de servoembrague**: se anotan los valores aprendidos antes, se sustituye la pieza y se recalcula el punto cero del nuevo conjunto con el menú de parámetros de la herramienta.
- **Cambio de unidad GS**: se anotan antes los valores reales que se necesitarán para el montaje y se identifica de nuevo el tipo de caja.
- **Ajuste del embrague**: es un procedimiento activo, con el vehículo en marcha controlada. La pantalla de diagnosis advierte riesgo de accidente y exige freno de estacionamiento, caja en punto muerto, espacio libre delante del vehículo y superficie plana. Se sigue paso a paso en la documentación oficial.

## Selección automática de marcha (AG)

### Qué recibe y qué calcula

La AG no necesita ajuste de parámetros. Aprende los datos del motor a través de la unidad FR, recibe de la GS los de la caja y la relación del eje trasero (que la GS aprende en la primera marcha). Con eso estima continuamente **la pendiente** y **el peso del vehículo**.

- La pendiente sale de la aceleración, el par entregado por el motor y la masa estimada. La resistencia del aire y la de rodadura no se separan: se absorben en la pendiente, que resulta como máximo un 1 % mayor que la real.
- El peso arranca en **40 toneladas** y se refina tras el primer cambio, con 5 o 6 cambios para estabilizarse. El curso indica que basta una exactitud de ±20 %. No se calcula durante patinaje, curvas ni frenadas, porque falsean el resultado. Si el vehículo va en punto muerto con el embrague cerrado más de 30 segundos, el cálculo se interrumpe y vuelve a 40 t.

### Marcha de arranque

| Peso estimado | Marcha de arranque |
|---|---|
| Menos de 15 t | 8.ª |
| 15 a 24,9 t | 6.ª |
| Más de 25 t | 4.ª |

Luego se corrige por pendiente: nada por debajo de 4 %; una marcha menos entre 4 y 6,9 %; dos entre 7 y 9,9 %; tres por encima de 10 %. No se acepta una marcha de arranque por encima de la 8.ª (de 16). El ejemplo del curso es muy didáctico: con 10 t estimadas y 8 % de pendiente se arranca en 6.ª, pero si se apaga y se vuelve a conectar el contacto, la masa vuelve a 40 t y la marcha pasa a 2.ª, porque se conserva la corrección. Es la explicación de los "arranques raros" tras reiniciar.

### Estrategia de cambios

La AG puede subir o bajar hasta **cuatro marchas** de una vez. Solo cambia cuando hay una reacción del conductor (acelerador, Tempomat, freno de servicio o freno motor), y calcula la marcha nominal varias veces seguidas antes de decidir, para evitar cambios innecesarios. También reconoce curvas y retrasa el cambio hasta salir de ellas.

**Subir de marcha**: solo si el motor, en la marcha candidata, vence la resistencia actual. Ejemplos del curso: no sube con el pedal a fondo si el régimen resultante queda bajo 1600 rpm; no sube en curva bajo 1700 rpm; en maniobras no sube si el régimen resultante queda bajo 900 rpm; no sube durante una frenada ABS ni con el ASR activo. Una secuencia típica en llano es 4, 8, 12, 14, 15, 16.

**Bajar de marcha**: en aceleración desde régimen bajo (menos de 1000 rpm) busca una marcha que deje el motor en torno a 1200 rpm; si el conductor solo da gas parcial, puede no bajar. Para asegurar la reducción se usa el **kick down**.

**Kick down**: en llano apunta a unos 1600 rpm y en montaña a 1800 rpm, con hasta cuatro marchas menos. En el grupo bajo (1.ª a 8.ª) no produce reducción. Si el conductor sigue en kick down, cada marcha se aprovecha hasta el régimen nominal y después se permiten como máximo dos marchas más largas. Equivale a un "programa de potencia" para adelantar.

**Frenado y retención**: con el freno de servicio o con el freno continuo (retardador o freno motor) el sistema reduce marchas según régimen y velocidad, sin considerar el par disponible en la marcha de destino. Por debajo de 25 km/h ya no reduce y, al detenerse, deja puesta la marcha de arranque. Con el freno continuo en bajada, el curso indica una luz de aviso si el régimen supera 2150 rpm (se apaga bajo 1900 rpm): es la señal de que hace falta el freno de servicio.

**Otros casos**: con patinaje (eje delantero y trasero a distinta velocidad) se prefieren marchas más largas y no se reduce; detenido más de 90 s con marcha puesta, pasa a neutro y cierra el embrague (la "N" parpadea desde los 60 s); en modo manual la AG sigue calculando en segundo plano; con avería grave (grado 2) en GS, KB o FR se desactiva, y con averías leves usa valores sustitutos.

Un detalle de arquitectura que importa en diagnóstico: la **GS puede rechazar la marcha propuesta** por la AG si la situación cambia durante el cambio, y el sistema prepara una "marcha alternativa" para un segundo intento si el primero se interrumpe.

## Síntoma, causa probable y primera comprobación

La columna "Base" indica si el punto se apoya en el curso o en conocimiento general de buena práctica. Es una guía de razonamiento, no un árbol de averías: la herramienta de diagnosis y la documentación del fabricante para el modelo exacto mandan.

| Síntoma | Causa probable | Primera comprobación | Base |
|---|---|---|---|
| Cambios interrumpidos o intentos repetidos, sin código de fallo | Deriva entre valores actuales y aprendidos (desgaste, ajuste mecánico) | Anotar y comparar valores; luego evaluar el aprendizaje | Curso |
| Contadores de interrupciones de cambio altos o tiempos de cambio largos | Problema mecánico o neumático en un grupo; sensor fuera de ajuste | Revisar tiempos de cambio y contadores en valores reales | Curso (uso diagnóstico sugerido) |
| Tras cambiar sensor, unidad GS o caja, la caja no engrana bien | Referencias de posición sin reaprender | Identificar el procedimiento de aprendizaje del fabricante y ejecutarlo | Curso e inferencia |
| El embrague no separa del todo, el eje primario gira con el embrague abierto | Recorrido insuficiente, aire en el circuito hidráulico o valores de embrague fuera de rango | Comparar valor actual con aprendidos mín. y máx.; revisar purga | Curso y general |
| Indicación de pedal de emergencia o fallo KS, pasa a modo manual | Falla en la actuación del embrague | Leer memoria de averías KS; revisar hidráulica y válvula de protección | Curso |
| Marcha de arranque distinta tras apagar y encender | Masa reiniciada a 40 t con corrección de pendiente guardada | Comportamiento normal; observar tras unos cambios | Curso |
| El cambio no sube marchas solo | AG desactivada por avería grave en GS, KB o FR; ASR activo; modo manual | Revisar modo de funcionamiento y memoria de averías | Curso |
| Cambios lentos o sin respuesta con presión de aire baja | Suministro neumático insuficiente | Comprobar presión y fugas del circuito de aire | General |
| Pasa a neutro tras un rato parado | Función de detención por más de 90 s | No es avería: es comportamiento diseñado | Curso |

## En resumen

El Telligent separa **decidir** (AG), **ejecutar** (GS) y **embragar** (KS/KB), y los tres dependen de referencias aprendidas: cuando la mecánica cambia hay que renovarlas, pero antes se compara y se anota. Gran parte de la "personalidad" de la caja sale de umbrales de régimen y estimaciones de peso y pendiente, no de fallos.

Para completar el panorama, revisa [qué es y cómo trabaja un sistema de diagnóstico electrónico](/posts/sistema-de-diagnostico-electronico-en-vehiculos/), el principio de [embragues en transmisiones automáticas](/posts/como-funcionan-los-embragues-en-transejes-automaticos/), la [guía de lubricantes y especificaciones para cajas de cambio](/posts/guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios/) y, en el mismo tren motriz, el [árbol de transmisión](/posts/arbol-transmision/).

**Fuentes**: curso de capacitación "Sistemas de cambio de marchas en el Actros y en el Atego" (03/1999), publicado en [Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/2849-manual-caja-cambios-camiones-mercedes-benz-actros-atego). Este artículo es una elaboración propia con fines educativos, no una publicación del fabricante ni cuenta con su respaldo.

---
title: "Red CAN SAE J1939 en vehículos pesados y maquinaria: guía práctica"
published: 2026-11-24
draft: false
featured: false
description: "Qué es SAE J1939, cómo se arma su identificador de 29 bits, qué son PGN, SPN y FMI, cómo se reclaman direcciones y cómo revisar el bus CAN con un multímetro."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "sae-j1939"
  - "red-can"
  - "diagnostico-electronico"
  - "codigos-de-falla"
  - "electronica-de-maquinaria"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/electronica/red-can-sae-j1939-vehiculos-pesados-maquinaria
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Qué diferencia hay entre CAN y SAE J1939?"
    a: "CAN es la tecnología de base: define cómo viajan los bits por el par de cables, cómo se arbitra el acceso y cómo se detectan errores. J1939 es un protocolo de capa superior escrito por SAE para vehículos pesados que se apoya en CAN y le agrega todo lo demás: el significado de cada identificador, la numeración de parámetros, las direcciones de las ECU, el transporte de mensajes largos y los mensajes de diagnóstico."
  - q: "¿Cuánta resistencia debo medir entre CAN H y CAN L?"
    a: "Con el sistema apagado y las dos resistencias terminales de 120 ohmios en su sitio, el multímetro ve ambas en paralelo y marca cerca de 60 ohmios. Una lectura cercana a 120 ohmios indica que falta una terminación o que hay un tramo abierto, y una cercana a cero apunta a un cortocircuito entre las dos líneas. Mida siempre sin alimentación en el bus."
  - q: "¿Qué significan el SPN y el FMI de un código de falla J1939?"
    a: "El SPN dice qué parámetro o componente tiene el problema, por ejemplo el SPN 110, temperatura del refrigerante. El FMI dice de qué tipo es la falla: un valor fuera de rango, un circuito con voltaje alto o bajo, una señal errática y otros casos. Leídos juntos dan un diagnóstico mucho más preciso que una simple luz de advertencia en el tablero."
  - q: "¿Por qué dos ECU no pueden usar la misma dirección en la red?"
    a: "La dirección de origen viaja en los últimos 8 bits de cada identificador y es la forma en que los demás nodos saben quién envió el mensaje. Si dos módulos la compartieran, sus mensajes se confundirían. Por eso existe el procedimiento de reclamo de dirección: cuando dos ECU piden la misma, gana la que tiene el NAME de 64 bits de valor más bajo y la otra debe buscar otra dirección o callar."
  - q: "¿Puedo leer la red J1939 de una máquina con un escáner automotriz OBD?"
    a: "En general no basta. Los escáneres OBD de vehículos livianos están pensados para el conector de 16 pines y sus protocolos. Los equipos pesados usan J1939 a 250 kbit/s y, con frecuencia, el conector redondo Deutsch de 9 pines que define J1939/13. Se necesita una interfaz y un software compatibles con J1939, o la herramienta del fabricante de la máquina."
sources:
  - title: "Manual SAE J1939: control de vehículos en serie y comunicaciones de red — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/6822-manual-sae-j1939-control-vehiculos-serie-comunicaciones-red-parametros"
related:
  - principio-del-obd-como-funciona-el-diagnostico-a-bordo-vehiculos
  - ecm-cummins-equipo-electrico
  - ddec-vi-detroit-serie-60-codigos-y-proteccion-motor
---

En un camión moderno o en una máquina de movimiento de tierras, el módulo del
motor, el de la transmisión, el del freno, el tablero y la telemetría
conversan todo el tiempo por un mismo par de cables. Ese idioma común es casi
siempre **SAE J1939**. Cuando una pantalla muestra "SPN 110 FMI 0" o cuando una
herramienta de diagnóstico no logra conectarse, entender cómo funciona esa red
ahorra horas de búsqueda a ciegas.

Esta guía parte de una presentación de formación sobre J1939 publicada en
Maquinarias Pesadas, preparada por un fabricante de interfaces CAN, y la
completa con lo que necesita un técnico: cómo leer un código de falla y cómo
revisar el bus con un multímetro. Cuando una lámina tiene un error de
traducción o de cifras, lo indicamos.

## Qué es SAE J1939

J1939 es un **protocolo de capa superior** que se apoya en CAN (Controller Area
Network). CAN fue desarrollado por Bosch para la industria automotriz y luego se
hizo muy popular en automatización industrial. Es una red serie entre
microcontroladores, adecuada para aplicaciones de tiempo real, con una
detección de errores y un confinamiento de fallas muy eficaces. CAN admite
hasta 1 Mbit/s, pero J1939 trabaja a **250 kbit/s**.

El curso destaca tres rasgos del diseño:

- Reemplazó a la combinación anterior **J1708 (RS-485) + J1587** en vehículos
  pesados.
- Tiene muy poca sobrecarga de protocolo: está orientado a datos.
- Aprovecha al máximo las características propias de CAN, como el arbitraje
  sin colisiones destructivas.

Además de camiones y autobuses, la misma base se usa en maquinaria agrícola y
forestal (ISO 11783), en vehículos militares (MilCAN), en conexiones entre
tracto y remolque, en sistemas de gestión de flotas y en navegación marina
(NMEA 2000).

J1939 **no es maestro-esclavo ni cliente-servidor**: cada ECU transmite cuando
lo necesita y la mayoría de los datos se difunden a toda la red.

## Las partes de la norma

SAE organizó J1939 siguiendo el modelo de siete capas ISO/OSI. Cada documento
cubre una capa, y para el taller los más útiles son estos:

| Documento | Contenido |
| --- | --- |
| J1939/11 | Capa física, 250 kbit/s, par trenzado blindado |
| J1939/13 | Conector de diagnóstico fuera de a bordo |
| J1939/15 | Capa física, 250 kbit/s, par trenzado sin blindaje |
| J1939/21 | Capa de enlace de datos: formato de mensajes y transporte |
| J1939/31 | Capa de red: puentes entre segmentos |
| J1939/71 | Capa de aplicación del vehículo: parámetros |
| J1939/73 | Capa de aplicación: diagnóstico |
| J1939/81 | Gestión de red: direcciones y NAME |

**Corrección a la fuente.** La lámina traduce J1939/15 como "par trenzado
apantallado (UTP)". UTP significa par trenzado **sin** pantalla: la diferencia
con J1939/11 es justamente esa.

## Capa física: cable, topología y terminación

Las especificaciones que resume el curso son:

| Característica | Valor según el curso |
| --- | --- |
| Medio | Par trenzado blindado |
| Longitud máxima de red | 40 m |
| Velocidad estándar | 250 kbit/s |
| Identificador de mensaje | 29 bits |
| Nodos por red | Hasta 30 ECU |

Las ECU de un segmento se conectan a **una sola línea troncal**, y de ella salen
ramales (stubs) cortos hasta cada módulo. El cableado debe ser lo más recto
posible y sin estructuras complejas para minimizar las reflexiones
eléctricas. La norma J1939/11 limita cada ramal a 1 m; un ramal largo o una
derivación en estrella es una fuente clásica de errores intermitentes.

Cada segmento lleva **una resistencia terminal de 120 Ω en cada extremo** del
bus, entre CAN H y CAN L, y nunca en los ramales. Si la red se divide en
subredes, por ejemplo camión y remolque, la segmentación requiere puentes
(bridges) entre ellas.

Las dos líneas trabajan de forma diferencial. En reposo (bit recesivo) ambas
quedan cerca de 2,5 V; al transmitir un bit dominante, CAN H sube hacia unos
3,5 V y CAN L baja hacia unos 1,5 V. Son los valores típicos de la capa
física CAN de alta velocidad, y explican por qué el ruido que afecta por igual
a los dos cables no altera la lectura.

## El identificador de 29 bits

CAN 2.0A usa identificadores de 11 bits. Para dar cabida a la información que
ya manejaban J1708 y J1587, se extendió a **CAN 2.0B** con identificadores de
29 bits. Un bit (IDE) indica cuál de los dos formatos lleva cada trama, y
ambos pueden convivir en el mismo bus. J1939 y MilCAN usan el de 29 bits;
CANopen, el de 11.

El campo de datos de una trama sigue siendo de 0 a 8 bytes. Lo que cambia es
cómo se interpreta el identificador, que J1939 divide así:

<figure class="diagram">
<svg viewBox="0 0 760 410" role="img" aria-label="Identificador J1939 de 29 bits dividido en prioridad, bit reservado, página de datos, formato PDU, PDU específico y dirección de origen, con el ejemplo 18FEEE00 hexadecimal y la diferencia entre PDU1 y PDU2" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="760" height="410" rx="14" fill="#f8fafc"/>
<text x="380" y="32" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Identificador J1939 de 29 bits</text>
<text x="380" y="56" text-anchor="middle" font-size="12" fill="#475569">Trama CAN 2.0B extendida; el campo de datos lleva de 0 a 8 bytes</text>
<g stroke="#334155" stroke-width="1.5">
<rect x="40" y="76" width="110" height="64" fill="#fee2e2"/>
<rect x="150" y="76" width="60" height="64" fill="#e2e8f0"/>
<rect x="210" y="76" width="60" height="64" fill="#e0f2fe"/>
<rect x="270" y="76" width="150" height="64" fill="#e0f2fe"/>
<rect x="420" y="76" width="150" height="64" fill="#e0f2fe"/>
<rect x="570" y="76" width="150" height="64" fill="#dcfce7"/>
</g>
<g font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">
<text x="95" y="103">Prioridad</text>
<text x="180" y="103">R</text>
<text x="240" y="103">DP</text>
<text x="345" y="103">PF (formato)</text>
<text x="495" y="103">PS (específico)</text>
<text x="645" y="103">SA (origen)</text>
</g>
<g font-size="12" fill="#334155" text-anchor="middle">
<text x="95" y="124">3 bits</text>
<text x="180" y="124">1 bit</text>
<text x="240" y="124">1 bit</text>
<text x="345" y="124">8 bits</text>
<text x="495" y="124">8 bits</text>
<text x="645" y="124">8 bits</text>
</g>
<rect x="40" y="148" width="680" height="36" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
<g font-size="12" fill="#0f172a" text-anchor="middle">
<text x="95" y="171">6 (110)</text>
<text x="180" y="171">0</text>
<text x="240" y="171">0</text>
<text x="345" y="171">254 (FE)</text>
<text x="495" y="171">238 (EE)</text>
<text x="645" y="171">0 (00)</text>
</g>
<path d="M150 196 L150 208 L570 208 L570 196" stroke="#0369a1" stroke-width="2" fill="none"/>
<text x="360" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">PGN de 18 bits = R + DP + PF + PS (aquí 65262 = FEEE hex)</text>
<rect x="40" y="250" width="330" height="86" rx="8" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
<rect x="390" y="250" width="330" height="86" rx="8" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
<g font-size="13" fill="#0f172a">
<text x="56" y="276" font-weight="700">PDU1: PF de 0 a 239</text>
<text x="56" y="298">PS = dirección de destino</text>
<text x="56" y="320">Mensaje dirigido a una ECU (o a 255)</text>
<text x="406" y="276" font-weight="700">PDU2: PF de 240 a 255</text>
<text x="406" y="298">PS = extensión de grupo</text>
<text x="406" y="320">Mensaje de difusión a toda la red</text>
</g>
<text x="380" y="366" text-anchor="middle" font-size="13" fill="#0f172a">Ejemplo: 18FEEE00 hex = prioridad 6, PGN 65262 (temperaturas del motor), origen 0</text>
<text x="380" y="392" text-anchor="middle" font-size="11" fill="#475569">Prioridad 0 = la más alta, 7 = la más baja. Esquema: los anchos no son proporcionales a los bits.</text>
</svg>
<figcaption>Cómo se reparte el identificador de 29 bits de J1939 y cómo se decodifica el mensaje de temperaturas del motor del curso. Ilustración propia.</figcaption>
</figure>

**Prioridad (3 bits).** Decide quién gana el arbitraje cuando dos ECU
transmiten a la vez: 0 (000) es la más alta y 7 (111) la más baja. Los datos
críticos en tiempo, como el control de par entre transmisión y motor, usan
prioridades altas; los datos de configuración, bajas. **Corrección a la
fuente:** la lámina dice "un valor de ocho (111)", pero con 3 bits el máximo es
siete.

**Bit reservado y página de datos (DP).** El reservado se transmite en 0. La
página de datos selecciona entre dos juegos de PGN; según el curso, la página 1
estaba destinada a usos futuros.

**Formato PDU (PF) y PDU específico (PS).** Si el PF va de 0 a 239 (formato
**PDU1**), el PS contiene la dirección de destino: el mensaje va a una ECU
concreta o, con 255, a todas. Si el PF va de 240 a 255 (**PDU2**), el PS es una
extensión del número de grupo y el mensaje es de difusión.

**Dirección de origen (SA, 8 bits).** Identifica a la ECU que transmite. Los
PGN son independientes de la dirección: cualquier ECU puede emitir cualquier
mensaje, y es la SA la que dice quién lo hizo.

## PGN y SPN: dónde está cada dato

El **PGN** (número de grupo de parámetros) identifica un grupo de datos. La
definición de cada grupo dice qué parámetros van en cada byte de los 8 del
campo de datos, cada cuánto se repite y con qué prioridad. Cada parámetro
individual tiene su **SPN** (número de parámetro sospechoso).

El ejemplo del curso es el grupo de temperaturas del motor:

| Dato del PGN 65262 | Valor |
| --- | --- |
| Frecuencia de transmisión | 1 s |
| Longitud de datos | 8 bytes |
| Página de datos | 0 |
| Formato PDU (PF) | 254 |
| PDU específico (PS) | 238 |
| Prioridad por defecto | 6 |
| Número de grupo | 65262 (FEEE hex) |

| Byte | Parámetro | SPN |
| --- | --- | --- |
| 1 | Temperatura del refrigerante | 110 |
| 2 | Temperatura del combustible | 174 |
| 3 y 4 | Temperatura del aceite del motor | 175 |
| 5 y 6 | Temperatura del aceite del turbo | 176 |
| 7 | Temperatura del posenfriador (intercooler) | 52 |
| 8 | Apertura del termostato del posenfriador | 1134 |

Cada SPN tiene a su vez su escala. El SPN 110 ocupa 1 byte, con una resolución
de 1 °C por bit, un desplazamiento de −40 °C y un rango de −40 a 210 °C. Así,
si el byte 1 llega con el valor 125 (7D hex), la temperatura es 125 − 40 =
**85 °C**. El cálculo es nuestro, aplicando la escala del curso.

Juntando todo, la trama que envía el motor (dirección 0) con este grupo tiene el
identificador **18FEEE00 hex**: prioridad 6, PGN FEEE, origen 00.

### Rangos de PGN

| Página | Rango de PGN (hex) | Cantidad | Asignado por | Comunicación |
| --- | --- | --- | --- | --- |
| 0 | 000000 a 00EE00 | 239 | SAE | PDU1, dirigida |
| 0 | 00EF00 | 1 | Fabricante | PDU1, dirigida |
| 0 | 00F000 a 00FEFF | 3840 | SAE | PDU2, difusión |
| 0 | 00FF00 a 00FFFF | 256 | Fabricante | PDU2, difusión |

La página 1 repite el mismo esquema (010000 a 01FFFF). Los grupos de
fabricante son **mensajes propietarios**: el PGN 61184 (00EF00 hex),
"Propietario A", usa el formato PDU1, puede llevar de 0 a 1785 bytes con
transporte multipaquete y su contenido lo define cada fabricante.

**Nota sobre una cifra del curso.** La lámina habla de "8672 grupos de
parámetros por página". Sumando su propia tabla salen 4336 por página
(239 + 1 + 3840 + 256), es decir, 8672 entre las dos páginas.

## Tipos de mensajes y transporte de mensajes largos

El curso distingue cinco tipos de mensaje:

1. **Comando:** PGN ordinario, en PDU1 o PDU2.
2. **Solicitud (request):** PGN 59904 (00EA00 hex), solo PDU1, con 3 bytes de
   datos que contienen el PGN pedido. Con destino 255 se le pide a toda la red.
   Se recomienda no enviarla más de 2 o 3 veces por segundo.
3. **Difusión o respuesta:** PGN ordinario, en PDU1 o PDU2.
4. **Acuse de recibo:** PGN 59392 (00E800 hex), con respuesta positiva,
   negativa, acceso denegado o "no puede responder".
5. **Funciones de grupo:** PGN asignados para funciones propietarias, gestión
   de red y mensajes multipaquete.

Cuando un mensaje supera los 8 bytes, entra en juego el **protocolo de
transporte** de J1939/21:

- **TP.CM** (gestión de conexión), PGN 60416 (00EC00 hex), prioridad 7.
- **TP.DT** (transferencia de datos), PGN 60160 (00EB00 hex), prioridad 7. El
  byte 1 es un número de secuencia (1 a 255) y los bytes 2 a 8 llevan 7 bytes
  útiles; de ahí sale el máximo de 1785 bytes (255 × 7).

Para difundir un mensaje largo, el emisor envía primero un **BAM** (Broadcast
Announce Message) dentro de TP.CM: byte de control 32, tamaño total en bytes 2 y
3, número de paquetes en el byte 4 y el PGN transportado en los bytes 6 a 8.
Luego manda los paquetes TP.DT separados entre **50 y 200 ms**; el receptor
espera cada paquete con un tiempo límite T1 de **750 ms**. En una conexión
dirigida, en cambio, hay control de flujo con los mensajes RTS (solicitud para
enviar), CTS (listo para recibir), EndOfMsgACK (fin de mensaje) y Abort
(anulación).

## Direcciones, NAME y reclamo de dirección

Cada ECU necesita una **dirección de origen** única de 8 bits; hay 254
disponibles. Además, J1939 define un **NAME de 64 bits** que identifica a cada
ECU de forma única y describe su función:

| Campo del NAME | Bits |
| --- | --- |
| Capaz de dirección arbitraria | 1 |
| Grupo de industria | 3 |
| Instancia del sistema del vehículo | 4 |
| Sistema del vehículo | 7 |
| Reservado | 1 |
| Función | 8 |
| Instancia de función | 5 |
| Instancia de ECU | 3 |
| Código del fabricante | 11 |
| Número de identidad | 21 |

Un mismo módulo físico (**ECU**) puede alojar varias **aplicaciones de
control** (CA), y cada una reclama su propia dirección.

El **reclamo de dirección** (address claim) ocurre justo después del arranque.
Cada ECU envía un mensaje "dirección reclamada" (PGN 60928) con su NAME. Si dos
reclaman la misma, **gana la de NAME más bajo**; la otra debe reclamar una
dirección distinta o anunciar "no puede reclamar dirección" con la dirección
de origen 254 y dejar de transmitir. Una herramienta de diagnóstico que se
conecta a una red ya activa usa la "solicitud de dirección reclamada" para
saber qué ECU están presentes.

Para reducir conflictos, la norma recomienda direcciones por grupo de industria.
En la tabla del curso, las direcciones 0 a 84 son asignadas para todas las
industrias y 85 a 127 están reservadas. En equipos de carretera, 128 a 160 son
dinámicas y 161 a 247 asignadas; en equipos de construcción, 128 a 207 son
dinámicas y 208 a 247 reservadas.

## Códigos de falla: SPN y FMI

El curso termina en la gestión de red, pero el uso más frecuente de J1939 en el
taller está en la capa de diagnóstico (J1939/73). Lo esencial:

- El mensaje **DM1** (PGN 65226) difunde los códigos **activos** y el estado de
  las lámparas de advertencia. **DM2** (PGN 65227) entrega los códigos
  previamente activos, normalmente a pedido.
- Cada código de falla (DTC) combina un **SPN** (qué parámetro o componente),
  un **FMI** (qué tipo de falla) y un contador de ocurrencias.

| FMI | Significado |
| --- | --- |
| 0 | Dato válido, pero por encima del rango normal (nivel más severo) |
| 1 | Dato válido, pero por debajo del rango normal (nivel más severo) |
| 2 | Dato errático, intermitente o incorrecto |
| 3 | Voltaje por encima de lo normal o en corto a alto |
| 4 | Voltaje por debajo de lo normal o en corto a bajo |
| 5 | Corriente por debajo de lo normal o circuito abierto |
| 6 | Corriente por encima de lo normal o circuito a masa |
| 7 | El sistema mecánico no responde o está desajustado |
| 8 | Frecuencia, ancho de pulso o período anormal |
| 9 | Tasa de actualización anormal |
| 11 | Causa raíz desconocida |
| 12 | Dispositivo o componente inteligente defectuoso |
| 13 | Fuera de calibración |
| 31 | La condición existe |

La diferencia práctica es enorme. **SPN 110 FMI 0** dice que el motor está
realmente caliente. **SPN 110 FMI 3** dice que la señal del sensor está en
voltaje alto, lo que suele apuntar a un sensor abierto o a un cable cortado o
en corto a positivo: el motor puede estar frío. Lea siempre los dos números y
confirme la definición con el fabricante, porque algunos usan SPN
propietarios.

## Cómo revisar el bus con un multímetro

Cuando la herramienta de diagnóstico no comunica o aparecen códigos de pérdida
de comunicación con varios módulos, conviene descartar primero la capa física.

**El conector.** J1939/13 define un conector de diagnóstico estándar, el
**Deutsch HD10-9-1939**, redondo de 9 pines. En la asignación habitual, A es
masa, B es positivo de batería, C es CAN H, D es CAN L y E es la pantalla
(shield). Verifique siempre con el diagrama eléctrico de la máquina.

**1. Resistencia, con todo apagado.** Desconecte la alimentación del sistema y
mida entre CAN H y CAN L:

| Lectura entre CAN H y CAN L | Interpretación probable |
| --- | --- |
| Cerca de 60 Ω | Las dos terminaciones de 120 Ω están presentes y el troncal está continuo |
| Cerca de 120 Ω | Falta una terminación o hay un tramo abierto entre el punto de medición y un extremo |
| Cerca de 0 Ω | Cortocircuito entre CAN H y CAN L |
| Muy alta o abierta | Faltan ambas terminaciones o el conector no llega al troncal |
| Bastante menor que 60 Ω | Hay una terminación de más, por ejemplo en un módulo agregado |

Mida también cada línea contra masa y contra positivo: debe haber alta
resistencia. Una lectura baja indica un cable rozado contra el chasis o en corto
con alimentación.

**2. Voltaje, con contacto.** Con el sistema energizado, mida cada línea contra
masa. Como el multímetro promedia, en un bus activo verá CAN H algo por encima
de 2,5 V y CAN L algo por debajo. Si una línea está pegada a 0 V o al voltaje de
batería, hay un corto.

**3. Aísle por tramos.** Si la resistencia es incorrecta, desconecte módulos o
conectores intermedios uno por uno y repita la medición hasta encontrar el tramo
que cambia la lectura.

Si la capa física está bien y aun así falla la comunicación, la sospecha pasa a
la alimentación y la masa de los módulos: un módulo sin buena masa puede
perturbar todo el bus. El artículo sobre [circuitos de alimentación y toma a
tierra](/posts/circuitos-alimentacion-tierra-control-electronico-motor/)
explica cómo revisarlos.

## Errores comunes

- **Medir resistencia con el sistema energizado.** La lectura no es válida y
  puede dañar el instrumento. Siempre sin alimentación.
- **Agregar una resistencia terminal "por si acaso".** Tres terminaciones bajan
  la resistencia del bus a unos 40 Ω y degradan la señal.
- **Hacer ramales largos al instalar un accesorio.** Un GPS o una telemetría
  conectada con un cable largo, o en estrella, provoca reflexiones y errores
  intermitentes.
- **Interpretar solo el SPN.** Sin el FMI no se sabe si el problema es el
  sistema o el circuito del sensor.

## Para seguir leyendo

Si viene del mundo automotriz, compare J1939 con el [principio del
OBD](/posts/principio-del-obd-como-funciona-el-diagnostico-a-bordo-vehiculos/)
en vehículos livianos. Para ver una ECU de motor pesado y su cableado, lea
[el ECM y el equipo eléctrico del Cummins
ISX/QSX15](/posts/ecm-cummins-equipo-electrico/), y para un ejemplo de cómo un
fabricante presenta sus códigos y su protección de motor, [DDEC VI en el
Detroit Serie 60](/posts/ddec-vi-detroit-serie-60-codigos-y-proteccion-motor/).
La técnica de medición con multímetro en una máquina completa está en [el
sistema eléctrico de la
retroexcavadora](/posts/sistema-electrico-retroexcavadora-diagnostico/).

**Fuentes:** presentación de formación sobre SAE J1939, control de vehículos
en serie y comunicaciones de red, publicada en [Maquinarias
Pesadas](https://www.maquinariaspesadas.org/blog/6822-manual-sae-j1939-control-vehiculos-serie-comunicaciones-red-parametros).
La tabla de FMI, los mensajes DM1 y DM2 y los valores típicos de voltaje del
bus provienen de la documentación general de J1939 y de la capa física CAN, no
del curso. Valores referenciales; prevalece el manual de servicio del equipo.

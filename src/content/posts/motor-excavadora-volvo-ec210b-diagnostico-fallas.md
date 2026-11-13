---
title: "Motor Volvo EC210B (D6DEAE2): sistemas y diagnóstico de fallas"
published: 2026-11-14
draft: false
featured: false
description: "Motor D6DEAE2 de la excavadora Volvo EC210B: especificaciones, lubricación, combustible, aire, refrigeración, control de régimen y una guía práctica de diagnóstico."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "volvo-ec210b"
  - "motor-diesel"
  - "diagnostico-de-fallas"
  - "excavadora"
  - "sistema-de-refrigeracion"
  - "turbocompresor"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/excavadoras/motor-excavadora-volvo-ec210b-diagnostico-fallas
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Qué motor lleva la excavadora Volvo EC210B según su manual de taller?"
    a: "El manual de taller consultado lo identifica como modelo D6DEAE2, un diésel de 4 tiempos, 6 cilindros en línea, refrigerado por agua, con inyección directa, turboalimentado y postenfriado aire-aire. Declara una potencia neta de 145 PS (143 HP) a 1.900 rpm y un par máximo de 66 kgf·m a 1.425 rpm. Los valores pueden variar según el mercado y la versión de la máquina, por lo que conviene confirmarlos con la placa del motor."
  - q: "¿Qué presión de aceite mínima exige el motor en ralentí?"
    a: "El manual indica un mínimo de 0,8 kgf/cm² (12 psi) en ralentí con el motor caliente, con el aceite a 120 °C y medida en el soporte del filtro. Una lectura inferior no se interpreta como un simple desgaste: obliga a descartar primero nivel, aceite inadecuado o diluido, filtro y válvulas, antes de sospechar de la bomba o de los cojinetes. Para el diagnóstico se usa un manómetro independiente, no solo el sensor del tablero."
  - q: "¿Qué hacer si el motor pierde potencia y no aparece ningún código de error?"
    a: "Los códigos solo cubren lo que la unidad de control puede medir. Si no hay código, se revisa lo mecánico y lo hidráulico: restricción del filtro de aire, filtro de combustible tapado o con agua, enfriador de aire de sobrealimentación sucio o con fugas, temperatura de refrigerante alta y, en una excavadora, también la carga hidráulica. Un motor sano puede parecer débil si la bomba hidráulica lo carga en exceso o si el mando de régimen no está en la posición correcta."
  - q: "¿Qué calidad de agua exige el manual para el refrigerante?"
    a: "El manual fija para el agua un pH entre 6,5 y 8,5 a 20 °C, un máximo de 100 mg/dm³ de cloruros y de azufre, y una dureza total entre 3 y 12 °dGH. Además pide mezclar el agua con un acondicionador del sistema en una concentración entre el 35 % y el 45 %. Usar agua de pozo dura o de calidad desconocida favorece incrustaciones y corrosión, y reduce la capacidad de enfriamiento del sistema."
  - q: "¿Cómo se comporta el motor en altura y con calor extremo?"
    a: "A mayor altitud hay menos densidad de aire, así que el turbocompresor trabaja más y el motor pierde potencia si no se mantiene limpio el circuito de aire. El calor ambiental reduce el margen del sistema de refrigeración, por eso importan el estado del radiador, de los enfriadores y de la correa del ventilador. Estas son orientaciones generales de taller; las curvas de potencia por altitud deben consultarse en la documentación del equipo."
sources:
  - title: "Manual de taller excavadora hidráulica EC210B Volvo 01 — Sección 2, Motor (maquinariaspesadas.org)"
    url: "https://www.maquinariaspesadas.org/blog/612-manual-taller-excavadora-hidraulica-ec210b-volvo-01"
related:
  - sistema-combustible-volvo-d7e
  - guia-combustible-admision-escape-motores-diesel
  - sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor
---

Cuando una excavadora llega al taller con "falta de fuerza" o con el
motor caliente, el error más caro es empezar cambiando piezas. El motor
de una EC210B es un conjunto de cinco sistemas que se influyen entre sí:
si entiendes qué hace cada uno y qué valores debe cumplir, la falla casi
siempre se ubica con medidas simples antes de abrir nada.

Esta guía recorre el motor de la Volvo EC210B tal como lo describe su
manual de taller (sección 2, Motor): sus datos principales, la
lubricación, el combustible, el aire, la refrigeración y el control de
régimen. Después arma un flujo de diagnóstico práctico y una tabla de
síntomas pensada para condiciones reales de Latinoamérica: polvo,
combustible de calidad variable, calor y altitud.

## Qué motor es y qué datos conviene tener a mano

El manual identifica el motor como **D6DEAE2** (marca Volvo): diésel de
4 tiempos, 6 cilindros, vertical, refrigerado por agua, con inyección
directa, turboalimentado y postenfriado aire-aire. En la lista de
contenidos del manual el motor aparece asociado a la familia Deutz D6D,
dato útil si buscas información de componentes.

| Dato | Valor del manual |
|---|---|
| Potencia nominal (neta) | 145 PS (143 HP) a 1.900 rpm |
| Par máximo (neto) | 66 kgf·m (477 lbf·ft) a 1.425 rpm |
| Cilindros, diámetro × carrera | 6 cilindros, 98 × 126 mm |
| Cilindrada total | 5.700 cc |
| Ralentí bajo / alto | 800 / 2.000 rpm |
| Juego de válvulas (admisión / escape) | 0,3 mm / 0,5 mm |
| Presión mínima de aceite en ralentí, motor caliente | 0,8 kgf/cm² (12 psi), aceite a 120 °C |
| Aceite del motor (mínimo / máximo / con filtro) | 16 / 23,5 / 25 L |
| Termostato: apertura / apertura total | 83 / 95 °C |
| Refrigerante: solo motor / sistema completo | 6,8 L / 27,5 L |

Fuente de la tabla: Tabla 1 del manual de taller de la EC210B. Son los
valores de referencia del manual; la placa del motor y la versión de la
máquina mandan si hay diferencias.

Hay dos lecturas que te ahorran errores:

- **El par máximo está a 1.425 rpm, no a régimen máximo.** Por eso un
  motor "ahogado" bajo carga pesada cae hacia esa zona y se oye
  sufrir: es el rango donde más empuje entrega, y donde una falla de
  aire o de combustible se nota primero.
- **El juego de válvulas se mide con el aceite entre 20 °C y 80 °C**, según
  el procedimiento de ajuste del manual. Medirlo con el motor recién
  apagado y muy caliente da lecturas engañosas.

## Lubricación: presión, válvulas y por qué importa cada una

El sistema es de **engrase forzado de flujo total**: una bomba rotativa
accionada por el cigüeñal empuja el aceite por el enfriador y por el
filtro, y de ahí a la galería principal. El manual da un caudal de la
bomba de 65 L/min a 2.500 rpm.

La galería principal alimenta cigüeñal, árbol de levas y empujadores; una
galería secundaria alimenta el turbocompresor de escape. Los balancines
reciben aceite a través de los empujadores y las varillas. Además, unas
boquillas rocían aceite bajo la cabeza de cada émbolo para enfriarlo.
Ese detalle explica por qué una presión de aceite baja daña pistones,
no solo cojinetes.

Tres válvulas protegen el circuito, y conocerlas permite interpretar
mediciones:

| Válvula | Presión de apertura | Para qué sirve |
|---|---|---|
| Derivación del enfriador | 2,1 ± 0,35 bar | Protege al enfriador de picos de presión |
| Derivación del filtro | 2,5 ± 0,5 bar | Evita quedarse sin aceite si el filtro se tapa, a costa de filtrar menos |
| Regulación de presión | 4,0 ± 0,4 bar | Limita la presión máxima del circuito |

Valores de la Tabla 6 y de la tabla de la caja del enfriador del manual.
Hay además una válvula de retención que evita que el circuito se vacíe
con el motor parado, lo que ayuda a que la presión llegue rápido en el
arranque.

**Cómo usarlo en el diagnóstico:** si la presión es baja solo en
caliente y en ralentí, piensa en aceite adelgazado por combustible o por
temperatura excesiva, en la bomba o en holguras de cojinetes. Si es baja
también en frío, revisa nivel, aspiración y la válvula reguladora, que
puede quedar abierta por suciedad. Un filtro tapado, en cambio, rara vez
baja la presión: el bypass se abre y el motor sigue "con presión" pero
con aceite sin filtrar, que es peor a mediano plazo. Para profundizar en
la lubricación y el turbo, mira
[lubricación y enfriamiento en un turbocompresor](/posts/sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor/).

## Combustible: bombas individuales, presión y la trampa del agua

El D6DEAE2 no es un common rail. Usa **seis bombas simples de inyección**
integradas en el cárter, una por cilindro, que envían el combustible por
tubos de alta presión a los inyectores. El manual indica una presión
máxima de inyección de hasta 1.350 bar, una bomba de inyección de marca
Bosch y un consumo de 216 g/kW·h a 1.900 rpm. Con esto el motor declara
cumplir los niveles EURO I a III.

El recorrido del combustible es este:

1. **Depósito** (315 L / 83 gal) con colador en la salida hacia la
   línea de aspiración.
2. **Prefiltro** y **bomba de alimentación** rotativa, accionada por la
   correa politrapezoidal (la misma que mueve el ventilador).
3. **Filtro de combustible** y conducto de alimentación hacia las
   bombas individuales.
4. **Válvula de retención de presión** al final del conducto y retorno
   al depósito.

Dos datos prácticos del manual:

- Con el indicador de nivel en VACÍO todavía quedan unos **40 litros**.
  No es una invitación a operar así: el fondo del depósito concentra
  agua y sedimentos.
- Si el sistema se vacía, se puede **cebar con la bomba de mano**, lo
  que evita arrancar durante mucho tiempo y fatigar la batería y el
  motor de arranque.

El manual también advierte contra reducir la sección de la tubería que
llega a la bomba de alimentación, porque provoca pérdida de potencia.
Esto aplica a reparaciones improvisadas: una manguera aplastada o un
racor con menor paso puede causar el mismo síntoma que un filtro tapado.

**Calidad de combustible en la región.** En obra es común recibir diésel
con agua, partículas o de procedencia dudosa. Con bombas de inyección de
precisión y a 1.350 bar, el agua y la suciedad degradan émbolos y toberas
muy rápido. El manual lo refleja en la bomba de repostaje: su malla es un
simple **colador y no filtra impurezas**, y exige repostar solo con
combustible limpio. Buenas prácticas: drenar el agua del prefiltro cada
turno, no llenar desde bidones abiertos al polvo y respetar el cambio del
filtro. Para comparar con un sistema más moderno, lee
[el sistema Common Rail del Volvo D7E](/posts/sistema-combustible-volvo-d7e/)
y la [guía de combustible, admisión y escape en motores diésel](/posts/guia-combustible-admision-escape-motores-diesel/).

## Aire: del filtro al cilindro y de vuelta al escape

El aire pasa por un **prefiltro**, el **filtro de aire** y el
**turbocompresor** antes de entrar a la cámara. Un sensor detecta la
obstrucción del conducto de admisión y enciende una lámpara de
advertencia en el tablero. La turbina del turbo se mueve con los gases
de escape, y el aire comprimido, que sale caliente, se enfría en el
**refrigerador de aire de sobrealimentación** (intercooler) antes de
llegar al colector de admisión.

<figure class="diagram">
<svg viewBox="0 0 800 280" role="img" aria-label="Recorrido del aire y de los gases en el motor: prefiltro y filtro de aire, turbocompresor, enfriador de aire de sobrealimentación, colector de admisión, cilindros, colector de escape, turbina del turbo y silenciador" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="ea1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d4ed8"/></marker>
<marker id="ea2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#b45309"/></marker>
</defs>
<rect x="0" y="0" width="800" height="280" rx="12" fill="#f3f4f6"/>
<text x="20" y="28" font-size="15" font-weight="bold" fill="#1d4ed8">Admisión (aire)</text>
<rect x="20" y="40" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="100" y="68" text-anchor="middle" font-size="14" fill="#111827">Prefiltro y</text>
<text x="100" y="88" text-anchor="middle" font-size="14" fill="#111827">filtro de aire</text>
<rect x="210" y="40" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="290" y="68" text-anchor="middle" font-size="14" fill="#111827">Turbocompresor</text>
<text x="290" y="88" text-anchor="middle" font-size="14" fill="#111827">(lado compresor)</text>
<rect x="400" y="40" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="480" y="68" text-anchor="middle" font-size="14" fill="#111827">Enfriador de aire</text>
<text x="480" y="88" text-anchor="middle" font-size="14" fill="#111827">de sobrealimentación</text>
<rect x="590" y="40" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="670" y="68" text-anchor="middle" font-size="14" fill="#111827">Colector de</text>
<text x="670" y="88" text-anchor="middle" font-size="14" fill="#111827">admisión</text>
<line x1="180" y1="72" x2="206" y2="72" stroke="#1d4ed8" stroke-width="3" marker-end="url(#ea1)"/>
<line x1="370" y1="72" x2="396" y2="72" stroke="#1d4ed8" stroke-width="3" marker-end="url(#ea1)"/>
<line x1="560" y1="72" x2="586" y2="72" stroke="#1d4ed8" stroke-width="3" marker-end="url(#ea1)"/>
<line x1="670" y1="104" x2="670" y2="156" stroke="#1d4ed8" stroke-width="3" marker-end="url(#ea1)"/>
<line x1="290" y1="104" x2="290" y2="156" stroke="#6b7280" stroke-width="2" stroke-dasharray="6 4"/>
<text x="302" y="134" font-size="13" fill="#374151">eje común</text>
<rect x="590" y="160" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="670" y="198" text-anchor="middle" font-size="14" fill="#111827">Cilindros</text>
<rect x="400" y="160" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="480" y="188" text-anchor="middle" font-size="14" fill="#111827">Colector</text>
<text x="480" y="208" text-anchor="middle" font-size="14" fill="#111827">de escape</text>
<rect x="210" y="160" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="290" y="188" text-anchor="middle" font-size="14" fill="#111827">Turbocompresor</text>
<text x="290" y="208" text-anchor="middle" font-size="14" fill="#111827">(lado turbina)</text>
<rect x="20" y="160" width="160" height="64" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="100" y="188" text-anchor="middle" font-size="14" fill="#111827">Silenciador</text>
<text x="100" y="208" text-anchor="middle" font-size="14" fill="#111827">y tubo de escape</text>
<line x1="590" y1="192" x2="564" y2="192" stroke="#b45309" stroke-width="3" marker-end="url(#ea2)"/>
<line x1="400" y1="192" x2="374" y2="192" stroke="#b45309" stroke-width="3" marker-end="url(#ea2)"/>
<line x1="210" y1="192" x2="184" y2="192" stroke="#b45309" stroke-width="3" marker-end="url(#ea2)"/>
<text x="20" y="256" font-size="15" font-weight="bold" fill="#b45309">Escape (gases)</text>
</svg>
<figcaption>Recorrido simplificado del aire de admisión (azul) y de los gases de escape (ámbar). La turbina y el compresor comparten eje. Ilustración propia, no a escala.</figcaption>
</figure>

El enfriador de aire de sobrealimentación de la EC210B es de núcleo
de aluminio, de una fila de aleta ondulada, con tubos extruidos y un
peso en seco de 12 kg. Está montado en el bastidor del radiador, junto al
enfriador de aceite hidráulico, de modo que **todos comparten el mismo
aire que mueve el ventilador**. Esa cercanía tiene una consecuencia
directa: un radiador tapado de polvo no solo calienta el refrigerante,
también eleva la temperatura del aire de admisión y del aceite hidráulico.

Qué conviene saber del lado del aire:

- **Fugas entre turbo e intercooler.** Una abrazadera floja o una
  manguera resecada dejan escapar aire comprimido: la máquina pierde
  potencia, humea y el turbo trabaja de más. Las abrazaderas del circuito
  tienen pares específicos en el manual; apretarlas de más también daña
  mangueras.
- **Escape.** El silenciador se une al turbo con una abrazadera de
  sellado. Una fuga antes de la turbina roba energía al turbo y baja la
  presión de admisión.
- **Altitud.** A mayor altura el aire es menos denso, así que el turbo
  gira más rápido para compensar. Si además hay filtro sucio o intercooler
  obstruido, el motor se queda corto de aire y el humo negro aparece
  antes. Es un efecto general; las pérdidas exactas dependen de cada
  configuración.

Para ver cómo se diagnostica la sobrealimentación en otro motor Volvo,
tienes la guía de [fallas y presión de sobrealimentación](/posts/averia-presion-sobrealimentacion/).

## Refrigeración: termostato, ventilador y calidad del agua

El circuito es cerrado, de **circulación forzada**: la bomba de agua
interna empuja el refrigerante por el bloque, la culata y el radiador.
Mientras el motor está frío, el refrigerante no pasa por el radiador. El
termostato empieza a abrir a **83 °C** y queda totalmente abierto a
**95 °C**, según el manual.

El manual también describe cómo debe ser el agua y la mezcla, y es una de
las partes más útiles para la región:

| Parámetro del agua | Mínimo | Máximo |
|---|---|---|
| pH a 20 °C | 6,5 | 8,5 |
| Iones de cloro | — | 100 mg/dm³ |
| Iones de azufre | — | 100 mg/dm³ |
| Dureza total | 3 °dGH | 12 °dGH |

Además, el acondicionador de refrigerante se dosifica entre el 35 % y el
45 % del volumen: 35 % protege hasta -22 °C, 40 % hasta -28 °C y 45 %
hasta -35 °C. El manual precisa que el acondicionador comercializado por
la marca es **sin nitritos, aminas ni fosfatos**, y que la compatibilidad
de otros productos debe confirmarse. Usar agua dura de pozo, o solo agua
sin acondicionador, favorece sarro, corrosión y cavitación en la bomba y
las camisas, que es lo que el manual advierte como causa de daños graves.

**Calor extremo.** Un motor que se calienta solo en el calor del
mediodía y bajo carga suele tener el radiador o los enfriadores
obstruidos de polvo y barro, la correa del ventilador patinando, el
tapón de radiador debilitado o aire atrapado tras un relleno. Una
advertencia del manual vale oro en obra: **antes de abrir el tapón del
radiador, apaga el motor, deja enfriar y gíralo lentamente** para liberar
la presión.

El calentador de refrigerante opcional (1.250 W, 120 V) se alimenta con
tensión externa y se usa para arranques en climas extremadamente fríos,
algo relevante en altiplano y zonas altas durante la madrugada.

Si quieres comparar con otro diseño, revisa el
[sistema de enfriamiento del Cummins ISX](/posts/sistema-enfriamiento-cummins/).

## Control de régimen: el mando que decide cuánto "pide" el motor

En la EC210B el régimen del motor no se maneja con un acelerador
mecánico. El operador gira un **mando de régimen** en el panel. Ese mando
es un potenciómetro alimentado a 24 V CC que entrega a la unidad de
control de la máquina (VECU en el manual) una tensión de 0 a 5 V según el
paso elegido. El manual da tres puntos de verificación: **0,5 V en el
paso 1 (modo I2), 2,5 V en el paso 5 (F1) y 4,5 V en el paso 9
(H o P)**.

Cada paso corresponde a un modo de trabajo con un régimen objetivo.
Algunos ejemplos de la tabla del manual (versión "excepto NAFTA") sin carga:

| Modo | Paso | Régimen sin carga |
|---|---|---|
| Potencia máxima (P) | 9 | 2.000 rpm |
| Pesado (H) | 9 | 1.900 rpm |
| Generalidades (G1 / G2 / G3) | 8 / 7 / 6 | 1.800 / 1.700 / 1.600 rpm |
| Fino (F1 / F2 / F3) | 5 / 4 / 3 | 1.500 / 1.400 / 1.300 rpm |
| Ralentí (I1 / I2) | 2 / 1 | 1.000 / 800 rpm |

Esto tiene un efecto práctico enorme en el diagnóstico: **un operador
que trabaja en el paso 6 en lugar del 9 y se queja de "falta de fuerza"
no tiene un problema de motor**. Antes de medir nada, confirma el modo y
el paso. Si el mando falla (tensión fuera de 0 a 5 V, cables en
cortocircuito, conector sulfatado), el motor se comporta de forma
errática.

**Modo de emergencia.** Si el sistema de control no responde, el manual
indica poner el interruptor AUTO/MANUAL en MANUAL y usar el interruptor
de emergencia: en posición alta fija el motor en 1.900 rpm; en baja,
en 800 rpm. Después de reparar, el interruptor vuelve a AUTOMÁTICO. Es un
recurso para mover la máquina o terminar un ciclo, no para trabajar en
producción.

### Cómo se relaciona con el control electrónico del motor

La unidad electrónica del motor (rotulada **E-ECU** en el despiece del
manual) y la VECU de la máquina se reparten funciones: la VECU recibe el
mando del operador y la E-ECU gestiona el motor con sus sensores, entre
ellos el de régimen. El motor conserva bombas de inyección individuales;
la electrónica supervisa y corrige, y por eso los **códigos de error**
son el primer paso del diagnóstico. No es necesario entrar en esquemas
eléctricos para sacar partido: lee códigos, revisa parámetros y
descarta primero lo mecánico.

## Cómo plantea el manual la localización de fallos

La sección de motor del manual no trae una tabla de síntomas y causas.
Define un **método**: una falla se detecta por un código de error o por
un síntoma, se le pregunta al operador qué ocurre y se verifica en este
orden:

1. **Códigos de error.**
2. **Parámetros** (un parámetro mal ajustado puede producir síntomas de
   mal funcionamiento).
3. **Comprobación básica**, que se ejecuta con la herramienta VCADS Pro
   y reúne cuatro pruebas: compresión de cilindros (detecta un cilindro
   fuera de lo normal, sin dar un valor absoluto), equilibrado de
   cilindros (desviaciones en la inyección), presión de alimentación y
   prueba de sensores.

El manual advierte además que algunas pruebas se hacen con la palanca de
bloqueo de seguridad desbloqueada, y que hay que asegurar que la máquina
no se mueva de forma inesperada.

<figure class="diagram">
<svg viewBox="0 0 800 420" role="img" aria-label="Flujo de diagnóstico del motor en cinco pasos: interrogar al operador, leer códigos y parámetros, comprobación básica, revisar aire combustible aceite y refrigerante si no hay código, corregir y validar" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="fd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#374151"/></marker>
</defs>
<rect x="0" y="0" width="800" height="420" rx="12" fill="#f3f4f6"/>
<rect x="30" y="20" width="740" height="52" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<circle cx="64" cy="46" r="16" fill="#1d4ed8"/>
<text x="64" y="52" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">1</text>
<text x="96" y="52" font-size="15" fill="#111827">Interrogar al operador: síntoma, cuándo aparece, con o sin carga</text>
<line x1="400" y1="72" x2="400" y2="96" stroke="#374151" stroke-width="2.5" marker-end="url(#fd1)"/>
<rect x="30" y="98" width="740" height="52" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<circle cx="64" cy="124" r="16" fill="#1d4ed8"/>
<text x="64" y="130" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">2</text>
<text x="96" y="130" font-size="15" fill="#111827">Leer códigos de error y revisar parámetros con la herramienta</text>
<line x1="400" y1="150" x2="400" y2="174" stroke="#374151" stroke-width="2.5" marker-end="url(#fd1)"/>
<rect x="30" y="176" width="740" height="52" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<circle cx="64" cy="202" r="16" fill="#1d4ed8"/>
<text x="64" y="208" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">3</text>
<text x="96" y="208" font-size="15" fill="#111827">Comprobación básica: compresión, equilibrado, alimentación, sensores</text>
<line x1="400" y1="228" x2="400" y2="252" stroke="#374151" stroke-width="2.5" marker-end="url(#fd1)"/>
<rect x="30" y="254" width="740" height="52" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
<circle cx="64" cy="280" r="16" fill="#b45309"/>
<text x="64" y="286" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">4</text>
<text x="96" y="286" font-size="15" fill="#111827">Sin código ni prueba anómala: aire, combustible, aceite, refrigerante</text>
<line x1="400" y1="306" x2="400" y2="330" stroke="#374151" stroke-width="2.5" marker-end="url(#fd1)"/>
<rect x="30" y="332" width="740" height="52" rx="8" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<circle cx="64" cy="358" r="16" fill="#1d4ed8"/>
<text x="64" y="364" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">5</text>
<text x="96" y="364" font-size="15" fill="#111827">Corregir la causa raíz, borrar códigos y validar bajo carga</text>
<text x="30" y="408" font-size="13" fill="#374151">Pasos 1 a 3: orden indicado por el manual. Pasos 4 y 5: criterio de taller (ámbar).</text>
</svg>
<figcaption>Flujo de diagnóstico. Los pasos 1 a 3 siguen el orden del manual; el paso 4 es una práctica de taller que se aplica cuando las pruebas electrónicas no explican la falla. Ilustración propia.</figcaption>
</figure>

## Tabla de síntomas: qué revisar primero

La siguiente tabla **no proviene del manual**: es una guía general de
taller, armada sobre los sistemas descritos arriba. Úsala para ordenar la
revisión y confirma cada valor con el manual del equipo.

| Síntoma | Qué revisar, en orden | Causas probables | Por qué ocurre |
|---|---|---|---|
| Falta de potencia | Mando de régimen y modo; lámpara de filtro de aire; filtro de combustible; fugas de aire en el turbo | Modo mal elegido, filtro de aire o de combustible saturado, manguera del intercooler floja | El motor entrega su par en la zona de 1.425 rpm; cualquier restricción de aire o combustible aparece ahí primero |
| Humo negro | Filtro de aire, enfriador de aire de sobrealimentación, mangueras, turbo | Falta de aire respecto al combustible, fuga de aire, inyector deficiente | Sin aire suficiente el combustible se quema mal |
| Humo blanco al arrancar | Combustible, aire atrapado, calentamiento, estado de batería | Combustible con agua, arranque en frío, pérdida de compresión | La combustión incompleta con el motor frío se ve como humo |
| Sobrecalentamiento | Nivel y concentración de refrigerante, radiador y enfriadores, correa del ventilador, tapón, termostato | Aletas obstruidas, correa suelta, termostato que no abre, sarro por agua dura | Los tres enfriadores comparten el flujo de aire del ventilador |
| Presión de aceite baja | Nivel, grado y dilución del aceite, manómetro independiente, filtro, válvulas | Aceite diluido, válvula reguladora sucia, bomba o cojinetes desgastados | Mínimo del manual: 0,8 kgf/cm² en ralentí con motor caliente |
| Arranque difícil o motor que se apaga | Nivel de combustible, prefiltro, cebado con bomba de mano, conexiones de aspiración | Aire en el circuito, filtro tapado, manguera aplastada, agua en el combustible | La bomba de alimentación es sensible a entradas de aire y restricciones |
| Humo azul o consumo de aceite | Respiradero del cárter, turbo, nivel de aceite | Retén del turbo, desgaste de segmentos | El aceite llega a la cámara de combustión |
| Régimen errático o sin respuesta | Mando de régimen (0 a 5 V), conectores, interruptor AUTO/MANUAL, códigos | Potenciómetro defectuoso, conector sulfatado, cable dañado | El mando envía una tensión a la VECU; si falla esa señal, falla el régimen |

En la práctica ayuda un principio: **descarta primero lo barato y lo que
puedes ver**. Filtros, mangueras, correas, niveles y conectores explican
la mayoría de las consultas antes de llegar a compresión o a inyección.

## Contexto latinoamericano: tres enemigos del motor

1. **Polvo.** Minería, canteras y obras viales saturan el filtro de aire
   y los núcleos de los enfriadores. Limpia el exterior de radiador y
   enfriadores en cada turno y respeta la lámpara de restricción de aire:
   cuando se enciende, el filtro ya está limitando.
2. **Calidad de combustible y de agua.** Diésel con agua o partículas y
   refrigerante armado con agua de pozo son dos de las causas más
   frecuentes de desgaste prematuro. Ambos se previenen con prácticas
   baratas: drenar el prefiltro, usar combustible limpio y preparar el
   refrigerante con agua que cumpla los límites del manual.
3. **Altitud y calor.** El motor trabaja con menos aire, y el sistema de
   refrigeración pierde margen en días calurosos. Un intercooler y un
   radiador limpios, y un turbo sin fugas, son la mejor compensación.

## Resumen

El D6DEAE2 es un diésel de seis cilindros que se diagnostica mejor
si piensas en **cinco sistemas conectados**: aceite, combustible, aire,
refrigeración y control de régimen. Sigue el orden del manual (códigos,
parámetros, comprobación básica) y, si no hay códigos, revisa lo visible y
barato antes de lo caro. Confirma siempre que el operador esté en el modo
de trabajo correcto: muchas "fallas de potencia" son un mando mal
seleccionado.

Para seguir con la misma máquina: el
[mantenimiento de la EC210B: lubricantes e intervalos](/posts/mantenimiento-excavadora-volvo-ec210b-lubricantes-intervalos/)
y el [mando de traslación y giro](/posts/mando-traslacion-giro-excavadora-volvo-ec210b/).
Para la parte de aceite y refrigeración en turbos, consulta
[lubricación y enfriamiento en un turbocompresor](/posts/sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor/).

**Fuentes:** Manual de taller de la excavadora hidráulica Volvo EC210B,
sección 2 "Motor" (especificaciones, localización de fallos, lubricación,
combustible, admisión y escape, refrigeración y control del motor),
publicado en
[maquinariaspesadas.org](https://www.maquinariaspesadas.org/blog/612-manual-taller-excavadora-hidraulica-ec210b-volvo-01).
Las tablas de síntomas y las recomendaciones de campo son criterio
editorial y no forman parte del manual.

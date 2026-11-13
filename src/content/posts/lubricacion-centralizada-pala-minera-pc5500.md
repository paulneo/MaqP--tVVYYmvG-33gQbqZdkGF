---
title: "Lubricación centralizada en palas mineras: sistema de una línea de la PC5500"
published: 2026-11-18
draft: false
featured: false
description: "Cómo funciona la lubricación centralizada de una pala minera Komatsu PC5500 con bomba Power Master III: ciclo, inyectores, fallas típicas y lista de inspección."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "lubricacion-centralizada"
  - "pala-minera"
  - "komatsu-pc5500"
  - "power-master-iii"
  - "sistema-de-una-linea"
  - "mineria-cielo-abierto"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/mineria/lubricacion-centralizada-pala-minera-pc5500
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Por qué la pala usa un sistema de una sola línea y no engrase manual?"
    a: "Una pala de este tamaño tiene decenas de puntos de lubricación, muchos de ellos en zonas de difícil acceso o en movimiento. El engrase manual depende de que alguien llegue a todos los puntos, con la cantidad correcta y a tiempo. El sistema de una línea dosifica cada punto con un inyector calibrado, repite el ciclo de forma automática según un tiempo en pausa que fija el PLC y avisa cuando la presión no se alcanza. Así se reduce el riesgo de omisiones y de desgaste por falta de grasa."
  - q: "¿Qué hace la válvula de ventilación (venteo) en el ciclo?"
    a: "Mientras está energizada cierra el retorno de la línea de grasa al depósito, de modo que la bomba pueda subir la presión. Al quitarle la corriente, el retorno se abre y la línea baja a presión cero. Ese alivio es indispensable: los inyectores de una sola línea solo se recargan cuando la presión cae y el resorte devuelve el pistón a su posición inicial. Si la válvula no abre, los inyectores quedan bloqueados y el siguiente ciclo no dosifica."
  - q: "¿Qué significa el mensaje de falla del sistema de lubricación central?"
    a: "Según el manual de la bomba Power Master III de la PC5500, el mensaje aparece cuando el interruptor de fin de línea no alcanza su presión dentro del tiempo de monitoreo ajustado, y la bomba se detiene. No identifica la causa: puede ser un depósito vacío, aire en la línea, una fuga, un inyector bloqueado o un interruptor mal regulado. Por eso la inspección sigue un orden, de lo más simple a lo más complejo."
  - q: "¿Se puede seguir trabajando con el sistema de lubricación en falla?"
    a: "El manual indica que, si la pala sigue operando con la falla activa, el PLC detiene la función del cucharón tras 4 horas adicionales, y lo mismo ocurre con el depósito vacío. Es una protección para evitar daños por falta de lubricante, no un margen de trabajo. La falla debe atenderse en la siguiente parada programada, y mejor antes."
  - q: "¿Qué grasa se usa en este tipo de sistema?"
    a: "El manual especifica grasas NLGI de clases 000, 00, 0 y 1, elegidas según la temperatura ambiente más baja del sitio, con contenido de molibdeno no superior a 5 % y, si hay grafito, solo grafito sintético. Estas grasas son relativamente fluidas porque deben recorrer líneas largas y pasar por inyectores finos. La marca y la referencia exacta se toman de la literatura de servicio del equipo."
sources:
  - title: "Manual bomba de lubricación hidráulica Power Master III, pala PC5500 Komatsu (Sección 15)"
    url: "https://www.maquinariaspesadas.org/blog/2056-manual-bomba-lubricacion-hidraulica-power-master-iii-pala-pc5500-komatsu"
related:
  - mineria-cielo-abierto
  - maquinaria-mineria
  - sistemas-lubricacion
---

En una pala minera de gran porte, el engrase no es una tarea de mantenimiento más: es un sistema de control con bomba, válvulas, sensores y lógica de PLC. Un pasador que trabaja sin película de grasa puede pasar de la operación normal al daño en pocas horas, y detener una pala de este tamaño tiene consecuencias de producción que ningún ahorro en grasa compensa.

Esta guía usa como ejemplo la **Komatsu PC5500** con la bomba de lubricación hidráulica **Power Master III**, descrita en su manual de servicio. Vemos qué lubrica el sistema, cómo funciona un ciclo completo, qué hace cada componente, cuáles son las fallas más frecuentes y cómo ordenar una inspección. Los valores numéricos provienen de ese manual; cuando un dato no está allí, se marca como referencial.

## Por qué la lubricación centralizada es crítica en una pala

Una pala de cable o hidráulica de gran tamaño concentra cargas altísimas en articulaciones que se mueven poco y despacio, justo el régimen donde la película de lubricante es más difícil de mantener. Los grupos que dependen del sistema son, en términos generales:

- **Pasadores y bujes** de la pluma, el brazo, el cucharón y los cilindros: cargas elevadas, oscilaciones cortas, entrada de polvo y agua.
- **Corona de giro** (anillo de giro): soporta el peso de toda la superestructura y las cargas de excavación.
- **Engranajes abiertos y piñones de giro**: trabajan sin cárter, expuestos al polvo, y necesitan una película uniforme sobre el flanco del diente.

Por qué automatizar:

| Problema del engrase manual | Qué resuelve el sistema central |
|---|---|
| Puntos omitidos o con poca grasa | Un inyector dosifica cada punto en cada ciclo |
| Intervalos irregulares según el turno | El PLC repite el ciclo con un tiempo en pausa fijo |
| Puntos de difícil acceso | La grasa llega por líneas hasta el punto |
| Sin forma de saber si se engrasó | El interruptor de fin de línea confirma que se alcanzó presión |
| Operar con el depósito vacío sin darse cuenta | Sensor de nivel y mensajes en pantalla |

El beneficio real no es solo ahorrar tiempo de mano de obra. Es **convertir la lubricación en un proceso verificable**: cada ciclo deja una señal (presión alcanzada o no) que el control puede interpretar.

## Dos sistemas, una misma bomba

El manual de la Power Master III describe la bomba en dos configuraciones sobre la misma base técnica:

1. **Sistema de una línea (CLS, lubricación central)**: grasa a pasadores, bujes y demás puntos mediante inyectores.
2. **Sistema tipo piñón (SLS, lubricación del engranaje de giro)**: grasa al piñón de lubricación que engrana con la corona de giro.

Las dos usan el mismo tipo de bomba accionada por aceite hidráulico, la misma lógica de ciclo y los mismos tipos de componentes. Cambian las válvulas y el interruptor asignados (en el esquema eléctrico del manual, Y7/Y7a/B43 para el sistema central y Y9/Y9a/B46 para el de giro) y el punto de entrega de la grasa.

## Cómo funciona la bomba: aceite hidráulico que mueve grasa

La bomba Power Master III no lleva motor eléctrico propio. Un **cilindro hidráulico oscilante** acciona el émbolo de grasa, y ese cilindro se alimenta con presión piloto de la máquina. Esto tiene consecuencias prácticas:

- Para que la bomba funcione, **el motor debe estar en marcha** (el manual pide ajustar a máximo ralentí) y haber presión piloto disponible.
- La presión de grasa es un **múltiplo** de la presión de aceite. El manual indica una relación de 6,55 a 1: 45 bar de aceite dan un máximo de unos 295 bar de grasa.
- La presión en el cilindro de aceite **no debe exceder 650 psi (45 bar)**; una válvula reductora de presión la limita.

El bloque de control del cilindro es de **autocontrol direccional**: al arrancar, el cilindro siempre se retrae, sin importar dónde se detuvo, y cuando llega al final invierte el flujo y se extiende. La velocidad la regula una válvula de control de flujo.

Datos de referencia del manual para la PC5500:

| Parámetro | Valor del manual |
|---|---|
| Carreras dobles por minuto | 18 a 20 |
| Volumen entregado | 612 a 680 cm³/min (aprox. 550 a 612 g) |
| Presión máxima del cilindro de aceite | 45 bar (650 psi) |
| Relación de presión aceite/grasa | 6,55 : 1 |
| Presión máxima de la bomba en condiciones estándar | 220 a 250 bar, según resistencia de línea y viscosidad |
| Presión piloto de referencia (X4) | 60 bar, si no se logra ajustar la presión |

La presión máxima de la bomba debe quedar **por encima** de la presión de conmutación del interruptor de fin de línea. La diferencia compensa las pérdidas por la longitud de línea y la viscosidad de la grasa.

## El ciclo de una línea, paso a paso

El sistema de una sola línea se llama así porque **una única línea de suministro** alimenta a todos los inyectores, y cada inyector dosifica su punto. Es un sistema **de presión–alivio**: los inyectores cargan su cámara con la línea despresurizada y descargan cuando la línea se presuriza.

<figure class="diagram">
<svg viewBox="0 0 830 400" role="img" aria-labelledby="lc-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="lc-d1-title">Esquema de un sistema de lubricación de una línea: depósito, bomba, válvula de venteo, filtro, inyectores, puntos de lubricación e interruptor de fin de línea</title>
<rect x="2" y="2" width="826" height="396" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
<rect x="30" y="150" width="150" height="100" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
<text x="105" y="196" text-anchor="middle" font-size="14" fill="#1f2937">Depósito de grasa</text>
<text x="105" y="216" text-anchor="middle" font-size="12" fill="#1f2937">con sensor de nivel</text>
<rect x="215" y="150" width="150" height="100" rx="8" fill="#fef3c7" stroke="#334155" stroke-width="2.5"/>
<text x="290" y="196" text-anchor="middle" font-size="14" fill="#1f2937">Bomba</text>
<text x="290" y="216" text-anchor="middle" font-size="14" fill="#1f2937">Power Master III</text>
<path d="M180 200 H213" fill="none" stroke="#b45309" stroke-width="5"/>
<path d="M365 200 H430 M480 200 H760" fill="none" stroke="#b45309" stroke-width="5"/>
<rect x="430" y="175" width="50" height="50" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
<text x="455" y="205" text-anchor="middle" font-size="12" fill="#1f2937">Filtro</text>
<path d="M385 200 V125" fill="none" stroke="#b45309" stroke-width="4" stroke-dasharray="8 5"/>
<rect x="355" y="95" width="60" height="30" rx="4" fill="#fde68a" stroke="#334155" stroke-width="2.5"/>
<text x="385" y="115" text-anchor="middle" font-size="12" fill="#1f2937">Venteo</text>
<path d="M385 95 V65 H105 V148" fill="none" stroke="#b45309" stroke-width="3" stroke-dasharray="8 5"/>
<path d="M97 138 l8 12 l8 -12 z" fill="#b45309"/>
<text x="245" y="55" text-anchor="middle" font-size="12" fill="#1f2937">Retorno de venteo al depósito (simplificado)</text>
<text x="430" y="115" text-anchor="start" font-size="12" fill="#1f2937">Válvula de venteo: abierta sin corriente</text>
<path d="M290 330 V252" fill="none" stroke="#0369a1" stroke-width="4"/>
<path d="M282 262 l8 -12 l8 12 z" fill="#0369a1"/>
<text x="290" y="352" text-anchor="middle" font-size="12" fill="#1f2937">Aceite piloto hidráulico (máx. 45 bar)</text>
<path d="M760 200 V176" fill="none" stroke="#334155" stroke-width="3"/>
<rect x="715" y="130" width="100" height="46" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="2.5"/>
<text x="765" y="149" text-anchor="middle" font-size="12" fill="#1f2937">Interruptor</text>
<text x="765" y="166" text-anchor="middle" font-size="12" fill="#1f2937">fin de línea</text>
<text x="600" y="188" text-anchor="middle" font-size="12" fill="#1f2937">Línea de suministro</text>
<path d="M540 200 V240 M620 200 V240 M700 200 V240" fill="none" stroke="#b45309" stroke-width="4"/>
<rect x="505" y="240" width="70" height="36" rx="5" fill="#fef3c7" stroke="#334155" stroke-width="2.5"/>
<rect x="585" y="240" width="70" height="36" rx="5" fill="#fef3c7" stroke="#334155" stroke-width="2.5"/>
<rect x="665" y="240" width="70" height="36" rx="5" fill="#fef3c7" stroke="#334155" stroke-width="2.5"/>
<text x="540" y="263" text-anchor="middle" font-size="12" fill="#1f2937">Inyector</text>
<text x="620" y="263" text-anchor="middle" font-size="12" fill="#1f2937">Inyector</text>
<text x="700" y="263" text-anchor="middle" font-size="12" fill="#1f2937">Inyector</text>
<path d="M540 276 V315 M620 276 V315 M700 276 V315" fill="none" stroke="#b45309" stroke-width="3"/>
<rect x="505" y="315" width="70" height="34" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
<rect x="585" y="315" width="70" height="34" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
<rect x="665" y="315" width="70" height="34" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
<text x="540" y="337" text-anchor="middle" font-size="12" fill="#1f2937">Cojinete</text>
<text x="620" y="337" text-anchor="middle" font-size="12" fill="#1f2937">Pasador</text>
<text x="700" y="337" text-anchor="middle" font-size="12" fill="#1f2937">Buje</text>
<text x="620" y="378" text-anchor="middle" font-size="12" fill="#1f2937">Puntos de lubricación (ejemplo con tres inyectores)</text>
</svg>
<figcaption>Esquema simplificado de un sistema de una línea: la bomba presuriza la línea, los inyectores dosifican cada punto y el interruptor de fin de línea confirma la presión; al abrir el venteo la línea se alivia hacia el depósito. Ilustración propia, no a escala; una máquina real tiene muchos más inyectores.</figcaption>
</figure>

### Las cinco fases

El manual describe el ciclo con cinco fases: **PT** (pausa), **PI** (incremento de presión), **PH** (sostenimiento), **PR** (alivio) y de nuevo PT.

<figure class="diagram">
<svg viewBox="0 0 820 340" role="img" aria-labelledby="lc-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="lc-d2-title">Curva de presión en la línea de grasa durante un ciclo: pausa, incremento, sostenimiento, alivio y nueva pausa</title>
<rect x="2" y="2" width="816" height="336" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
<rect x="60" y="50" width="110" height="220" fill="#e2e8f0" fill-opacity="0.7"/>
<rect x="170" y="50" width="160" height="220" fill="#fef3c7" fill-opacity="0.8"/>
<rect x="330" y="50" width="210" height="220" fill="#fde68a" fill-opacity="0.7"/>
<rect x="540" y="50" width="80" height="220" fill="#dbeafe" fill-opacity="0.8"/>
<rect x="620" y="50" width="160" height="220" fill="#e2e8f0" fill-opacity="0.7"/>
<text x="115" y="68" text-anchor="middle" font-size="12" fill="#1f2937">Pausa</text>
<text x="115" y="84" text-anchor="middle" font-size="12" fill="#1f2937">(PT)</text>
<text x="250" y="68" text-anchor="middle" font-size="12" fill="#1f2937">Incremento</text>
<text x="250" y="84" text-anchor="middle" font-size="12" fill="#1f2937">(PI)</text>
<text x="435" y="68" text-anchor="middle" font-size="12" fill="#1f2937">Sostenimiento (PH),</text>
<text x="435" y="84" text-anchor="middle" font-size="12" fill="#1f2937">normalmente 5 min</text>
<text x="580" y="68" text-anchor="middle" font-size="12" fill="#1f2937">Alivio</text>
<text x="580" y="84" text-anchor="middle" font-size="12" fill="#1f2937">(PR)</text>
<text x="700" y="68" text-anchor="middle" font-size="12" fill="#1f2937">Pausa</text>
<text x="700" y="84" text-anchor="middle" font-size="12" fill="#1f2937">(PT)</text>
<path d="M60 270 H780" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M60 270 V50" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M170 270 L330 130 H540 L620 270" fill="none" stroke="#b45309" stroke-width="4" stroke-linejoin="round"/>
<path d="M60 270 H170 M620 270 H780" fill="none" stroke="#b45309" stroke-width="4"/>
<path d="M60 130 H330" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="70" y="120" text-anchor="start" font-size="12" fill="#1f2937">Conmutación del interruptor de fin de línea (≈180 bar)</text>
<text x="435" y="210" text-anchor="middle" font-size="12" fill="#1f2937">Los inyectores terminan</text>
<text x="435" y="228" text-anchor="middle" font-size="12" fill="#1f2937">de dosificar</text>
<text x="170" y="292" text-anchor="middle" font-size="12" fill="#1f2937">a: arranca bomba</text>
<text x="330" y="292" text-anchor="middle" font-size="12" fill="#1f2937">b: bomba se detiene</text>
<text x="580" y="292" text-anchor="middle" font-size="12" fill="#1f2937">c: abre el venteo</text>
<text x="60" y="322" text-anchor="start" font-size="12" fill="#1f2937">Eje horizontal: tiempo. Eje vertical: presión en la línea de suministro. Curva ilustrativa.</text>
</svg>
<figcaption>Curva ilustrativa de presión en la línea de suministro durante un ciclo. Los tiempos no están a escala; el valor de 5 minutos de sostenimiento es el que indica el manual como normal. Ilustración propia.</figcaption>
</figure>

1. **Pausa (PT).** Bomba y válvulas en reposo. El PLC cuenta un tiempo preestablecido. En el sistema de giro, además, el ciclo requiere que la función de giro se haya activado al menos una vez.
2. **Incremento (PI).** Terminada la pausa, el PLC envía 24 VDC al solenoide de suministro de aceite piloto (Y7 o Y9) y al de venteo (Y7a o Y9a). La bomba arranca y el venteo **cierra** el retorno. La presión sube mientras los inyectores entregan la grasa.
3. **Conmutación (S+).** Cuando todos los pistones inyectores llegan al final de su carrera, ya no entra grasa y la presión sube más rápido. Al alcanzar el valor ajustado, el interruptor de fin de línea cambia de estado. El PLC corta el suministro (Y7 o Y9) y la bomba se detiene.
4. **Sostenimiento (PH).** El venteo sigue energizado, normalmente 5 minutos, para mantener la presión y permitir que todos los inyectores completen su descarga.
5. **Alivio (PR).** El PLC quita la corriente al venteo; el retorno se abre y la línea baja a cero. Los resortes devuelven los pistones y las cámaras de dosificación se llenan para el siguiente ciclo. El interruptor vuelve a su posición neutral y el PLC lo registra como confirmación del alivio.

Un detalle importante: el PLC mantiene además un **contador de decrecimiento** antes de permitir otro ciclo. Su objetivo es evitar que se inicie un ciclo prematuro cuando los inyectores aún no regresaron por completo a su posición.

## Componentes y qué vigilar en cada uno

### Inyectores (válvulas dosificadoras)

Cada inyector entrega un **volumen fijo ajustado** por ciclo. Según el manual, la serie **SL-1** se regula entre 0,13 y 1,3 cm³ por ciclo, y la serie **SL-11**, para puntos de mayor consumo, entre 0,82 y 8,2 cm³ por ciclo. Se ajustan aflojando la contratuerca y girando el tornillo: hacia afuera aumenta la salida, hacia adentro la disminuye, con el vástago indicador completamente afuera para el máximo.

Cómo opera el inyector, en cuatro posiciones:

1. En reposo, la cámara de descarga contiene grasa del ciclo anterior.
2. Al subir la presión de línea, una válvula de corredera abre el conducto y la grasa empuja el pistón, que expulsa la grasa de la cámara hacia el punto de lubricación.
3. Al terminar su carrera, el pistón cierra la corredera; el vástago indicador queda adentro, y eso permite ver, a simple vista, que el inyector funcionó.
4. Al aliviarse la presión, el resorte restituye la corredera y la grasa pasa a la cámara de descarga para el próximo ciclo; el vástago queda afuera.

Los inyectores pueden **combinarse sin uniones en T**: el cuerpo tiene dos salidas superpuestas y un tubo conector suma el volumen de un inyector al del siguiente, lo que duplica la entrega en un solo punto.

El vástago indicador es una herramienta de diagnóstico barata: un inyector cuyo vástago no se mueve ciclo tras ciclo no está dosificando.

### Interruptor de fin de línea

Es un interruptor de presión con pistón y resorte: cuando la presión de grasa vence la tensión del resorte, el pistón acciona el contacto y envía la señal al control. Se regula con una camisa de ajuste (giro horario sube el punto de conmutación; antihorario lo baja). Es **el testigo de todo el sistema**: si no conmuta, el PLC asume que algo impidió que la línea se presurizara.

Un matiz que conviene tener presente: el manual cita el ajuste normal en **180 bar**, con tolerancias distintas según el apartado (180 ± 0,5 bar en un punto, 180 + 10 bar en el procedimiento de ajuste) y menciona 185 bar (2630 psi) en la descripción del ciclo. Son diferencias de redacción del documento; el valor de ajuste definitivo debe confirmarse en el manual específico del equipo.

### Filtro en línea

Protege los inyectores de partículas, que son muy sensibles por sus tolerancias pequeñas. El manual advierte de un riesgo poco intuitivo: **un cuerpo extraño puede quedar atascado en el elemento contra el resorte por efecto de la presión, y entonces puede pasar lubricante sin filtrar**. Para el servicio se detiene el motor y se retira la llave, se retira el tornillo de conexión (llave de 36 mm según el manual), se extraen resorte, guía y elemento, se limpia e inspecciona y se vuelve a armar. Los intervalos están en la literatura de servicio de la máquina.

### Válvula de venteo

Es un solenoide que, **sin corriente, abre** el paso de la línea al depósito. Esta lógica tiene una ventaja de seguridad: ante una pérdida eléctrica, el sistema se despresuriza en lugar de quedar con presión atrapada. En operación normal se energiza para cerrar el retorno durante PI y PH.

### Depósito y sensor de nivel

El depósito de grasa es circular y lleva un **sensor capacitivo analógico** que convierte el nivel en una señal de 4 a 20 mA. Según el manual:

- Con el nivel en **5 %** (910 mm desde la tapa) aparece un mensaje en pantalla para rellenar.
- Con el nivel en **0 %** (950 mm desde la tapa), se detiene la bomba y se alivia la presión para evitar que trabaje en seco.
- Con el depósito vacío, el movimiento del cucharón se interrumpe después de 4 horas.
- En máquinas con brazo de rellenado, una lámpara indica el momento en que el depósito está lleno.

El sensor viene programado de fábrica y no requiere ajuste. Atención: el manual describe la señal de corriente como creciente con el nivel en el apartado de la línea central y como creciente cuando el nivel baja en el apartado del piñón. Es una inconsistencia del documento; al diagnosticar con un multímetro, verifica el sentido de la señal en el plano eléctrico del equipo.

## El sistema tipo piñón: lubricar el engranaje abierto

El sistema de giro comparte la bomba y la lógica de ciclo, pero la grasa llega a un **piñón de lubricación** que engrana con la corona. La grasa se inyecta por una boquilla central cuyo orificio debe estar **perfectamente alineado con el centro del piñón**, y el piñón distribuye la grasa por salidas dispuestas en ángulo distinto para cada diente, de manera que el lubricante se deposite uniformemente en el flanco justo donde los dientes están en contacto.

Dos diferencias operativas respecto al sistema central:

- El ciclo de lubricación del giro **requiere que la función de giro haya sido activada** al menos una vez tras la pausa, pues no tiene sentido engrasar un engranaje que no se mueve.
- Para ajustar o probar el interruptor de fin de línea, el manual indica **bloquear el giro** con el freno del anillo de giro desde el tablero, iniciar el ciclo con el interruptor S26 y activar el giro brevemente. En el sistema central la prueba manual usa el interruptor S24.

Si la presión no se alcanza, el mensaje de falla es específico del anillo de giro o del sistema central, según el equipo.

## Control eléctrico y protecciones

El PLC del sistema ECS gobierna todos los sistemas de lubricación: las salidas digitales activan directamente los solenoides, y en algunas máquinas hay relevadores intermedios. La entrada principal es el interruptor de fin de línea (B43 para el sistema central, B46 para el de giro) junto con los temporizadores internos.

Las protecciones documentadas en el manual:

| Condición | Respuesta del PLC |
|---|---|
| Presión de fin de línea no alcanzada en el tiempo de monitoreo | Desconecta ambos solenoides, detiene la bomba y muestra el mensaje de falla |
| Falla activa y la pala sigue trabajando | A las 4 horas adicionales, detiene la función del cucharón |
| Nivel mínimo de grasa (0 %) | Detiene la bomba y alivia presión |
| Depósito vacío | Interrumpe el cucharón tras 4 horas |
| Lubricación adicional manual | Permitida con S24 o S26 si el contacto del interruptor de fin de línea está cerrado |

Esta lógica muestra la filosofía del diseño: **la máquina avisa y luego protege**, pero el aviso es la ventana de acción.

### Contexto: la lógica ECS-T en la PC8000

En otras palas de la misma gama, como la PC8000, la lubricación central también se integra en el sistema de control de la máquina (ECS-T) y sigue la misma idea de supervisión por presión y tiempos. Los detalles de ajuste y los mensajes cambian según el modelo; consulta el tema en [la PC8000, sus componentes principales](/posts/pala-hidraulica-minera-komatsu-pc8000-componentes/) y en [la regulación electrohidráulica de sus bombas](/posts/regulacion-bombas-control-electrohidraulico-pala-pc8000/). Esos datos son contexto general y deben verificarse en el manual del equipo concreto.

## Ajustes que se hacen en campo

El manual describe tres ajustes principales. Todos se hacen con el motor en ralentí máximo y siguiendo el procedimiento del equipo:

| Ajuste | Qué se verifica | Referencia del manual |
|---|---|---|
| Velocidad de carrera | Contar carreras dobles por minuto observando el vástago, con el conector del venteo desconectado | 18 a 20 carreras dobles/min; la válvula de control de flujo se abre girando antihorario |
| Presión máxima de la bomba | Bloquear la salida (desconectar el acople rápido) y activar manualmente; leer el manómetro | 220 a 250 bar; el tornillo de la válvula reductora sube la presión girando en sentido horario |
| Interruptor de fin de línea | Conectar un manómetro en el punto de prueba, iniciar ciclo (S24 o S26) y observar a qué presión conmuta | 180 bar nominal, con corrección del resorte si se desvía |

Dos advertencias prácticas del manual que valen la pena subrayar:

- **Usar un manómetro distinto para presiones hidráulicas**, porque el manómetro que se usó en el circuito de grasa queda impregnado.
- **Anotar la presión que marca el manómetro integrado** al conmutar el interruptor y usarla como referencia para verificaciones posteriores. La presión en el manómetro de la bomba es mayor que la del punto de prueba por la distancia hasta el final de la línea.

## Fallas comunes: causa probable y qué revisar

Las fallas del sistema casi siempre se manifiestan igual: **la presión no llega al interruptor** dentro del tiempo y aparece el mensaje de falla. Lo que cambia es la causa.

| Falla | Síntoma típico | Qué revisar |
|---|---|---|
| Depósito vacío o nivel bajo | Mensaje de nivel, bomba detenida | Nivel real, sensor y señal 4 a 20 mA |
| Aire en la línea | La presión sube muy despacio o la bomba trabaja sin presión estable | Purgar la línea y el inyector; revisar entradas de aire en la succión |
| Inyector bloqueado o con vástago inmóvil | Un punto sin grasa; el vástago indicador no se mueve | Vástago indicador, ajuste del inyector, limpieza |
| Grasa contaminada | Desgaste de válvulas de retención, obstrucción del filtro | Estado del filtro y de la grasa; origen de la contaminación al rellenar |
| Línea rota o con fuga | La presión no se alcanza; grasa visible en el suelo o la estructura | Mangueras, tubos y conexiones a lo largo de la línea |
| Interruptor de presión no alcanzado | Falla constante aunque la bomba funcione | Ajuste del interruptor, cableado, presión real con manómetro |
| Venteo que no abre | Los inyectores no se recargan; los ciclos siguientes entregan poco | Alimentación del solenoide, estado de la válvula |
| Grasa muy espesa por frío | Presión que sube muy lento | Clase NLGI adecuada a la temperatura mínima |

Además, en el manual aparecen diagnósticos específicos de la **bomba** misma:

- **Sin presión en el manómetro del cilindro**: verificar presión de suministro, señal de 24 VDC en los solenoides y ajuste de la válvula reductora.
- **Presión de la bomba que sube lento o no sube**: el bloque de control no oscila, la reductora muy baja, viscosidad demasiado alta para la temperatura, solenoide piloto inoperante, material extraño en las válvulas de retención o en el émbolo, superficies de sello rugosas, empaque de biela con fuga o fugas en la línea.
- **Pérdida de presión o carreras cortas**: material extraño bajo las bolas de retención o empaque de la biela dañado; las válvulas de retención deben desmontarse y limpiarse.

Si el procedimiento no corrige el problema, el manual indica acudir a un centro de servicio autorizado.

### La secuencia lógica de diagnóstico

Un orden eficiente, de lo más barato a lo más costoso:

1. **Nivel y mensajes**: ¿hay grasa? ¿qué mensaje exacto muestra la pantalla?
2. **Visual de la línea**: fugas, mangueras aplastadas o conexiones sueltas.
3. **Presión piloto**: ¿llega aceite a la bomba, con 24 VDC en los solenoides?
4. **Carreras por minuto**: ¿la bomba oscila a la frecuencia indicada?
5. **Presión de la bomba contra el manómetro**: ¿sube y se estabiliza?
6. **Inyectores**: vástagos indicadores y ajuste.
7. **Interruptor de fin de línea**: ajuste y cableado.
8. **Interior de la bomba**: válvulas de retención, émbolo y empaque.

Empezar por el paso 8 es la forma más común de desarmar una bomba sana.

## Lista de inspección

Una rutina corta que puede integrarse al recorrido de cada turno y a las paradas programadas:

**Cada turno**

- [ ] Nivel de grasa en el depósito (mensajes en pantalla y nivel real).
- [ ] Mensajes de falla del sistema central y del anillo de giro.
- [ ] Fugas visibles en líneas, conexiones y bloques de inyectores.
- [ ] Grasa fresca visible en los puntos críticos y en el piñón y la corona.

**Semanal o según el plan de la mina**

- [ ] Vástagos indicadores de los inyectores: que se muevan en cada ciclo.
- [ ] Estado del respiradero y de la tapa del depósito.
- [ ] Alineación de la boquilla del piñón respecto al piñón de lubricación.
- [ ] Comparar la presión de conmutación con la anotada como referencia.

**En parada programada**

- [ ] Limpiar o reemplazar el elemento del filtro en línea (intervalo según la literatura de servicio).
- [ ] Verificar carreras por minuto, presión máxima de la bomba y punto del interruptor.
- [ ] Revisar empaque de la biela y válvulas de retención si la bomba pierde presión.
- [ ] Confirmar clase NLGI de la grasa en uso frente a la temperatura mínima del sitio.
- [ ] Revisar conectores y cableado de los solenoides y del interruptor de presión.

Por último, un cuidado que la lista no capta: **rellenar el depósito con grasa limpia**, con equipo de transferencia dedicado y tapas siempre cerradas. La contaminación que entra al rellenar es la causa más difícil de rastrear, porque aparece días después en un inyector o en una válvula de retención.

## Resumen

La lubricación centralizada de una pala minera es un **ciclo controlado y verificable**: la bomba hidráulica presuriza una línea, los inyectores dosifican cada punto, el interruptor de fin de línea confirma el resultado y el venteo alivia la presión para reiniciar. El PLC supervisa tiempos y presión, avisa si algo falla y, tras horas de operación en falla, limita la máquina. Conocer ese ciclo es lo que permite diagnosticar con orden: casi toda falla termina en "no se alcanzó la presión", y la causa se encuentra recorriendo el circuito de la grasa y el del aceite piloto, de lo simple a lo complejo.

Para ampliar el contexto de la operación y el mantenimiento, consulta [minería a cielo abierto](/posts/mineria-cielo-abierto/), la guía de [maquinaria minera](/posts/maquinaria-mineria/), los [sistemas de lubricación en maquinaria pesada](/posts/sistemas-lubricacion/), el [mantenimiento básico de maquinaria pesada](/posts/mantenimiento-basico-de-maquinaria-pesada/), el [análisis SOS del aceite](/posts/analisis-sos-aceite-lubricante/) y los [lubricantes e intervalos de una excavadora Volvo EC210B](/posts/mantenimiento-excavadora-volvo-ec210b-lubricantes-intervalos/).

**Fuentes:** manual de la bomba de lubricación hidráulica Power Master III de la pala PC5500 de Komatsu, [publicado en Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/2056-manual-bomba-lubricacion-hidraulica-power-master-iii-pala-pc5500-komatsu). Los valores citados corresponden a ese manual; verifica siempre el manual vigente del equipo. Esta guía es una explicación independiente y no implica respaldo de Komatsu ni del fabricante de la bomba.

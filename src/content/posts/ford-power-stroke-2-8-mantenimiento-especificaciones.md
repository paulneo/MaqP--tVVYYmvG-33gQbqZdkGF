---
title: "Motor Power Stroke 2.8 L: mantenimiento, especificaciones y torques clave"
published: 2026-11-17
draft: false
featured: false
description: "Guía del diésel 2.8 L (8B60 y 8B61): ubicación del número de motor, mantenimiento cada 15.000 km, cuidado del turbo, refrigeración, combustible, holguras y torques clave."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "power-stroke-2-8"
  - "motor-diesel"
  - "mantenimiento-preventivo"
  - "turbocompresor"
  - "torques-motor"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camionetas-diesel/ford-power-stroke-2-8-mantenimiento-especificaciones
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Cómo se distingue un motor 8B60 de un 8B61?"
    a: "Por el número de lista de partes estampado en la etiqueta del motor, cerca de la bomba inyectora, y por el tipo de turbo. El manual de taller indica que una de las versiones usa turbo con válvula wastegate (WG) y la otra turbo de geometría variable (TGV), pero la tabla de características y la etiqueta de identificación no coinciden entre sí al asignar cada código. Por eso conviene confirmar el turbo físicamente: el TGV tiene un actuador que mueve las paletas y su tubo de boost control sale del propio turbo hacia la bomba inyectora."
  - q: "¿Por qué hay que esperar 30 segundos antes de acelerar o apagar un motor turboalimentado?"
    a: "El eje del turbo gira a decenas de miles de revoluciones y se lubrica con el aceite del propio motor. Tras el arranque, el aceite tarda unos segundos en llegar al eje; si se acelera antes, el eje gira prácticamente seco. Al apagar, ocurre lo contrario: si el motor se detiene tras una aceleración, la lubricación cesa mientras la turbina aún gira. El manual pide no superar 1.000 rpm durante los primeros 30 segundos y dejar el motor por debajo de 1.000 rpm otros 30 segundos antes de detenerlo."
  - q: "¿Por qué los tornillos de culata se aprietan con par más ángulo?"
    a: "Porque son tornillos de estiraje controlado. El par inicial solo asienta la unión y vence la fricción de las roscas; el ángulo posterior estira el tornillo una cantidad definida, y ese estiraje es lo que genera la fuerza de apriete. Medir solo par puede dar fuerzas muy distintas según la lubricación o el estado de la rosca. Por eso el manual exige hacerlo en dos fases y recomienda tornillos nuevos."
  - q: "¿Cada cuánto se cambian el aceite y la correa dentada en este motor?"
    a: "Según la tabla de mantenimiento del manual: aceite y filtro cada 15.000 km o 6 meses, lo que ocurra primero, y la correa dentada (distribución) a los 120.000 km, con inspección del estado a través del tapón lateral en cada servicio. Son valores del manual de fábrica; en servicio severo, con polvo o ralentí prolongado, conviene acortarlos."
  - q: "¿Se puede rectificar el bloque si el cilindro está desgastado?"
    a: "El manual contempla el mandrilado y bruñido del cilindro dentro de un rango estrecho (93,000 a 93,013 mm después del bruñido) y establece que, si el diámetro o la ovalización superan lo especificado, se debe reemplazar el bloque. No menciona pistones sobremedida para este motor. Antes de decidir, hay que medir el cilindro en varios puntos y consultar la sección de cilindros del manual."
sources:
  - title: "Manual de taller Motores Diesel Power Stroke 2.8 L (publicación 8120075 - 06/01)"
    url: "https://www.mecanicoautomotriz.org/886-manual-motores-diesel-power-stroke-2-8-l"
  - title: "Sitio mecanicoautomotriz.org: manuales de taller"
    url: "https://www.mecanicoautomotriz.org/"
related:
  - pistones-anillos-camisas-motor-diesel-desgaste
  - ciguenal-cojinetes-valvulas-motor-diesel
  - paleta-de-la-tobera-variable-en-turbocompresor
  - sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor
---

El 2.8 L de cuatro cilindros con inyección directa y turbo es un
diésel de trabajo: sencillo de mecánica, con bomba rotativa y
distribución por correa. Esa sencillez engaña. Casi todas sus fallas
serias (turbo con el eje dañado, junta de culata vencida, cojinetes
rayados) nacen de un mantenimiento a medias o de un apriete hecho "a
ojo".

Esta guía organiza la información del manual de taller del motor
(publicación 8120075, edición 06/01) en un recorrido práctico:
identificación, mantenimiento periódico, turbo, refrigeración,
combustible, lubricación, puntos de inspección mecánica y una selección
de holguras y torques, siempre con el **porqué** de cada valor. Es una
guía de lectura, no un sustituto del manual: cuando una cifra aquí
aparece como referencial, hay que verificarla en el documento original.

## Qué motor es y en qué vehículos se usa

El manual describe un motor de **4 cilindros en línea, 2,8 litros,
inyección directa**, turboalimentado, producido por International
Engines South America (con unidades fabricadas en Brasil y en
Argentina). Hay dos versiones, identificadas con los códigos **8B60** y
**8B61**, que se diferencian sobre todo en el turbo.

Un detalle importante: **el manual no nombra ningún vehículo**. Es un
documento del motor, no de una camioneta. En el mercado
sudamericano este motor se asocia a pickups medianas de varias marcas,
pero ese dato no sale del manual y debe confirmarse con la ficha de cada
vehículo antes de buscar repuestos o procedimientos. "Power Stroke" es
una marca comercial; aquí se usa solo de forma descriptiva y esta guía no
está vinculada a ningún fabricante.

### Datos básicos del motor (manual, p. 7)

| Dato | Valor |
|---|---|
| Cilindros | 4 en línea |
| Diámetro × carrera | 93,0 mm × 102,5 mm |
| Cilindrada | 2,8 L |
| Relación de compresión | 19,5:1 |
| Orden de inyección | 1-3-4-2 |
| Giro visto de frente | Horario |
| Ralentí | 800 rpm |
| Régimen máximo sin carga | 4.640 rpm |
| Presión de aceite (régimen máximo, motor caliente) | 3,5 bar |
| Temperatura de trabajo | 86 a 102 °C |
| Inyección estática | 0° en el PMS |
| Proyección de la tobera del inyector | 1,92 a 2,80 mm |

Las dos versiones difieren en prestaciones:

| | Versión con TGV | Versión con wastegate |
|---|---|---|
| Potencia (NBR 5484) | 135 cv (99 kW) a 3.800 rpm | 133 cv (97 kW) a 3.800 rpm |
| Par motor | 375 N·m a 1.400 rpm | 355 N·m a 1.600 rpm |
| Masa de la unidad básica | 208 kg | 205 kg |

**Atención con los códigos.** La tabla de la página 7 asigna el 8B60 al
turbo de geometría variable y el 8B61 al wastegate, mientras que la
etiqueta ilustrada de la página 8 muestra la leyenda opuesta ("B61 (TGV)
/ B60 (WG)"). Es una incongruencia dentro del propio manual. La
conclusión práctica: no se debe pedir un turbo, una bomba inyectora o un
tubo de boost control solo por el prefijo del código. Hay que
**verificar el turbo instalado** y cruzar el número de lista de partes
completo.

## Dónde está el número de motor

El manual lo ubica en el **lado izquierdo del motor** (visto desde el
frente), en una etiqueta junto a la bomba inyectora y las cañerías de
alta presión. El número se lee en dos partes: el **número de lista de
partes** (prefijo con la letra y el código, por ejemplo "B60" o "B61") y
el **número de serie** de seis cifras.

El serial además dice dónde se fabricó:

- **000001 a 499999**: motores fabricados en Brasil.
- **500000 en adelante**: motores fabricados en Argentina.

¿Por qué importa? Porque al pedir repuestos o consultar un boletín, el
número de lista de partes y el serial son la única referencia que
distingue una versión de otra y un lote de otro. Conviene fotografiar la
etiqueta antes de que el aceite o el hollín la vuelvan ilegible.

## Mantenimiento periódico: la tabla que ordena todo

El manual organiza el servicio en **ocho escalones de 15.000 km** (de
15.000 a 120.000 km) más cuatro revisiones diarias. La lógica es simple:
lo que depende de la limpieza (aceite, combustible, aire) se revisa
siempre; lo que depende del desgaste (correas, turbo, arranque) se mira
en puntos fijos.

### Cada día (antes del primer arranque)

- Nivel de aceite del motor.
- Nivel del refrigerante.
- Drenaje de impurezas del filtro de combustible y del sedimentador.
- Estado de mangueras y conexiones del filtro de aire.

El drenaje diario del filtro de combustible es el hábito más barato y
efectivo: el agua es el enemigo número uno de una bomba rotativa, cuya
lubricación interna depende del propio diésel.

### Cada 15.000 km (y en todos los escalones siguientes)

| Tarea | Por qué |
|---|---|
| Terminales y nivel de la batería | Un arranque lento fuerza el motor de arranque y el alternador |
| Reapriete de los tacos del motor | Un taco flojo transmite vibración a cañerías y soportes |
| Cambio de aceite y filtro | Es el lubricante el que limpia y enfría; ver nota de abajo |
| Cambio del elemento del filtro de combustible | Protege bomba e inyectores |
| Regulación de luz de válvulas | Una holgura errónea quema válvulas o genera ruido |
| Revisión de ralentí | Solo ajuste permitido en servicio; lo hace un taller autorizado |
| Estado de la correa dentada (por el tapón lateral) | Una rotura puede causar daños graves |
| Estado de correas externas | Mando de ventilador, alternador y bombas |
| Mangueras de aceite, combustible y refrigerante | Detectan fugas incipientes |

### Revisiones que no están en todos los escalones

- **Refrigerante**: revisión del anticongelante a los 30.000, 60.000,
  90.000 y 120.000 km; el cambio es cada 2 años.
- **Motor de arranque, alternador y turbocompresor**: revisión a los
  60.000 y 120.000 km, a cargo de los respectivos fabricantes.
- **Reemplazo de correas externas y de la correa dentada**: a los
  120.000 km.

Dos reglas de la nota al pie merecen atención: después del primer cambio
a los 15.000 km, el aceite y su filtro se cambian como **máximo cada
15.000 km o 6 meses**, lo que ocurra primero, y el filtro de combustible
se reemplaza (con limpieza del tanque) **cada 6 meses** aunque no se haya
llegado al kilometraje. El tiempo cuenta porque el aceite se oxida y el
combustible acumula humedad aun con el vehículo parado.

### Asentamiento y arranque

Los primeros **2.500 km** se consideran el periodo de asentamiento: no
superar el 85 % del régimen máximo (3.800 rpm de referencia), variar las
revoluciones en vez de mantener un régimen constante y evitar
aceleraciones bruscas. Con el motor frío, no exigir carga; para calentar,
se mueve el vehículo con suavidad en lugar de dejar el motor en ralentí.
El manual también limita el arranque a **7 segundos** como máximo, con
una pausa de 30 segundos antes de reintentar, para no dañar el motor de
arranque.

## Cuidado del turbo: wastegate vs. geometría variable

Un turbo recupera energía de los gases de escape para comprimir el aire
de admisión. El problema clásico es que una turbina "pequeña" responde
rápido a bajo régimen pero ahoga el motor a alto régimen, y una turbina
"grande" hace lo contrario. Las dos versiones de este motor resuelven ese
compromiso de maneras distintas.

<figure class="diagram">
<svg viewBox="0 0 760 340" role="img" aria-labelledby="ps-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="ps-d1-title">Comparación esquemática entre un turbo con válvula wastegate y un turbo de geometría variable</title>
<rect x="0" y="0" width="760" height="340" rx="12" fill="#f8fafc"/>
<line x1="380" y1="50" x2="380" y2="320" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
<text x="195" y="32" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2937">Turbo con wastegate (WG)</text>
<text x="565" y="32" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2937">Geometría variable (TGV)</text>
<!-- Left panel -->
<circle cx="150" cy="150" r="40" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="150" y="155" text-anchor="middle" font-size="13" fill="#1f2937">Turbina</text>
<text x="30" y="108" font-size="13" fill="#1f2937">Escape</text>
<line x1="30" y1="150" x2="102" y2="150" stroke="#b45309" stroke-width="4"/>
<path d="M102 142 L114 150 L102 158 Z" fill="#b45309"/>
<line x1="190" y1="150" x2="330" y2="150" stroke="#b45309" stroke-width="4"/>
<path d="M330 142 L342 150 L330 158 Z" fill="#b45309"/>
<text x="290" y="135" font-size="13" fill="#1f2937">Salida</text>
<path d="M75 150 V225 H255 V150" fill="none" stroke="#c2410c" stroke-width="3" stroke-dasharray="7 5"/>
<rect x="153" y="215" width="24" height="20" rx="3" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<text x="165" y="257" text-anchor="middle" font-size="13" fill="#1f2937">Válvula wastegate</text>
<text x="195" y="285" text-anchor="middle" font-size="13" fill="#1f2937">Con presión alta, parte del gas</text>
<text x="195" y="305" text-anchor="middle" font-size="13" fill="#1f2937">se desvía y no mueve la turbina</text>
<!-- Right panel -->
<circle cx="530" cy="150" r="40" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="530" y="155" text-anchor="middle" font-size="13" fill="#1f2937">Turbina</text>
<g stroke="#1d4ed8" stroke-width="5" stroke-linecap="round">
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(0 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(45 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(90 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(135 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(180 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(225 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(270 530 150) rotate(35 530 101)"/>
<line x1="530" y1="94" x2="530" y2="108" transform="rotate(315 530 150) rotate(35 530 101)"/>
</g>
<text x="530" y="75" text-anchor="middle" font-size="13" fill="#1f2937">Paletas orientables</text>
<text x="400" y="132" font-size="13" fill="#1f2937">Escape</text>
<line x1="400" y1="150" x2="460" y2="150" stroke="#b45309" stroke-width="4"/>
<path d="M460 142 L472 150 L460 158 Z" fill="#b45309"/>
<line x1="590" y1="150" x2="700" y2="150" stroke="#b45309" stroke-width="4"/>
<path d="M700 142 L712 150 L700 158 Z" fill="#b45309"/>
<text x="650" y="135" font-size="13" fill="#1f2937">Salida</text>
<text x="565" y="255" text-anchor="middle" font-size="13" fill="#1f2937">Bajo régimen: paletas cerradas</text>
<text x="565" y="275" text-anchor="middle" font-size="13" fill="#1f2937">Alto régimen: paletas abiertas</text>
<text x="565" y="305" text-anchor="middle" font-size="13" fill="#1f2937">Un actuador de diafragma las mueve</text>
</svg>
<figcaption>Esquema comparativo de los dos tipos de turbo del motor: el wastegate desvía gas por una derivación; el TGV cambia la sección de paso de la turbina. Ilustración propia, simplificada y no a escala.</figcaption>
</figure>

Según el manual, los turbos son de marca Garrett, modelos **GT20 (52S)**
para la versión wastegate y **GT22 (56V)** para la de geometría
variable, con una presión de trabajo de **1,2 bar** y actuador de
diafragma en ambos casos. Una diferencia de taller fácil de olvidar: el
tubo de **boost control**, que gobierna la válvula LDA de la bomba
inyectora, sale del turbo en la versión TGV y del múltiple de admisión
en la versión wastegate. Quien monte el tubo equivocado cambia el
comportamiento del enriquecimiento de combustible. Para entender mejor
cómo funcionan las paletas, ver
[la paleta de la tobera variable en turbocompresores](/posts/paleta-de-la-tobera-variable-en-turbocompresor/).

### Reglas de oro para que el turbo dure

1. **No acelerar de inmediato tras el arranque**: máximo 1.000 rpm los
   primeros 30 segundos. El aceite necesita llegar al eje.
2. **No apagar justo después de acelerar**: 30 segundos por debajo de
   1.000 rpm antes de detener el motor. Sin lubricación, el eje sigue
   girando a alta velocidad.
3. **Filtro de aire en orden**: cualquier objeto extraño, por pequeño que
   sea, daña el rotor del compresor. Por eso la tabla diaria incluye las
   mangueras del filtro de aire.
4. **Aceite adecuado**: el manual exige un multigrado que cumpla al menos
   API CE; no se debe usar un aceite que no llegue a esa especificación.
   El turbo trabaja a altas temperaturas y se degrada rápido con
   lubricantes de baja calidad.
5. **Respetar el intervalo de aceite**: el aceite del turbo es el del
   motor. Para el detalle del circuito, ver
   [lubricación y enfriamiento en un turbocompresor](/posts/sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor/).

## Sistema de enfriamiento

La temperatura de trabajo del motor es de 86 a 102 °C. El termostato es
de **cápsula de cera**, abre entre 86 y 90 °C, con una apertura máxima a
102 °C y un recorrido mínimo de 9 mm. El manual propone una prueba
simple en banco: sumergir el termostato en agua, calentarla y anotar la
temperatura a la que empieza a abrir; está en condiciones de uso si
abre entre 86 y 92 °C.

Hay dos advertencias del manual que ahorran tiempo de diagnóstico:

- Ante un sobrecalentamiento, **el termostato rara vez es el
  culpable**. Hay que buscar primero radiador obstruido, ventilador
  viscoso, aire atrapado, mangueras colapsadas o tapa de presión
  defectuosa.
- Al instalar el termostato, el perno guía/respiradero debe quedar **hacia
  arriba** (posición de las 12), para que el aire pueda escapar.

### Mezcla y purga

El manual indica una mezcla de **1/3 de aditivo y 2/3 de agua limpia**
(1/2 y 1/2 en climas muy fríos) y prohíbe agregar aceite soluble al
circuito, porque ataca el caucho de las mangueras. También pide no
abrir la tapa ni drenar con el motor caliente: el líquido sale a presión y
puede causar quemaduras graves.

La purga del aire es el paso que más se omite. La secuencia resumida:

1. Llenar por el depósito hasta que el líquido salga por el tapón de
   purga de la carcasa del termostato.
2. Arrancar el motor en ralentí 10 segundos, y con él en marcha aflojar
   el tapón para eliminar burbujas (aproximadamente 1 a 2 minutos).
3. Apagar, cerrar el tapón con **13 a 17 N·m** y completar el nivel.
4. Hacer funcionar el motor a 2.000 rpm durante 5 minutos, 3.500 rpm
   durante 4 minutos y de nuevo 2.000 rpm durante 3 minutos.
5. Revisar nuevamente el nivel y completar si hace falta.

¿Por qué tanto cuidado? Una bolsa de aire en la culata crea un punto
caliente sin refrigerante que, con el tiempo, deforma o fisura la culata
y arruina la junta.

## Sistema de combustible

La alimentación es clásica: **bomba de transferencia mecánica de
diafragma**, filtro con sensor de agua, **bomba inyectora rotativa Bosch
tipo VE** y portainyectores Bosch (modelo DSLA 140P112) con apertura en
dos etapas, a **200 bar** y **330 bar**. Para ver cómo encaja este tipo
de sistema en el panorama general, ver
[sistemas de alimentación en motores diésel](/posts/sistema-alimentacion-motor-diesel/).

### Prácticas que importan

- **Diésel limpio y sin agua.** Reabastecer antes de que el depósito
  quede casi vacío: el fondo concentra sedimentos y agua.
- **Llenar el tanque al final de la jornada** para reducir la
  condensación de humedad en el interior.
- **Temperaturas de 0 °C o menos**: el manual indica añadir 20 % de
  queroseno de aviación al diésel (poniendo primero el queroseno) para
  evitar que la parafina tape los conductos. Solo debe usarse en ese
  rango de temperatura. Es una práctica de época y de región; hoy lo
  habitual es usar diésel de invierno o aditivos anticongelantes
  aprobados, y cualquier mezcla debe contrastarse con la recomendación
  vigente del fabricante del sistema de inyección.
- **Elemento filtrante genuino.** El manual insiste en ello: el filtro
  protege la bomba y los inyectores.
- **Sensor de agua**: si el filtro nuevo no apoya bien contra el soporte
  metálico, el sensor pierde su masa eléctrica y no avisará de la
  presencia de agua en el tablero.
- **Evitar quedarse sin combustible**: obliga a purgar y puede dañar el
  sistema de inyección. El procedimiento del manual exige mínimo 3
  litros en el tanque, abrir el tapón superior del filtro y aflojar las
  tuercas de los tubos de alta presión para sacar el aire.

### Lo que no se debe tocar

El ralentí es el **único ajuste permitido en servicio**; cualquier otro
reglaje de la bomba debe hacerlo un representante autorizado. Y la
proyección de la tobera del inyector sobre la culata (1,92 a 2,80 mm)
**no se corrige con arandelas selladoras**: si está fuera de rango, el
problema es de la culata o del portainyector. Para el sincronizado de la
bomba, el manual usa útiles específicos (pernos de punto en el volante y
en la polea de la bomba) y obliga a girar el cigüeñal dos vueltas
completas y comprobar que ambos pernos entren con facilidad.

## Sistema de lubricación

| Dato | Valor |
|---|---|
| Aceite recomendado | Multigrado SAE 15W/40 (CCMC D-5 / API CF, ver tabla del manual) |
| Capacidad del cárter | Mínima 6 L (sin filtro), máxima 6,5 L (con filtro) |
| Diferencia entre marcas de la varilla | 1 L |
| Espera antes de medir | 10 a 15 minutos con el motor apagado |
| Filtro nuevo | Lubricar la junta; apretar a mano media vuelta tras el contacto |

Algunos puntos de este sistema explican fallas frecuentes:

- **El nivel se completa solo si queda bajo la marca mínima.** Un litro
  separa el mínimo del máximo, de modo que rellenar "por costumbre"
  lleva fácilmente a sobrellenar el cárter.
- **La bomba de aceite forma parte de la caja de distribución.** Si hay
  que reemplazarla, se cambia todo el conjunto, no la bomba suelta.
- **Hay un inyector (chorro) de aceite por cilindro** que refrigera el
  pistón. Al montar pistones y bielas, la posición de la biela respecto del
  inyector debe cuidarse para no romper el tubo.
- **El cárter se sella con junta líquida** (Loctite 5900), con un cordón
  de 5 a 6 mm según la figura del manual, y se aprieta siguiendo una
  secuencia numerada sobre superficies bien limpias.
- Si el nivel baja con frecuencia, no es normal: el manual indica
  acudir a un servicio autorizado en lugar de seguir completando.

Para profundizar en los conceptos del lubricante, ver
[aceite lubricante: fundamentos](/posts/que-es-aceite-lubricante-fundamentos/).

## Puntos de inspección mecánica

### Culata

- **Planitud máxima: 0,05 mm.** Se mide con regla de acero y galgas; más
  allá, se reemplaza la culata. Una culata alabeada no sella con ninguna
  junta.
- **Altura de la culata**: 127,87 a 128,13 mm.
- **Proyección del inyector** dentro del rango ya mencionado.
- Revisión de guías de válvula, asientos postizos, resortes y retenes.

**La junta se elige midiendo.** Hay tres espesores, y se escoge según la
altura máxima que alcance el pistón sobre la cara del bloque (medida con
reloj comparador, por eso la altura del pistón es de 0,50 a 0,80 mm):

| Altura del pistón (mm) | Espesor de junta (mm) | Marca |
|---|---|---|
| 0,50 a 0,60 | 1,37 | 0 |
| 0,61 a 0,70 | 1,48 | 00 |
| 0,71 a 0,80 | 1,59 | 000 |

El porqué es la relación de compresión: una junta demasiado gruesa deja
más volumen en la cámara y baja la compresión; una demasiado delgada
acerca el pistón a la culata y puede producir contacto con las válvulas.

**Luz de válvulas** (motor frío): 0,20 mm en admisión y 0,20 mm en
escape. Se regula por parejas: con las válvulas del cilindro 4 en
"balanceo" se ajusta la del cilindro 1, y así sucesivamente (4→1, 2→3,
1→4, 3→2). Ver la
[guía de cigüeñal, cojinetes y válvulas](/posts/ciguenal-cojinetes-valvulas-motor-diesel/)
para el contexto general.

### Bloque y cilindros

| Dato | Valor |
|---|---|
| Altura total del bloque | 348,28 a 348,46 mm |
| Diámetro del cilindro tras el bruñido | 93,000 a 93,013 mm |
| Rugosidad tras el bruñido | 0,45 a 0,70 µm |
| Ángulo de bruñido | 38 a 42° |

Un ángulo de bruñido de 38 a 42° deja el patrón de rayas cruzadas que
retiene aceite y asienta los aros. Por eso el manual aclara que la
superficie **no debe pulirse**: un cilindro espejo no retiene película de
aceite y consume más. Los pasajes de agua y aceite deben quedar
destapados tras el lavado, con agua a 80 °C a presión y desengrasante.

### Pistones y bielas

| Holgura | Valor (mm) |
|---|---|
| Luz lateral aro 1 y 2 (compresión) | 0,050 a 0,090 |
| Luz lateral aro 3 (rascador) | 0,030 a 0,065 |
| Luz entre extremos aro 1 | 0,400 a 0,600 |
| Luz entre extremos aro 2 y 3 | 0,300 a 0,550 |
| Holgura perno de pistón en el buje de la biela | 0,020 a 0,041 |

La luz entre extremos se mide con el aro insertado entre **40 y 50 mm**
bajo la cara del bloque, donde el cilindro casi no se desgasta. Para
comparar desgastes, ver
[pistones, anillos y camisas: desgaste](/posts/pistones-anillos-camisas-motor-diesel-desgaste/).
El perno de pistón admite calentar el pistón a 80 °C si cuesta
extraerlo, y el montaje exige que la flecha del pistón mire hacia el
frente del motor.

### Cigüeñal

| Dato | Valor |
|---|---|
| Diámetro de muñón de bancada (patrón) | 63,471 a 63,491 mm |
| Diámetro de muñón de biela (patrón) | 58,725 a 58,745 mm |
| Submedida disponible | 0,25 mm |
| Ovalización máxima de muñones | 0,007 mm |
| Excentricidad máxima, muñón 3 | 0,025 mm |
| Juego axial | 0,05 a 0,15 mm |
| Luz diametral casquillo-muñón de bancada | 0,030 a 0,080 mm |

La luz de 0,03 a 0,08 mm es la película de aceite que sostiene al eje: si
es menor, hay contacto metal-metal; si es mayor, cae la presión de aceite
y aparece golpeteo. El manual pide además revisar fisuras con partículas
magnéticas (Magnaflux) y desmagnetizar la pieza después.

## Torques y apriete de culata

Los torques son la parte del manual donde un error se paga caro. Los
valores seleccionados a continuación provienen del manual (pp. 34 y
70-73); el resto de las tablas de torque debe consultarse allí.

### Tornillos de culata

La culata lleva **18 tornillos de tres tipos**. Se aprietan siempre en
**dos fases** (par más ángulo), nunca en una sola operación, siguiendo la
secuencia numerada de la figura del manual:

| Posiciones | Tipo | Apriete |
|---|---|---|
| 1, 2, 7, 8, 9, 10, 15, 16, 17 y 18 | M12 × 140 mm | 60 N·m + 150° |
| 4, 6, 11 y 14 | M12 × 100 mm | 60 N·m + 120° |
| 3, 5, 12 y 13 | M8 × 117 mm | 20 N·m + 140° |

El manual recomienda **tornillos nuevos**, roscas ligeramente
lubricadas con aceite y asentar primero las cabezas contra la culata. No
exige reapretar la culata en las revisiones posteriores.

<figure class="diagram">
<svg viewBox="0 0 760 310" role="img" aria-labelledby="ps-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="ps-d2-title">Esquema genérico de una secuencia de apriete de culata del centro hacia los extremos en dos fases</title>
<rect x="0" y="0" width="760" height="310" rx="12" fill="#f8fafc"/>
<text x="380" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2937">Esquema genérico, no corresponde a este motor</text>
<rect x="90" y="55" width="580" height="160" rx="14" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<g fill="#fde68a" stroke="#92400e" stroke-width="2">
<circle cx="380" cy="100" r="22"/><circle cx="380" cy="170" r="22"/>
<circle cx="265" cy="100" r="22"/><circle cx="265" cy="170" r="22"/>
<circle cx="495" cy="100" r="22"/><circle cx="495" cy="170" r="22"/>
<circle cx="150" cy="100" r="22"/><circle cx="150" cy="170" r="22"/>
<circle cx="610" cy="100" r="22"/><circle cx="610" cy="170" r="22"/>
</g>
<g font-size="16" font-weight="700" fill="#1f2937" text-anchor="middle">
<text x="380" y="106">1</text><text x="380" y="176">2</text>
<text x="265" y="106">3</text><text x="265" y="176">4</text>
<text x="495" y="106">5</text><text x="495" y="176">6</text>
<text x="150" y="106">7</text><text x="150" y="176">8</text>
<text x="610" y="106">9</text><text x="610" y="176">10</text>
</g>
<text x="380" y="248" text-anchor="middle" font-size="14" fill="#1f2937">Fase 1: par inicial siguiendo el orden numérico</text>
<text x="380" y="270" text-anchor="middle" font-size="14" fill="#1f2937">Fase 2: ángulo, repitiendo el mismo orden</text>
<text x="380" y="294" text-anchor="middle" font-size="13" fill="#1f2937">El orden real de cada motor está en la figura del manual de taller</text>
</svg>
<figcaption>Ilustración genérica: las secuencias de apriete suelen avanzar desde el centro hacia los extremos para que la junta se comprima de manera pareja. Para este motor, seguir exclusivamente la figura del manual. Ilustración propia.</figcaption>
</figure>

### Otros torques útiles (manual, pp. 70-73)

| Elemento | Torque | Nota |
|---|---|---|
| Tapa de biela (tornillos) | 20 N·m + 90° | Par más ángulo |
| Tapas de bancada | 60 N·m + 120° (según lámina 01) | Referencial; verificar en el manual |
| Volante del motor | 60 N·m + 30° | Par más ángulo |
| Polea del cigüeñal | 80 N·m + 125° | Con herramienta de bloqueo |
| Tornillo del tensor de la correa dentada | 40 a 50 N·m | Tras tensar la correa |
| Tapón de purga y tapón M14 del bloque (refrigerante) | 13 a 17 N·m | El del bloque, con Loctite 242 |
| Tuercas de tubos de alta presión | 22 a 28 N·m | |
| Tornillo banjo del retorno del portainyector | 8 a 11 N·m | |

¿Por qué par más ángulo en el volante, la polea y las bielas? Son uniones
críticas que soportan cargas alternativas muy altas: un tornillo con
poca fuerza se afloja y uno con exceso se estira o rompe. El estiraje
controlado por ángulo es mucho más repetible que el par solo. En la
correa dentada, el manual describe un tensado en dos pasos, con
torquímetro de brazo máximo de 250 mm, 9 a 10 N·m sobre la correa y,
después de 2 vueltas del motor, control de sincronización.

Nota sobre las tapas de bancada: el valor indicado se lee en la lámina
de torques de la página 70, donde dos posiciones de la zona inferior del
bloque muestran "60 N·m + 120°". Como la lámina es una ilustración y no
una tabla textual, hay que confirmar el valor y el orden de apriete en el
procedimiento del cigüeñal del manual antes de usarlo.

## Lista de verificación rápida

1. Confirmar número de lista de partes y serial (etiqueta del lado
   izquierdo).
2. Identificar el turbo instalado (WG o TGV) antes de pedir repuestos.
3. Respetar 15.000 km o 6 meses para aceite, filtro de aceite y filtro
   de combustible.
4. Drenar a diario el filtro de combustible y el sedimentador.
5. Esperar 30 segundos a ralentí antes de apagar y evitar acelerar tras
   el arranque.
6. Purgar bien el circuito de refrigeración tras cualquier intervención.
7. Medir (planitud de culata, altura de pistones, luz de aros) antes de
   armar; no suponer.
8. Apretar culata, bielas, volante y polea con par más ángulo, con
   tornillos nuevos y en secuencia.

## Resumen

El 2.8 L es un diésel noble si se le trata con rutina: aceite y filtros
en tiempo, combustible limpio, turbo con lubricación garantizada y
apriete por método. Los valores que más conviene tener a mano son la
planitud de la culata (0,05 mm), la elección de junta según la altura del
pistón, la luz de válvulas en frío (0,20 mm) y la secuencia de par más
ángulo. Todo lo demás es tolerancia fina que se consulta en el manual
cuando se hace falta.

Para seguir profundizando: [mantenimiento y afinamiento de motores
diésel](/posts/guia-mantenimiento-afinamiento-motores-diesel/), los
intervalos de servicio de la
[Toyota Hilux diésel](/posts/toyota-hilux-diesel-plan-mantenimiento-intervalos/) y la
comparación con otro diésel liviano en
[Nissan D22 con motor YD25](/posts/nissan-d22-motor-yd25-inyeccion-eccs-d-mantenimiento/).

**Fuentes:** manual de taller *Motores Diesel Power Stroke 2.8 L*, publicación
8120075 - 06/01, disponible en
[mecanicoautomotriz.org](https://www.mecanicoautomotriz.org/886-manual-motores-diesel-power-stroke-2-8-l).
Contenido reorganizado y explicado con asistencia de IA y revisado por el
equipo editorial. Los valores son los del manual; verifíquelos en el
original antes de aplicarlos.

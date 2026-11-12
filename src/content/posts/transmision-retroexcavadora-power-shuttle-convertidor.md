---
title: "Transmisión de retroexcavadora: convertidor de par y power shuttle"
published: 2026-11-11
draft: false
featured: false
description: "Cómo funciona la transmisión de una retroexcavadora: convertidor de par, inversor power shuttle, caja de 4 velocidades, tracción 4WD, presiones y fallas típicas en la Case serie M."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "retroexcavadora"
  - "transmision"
  - "convertidor-de-par"
  - "power-shuttle"
  - "traccion-4wd"
  - "case-580m"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/retroexcavadoras/transmision-retroexcavadora-power-shuttle-convertidor
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Para qué sirve el convertidor de par en una retroexcavadora?"
    a: "Hace dos trabajos a la vez. Primero, sustituye al embrague de fricción: el motor puede seguir girando aunque la máquina esté detenida y empujando contra la pila, sin que el motor se apague. Segundo, multiplica el par cuando la carga es alta y la velocidad de salida es baja, que es exactamente la situación de una cargadora hundiendo el cucharón en material. Cuando la máquina rueda libre, el convertidor se comporta casi como un acoplamiento directo. El costo de esa flexibilidad es calor: parte de la energía se disipa en el aceite, por eso la transmisión tiene enfriador."
  - q: "¿Qué diferencia hay entre power shuttle y powershift?"
    a: "El power shuttle (inversor hidráulico) cambia solo el sentido de marcha, adelante o atrás, con embragues de discos en baño de aceite, sin detener la máquina ni pisar un pedal de embrague. Las marchas siguen seleccionándose con la palanca, normalmente con sincronizadores. En un powershift, además del sentido, las marchas también se cambian con embragues hidráulicos y un control electrónico, sin sincronizadores. En la serie M de Case el powershift fue una opción en los modelos 580 Super M y 590 Super M con 4WD; la transmisión estándar es de 4 velocidades sincronizadas con inversor hidráulico."
  - q: "¿Por qué la retroexcavadora a veces no avanza en una dirección pero sí en la otra?"
    a: "Porque cada sentido tiene su propio embrague, su propio solenoide y su propio circuito. Si la máquina funciona en adelante pero no en reversa (o al revés), el problema está casi siempre en la parte exclusiva de ese sentido: solenoide o conector eléctrico, pistón o sellos de ese paquete de discos, o los discos desgastados. Cuando falla en ambos sentidos, se sospecha de lo que comparten: nivel de aceite, colador, bomba, filtro tapado o regulación de presión. Medir la presión de cada embrague en su toma de prueba separa las dos familias de causas en minutos."
  - q: "¿La tracción 4WD de la Case serie M se conecta con presión o se desconecta con presión?"
    a: "En la serie M descrita en el manual de entrenamiento de Case, el acoplador de 4WD está cargado por resortes: sin presión hidráulica, los resortes lo mantienen acoplado y el eje delantero recibe fuerza. Para desconectar la tracción delantera, un solenoide permite que el aceite de la bomba venza los resortes. Es un diseño de falla segura: si se pierde presión o corriente, la máquina queda con tracción total en lugar de quedarse sin ella. Esto puede variar en otros modelos o generaciones, así que verifica siempre en el manual del equipo."
  - q: "¿Es peligroso hacer la prueba de calado de la transmisión?"
    a: "Puede serlo si se hace mal. El aceite se calienta con mucha rapidez porque toda la potencia del motor se disipa en el convertidor, por eso la máquina debe mantenerse calada solo unos segundos. Además hay que inmovilizar la máquina con frenos y calzos, y comprobar en el manual del fabricante si esa prueba está permitida: algunos fabricantes no la recomiendan. Nunca se hace con personas cerca de la máquina ni en una pendiente."
sources:
  - title: "Manual de entrenamiento: sistema de transmisión, retroexcavadoras Serie M (CNH)"
    url: "https://www.maquinariaspesadas.org/blog/748-manual-sistema-transmision-retroexcavadoras-serie-m-case"
  - title: "Manual de entrenamiento de servicio: retroexcavadoras serie M Case — sistemas, transmisión y operaciones"
    url: "https://www.maquinariaspesadas.org/blog/2360-manual-retroexcavadoras-serie-m-case-sistemas-transmision-operaciones"
related:
  - que-es-traccion-4wd-y-como-funciona
  - transmisiones-hidrostaticas
  - diferencia-retroexcavadora-cargador-frontal
---

Una retroexcavadora hace en la misma jornada dos cosas que casi
ninguna otra máquina combina: empujar material con la pala frontal,
con cambios constantes de adelante a atrás, y desplazarse entre
frentes de obra por camino. Una transmisión que soporte ese trabajo
tiene que ser suave al invertir el sentido, robusta ante cargas
bruscas y fácil de diagnosticar con pocas herramientas. Por eso la
mayoría de las máquinas de esta clase usan **convertidor de par**,
un **inversor hidráulico (power shuttle)** y una **caja de pocas
marchas**.

En esta guía recorremos la cadena completa, del volante del motor a
los ejes, usando como ejemplo la **Case serie M (580M y 590 Super M)**.
Veremos qué hace cada componente, por qué el diseño es así, qué
presiones se miden y qué fallas son las más comunes. Es una guía
técnica para mecánicos y estudiantes; para cualquier medición real, el
manual de servicio de tu máquina manda.

## Qué tipo de transmisión es y por qué importa

Hay tres familias de transmisión en máquinas móviles, y conviene no
confundirlas porque se diagnostican de forma muy distinta:

| Tipo | Cómo transmite | Presión del aceite | Ejemplo típico |
|---|---|---|---|
| **Convertidor de par + engranajes** | Fluido a alta velocidad que choca contra paletas, más embragues y engranes | Baja (el aceite circula rápido) | Retroexcavadora, cargador frontal, motoniveladora |
| **Hidrostática** | Bomba y motor hidráulicos a alta presión | Alta (el aceite se mueve lento) | Minicargadora, compactador, algunas palas |
| **Mecánica con embrague de fricción** | Disco de fricción seco y caja de cambios | No aplica | Tractores agrícolas, camiones |

El manual de Case lo resume con una regla fácil de recordar: en el
convertidor el aceite trabaja a **baja presión y alta velocidad**, y en
la hidrostática a **alta presión y baja velocidad**. Si quieres ver el
otro extremo, revisa [transmisiones
hidrostáticas](/posts/transmisiones-hidrostaticas/).

## El recorrido de la potencia, de punta a punta

<figure class="diagram">
<svg viewBox="0 0 800 300" role="img" aria-labelledby="tr-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="tr-d1-title">Recorrido de la potencia en la transmisión de una retroexcavadora: motor, convertidor de par, embragues adelante y atrás, caja de 4 velocidades, eje trasero y, por una rama, acoplador 4WD y eje delantero</title>
<defs>
<marker id="tr-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker>
</defs>
<rect x="0" y="0" width="800" height="300" rx="12" fill="#f1f5f9"/>
<rect x="15" y="40" width="140" height="70" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
<text x="85" y="71" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Motor</text>
<text x="85" y="92" text-anchor="middle" font-size="14" fill="#0f172a">diésel</text>
<rect x="170" y="40" width="140" height="70" rx="8" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="240" y="71" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Convertidor</text>
<text x="240" y="92" text-anchor="middle" font-size="14" fill="#0f172a">de par</text>
<rect x="325" y="40" width="140" height="70" rx="8" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="395" y="71" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Embragues</text>
<text x="395" y="92" text-anchor="middle" font-size="14" fill="#0f172a">Adelante / Atrás</text>
<rect x="480" y="40" width="140" height="70" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
<text x="550" y="71" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Caja de</text>
<text x="550" y="92" text-anchor="middle" font-size="14" fill="#0f172a">4 velocidades</text>
<rect x="635" y="40" width="140" height="70" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
<text x="705" y="71" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Eje trasero</text>
<text x="705" y="92" text-anchor="middle" font-size="14" fill="#0f172a">y mandos finales</text>
<line x1="155" y1="75" x2="168" y2="75" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr)"/>
<line x1="310" y1="75" x2="323" y2="75" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr)"/>
<line x1="465" y1="75" x2="478" y2="75" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr)"/>
<line x1="620" y1="75" x2="633" y2="75" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr)"/>
<path d="M550 110 V190 H478" fill="none" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr)"/>
<rect x="335" y="165" width="140" height="50" rx="8" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="405" y="195" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Acoplador 4WD</text>
<rect x="165" y="165" width="140" height="50" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
<text x="235" y="195" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Eje delantero</text>
<line x1="335" y1="190" x2="307" y2="190" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr)"/>
<text x="400" y="255" text-anchor="middle" font-size="14" fill="#0f172a">Bomba de la transmisión: gira siempre con el motor y alimenta embragues, convertidor y lubricación</text>
</svg>
<figcaption>Recorrido de la potencia en una retroexcavadora con convertidor de par, inversor hidráulico, caja de 4 velocidades y 4WD. Ilustración propia, simplificada y sin escala.</figcaption>
</figure>

Conviene leer el diagrama de izquierda a derecha con una idea en la
cabeza: **el motor nunca se desconecta mecánicamente de la
transmisión**. La placa flexible une el volante con la carcasa
exterior del convertidor, de modo que esa parte gira siempre con el
motor. Lo que "conecta" o "desconecta" la máquina son los embragues
de discos que están después del convertidor.

## Convertidor de par: cómo multiplica el par sin un pedal

El convertidor tiene tres elementos principales, todos sumergidos en
aceite:

- **Rotor o impulsor (bomba)**: va unido al motor. Funciona como una
  bomba centrífuga que lanza el aceite hacia su diámetro exterior.
- **Turbina**: va unida al eje de entrada de la transmisión. Recibe el
  chorro de aceite y se mueve por la fuerza de ese choque.
- **Estator**: está entre ambos y redirige el aceite que sale de la
  turbina para devolverlo a la bomba empujando en el mismo sentido
  de giro.

Esa última función es la clave. Cuando la turbina gira mucho más lento
que el rotor (máquina arrancando o empujando una carga pesada), el
aceite regresa con energía todavía útil, y el estator, fijo en ese
momento, la reaprovecha. El resultado es que el par de salida puede ser
varias veces el de entrada.

El manual de Case ilustra el concepto con una **relación de calado de
2,86:1** como ejemplo: con la turbina detenida, el par de salida puede
alcanzar 2,86 veces el de entrada. Ese número no es universal: cada
convertidor se selecciona para la máquina y, como advierte el propio
manual, cambiarlo por otro de distinta relación puede alterar el
rendimiento de forma drástica.

### El estator sobre un embrague unidireccional

Cuando la máquina ya rueda y la turbina alcanza casi la velocidad del
rotor, ya no hay nada que multiplicar. Un estator fijo, en ese momento,
estorbaría: actuaría como freno y calentaría el aceite. Por eso el
estator va montado sobre un **embrague unidireccional (rueda libre)**:

| Condición | Rotor vs. turbina | Estator | Efecto |
|---|---|---|---|
| Arranque o empuje fuerte | Rotor mucho más rápido | Bloqueado, redirige el aceite | Multiplica el par |
| Rodaje libre | Velocidades casi iguales | Gira libre con el flujo | Acoplamiento casi directo, menos calor |
| Calado total | Turbina detenida | Bloqueado | Máximo par y máximo calor |

Si quieres entender mejor este tipo de mecanismo, tenemos un artículo
sobre el [embrague unidireccional en transmisiones
automáticas](/posts/embrague-unidireccional-en-transmisiones-automaticas/).
Un estator cuyo embrague se atasca da dos síntomas clásicos: máquina
floja a baja velocidad (si patina) o sobrecalentamiento y falta de
velocidad máxima (si queda trabado).

### Por qué el convertidor calienta y qué lo cuida

Todo lo que el convertidor "pierde" se convierte en calor en el aceite.
Por eso el aceite que sale del convertidor se dirige al **enfriador** y
de ahí a la lubricación de engranes, cojinetes y embragues. La serie M
incluye un indicador de **temperatura del convertidor** en el tablero,
precisamente porque es el dato más útil para el operador.

Según el manual, un convertidor se sobrecalienta por cuatro motivos
principales: trabajo demasiado pesado para su capacidad, **aire en el
aceite**, nivel bajo y fugas internas. El aire se cuela, por ejemplo,
cuando el nivel del cárter es bajo y la máquina trabaja en una ladera,
cuando se cambió el filtro y se abrió una línea, o por un sello de
succión deteriorado. Un convertidor debe trabajar **lleno de aceite**,
y el aire reduce su rendimiento.

## Power shuttle: el inversor que no necesita embrague

El convertidor gira siempre en un solo sentido, así que se necesita un
tren de engranajes que permita invertir la marcha. En la retroexcavadora
eso lo hace el **inversor hidráulico**, que en el mercado se conoce
como **power shuttle** o simplemente **FNR** (de *forward, neutral,
reverse*).

El principio es sencillo:

1. En el **eje de entrada** hay dos paquetes de embrague de discos en
   baño de aceite, uno para adelante y otro para atrás.
2. Un engranaje de cada paquete gira "loco" sobre el eje hasta que el
   embrague lo bloquea.
3. Cuando el conductor mueve la palanca FNR, un solenoide dirige aceite
   a presión al pistón del paquete elegido; los discos se aprietan y el
   engranaje queda unido al eje.
4. En neutro, los dos paquetes están sin presión: los tambores giran
   con el eje de entrada, pero los engranajes quedan libres y la
   máquina no se mueve.

En la Case serie M, según el manual de entrenamiento, cada paquete
tiene **6 discos de fibra y 8 discos de acero**, y el engranaje de
marcha adelante tiene **29 dientes** y el de marcha atrás **35**.
Por eso es normal que, en una misma marcha, la velocidad de avance y
la de retroceso no sean idénticas: es una diferencia de diseño del
tren de engranes, no una falla. Las velocidades exactas de cada marcha
figuran en la tabla de especificaciones del manual del equipo.

### El modulador: la razón de que la inversión sea suave

Si el aceite llegara de golpe al embrague, el cambio de sentido sería un
tirón brusco y castigaría los ejes. Para evitarlo, la válvula de control
tiene un **circuito modulador** con dos tareas:

- **Conectar el embrague despacio**: el aceite entra al pistón
  modulador por un orificio pequeño (de 1,0 mm en la Case serie M), de
  modo que la presión sube de forma progresiva mientras se comprime un
  juego de resortes. Cuando el pistón llega al fondo, la modulación
  termina y el paquete recibe su presión de trabajo.
- **Desconectar rápido**: al volver a neutro, una válvula de retención
  descarga el aceite detrás del pistón para que el embrague anterior
  se suelte sin demora y no queden dos paquetes engranados a la vez.

Un solenoide de **adelante** y otro de **atrás** mueven un carrete
alternador de tres posiciones. Un divisor de flujo se encarga de
priorizar: primero asegura aceite para los embragues y solo después
manda el sobrante al convertidor y a la lubricación.

### Botón de desconexión (declutch) en la palanca de la cargadora

La serie M trae un botón en la palanca de la cargadora que **corta la
transmisión** para dejar toda la potencia del motor disponible al
sistema hidráulico durante ciclos rápidos de carga. En diagnóstico, si
una máquina "no avanza", este botón (o su cableado) es de lo primero que
se descarta, junto con el relé de enclavamiento de la transmisión.

## Caja de 4 velocidades y selector

Después del inversor viene una **caja de engranes sincronizada** de
cuatro marchas (en la serie M, de fabricación Carraro, según el
manual). La selección se hace con la palanca de cambios, que mueve
horquillas: una para 1.ª y 2.ª, otra para 3.ª y 4.ª.

Fíjate en una consecuencia práctica: como el sentido de marcha lo da el
inversor, **las cuatro marchas están disponibles en ambos sentidos**.
No hay "marcha atrás" como una posición de la caja, sino un cambio de
sentido en el eje de entrada.

Un resumen de qué hace cada elemento:

| Elemento | Quién lo controla | Qué decide |
|---|---|---|
| Convertidor de par | Nadie: es automático, responde a la carga | Cuánto par llega a la caja |
| Embragues FNR | Palanca FNR y solenoides | Sentido de marcha |
| Sincronizadores | Palanca de cambios | Relación de marcha (1.ª a 4.ª) |
| Acoplador 4WD | Interruptor y solenoide | Si el eje delantero recibe fuerza |

### ¿Y el powershift?

En la serie M, el manual describe una transmisión **powershift**
opcional en los modelos 580 Super M y 590 Super M con 4WD. Allí las
marchas también se cambian con embragues hidráulicos, gestionados por
una unidad electrónica, sin sincronizadores. Cambia la lógica de
diagnóstico: se agregan módulo electrónico, sensores de velocidad y
temperatura y autodiagnóstico. Esta guía se centra en la transmisión
estándar sincronizada con power shuttle, que es la más común en
máquinas usadas en la región.

## Tracción 4WD y bloqueo del diferencial

### 4WD: acoplada por resorte, desacoplada por presión

El diseño de Case que describe el manual es interesante porque es de
**falla segura**:

- **Tracción total conectada**: el solenoide de la válvula 4WD no
  recibe corriente, el aceite que mantenía comprimidos los resortes
  del acoplador sale hacia el retorno y los resortes empujan el
  acoplamiento. La fuerza llega al eje delantero.
- **Tracción total desconectada**: el solenoide se energiza, el carrete
  cierra el retorno, el aceite de la bomba llega al acoplador, vence
  los resortes y separa el engranaje. El eje delantero queda libre.

Dos datos prácticos del manual: la 4WD **se puede activar con la
máquina en movimiento**, y no es una opción instalable en campo porque
la **caja de transmisión de 4WD es distinta** de la de 2WD (lleva
engranaje y eje adicionales). Para entender el concepto en general,
tenemos una guía sobre [qué es la tracción 4WD y cómo
funciona](/posts/que-es-traccion-4wd-y-como-funciona/).

### Bloqueo hidráulico del diferencial

El eje trasero tiene un bloqueo de diferencial accionado por un
cilindro hidráulico. Se activa con un botón en la palanca de la
cargadora y envía aceite de la bomba de la transmisión a un cilindro
que mueve una horquilla; esta bloquea los satélites con la corona y,
con ello, los dos semiejes giran juntos. El manual lo advierte con
claridad: **solo debe aplicarse cuando las ruedas no estén patinando**,
porque bloquear con una rueda girando en vacío somete a los
componentes del eje a esfuerzos innecesarios.

## El circuito hidráulico de la transmisión

<figure class="diagram">
<svg viewBox="0 0 800 340" role="img" aria-labelledby="tr-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="tr-d2-title">Circuito hidráulico de la transmisión: cárter con colador, bomba, filtro, regulador de presión 4WD, divisor de flujo, y dos ramas: válvula de control con embragues, y convertidor con enfriador y lubricación; además la rama del acoplador 4WD</title>
<defs>
<marker id="tr-arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker>
</defs>
<rect x="0" y="0" width="800" height="340" rx="12" fill="#f1f5f9"/>
<rect x="15" y="135" width="115" height="60" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
<text x="72" y="162" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Cárter</text>
<text x="72" y="182" text-anchor="middle" font-size="14" fill="#0f172a">con colador</text>
<rect x="150" y="135" width="95" height="60" rx="8" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="197" y="171" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Bomba</text>
<rect x="265" y="135" width="95" height="60" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
<text x="312" y="171" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Filtro</text>
<rect x="380" y="135" width="110" height="60" rx="8" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="435" y="162" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Regulador</text>
<text x="435" y="182" text-anchor="middle" font-size="14" fill="#0f172a">presión 4WD</text>
<rect x="510" y="135" width="110" height="60" rx="8" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="565" y="162" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Divisor</text>
<text x="565" y="182" text-anchor="middle" font-size="14" fill="#0f172a">de flujo</text>
<rect x="650" y="35" width="135" height="70" rx="8" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="717" y="66" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Válvula de control</text>
<text x="717" y="87" text-anchor="middle" font-size="14" fill="#0f172a">y embragues FNR</text>
<rect x="650" y="225" width="135" height="85" rx="8" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="717" y="255" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Convertidor</text>
<text x="717" y="276" text-anchor="middle" font-size="14" fill="#0f172a">enfriador y</text>
<text x="717" y="295" text-anchor="middle" font-size="14" fill="#0f172a">lubricación</text>
<rect x="380" y="255" width="110" height="55" rx="8" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="435" y="278" text-anchor="middle" font-size="15" font-weight="600" fill="#0f172a">Acoplador</text>
<text x="435" y="298" text-anchor="middle" font-size="14" fill="#0f172a">4WD</text>
<line x1="130" y1="165" x2="148" y2="165" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
<line x1="245" y1="165" x2="263" y2="165" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
<line x1="360" y1="165" x2="378" y2="165" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
<line x1="490" y1="165" x2="508" y2="165" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
<path d="M565 135 V70 H648" fill="none" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
<path d="M565 195 V267 H648" fill="none" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
<line x1="435" y1="195" x2="435" y2="253" stroke="#475569" stroke-width="3" marker-end="url(#tr-arr2)"/>
</svg>
<figcaption>Circuito hidráulico simplificado de la transmisión de la serie M: la presión regulada abastece primero el acoplador 4WD y los embragues, y el sobrante va al convertidor, al enfriador y a la lubricación. Ilustración propia.</figcaption>
</figure>

Una sola bomba de engranajes, accionada por el convertidor (es decir,
por el motor), alimenta todo el sistema. El manual de Case describe el
recorrido así:

1. La bomba aspira del cárter de la transmisión a través de un
   **colador de 250 micras**.
2. El aceite pasa por el **filtro** de la transmisión y llega al
   regulador de presión del 4WD, que garantiza presión para
   desacoplar la tracción total. Una válvula de alivio protege la
   bomba.
3. El **divisor de flujo** reparte: primero llena los embragues FNR
   y después manda el resto al convertidor y a la lubricación. Un
   orificio de 3,5 mm en el carrete permite que el aceite pase al
   centro abierto del carrete alternador cuando la demanda se
   satisface.
4. El aceite que sale del convertidor va al **enfriador** y luego a
   lubricar engranes, cojinetes, sincronizadores y embragues.

Lo importante para el diagnóstico es la **prioridad**: si la bomba
entrega poco (colador tapado, aire, desgaste), lo primero que se
resiente es el convertidor y la lubricación; si la presión de embrague
cae, aparece el patinaje. Todo se conecta.

**Aceite y capacidades**: el manual indica aceite **Case Hy-Tran
Ultra** para esta transmisión. En la 580M, el sistema total es de
unos 19,5 qt en 2WD y 22 qt en 4WD o powershift, con un cambio de
aceite y filtro de 16,9 y 19,5 qt respectivamente (valores de la
máquina del manual, referencial; verificar en el manual del equipo).
Para elegir aceite en otros equipos, revisa
[fluidos hidráulicos: propiedades y tipos](/posts/fluidos-hidraulicos-propiedades-tipos-aceites/).

## Presiones de referencia en la Case serie M

El manual incluye una tabla de presiones normales de la transmisión
estándar, medidas **con el aceite caliente, entre 180 y 200 °F (unos 82
a 93 °C)**. Resumimos las más útiles. Son valores **referenciales de la
Case serie M (revisión 2000 del manual); verificar siempre en el manual
del equipo y en los boletines vigentes**.

| Medición | Toma | Ralentí (950 a 1.050 rpm) | A 2.200 rpm |
|---|---|---|---|
| Alimentación, adelante | 21 | 203 a 208 psi | 226 a 236 psi |
| Alimentación, atrás | 21 | 202 a 207 psi | 230 a 240 psi |
| Presión de embrague, adelante y atrás | 24 | 185 a 191 psi | 185 a 200 psi |
| Entrada al convertidor, adelante | 22 | 75 a 82 psi | 120 a 140 psi |
| Salida del convertidor, adelante | | 48 a 50 psi | 57 a 60 psi |
| Lubricación, adelante | 23 | 31 a 33 psi | 35 a 37 psi |

Para pasar a bar, divide los psi entre 14,5: por ejemplo, 185 a 200 psi
son unos 12,8 a 13,8 bar. El manual identifica seis tomas de prueba:
la 21 (suministro de la bomba, solo en 4WD), la 22 (convertidor), la 23
(lubricación, junto al sensor de temperatura), la 24 (presión ajustada
de embrague), la 25 (embrague adelante) y la 26 (embrague atrás).

### Cómo leer las presiones

| Lectura | Lo que sugiere |
|---|---|
| Alimentación baja en todos los modos | Colador tapado, aire, bomba desgastada o regulador/alivio con fuga |
| Alimentación normal, pero embrague bajo solo en un sentido | Fuga en ese paquete (sellos de pistón) o solenoide con problema |
| Presión de embrague baja en ambos sentidos | Modulador o regulador de embrague, o falla común aguas arriba |
| Lubricación muy baja con alimentación normal | Fuga interna en el sistema de lubricación o válvula de alivio abierta |
| Presión del convertidor anormal más temperatura alta | Convertidor con aire o fuga interna, enfriador restringido |

Es una lectura orientativa: la interpretación definitiva depende de los
diagramas y los procedimientos de servicio de cada modelo.

## Fallas típicas y cómo se ven en campo

El manual agrupa las anomalías del convertidor en cuatro familias:
sobrecalentamiento, ruido, fugas y bajo rendimiento. Ampliamos con
los síntomas que ve un mecánico de taller:

| Síntoma | Causas probables | Verificación inicial |
|---|---|---|
| Se calienta el aceite de la transmisión | Trabajo pesado en una marcha inadecuada, enfriador obstruido, aire en el aceite, nivel bajo | Revisar nivel con el aceite caliente, limpiar el radiador del enfriador, revisar mangueras de succión |
| No avanza o avanza sin fuerza en un solo sentido | Solenoide o conector, pistón o discos de ese embrague | Medir en toma 25 o 26 y revisar tensión en el solenoide |
| No avanza en ninguna dirección | Botón de desconexión o relé de enclavamiento, nivel, colador, bomba | Probar el botón, revisar fusibles y relé, medir presión de alimentación |
| Tirón fuerte al invertir | Modulador atascado, presión de embrague alta | Medir presión de embrague y comparar |
| Falta de potencia a baja velocidad | Embrague unidireccional de la turbina o del estator | Prueba de calado, escuchar ruidos |
| Silbido o zumbido que cambia con las rpm | Rodamientos secos o desgastados, engranes, holgura axial | Auscultar con estetoscopio mecánico |
| Fuga de aceite | Retenes, tornillería floja de la tapa del convertidor, racores del enfriador | Revisar con el motor en marcha y el aceite caliente |
| 4WD no se conecta o no se desconecta | Solenoide 4WD, resortes del acoplador, presión de desacople | Medir presión en la toma 21 con la válvula activada y desactivada |

Una anotación del manual que vale la pena subrayar: las partículas en el
aceite desgastan rápidamente las paletas del convertidor, y el aceite
sucio daña cojinetes y retenes. Los mantenimientos regulares y el aceite
limpio son la primera barrera.

## Prueba de calado de la transmisión

La prueba de calado verifica si el motor, el convertidor y la
transmisión trabajan como un solo conjunto. Se bloquea el eje de salida
(en la práctica, con frenos y calzos) y se acelera el motor a fondo para
medir las rpm máximas que sostiene.

Procedimiento resumido, según el manual y las prácticas habituales:

1. Antes de empezar, consultar el manual de servicio: **algunos
   fabricantes no aconsejan esta prueba**.
2. Con la transmisión a temperatura de trabajo, instalar un
   tacómetro exacto.
3. Inmovilizar la máquina de forma efectiva y seleccionar la marcha
   indicada.
4. Acelerar a fondo, esperar que se estabilicen las rpm y leer.
5. **No mantener el calado más que unos segundos**: el aceite se
   calienta con mucha rapidez.

Las rpm medidas se comparan con la especificación, corrigiendo por
clima, altitud y carga de accesorios. Como referencia, el manual indica
para la **580M** unas rpm de calado del convertidor de **2.235 a 2.330**,
con aceleración máxima sin carga de 2.355 a 2.425 (referencial; verificar
en el manual del equipo).

La interpretación general es la siguiente (conocimiento técnico
habitual, no una cifra del manual):

- **Rpm de calado bajas**: el motor entrega poca potencia (inyección,
  aire, combustible) o hay un problema de carga ajeno al convertidor.
- **Rpm de calado altas**: el convertidor o los embragues patinan y no
  absorben el par.

Cuando el resultado no es concluyente, lo recomendable es pasar a las
pruebas de presión en las tomas, que son menos agresivas con el aceite.

## Contexto latinoamericano: altitud, calor y polvo

- **Altitud**: en los Andes y el altiplano, el motor pierde potencia con
  la altura. Esto desplaza el punto de calado y puede confundirse con
  una falla del convertidor. Por eso el manual pide aplicar factores de
  corrección por altitud y clima.
- **Calor y trabajo continuo**: en climas cálidos y en trabajos de
  empuje prolongado, el enfriador es crítico. Un radiador del enfriador
  taponado por polvo o barro convierte un convertidor sano en uno que se
  sobrecalienta.
- **Polvo y minería**: el respiradero de la caja y las zonas de
  reparación son los accesos de contaminación. Limpiar antes de abrir
  cualquier tapa o línea.
- **Aceites y filtros**: usar el aceite especificado por el fabricante y
  filtros de proveedor confiable. Un aceite equivocado cambia la fricción
  de los discos y puede producir patinaje o tirones.

## Revisión rápida de campo antes de culpar a la transmisión

1. **Nivel de aceite** de la transmisión, con la máquina en terreno plano
   y el aceite a temperatura, según el procedimiento del fabricante.
2. **Aspecto del aceite**: color quemado, olor a quemado, espuma o
   partículas metálicas indican un problema ya avanzado.
3. **Temperatura** en el indicador del tablero durante el trabajo
   normal.
4. **Funcionamiento eléctrico**: botón de desconexión, relé de
   enclavamiento y palanca FNR antes de abrir nada.
5. **Presiones** en las tomas, con el aceite caliente y registrando
   los valores en una hoja de prueba (el manual incluye un formato con
   neutro, adelante y atrás a ralentí y a aceleración máxima sin carga).
6. **Ruidos** con estetoscopio en convertidor, caja y ejes.
7. **Fugas** en tapas, retenes y racores del enfriador.

## Resumen

La transmisión de una retroexcavadora es una cadena de cuatro ideas:
un **convertidor de par** que reemplaza al embrague y multiplica el
par cuando hace falta, un **inversor power shuttle** con embragues de
discos modulados que cambia el sentido sin detenerse, una **caja de
cuatro velocidades** sincronizada y una **tracción 4WD** que en la
serie M se acopla por resorte y se desacopla con presión. Todo se
alimenta de una sola bomba y se diagnostica con presiones, temperatura y
una prueba de calado hecha con criterio.

Si dominas el recorrido del aceite y sabes qué presión debe haber en
cada toma, cualquier falla se reduce a una pregunta: ¿falta presión,
falta flujo o sobra calor?

Para seguir con el equipo completo, lee
[el circuito hidráulico de centro abierto](/posts/sistema-hidraulico-retroexcavadora-circuito-centro-abierto/),
el [checklist de mantenimiento por intervalos](/posts/mantenimiento-retroexcavadora-checklist-intervalos/),
las [partes de la retroexcavadora y sus funciones](/posts/partes-retroexcavadora-componentes-funciones/)
y el [diagnóstico del sistema eléctrico](/posts/sistema-electrico-retroexcavadora-diagnostico/).
Si estás evaluando una compra, mira la
[comparativa de modelos](/posts/como-elegir-retroexcavadora-comparativa-modelos/)
y la diferencia con el
[cargador frontal](/posts/diferencia-retroexcavadora-cargador-frontal/).
Sobre aceites y contaminación:
[intervalos de cambio y contaminación del aceite](/posts/intervalos-cambio-contaminacion-aceite/).

**Fuentes**: manual de entrenamiento y servicio de las retroexcavadoras
Case serie M (CNH), consultado en
[maquinariaspesadas.org](https://www.maquinariaspesadas.org/blog/748-manual-sistema-transmision-retroexcavadoras-serie-m-case)
y en la
[edición completa de sistemas, transmisión y operaciones](https://www.maquinariaspesadas.org/blog/2360-manual-retroexcavadoras-serie-m-case-sistemas-transmision-operaciones).
Los valores numéricos corresponden a ese manual (revisión 2000) y son
referenciales: verifica siempre en el manual de servicio de tu equipo.

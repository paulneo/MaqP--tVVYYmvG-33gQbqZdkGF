---
title: "Caja de cambios Mercedes-Benz Actros y Atego: grupos divisor y reductor"
published: 2026-11-19
draft: false
featured: false
description: "Cómo funciona una caja de 16 marchas de camión: pares de piñones, sincronizadores, grupo divisor, grupo reductor planetario y mando GS, según un curso de 1998-99."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "caja-de-cambios"
  - "mercedes-benz-actros"
  - "grupo-divisor"
  - "grupo-reductor"
  - "sincronizadores"
  - "transmision-camiones"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camiones/caja-cambios-mercedes-actros-atego-grupos-divisor-reductor
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Cómo se obtienen 16 marchas con solo cuatro pares de piñones?"
    a: "Por multiplicación, no por suma. La caja principal ofrece cuatro marchas de avance (tres con par de piñones propio más la directa). El grupo divisor desdobla cada una en una versión lenta y otra rápida, y el grupo reductor planetario vuelve a desdoblar el resultado en una gama baja y otra alta. Cuatro por dos por dos son 16 escalones, con una caja bastante más corta y liviana que una de 16 pares de piñones."
  - q: "¿Qué hace un sincronizador y por qué tiene un anillo con bisel?"
    a: "Iguala las revoluciones del piñón libre con las del manguito de acople antes de que los dientes se enganchen. El cono genera fricción y frena o acelera el piñón. El anillo con bisel actúa como bloqueo: mientras haya diferencia de velocidad, el anillo gira contra un tope y traba el avance del manguito. Solo cuando las revoluciones se igualan, la fricción desaparece y el manguito puede terminar el recorrido sin rascar."
  - q: "¿Por qué no se debe forzar el cambio de gama (reductor) fuera de la secuencia prevista?"
    a: "El grupo reductor cambia de una vez la relación de toda la línea de transmisión y acopla piezas con dentado, igual que un sincronizador, pero con mucho más par detrás. Forzarlo sin liberar la carga o sin dejar que el mando complete el movimiento castiga el dentado de acople. En las cajas con mando electroneumático, además, la unidad de control vigila con sensores que el cilindro del reductor llegue a su posición, así que insistir manualmente suele empeorar la falla. Es una recomendación de práctica general: el procedimiento exacto lo fija el manual del modelo."
  - q: "¿Cómo se reconoce un sincronizador desgastado?"
    a: "Los síntomas típicos son raspado o crujido al engranar una marcha concreta, marchas que se salen solas bajo carga o al soltar el acelerador, y palanca que se resiste a entrar si se cambia rápido. Si ocurre en una sola marcha, apunta al sincronizador o al piñón libre de ese par. Si ocurre en todas, hay que revisar primero embrague, su ajuste y el nivel y tipo de aceite antes de abrir la caja."
  - q: "¿Qué es el aprendizaje de la unidad de control GS?"
    a: "En las cajas con control GS, la unidad de control guarda como valores aprendidos las posiciones de cada cilindro (divisor, marchas, pasillo y reductor) medidas por sus sensores. Con esos valores sabe si un cambio terminó. Tras reparar o sustituir componentes del mando hay que repetir el procedimiento de aprendizaje con el equipo de diagnóstico, porque la unidad compara continuamente la posición real con la aprendida."
sources:
  - title: "Manual de caja de cambios de camiones Mercedes-Benz Actros y Atego (preformación NGUG 08/98 y curso NGSR 03/99)"
    url: "https://www.maquinariaspesadas.org/blog/2849-manual-caja-cambios-camiones-mercedes-benz-actros-atego"
related:
  - guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios
  - arbol-transmision
  - intervalos-cambio-contaminacion-aceite
---

Una caja de cambios de camión pesado no se parece a la de un automóvil.
Debe transmitir mucho par, cubrir una relación de velocidades muy
amplia (arrancar con la carga completa en una rampa y luego circular
eficientemente en autopista) y hacerlo con un tamaño razonable. La
solución casi universal en camiones pesados es la **caja de marchas
múltiples**: una caja principal de pocas marchas a la que se le añaden
un **grupo divisor** y un **grupo reductor**.

Esta guía explica, con un enfoque de taller, cómo funcionan esas piezas
usando como base un curso de formación técnica de Mercedes-Benz para
las familias Actros y Atego. El material es de **1998 y 1999**
(preformación NGUG y curso NGSR), así que describe esas generaciones de
cajas, entre ellas las G 210, G 211, G 240 y G 260. No debe tomarse como
descripción de los modelos actuales, y para cualquier trabajo real
prevalece la documentación de servicio del fabricante para el modelo y
el año exactos.

## Por qué los camiones usan grupos adicionales

Una caja convencional con una marcha por cada par de piñones tendría
que alojar 16 pares para ofrecer 16 velocidades. Sería larga, pesada y
cara, con ejes muy flexionados. Los fabricantes resolvieron el problema
con una idea sencilla: **multiplicar en vez de sumar**.

- La caja principal aporta pocas relaciones (en el curso, cuatro de
  avance más marcha atrás).
- El grupo divisor duplica esas relaciones con un desdoblamiento fino.
- El grupo reductor las duplica otra vez, pero con un salto grande,
  que separa la gama de arranque y maniobra de la gama de ruta.

El resultado es una caja compacta con escalones de velocidad cercanos
entre sí, lo que mantiene el motor dentro de su rango de mejor par y
consumo. Para un conductor, eso significa menos caídas de revoluciones
entre marchas. Para el taller, significa que **una falla en "la marcha 9"
puede estar en tres lugares distintos**: el grupo divisor, la caja
principal o el grupo reductor.

<figure class="diagram">
<svg viewBox="0 0 800 340" role="img" aria-labelledby="cc-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="cc-d1-title">Diagrama de bloques de una caja de 16 marchas: motor y embrague, grupo divisor, caja principal, grupo reductor y eje de salida, con la multiplicación 4 por 2 por 2</title>
<rect x="2" y="2" width="796" height="336" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
<text x="400" y="36" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Camino de la fuerza en una caja de marchas múltiples</text>
<rect x="24" y="70" width="110" height="110" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<text x="79" y="118" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Motor y</text>
<text x="79" y="138" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">embrague</text>
<rect x="170" y="70" width="140" height="110" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<text x="240" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Grupo divisor</text>
<text x="240" y="132" text-anchor="middle" font-size="13" fill="#0f172a">2 pasos:</text>
<text x="240" y="150" text-anchor="middle" font-size="13" fill="#0f172a">lento / rápido</text>
<rect x="346" y="70" width="150" height="110" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="421" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Caja principal</text>
<text x="421" y="132" text-anchor="middle" font-size="13" fill="#0f172a">4 marchas</text>
<text x="421" y="150" text-anchor="middle" font-size="13" fill="#0f172a">(más marcha atrás)</text>
<rect x="532" y="70" width="140" height="110" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="602" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Grupo reductor</text>
<text x="602" y="132" text-anchor="middle" font-size="13" fill="#0f172a">planetario:</text>
<text x="602" y="150" text-anchor="middle" font-size="13" fill="#0f172a">lento / rápido</text>
<rect x="708" y="70" width="70" height="110" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<text x="743" y="118" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Eje de</text>
<text x="743" y="138" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">salida</text>
<line x1="134" y1="125" x2="164" y2="125" stroke="#0f172a" stroke-width="3"/>
<polygon points="170,125 160,119 160,131" fill="#0f172a"/>
<line x1="310" y1="125" x2="340" y2="125" stroke="#0f172a" stroke-width="3"/>
<polygon points="346,125 336,119 336,131" fill="#0f172a"/>
<line x1="496" y1="125" x2="526" y2="125" stroke="#0f172a" stroke-width="3"/>
<polygon points="532,125 522,119 522,131" fill="#0f172a"/>
<line x1="672" y1="125" x2="702" y2="125" stroke="#0f172a" stroke-width="3"/>
<polygon points="708,125 698,119 698,131" fill="#0f172a"/>
<text x="240" y="216" text-anchor="middle" font-size="22" font-weight="700" fill="#0369a1">× 2</text>
<text x="421" y="216" text-anchor="middle" font-size="22" font-weight="700" fill="#15803d">× 4</text>
<text x="602" y="216" text-anchor="middle" font-size="22" font-weight="700" fill="#b45309">× 2</text>
<rect x="150" y="238" width="500" height="44" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="400" y="266" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">4 × 2 × 2 = 16 escalones de velocidad</text>
<text x="400" y="314" text-anchor="middle" font-size="12" fill="#334155">Esquema conceptual propio, no a escala y sin representar un modelo concreto.</text>
</svg>
<figcaption>La fuerza atraviesa los tres módulos en serie y cada uno multiplica las opciones del anterior. Ilustración propia basada en la lógica descrita en el curso.</figcaption>
</figure>

## La caja principal: cuatro ejes y pares de piñones

El curso insiste en un punto de partida: contar los ejes. Una caja de
marchas múltiples tiene **cuatro ejes** (sin contar el eje corto del
piñón intermedio de la marcha atrás):

1. **Eje primario**, que recibe el giro del motor a través del embrague.
2. **Eje intermediario** (o contraeje), que reparte la fuerza a los
   pares de piñones.
3. **Eje secundario** (o principal), que lleva los piñones libres de las
   marchas.
4. **Eje de salida**, que entrega el giro final hacia el árbol de
   transmisión.

Frente a una caja convencional, el eje adicional es el que habilita los
grupos auxiliares.

En cada par de marcha hay un **piñón fijo** (solidario al eje) y un
**piñón libre** (que gira suelto sobre su eje). En esta configuración,
los piñones del intermediario son fijos y los libres van sobre el
primario y el secundario. Todos los pares están **engranados de forma
permanente**, de modo que cada piñón libre gira todo el tiempo, a una
velocidad distinta según su relación. Una marcha "entra" cuando un
manguito desplazable une el piñón libre elegido con su eje.

Una regla útil de lectura: cuanto más pequeño es el piñón conducido,
más grande es la desmultiplicación y más "lenta" y potente es la
marcha. La marcha atrás es la excepción visual, porque entre los dos
piñones se interpone un tercero que invierte el sentido de giro.

La cuarta marcha de la caja principal no tiene par propio: es la
**marcha directa**, en la que el eje primario y el secundario se unen
directamente con una horquilla adicional y la relación es 1:1.

## Horquilla, manguito y sincronizador

### Por qué hace falta un sincronizador

Si se intenta acoplar un manguito que gira a una velocidad con un piñón
libre que gira a otra, los dientes "rascan". El curso lo describe sin
rodeos: la fricción genera mucho calor y los dientes se destruyen en
poco tiempo. La técnica clásica de **doble embrague** resuelve el
problema desde la conducción, pero es poco práctica en tráfico y exige
oficio. El sincronizador la incorpora a la caja.

### Cono sincronizador

El primer elemento es el **cono**: un anillo con superficie cónica que,
al presionarse contra un cono complementario del piñón libre, produce
fricción. Esa fricción frena o acelera el piñón libre hasta que su
velocidad coincide con la del manguito. En la práctica, el cono hace
la parte "mecánica" del doble embrague.

### Bloqueo sincronizado

Con el cono solo, sigue existiendo un problema: el conductor podría
empujar el manguito antes de que las velocidades se igualen. Para
impedirlo, el anillo sincronizador tiene **chaflanes (biseles)** y
ranuras. La secuencia que muestra el curso se puede resumir así:

1. El manguito avanza y su cono interior toca el anillo; aparece
   fricción.
2. La fricción gira un poco el anillo hasta que topa en la ranura del
   piñón libre.
3. En esa posición, los biseles del anillo quedan frente a los del
   manguito y **bloquean el avance axial**.
4. Mientras las velocidades sean distintas, la fuerza de fricción
   mantiene el bloqueo.
5. Cuando se igualan, desaparece el par de fricción, el anillo se
   libera y el manguito termina el recorrido y engrana el dentado.

La idea que conviene transmitir en el taller: **el bloqueo no depende de
la fuerza del conductor, sino de la diferencia de velocidad**. Empujar
más fuerte no acelera el proceso; solo cargará y desgastará el cono.
El anillo además lleva un muelle que lo mantiene en posición, de modo
que no se desplace solo.

## Grupo divisor: dos "constantes" para duplicar

El grupo divisor se monta **antes** de la caja principal, en el eje
primario. La idea es disponer de **dos pares de entrada ("constantes")**
en lugar de uno. El primer piñón libre del eje principal hace de segunda
constante y la horquilla del eje primario decide por cuál de las dos
pasa la fuerza hacia el intermediario:

- **K1 y K2** son las dos posiciones del divisor.
- Una de las constantes es "lenta" porque su piñón libre es más
  pequeño que el de la otra; la otra es "rápida". En el ejemplo del
  curso (caja G 210), K2 es la lenta. El curso advierte que no tiene
  por qué ser siempre así: depende del tipo de caja.
- Con cada posición, las cuatro marchas de la caja principal producen
  un juego de velocidades distinto, por lo que cuatro marchas se
  transforman en **ocho**.

Como la secuencia de 16 marchas alterna entre lenta y rápida, el
divisor interviene con mucha frecuencia en la conducción diaria. Es una
inferencia de la lógica del sistema, no un dato del curso, pero explica
por qué conviene vigilar su sincronización en unidades de alto
kilometraje.

## Grupo reductor: el planetario que multiplica por dos

Va **después** de la caja principal. Es un engranaje planetario con
cuatro elementos:

- **Piñón planetario (sol)**, en el centro; en el esquema del curso va
  sobre el eje secundario.
- **Satélites**, que ruedan entre el sol y la corona (el curso muestra
  cinco).
- **Portasatélites**, que sostiene los satélites y puede llevar el giro
  hacia el eje de salida.
- **Corona dentada**, que envuelve el conjunto.

Un planetario libre no transmite par útil: el curso lo demuestra con
un ejercicio en el que, si ningún elemento se detiene ni se une a otro,
la fuerza no llega al eje de salida. Para que
transmita hay que **trabar algo**. El grupo reductor tiene dos
posiciones, gobernadas por una horquilla desplazable:

| Posición | Qué se une o se retiene | Efecto |
|---|---|---|
| **Rápida (directa)** | En la disposición habitual, la corona se une al portasatélites, de modo que dos elementos quedan solidarios | Todo el conjunto gira en bloque; el giro del eje secundario pasa 1:1 |
| **Lenta (reductora)** | Una placa de bloqueo, unida a la carcasa, retiene la corona; el sol impulsa los satélites y el giro sale por el portasatélites | El eje de salida gira más despacio y con más par |

En el ejemplo didáctico del curso, el eje de salida gira a una cuarta
parte de las revoluciones del secundario en posición lenta. Es una
cifra del ejemplo del curso; la relación real depende del modelo de
caja y se consulta en su ficha técnica.

La combinación final es lo que se representa en el diagrama: 4 marchas
de la caja principal, 2 posiciones de divisor y 2 de reductor.
Las cajas de 8, 12 y 16 marchas responden a la misma lógica de
multiplicar módulos; el curso desarrolla en detalle los casos de 8 y
16 marchas, y la composición exacta de cada variante se confirma en la
documentación de la caja.

## Lo que cambia con el control GS

En 1999 el curso NGSR presenta el **cambio de marchas Telligent** para
Actros y Atego, con una unidad de control **GS (Gear Shift)** que sustituye
el mando mecánico directo por un sistema **electroneumático**. A nivel
conceptual funciona así:

- **Actuadores neumáticos**: un cilindro de marchas, un cilindro de
  pasillo, un cilindro del grupo divisor y un cilindro del grupo
  reductor. El de marchas tiene tres posiciones; con él se selecciona
  cada marcha dentro del pasillo, y se obtiene el punto muerto
  alimentando las cuatro electroválvulas.
- **Electroválvulas**: bloques de válvulas 2/2 (dos vías, dos
  posiciones). En el cilindro de marchas hay válvulas de entrada y de
  salida de aire por cada lado; en el divisor y el reductor, la
  unidad activa normalmente una sola válvula según el cambio deseado.
  El conducto entre válvula y cilindro del reductor va por canales
  internos, de modo que solo llega la línea de aire a las válvulas.
- **Sensores de posición**: de marcha, de pasillo y del grupo reductor
  informan a la unidad GS dónde está cada cilindro. El sensor
  del grupo divisor aparece en el curso, pero se indica que dejó de
  montarse desde mediados de 1998, por lo que el parámetro se ajusta
  a sí o no en la unidad de control. También hay un sensor de
  revoluciones en la caja: permite saber si la caja está realmente
  desacoplada del motor (con el vehículo parado, el motor encendido
  y el embrague abierto, el eje primario debe estar detenido).
- **Valores aprendidos**: la unidad "aprende" las posiciones extremas
  de cada cilindro durante un procedimiento específico y las guarda.
  Como ejemplo, el curso muestra para una caja G 211 posiciones del
  grupo reductor de 597 *counts* en lento y 905 en rápido. Esos números
  son específicos de un vehículo y una caja, pero ilustran el principio:
  la unidad compara la lectura real con la aprendida para confirmar
  que el cambio se completó, y mide también su velocidad y duración.
- **Sensor de embrague**: el sistema mide el recorrido del embrague
  (en el curso, en *counts*) para saber si está cerrado, accionado o
  abierto.

Dos detalles de diseño aclaran decisiones que a veces desconciertan en
el taller. Primero, en las cajas con control GS la marcha atrás se
engrana con el émbolo pequeño del cilindro de marchas, que aplica menos
fuerza sobre las piezas internas. Segundo, las cajas G 240 y G 260 con
este sistema no llevan palanca inversora para 3.ª y 4.ª, porque el
esquema de posiciones lo gestiona la unidad de control a través del
aprendizaje, y no la geometría de una palanca de doble H.

Una secuencia típica de cambio entre pasillos, como pasar de 2.ª a
marcha atrás en una G 211, requiere **tres pasos**: llevar a punto
muerto, seleccionar el pasillo y engranar la marcha. La unidad controla
cada paso con la lectura de sus sensores, no a ciegas.

## Errores frecuentes y síntomas de desgaste

Lo que sigue **no proviene del curso**, sino de la práctica general de
taller y de la lógica de los mecanismos explicados. Úselo como lista
de verificación y confirme siempre con el manual del modelo.

**Errores de conducción**

- **Forzar el cambio de gama (reductor) o de divisor** sin liberar el
  par o sin esperar a que el mando complete el movimiento. En cajas con
  control electroneumático, repetir órdenes mientras la unidad aún
  ejecuta el cambio suele terminar en golpes en los dientes de acople.
  Respete la secuencia que indique el manual del modelo.
- **Empujar la palanca con fuerza** cuando el sincronizador ofrece
  resistencia. Como explicó el bloqueo, la resistencia significa que las
  velocidades aún no coinciden; empujar solo castiga el cono.
- **Seleccionar marchas muy cortas a velocidad alta** o dejar caer las
  revoluciones del motor antes de cambiar, lo que obliga a sincronizar
  diferencias enormes.
- **Mantener el pie en el embrague** o conducir con él parcialmente
  accionado, con el consiguiente desgaste del propio embrague y de
  su servo.

**Errores de taller**

- **Aceite equivocado o nivel incorrecto**: los sincronizadores
  dependen de las propiedades de fricción del lubricante. Revise la
  especificación del fabricante antes de cambiar de marca o de viscosidad
  (más en la
  [guía de lubricantes para caja de cambios](/posts/guia-completa-de-lubricantes-y-especificaciones-para-caja-de-cambios/)).
- **No hacer el aprendizaje tras intervenir el mando** en cajas con
  control GS: la unidad compara contra valores que ya no corresponden.
- **Diagnosticar la caja cuando el problema es el embrague o su
  ajuste**: un embrague que no desacopla del todo imita un sincronizador
  gastado en todas las marchas.
- **Ignorar el aceite usado**: la limalla fina en el tapón magnético o
  en un análisis es la primera pista de desgaste interno
  ([intervalos de cambio y contaminación del aceite](/posts/intervalos-cambio-contaminacion-aceite/)).

**Síntomas de sincronizador gastado**

| Síntoma | Posible causa | Primera comprobación |
|---|---|---|
| Raspado al engranar una marcha concreta | Cono o anillo desgastado en ese par | Probar con el motor en ralentí y embrague bien desacoplado |
| La marcha "se sale" bajo carga o al soltar | Dentado de acople desgastado o horquilla con holgura | Inspección de horquillas y manguito |
| Palanca "dura" al cambiar rápido | Fricción insuficiente del cono o aceite inadecuado | Nivel, tipo y estado del aceite |
| Falla solo en el cambio de gama | Cilindro, electroválvula o sensor del reductor | Aire de mando, valores de posición con diagnosis |

## Mantenimiento: qué revisar primero

1. **Aceite**: tipo, nivel y estado, con atención a limalla en el tapón.
2. **Embrague**: ajuste, recorrido y servo antes de abrir la caja.
3. **Suministro de aire** en las cajas con mando neumático: presión,
   humedad y filtros, porque las electroválvulas son sensibles a la
   suciedad.
4. **Conectores y cableado** de sensores y electroválvulas: son fuente
   frecuente de fallas intermitentes.
5. **Diagnosis con valores reales frente a aprendidos**, para
   distinguir una falla mecánica de una eléctrica.

Para temas vecinos puede ser útil revisar el
[análisis SOS del aceite lubricante](/posts/analisis-sos-aceite-lubricante/)
y el funcionamiento del
[árbol de transmisión](/posts/arbol-transmision/), que recibe el giro del
eje de salida. Si le interesa el mando automatizado y el control del
embrague, consulte también
[el cambio automático Telligent en Actros: embrague y sensores](/posts/cambio-automatico-telligent-actros-embrague-sensores/).

## Resumen

Las cajas de marchas múltiples de camión alcanzan 16 velocidades
**multiplicando** módulos: una caja principal de cuatro marchas, un
divisor que las desdobla en lentas y rápidas, y un reductor planetario
que las desdobla otra vez en gama baja y alta. Los sincronizadores
igualan velocidades por fricción y bloquean el engrane hasta lograrlo.
En las versiones con control GS, cilindros neumáticos, electroválvulas
y sensores ejecutan los cambios bajo la supervisión de una unidad que
aprende las posiciones de cada mecanismo. Entender dónde interviene cada
módulo es lo que permite acotar una falla antes de abrir la caja.

Este artículo es una explicación didáctica basada en material de
formación de finales de los años noventa. No sustituye la documentación
de servicio del fabricante para el modelo exacto, y no implica
respaldo ni relación con Mercedes-Benz.

**Fuentes:** curso de formación sobre cajas de cambios de camiones
Mercedes-Benz Actros y Atego (preformación NGUG 08/98 y curso NGSR
03/99), disponible en
[Maquinaria Pesada](https://www.maquinariaspesadas.org/blog/2849-manual-caja-cambios-camiones-mercedes-benz-actros-atego).

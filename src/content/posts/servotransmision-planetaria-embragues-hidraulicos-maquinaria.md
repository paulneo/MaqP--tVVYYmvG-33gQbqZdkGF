---
title: "Servotransmisión planetaria y embragues hidráulicos de maquinaria"
published: 2026-11-23
draft: false
featured: false
description: "Cómo cambia de marcha una servotransmisión sin cortar la potencia: paquetes de embrague, contraeje y planetarios, flujo de potencia por velocidad y diagnóstico de patinaje."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "servotransmision"
  - "powershift"
  - "engranajes-planetarios"
  - "embragues-hidraulicos"
  - "tren-de-fuerza"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/transmisiones/servotransmision-planetaria-embragues-hidraulicos-maquinaria
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Qué es una servotransmisión y en qué se diferencia de una caja manual?"
    a: "Es un tren de engranajes que cambia de marcha sin interrumpir el flujo de potencia. En vez de deslizar engranajes o collares con horquillas, usa embragues de discos accionados por aceite a presión y los engranajes están acoplados de forma permanente. Cada combinación de embragues da una relación distinta, lo que permite cambiar con carga sin perder productividad."
  - q: "¿Cómo se desconecta un embrague hidráulico de la transmisión?"
    a: "Al cortar el flujo de aceite, la presión detrás del pistón cae y los resortes lo empujan de vuelta, liberando discos y planchas. El componente que estaba retenido vuelve a girar libre y deja de pasar potencia por ese embrague. Es decir, el embrague se conecta con aceite y se desconecta por resorte."
  - q: "¿Cómo se calcula la relación de un conjunto planetario?"
    a: "El número efectivo de dientes del portador es la suma de los dientes del engranaje central y de la corona. Con la relación expresada como dientes del elemento impulsado entre dientes del impulsor, un central de 30 dientes y una corona de 90 dan un portador de 120. Con el central como entrada, la corona como salida y el portador fijo resulta 3:1, y con el portador como entrada, la corona como salida y el central fijo, 0,75:1."
  - q: "Si la transmisión patina solo en primera de avance, ¿qué embrague sospechar?"
    a: "Use la tabla de conexión de embragues del equipo. En el ejemplo del curso (un tractor de cadenas D9R), si patina en primera de avance y de retroceso, el sospechoso es el embrague de velocidad común a ambas, el No. 5; si patina solo en primera de avance, lo es el de dirección de avance, el No. 2. La lógica es buscar el embrague que comparten todas las marchas con síntoma."
  - q: "¿Qué indica que los discos de un embrague están llegando al límite de desgaste?"
    a: "En el diseño que describe el curso, cuando los discos han perdido la mitad de la profundidad de las ranuras de aceite el pistón avanza lo bastante para soltar de su asiento el sello exterior, lo que evita el contacto de metal con metal. Es un mecanismo específico de ese diseño. Mida el desgaste según el manual de servicio de su transmisión."
sources:
  - title: "Curso: servotransmisiones, embrague hidráulico y flujo de potencia — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/6680-curso-servotransmisores-embrague-hidraulico-transmision-flujo-potencia"
related:
  - convertidor-de-par-funcionamiento-divisor-acoplamiento-hidraulico
  - transmision-retroexcavadora-power-shuttle-convertidor
  - como-funcionan-los-embragues-en-transejes-automaticos
---

En una caja manual, cada cambio exige interrumpir la potencia: se pisa el
embrague, se desliza un engranaje o un collar con una horquilla y se vuelve a
acoplar. En una excavadora cargando o un tractor empujando, ese corte es
tiempo perdido. La **servotransmisión** (powershift en la jerga inglesa)
resuelve el problema de otra forma: los engranajes están siempre engranados
y quienes deciden por dónde viaja la potencia son **embragues de discos
accionados por aceite**.

Esta guía explica el embrague hidráulico, los dos tipos de tren de engranajes
más comunes (contraeje y planetario), la teoría que hay que dominar para leer
un planetario y el flujo de potencia por velocidad, y termina con cómo usar la
tabla de conexión de embragues para diagnosticar un patinaje. Está basada en un
curso de formación de tren de fuerza de un fabricante, por lo que los
ejemplos son de sus máquinas. Para presiones, tolerancias y despiece, prevalece
el manual de servicio de su equipo.

Si aún no vio la etapa anterior de la línea de mando, el
[convertidor de par](/posts/convertidor-de-par-funcionamiento-divisor-acoplamiento-hidraulico/)
entrega la potencia del motor a esta transmisión; aquí explicamos lo que
ocurre después.

## El embrague hidráulico

Cada embrague de la servotransmisión tiene los mismos elementos:

- Un **paquete de discos y planchas**. Los discos llevan material de fricción
  adherido a la superficie, para que no haya contacto metal con metal; las
  planchas son de acero.
- Un **pistón** con sellos interior y exterior.
- **Resortes** entre la caja del embrague y el pistón.
- Una **caja** que sostiene pistón y planchas, y una **maza** (o la corona,
  según el diseño) a la que se estrían los discos.

El principio es simple. Cuando el aceite presurizado llena la cavidad detrás
del pistón, éste vence a los resortes y comprime discos y planchas entre sí. La
fricción une los dos componentes y la potencia fluye a través del paquete. Al
cortar el aceite, los resortes devuelven el pistón, discos y planchas se
separan y el componente que estaba retenido gira libre. **Se conecta con
aceite y se desconecta con resorte.**

Dos detalles de montaje importan para entender las fallas:

- Las **planchas** se estrían por su diámetro exterior a la caja del embrague
  (o se sujetan con pasadores que impiden su rotación). Giran con la caja o
  quedan fijas, según el diseño.
- Los **discos** se estrían por su diámetro interior a la maza o a la corona y
  giran con ella.

En el diseño de contraeje que muestra el curso, el pistón tiene un detalle de
seguridad: cuando los discos han desgastado la mitad de la profundidad de las
ranuras de aceite, el pistón se desplaza lo suficiente para sacar de su asiento
(soplar) el sello exterior. La pérdida de presión resultante impide que los
discos y las planchas lleguen a tocarse metal contra metal. Es un rasgo de ese
diseño, no una regla general.

Cada eje de la transmisión de contraeje lleva **tres conductos internos de
aceite**: uno de lubricación y enfriamiento para embragues, cojinetes y
engranajes, y dos de aceite a presión para conectar los embragues de ese eje.
Si la presión de un embrague cae, la pista a investigar es su conducto, sus
sellos y su pistón.

## Dos tipos de tren de engranajes

El curso presenta los dos más comunes:

| Característica | Contraeje | Planetario |
| --- | --- | --- |
| Disposición | Ejes paralelos con engranajes de dientes rectos siempre engranados | Conjuntos compactos con entrada y salida en el mismo eje |
| Cómo cambia | Se conectan paquetes de embrague de velocidad y de dirección | Los embragues retienen o liberan los componentes del planetario |
| Ventajas citadas | Menos piezas y menor peso | Carga repartida entre varios engranajes, compacto, sin esfuerzos laterales en los ejes |
| Interrupción de potencia | Mínima al cambiar de embragues | Poca o ninguna |

## Contraeje: un ejemplo de 4 avances y 3 retrocesos

La transmisión de contraeje que usa el curso tiene tres ejes de embrague
principales: el de baja/alta de avance, el de retroceso/segunda y el de
tercera/primera, además de los ejes de entrada y de salida. Los dos primeros
están en contacto constante con el eje de entrada; el de retroceso/segunda
impulsa al de tercera/primera, que a su vez impulsa al de salida y, con él, a
los ejes de mando delantero y trasero.

Para transmitir potencia hacen falta **un embrague de dirección y uno de
velocidad** conectados a la vez. Cada embrague sostiene la maza que lleva el
engranaje correspondiente y, con la maza fija, la potencia fluye por ese
engranaje. El curso desarrolla estos casos:

| Marcha | Embragues conectados | Camino de la potencia, según el curso |
| --- | --- | --- |
| Neutral | Ninguno | El eje del convertidor mueve el eje de entrada, pero no pasa par a los contraejes |
| 1.ª de avance | Baja de avance y primera | Entrada, eje de baja/alta de avance, eje de retroceso/segunda, eje de tercera/primera, salida |
| 2.ª de retroceso | Retroceso y segunda | Entrada, eje de retroceso/segunda, eje de tercera/primera, salida |
| 3.ª de retroceso | Retroceso y tercera | Entrada, eje de retroceso/segunda, engranaje fijo del eje de tercera/primera, salida |
| 4.ª de avance | Alta de avance y tercera | Entrada, eje de baja/alta de avance, eje de retroceso/segunda, eje de tercera/primera, salida |

El curso no describe en detalle la 2.ª y 3.ª de avance ni la 1.ª de retroceso
de esta transmisión, y yo tampoco las inventaré. Lo que sí deja claro es el
patrón: **cambiar de marcha es cambiar de combinación de embragues**, nunca
mover engranajes.

## Teoría del engranaje planetario

Un conjunto planetario simple tiene cuatro elementos:

1. el **engranaje central** (sol), en el centro;
2. tres o más **engranajes planetarios**, que giran libres sobre cojinetes;
3. el **portador**, que los sostiene;
4. la **corona**, un engranaje de dentado interior que rodea al conjunto.

Los planetarios se mueven alrededor del central como los planetas alrededor
del Sol, de ahí el nombre. Como todos los engranajes caben dentro de la
corona, el conjunto ocupa menos espacio que uno de dientes externos, y el
contacto de un engranaje interno con uno externo es mayor y más resistente.
Dos engranajes externos girarán en sentidos opuestos, mientras que uno
externo y uno interno girarán en el mismo.

<figure class="diagram">
<svg viewBox="0 0 760 420" role="img" aria-label="Conjunto planetario simple visto de frente: engranaje central de 30 dientes, tres planetarios sostenidos por un portador y corona exterior de 90 dientes; a la derecha, la suma S más R igual a C y dos relaciones de ejemplo" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="760" height="420" rx="14" fill="#f8fafc"/>
<text x="380" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Conjunto planetario simple</text>
<circle cx="220" cy="225" r="165" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<circle cx="220" cy="225" r="140" fill="#f8fafc" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="220" cy="225" r="50" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
<g fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5">
<circle cx="220" cy="125" r="50"/>
<circle cx="306.6" cy="275" r="50"/>
<circle cx="133.4" cy="275" r="50"/>
</g>
<g stroke="#15803d" stroke-width="5" fill="none">
<path d="M220 225 L220 125"/><path d="M220 225 L306.6 275"/><path d="M220 225 L133.4 275"/>
</g>
<g fill="#15803d"><circle cx="220" cy="125" r="6"/><circle cx="306.6" cy="275" r="6"/><circle cx="133.4" cy="275" r="6"/><circle cx="220" cy="225" r="8"/></g>
<text x="220" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Central</text>
<text x="220" y="246" text-anchor="middle" font-size="11" fill="#0f172a">S = 30</text>
<text x="220" y="105" text-anchor="middle" font-size="12" fill="#0f172a">Planetario</text>
<g font-size="14" fill="#0f172a">
<text x="410" y="70" font-weight="700">Corona (R = 90)</text>
<text x="410" y="88" font-size="12">dentado interior</text>
<text x="410" y="140" font-weight="700" fill="#15803d">Portador (C = S + R = 120)</text>
<text x="410" y="158" font-size="12">sostiene los planetarios</text>
</g>
<path d="M405 150 L270 250" stroke="#15803d" stroke-width="1.5" fill="none"/>
<path d="M404 66 L332 98" stroke="#334155" stroke-width="1.5" fill="none"/>
<rect x="410" y="200" width="320" height="150" rx="8" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
<g font-size="13" fill="#0f172a">
<text x="426" y="226" font-weight="700">Ejemplo del curso (S = 30, R = 90)</text>
<text x="426" y="252">Central impulsa, corona sale, portador fijo:</text>
<text x="426" y="270">90 / 30 = 3 : 1 (retroceso, reducción)</text>
<text x="426" y="298">Portador impulsa, corona sale, central fijo:</text>
<text x="426" y="316">90 / 120 = 0,75 : 1 (avance, sobremando)</text>
<text x="426" y="340" font-size="11" fill="#475569">Relación = dientes impulsado / dientes impulsor</text>
</g>
<text x="380" y="408" text-anchor="middle" font-size="11" fill="#475569">Esquemático: radios proporcionales a los dientes del ejemplo (R = 90, S = 30, planetarios de 30).</text>
</svg>
<figcaption>Conjunto planetario simple con los números del curso. El portador une los centros de los planetarios, y en este esquema los radios son proporcionales a los dientes. Ilustración propia.</figcaption>
</figure>

### Reglas básicas

El curso las resume así, y conviene aprenderlas de memoria porque todo lo
demás se deduce de ellas:

- Debe haber un elemento de **entrada** y uno **fijo** para obtener salida
  (salvo en mando directo).
- Dos miembros cualesquiera girando en el mismo sentido y a la misma
  velocidad dan **mando directo 1:1**.
- Un portador **siempre sigue su entrada**.
- Portador como elemento impulsor: **sobremando**.
- Portador como elemento de salida: **reducción**.
- Portador fijo: **reducción de retroceso**.

### Relación de engranajes

En un planetario simple el número efectivo de dientes del portador es la suma
de los dientes del central y de la corona: **S + R = C**. Con un central de 30
dientes y una corona de 90, el portador vale 120.

**Corrección a la fuente.** El texto del curso dice "divida el número de
dientes del elemento impulsor entre el del impulsado", pero todos sus ejemplos
hacen lo contrario: dientes del impulsado entre dientes del impulsor (90/30 y
90/120). La fórmula correcta para esta convención es la de los ejemplos.
Con ella, una relación mayor que 1 es reducción de velocidad (más par) y una
menor que 1 es sobremando.

Con S = 30, R = 90 y C = 120, las ocho condiciones posibles de un conjunto
simple (seis de ellas más mando directo y neutral) quedan así. Los cálculos
de la tabla son míos, aplicando la fórmula del curso a sus números.

| Condición | Entra | Sale | Fijo | Relación | Resultado |
| --- | --- | --- | --- | --- | --- |
| Reducción de avance | Corona | Portador | Central | 120/90 = 1,33:1 | Reducción |
| Reducción máxima de avance | Central | Portador | Corona | 120/30 = 4:1 | Reducción |
| Sobremando de avance | Portador | Corona | Central | 90/120 = 0,75:1 | Sobremando |
| Sobremando máximo de avance | Portador | Central | Corona | 30/120 = 0,25:1 | Sobremando |
| Reducción de retroceso | Central | Corona | Portador | 90/30 = 3:1 | Retroceso, planetarios como locos |
| Sobremando de retroceso | Corona | Central | Portador | 30/90 = 0,33:1 | Retroceso, planetarios como locos |
| Mando directo | Dos elementos trabados entre sí | | | 1:1 | Directo |
| Neutral | Ningún elemento impulsor ni fijo | | | | Sin salida |

## Flujo de potencia en una servotransmisión planetaria

El curso arma paso a paso una transmisión de **dos velocidades y dos
direcciones** con cuatro conjuntos planetarios, contados desde la entrada:
No. 1 (retroceso), No. 2 (avance), No. 3 (segunda) y No. 4 (primera). Los
centrales de retroceso y avance van en el eje de entrada y giran siempre que
éste gira. El portador central reúne los planetarios de retroceso y de avance
con los de segunda, y conecta el eje de entrada con el de salida.

**Dirección.** Es la mitad delantera de la transmisión.

- **Avance:** se retiene la corona del conjunto de avance. El central de
  avance gira con la entrada, los planetarios se desplazan alrededor y el
  portador gira en el mismo sentido. En el conjunto de retroceso, ningún
  miembro está fijo, así que no transmite.
- **Retroceso:** se retiene el portador del conjunto de retroceso. Los
  planetarios giran en su sitio e impulsan la corona en sentido contrario al
  central. Como esa corona está unida al portador del conjunto de avance, éste
  también gira al revés.

**Velocidad.** Es la mitad trasera.

- **Segunda:** se retiene la corona del conjunto de segunda. El portador, que
  gira, hace que los planetarios rueden dentro de esa corona fija e impulsen el
  central de segunda y el eje de salida. En el conjunto de primera nada está
  fijo y no transmite.
- **Primera:** se libera la corona de segunda y se retiene la de primera. El
  central de segunda queda frenado por la carga del eje de salida, de modo que
  la corona de segunda debe girar; esa corona está unida al portador de
  primera, y los planetarios de primera ruedan dentro de su corona fija e
  impulsan el central de primera y el eje de salida. Los dos conjuntos trabajan
  acoplados, porque la corona de segunda va unida al portador de primera, y el
  resultado es una relación más lenta que la de segunda.

La combinación da cuatro marchas en este esquema: primera y segunda de avance
y de retroceso. El curso resume las conexiones con una tabla para un tractor
de cadenas D9R, que es un diseño distinto y de tres velocidades.

### Tabla de conexión de embragues (ejemplo D9R)

| Velocidad | Embrague de dirección | Embrague de velocidad |
| --- | --- | --- |
| 1.ª de avance | 2 | 5 |
| 2.ª de avance | 2 | 4 |
| 3.ª de avance | 2 | 3 |
| Neutral | Ninguno | 3 |
| 1.ª de retroceso | 1 | 5 |
| 2.ª de retroceso | 1 | 4 |
| 3.ª de retroceso | 1 | 3 |

La tabla es del D9R; no la aplique a otra máquina. Su valor es el método: toda
marcha combina **un embrague de dirección y uno de velocidad**, y los que
repiten entre marchas permiten aislar fallas.

## Diagnóstico y comprobaciones

El curso no incluye valores de presión ni de la válvula de control, pero da la
herramienta central de diagnóstico: **la tabla de conexión de embragues**.

- Si la transmisión **patina en 1.ª de avance y en 1.ª de retroceso**, el
  problema probable está en el embrague No. 5, porque es el común a ambas.
- Si patina en 1.ª de avance pero **no** en 1.ª de retroceso, lo probable es el
  embrague No. 2, que solo interviene en avance.

Más allá del ejemplo, la lógica es la misma: anote en qué marchas aparece el
síntoma, busque en la tabla el embrague común y revise ese paquete. En un
patinaje real las causas habituales, sin salirse de la lógica del sistema, son
presión de conexión insuficiente, fuga en sellos o pistón, discos gastados y
aceite degradado. Mida las presiones de cada embrague con los valores del
manual y la conversión de unidades con la [calculadora de presión y
torque](/herramientas/conversor-presion-torque/) si la información viene en
otro sistema.

| Síntoma | Causa probable | Qué comprobar |
| --- | --- | --- |
| Patina en una marcha y su inversa | Embrague de velocidad común | Presión del embrague, sellos del pistón, estado de discos |
| Patina solo en una dirección | Embrague de dirección de ese sentido | Presión del embrague de dirección, conducto del eje |
| Patina en todas las marchas | Presión general, bomba o filtro | Presión de la bomba, filtro, nivel y estado del aceite |
| No se mueve en ninguna dirección con motor y convertidor normales | Embragues de dirección sin presión o selección | Selección, presión de dirección, lógica de la válvula de control |
| Calentamiento de la transmisión | Patinaje prolongado o enfriamiento deficiente | Presiones, enfriador, aceite |

La selección de qué embrague recibe aceite la hace la **válvula de control**
según la posición que elige el operador, aunque el curso no la desarrolla.
Para entender una unidad de control hidráulico, vea el artículo sobre
[la unidad de control en transejes
automáticos](/posts/funcionamiento-de-unidad-de-control-hidraulico-en-transejes-automaticos/).
Y si el síntoma es un golpe o una pérdida de fuerza que mejora con el motor más
lento, revise también el [convertidor de par](/posts/convertidor-de-par-funcionamiento-divisor-acoplamiento-hidraulico/),
ya que la prueba de calado ayuda a separar un problema de convertidor de uno de
embragues.

### Prueba con aire tras el armado

Después de una reparación, el ejercicio de taller del curso indica **probar la
transmisión con aire** para verificar que todos los embragues funcionan. Es una
comprobación previa a la puesta en marcha que detecta sellos y pistones que no
cierran antes de que haya presión de aceite real. Las presiones de aire y los
puntos de conexión son los del manual de la transmisión.

## Errores comunes

- **Aplicar la tabla del D9R a otra máquina.** Cada transmisión tiene su
  propia numeración de embragues.
- **Culpar al convertidor de todo.** Un patinaje en marchas concretas apunta a
  un embrague, no al convertidor; la prueba de calado ayuda a distinguirlos.
- **Usar la fórmula al revés.** Con la convención del curso, relación igual a
  dientes del impulsado entre dientes del impulsor.
- **Olvidar que todo planetario necesita un fijo y un impulsor.** Sin elemento
  retenido no hay salida: ese es el principio de la marcha neutral.
- **Reemplazar solo discos.** Si el pistón o los sellos fugan, la presión no se
  sostendrá con discos nuevos.
- **Cambiar aceite o filtro sin revisar el desgaste.** Material de fricción
  en el filtro es una pista del estado de los embragues.

## Para seguir leyendo

Para ver el convertidor que alimenta a esta transmisión, lea
[convertidor, divisor de par y acoplamiento hidráulico](/posts/convertidor-de-par-funcionamiento-divisor-acoplamiento-hidraulico/).
La [transmisión de retroexcavadora con power shuttle](/posts/transmision-retroexcavadora-power-shuttle-convertidor/)
aplica estos conceptos a una máquina concreta, los [embragues de un transeje
automático](/posts/como-funcionan-los-embragues-en-transejes-automaticos/)
muestran un paquete de discos en un vehículo liviano, y las [transmisiones
hidrostáticas](/posts/transmisiones-hidrostaticas/) son la alternativa sin
engranajes ni embragues de marcha.

**Fuentes:** curso de formación de tren de fuerza sobre servotransmisiones,
publicado en [Maquinarias
Pesadas](https://www.maquinariaspesadas.org/blog/6680-curso-servotransmisores-embrague-hidraulico-transmision-flujo-potencia).
Valores referenciales; prevalece el manual de servicio del equipo.

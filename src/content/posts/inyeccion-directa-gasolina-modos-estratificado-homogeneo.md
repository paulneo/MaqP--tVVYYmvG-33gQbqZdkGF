---
title: "Inyección directa de gasolina: modos estratificado, homogéneo y pobre"
published: 2026-11-16
draft: false
featured: false
description: "Cómo cambia la mezcla, la inyección y la combustión en cada modo de un motor GDI, cuándo conmuta la ECU y por qué el modo pobre exige catalizador de NOx."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "inyeccion-directa-gasolina"
  - "gdi"
  - "carga-estratificada"
  - "catalizador-acumulador-nox"
  - "sonda-lambda-banda-ancha"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/inyeccion-electronica/inyeccion-directa-gasolina-modos-estratificado-homogeneo
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Por qué la inyección directa puede trabajar con mezcla tan pobre y la inyección en el múltiple no?"
    a: "Porque en el modo estratificado no toda la cámara tiene mezcla pobre: solo la nube que rodea la bujía es inflamable, y el resto es aire fresco y gases recirculados. La chispa solo necesita una zona con buena capacidad de ignición. En un motor con inyección en el múltiple la mezcla es uniforme en todo el cilindro, y si se empobrece demasiado ya no enciende de forma estable. Por eso la carga estratificada llega a un lambda global de 1,6 a 3 (cifra del curso, motor MED7), mientras que una mezcla uniforme tan pobre no sería estable."
  - q: "¿Por qué el modo estratificado necesita un catalizador acumulador de NOx?"
    a: "Con exceso de oxígeno (lambda mayor que 1) el catalizador de tres vías convencional no puede reducir los óxidos de nitrógeno, porque la reacción necesita monóxido de carbono e hidrocarburos que en mezcla pobre casi no existen. El acumulador de NOx los retiene en una capa de óxido de bario como nitrato y, cuando se llena, la ECU enriquece brevemente la mezcla para liberarlos y convertirlos en nitrógeno. Sin ese componente el motor no cumpliría los límites de NOx en modo pobre."
  - q: "¿Cómo afecta el azufre del combustible al catalizador de NOx?"
    a: "El azufre se almacena en el mismo sitio donde se guarda el NOx, porque es químicamente parecido, y ocupa esos puntos de retención. La capacidad útil baja y las regeneraciones de NOx se vuelven cada vez más frecuentes. Para expulsarlo hace falta superar unos 650 °C durante un par de minutos (dato del curso). Con gasolina de alto contenido de azufre, frecuente en algunos mercados de la región, ese ciclo es más exigente y el catalizador se degrada antes. Este vínculo con la calidad del combustible es conocimiento general del sector; el curso describe el mecanismo del azufre en el catalizador, no el origen."
  - q: "¿Todos los motores de inyección directa funcionan en modo estratificado?"
    a: "No. El estratificado fue la gran apuesta de las primeras generaciones, como el MED7 que estudia el curso. Muchos motores GDI actuales trabajan casi siempre en modo homogéneo con lambda 1 y usan inyección directa por sus ventajas de refrigeración de la carga, relación de compresión y respuesta, sin necesidad de acumulador de NOx. Es una observación general de la industria; conviene confirmar en el manual de servicio qué modos tiene el motor que tienes delante."
  - q: "¿Cómo reconozco depósitos de carbón en las válvulas de admisión de un motor GDI?"
    a: "Los síntomas típicos son ralentí inestable en frío, tirones al acelerar, pérdida gradual de potencia, consumo mayor y fallos de encendido registrados que no se explican por bujías ni bobinas. La confirmación es visual con boroscopio por el orificio de la bujía o del múltiple. En GDI el combustible no pasa por la válvula de admisión, así que nada la lava, y los vapores de aceite del respiradero del cárter se carbonizan sobre ella."
sources:
  - title: "Curso Inyección directa Jetronic: modos, sistemas, componentes y funcionamiento (Bosch Motronic MED7)"
    url: "https://www.mecanicoautomotriz.org/4481-curso-inyeccion-directa-jetronic-modos-sistemas-componentes-funcionamiento"
related:
  - fundamentos-tipos-de-sistemas-efi
  - sensores-en-vehiculos-modernos-tipos-funciones
  - componentes-funcionamiento-sistemas-combustible
---

La inyección directa de gasolina cambia una idea que parecía
intocable: que el motor de gasolina debe funcionar siempre con una
mezcla de aire y combustible cercana a la estequiométrica. Al inyectar
dentro del cilindro, y no en el múltiple, la ECU puede decidir **cuándo**
y **dónde** poner el combustible. De esa libertad nacen tres modos de
trabajo, y de ellos depende casi todo: el consumo, las emisiones, el
tipo de catalizador y los fallos que verás en el taller.

Esta guía usa como ejemplo el sistema **Bosch Motronic MED7**, tal como
lo presenta un curso técnico publicado en mecanicoautomotriz.org. Los
valores numéricos que aparecen vienen de ese curso y están marcados
como tales; lo demás se indica como "referencial" o conocimiento
general. No implica aval de Bosch ni de ningún fabricante.

## Por qué existe la inyección directa

El catalizador de tres vías elimina hasta el 99 % de los hidrocarburos,
los óxidos de nitrógeno (NOx) y el monóxido de carbono, según el curso.
Pero el CO₂ no se filtra: solo baja si se quema menos combustible. Los
sistemas de inyección en el múltiple (MPFI) forman la mezcla fuera del
cilindro y no alcanzan ese ahorro, porque necesitan mezcla cercana a
lambda 1 casi todo el tiempo.

La inyección directa ataca dos pérdidas del motor de gasolina:

1. **Pérdidas por estrangulamiento.** Con la mariposa casi cerrada a
   carga parcial, el motor gasta energía aspirando contra una
   restricción. Si el par se regula con la *cantidad de combustible* y
   no con el aire, la mariposa puede quedarse muy abierta.
2. **Pérdidas de calor a las paredes.** Si solo se quema una nube
   central rodeada de gas aislante, el calor llega menos a las paredes
   del cilindro.

Hay un efecto adicional que aparece en cualquier modo: al evaporarse
dentro del cilindro, el combustible roba calor al aire encerrado. El
aire más frío permite subir la relación de compresión frente a un motor
con inyección en el múltiple, según el curso.

## Los tres modos de un vistazo

<figure class="diagram">
<svg viewBox="0 0 840 330" role="img" aria-labelledby="gdi-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="gdi-d1-title">Tres cortes de cilindro que muestran la distribución de la mezcla en los modos estratificado, homogéneo-pobre y homogéneo</title>
<rect x="0" y="0" width="840" height="330" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>

<text x="140" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Estratificado</text>
<rect x="50" y="60" width="180" height="150" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<ellipse cx="140" cy="100" rx="42" ry="30" fill="#f59e0b" fill-opacity="0.8"/>
<rect x="135" y="46" width="10" height="14" fill="#475569"/>
<rect x="36" y="78" width="16" height="12" fill="#475569"/>
<rect x="50" y="185" width="180" height="25" fill="#94a3b8"/>
<path d="M80 185 Q120 208 160 185 Z" fill="#f8fafc"/>
<text x="140" y="152" text-anchor="middle" font-size="14" fill="#1e293b">λ global 1,6 a 3</text>
<text x="140" y="172" text-anchor="middle" font-size="12" fill="#1e293b">aire + gases EGR</text>
<text x="140" y="235" text-anchor="middle" font-size="13" fill="#1e293b">Inyecta: final de compresión</text>
<text x="140" y="255" text-anchor="middle" font-size="13" fill="#1e293b">Mezcla: nube junto a la bujía</text>
<text x="140" y="275" text-anchor="middle" font-size="13" fill="#1e293b">Par: cantidad de combustible</text>

<text x="420" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Homogéneo-pobre</text>
<rect x="330" y="60" width="180" height="150" fill="#f59e0b" fill-opacity="0.25" stroke="#334155" stroke-width="3"/>
<rect x="415" y="46" width="10" height="14" fill="#475569"/>
<rect x="316" y="78" width="16" height="12" fill="#475569"/>
<rect x="330" y="185" width="180" height="25" fill="#94a3b8"/>
<text x="420" y="152" text-anchor="middle" font-size="14" fill="#1e293b">λ ≈ 1,55 uniforme</text>
<text x="420" y="235" text-anchor="middle" font-size="13" fill="#1e293b">Inyecta: admisión (~30° APMS)</text>
<text x="420" y="255" text-anchor="middle" font-size="13" fill="#1e293b">Mezcla: uniforme y pobre</text>
<text x="420" y="275" text-anchor="middle" font-size="13" fill="#1e293b">Par: encendido y masa de aire</text>

<text x="700" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Homogéneo</text>
<rect x="610" y="60" width="180" height="150" fill="#f59e0b" fill-opacity="0.55" stroke="#334155" stroke-width="3"/>
<rect x="695" y="46" width="10" height="14" fill="#475569"/>
<rect x="596" y="78" width="16" height="12" fill="#475569"/>
<rect x="610" y="185" width="180" height="25" fill="#94a3b8"/>
<text x="700" y="152" text-anchor="middle" font-size="14" fill="#1e293b">λ = 1 uniforme</text>
<text x="700" y="235" text-anchor="middle" font-size="13" fill="#1e293b">Inyecta: admisión (~30° APMS)</text>
<text x="700" y="255" text-anchor="middle" font-size="13" fill="#1e293b">Mezcla: uniforme, λ = 1</text>
<text x="700" y="275" text-anchor="middle" font-size="13" fill="#1e293b">Par: encendido y masa de aire</text>

<text x="420" y="312" text-anchor="middle" font-size="12" fill="#334155">Zona anaranjada: mezcla inflamable. Zona celeste: aire fresco y gases recirculados. Inyector a la izquierda, bujía arriba.</text>
</svg>
<figcaption>Distribución de la mezcla por modo en un corte de cilindro (esquema propio, no a escala). Los ángulos y valores de lambda son los que cita el curso para el MED7.</figcaption>
</figure>

### Modo homogéneo (lambda = 1)

Es el modo de carga y régimen altos, y el que más se parece a un motor
MPFI. El combustible entra durante la **admisión**, a unos 30° antes del
punto muerto superior, y tiene casi todo el ciclo para mezclarse con el
aire. El resultado es una mezcla uniforme con lambda 1, lo que permite
que el catalizador de tres vías haga su trabajo normal.

Aquí el par lo manda el **aire** (largo plazo, por la mariposa) y el
**avance de encendido** (corto plazo). La cantidad de combustible
simplemente acompaña a la masa de aire para mantener lambda 1. Además,
en cargas y regímenes altos se abren los dos conductos de admisión para
que el motor respire todo el aire que necesita.

### Modo homogéneo-pobre (lambda aproximado de 1,55)

Es un modo intermedio: el cilindro entero tiene mezcla uniforme, pero
empobrecida. La inyección, la formación de mezcla y la combustión son
las del modo homogéneo; lo que cambia es la dosificación y que el
conducto inferior de admisión se cierra para generar un torbellino
cilíndrico (tumble) que estabiliza la combustión. El consumo baja
frente a trabajar a lambda 1 con recirculación de gases, según el
curso. Como hay oxígeno de sobra, el catalizador de tres vías ya no
reduce el NOx y entra en juego el acumulador.

### Modo estratificado (lambda global entre 1,6 y 3)

Es el modo de cargas y regímenes medios, y el más sofisticado. Cambian
tres cosas a la vez:

- **Admisión.** La mariposa se abre casi por completo (se deja una
  pequeña restricción para el canister y la recirculación de gases),
  y la trampilla del múltiple cierra el conducto inferior. El aire
  acelera por el conducto superior y entra en tumble.
- **Inyección.** Se hace tarde, en el último tercio de la compresión,
  entre unos 60° y 45° antes del PMS de encendido (curso). El chorro
  apunta a una cavidad tallada en el pistón.
- **Mezcla.** Solo hay 40° a 50° de cigüeñal entre el fin de la
  inyección y la chispa. Es un margen estrecho a propósito: con menos
  tiempo la mezcla no se prepara y con más se dispersa por toda la
  cámara.

La cavidad del pistón y el tumble empujan el combustible hacia la
bujía mientras se evapora. Se forma una nube inflamable en el centro,
rodeada de aire fresco y gases recirculados. Al encender, solo arde la
nube; el gas inerte que la rodea actúa como un manto aislante.

En este modo el **par depende de la cantidad inyectada**. El aire y el
avance de encendido importan poco, y la ventana angular donde la chispa
enciende de forma fiable es muy estrecha.

## Cuadro comparativo de los tres modos

| Aspecto | Estratificado | Homogéneo-pobre | Homogéneo |
|---|---|---|---|
| Zona de operación | Carga y régimen medios | Entre estratificado y homogéneo | Carga y régimen altos |
| Lambda | Global 1,6 a 3 | Aprox. 1,55 | 1 |
| Inyección | Final de compresión (60° a 45° APMS) | Admisión (~30° APMS) | Admisión (~30° APMS) |
| Tiempo de mezcla | 40° a 50° de cigüeñal | Casi todo el ciclo | Casi todo el ciclo |
| Mezcla en el cilindro | Nube junto a la bujía | Uniforme, pobre | Uniforme, lambda 1 |
| Mariposa | Muy abierta | Abierta según par | Según el pedal |
| Trampilla del múltiple | Conducto inferior cerrado | Cerrada (tumble) | Cerrada a carga media, abierta a carga alta |
| Quién fija el par | Cantidad de combustible | Encendido y masa de aire | Encendido y masa de aire |
| Catalizador | Almacena NOx | Almacena NOx | Funciona como tres vías |
| Recirculación (EGR) | Siempre | Siempre | Hasta 4.000 rpm y carga media; no en ralentí |

## Cuándo cambia de modo la ECU

La ECU no elige el modo solo por carga y régimen. Pasa al estratificado
únicamente si se cumplen **todas** estas condiciones (del curso):

- El motor está en la zona de carga y régimen correspondiente.
- No hay fallas relevantes para las emisiones.
- El refrigerante supera los 50 °C.
- El sensor de NOx está listo para operar.
- El catalizador acumulador está entre 250 °C y 500 °C.
- El canister tiene poca carga de vapores (explicado más abajo).
- Hay suficiente vacío para el servofreno.

<figure class="diagram">
<svg viewBox="0 0 760 360" role="img" aria-labelledby="gdi-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="gdi-d2-title">Mapa esquemático de carga contra régimen con las zonas de modo estratificado, homogéneo-pobre y homogéneo</title>
<rect x="0" y="0" width="760" height="360" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
<rect x="90" y="40" width="610" height="260" fill="#f59e0b" fill-opacity="0.4"/>
<rect x="170" y="140" width="300" height="140" fill="#f97316" fill-opacity="0.45"/>
<rect x="200" y="200" width="190" height="70" fill="#dc2626" fill-opacity="0.45"/>
<line x1="90" y1="300" x2="700" y2="300" stroke="#1e293b" stroke-width="2"/>
<line x1="90" y1="300" x2="90" y2="40" stroke="#1e293b" stroke-width="2"/>
<text x="560" y="110" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Homogéneo</text>
<text x="560" y="130" text-anchor="middle" font-size="14" fill="#1e293b">λ = 1</text>
<text x="320" y="162" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Homogéneo-pobre λ ≈ 1,55</text>
<text x="295" y="230" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Estratificado</text>
<text x="295" y="250" text-anchor="middle" font-size="13" fill="#1e293b">λ 1,6 a 3</text>
<text x="395" y="340" text-anchor="middle" font-size="14" fill="#1e293b">Régimen del motor (rpm)</text>
<text x="90" y="320" text-anchor="middle" font-size="13" fill="#1e293b">bajo</text>
<text x="700" y="320" text-anchor="middle" font-size="13" fill="#1e293b">alto</text>
<text x="38" y="170" text-anchor="middle" font-size="14" fill="#1e293b" transform="rotate(-90 38 170)">Carga del motor</text>
<text x="76" y="296" text-anchor="end" font-size="13" fill="#1e293b">baja</text>
<text x="76" y="56" text-anchor="end" font-size="13" fill="#1e293b">alta</text>
</svg>
<figcaption>Mapa esquemático y ilustrativo: las fronteras reales las define el fabricante y cambian con la temperatura del catalizador y el estado del sistema. Ilustración propia, sin valores numéricos en los ejes.</figcaption>
</figure>

### Qué lo impide o lo corta

El curso describe una lista de protecciones. La regla general es que
**cualquier falla en el control de emisiones empuja el motor al modo
homogéneo**, donde el catalizador convencional se basta. Ejemplos:

| Si falla... | Qué hace el sistema |
|---|---|
| Sensor de NOx (señal ausente) | Solo modo homogéneo |
| Unidad de control del sensor de NOx | Pasa de regulación a control y bloquea estratificado y pobre |
| Sensor de temperatura de gases de escape | Calcula la temperatura, y por ser menos exacto, usa solo homogéneo |
| Potenciómetro de la trampilla del múltiple | Solo homogéneo |
| Electroválvula de la trampilla | Solo homogéneo |

Esto tiene una consecuencia práctica: **un motor GDI con una falla
sencilla de sensor puede perder el ahorro de combustible sin encender
ninguna luz evidente**. El cliente notará que gasta más y que el motor
"ya no es el mismo", y en el escáner verás que nunca entra al modo
estratificado.

### Dos restricciones menos obvias

**El canister.** En modo homogéneo los vapores de combustible del
depósito se queman junto con la mezcla uniforme. En estratificado, parte
de esos vapores acaba en la zona exterior, donde no hay chispa, y sale
sin quemar como hidrocarburos. Por eso el modo estratificado solo se
habilita si la ECU estima que el filtro de carbón activo está poco
cargado.

**El servofreno.** Con la mariposa muy abierta, el múltiple tiene poco
vacío. Si el conductor frena varias veces seguidas, el servofreno puede
quedarse sin reserva. La ECU lo vigila con un sensor de presión: cierra
un poco la mariposa para recuperar vacío y, si no basta, vuelve al modo
homogéneo.

## Gestión por par y aceleración electrónica

El MED7 gestiona el motor **por par**: reúne las solicitudes internas
(arranque, calentamiento del catalizador, ralentí, limitación de
régimen, regulación lambda) y las externas (conductor, caja
automática, control de tracción, aire acondicionado, control de
velocidad), calcula un par teórico y decide cómo producirlo.

Hay dos vías. La lenta actúa sobre el llenado de aire y la rápida sobre
el par instantáneo, sin tocar el llenado. En estratificado la rápida es
la cantidad de combustible; en los modos homogéneos, el avance de
encendido. Este enfoque exige **acelerador electrónico**, que el curso
considera condición previa de la inyección directa, porque la mariposa
debe poder abrirse independientemente del pedal.

Si quieres repasar cómo se leen los sensores involucrados, tienes la
guía de [sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/)
y las pruebas con multímetro en
[pruebas de sensores de inyección electrónica](/posts/pruebas-sensores-inyeccion-electronica-gasolina-multimetro/).

## Por qué el modo pobre necesita su propio tratamiento de gases

El problema es químico. El catalizador de tres vías reduce los NOx
usando el CO y los hidrocarburos de la mezcla como "reductores". Con
lambda 1 hay un equilibrio. Con mezcla pobre sobra oxígeno, casi no hay
reductores y los NOx pasan sin tocarse. Según el curso, con un
catalizador convencional no se alcanzan los límites legales de NOx en
modos pobres.

La solución tiene tres capas:

1. **Evitar que se formen.** La recirculación de gases (EGR, hasta un
   35 % del gas admitido según el curso) baja la temperatura de
   combustión y con ella la formación de NOx. El curso la describe como
   la razón de ser del acumulador, porque permite almacenar durante más
   tiempo. La distribución variable en el árbol de admisión suma EGR
   interna.
2. **Mantener el catalizador en su ventana.** Solo almacena NOx entre
   250 °C y 500 °C. Por encima de 850 °C pierde capacidad de forma
   permanente (curso). Por eso el sistema enfría los gases: aire
   dirigido al colector de escape y un tubo de escape de tres caudales
   antes del catalizador, que juntos bajan la temperatura entre 30 °C y
   100 °C según la velocidad.
3. **Almacenar y purgar.** El acumulador es un catalizador de tres vías
   con una capa extra de óxido de bario.

### Ciclo de almacenamiento y regeneración

- **Acumulación.** El platino oxida el NOx a dióxido de nitrógeno y este
  reacciona con el óxido de bario para formar nitrato de bario.
- **Regeneración de NOx.** Cuando el sensor detecta NOx aguas abajo por
  encima de un umbral, la ECU pasa de estratificado a un homogéneo
  ligeramente rico. El CO y los hidrocarburos reducen el nitrato y el
  rodio y el platino convierten el NOx liberado en nitrógeno. El curso
  indica hasta unos 90 segundos de almacenamiento en estratificado y
  una regeneración de unos 2 segundos.
- **Regeneración de azufre.** Es otra cosa, y más difícil.

### El problema del azufre

El azufre se almacena en el acumulador porque se parece químicamente al
NOx, pero **no se libera en la regeneración normal**. Va ocupando
puntos de retención, y la ECU lo detecta cuando el catalizador se
satura en intervalos cada vez más cortos. Entonces ejecuta una
desulfuración: modo homogéneo y retraso del encendido para subir el
catalizador por encima de 650 °C durante unos 2 minutos, y siempre desde
una velocidad mínima del vehículo (curso). En circulación a carga
alta, el motor está en homogéneo y esa temperatura se alcanza sola.

Para el taller latinoamericano esto es lo más relevante:

- El curso no menciona la calidad del combustible, pero el mecanismo
  implica algo claro: **cuanto más azufre trae la gasolina, más
  rápido se llena el catalizador y más seguido hay que desulfurar**
  (razonamiento general del sector).
- En ciudades con tráfico lento, donde el motor rara vez alcanza carga y
  temperatura altas, la desulfuración natural no ocurre.
- Un catalizador "envenenado" por azufre se manifiesta como más consumo
  (porque la ECU abandona el modo pobre), códigos de eficiencia del
  catalizador o de NOx, y a veces pérdida de potencia.
- Con mucho azufre o en tramos largos de ciudad, una carga ocasional de
  gasolina de mejor calidad y un recorrido por carretera a ritmo
  sostenido suelen ayudar. No lo trates como cura garantizada.

## Sensor de NOx y sonda lambda de banda ancha

Estos dos sensores son el sistema nervioso del modo pobre.

### Sonda lambda de banda ancha

Va antes del catalizador y mide el oxígeno residual. A diferencia de la
sonda convencional de salto, que solo distingue "rico" o "pobre"
alrededor de lambda 1, la banda ancha entrega un valor **proporcional**,
y permite medir mezclas distintas de 1. En el modo homogéneo-pobre
sostiene el valor de 1,55.

Un detalle que sorprende: **en modo estratificado la ECU calcula
lambda en vez de medirlo**, porque la banda ancha es demasiado
imprecisa en ese rango según el curso. El control se hace igual a
través de la cantidad inyectada.

### Sensor de NOx

Va justo detrás del acumulador, con su propia unidad de control cerca
del sensor para evitar que interferencias externas falseen la señal.
Mide NOx y oxígeno con dos cámaras de circonio:

1. En la primera cámara una celda de bomba extrae o introduce oxígeno
   hasta mantener una tensión de 425 mV, equivalente a lambda 1. La
   corriente de bombeo es la medida de lambda.
2. En la segunda cámara, el gas sin oxígeno llega a un electrodo que
   disocia el NOx en N₂ y O₂. La corriente de la segunda bomba, con
   450 mV regulados, es proporcional al NOx.

La ECU le saca tres usos: comprobar que el catalizador funciona,
corregir el punto lambda 1 de la sonda de banda ancha y, sobre todo,
saber **cuándo se agotó el acumulador** y si toca regenerar NOx o
azufre. Si el sensor falla, el motor queda en homogéneo.

## Inyección directa frente a inyección en el múltiple

Las diferencias de hardware son concretas. El curso señala que el
tiempo de inyección a 6.000 rpm es de unos 5 ms en directa frente a 20
ms en el múltiple. Para inyectar la misma masa en cuatro veces menos
tiempo hace falta mucha más presión: en el MED7 la presión de rampa
se regula entre 50 y 100 bar, con una bomba de alta presión movida por
el árbol de levas. Los inyectores se abren con unos 90 V y hasta 10 A, y
se mantienen con unos 30 V y 3 a 4 A (curso). Los detalles del circuito
de alta presión están en
[sistema de alta presión de inyección directa de gasolina](/posts/sistema-alta-presion-inyeccion-directa-gasolina/).

| Aspecto | GDI (inyección directa) | MPFI (inyección en el múltiple) |
|---|---|---|
| Presión de inyección | Alta: 50 a 100 bar en el MED7 (curso); mucho más en motores recientes (referencial) | Baja: unos 3 a 4 bar (referencial) |
| Consumo | Menor; en modos pobres el ahorro es mayor (curso) | Referencia base |
| Potencia y par | Mayor, por el enfriamiento de la carga y la posibilidad de más compresión (curso) | Menor a igualdad de cilindrada |
| Depósitos en válvulas de admisión | Frecuentes: el combustible no las baña (conocimiento general) | Raros: la gasolina las lava |
| Complejidad de sistemas | Alta: bomba de alta presión, sensores de NOx, trampillas, acumulador | Baja |
| Costo de reparación | Alto: inyectores y bomba de alta presión, además de limpieza de válvulas (referencial) | Moderado |
| Sensibilidad al combustible | Alta con modo pobre: azufre y NOx | Baja |
| Exigencia de diagnóstico | Escáner con datos de modo, lambda, NOx y presión de rampa | Más simple |

Los valores de costo, depósitos y presión en MPFI son comparaciones
cualitativas y referenciales, no cifras del curso.

## Aplicación práctica para el taller

### Depósitos de carbón en las válvulas de admisión

En un MPFI, la gasolina que pasa por el puerto lava las válvulas de
admisión. En un GDI nunca llega ahí. Los vapores de aceite y de gases
del cárter, que vuelven a la admisión por el respiradero del motor, se
adhieren y se carbonizan. Con el tiempo se forman capas que estrangulan
el flujo y alteran la mezcla.

Síntomas a buscar:

- Ralentí inestable en frío.
- Tirones y vacilación al acelerar.
- Pérdida de potencia y consumo creciente.
- Fallos de encendido guardados sin causa eléctrica clara.

Qué hacer:

1. Confirma con **boroscopio** antes de desmontar nada.
2. Descarta primero bujías, bobinas, inyectores y falsa admisión de aire.
3. La limpieza es mecánica o con medio abrasivo suave (por ejemplo,
   cáscara de nuez triturada, un procedimiento habitual en el sector).
   Los aditivos en el combustible no llegan a las válvulas en GDI.
4. Revisa el sistema de ventilación del cárter y respeta los
   intervalos de aceite con la especificación correcta.

### Lista de revisión de un GDI con consumo alto

1. Lee códigos y datos en vivo: ¿el motor llega a entrar a estratificado
   o pobre en la prueba de ruta?
2. Verifica temperatura de refrigerante, gases de escape y catalizador.
3. Revisa el sensor de NOx y su unidad de control: tensión de
   calefacción, conectores, cableado cercano al escape.
4. Comprueba la señal de la trampilla del múltiple y su electroválvula.
5. Evalúa el estado del canister y la válvula de purga.
6. Pregunta por el combustible: marca, origen, frecuencia de recarga en
   estaciones no habituales.
7. Si hay historial de combustible dudoso, sospecha de azufre antes
   de reemplazar el catalizador.

### Recomendaciones para la región

- **Calidad del combustible.** Si el mercado local ofrece gasolina de
  alto azufre, un motor diseñado para modo pobre es mucho más
  vulnerable. Consulta al fabricante o al importador si la versión que
  llegó a tu país tiene calibración para ese combustible.
- **Mapas de modo.** Muchas variantes de exportación llegan con el
  modo estratificado desactivado en la calibración. Si el escáner nunca
  muestra estratificado, puede ser normal, no una falla.
- **Altitud.** La menor densidad del aire modifica la masa de aire y la
  ventana de operación (observación general; consulta datos del
  fabricante).
- **Desulfuración.** No fuerces ciclos con maniobras agresivas en un
  catalizador de valor alto: la temperatura de más de 650 °C debe
  ser lograda por la propia ECU, y por encima de 850 °C el daño es
  permanente.

## Un matiz importante: el motor moderno

El MED7 es una arquitectura de principios de la era GDI, con modo
estratificado como protagonista. En la práctica actual, muchos
motores de inyección directa funcionan casi siempre en modo homogéneo
a lambda 1. Aprovechan la inyección directa por su efecto de
enfriamiento de la carga, el control fino de la inyección y la
respuesta, y evitan el acumulador de NOx. Lo que has leído sobre
modos y regeneración sirve para entender la lógica, pero **antes de
diagnosticar, confirma qué modos tiene el motor concreto** en su
manual de servicio.

## Resumen

- Inyección directa significa poder elegir cuándo inyectar. Eso crea
  tres modos: homogéneo (lambda 1), homogéneo-pobre (aprox. 1,55) y
  estratificado (global 1,6 a 3).
- En estratificado el par lo fija el combustible y la mezcla se
  concentra junto a la bujía; en los otros dos, lo fijan el aire y el
  encendido.
- La ECU solo autoriza el modo pobre si el catalizador, los sensores,
  el canister y el vacío del servofreno lo permiten; si algo falla, el
  motor vuelve al homogéneo.
- Con mezcla pobre, el catalizador de tres vías no controla el NOx, y
  por eso hay acumulador, sensor de NOx, regeneraciones periódicas y
  sonda de banda ancha.
- El azufre del combustible degrada el acumulador, y los depósitos de
  carbón en las válvulas son el defecto típico de cualquier GDI.

Para ubicar este sistema entre los demás, revisa los
[fundamentos y tipos de sistemas EFI](/posts/fundamentos-tipos-de-sistemas-efi/)
y los [componentes del sistema de combustible](/posts/componentes-funcionamiento-sistemas-combustible/).
Para el contexto de normas de emisiones en la región, lee
[normas de emisiones Tier 4 y Euro V en Latinoamérica](/posts/normas-emisiones-tier4-eurov-latam/),
y para ver cómo otro sistema de poscombustión gestiona la regeneración,
[cómo funciona el DPF](/posts/como-funciona-dpf-sustrato-catalizador/).

**Fuentes:** curso [Inyección directa Jetronic: modos, sistemas, componentes y funcionamiento](https://www.mecanicoautomotriz.org/4481-curso-inyeccion-directa-jetronic-modos-sistemas-componentes-funcionamiento) (Bosch Motronic MED7), de mecanicoautomotriz.org. Los datos numéricos atribuidos al curso corresponden a ese sistema; los marcados como referenciales o conocimiento general son orientativos.

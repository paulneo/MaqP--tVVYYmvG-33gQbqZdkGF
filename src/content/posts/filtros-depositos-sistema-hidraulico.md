---
title: "Filtros y depósitos del sistema hidráulico: funciones, tipos y limpieza ISO 4406"
published: 2026-11-09
draft: false
featured: false
description: "Cómo funcionan el depósito y los filtros hidráulicos: deflectores, respiradero, filtros de succión, presión y retorno, relación beta, código ISO 4406 y filtración tipo riñón."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "deposito-hidraulico"
  - "filtros-hidraulicos"
  - "iso-4406"
  - "contaminacion-aceite"
  - "sistema-hidraulico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistemas-hidraulicos/filtros-depositos-sistema-hidraulico
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué el depósito hidráulico tiene deflectores internos?"
    a: "El deflector (baffle) es una placa que separa la zona de retorno de la zona de succión. Obliga al aceite caliente y cargado de aire que regresa a recorrer un camino más largo antes de llegar a la bomba. Así se calma la turbulencia, las burbujas suben a la superficie, el agua condensada y las partículas pesadas se asientan en el fondo, y el aceite se enfría contra las paredes. Sin deflector, la bomba aspira aceite espumoso y aparece cavitación y ruido."
  - q: "¿Qué significa un código ISO 4406 de 18/16/13?"
    a: "Son tres números que indican la cantidad de partículas por mililitro de aceite en tres tamaños: mayores a 4, 6 y 14 micrones. Cada número es un grado de una escala logarítmica: subir un grado significa aproximadamente el doble de partículas. Por eso 18/16/13 es el doble de sucio que 17/15/12. Es un lenguaje común entre el laboratorio, el fabricante del componente y el taller."
  - q: "¿Qué es la relación beta de un filtro?"
    a: "La relación beta (βx) compara cuántas partículas de tamaño x entran al filtro contra cuántas salen, medido en un ensayo multipaso según ISO 16889. Un β10(c)=200 significa que de cada 200 partículas de 10 micrones que entran, solo 1 pasa: una eficiencia de 99,5 %. Dos filtros con la misma malla nominal pueden tener betas muy distintos, por eso el valor 'nominal' en micrones sin beta declarado no dice casi nada."
  - q: "¿Cada cuánto se cambian los filtros hidráulicos?"
    a: "Lo definen el fabricante y el indicador de restricción. Como referencia típica, en maquinaria pesada el filtro de retorno se cambia cada 500 a 1.000 horas y el respiradero cada 500 a 1.000 horas o antes en minería polvorienta. Después de una falla de bomba o de reparar un componente, se cambian de inmediato y de nuevo tras 50 a 100 horas de operación. Si el indicador de restricción llega a la zona roja, no se espera al intervalo: se cambia."
  - q: "¿Sirve filtrar aceite nuevo antes de cargarlo?"
    a: "Sí, y es una de las prácticas más rentables. El aceite nuevo de tambor o bidón puede venir con una limpieza de 19/17/14 o peor, bastante más sucia de lo que tolera una bomba de pistones moderna. Cargarlo con una unidad de filtración portátil (carro de transferencia con filtro de 3 a 10 micrones) evita introducir contaminación desde el primer día."
sources:
  - title: "Manual de hidráulica para maquinaria pesada — Ferreyros (lecciones sobre tanques hidráulicos)"
    url: "https://www.maquinariaspesadas.org/blog/586-manual-hidraulica-maquinaria-pesada-ferreyros"
  - title: "ISO 4406 — Hydraulic fluid power: fluids, method for coding the level of contamination by solid particles"
    url: "https://www.iso.org/standard/72195.html"
  - title: "ISO 16889 — Hydraulic fluid power: filters, multi-pass method for evaluating filtration performance"
    url: "https://www.iso.org/standard/71035.html"
  - title: "Parker Hannifin — Hydraulic filtration and contamination control"
    url: "https://www.parker.com/"
related:
  - fluidos-hidraulicos-propiedades-tipos-aceites
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - circuitos-hidraulicos-abiertos-cerrados-diferencias
---

El aceite hidráulico es el hilo conductor de todo el sistema, pero hay
dos componentes que deciden en qué estado llega a la bomba, a las
válvulas y a los cilindros: el **depósito** y los **filtros**. Casi
nadie les presta atención hasta que una bomba de pistones se destruye
por partículas o por aire. Y casi siempre, la causa raíz estaba en un
respiradero tapado, un filtro falsificado o un código de limpieza que
nadie midió.

En esta guía vemos qué hace realmente un depósito, cómo se ubican los
filtros en el circuito, cómo leer la relación beta y los códigos ISO
4406, y qué prácticas de taller funcionan en condiciones reales de
Latinoamérica: polvo de minería a cielo abierto, altitud y humedad.

## El depósito hidráulico: mucho más que un tanque

Un depósito hidráulico cumple cuatro funciones, no una:

1. **Almacena** el volumen de aceite que el sistema necesita, incluida
   la reserva para compensar la variación de volumen de los cilindros
   (un cilindro extendido contiene más aceite que uno retraído, por la
   diferencia de volumen del vástago).
2. **Disipa calor**: las paredes del depósito evacuan parte del calor
   que el sistema genera por pérdidas de presión.
3. **Separa el aire**: las burbujas que entran por el retorno deben
   subir a la superficie antes de que el aceite llegue a la succión.
4. **Decanta contaminantes**: agua condensada y partículas pesadas se
   asientan en el fondo, de donde se extraen por el drenaje.

Para que esas funciones ocurran, el aceite necesita **tiempo de
residencia** dentro del depósito. De ahí sale la regla práctica de
dimensionamiento.

### Regla de dimensionamiento

En circuitos industriales el depósito suele dimensionarse entre **3 y 5
veces el caudal de la bomba por minuto** (por ejemplo, una bomba de 100
L/min pediría un depósito de 300 a 500 L). En maquinaria móvil el
espacio es limitado y se aceptan relaciones menores, de **1 a 3 veces**,
compensadas con mejor refrigeración. Son referencias típicas, no un
dato de diseño: el criterio final lo da el fabricante de la máquina.

Si necesitas el volumen geométrico de un depósito o cisterna a partir
de sus medidas, puedes usar la
[calculadora de volumen de tanque](/herramientas/volumen-tanque-cisterna/).

### Anatomía de un depósito

<figure class="diagram">
<svg viewBox="0 0 800 380" role="img" aria-labelledby="fd-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="fd-d1-title">Corte de un depósito hidráulico mostrando respiradero, línea de retorno, deflector, colador de succión y drenaje</title>
<rect x="150" y="90" width="500" height="220" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
<rect x="153" y="150" width="494" height="157" fill="#f59e0b" fill-opacity="0.25"/>
<line x1="153" y1="150" x2="647" y2="150" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="395" y="150" width="10" height="150" fill="currentColor" fill-opacity="0.55" stroke="currentColor"/>
<rect x="280" y="62" width="40" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="288" y1="70" x2="312" y2="70" stroke="currentColor"/>
<line x1="288" y1="76" x2="312" y2="76" stroke="currentColor"/>
<line x1="288" y1="82" x2="312" y2="82" stroke="currentColor"/>
<path d="M240 90 V260 H300" fill="none" stroke="#f59e0b" stroke-width="6"/>
<path d="M300 250 l18 10 l-18 10 z" fill="#f59e0b"/>
<path d="M340 280 q20 -40 55 -45" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="340" cy="230" r="3" fill="currentColor"/>
<circle cx="352" cy="205" r="3" fill="currentColor"/>
<circle cx="330" cy="190" r="3" fill="currentColor"/>
<path d="M500 300 V250 H520" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="470" y="262" width="60" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="470" y1="270" x2="530" y2="270" stroke="currentColor" stroke-dasharray="3 3"/>
<line x1="470" y1="278" x2="530" y2="278" stroke="currentColor" stroke-dasharray="3 3"/>
<line x1="470" y1="286" x2="530" y2="286" stroke="currentColor" stroke-dasharray="3 3"/>
<path d="M530 277 H650 H720" fill="none" stroke="#f59e0b" stroke-width="6"/>
<path d="M705 267 l18 10 l-18 10 z" fill="#f59e0b"/>
<rect x="590" y="310" width="24" height="16" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="300" y="46" text-anchor="middle" font-size="15" fill="currentColor">Respiradero con filtro</text>
<text x="200" y="345" text-anchor="middle" font-size="15" fill="currentColor">Retorno bajo el nivel</text>
<text x="400" y="345" text-anchor="middle" font-size="15" fill="currentColor">Deflector</text>
<text x="500" y="250" text-anchor="middle" font-size="14" fill="currentColor" transform="translate(0,-20)">Colador de succión</text>
<text x="720" y="250" text-anchor="end" font-size="15" fill="currentColor">Hacia la bomba</text>
<text x="602" y="352" text-anchor="middle" font-size="15" fill="currentColor">Drenaje en el punto bajo</text>
<text x="560" y="130" text-anchor="middle" font-size="15" fill="currentColor">Nivel de aceite</text>
<text x="100" y="260" text-anchor="end" font-size="14" fill="currentColor">Aceite</text>
<text x="100" y="278" text-anchor="end" font-size="14" fill="currentColor">de retorno</text>
</svg>
<figcaption>Corte esquemático de un depósito: el aceite de retorno entra bajo el nivel y rodea el deflector antes de llegar al colador de succión, del lado opuesto. Ilustración propia, no a escala.</figcaption>
</figure>

Los elementos que conviene conocer y revisar:

- **Deflector (baffle)**: separa retorno de succión. Fuerza al aceite a
  recorrer una trayectoria más larga y tranquila.
- **Retorno por debajo del nivel**: si la línea de retorno descarga por
  encima del aceite, salpica y aerea el fluido. Muchos diseños la
  cortan en bisel y la apuntan hacia la pared.
- **Succión elevada del fondo**: la toma de la bomba se ubica a unos
  centímetros sobre el fondo para no aspirar los sedimentos.
- **Drenaje en el punto más bajo**: permite sacar agua y lodos. Suele
  ser el primer lugar donde se ve la contaminación real.
- **Mirilla o varilla de nivel**: se verifica siempre con la máquina en
  terreno plano y con los cilindros en la posición indicada por el
  fabricante.
- **Tapón de llenado y válvula de alivio**: el conjunto cierra el
  depósito y protege contra sobrepresión.

## Depósito ventilado vs. presurizado

| Característica | Ventilado | Presurizado |
|---|---|---|
| Comunicación con la atmósfera | Sí, por el respiradero con filtro | No, sellado |
| Entrada de polvo y humedad | Solo la que pase el respiradero | Mínima |
| Ayuda a la succión de la bomba | No | Sí, la presión interna empuja el aceite |
| Complejidad | Baja | Mayor: válvula de alivio y vacío |
| Uso típico | Maquinaria general, industria | Sistemas de mucha demanda de succión, ambientes muy sucios |

El **respiradero** es el punto débil del depósito ventilado. Cuando el
aceite se calienta y se expande, el aire sale; al enfriarse, entra aire
nuevo con polvo y humedad. Si el respiradero es un simple tapón con
malla, todo ese polvo pasa. Un respiradero con filtro de 3 micrones o
con desecante es una de las mejoras más baratas que puedes hacer.

**Contexto latinoamericano**: en minería a cielo abierto y en
canteras, el respiradero estándar se satura en pocas semanas. Y en la
altitud (Andes, altiplano) la menor presión atmosférica reduce el
margen de succión de la bomba: un respiradero obstruido provoca vacío
en el depósito y cavitación más fácilmente que a nivel del mar.

## Dónde se ubican los filtros

No existe un filtro "universal". Cada ubicación tiene un propósito y
limitaciones distintas.

<figure class="diagram">
<svg viewBox="0 0 800 330" role="img" aria-labelledby="fd-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="fd-d2-title">Mapa de ubicaciones de filtros en un circuito hidráulico: succión, presión, retorno, piloto y circuito riñón</title>
<rect x="30" y="120" width="120" height="110" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="90" y="180" text-anchor="middle" font-size="16" fill="currentColor">Depósito</text>
<circle cx="300" cy="175" r="32" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="300" y="180" text-anchor="middle" font-size="16" fill="currentColor">Bomba</text>
<rect x="540" y="130" width="120" height="90" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="600" y="180" text-anchor="middle" font-size="16" fill="currentColor">Válvulas y</text>
<text x="600" y="200" text-anchor="middle" font-size="16" fill="currentColor">actuadores</text>
<path d="M150 175 H268" fill="none" stroke="#f59e0b" stroke-width="5"/>
<path d="M332 175 H540" fill="none" stroke="#f59e0b" stroke-width="5"/>
<path d="M600 220 V280 H90 V230" fill="none" stroke="#f59e0b" stroke-width="5"/>
<rect x="185" y="160" width="36" height="30" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<rect x="400" y="160" width="36" height="30" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<rect x="320" y="265" width="36" height="30" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<text x="203" y="145" text-anchor="middle" font-size="15" fill="currentColor">1 Succión</text>
<text x="418" y="145" text-anchor="middle" font-size="15" fill="currentColor">2 Presión</text>
<text x="338" y="255" text-anchor="middle" font-size="15" fill="currentColor">3 Retorno</text>
<path d="M300 207 V235 H700 V80 H480 V175" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="560" y="72" text-anchor="middle" font-size="14" fill="currentColor">4 Piloto (línea de mando, dibujo simplificado)</text>
<path d="M55 120 V50 M125 120 V50" fill="none" stroke="currentColor" stroke-width="1.5"/>
<rect x="40" y="20" width="100" height="30" rx="15" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="90" y="40" text-anchor="middle" font-size="14" fill="currentColor">5 Riñón</text>
</svg>
<figcaption>Ubicaciones típicas de filtración: (1) succión, (2) presión, (3) retorno, (4) piloto y (5) circuito riñón independiente. Esquema simplificado, ilustración propia.</figcaption>
</figure>

| Ubicación | Qué protege | Malla típica | Ventajas | Limitaciones |
|---|---|---|---|---|
| **Succión** (colador) | La bomba, de partículas grandes | 60 a 150 µm | Barato, protege de objetos | Restringe la succión; si se obstruye cavita la bomba |
| **Presión** | Válvulas proporcionales y servoválvulas | 3 a 25 µm | Filtración fina justo antes de lo sensible | Carcasa de alta presión, más cara |
| **Retorno** | Todo el sistema: captura lo que generó el desgaste | 5 a 25 µm | Barato, de baja presión, filtra todo el caudal de retorno | Actúa después del daño, no antes |
| **Piloto** | Válvulas de control, orificios muy pequeños | 3 a 10 µm | Protege los orificios más sensibles | Caudal bajo; lo olvidan en el mantenimiento |
| **Riñón (off-line)** | Todo el fluido del depósito | 3 a 10 µm | No depende del régimen de trabajo, bomba propia | Requiere circuito extra |

**Por qué el filtro de retorno es el más común**: la mayoría del
desgaste genera partículas que viajan hacia el retorno. Un filtro
ahí las captura antes de que regresen al depósito y vuelvan a circular.
Pero atención: no sustituye a la protección de la bomba. Por eso se
combinan ubicaciones.

**El filtro de succión es un arma de doble filo.** Un colador demasiado
fino o sucio estrangula la entrada de la bomba y provoca cavitación,
que daña a la bomba más que lo que protegía. En sistemas modernos se
usa solo un colador grueso o ninguno, y se compensa con filtración
fina en otro punto.

## Relación beta y ISO 16889

Decir "filtro de 10 micrones" es poco preciso. ¿Qué porcentaje de las
partículas de 10 µm retiene? La **relación beta** lo cuantifica:

**β(x) = partículas de tamaño ≥ x µm antes del filtro ÷ partículas de tamaño ≥ x µm después del filtro**

La eficiencia equivale a (β − 1) / β:

| Relación β | Eficiencia | Lectura práctica |
|---|---|---|
| β = 2 | 50 % | Filtro casi decorativo |
| β = 10 | 90 % | Aceptable para sistemas sencillos |
| β = 75 | 98,7 % | Referencia habitual de filtro "absoluto" |
| β = 200 | 99,5 % | Filtración de alta eficiencia |
| β = 1.000 | 99,9 % | Sistemas con servoválvulas |

La norma **ISO 16889** define el ensayo multipaso con el que se obtiene
esa curva. Si un filtro no declara β ni cita la norma, no tienes forma
de saber qué filtra. Es la primera señal de alerta con los filtros
genéricos o falsificados, un problema frecuente en distribuidores
informales de la región: la caja se ve igual, el pliego de papel no.

## Códigos de limpieza ISO 4406

La norma **ISO 4406** convierte un conteo de partículas en tres
números separados por barras. Se leen como los grados de limpieza para
partículas de **4 µm, 6 µm y 14 µm** por mililitro (en el método
actual, calibrado con polvo de prueba ISO MTD).

Cada grado duplica aproximadamente el número de partículas del anterior.
Es decir, 19/17/14 es **cuatro veces más sucio** que 17/15/12.

Objetivos típicos de limpieza por tipo de componente (valores de
referencia habituales; el manual del fabricante manda):

| Tipo de sistema o componente | Código objetivo típico |
|---|---|
| Servoválvulas, sistemas de alta precisión | 15/13/10 o mejor |
| Bombas y motores de pistones de alta presión | 17/15/12 a 18/16/13 |
| Sistemas con válvulas proporcionales | 17/15/12 a 18/16/13 |
| Bombas de engranajes, baja presión | 19/17/14 a 20/18/15 |
| Equipo móvil general | 19/17/14 a 21/19/16 |

Dos datos útiles para el taller:

- Un aceite **nuevo** de bidón o tambor puede llegar con 19/17/14 o peor.
  Que sea "nuevo" no significa limpio.
- Subir la limpieza de un sistema de, por ejemplo, 21/19/16 a 18/16/13
  puede alargar la vida de la bomba y de las válvulas de forma
  considerable. En la práctica, es más barato filtrar que reparar.

Para entender qué contaminantes hay y qué análisis pedir, revisa
[intervalos de cambio y contaminación del aceite](/posts/intervalos-cambio-contaminacion-aceite/)
y [análisis SOS del aceite](/posts/analisis-sos-aceite-lubricante/).

## Válvula bypass e indicador de restricción

Todo filtro de presión o retorno trae una **válvula bypass** en la
cabeza o en el elemento. Cuando el elemento se tapa y la diferencia de
presión sube (típicamente entre 2 y 3,5 bar según el diseño), el bypass
se abre para que el sistema no se quede sin aceite.

Esto protege la bomba, pero tiene un costo escondido: **con el bypass
abierto, el aceite pasa sin filtrar**. Dos consecuencias:

- Con aceite frío (arranque, noche en altura) el aceite es espeso, la
  presión diferencial sube y el bypass se abre aunque el filtro esté
  limpio. Por eso se calienta el sistema antes de cargarlo.
- Un filtro que lleva horas con el bypass abierto equivale a no tener
  filtro.

El **indicador de restricción** (visual o eléctrico) avisa antes de
llegar a ese punto. Una lectura en rojo con aceite caliente es
orden de cambio inmediato.

## Intervalos de cambio y buenas prácticas

Los intervalos exactos los fija el fabricante de cada máquina. Como
orden de magnitud para maquinaria pesada:

| Elemento | Intervalo típico | Se adelanta si... |
|---|---|---|
| Filtro de retorno | 500 a 1.000 h | Indicador en rojo, aceite con mucho metal |
| Filtro de piloto | 1.000 a 2.000 h | Respuesta lenta de mandos |
| Respiradero | 500 a 1.000 h | Polvo, minería, altitud |
| Colador de succión | Inspección en cada cambio de aceite | Ruido de cavitación |
| Aceite hidráulico | 2.000 a 4.000 h (mineral) | Resultados del análisis |

Prácticas que marcan la diferencia:

1. **Cambiar el elemento con la máquina caliente y detenida**, no con
   el motor en marcha, y limpiar la zona antes de abrir la carcasa.
2. **Llenar el filtro nuevo con aceite limpio** antes de instalarlo,
   para no arrancar la bomba con la carcasa vacía.
3. **Cortar el filtro usado** y revisar el pliegue: virutas metálicas
   brillantes indican desgaste de bomba o motor.
4. **Cambiar filtros después de cada reparación** y de nuevo entre 50 y
   100 horas, porque el sistema libera residuos del trabajo.
5. **No reutilizar ni limpiar** elementos de microfibra: las
   partículas quedan incrustadas.
6. **Comprar filtros con β e ISO 16889 declarados**, de proveedor
   verificable. Los falsificados abundan en importadores informales.

## Filtración tipo riñón (off-line)

Un **circuito riñón** es una pequeña bomba independiente con su propio
filtro fino que toma aceite del depósito y lo devuelve limpio al mismo
depósito, sin pasar por el circuito principal. Trabaja de forma
continua o por turnos, incluso con la máquina parada.

Por qué es útil:

- Filtra a un caudal bajo pero constante, con un elemento muy fino (3 a
  10 µm) que sería inviable como filtro principal.
- No depende de la presión de trabajo ni de los ciclos de la máquina.
- Elimina agua con elementos especiales de absorción.
- Es ideal para flotas en minería, plantas fijas y sistemas críticos.

En campo suele usarse un **carro de filtración portátil**: se conecta
al depósito unas horas, se mide el código ISO antes y después, y se
documenta la mejora. También sirve para cargar aceite nuevo limpio.

## Resumen

El depósito y los filtros no son accesorios: son los componentes que
mantienen la limpieza que la bomba y las válvulas necesitan. El
depósito da **tiempo y espacio** para que el aire salga y las
partículas se asienten; los filtros retiran lo que genera el propio
desgaste. Con respiradero adecuado, filtros con **beta declarado**,
control del **código ISO 4406** y, cuando el trabajo lo justifica, un
circuito riñón, se alarga la vida de bombas de miles de dólares con
una inversión pequeña.

Para seguir profundizando en el circuito: [fluidos
hidráulicos](/posts/fluidos-hidraulicos-propiedades-tipos-aceites/),
[bombas hidráulicas](/posts/bombas-hidraulicas-tipos-engranajes-paletas-pistones/)
y [circuitos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/).
Para la parte práctica en excavadoras, lee también [filtros hidráulicos
en excavadoras](/posts/filtros-hidraulicos-excavadora-tipos-cambio/) y
[mantenimiento del sistema hidráulico paso a
paso](/posts/mantenimiento-sistema-hidraulico-excavadora-paso-a-paso/).
Y para el diagnóstico de fallas: [fallas comunes y
diagnóstico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/).

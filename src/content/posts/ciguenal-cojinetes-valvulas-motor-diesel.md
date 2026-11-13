---
title: "Cigüeñal, cojinetes y válvulas del motor diésel: función, fallas y revisión"
published: 2026-11-15
draft: false
featured: false
description: "Cómo trabajan el cigüeñal, las bielas, los cojinetes, el amortiguador torsional, las válvulas y el tren de engranajes en un motor diésel pesado, cómo fallan y qué revisar."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "ciguenal"
  - "cojinetes-de-biela"
  - "amortiguador-torsional"
  - "luz-de-valvulas"
  - "motor-diesel"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/motores-diesel/ciguenal-cojinetes-valvulas-motor-diesel
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué se funden los cojinetes de biela o de bancada?"
    a: "La causa más frecuente es la pérdida de la película de aceite entre el cojinete y el muñón: nivel bajo, presión baja, aceite diluido con combustible o contaminado con partículas, o un conducto obstruido. Sin película, el metal toca metal, el cojinete se calienta, la capa superficial blanda se arrastra o se desprende y, en el peor caso, el casquillo gira dentro de su alojamiento (spin) y daña el muñón. Por eso una luz de aceite encendida o un golpeteo inusual obligan a detener el motor, no a terminar el turno."
  - q: "¿Para qué sirve el amortiguador torsional y qué pasa si falla?"
    a: "Cada combustión golpea el cigüeñal y lo hace torcerse y recuperarse miles de veces por minuto. Esa vibración torsional, si no se controla, puede fatigar y fracturar un cigüeñal largo, según describe el manual fuente. El amortiguador, con su masa unida por un elemento de hule, absorbe esa oscilación. Si el hule se agrieta, se despega o la polea se desplaza, el motor pierde esa protección y el riesgo es la rotura del cigüeñal, una reparación que normalmente equivale a un motor fuera de servicio."
  - q: "¿Qué es la luz de válvulas y por qué hay que ajustarla?"
    a: "Es la pequeña holgura entre el balancín y el vástago de la válvula cuando la leva no está empujando. Se deja para que la dilatación térmica no impida que la válvula asiente por completo. Con el desgaste normal esa holgura cambia: si es demasiado grande, la válvula abre tarde, cierra temprano y el motor hace ruido y respira peor; si es demasiado pequeña, la válvula no cierra del todo y se quema, con pérdida de compresión. El valor y la secuencia de ajuste son los del manual del fabricante."
  - q: "¿Para qué sirven las marcas de alineación del tren de engranajes?"
    a: "Los engranajes del cigüeñal, del árbol de levas, de la bomba de inyección y de la bomba de aceite deben quedar en una posición relativa exacta para que válvulas e inyección trabajen en el momento correcto. Las marcas estampadas permiten reensamblar con esa referencia. El manual fuente advierte que una marca mal alineada reduce el rendimiento y acorta la vida del motor; en algunos diseños un error grave puede además provocar contacto entre válvulas y pistones."
  - q: "¿Para qué sirve el volante del motor?"
    a: "El cigüeñal recibe un impulso fuerte solo en la carrera de combustión; en admisión, compresión y escape tendería a frenarse. El volante, una masa de hierro fundido montada en el extremo trasero, almacena energía y la devuelve en esos tiempos, de modo que el giro sea uniforme. Su periferia lleva marcas de sincronización y el aro dentado para el arranque, que se monta por contracción."
sources:
  - title: "Manual de mantención de motores diésel de maquinaria pesada (capítulos IV y V, cigüeñal y válvulas)"
    url: "https://www.maquinariaspesadas.org/blog/1292-manual-mantencion-motores-diesel-maquinaria-pesada"
related:
  - guia-mantenimiento-afinamiento-motores-diesel
  - sistemas-lubricacion
  - motor-d7e-bloque-culata-pistones
---

El bloque, la culata y los pistones se llevan la atención cuando se
habla de un motor diésel, pero la vida útil del motor se decide en
otro lugar: en el **tren de potencia interno**, es decir, el cigüeñal,
las bielas y los cojinetes que convierten el golpe de la combustión en
giro, y en el **tren de válvulas**, que decide cuándo respira el motor.
Son piezas que trabajan con holguras de décimas de milímetro, rodeadas
de una película de aceite de pocas micras. Cuando algo falla ahí, casi
nunca es una sorpresa: hubo señales de aceite, de ruido o de ajuste
que nadie leyó a tiempo.

Esta guía recorre la función de cada componente, explica **por qué**
está diseñado como está, cómo falla en campo y qué puntos conviene
revisar. Se basa en los capítulos de cigüeñal y válvulas de un manual
de mantención de motores diésel de maquinaria pesada (ver
[Fuentes](#fuentes)) y lo complementa con criterio de taller. Cuando un
dato no viene del manual, se indica como referencial.

## Del pistón al volante: cómo viaja la fuerza

La presión de combustión empuja el pistón hacia abajo. La **biela**
transmite ese empuje al **muñón de biela** del cigüeñal, que está
desfasado respecto al eje de giro; esa excentricidad es lo que convierte
el movimiento lineal en rotación. El cigüeñal se apoya en el bloque
mediante los **muñones de bancada**, y todo el conjunto gira sobre
películas de aceite, no sobre metal.

<figure class="diagram">
<svg viewBox="0 0 760 420" role="img" aria-label="Esquema simplificado de pistón, biela, cigüeñal y cojinetes con sus nombres" style="width:100%;height:auto;font-family:inherit">
<title>Pistón, biela, cigüeñal y cojinetes</title>
<defs>
<marker id="cc-a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker>
</defs>
<rect x="0" y="0" width="760" height="420" rx="12" fill="#f1f5f9"/>
<rect x="310" y="50" width="100" height="70" rx="6" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<line x1="310" y1="64" x2="410" y2="64" stroke="#334155" stroke-width="2"/>
<line x1="310" y1="74" x2="410" y2="74" stroke="#334155" stroke-width="2"/>
<text x="430" y="90" font-size="14" fill="#1e293b">Pistón</text>
<circle cx="360" cy="150" r="9" fill="#e2e8f0" stroke="#b45309" stroke-width="3"/>
<text x="340" y="154" text-anchor="end" font-size="14" fill="#1e293b">Buje del pie de biela</text>
<rect x="348" y="159" width="24" height="80" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="430" y="205" font-size="14" fill="#1e293b">Biela (sección en I)</text>
<circle cx="360" cy="275" r="38" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<circle cx="360" cy="275" r="30" fill="none" stroke="#b45309" stroke-width="5"/>
<circle cx="360" cy="275" r="22" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<text x="312" y="262" text-anchor="end" font-size="14" fill="#1e293b">Cojinete de biela</text>
<text x="312" y="302" text-anchor="end" font-size="14" fill="#1e293b">Muñón de biela (codo)</text>
<text x="360" y="338" text-anchor="middle" font-size="14" fill="#1e293b">Tapa de biela</text>
<rect x="398" y="255" width="162" height="40" rx="8" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<text x="455" y="250" text-anchor="middle" font-size="14" fill="#1e293b">Brazo del cigüeñal</text>
<line x1="560" y1="275" x2="380" y2="275" stroke="#b45309" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cc-a1)"/>
<text x="455" y="320" text-anchor="middle" font-size="14" fill="#1e293b">Conducto de aceite</text>
<circle cx="560" cy="275" r="48" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<circle cx="560" cy="275" r="40" fill="none" stroke="#b45309" stroke-width="5"/>
<circle cx="560" cy="275" r="32" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<text x="560" y="352" text-anchor="middle" font-size="14" fill="#1e293b">Cojinete de bancada</text>
<rect x="620" y="245" width="90" height="60" rx="10" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<text x="665" y="235" text-anchor="middle" font-size="14" fill="#1e293b">Contrapeso</text>
<text x="380" y="398" text-anchor="middle" font-size="13" fill="#334155">El aceite entra por la bancada, cruza el cigüeñal y alimenta el cojinete de biela.</text>
</svg>
<figcaption>Vista lateral muy simplificada del conjunto pistón, biela y cigüeñal. Los anillos naranjas son los casquillos de cojinete; la flecha punteada marca el recorrido del aceite. Ilustración propia, no a escala.</figcaption>
</figure>

Observa el conducto de aceite que cruza el cigüeñal: el aceite llega
por la galería del bloque, pasa por los cojinetes de bancada, sube por
conductos internos del cigüeñal y de ahí alimenta los cojinetes de
biela, las camisas y el enfriamiento del pistón. **Si falla la
bancada, falla también la biela**: son una sola cadena de lubricación.
Para profundizar en esa cadena, lee [sistemas de lubricación en
maquinaria pesada](/posts/sistemas-lubricacion/).

## El cigüeñal: resistencia, equilibrio y radios

El manual describe cuatro zonas en el cigüeñal: **muñones** (los apoyos
principales), **codos** o muñones de biela, **brazos** y
**contrapesos**. Cada decisión de diseño responde a un modo de falla
concreto:

| Característica | Qué hace | Falla que previene |
|---|---|---|
| Acero forjado (al carbono o aleado) y mecanizado | Alta resistencia y rigidez | Rotura por carga repetida |
| Endurecimiento superficial por inducción de muñones y codos, y pulido | Superficie dura y lisa para el deslizamiento | Desgaste prematuro y rayado |
| Contrapesos | Equilibrio estático y dinámico | Vibración y cargas extra sobre los apoyos |
| Filete liso de radio "R" entre muñón y brazo | Distribuye la tensión | Grietas por concentración de esfuerzos |
| Codos huecos (según el manual) | Menos peso con buena rigidez | Inercia innecesaria |

El punto más fino es el **filete**. La unión entre muñón y brazo es el
lugar donde se concentran los esfuerzos, y una grieta de fatiga casi
siempre nace ahí. Por eso, cuando se rectifica un cigüeñal, el radio de
ese filete debe respetarse: un rectificado que lo deje con arista viva
o con un radio menor al original crea justo el punto débil que el
diseño quería evitar.

**Qué revisar en el cigüeñal**

- Rayas, brillos o decoloración azulada en muñones: indican lubricación
  deficiente o sobrecalentamiento.
- Ovalización y conicidad de los muñones, medidas con micrómetro en
  varios puntos; los límites son los del manual del fabricante.
- Estado de los filetes y de los orificios de lubricación (sin
  rebabas ni obstrucciones).
- Juego axial (empuje) del cigüeñal, también según especificación.
- Alineación: un cigüeñal torcido por un golpe o por una falla anterior
  destruye cojinetes nuevos en pocas horas.

Para ver un ejemplo de montaje real, consulta el artículo sobre el
[cigüeñal y la caja del volante de los Caterpillar 3116 y
3126](/posts/caterpillar-instalacion-ciguenal/).

## Bielas: ligeras, pero fuertes

La biela une el pistón (por el pasador, en el **extremo pequeño**) con
el cigüeñal (en el **extremo grande**, que es un cojinete partido con
tapa). Debe resistir compresión, tracción y torsión. El manual indica
que se forja en acero, con **sección en forma de "I"** para reducir
peso: la "I" concentra el material en las alas, que son las que
soportan la flexión, y retira el que casi no trabaja.

Dos detalles prácticos que se olvidan:

1. **La tapa es una pieza apareada con su biela.** Se marca para que
   vuelva a su sitio y en su orientación original. Intercambiar tapas
   deforma el alojamiento circular del cojinete y lo deja ovalado.
2. **Los pernos de biela son críticos.** El torque y el método de
   apriete (incluido, en muchos motores, un apriete por ángulo) son los
   del manual del fabricante, y algunos pernos son de un solo uso.

En el extremo pequeño no hay un casquillo de tres capas sino un **buje
cilíndrico de bronce** (o bronce fosforado) montado sobre un respaldo de
acero, según el manual. Es una pieza barata que se revisa cada vez que
se desarma la biela: si el pasador del pistón tiene juego excesivo en
el buje, aparece un golpeteo seco con el motor caliente.

## Cojinetes: la capa que se sacrifica por el muñón

Los cojinetes de bancada y de biela son **casquillos partidos** (dos
mitades) que se instalan entre el muñón y su alojamiento. No son un
simple trozo de metal blando. Según el manual, su construcción típica
es de varias capas: un **respaldo de acero** que da rigidez, una capa
intermedia de aleación de cobre y plomo (el manual menciona el
"kelmet") y una **sobrecapa** de aleación de plomo y estaño o indio,
blanda y resistente a la corrosión.

¿Por qué una capa blanda? Porque está pensada para **sacrificarse**:
admite partículas pequeñas incrustándose en ella y se adapta a
pequeñas imperfecciones, protegiendo al muñón, que es la pieza cara. Un
cojinete se cambia; un cigüeñal se rectifica o se descarta.

### Detalles de diseño que explican fallas

El manual describe tres particularidades que parecen detalles pero
tienen consecuencias directas en el taller:

- **Espesor desigual.** Los casquillos son algo más gruesos en la
  dirección vertical que en la horizontal, porque la carga principal es
  vertical. Con ello se evita que la luz crezca en la zona de carga y
  se reduce el golpeteo; el mayor diámetro horizontal además favorece
  el paso de aceite.
- **Dilatación (spread).** El diámetro exterior del casquillo es
  ligeramente mayor que el del alojamiento. Al instalarlo, el casquillo
  queda **presionado** contra su caja, lo que mejora el contacto y
  reduce la fatiga por carga repetida. Esa interferencia es la que
  mantiene al casquillo quieto.
- **Subtamaño.** El manual indica que el diámetro interior del
  casquillo suele ser unos 0,25 mm (0,0098 pulg.) menor, y que esto se
  conoce como subtamaño del cojinete. Es una referencia del manual
  fuente; el valor real de cada motor y las medidas de rectificado
  (estándar y submedidas) las fija el fabricante.

### Cómo fallan los cojinetes

La falla de un cojinete rara vez es del cojinete: es **la consecuencia
de otra cosa**. Esta tabla relaciona lo que se ve con la causa probable.
Es criterio general de taller, no datos del manual.

| Lo que se observa | Causa probable | Qué corregir |
|---|---|---|
| Superficie rayada, surcos finos | Partículas en el aceite (polvo, virutas, filtro en bypass) | Filtración, respiradero, limpieza al armar |
| Metal blando arrastrado o "manchado", zonas brillantes | Película de aceite insuficiente: nivel bajo, presión baja, aceite diluido | Nivel, bomba de aceite, fugas, dilución por combustible |
| Capa superficial desprendida en escamas | Fatiga por sobrecarga o sobrecalentamiento | Carga, enfriamiento del aceite, periodo de calentamiento |
| Desgaste en un borde del casquillo | Muñón cónico o cigüeñal desalineado | Medir y rectificar, revisar bancadas |
| Marcas en el respaldo de acero, casquillo girado (spin) | Falta de interferencia o lubricación perdida y adherencia | Reemplazar casquillos y revisar el muñón y el alojamiento |
| Casquillo con decoloración azul o violeta | Sobrecalentamiento extremo por falta de aceite | Corregir la causa antes de armar |

La secuencia típica de una falla por pérdida de lubricación es:
1) cae la presión o el nivel; 2) la película se rompe y la sobrecapa
se arrastra; 3) el calor sube, el casquillo se adhiere al muñón y
puede girar en su alojamiento; 4) el muñón se raya o se funde y el
cigüeñal queda inservible; 5) en bielas, el último paso puede ser la
biela rota atravesando el bloque. Cada paso empeora el siguiente, por
eso **detener el motor al primer síntoma** cuesta mucho menos que
seguir.

**Ruido diagnóstico:** un golpeteo grave que aumenta con la carga y
desaparece al aflojar el acelerador apunta a un cojinete de biela o
de bancada con luz excesiva. Un análisis de aceite con cobre, plomo y
estaño altos (ver [análisis SOS del aceite](/posts/analisis-sos-aceite-lubricante/))
suele delatar el desgaste de cojinetes **semanas antes** del ruido.

## El amortiguador de vibraciones torsionales

Cada carrera de combustión retuerce el cigüeñal y este se recupera; a
régimen alto, esa oscilación se repite a gran velocidad. El manual
advierte que, en un cigüeñal largo, esa **vibración torsional** puede
causar fracturas por fatiga, y que por eso se usan amortiguadores
torsionales o se diseña el cigüeñal con una rigidez torsional muy alta.

El principio, tal como lo describe el manual: el amortiguador va unido
a la polea mediante una montura de **hule**. Cuando el cigüeñal vibra,
el hule se deforma y la masa exterior sigue girando a velocidad casi
constante, de manera que absorbe y reduce la oscilación. Piensa en un
columpio al que alguien frena el vaivén con una mano: no elimina la
fuerza, la disipa.

Existen también diseños de amortiguador viscoso (con fluido), que no
vienen en el manual fuente; en cualquier caso el objetivo es el mismo.

**Por qué importa tanto en el taller**

- Es un componente **de desgaste por envejecimiento**: el hule se
  endurece, se agrieta o se despega con calor y aceite, sin dar
  síntomas claros.
- Su falla es silenciosa y su consecuencia es cara: un cigüeñal
  fracturado por fatiga.
- Se revisa visualmente en cada servicio mayor: grietas o
  abultamientos en el hule, desplazamiento de las marcas de
  referencia entre masa y cubo, holgura o golpeteo de la polea,
  fugas de fluido en los modelos viscosos.
- Si el motor ha sufrido una falla de cojinetes o una sobrevelocidad,
  conviene sustituirlo aunque se vea bien: nadie puede garantizar su
  estado interno.

## El tren de válvulas: cuándo respira el motor

En un motor de cuatro tiempos, cada válvula abre y cierra una vez por
cada dos vueltas del cigüeñal. El movimiento viene del **árbol de
levas**, que empuja a los **balancines** (brazos oscilantes) para abrir
las válvulas. El manual distingue dos arquitecturas:

- **OHV** (válvulas en cabeza): el árbol de levas va en el bloque y el
  movimiento llega por **impulsores** (taqués) y **varillas de empuje**
  hasta el balancín.
- **OHC** (árbol de levas en cabeza): la leva está sobre la culata y
  actúa casi directamente sobre el balancín o la válvula.

<figure class="diagram">
<svg viewBox="0 0 760 340" role="img" aria-label="Cadena de transmisión: tren de engranajes de sincronización y tren de válvulas desde el árbol de levas hasta la válvula" style="width:100%;height:auto;font-family:inherit">
<title>Del cigüeñal a la válvula</title>
<defs>
<marker id="cc-a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker>
</defs>
<rect x="0" y="0" width="760" height="340" rx="12" fill="#f1f5f9"/>
<text x="30" y="32" font-size="14" font-weight="bold" fill="#1e293b">Tren de sincronización</text>
<rect x="30" y="50" width="150" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="105" y="74" text-anchor="middle" font-size="13" fill="#1e293b">Engranaje del</text>
<text x="105" y="92" text-anchor="middle" font-size="13" fill="#1e293b">cigüeñal</text>
<rect x="215" y="50" width="150" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="290" y="74" text-anchor="middle" font-size="13" fill="#1e293b">Piñón de</text>
<text x="290" y="92" text-anchor="middle" font-size="13" fill="#1e293b">enlace</text>
<rect x="400" y="50" width="150" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="475" y="74" text-anchor="middle" font-size="13" fill="#1e293b">Engranaje del</text>
<text x="475" y="92" text-anchor="middle" font-size="13" fill="#1e293b">árbol de levas</text>
<rect x="585" y="50" width="145" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="657" y="74" text-anchor="middle" font-size="13" fill="#1e293b">Engranaje de la</text>
<text x="657" y="92" text-anchor="middle" font-size="13" fill="#1e293b">bomba inyectora</text>
<line x1="180" y1="78" x2="213" y2="78" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<line x1="365" y1="78" x2="398" y2="78" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<line x1="550" y1="78" x2="583" y2="78" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<path d="M475 106 V128 H82 V168" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<text x="740" y="150" text-anchor="end" font-size="14" font-weight="bold" fill="#1e293b">Tren de válvulas (tipo OHV)</text>
<rect x="20" y="170" width="124" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="82" y="194" text-anchor="middle" font-size="13" fill="#1e293b">Árbol de</text>
<text x="82" y="212" text-anchor="middle" font-size="13" fill="#1e293b">levas</text>
<rect x="169" y="170" width="124" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="231" y="194" text-anchor="middle" font-size="13" fill="#1e293b">Impulsor</text>
<text x="231" y="212" text-anchor="middle" font-size="13" fill="#1e293b">(taqué)</text>
<rect x="318" y="170" width="124" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="380" y="194" text-anchor="middle" font-size="13" fill="#1e293b">Varilla de</text>
<text x="380" y="212" text-anchor="middle" font-size="13" fill="#1e293b">empuje</text>
<rect x="467" y="170" width="124" height="56" rx="8" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="529" y="194" text-anchor="middle" font-size="13" fill="#1e293b">Balancín</text>
<text x="529" y="212" text-anchor="middle" font-size="13" fill="#1e293b">(luz aquí)</text>
<rect x="616" y="170" width="124" height="56" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="678" y="194" text-anchor="middle" font-size="13" fill="#1e293b">Válvula y</text>
<text x="678" y="212" text-anchor="middle" font-size="13" fill="#1e293b">resorte</text>
<line x1="144" y1="198" x2="167" y2="198" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<line x1="293" y1="198" x2="316" y2="198" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<line x1="442" y1="198" x2="465" y2="198" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<line x1="591" y1="198" x2="614" y2="198" stroke="#475569" stroke-width="2" marker-end="url(#cc-a2)"/>
<text x="380" y="268" text-anchor="middle" font-size="13" fill="#334155">La luz de válvula es la holgura entre el balancín y el vástago de la válvula.</text>
<text x="380" y="290" text-anchor="middle" font-size="13" fill="#334155">Si el engranaje del árbol de levas queda mal alineado, todo lo demás llega fuera de tiempo.</text>
</svg>
<figcaption>Cadena de transmisión desde el cigüeñal hasta la válvula en un motor de válvulas en cabeza (OHV). Ilustración propia, esquemática.</figcaption>
</figure>

### Piezas del tren de válvulas y su razón de ser

| Pieza | Material y tratamiento (según el manual) | Por qué importa |
|---|---|---|
| Árbol de levas | Acero forjado o acero especial fundido; leva y muñones endurecidos por inducción | La leva roza a diario con el impulsor: sin dureza superficial se desgasta y cambia el perfil de apertura |
| Balancines | Acero al carbono forjado, caras de contacto endurecidas | Son el punto donde se mide y ajusta la luz |
| Impulsores | Acero especial resistente a compresión y desgaste | Soportan el roce directo con la leva |
| Válvula de admisión | Acero martensítico (silicio, cromo) | Resiste corrosión, transfiere bien el calor |
| Válvula de escape | Acero con cromo y níquel; cabeza y vástago soldados; cara y vástago con recubrimiento de estelita | Soporta gases a temperatura mucho más alta |
| Resortes | Acero cromo-vanadio o cromo-silicio, resistente al calor | Cierran la válvula a tiempo y resisten la fatiga |

La válvula de escape es la más castigada: trabaja casi siempre al rojo
y recibe los gases calientes en cada ciclo. Por eso su cabeza se fabrica
con otro material que el vástago y se refuerza con un recubrimiento
duro en la cara de asiento. Es también la que antes muestra signos de
quemado si la luz se pierde.

### Los resortes: el problema de la oscilación

El manual dedica una explicación valiosa al **resorte de válvula**: si
se comprime bruscamente en un extremo, la onda de compresión viaja por
las espiras, rebota en el otro extremo y vuelve. Si el tiempo de ida y
vuelta de esa onda coincide con el ritmo con que la leva abre y cierra
la válvula, aparece **resonancia**: el resorte oscila, la válvula
"flota" (no sigue a la leva) y puede dañarse. Se agrava a revoluciones
altas.

Las soluciones de diseño que menciona el manual son directas:

- **Resortes dobles**, uno dentro del otro, normalmente arrollados en
  **sentidos opuestos** para que no se monten entre sí y den
  estabilidad.
- **Paso irregular** (espiras con separación distinta), de modo que el
  resorte no tenga una única frecuencia de resonancia, instalado con el
  lado de paso pequeño hacia la culata.

Consecuencia práctica: **un resorte de paso irregular montado al revés**
no cumple su función antiparasitaria, y un resorte fatigado (con menor
fuerza que la nominal) deja la válvula cerrando tarde. Se comparan con
la longitud libre y la carga de la especificación del fabricante.

## La luz de válvulas: por qué ajustarla importa

La **luz de válvulas** es la holgura entre el balancín y el vástago
cuando la leva no empuja. Existe porque el metal se dilata con el calor:
si el sistema estuviera ajustado sin holgura en frío, al calentarse la
válvula se alargaría y **quedaría apenas abierta** en el tiempo de
compresión y combustión.

Con las horas, esa holgura **se mueve** por desgaste de la punta del
vástago, del asiento de la válvula, del balancín, del impulsor y de la
leva. Los dos extremos fallan de maneras opuestas:

| Luz | Qué ocurre | Síntoma |
|---|---|---|
| **Excesiva** | La válvula abre más tarde, cierra más temprano y por menos tiempo; el choque en el contacto aumenta | Golpeteo metálico ("tictac"), peor llenado y escape, pérdida de potencia, desgaste acelerado de piezas |
| **Insuficiente** | La válvula no asienta del todo con el motor caliente; los gases calientes pasan por la cara y la queman | Pérdida de compresión, humo, dificultad de arranque, válvula quemada y pistón en riesgo |
| **Correcta** | Cierra por completo y abre a tiempo | Funcionamiento silencioso y compresión estable |

Lo traicionero es que una luz **insuficiente** casi no hace ruido. Lo
que se oye es la luz excesiva, así que el ruido no debe usarse como
único criterio: se ajusta por intervalo y por medición, no por oído.

**Cómo se ajusta, en términos generales** (la secuencia, el valor y la
temperatura de referencia son los del manual del fabricante, y deben
consultarse antes de intervenir):

1. Limpiar la tapa de balancines y retirarla.
2. Colocar el motor en el punto de referencia usando las **marcas de
   sincronización del volante** a través de la ventana de inspección;
   el manual indica que esas marcas sirven precisamente para revisar y
   ajustar la luz de válvulas y la sincronización de la inyección.
3. Identificar qué cilindro está en ese punto y qué válvulas se pueden
   medir según la secuencia.
4. Medir con galga de espesores, aflojar la contratuerca, girar el
   tornillo hasta obtener el valor, apretar la contratuerca y volver a
   medir.
5. Girar el motor a la siguiente posición y repetir hasta cubrir todos
   los cilindros.
6. Reponer la tapa con empaque nuevo si corresponde y verificar fugas.

Este tema se trata con mayor detalle dentro de la [guía de
mantenimiento y afinamiento de motores
diésel](/posts/guia-mantenimiento-afinamiento-motores-diesel/).

## El tren de engranajes de sincronización

Para que válvulas e inyección ocurran en el momento correcto, la
rotación del cigüeñal debe llegar a los demás componentes **sin
deslizamiento**. El manual describe un tren de engranajes: el
engranaje del cigüeñal transmite el giro a un piñón de enlace y este a
los engranajes del árbol de levas, de la bomba de inyección y de la
bomba de aceite.

Cada engranaje lleva una **marca de alineación** estampada. El manual es
tajante: hay que estar seguro de que **todas** las marcas queden
alineadas en el ensamblaje, porque un error en cualquiera reduce el
rendimiento y la vida del motor.

**Fallas típicas**

- **Desgaste de dientes:** el juego entre engranajes crece, el tiempo
  se retrasa o fluctúa, hay un zumbido o aullido característico y las
  partículas metálicas contaminan el aceite.
- **Marcas mal alineadas tras una reparación:** el motor arranca mal,
  humea, pierde potencia o consume más combustible, incluso sin ningún
  ruido evidente.
- **Falta de lubricación:** el tren se lubrica con el mismo circuito;
  un caudal bajo acelera el desgaste.

**Buena práctica:** antes de desarmar el tren, fotografía las marcas y
anota la referencia; al armar, verifica una por una antes de cerrar la
tapa. Si hay duda, gira el motor a mano dos vueltas y comprueba que las
marcas vuelvan a coincidir donde corresponde.

## El volante: el almacén de inercia

La carrera de combustión es la única que entrega impulso. En
admisión, compresión y escape, el cigüeñal tendería a detenerse. El
**volante**, una masa de hierro fundido montada en el extremo trasero,
**guarda energía** durante la combustión y la devuelve en los demás
tiempos, lo que suaviza el giro. Lleva además el **aro dentado** del
motor de arranque, montado por contracción (calentándolo para
dilatarlo y que apriete al enfriarse), y las **marcas de
sincronización** ya mencionadas.

Qué revisar:

- Dientes del aro con desgaste o daño en la zona de acople del motor de
  arranque.
- Grietas en la cara de fricción y en el cubo.
- Apriete de los pernos de fijación y estado del alojamiento del
  cigüeñal.
- Visibilidad de las marcas de sincronización por la ventana de
  inspección.

## Lista de revisión para el taller

| Punto | Cuándo | Qué buscar |
|---|---|---|
| Nivel y presión de aceite | Cada turno | Nivel dentro de rango, presión estable en caliente |
| Análisis de aceite | Según plan del fabricante | Cobre, plomo, estaño, hierro y dilución por combustible |
| Cojinetes retirados en una reparación | En cada apertura | Rayas, escamas, giro, desgaste desigual: documenta la causa |
| Muñones del cigüeñal | En cada reparación mayor | Ovalización, conicidad, filetes, conductos |
| Amortiguador torsional | En servicios mayores | Grietas del hule, desplazamiento de marcas, golpeteo |
| Luz de válvulas | Según el intervalo del fabricante | Valores medidos frente a especificación, desgaste de balancines |
| Resortes de válvula | Al reparar la culata | Longitud libre, carga, grietas, orientación del paso |
| Tren de engranajes | Cada reparación | Marcas alineadas, juego entre dientes |
| Volante y aro dentado | En cada reparación | Dientes, grietas, pernos |

## Qué recordar

El cigüeñal, los cojinetes y el tren de válvulas comparten una
característica: **fallan por lubricación y por ajuste, casi nunca por
sorpresa**. Un casquillo que se funde es un aviso de aceite que no se
atendió; un cigüeñal roto por vibración casi siempre tiene un
amortiguador envejecido detrás; una válvula quemada suele partir de una
luz que nadie midió. Si en el taller conviertes la revisión en rutina
(aceite, ruido, luz de válvulas, marcas de sincronización), cada una de
esas fallas se vuelve prevenible.

Para seguir con el motor completo: [estructura del motor Volvo D7E:
bloque, culata, pistones y camisas](/posts/motor-d7e-bloque-culata-pistones/),
[cámaras de combustión diésel, inyección directa e
indirecta](/posts/camara-combustion-diesel-inyeccion-directa-indirecta/),
[pistones, anillos y camisas: desgaste en motores
diésel](/posts/pistones-anillos-camisas-motor-diesel-desgaste/) y
[mantenimiento de un motor Deutz: aceite, compresión y
culata](/posts/mantenimiento-motor-deutz-aceite-compresion-culata/).

## Fuentes

Manual de mantención de motores diésel de maquinaria pesada, capítulos
IV (El cigüeñal) y V (Las válvulas), publicado en
[maquinariaspesadas.org](https://www.maquinariaspesadas.org/blog/1292-manual-mantencion-motores-diesel-maquinaria-pesada).
Los criterios de diagnóstico y las tablas de fallas son comentarios
generales de taller y no sustituyen el manual del fabricante de cada
motor.

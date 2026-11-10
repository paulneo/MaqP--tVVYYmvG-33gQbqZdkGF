---
title: "Fallas comunes del sistema hidráulico y cómo diagnosticarlas"
published: 2026-11-10
draft: false
featured: false
description: "Funciones lentas, recalentamiento, ruido, deriva y fugas: tabla síntoma-causa-prueba y método paso a paso para diagnosticar un sistema hidráulico en maquinaria pesada."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "diagnostico-hidraulico"
  - "fallas-hidraulicas"
  - "cavitacion"
  - "sistema-hidraulico"
  - "pruebas-de-presion"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistemas-hidraulicos/fallas-comunes-sistema-hidraulico-diagnostico
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué mi máquina se mueve lento cuando el aceite está caliente pero normal en frío?"
    a: "Es un síntoma clásico de desgaste interno. Con el aceite caliente la viscosidad baja y las holguras ya ampliadas de la bomba, el motor hidráulico o las válvulas dejan pasar más aceite hacia el retorno (fuga interna), de modo que llega menos caudal al actuador. También puede indicar un aceite de grado inadecuado para el clima. Confirme con una prueba de caudal o de presión a temperatura normal de trabajo, no en frío."
  - q: "¿Cómo distingo cavitación de aireación por el ruido?"
    a: "Ambas producen un ruido agudo, como de grava o chasquidos, que sube con las RPM. La aireación suele acompañarse de aceite espumoso o lechoso en el depósito y de movimientos erráticos o esponjosos de los cilindros; la cavitación suele ligarse a una restricción en la aspiración (filtro tapado, aceite muy espeso, manguera aplastada). En ambos casos se revisa primero el lado de aspiración: nivel, sellos, abrazaderas y filtro."
  - q: "¿Qué manómetros necesito para un diagnóstico básico?"
    a: "Un juego mínimo incluye un manómetro de alta presión (típicamente 0-600 bar o 0-10 000 psi) y otro de baja presión (0-60 bar) para piloto y carga, con mangueras y acoplamientos de toma rápida compatibles con las tomas de prueba de la máquina. Conviene que sean de glicerina o con amortiguación, porque la aguja vibra con la pulsación de la bomba, y que estén calibrados. Use siempre el rango adecuado: un manómetro sobredimensionado pierde precisión en las lecturas bajas."
  - q: "¿Es normal que un cilindro baje un poco con la máquina detenida?"
    a: "Cierta deriva lenta es habitual, porque los carretes de las válvulas tienen holgura calibrada y pueden pasar pequeñas cantidades de aceite. Es normal si es muy lenta y estable; es una falla si la deriva se acelera con el tiempo, si afecta la seguridad (un brazo que cae con un accesorio pesado) o si aparece en un solo cilindro. Se aísla comparando con las especificaciones del fabricante y probando por separado el sello del pistón y la válvula."
  - q: "¿Puedo subir la presión de la válvula de alivio para recuperar fuerza?"
    a: "No. Una falta de fuerza casi siempre se debe a desgaste, fuga interna o una válvula que alivia antes de tiempo, y subir la regulación solo sobrecarga la bomba, las mangueras y la estructura, además de elevar la temperatura. Primero se mide la presión real y se compara con la especificación del manual de servicio; si está por debajo, se busca la causa. Cualquier ajuste debe hacerse con manómetro y según el procedimiento del fabricante."
sources:
  - title: "Manual Transmisiones Hidráulicas de Maquinaria: Diagnóstico y Mantenimiento"
    url: "https://www.maquinariaspesadas.org/blog/2763-manual-transmisiones-hidraulicas-maquinaria-diagnostico-mantenimiento"
  - title: "Ferreyros — Manual de Hidráulica de Maquinaria Pesada (Desarrollo Técnico)"
    url: ""
  - title: "Parker Hannifin — Hydraulic Troubleshooting and Contamination Control"
    url: "https://www.parker.com/"
  - title: "ISO 4406 — Hydraulic fluid power: Code for defining the level of contamination by solid particles"
    url: "https://www.iso.org/standard/79728.html"
related:
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - valvulas-hidraulicas-tipos-funcionamiento
  - fluidos-hidraulicos-propiedades-tipos-aceites
---

Una máquina "sin fuerza", un brazo que se cae solo o un aceite que hierve
rara vez tienen una causa misteriosa. Casi siempre hay una explicación
mecánica y **una forma ordenada de encontrarla**. El error más caro del
taller es el contrario: cambiar la bomba "porque debe ser la bomba" y descubrir
después que era una válvula de alivio pegada o un filtro de aspiración tapado.

Esta guía reúne las fallas más frecuentes en maquinaria pesada, la tabla
**síntoma → causas probables → qué revisar**, y un procedimiento de
diagnóstico que va de lo barato a lo caro.

## Antes de tocar nada: seguridad

El aceite de un circuito hidráulico trabaja a presiones de cientos de bar
y a temperaturas que queman. Tres reglas no negociables:

- **Presión almacenada.** Aunque el motor esté apagado, los acumuladores,
  los cilindros cargados y las líneas bloqueadas por válvulas pueden
  conservar presión. Baje los implementos al suelo, accione las palancas
  varias veces con el motor apagado para descargar y siga el procedimiento
  del manual antes de abrir cualquier conexión.
- **Fugas por orificio fino.** Un chorro casi invisible puede atravesar la
  piel y causar una **lesión por inyección**, que es una urgencia médica
  aunque el dolor sea mínimo al principio. Nunca busque una fuga con la
  mano: use un cartón o una tabla y protección facial. Más detalle en
  [cómo detectar fugas hidráulicas en una excavadora](/posts/como-detectar-fugas-hidraulicas-en-una-excavadora/).
- **Aceite caliente.** Tras operar, el depósito y las líneas pueden superar
  los 70 °C. Espere a que baje la temperatura antes de abrir tapones o
  tomas de prueba.

## Las seis familias de fallas

Casi todo lo que llega al taller cae en una de estas categorías:

1. **Funciones lentas o sin fuerza**: bomba desgastada, fuga interna,
   alivio mal calibrado.
2. **Recalentamiento**: el sistema genera más calor del que disipa.
3. **Ruido, cavitación y aireación**: la bomba no se llena bien.
4. **Deriva o movimientos no comandados**: sellos y válvulas que no sostienen.
5. **Fugas externas e internas**.
6. **Contaminación**: partículas, agua o aire que degradan todo lo demás.

La contaminación merece mención aparte porque es **causa y consecuencia**:
las partículas rayan bombas y válvulas, que a su vez generan más
partículas y más fuga interna. Por eso la limpieza del aceite aparece
en casi todas las filas de la tabla siguiente.

## Tabla central: síntoma, causa probable y comprobación

| Síntoma | Causas probables | Qué comprobar |
|---|---|---|
| Todas las funciones lentas | Bomba principal desgastada; filtro o colador de aspiración obstruido; aceite demasiado espeso o demasiado fino; regulación de caudal de la bomba fuera de rango | Nivel y estado del aceite; filtros; prueba de caudal de bomba; presión de regulación de la bomba |
| Una sola función lenta | Fuga interna en ese cilindro o motor; carrete de válvula desgastado o pegado; válvula de alivio de línea abriendo antes de tiempo; orificio obstruido en el circuito piloto | Intercambiar válvulas o cartuchos de alivio entre circuitos; prueba de fuga del cilindro; presión piloto en el carrete |
| Falta de fuerza, pero con velocidad normal | Válvula de alivio principal o de línea con regulación baja o con asiento dañado; fuga interna del cilindro | Presión máxima en toma de prueba con el circuito bloqueado en un tope; comparar con el manual |
| Falta de fuerza y de velocidad a la vez | Bomba desgastada o con regulación defectuosa; aspiración restringida | Caudal y presión en la salida de la bomba; temperatura del drenaje de carcasa |
| Recalentamiento general | Enfriador sucio o tapado; ventilador o correa con falla; alivio que descarga de forma permanente; aceite de viscosidad inadecuada; nivel bajo; desgaste que genera fuga interna | Temperatura con termómetro infrarrojo antes y después del enfriador; aletas del radiador; funcionamiento de la válvula de derivación (bypass) del enfriador |
| Un componente caliente al tacto (carcasa de bomba o de motor) | Fuga interna elevada en ese componente; drenaje de carcasa con caudal excesivo | Medir el caudal del drenaje de carcasa; comparar con la ficha del componente |
| Ruido agudo que sube con las RPM | Cavitación: restricción en la aspiración, aceite frío y espeso, manguera aplastada, filtro tapado | Vacío en la aspiración; estado de la manguera; temperatura y viscosidad del aceite |
| Aceite espumoso, ruido y movimiento "esponjoso" | Aireación: nivel bajo, entrada de aire por sellos o abrazaderas de aspiración, retorno que descarga sobre la superficie del aceite | Nivel; apriete de abrazaderas; sello del eje de la bomba; posición del tubo de retorno |
| Chillido o vibración al accionar una válvula | Válvula de alivio con vibración; carrete desgastado; presión piloto inestable | Comparar con presión del manual; cambiar o limpiar el cartucho de alivio |
| Cilindro que baja solo (deriva) | Sello del pistón desgastado; válvula de retención de carga con fuga; válvula de alivio de línea con fuga; rayado del vástago | Prueba de deriva con la máquina fría y a temperatura; intercambiar la válvula de retención; inspeccionar el vástago |
| Movimiento brusco o a tirones | Aire en el circuito; contaminación en el piloto; histéresis en válvulas; amortiguación defectuosa | Purga de aire; filtro piloto; estado de los cartuchos de amortiguación |
| Aceite en el depósito turbio o con aspecto lechoso | Agua condensada o ingresada por lavado; aire emulsionado | Prueba de gota sobre superficie caliente (crepita si hay agua); análisis de aceite |
| Aceite oscuro, olor a quemado | Sobrecalentamiento prolongado; oxidación; mezcla con otro fluido | Análisis de laboratorio; revisar el historial de temperatura y cambios de aceite |
| Fuga externa en conexiones | Sello o junta vencidos, par de apriete incorrecto, vibración | Reapretar al par especificado; reemplazar el sello; revisar el soporte de la línea |
| Fuga externa en vástago de cilindro | Sello de vástago (limpiador y sello primario) desgastado; vástago rayado o picado | Inspección del vástago con luz rasante; kit de sellos |

Esta tabla es un punto de partida: la causa real se confirma con una
medición, no con la intuición.

## Método sistemático de diagnóstico

El orden importa. Cada paso descarta causas con el menor costo posible.

<figure class="diagram">
<svg viewBox="0 0 800 420" role="img" aria-labelledby="fcd-title" style="width:100%;height:auto;font-family:inherit">
<title id="fcd-title">Diagrama de flujo del diagnóstico hidráulico: entrevista y revisión visual, temperatura, pruebas de presión y caudal, y tres resultados posibles</title>
<defs>
<marker id="fcd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
</marker>
</defs>
<g fill="none" stroke="currentColor" stroke-width="1.6">
<rect x="15" y="30" width="175" height="90" rx="8"/>
<rect x="215" y="30" width="175" height="90" rx="8"/>
<rect x="415" y="30" width="175" height="90" rx="8"/>
<rect x="615" y="30" width="175" height="90" rx="8"/>
<rect x="15" y="290" width="240" height="100" rx="8"/>
<rect x="280" y="290" width="240" height="100" rx="8"/>
<rect x="545" y="290" width="240" height="100" rx="8"/>
</g>
<g stroke="currentColor" stroke-width="1.6" fill="none" marker-end="url(#fcd-arrow)">
<path d="M190 75 H213"/>
<path d="M390 75 H413"/>
<path d="M590 75 H613"/>
<path d="M702 120 V160 H135 V288"/>
<path d="M702 160 H400 V288"/>
<path d="M702 160 H665 V288"/>
</g>
<g fill="currentColor" font-size="15" text-anchor="middle">
<text x="102" y="68" font-weight="bold">1. Entrevista</text>
<text x="102" y="90">y revisión visual</text>
<text x="302" y="68" font-weight="bold">2. Nivel y aceite</text>
<text x="302" y="90">filtros, temperatura</text>
<text x="502" y="68" font-weight="bold">3. Prueba de</text>
<text x="502" y="90">presión (alivio)</text>
<text x="702" y="68" font-weight="bold">4. Prueba de</text>
<text x="702" y="90">caudal y drenajes</text>
<text x="135" y="325" font-weight="bold">Presión baja y</text>
<text x="135" y="347">caudal bajo</text>
<text x="135" y="372" font-size="14">Bomba, aspiración o alivio</text>
<text x="400" y="325" font-weight="bold">Presión normal,</text>
<text x="400" y="347">función lenta</text>
<text x="400" y="372" font-size="14">Fuga interna en actuador</text>
<text x="665" y="325" font-weight="bold">Presión y caudal</text>
<text x="665" y="347">normales</text>
<text x="665" y="372" font-size="14">Mando piloto o eléctrico</text>
<text x="400" y="148" font-size="14" fill-opacity="0.85">Comparar siempre con la especificación del manual</text>
</g>
<rect x="15" y="290" width="240" height="6" rx="3" fill="#f59e0b"/>
<rect x="280" y="290" width="240" height="6" rx="3" fill="#f59e0b"/>
<rect x="545" y="290" width="240" height="6" rx="3" fill="#f59e0b"/>
</svg>
<figcaption>Secuencia de diagnóstico: de la inspección visual a las pruebas con instrumentos, y los tres resultados que orientan la reparación.</figcaption>
</figure>

### Paso 1: entrevista y revisión visual

Pregunte al operador **cuándo** aparece el síntoma (en frío, en caliente,
solo con carga, en una sola función), desde cuándo y qué se hizo
recientemente (cambio de aceite, de filtros, de mangueras, lavado a
presión). Después haga una inspección visual: fugas, mangueras
aplastadas o rozadas, abrazaderas flojas, suciedad acumulada en el enfriador,
estado del tapón magnético y de los sellos.

### Paso 2: nivel, aceite y temperatura

Con la máquina en terreno plano y los cilindros en la posición que
indique el manual, verifique el **nivel**. Observe el aceite: color,
olor, espuma, agua. Revise los filtros y los indicadores de restricción.
Después tome temperaturas con el termómetro infrarrojo en la
salida de la bomba, el depósito, los motores, y antes y después del
enfriador. Una diferencia de temperatura marcada entre dos puntos
suele señalar dónde se está disipando energía en forma de calor.

### Paso 3: prueba de presión

Con manómetros conectados a las tomas de prueba, se mide la presión del
sistema y la de piloto. Procedimiento típico: aceite a temperatura normal
de trabajo, motor a las RPM indicadas, y la función llevada a un tope
mecánico de forma segura. Lecturas posibles:

- **Presión máxima por debajo de lo especificado**: alivio mal regulado o
  con asiento dañado, o bomba incapaz de generar presión.
- **Presión correcta pero función lenta**: apunta a fuga interna más
  abajo en el circuito.
- **Presión inestable que oscila**: aire, válvula de alivio vibrando o
  contaminación.

En motores de traslación o de giro, las pruebas de **calado** siguen la
misma lógica: se bloquea el movimiento y se comparan presión y RPM con el
manual. Los manuales de transmisiones también las utilizan como
indicador rápido; por ejemplo, un convertidor de par con baja
velocidad de calado orienta hacia el motor, y con velocidad alta hacia el
tren de mando.

### Paso 4: prueba de caudal

El caudal mide si la bomba **entrega lo que promete**. Se intercala un
medidor de caudal con carga regulable, o se mide el caudal del
**drenaje de carcasa** de bombas y motores de pistones: un caudal de
drenaje alto indica fuga interna y desgaste. Compare siempre con el
valor del fabricante, porque una bomba con 15 % o 20 % menos caudal
del nominal ya suele estar cerca del límite de servicio.

### Paso 5: análisis de aceite

Una muestra enviada a laboratorio completa el cuadro: **código de
limpieza ISO 4406**, contenido de agua, viscosidad, oxidación y metales
de desgaste (hierro, cobre, estaño, silicio). El silicio, por ejemplo,
suele indicar entrada de polvo; el cobre y el estaño, desgaste de
bujes y zapatas de bombas. Toda la información de fondo sobre los
fluidos está en
[fluidos hidráulicos: propiedades y tipos de aceites](/posts/fluidos-hidraulicos-propiedades-tipos-aceites/).

## Instrumentos del taller

| Instrumento | Para qué sirve | Nota práctica |
|---|---|---|
| Manómetros de alta y baja presión | Medir presión de trabajo, de alivio y de piloto | Con amortiguación (glicerina); rangos adecuados; calibración vigente |
| Medidor de caudal con carga | Medir la entrega real de la bomba | Montar con mangueras de capacidad suficiente y válvula de carga |
| Termómetro infrarrojo | Mapa de temperaturas por componente | Corregir por la emisividad de superficies brillantes o pintadas |
| Tomas de prueba y acoplamientos rápidos | Conectar instrumentos sin abrir el circuito | Guardarlas limpias y con su tapa; la suciedad contamina el sistema |
| Contador de partículas o kit de muestreo | Verificar la limpieza del aceite | Tomar la muestra con la máquina en temperatura y con método repetible |
| Cartón, linterna y luz ultravioleta con trazador | Detectar fugas finas | Nunca la mano; el trazador permite ubicar fugas pequeñas |

## Fallas de ruido: cavitación y aireación

Las dos son primas y confundirlas lleva a diagnósticos equivocados.

- **Cavitación**: la presión en la aspiración baja tanto que se forman
  burbujas de vapor, que luego colapsan violentamente dentro de la
  bomba y erosionan las superficies. Se produce por aspiración restringida
  (filtro, colador o manguera tapados), aceite demasiado espeso en frío,
  o tubería de aspiración de diámetro insuficiente.
- **Aireación**: el aire entra por sellos, abrazaderas o niveles bajos, y se
  mezcla con el aceite. Los efectos son parecidos, y además produce
  espuma y oxidación acelerada del aceite.

En ambos casos **empiece siempre por el lado de aspiración**: nivel,
filtro, mangueras y abrazaderas. En altitud, la menor presión atmosférica
reduce el margen disponible en la aspiración, por lo que una bomba que en
costa trabaja sin problemas puede cavitar en una operación minera a gran
altura si la aspiración está al límite. Lo mismo ocurre con arranques en frío en la sierra con un aceite de grado inadecuado.

## Recalentamiento: calor como síntoma

Toda pérdida de presión sin trabajo útil se convierte en calor. Por eso el
recalentamiento puede ser **causa o efecto** del desgaste. Revise primero
lo simple: enfriador limpio, ventilador y correas, nivel de aceite y
viscosidad. En LATAM, el polvo de obra, el barro y el calor ambiental
elevan la temperatura base de operación: una limpieza semanal del
enfriador con aire a baja presión (sin dañar las aletas) evita muchas
visitas al taller.

Si el enfriador está sano y el aceite sigue caliente, busque un
componente que esté "soltando" presión continuamente: una válvula de alivio
que descarga, una bomba con desgaste, un motor de traslación con fuga
interna. El termómetro infrarrojo ayuda a encontrarlo: el componente
más caliente respecto de su entorno suele ser el culpable.

## Fugas internas y externas

- **Externas**: se ven y se corrigen (sellos, conexiones, mangueras). Son
  la parte fácil, aunque no hay que subestimarlas por seguridad y por
  contaminación.
- **Internas**: no se ven. Reducen velocidad y fuerza, y generan calor.
  Se detectan con pruebas de caudal, de presión y de deriva.

La cantidad aceptable de fuga interna depende de cada componente y
la fija el fabricante. Sin especificación, trate de comparar con un
equipo gemelo en buen estado: la comparación es una herramienta de
diagnóstico muy poderosa en flotas.

## Errores frecuentes en el diagnóstico

- **Medir en frío** y sacar conclusiones de un sistema que falla en caliente.
- **Cambiar la bomba primero**, sin medir presión ni verificar la aspiración.
- **Subir la regulación del alivio** para "recuperar fuerza".
- **Abrir tomas de prueba sin limpiarlas**, introduciendo polvo en un circuito sano.
- **Ignorar los hábitos del operador**: aceleraciones al tope, palanca
  sostenida contra el tope del cilindro (que hace descargar el alivio y calienta
  el aceite) o uso de implementos más pesados que los del diseño.

## Ideas clave

- Diagnostique en orden: **visual, nivel y temperatura, presión, caudal,
  aceite**.
- **No cambie componentes sin una medición** que lo justifique.
- La falla más común de ruido se resuelve **en la aspiración**.
- Calor sin causa externa significa **fuga interna**.
- La limpieza del aceite previene la mayoría de las fallas repetitivas.
- Para la mecánica de cada componente, vea
  [bombas hidráulicas](/posts/bombas-hidraulicas-tipos-engranajes-paletas-pistones/)
  y [válvulas hidráulicas](/posts/valvulas-hidraulicas-tipos-funcionamiento/).
  Para el programa preventivo, la guía de
  [mantenimiento del sistema hidráulico de una excavadora](/posts/mantenimiento-sistema-hidraulico-excavadora-paso-a-paso/).

Para filtros y depósitos vea [filtros y depósitos del sistema hidráulico](/posts/filtros-depositos-sistema-hidraulico/); para líneas y conexiones, [mangueras hidráulicas](/posts/mangueras-conexiones-hidraulicas-tipos-seleccion/). Si además opera flotas, el [costo hora de operación de una excavadora](/herramientas/costo-hora-operacion-excavadora/)
ayuda a calcular cuánto cuesta realmente cada hora de máquina parada y
justificar el diagnóstico a tiempo.

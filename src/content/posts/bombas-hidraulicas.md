---
title: "Bombas hidráulicas: tipos, rendimiento, cavitación y pruebas de caudal"
published: 2024-07-03
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo funcionan las bombas de engranajes, paletas y pistones, qué es el desplazamiento fijo o variable, cómo calcular rendimiento y cómo medir caudal y presión."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "bombas-hidraulicas"
  - "sistemas-hidraulicos"
  - "cavitacion"
  - "rendimiento-volumetrico"
  - "diagnostico-hidraulico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/bombas-hidraulicas
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Una bomba hidráulica crea presión?"
    a: "No. La bomba solo genera caudal; la presión aparece cuando ese caudal encuentra resistencia en el circuito (la carga del actuador, una válvula, una restricción). Por eso una bomba desgastada puede entregar menos caudal y aun así alcanzar la presión de la válvula de alivio, mientras que una fuga grande puede impedir que la presión suba. Al diagnosticar siempre se miden caudal y presión por separado."
  - q: "¿Cómo se calcula el rendimiento volumétrico de una bomba?"
    a: "Se divide el caudal real medido a una presión de prueba entre el caudal teórico, que es el desplazamiento por revolución multiplicado por las revoluciones por minuto. Si una bomba de 100 cm³/rev a 2.000 rpm debería entregar 200 L/min y mide 188 L/min, su rendimiento volumétrico es 94 %. Cada fabricante indica el valor mínimo aceptable para su modelo."
  - q: "¿Cómo distingo cavitación de aireación?"
    a: "Ambas suenan como grava o canicas dentro de la bomba. La cavitación nace de un vacío excesivo en la succión (filtro de aspiración tapado, línea larga o estrecha, aceite muy frío y espeso). La aireación nace de aire que entra por una unión floja, un sello de eje o un nivel bajo; en ese caso el aceite del depósito se ve espumoso o lechoso. Revisar nivel, uniones de succión y condición del filtro suele separar ambos casos."
  - q: "¿Cuándo conviene una bomba de caudal variable en lugar de una de desplazamiento fijo?"
    a: "Cuando el equipo trabaja con demandas muy diferentes a lo largo del ciclo, como una excavadora. Una bomba fija envía todo su caudal aunque el circuito no lo necesite y el excedente se descarga por la válvula de alivio convertido en calor. Una bomba variable ajusta el desplazamiento a la demanda y desperdicia mucho menos energía, a cambio de mayor costo y mayor sensibilidad a la contaminación."
  - q: "¿Se puede probar una bomba sin desmontarla?"
    a: "Sí. Con un caudalímetro de carga conectado en la línea de salida y un manómetro, se mide caudal a distintas presiones y se compara con la especificación. La prueba se hace con el aceite a temperatura de trabajo y siguiendo el procedimiento del manual del equipo, porque cargar el circuito con la válvula de prueba cerrada sin control puede dañar componentes."
related:
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - como-funciona-la-bomba-hidraulica-de-una-excavadora
  - fallas-comunes-sistema-hidraulico-diagnostico
  - aceite-hidraulico-excavadora-tipos-viscosidad
---

La bomba es el componente que convierte la energía mecánica del motor o del
motor eléctrico en energía hidráulica. Todo lo demás en el circuito
(válvulas, cilindros, motores hidráulicos) depende de que entregue el caudal
correcto, con aceite limpio y sin aire. Entender cómo está construida y qué
mide cada parámetro permite elegir bien, diagnosticar sin desmontar y
reconocer una falla incipiente por el sonido, la temperatura o el consumo.

## Qué hace una bomba y qué no hace

Una bomba hidráulica es de **desplazamiento positivo**: cada vuelta del eje
desplaza un volumen de aceite prácticamente fijo, sin importar la presión. Esa
es la diferencia con una bomba centrífuga de agua, cuyo caudal cae cuando sube
la contrapresión.

Consecuencia práctica: la bomba **no crea presión, solo caudal**. La presión es
la resistencia que opone el circuito a ese caudal. Si se bloquea la salida,
la presión sube hasta que algo cede (la válvula de alivio, una manguera, la
propia bomba). Por eso toda instalación lleva una válvula de alivio y por eso
el diagnóstico siempre mide las dos magnitudes.

## Parámetros que definen una bomba

| Parámetro | Qué significa | Unidad habitual |
| --- | --- | --- |
| Desplazamiento | Volumen que entrega por revolución | cm³/rev |
| Caudal teórico | Desplazamiento × rpm | L/min |
| Presión nominal / máxima | Presión de trabajo continuo / pico admitido | bar o MPa |
| Rendimiento volumétrico | Caudal real ÷ caudal teórico | % |
| Rendimiento mecánico | Par teórico ÷ par real en el eje | % |
| Rendimiento total | Volumétrico × mecánico | % |
| Nivel sonoro | Ruido a presión y rpm de referencia | dB(A) |

Las **pérdidas volumétricas** son fugas internas: aceite que pasa de la zona de
alta a la de baja presión por las holguras entre engranajes, paletas o
pistones y sus carcasas. Aumentan con el desgaste, con la presión y cuando el
aceite se adelgaza por temperatura. Las **pérdidas mecánicas** son fricción
interna. Ambas terminan convertidas en calor.

## Tipos de bombas de desplazamiento positivo

### Engranajes

Dos engranajes (externos, o uno interno y otro externo) giran dentro de una
carcasa de holgura mínima. El aceite viaja atrapado entre los dientes y la
pared. Son simples, baratas, tolerantes a la suciedad moderada y de
desplazamiento **fijo**. Trabajan en presiones medias y altas según el diseño.
Se usan en direcciones, circuitos auxiliares y equipos compactos. El desgaste
típico aparece como rayado en las placas laterales y en la carcasa del lado de
succión. Para más detalle, ver
[bombas hidráulicas de engranajes, paletas y pistones](/posts/bombas-hidraulicas-tipos-engranajes-paletas-pistones/).

### Paletas

Un rotor excéntrico con paletas deslizantes en ranuras. Las paletas se
apoyan contra el anillo (estator) y el volumen entre ellas cambia con el
giro, aspirando y expulsando. Son silenciosas y de caudal muy uniforme. Existen
versiones de caudal fijo y variable (cambiando la excentricidad). Son sensibles
a la contaminación y al aceite de baja calidad, porque las puntas de las
paletas se desgastan rápido.

### Pistones axiales

Un bloque de cilindros gira junto al eje y los pistones, apoyados en un plato
inclinado (de inclinación fija o variable), entran y salen de sus cilindros.
Variando el ángulo del plato se cambia el desplazamiento, por eso son la base
de las bombas de **caudal variable** de excavadoras y cargadores. Ofrecen el
mejor rendimiento y las presiones más altas, pero exigen aceite muy limpio
y son más costosas de reparar.

### Pistones radiales

Los pistones se disponen en estrella alrededor de un excéntrico o de un eje de
levas. Soportan presiones muy altas con caudales moderados y se emplean en
prensas e instalaciones industriales más que en maquinaria móvil.

| Tipo | Presión de trabajo | Rendimiento | Sensibilidad a contaminación | Uso típico |
| --- | --- | --- | --- | --- |
| Engranajes | Media a alta | Medio | Baja | Dirección, auxiliares |
| Paletas | Media | Medio a alto | Media a alta | Industria, circuitos silenciosos |
| Pistones axiales | Alta | Alto | Alta | Excavadoras, cargadores |
| Pistones radiales | Muy alta | Alto | Alta | Prensas, alta presión |

## Desplazamiento fijo frente a variable

Con una bomba de **desplazamiento fijo** el caudal solo cambia con las rpm. Si
el circuito demanda menos de lo que entrega, el excedente vuelve al depósito
por la válvula de alivio o por un centro abierto de válvulas, a presión
elevada: pura energía convertida en calor. Es la solución sencilla y barata.

Con una bomba de **desplazamiento variable** un regulador (compensador de
presión, control de potencia constante o control con sensado de carga) cambia
el ángulo del plato o la excentricidad según la demanda. El caudal se ajusta a
lo que pide el actuador, el aceite se calienta menos y el motor diésel carga
menos en vacío. La desventaja es la complejidad: un regulador mal calibrado
produce síntomas confusos (pérdida de fuerza, equipo lento) que no siempre
significan que la bomba esté gastada. El funcionamiento en una máquina real se
ve en [cómo funciona la bomba hidráulica de una excavadora](/posts/como-funciona-la-bomba-hidraulica-de-una-excavadora/).

## Rendimiento: ejemplo con números

Bomba de pistones axiales de 100 cm³/rev, accionada a 2.000 rpm.

1. Caudal teórico: 100 cm³ × 2.000 = 200.000 cm³/min = **200 L/min**.
2. Se mide con caudalímetro a presión de prueba: **188 L/min**.
3. Rendimiento volumétrico: 188 ÷ 200 = **94 %**.
4. Potencia hidráulica a 250 bar: P (kW) = Q (L/min) × p (bar) ÷ 600 =
   188 × 250 ÷ 600 ≈ **78 kW**.
5. Si el rendimiento total es 85 %, el eje necesita 78 ÷ 0,85 ≈ **92 kW**.

La regla 600 sirve para estimaciones rápidas de campo. Una bomba que baja de
94 % a 85 % ya no es la misma: los 9 puntos perdidos vuelven al depósito como
calor, y el aceite lo muestra con temperatura más alta de lo normal.

## Cavitación y aireación

Son las dos causas más frecuentes de destrucción prematura de una bomba y
ambas se originan **en la succión**.

- **Cavitación:** si la presión en la entrada cae demasiado, el aceite forma
  burbujas de vapor que colapsan violentamente en la zona de presión y erosionan
  las superficies. Causas: filtro o colador de succión tapado, manguera de
  aspiración colapsada o demasiado larga o delgada, aceite frío y espeso,
  altura de succión excesiva, o rpm por encima de lo permitido. Como orientación
  de diseño, la velocidad del aceite en la línea de succión se mantiene
  alrededor de 1 m/s; el límite de vacío lo da el fabricante de la bomba.
- **Aireación:** aire que entra por uniones flojas, sellos del eje, tapa del
  depósito o nivel bajo, y se comprime en la salida con efectos parecidos.

| Síntoma | Cavitación | Aireación |
| --- | --- | --- |
| Sonido | Ruido de grava, más agudo con las rpm | Ruido irregular, a veces con golpeteo |
| Aceite | Normal o con burbujas finas | Espumoso, lechoso, aumento de nivel |
| Superficie de la bomba | Picaduras en zona de alta presión | Erosión y calentamiento localizado |
| Primera revisión | Filtro de succión, viscosidad, manguera | Uniones de succión, nivel, retenes |

La solución casi nunca es cambiar la bomba: primero se corrige el motivo.
Cambiar una bomba y mantener el filtro de succión obstruido destruye la nueva
en pocas horas.

## Cómo probar caudal y presión

Procedimiento general (el manual del equipo fija las rpm, la presión de prueba
y el caudal mínimo aceptable):

1. Llevar el aceite a la temperatura normal de trabajo, porque la viscosidad
   cambia el resultado.
2. Instalar un caudalímetro de carga (con válvula de carga) entre la salida de
   la bomba y el retorno, y un manómetro en la toma de presión, usando
   instrumentos con el rango adecuado.
3. Con la válvula de carga abierta, medir caudal libre y rpm.
4. Cerrar la válvula de carga gradualmente y registrar el caudal a varias
   presiones, hasta la presión de prueba indicada. No se cierra del todo sin
   respetar el límite del manual.
5. Comparar contra la tabla del fabricante. Una caída de caudal creciente con
   la presión indica fuga interna en la bomba; un caudal normal con presión
   baja apunta a una válvula de alivio, un cilindro o un motor con fuga.

Para encontrar fugas en el circuito antes de culpar a la bomba, conviene
revisar [fallas comunes del sistema hidráulico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/).

## Mantenimiento que alarga la vida de la bomba

- Mantener la limpieza del aceite: la mayoría de las fallas en bombas de
  pistones y paletas tienen un origen abrasivo. Ver
  [filtros hidráulicos: tipos y cambio](/posts/filtros-hidraulicos-excavadora-tipos-cambio/).
- Usar la viscosidad correcta para la temperatura de trabajo
  ([aceite hidráulico: tipos y viscosidad](/posts/aceite-hidraulico-excavadora-tipos-viscosidad/)).
- Revisar nivel y estado del filtro de succión en cada inspección.
- Llenar de aceite la carcasa antes del primer arranque tras una reparación,
  para que no trabaje en seco.
- Vigilar temperatura del aceite y ruido; son los primeros avisos.
- Analizar periódicamente el aceite: partículas metálicas en aumento anticipan
  el desgaste de la bomba.

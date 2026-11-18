---
title: "Mantenimiento del Detroit Diesel Serie 60: intervalos, aceite y refrigerante"
published: 2026-11-20
draft: false
featured: false
description: "Intervalos de servicio del Detroit Diesel Serie 60 (guía 2007): aceite CJ-4, combustible ULSD, refrigerante con SCA, correas, filtros de aire y tabla consolidada."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "detroit-diesel"
  - "serie-60"
  - "mantenimiento-preventivo"
  - "refrigerante-sca"
  - "aceite-cj-4"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camiones/mantenimiento-detroit-serie-60-intervalos-refrigerante
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué aceite exige la guía del Serie 60 modelo 2007?"
    a: "Un aceite API CJ-4, con ceniza sulfatada menor de 1,0 % en peso y relación alta temperatura/alto corte (HT/HS) mínima de 3,7. La guía prohíbe los aceites monogrado en el Serie 60 sin importar su clasificación API, y permite 5W-XX o 10W-XX (XX = 30 o 40) solo en arranques por debajo de -20 °C (-4 °F) cuando el 15W-40 no logra una velocidad de giro suficiente. Los aceites sintéticos son válidos si están certificados por API, pero no autorizan alargar el intervalo de cambio."
  - q: "¿Por qué importa el nivel de nitrito en el refrigerante?"
    a: "El nitrito es el inhibidor que protege las camisas de cilindro contra la corrosión y la cavitación. En los sistemas con SCA tradicional se mide con tiras de prueba: la guía manda añadir SCA cuando el nitrito baja a 900 ppm o menos, no añadir nada entre 900 y 3.200 ppm, y drenar parcialmente y diluir si supera 3.200 ppm porque el sistema queda sobreinhibido. Medir antes de dosificar evita tanto la falta de protección como los depósitos por exceso."
  - q: "¿Se pueden usar los intervalos de esta guía en cualquier Serie 60?"
    a: "No. La guía es de 2007 y describe motores con posttratamiento y combustible ULSD. Los motores anteriores, con otro combustible o con aplicaciones distintas pueden tener intervalos, aceites y refrigerantes diferentes. Lo que manda siempre es la documentación del fabricante para el número de serie y el año de su motor, y la política de garantía de su caso."
  - q: "¿Cada cuánto se cambian las correas del Serie 60?"
    a: "La guía indica reemplazar las correas de transmisión de ranura en V cada 2.000 horas o 100.000 millas (160.000 km) y cambiar siempre el juego completo, no una correa suelta. Entre cambios pide verificar la tensión cada 100 horas o 6.000 millas (10.000 km). Las correas nuevas se estiran en las primeras horas, por eso se revisa la tensión a la media hora y de nuevo a las 8 horas o 250 millas (400 km)."
  - q: "¿Qué pasa si se carga combustible con más azufre que el ULSD?"
    a: "La guía advierte que cualquier combustible distinto del ULSD (máximo 15 ppm de azufre) daña el dispositivo de posttratamiento. Además, con más de 0,05 % de azufre en volumen exige acortar los intervalos de cambio de aceite o usar un aceite de TBN mayor, según la publicación de requisitos que cita el propio fabricante."
sources:
  - title: "Guía del operador 2007 del motor de la Serie 60 (Detroit Diesel, publicación 6SE607) — versión en español"
    url: "https://www.mecanicoautomotriz.org/662-manual-mecanica-automotriz-detroit-diesel-serie-60"
    author: "Detroit Diesel Corporation"
    year: 2007
related:
  - intervalos-cambio-contaminacion-aceite
  - sistema-enfriamiento-cummins
  - guia-mantenimiento-afinamiento-motores-diesel
---

El Serie 60 es uno de los motores diesel de 4 tiempos más extendidos en camiones, autobuses y equipos de obra. Su fama de durable tiene una condición: el mantenimiento se cumple con las características del motor y no con la costumbre del taller. Esta guía reorganiza el programa de servicio de la **guía del operador 2007** para que veas, por elemento y por tipo de servicio, qué se revisa, cada cuánto y sobre todo **por qué**.

Un aviso antes de empezar: todos los intervalos y especificaciones que siguen son los que publica esa guía de 2007 para motores con normativa de emisiones de ese año. No sustituyen la documentación de su motor concreto (número de serie, año y aplicación). Es un artículo independiente, sin relación con el fabricante ni respaldo suyo.

## Cómo organiza el programa la guía

La guía parte de una idea: los intervalos son una referencia para el mantenimiento preventivo y deben seguirse "lo más estrictamente posible". Los expresa en horas, y para vehículos también en millas o kilómetros. Reparte el trabajo en tres programas según el tipo de servicio:

| Tipo de servicio | Verificaciones de referencia en la guía |
|---|---|
| Camión y autobús de pasajeros en carretera | Diaria, 7.500 mi (12.000 km), 15.000 mi (24.000 km) y luego cada 6 meses hasta 60 meses |
| Combate de incendios, choque/rescate y emergencia | Diaria, 100 h o 3.000 mi (4.800 km), 300 h o 6.000 mi (9.600 km) |
| Grúa | Diaria, 100, 150, 200 y 300 h, y luego tabla de 150 en 150 h |

Dos cosas conviene entender. Primero, las "verificaciones diarias" son del arranque rutinario: nivel de aceite, nivel de refrigerante, fugas, mangueras. Segundo, la guía separa lo que hace el operador de lo que hace un taller autorizado: salvo las verificaciones diarias, el resto del preventivo lo asigna a personal con herramientas especiales.

## Aceite lubricante: el requisito que más cambió en 2007

### Categoría y viscosidad

Para el modelo año 2007, la guía exige **aceite API CJ-4** con ceniza sulfatada menor de 1,0 % en peso. Es la categoría diseñada para motores con posttratamiento de escape: la ceniza del aceite no se quema y se acumula en el filtro de partículas, así que cuanto menos ceniza, más tarda en taparse. Otros requisitos del texto:

- Aceites con símbolo API certificado y desempeño probado en campo en motores Detroit Diesel.
- HT/HS (alta temperatura/alto corte) de **3,7 como mínimo**.
- Viscosidad de referencia SAE 15W-40. A menos de -20 °C (-4 °F), si no se logra suficiente velocidad de giro, se admiten 5W-XX o 10W-XX (XX = 30 o 40).
- **Nunca monogrado**: se espesan con el frío, reducen el flujo y, a la temperatura de trabajo, no dan lubricidad suficiente.
- Los sintéticos se aceptan si cumplen los mismos requisitos y llevan certificación API, pero no justifican alargar el intervalo. Si le interesa la diferencia técnica, repase [aceites minerales vs sintéticos](/posts/aceites-minerales-vs-sinteticos/).
- Los aditivos suplementarios para aceite no se recomiendan: el aceite ya viene balanceado y el daño por su uso no lo cubre la garantía.

### Intervalos de cambio de aceite y filtros

| Aplicación | Cambio de aceite y filtros (guía 2007) |
|---|---|
| Camión y autobús en carretera | 15.000 mi (24.000 km) |
| Vehículo de bomberos o de emergencia | 6.000 mi (9.600 km), 300 h o 1 año, lo que ocurra primero |
| Autobús urbano (filtros de aceite) | Máximo 6.000 mi (9.600 km) |
| Grúa | Cada 250 h o 1 año, lo que ocurra primero |

Tres matices que evitan errores:

1. Los valores anteriores asumen combustible con azufre de 15 ppm o menos. Con más de 0,05 % en volumen, hay que **reducir el intervalo** o usar aceite de TBN mayor.
2. El análisis de aceite puede **acortar** el intervalo, nunca prolongarlo. Para qué sirve ese análisis y cómo leerlo, vea [intervalos de cambio y contaminación del aceite](/posts/intervalos-cambio-contaminacion-aceite/).
3. Los filtros se cambian siempre junto con el aceite. La guía insiste en que el filtro sirve para mantener limpio un sistema limpio, no para limpiar uno contaminado.

Por qué importa: el aceite en un diesel moderno se degrada por hollín, combustible diluido y acidez. Si el nivel sube sin haber añadido aceite, la guía pide investigar: puede haber dilución por combustible o refrigerante en el cárter, una falla grave.

### Buenas prácticas de nivel y filtro

- Revisar el nivel a diario con el motor apagado; si está caliente, esperar unos 20 minutos para que el aceite drene al cárter.
- No sobrellenar: el exceso puede salir por el respiradero del cárter.
- Llenar los filtros nuevos con aceite limpio y lubricar el sello. Atornillar hasta el contacto con la junta y dar dos tercios de vuelta adicional con la mano, o lo que indique el filtro. Apretar de más puede agrietar el adaptador.
- Tapón de drenaje del cárter: la guía da 45 a 50 N·m (33 a 37 lb-pie) en el procedimiento de almacenamiento.
- Capacidad de aceite: la guía **no publica una cifra**. Indica que depende del cárter instalado y de la aplicación, y remite al centro de ayuda del fabricante. Por eso no vamos a darle un número genérico: consulte el dato para su motor.

## Combustible: ULSD y limpieza

El motor 2007 está diseñado para **combustible diesel de ultra bajo azufre (ULSD)**, máximo 15 ppm medido por ASTM D2622. Es una exigencia técnica, no comercial: el azufre contamina el catalizador y el filtro del sistema de posttratamiento, y la guía advierte que cualquier otro combustible lo daña.

Puntos clave de la guía:

- Combustibles que cumplan ASTM D 975 (grados 1-D y 2-D) han dado buen desempeño.
- Biodiesel que cumpla ASTM D 6751, mezclado hasta un **5 % en volumen** máximo, preferentemente de soya o colza. Las fallas atribuidas al biodiesel no las cubre la garantía.
- Prohibido mezclar aceite usado de motor ni gasolina. El primero obstruye el filtro por ceniza y erosiona inyectores; la segunda baja el cetano y es riesgo de incendio.
- Los aditivos suplementarios no se recomiendan; si se usan, el daño asociado no queda cubierto.
- No usar tanques ni líneas de acero galvanizado: el combustible reacciona con el zinc y forma un polvo que tapa filtros y daña inyectores.

Por qué importa la limpieza: la causa típica de contaminación es el manejo, con agua, suciedad y crecimiento microbiano. La guía recomienda **mantener el tanque lleno al terminar la jornada** (menos aire, menos condensación) y abrir el drenaje del fondo cada 30.000 mi (48.000 km) para sacar agua y sedimento.

### Filtros de combustible

| Dato | Valor de la guía |
|---|---|
| Cambio de filtros giratorios primario y secundario | Cada 15.000 mi (24.000 km) o 6 meses, lo que ocurra primero |
| Cambio por restricción | Cuando la restricción de entrada de la bomba llegue a 12 pulg. Hg (41 kPa) |
| Restricción máxima en sistema limpio | 6 pulg. Hg (20,3 kPa) |
| Presión normal de combustible | 55 a 70 psi (375 a 483 kPa) |
| Fuel Pro 382 | Al llegar el combustible al tope del elemento en la cubierta transparente, o tras 1 año |

Los intervalos pueden acortarse, **nunca prolongarse**. Después de cambiar filtros, no se debe cebar con el motor de arranque ni con la bomba: el uso prolongado daña el arrancador, la bomba y los inyectores. Se llenan los filtros con combustible limpio antes de montarlos.

## Refrigerante: donde se juega la vida de las camisas

### Qué protege el inhibidor y por qué

Un motor con camisas húmedas, como el Serie 60, tiene el refrigerante en contacto directo con la pared exterior de la camisa. En cada explosión la camisa vibra y, del lado del refrigerante, se forman y colapsan burbujas diminutas. Ese golpe repetido erosiona el metal (cavitación) y lo pica. Es mecánica general del motor, no una afirmación puntual de la guía; lo que sí dice la guía es que los aditivos suplementarios (SCA) previenen "la corrosión, la cavitación corrosiva y la formación de depósitos" y protegen las camisas de cilindro.

El inhibidor, sobre todo el nitrito, forma una película en el metal que amortigua ese daño. Con el uso se consume, y por eso hay que medirlo. La guía advierte que no verificar los SCA a la concentración requerida causa daño grave por corrosión.

<figure class="diagram">
<svg viewBox="0 0 800 330" role="img" aria-label="Escala de decisión según el nitrito medido con tira de prueba: 900 ppm o menos, añadir SCA; entre 900 y 3.200, rango correcto; entre 3.200 y 5.000, sobreinhibido; 5.000 o más, drenar y lavar" style="width:100%;height:auto;font-family:inherit">
<title>Decisión según el nitrito medido en refrigerante con SCA tradicional</title>
<rect x="0" y="0" width="800" height="330" rx="12" fill="#f8fafc"/>
<text x="400" y="30" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f2937">Nitrito medido con tira de prueba: qué hacer</text>
<text x="400" y="54" text-anchor="middle" font-size="14" fill="#1f2937">De menor a mayor concentración</text>
<rect x="24" y="68" width="188" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="1.5"/>
<rect x="212" y="68" width="188" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="1.5"/>
<rect x="400" y="68" width="188" height="60" rx="8" fill="#fed7aa" stroke="#9a3412" stroke-width="1.5"/>
<rect x="588" y="68" width="188" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="1.5"/>
<text x="118" y="105" text-anchor="middle" font-size="16" font-weight="bold" fill="#1f2937">900 ppm o menos</text>
<text x="306" y="105" text-anchor="middle" font-size="16" font-weight="bold" fill="#1f2937">900 a 3.200 ppm</text>
<text x="494" y="105" text-anchor="middle" font-size="16" font-weight="bold" fill="#1f2937">3.200 a 5.000 ppm</text>
<text x="682" y="105" text-anchor="middle" font-size="16" font-weight="bold" fill="#1f2937">5.000 ppm o más</text>
<rect x="24" y="146" width="188" height="124" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<rect x="212" y="146" width="188" height="124" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<rect x="400" y="146" width="188" height="124" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<rect x="588" y="146" width="188" height="124" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<text x="118" y="176" text-anchor="middle" font-size="14" fill="#1f2937">Protección agotada.</text>
<text x="118" y="198" text-anchor="middle" font-size="14" fill="#1f2937">Añadir SCA con la</text>
<text x="118" y="220" text-anchor="middle" font-size="14" fill="#1f2937">dosis indicada.</text>
<text x="306" y="176" text-anchor="middle" font-size="14" fill="#1f2937">Rango correcto.</text>
<text x="306" y="198" text-anchor="middle" font-size="14" fill="#1f2937">No añadir SCA.</text>
<text x="306" y="220" text-anchor="middle" font-size="14" fill="#1f2937">Probar al siguiente</text>
<text x="306" y="242" text-anchor="middle" font-size="14" fill="#1f2937">intervalo.</text>
<text x="494" y="170" text-anchor="middle" font-size="14" fill="#1f2937">Sobreinhibido.</text>
<text x="494" y="192" text-anchor="middle" font-size="14" fill="#1f2937">Drenar en parte y</text>
<text x="494" y="214" text-anchor="middle" font-size="14" fill="#1f2937">rellenar 50/50 con</text>
<text x="494" y="236" text-anchor="middle" font-size="14" fill="#1f2937">glicol sin inhibidor</text>
<text x="494" y="258" text-anchor="middle" font-size="14" fill="#1f2937">(ASTM D4985).</text>
<text x="682" y="170" text-anchor="middle" font-size="14" fill="#1f2937">Exceso problemático.</text>
<text x="682" y="192" text-anchor="middle" font-size="14" fill="#1f2937">Drenar y lavar el</text>
<text x="682" y="214" text-anchor="middle" font-size="14" fill="#1f2937">sistema de inmediato</text>
<text x="682" y="236" text-anchor="middle" font-size="14" fill="#1f2937">y rellenar con</text>
<text x="682" y="258" text-anchor="middle" font-size="14" fill="#1f2937">refrigerante nuevo.</text>
<text x="400" y="302" text-anchor="middle" font-size="13" fill="#1f2937">Solo para refrigerante con SCA tradicional, no OAT. Escala no proporcional. Ilustración propia.</text>
</svg>
<figcaption>Criterio de decisión por nitrito, según la guía del operador 2007. Las tiras de triple acción de ese fabricante no sirven para refrigerante OAT.</figcaption>
</figure>

### Tipos de refrigerante y vida útil

La guía acepta tres familias, todas mezcladas 50/50 con agua:

| Familia | Qué requiere | Vida útil según la guía |
|---|---|---|
| Glicol de etileno o propileno de fórmula especial (bajo silicato, sin fosfato) | Pruebas periódicas y SCA si lo indica la tira | 2 años, 300.000 mi (480.000 km) o 4.000 h, lo que ocurra primero |
| Anticongelante TMC RP-329 "Tipo A" sin fosfato (la guía lo lista así en su Tabla 14) | Igual: tira de prueba y SCA según resultado | Hasta la reparación general, con precarga y filtro de liberación por necesidad en ella |
| OAT (tecnología de ácido orgánico) | Extensor a 300.000 mi (480.000 km), 2 años o 5.000 h, lo que ocurra primero | 4 años, 600.000 mi (960.000 km) o 10.000 h, lo que ocurra primero |

Reglas que la guía repite con énfasis:

- **No mezclar OAT con refrigerante convencional**: no hay daño inmediato, pero se pierde la ventaja de larga vida. Tampoco SCA tradicional en OAT, ni extensor en refrigerante convencional.
- **No añadir SCA a un anticongelante de fórmula especial** en el llenado inicial: puede formar sedimentos.
- Concentración de anticongelante entre 33 % y 67 %. Por encima de 67 % empeora la transferencia de calor; por debajo de 33 % protege poco contra congelamiento y corrosión.
- Prohibidos: refrigerantes automotrices (alto fosfato y silicato), con fosfato, con cromato, con base metanol, para sistemas HVAC, aceite soluble y selladores. El aceite soluble, por ejemplo, empeora la transferencia de calor.

### Intervalos de prueba

| Servicio | Prueba del inhibidor (Tabla 23 de la guía) |
|---|---|
| Camiones y autobuses de pasajeros en carretera | Cada 20.000 mi (32.000 km) |
| Reparto, viajes cortos y emergencia | Cada 6.000 mi (9.600 km) o 3 meses, lo que ocurra primero |

Un detalle que debe conocer: **la guía no es consistente** en un solo punto. El intervalo para enviar una muestra al laboratorio aparece como cada 3 años, 300.000 mi (480.000 km) o 6.000 h en la Tabla 14; como 2 años, 300.000 mi o 10.000 h en la sección de procedimientos de prueba; y como 3 años, 300.000 mi o 5.000 h en el resumen. Ante esa diferencia, use la publicación que corresponda a su motor y, si duda, el criterio más conservador.

### Calidad del agua

Un refrigerante bien formulado se arruina con agua mala. Lo preferible es agua destilada, de ósmosis inversa o desionizada. Si usa agua de red, la guía fija límites máximos para el agua de reposición:

| Parámetro | Máximo |
|---|---|
| Cloruros | 40 ppm |
| Sulfatos | 100 ppm |
| Sólidos disueltos totales | 340 ppm |
| Dureza total (Mg y Ca) | 170 ppm |

Los cloruros, sulfatos y la dureza forman incrustaciones y corrosión que terminan en falla de la bomba de agua y sobrecalentamiento. Para comparar con otro fabricante, vea el [sistema de enfriamiento del Cummins ISX](/posts/sistema-enfriamiento-cummins/).

### Límites de laboratorio (glicol de fórmula especial, 50/50)

Si se usa análisis químico en lugar de tira, la guía da estos rangos: boro 125 a 500 ppm, nitrito 900 a 3.200 ppm, nitrato 200 a 1.000 ppm, silicio 50 a 250 ppm, fósforo 0 ppm y pH 8,0 a 11,0. El fósforo en cero tiene sentido: es la señal de un refrigerante con fosfato, que el fabricante rechaza por los depósitos que forma.

### Filtros de refrigerante y otros puntos

En sistemas que no son OAT, los filtros de refrigerante liberan SCA gradualmente y se reemplazan al año, a 120.000 mi (192.000 km) o a 2.000 h. No se instalan "automáticamente": la necesidad la decide el resultado de nitrito. El termostato y los sellos se reemplazan cada 240.000 mi (384.000 km) o 24 meses, y el núcleo del radiador se inspecciona cada 30.000 mi (48.000 km), 12 meses o 300 h en aplicaciones industriales. Cuando el motor se sobrecalienta con nivel correcto, la guía sugiere limpieza con desincrustante y lavado a contraflujo en taller.

## Correas y mangueras

**Correas.** Ni muy tensas ni muy flojas. Una correa tensa carga cojinetes del cigüeñal, ventilador y alternador, y en casos extremos puede contribuir a rotura de cigüeñal; una floja patina y daña accesorios. La guía da valores con medidor de tensión:

| Accionamiento | Tensión (guía 2007) |
|---|---|
| Ventilador, una correa | 80 a 100 lbf (356 a 445 N) |
| Ventilador, 2 o 3 correas | 60 a 80 lbf (267 a 356 N) |
| Alternador, dos correas V de 1/2 pulg. | 125 lbf nueva (556 N) y 100 lbf usada (445 N) |

Sin medidor, la guía propone una presión firme con el pulgar a medio recorrido que hunda la correa de 13 a 19 mm (0,50 a 0,75 pulg.). Los motores con alternador 50 DN y correa PowerBand usan tensor automático sin ajuste. Reemplazo: cada **2.000 h o 100.000 mi (160.000 km)**, siempre el juego completo. Las tablas de la guía marcan el reemplazo en otro punto de su calendario, así que lo prudente es seguir el plazo más corto entre ambos.

**Mangueras.** Una manguera tiene vida finita. Inspección detallada al menos cada 500 h (1.000 h en las de combustible resistente al fuego y aceite lubricante) o anualmente; todas deben reemplazarse en la reparación general o tras un máximo de 5 años. Se revisan a diario como parte del chequeo previo: roce con múltiples de escape, abrazaderas flojas, grietas, partes blandas o endurecidas. Una fuga de combustible o de refrigerante rara vez avisa antes de volverse una avería.

## Filtro de aire y restricción

Un filtro de aire obstruido ahoga al motor: sube el consumo, cae el rendimiento y se acorta la vida del motor. Por eso la guía fija un tope numérico: la restricción de admisión **no debe exceder 20 pulg. H₂O (5,0 kPa)** en ninguna condición de operación.

- Inspeccionar el elemento cada 15.000 mi (24.000 km), o antes si hay mucho polvo.
- Reemplazar el elemento seco al año o al alcanzar la restricción máxima, lo que ocurra primero. Los indicadores de restricción ayudan a decidirlo.
- Revisar a diario tuberías, abrazaderas y protectores de toda la admisión: una fuga deja entrar polvo sin pasar por el filtro.
- Los elementos de papel seco no se reutilizan salvo que el método de limpieza elimine la obstrucción sin dañarlos, siguiendo al fabricante del filtro.

El polvo que se cuela es abrasivo y termina en anillos y camisas; para ver cómo se desgastan, revise [pistones, anillos y camisas](/posts/pistones-anillos-camisas-motor-diesel-desgaste/).

## Tabla consolidada de intervalos (camión o autobús en carretera)

Resumen de la guía 2007 con las unidades originales y conversiones. Es una referencia de lectura rápida, no un programa para copiar.

| Elemento | Intervalo | Acción |
|---|---|---|
| Aceite y filtros de aceite | 15.000 mi (24.000 km) | Reemplazar |
| Filtros de combustible | 15.000 mi (24.000 km) o 6 meses | Reemplazar |
| Filtro de aire | 15.000 mi (24.000 km); reemplazo al año o a 20 pulg. H₂O | Inspeccionar / reemplazar |
| Posttratamiento | Cada 6 meses o 15.000 mi (24.000 km) | Inspeccionar |
| Correas | Tensión cada 100 h o 6.000 mi (10.000 km); reemplazo a 2.000 h o 100.000 mi | Inspeccionar / reemplazar |
| Mangueras | Cada 500 h o anual; reemplazo a 5 años | Inspeccionar / reemplazar |
| Nitrito del refrigerante | 20.000 mi (32.000 km) | Probar y dosificar |
| Drenaje de agua del tanque de combustible | 30.000 mi (48.000 km) | Drenar |
| Radiador (exterior) | 30.000 mi (48.000 km) o 12 meses | Inspeccionar y limpiar |
| Termostato y sellos | 240.000 mi (384.000 km) o 24 meses | Reemplazar |
| Juego de válvulas y altura de inyectores | Primer ajuste a 60.000 mi (96.000 km) o 24 meses | Medir y ajustar |
| Respiradero del cárter | 100.000 a 120.000 mi (160.000 a 192.000 km) | Lavar el bloque de malla |
| Presión de aceite (si hay luces en vez de manómetro) y del cárter | Cada 60.000 mi (96.000 km) | Verificar y anotar |

Para vehículos de emergencia y grúas los intervalos son otros, mucho más cortos en aceite (300 h o 250 h respectivamente), como vio en las tablas anteriores: la aplicación define el programa.

## Qué hacer con todo esto

Tres ideas para llevarse. Primero, el 2007 cambió las reglas: aceite CJ-4 y ULSD no son preferencias, protegen el posttratamiento. Segundo, el refrigerante se mide, no se supone: el nitrito dice cuándo añadir y cuándo no. Tercero, cada elemento del programa tiene un motivo mecánico: filtros que no se alargan, correas que se reemplazan en juego, restricción de aire con tope numérico. Para comparar con una guía más general de afinación, vea [mantenimiento y afinamiento de motores diesel](/posts/guia-mantenimiento-afinamiento-motores-diesel/), y para el contexto regulatorio, la [historia de las normas EPA para diesel](/posts/historia-normas-epa-diesel/). Cuando el motor encienda lámparas de protección o registre códigos, consulte nuestra guía hermana: [DDEC VI del Serie 60: códigos y protección del motor](/posts/ddec-vi-detroit-serie-60-codigos-y-proteccion-motor/).

**Fuentes:** *Guía del operador 2007 del motor de la Serie 60* (Detroit Diesel, publicación 6SE607), páginas impresas 73 a 144 y 164 a 167, disponible en [mecanicoautomotriz.org](https://www.mecanicoautomotriz.org/662-manual-mecanica-automotriz-detroit-diesel-serie-60).

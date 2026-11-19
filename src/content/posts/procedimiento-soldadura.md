---
title: "Procedimiento de soldadura: WPS, PQR, precalentamiento y defectos"
published: 2024-08-14
updatedAt: 2026-11-19
draft: false
featured: false
description: "Qué son el WPS y el PQR, variables esenciales, procesos SMAW, GMAW y FCAW, precalentamiento, defectos e inspección, y cómo reparar con soldadura en equipo pesado."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "soldadura"
  - "wps-pqr"
  - "precalentamiento"
  - "defectos-de-soldadura"
  - "reparacion-de-equipo-pesado"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/soldadura
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Cuál es la diferencia entre WPS y PQR?"
    a: "El PQR (registro de calificación del procedimiento) es el documento que recoge lo que realmente se soldó y los resultados de los ensayos de una probeta: parámetros, materiales, ensayos de tracción, doblado, impacto, etc. El WPS (especificación del procedimiento de soldadura) es la instrucción que el soldador sigue en obra, con rangos permitidos para cada variable, y está respaldado por uno o varios PQR. Sin PQR que lo sustente, un WPS no está calificado."
  - q: "¿Cuándo hay que recalificar un procedimiento?"
    a: "Cuando cambia una variable esencial: proceso de soldadura, grupo de material base, rango de espesor, tipo y clasificación del metal de aporte, gas de protección o su caudal, temperatura mínima de precalentamiento o diseño de junta, entre otras. La lista exacta y los límites los fija el código aplicable (por ejemplo AWS D1.1, ASME IX, API 1104). Cambios en variables no esenciales solo requieren revisar el WPS."
  - q: "¿Por qué se precalienta el acero antes de soldar?"
    a: "Para enlentecer el enfriamiento de la zona afectada por el calor. Un enfriamiento rápido en aceros de más carbono o aleados produce estructuras duras y frágiles (martensita) y deja escapar poco hidrógeno, lo que favorece la fisuración en frío. El precalentamiento depende del carbono equivalente, el espesor, el hidrógeno del proceso y la restricción de la junta; se toma del código o del procedimiento calificado, no de la intuición."
  - q: "¿Cómo se repara una grieta en un componente de equipo pesado?"
    a: "Se identifica el material, se limpia, se determina el extremo de la grieta con ensayo no destructivo, y se hace un agujero de parada o se continúa unos milímetros más allá del extremo. Se elimina la grieta completa por esmerilado o gubiado (arco con carbón), se comprueba con líquidos penetrantes o partículas magnéticas, se precalienta y se suelda con aporte de bajo hidrógeno, con enfriamiento lento. Si la pieza es crítica para la seguridad, se consulta al fabricante."
  - q: "¿Qué precauciones se toman antes de soldar en una máquina con electrónica?"
    a: "Se desconecta el interruptor general de la batería y los cables de la batería, se desconectan los conectores de las unidades de control electrónico y se coloca la pinza de masa lo más cerca posible de la soldadura, de modo que la corriente no pase por rodamientos, cilindros hidráulicos o cableado. También se retiran materiales inflamables, se protegen mangueras y sellos y se tiene extintor a mano."
related:
  - cordones-soldadura
  - fracturas-un-analisis-de-fallas-en-maquinaria-pesada
  - analisis-de-fallas-componentes-maquinaria-pesada
---

Una soldadura que se ve bien por fuera no es necesariamente una soldadura
sana. Lo que la hace confiable es que se haya hecho con un procedimiento
**calificado**, con soldadores calificados, materiales controlados e
inspección acorde con el riesgo. Este artículo explica ese sistema, cómo
elegir el proceso, cuándo precalentar, qué defectos buscar y cómo se aplica
todo a la reparación de equipo pesado.

## WPS, PQR y calificación del soldador

Son tres documentos distintos que se confunden con frecuencia.

| Documento | Qué es | Quién lo usa |
| --- | --- | --- |
| **WPS** (especificación del procedimiento) | Instrucción con rangos permitidos: proceso, material, aporte, corriente, tensión, velocidad, gas, precalentamiento, secuencia | El soldador en obra |
| **PQR** (registro de calificación) | Resultado real de soldar y ensayar una probeta: parámetros usados y resultados | Ingeniería y calidad, como respaldo del WPS |
| **WPQ/WQR** (calificación del soldador) | Prueba que demuestra que el soldador puede obtener una soldadura sana con ese procedimiento y posición | Inspector y cliente |

El flujo es: se define un WPS preliminar, se suelda una probeta con él, se
ensaya (tracción, doblado, impacto y macrografía según el código) y, si cumple,
se documenta el PQR que valida el WPS. Después cada soldador demuestra su
habilidad en una prueba propia, en la posición y con el proceso que usará.

Los códigos más usados son AWS D1.1 (estructuras de acero), ASME IX
(recipientes y tuberías) y API 1104 (oleoductos). Cada uno define sus propias
variables y límites; el procedimiento aplicable es el del código del contrato.

## Variables esenciales

Una **variable esencial** es aquella cuyo cambio puede alterar las propiedades
mecánicas de la unión, y por eso obliga a recalificar. En términos generales
incluye:

- el proceso de soldadura;
- el material base (grupo, grado, composición);
- el rango de espesor;
- el tipo, clasificación y fabricante del metal de aporte, y el fundente o el
  gas de protección y su caudal;
- el diseño de la junta;
- la posición y dirección de soldadura (por ejemplo, ascendente o descendente);
- la temperatura de precalentamiento y entre pasadas;
- el aporte térmico.

El **aporte térmico** (heat input) se calcula con la fórmula
`J/mm = (V × A × 60) ÷ (velocidad en mm/min × 1000)` en kJ/mm, o `J = 60VA/S`
en J/pulg con la velocidad S en pulg/min. Un aporte alto deja grano grueso y
baja tenacidad; uno muy bajo enfría rápido y endurece. Por eso el WPS fija un
rango.

Para aplicaciones donde se exige un nivel de tenacidad (por ejemplo tuberías
en servicio frío), el procedimiento puede requerir **ensayos CTOD** (apertura de
la punta de fisura), con probetas orientadas para que el entalle atraviese la
zona afectada por el calor de mayor dureza, y con criterio de aceptación
fijado por el estándar. El detalle de esos criterios alternativos está en
[estándares alternativos de aceptación para cordones de soldadura](/posts/cordones-soldadura/).

## Procesos más usados en mantenimiento

| Proceso | Descripción | Ventajas | Limitaciones |
| --- | --- | --- | --- |
| **SMAW** (electrodo revestido) | Arco entre electrodo con revestimiento y la pieza; el revestimiento protege el baño | Equipo simple y portátil, todas las posiciones, viento tolerable | Productividad menor, requiere remover escoria, habilidad del soldador |
| **GMAW / MIG-MAG** (alambre macizo con gas) | Alambre continuo con gas de protección | Alta productividad, poca escoria | Sensible al viento y a la limpieza, riesgo de falta de fusión |
| **FCAW** (alambre tubular) | Alambre con núcleo de fundente, con o sin gas | Buena penetración y velocidad, bueno en exterior (autoprotegido) | Humo, escoria, costo del consumible |
| **GTAW / TIG** | Electrodo de tungsteno, aporte aparte | Calidad y control, para espesores finos y raíces | Lento, exige limpieza y destreza |

En reparación de maquinaria el proceso más frecuente es el **SMAW con
electrodos de bajo hidrógeno** (por ejemplo, clasificaciones tipo E7018) por su
capacidad de dar uniones tenaces y por su facilidad de uso en campo, y el
**FCAW** donde hay que rellenar mucho volumen. Los electrodos de bajo
hidrógeno deben mantenerse secos en el horno o estuche térmico, siguiendo las
indicaciones del fabricante, porque la humedad del revestimiento introduce
hidrógeno en el baño y favorece la fisuración.

## Precalentamiento y temperatura entre pasadas

El precalentamiento reduce la velocidad de enfriamiento y permite que el
hidrógeno salga de la unión. Depende de:

- **El carbono equivalente (CE)** del acero. Una fórmula usual (IIW) es
  CE = C + Mn/6 + (Cr + Mo + V)/5 + (Ni + Cu)/15. A mayor CE, mayor
  susceptibilidad a endurecerse y fisurarse.
- **El espesor**: a mayor espesor, mayor extracción de calor.
- **El nivel de hidrógeno del proceso**: bajo hidrógeno exige menos
  precalentamiento.
- **La restricción de la junta**: piezas rígidas o fundiciones fisuran más.

La temperatura se toma de las tablas del código o del WPS, no se improvisa. Se
mide con lápices termo-indicadores o termómetro de contacto a una distancia
de la junta en todo el espesor, y se mantiene como **temperatura mínima entre
pasadas**; la máxima también se limita para no degradar las propiedades. Tras
soldar, el enfriamiento debe ser lento (manta térmica o cubrir la pieza) en
aceros de mayor sensibilidad. En aceros templados y revenidos de alta
resistencia, como los usados en cuchillas y cucharones, el exceso de calor
también ablanda la zona afectada: se respetan las temperaturas máximas del
fabricante del acero.

## Defectos de soldadura

| Defecto | Aspecto | Causa común | Prevención |
| --- | --- | --- | --- |
| Porosidad | Poros o cavidades | Humedad, gas insuficiente, suciedad, aceite, pintura | Limpiar, secar consumibles, controlar el gas |
| Inclusiones de escoria | Escoria atrapada entre pasadas | Limpieza deficiente entre pasadas, mala técnica | Remover escoria, ángulo correcto |
| Falta de fusión | Metal sin unir a la pared o entre pasadas | Poca corriente, velocidad alta, mala técnica | Ajustar parámetros, limpiar, manipulación |
| Penetración incompleta | Raíz sin fundir | Talón excesivo, abertura corta, amperaje bajo | Preparación y abertura según WPS |
| Socavación | Surco en el borde del cordón | Corriente alta, arco largo | Ajustar parámetros |
| Fisuras en caliente | Grieta en el centro del cordón | Cordón demasiado profundo y estrecho, impurezas | Perfil adecuado, aporte correcto |
| Fisuras en frío (por hidrógeno) | Grietas en la zona afectada, aparecen horas después | Hidrógeno, estructura dura, restricción, poco precalentamiento | Bajo hidrógeno, precalentar, enfriar lento |
| Salpicaduras y quemaduras de arco | Cráteres fuera de la unión | Mal contacto de la masa, golpes de arco | Cuidado al cebar el arco; las quemaduras de arco pueden crear zonas duras y frágiles |

Las imperfecciones **planas** (grietas, falta de fusión, socavación) son mucho
más peligrosas que las **volumétricas** (poros, escoria), porque concentran el
esfuerzo en una punta aguda. Por eso los criterios de aceptación suelen ser
más estrictos para las planas.

## Inspección y ensayos

| Método | Detecta | Comentario |
| --- | --- | --- |
| Visual (VT) | Defectos superficiales, perfil, socavación | Primero y siempre; antes, durante y después de soldar |
| Líquidos penetrantes (PT) | Fisuras abiertas a la superficie | Rápido, para cualquier material |
| Partículas magnéticas (MT) | Fisuras superficiales y cercanas a la superficie | Solo aceros ferromagnéticos |
| Radiografía (RT) | Defectos volumétricos internos | Poco sensible a fisuras planas mal orientadas |
| Ultrasonido (UT) | Defectos internos planos y volumétricos | Mide también la altura de la imperfección |

Hay que dimensionar la imperfección (longitud, altura y profundidad) con
técnicas adecuadas antes de aceptarla o rechazarla. La radiografía
convencional sirve para medir la longitud pero no determina por sí sola la
altura de una grieta o falta de fusión. Debe registrarse el tipo,
ubicación y dimensiones de las imperfecciones junto con los registros de los
ensayos.

## Reparación con soldadura en equipo pesado

Chasis, brazos, bastidores y cucharones sufren fisuras por fatiga. Para
repararlas con criterio:

1. **Identificar el material.** Acero estructural, acero de alta
   resistencia, acero fundido o fundición: cada uno requiere otro aporte y
   otro precalentamiento. Si hay duda, se consulta al fabricante.
2. **Localizar la grieta completa.** Limpiar y aplicar líquidos penetrantes o
   partículas magnéticas; la grieta casi siempre es más larga de lo visible.
3. **Detener la grieta.** Perforar un agujero de parada en el extremo, o
   eliminarla hasta material sano.
4. **Eliminar el defecto.** Esmerilar o usar gubiado de arco, formando una
   ranura en U o V con ángulo suficiente para acceder a la raíz. Verificar con
   PT o MT que no quedan restos.
5. **Precalentar** según el material y mantener la temperatura entre pasadas.
6. **Soldar** con aporte de bajo hidrógeno y secuencia de pasadas que minimice
   la distorsión; no oscilar en exceso.
7. **Enfriar lento** y, tras un tiempo adecuado cuando el material es
   sensible, inspeccionar de nuevo.
8. **Reforzar si aplica**, siguiendo el criterio del fabricante, pero sin
   crear puntos duros que concentren esfuerzos.

Antes de soldar en una máquina:

- Desconectar la batería y los conectores de las unidades de control
  electrónico; poner la masa cerca de la soldadura.
- Proteger mangueras, sellos, cilindros hidráulicos y rodamientos del calor y
  de las salpicaduras; vaciar y limpiar los depósitos de combustible o aceite
  cercanos.
- Trabajar con permiso de trabajo en caliente, extintor y ventilación.

Tras una reparación de una fractura en un componente estructural, conviene
analizar por qué falló para no repetir la causa; ver
[análisis de fracturas en maquinaria pesada](/posts/fracturas-un-analisis-de-fallas-en-maquinaria-pesada/) y
[análisis de fallas en componentes](/posts/analisis-de-fallas-componentes-maquinaria-pesada/).

## Resumen de buenas prácticas

- Soldar solo con un WPS calificado y soldadores calificados.
- Verificar material base y consumibles; guardar el bajo hidrógeno seco.
- Controlar precalentamiento y temperatura entre pasadas con instrumento.
- Limpiar entre pasadas y mantener el perfil del cordón.
- Inspeccionar en cada etapa y registrar los resultados.
- Documentar la reparación: ubicación, procedimiento, inspección.

---
title: "Fallas de rodamientos: causas, diagnóstico y lubricación"
published: 2026-11-27
draft: false
featured: false
description: "Por qué los rodamientos fallan antes de su vida nominal: cargas estáticas y dinámicas, lubricación, contaminación, modos de falla y cómo detectarlos a tiempo."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "fallas-de-rodamientos"
  - "rodamientos"
  - "mantenimiento-predictivo"
  - "lubricacion"
  - "analisis-de-vibraciones"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/mantenimiento-predictivo/fallas-de-rodamientos-causas-diagnostico-lubricacion
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Por qué un rodamiento falla antes de cumplir su vida nominal?"
    a: "Casi nunca es por desgaste natural del acero. El material del curso de Tecsup reparte las fallas prematuras entre lubricación incorrecta (36 %), reemplazos fuera de tiempo (34 %), maltrato en almacén, transporte o montaje (16 %) y contaminación por sellado deficiente (14 %). Es decir, la mayoría de las causas se pueden controlar desde el mantenimiento."
  - q: "¿Qué es el falso brinelado y cómo se evita?"
    a: "Son marcas brillantes o corroídas separadas a la distancia entre elementos rodantes, producidas cuando el rodamiento vibra estando detenido, por ejemplo en un camión o en un equipo de reserva junto a otro que funciona. Se previene trabando el eje durante el transporte, aislando bases de la vibración y girando a mano los equipos de reserva de forma periódica."
  - q: "¿Sirve medir la temperatura para detectar una falla de rodamiento?"
    a: "Sirve, pero avisa tarde. La temperatura del alojamiento sube de forma clara cuando el daño ya es avanzado o la lubricación ya falló. El análisis de vibraciones en alta frecuencia y el ultrasonido detectan el defecto mucho antes, cuando todavía hay margen para planificar el cambio. Lo recomendable es combinar ambas mediciones y vigilar la tendencia, no un valor aislado."
  - q: "¿Engrasar más alarga la vida del rodamiento?"
    a: "No. El exceso de grasa obliga a los elementos rodantes a batirla, lo que eleva la temperatura, degrada el lubricante y puede dañar los sellos. La cantidad y la frecuencia correctas dependen del tamaño, la velocidad y la temperatura de trabajo, y se obtienen del fabricante del rodamiento o del manual del equipo."
  - q: "¿Qué hacer cuando el análisis ya detectó un defecto en el rodamiento?"
    a: "El rodamiento dañado no se recupera: el curso recuerda que el deterioro progresa de forma exponencial. Lo que corresponde es vigilar la evolución con mediciones más frecuentes, programar el cambio antes de la falla y, al desmontarlo, examinar las pistas para saber qué lo dañó. Si no se corrige la causa, el repuesto nuevo fallará igual."
sources:
  - title: "Curso: equipos rotatorios, fallas, causas principales y problemas en rodamientos — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/6767-curso-equipos-rotatorios-fallas-causas-principales-rodamientos-problemas-tipos"
related:
  - componentes-clave-mantenimiento-predictivo
  - analisis-vibraciones-chumaceras
  - grasas-lubricantes-tipos-espesantes-grado-nlgi-seleccion
---

En una bomba, un ventilador, un motor eléctrico o el mando de una
transportadora, todo lo que ocurre en el rotor termina en el mismo lugar: los
**cojinetes**. Un desbalance, una desalineación o una resonancia no se quedan
en el eje; se transmiten como carga adicional a los puntos de apoyo. Por eso,
quien quiere alargar la vida de una máquina rotativa tiene que vigilar sus
cojinetes, ya sean de rodadura (rodamientos) o de deslizamiento (bocinas).

Esta guía parte del material de la unidad 2 del curso de mantenimiento
predictivo de Tecsup, "Fallas en los equipos rotatorios", que es breve y va al
grano: por qué fallan los rodamientos antes de tiempo y qué cadena de causas
lleva a una falla catastrófica. A ese esquema le sumamos conocimiento general
de ingeniería de rodamientos: cómo se ven los modos de falla más comunes en
las pistas y cómo se detectan con vibraciones, temperatura y análisis de
aceite. Para tolerancias, ajustes y cantidades de grasa, prevalece el
manual del equipo y el catálogo del fabricante del rodamiento.

Si busca el panorama general de las técnicas predictivas, empiece por
[vibración, aceite, termografía y ultrasonido](/posts/componentes-clave-mantenimiento-predictivo/);
aquí nos enfocamos en el rodamiento.

## Un rodamiento no debería gastarse

El curso plantea una idea que conviene tener presente: técnicamente, un
rodamiento debería tener **vida casi ilimitada**, siempre que la carga sea
pequeña y exista una película lubricante libre de contaminantes entre los
elementos rodantes y las pistas. En la práctica esas condiciones rara vez se
cumplen, y de ahí salen dos tareas de mantenimiento:

1. **Cuidar el lubricante.** El curso lo resume en cuatro palabras: mantenerlo
   **limpio, frío, seco y en la proporción adecuada**.
2. **Reducir la carga dinámica.** No se trata de bajar la carga de trabajo de
   la máquina, sino de eliminar todas las fuentes de carga *adicional*:
   desbalance, desalineación, holguras, resonancia. Toda carga extra se
   traduce en más vibración, y según el curso, si se logra reducir la
   vibración, la vida de la máquina puede aumentar **hasta ocho veces**.

**Aclaración a la fuente.** La expresión "vida infinita" del curso hay que
leerla como una simplificación. Los fabricantes calculan la vida de un
rodamiento con métodos normalizados que consideran la carga, la velocidad, la
lubricación y la contaminación; con cargas bajas y lubricante limpio esa vida
calculada puede ser muy larga, pero sigue siendo un valor estadístico. La
**vida nominal** es la que alcanza o supera el 90 % de un grupo de rodamientos
idénticos trabajando en las mismas condiciones.

El curso añade una advertencia que define la estrategia predictiva: cuando se
detecta que un rodamiento va a fallar, **ya no se puede hacer nada por ese
rodamiento**. El daño progresa de forma exponencial, así que lo único que
queda es programar su cambio "justo antes de que falle" y corregir la causa.

## Por qué fallan antes de tiempo

Según el material de Tecsup, la gran mayoría de rodamientos no llega a su vida
esperada, y las razones se reparten así:

| Causa | Proporción | Qué hay detrás |
| --- | --- | --- |
| Lubricación incorrecta | 36 % | Lubricante mal especificado o mal aplicado: poco, demasiado o el tipo equivocado |
| Reemplazo fuera de tiempo | 34 % | Fatiga por un mal programa de mantenimiento, o cambio programado de rodamientos que aún estaban sanos |
| Maltrato | 16 % | Montaje deficiente, mala manipulación en almacén y transporte |
| Contaminación | 14 % | Polvo, agua o producto del proceso que entran por sellos inadecuados |

La categoría del 34 % mezcla dos situaciones opuestas, y conviene separarlas.
Por un lado, el rodamiento que se deja trabajar sin vigilancia hasta que falla
de golpe. Por el otro, el que se cambia por calendario cuando todavía estaba
en buen estado, lo que es dinero perdido y, además, un riesgo: cada montaje es
una oportunidad de dañar el rodamiento nuevo. Las dos se resuelven con lo
mismo, que es cambiar según la **condición** medida y no según la fecha.

Fíjese en que ninguna de las cuatro causas es "el rodamiento era malo". Todas
se controlan desde el almacén, el taller y el plan de lubricación.

## Dos familias de causas: mecánicas y de lubricación

El curso agrupa las causas de falla de los cojinetes en dos ramas que terminan
en el mismo punto: la ruptura de la película lubricante.

<figure class="diagram">
<svg viewBox="0 0 760 444" role="img" aria-label="Árbol de causas de falla en cojinetes: la rama mecánica, con cargas estáticas y dinámicas que producen exceso de carga, calor y desgaste de sellos, y la rama de lubricación, con contaminación externa e interna; ambas llevan a la ruptura de la película lubricante y a la falla catastrófica" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="flecha-rod" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker>
</defs>
<rect x="0" y="0" width="760" height="444" rx="14" fill="#f8fafc"/>
<text x="380" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Causas de falla en los cojinetes</text>
<rect x="310" y="46" width="140" height="36" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<text x="380" y="69" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Cojinetes</text>
<g stroke="#475569" stroke-width="1.8" fill="none" marker-end="url(#flecha-rod)">
<path d="M370 82 L210 108"/>
<path d="M390 82 L550 108"/>
<path d="M180 146 L115 170"/>
<path d="M220 146 L285 170"/>
<path d="M540 146 L480 170"/>
<path d="M580 146 L655 170"/>
<path d="M109 234 L180 256"/>
<path d="M291 234 L220 256"/>
<path d="M230 306 L300 328"/>
<path d="M477 234 L440 328"/>
<path d="M659 234 L505 328"/>
<path d="M380 378 L380 394"/>
</g>
<rect x="120" y="110" width="160" height="36" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<text x="200" y="133" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Mecánica</text>
<rect x="480" y="110" width="160" height="36" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="560" y="133" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Lubricación</text>
<g fill="#f1f5f9" stroke="#0369a1" stroke-width="1.5">
<rect x="24" y="172" width="170" height="62" rx="8"/>
<rect x="206" y="172" width="170" height="62" rx="8"/>
</g>
<g fill="#f1f5f9" stroke="#b45309" stroke-width="1.5">
<rect x="392" y="172" width="170" height="62" rx="8"/>
<rect x="574" y="172" width="170" height="62" rx="8"/>
</g>
<g text-anchor="middle" fill="#0f172a">
<text x="109" y="192" font-size="13" font-weight="700">Cargas estáticas</text>
<text x="109" y="209" font-size="11">almacén, transporte</text>
<text x="109" y="224" font-size="11">y montaje deficientes</text>
<text x="291" y="192" font-size="13" font-weight="700">Cargas dinámicas</text>
<text x="291" y="209" font-size="11">desbalance, desalineación</text>
<text x="291" y="224" font-size="11">y resonancia</text>
<text x="477" y="192" font-size="13" font-weight="700">Externa</text>
<text x="477" y="209" font-size="11">suciedad y agua</text>
<text x="477" y="224" font-size="11">filtros y sellos deficientes</text>
<text x="659" y="192" font-size="13" font-weight="700">Interna</text>
<text x="659" y="209" font-size="11">partículas de desgaste</text>
<text x="659" y="224" font-size="11">agua por condensación</text>
</g>
<rect x="110" y="258" width="180" height="48" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
<text x="200" y="278" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Exceso de carga</text>
<text x="200" y="295" text-anchor="middle" font-size="11" fill="#0f172a">calor, desgaste de sellos</text>
<rect x="220" y="330" width="320" height="48" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>
<text x="380" y="350" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Ruptura de la película lubricante</text>
<text x="380" y="367" text-anchor="middle" font-size="11" fill="#0f172a">contacto metal con metal y más calor</text>
<rect x="290" y="396" width="180" height="34" rx="8" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="380" y="418" text-anchor="middle" font-size="14" font-weight="700" fill="#7f1d1d">Falla catastrófica</text>
</svg>
<figcaption>Árbol de causas de falla en cojinetes, redibujado a partir de la figura 2.2 del curso de Tecsup: las dos ramas convergen en la ruptura de la película lubricante. Ilustración propia.</figcaption>
</figure>

### Rama mecánica: cargas estáticas y dinámicas

Los problemas mecánicos nacen de **cargas adicionales** sobre el rodamiento,
y el curso distingue dos tipos.

- **Cargas estáticas.** Aparecen antes de que la máquina arranque, por un
  almacenamiento, un transporte o un montaje inadecuados. El rodamiento
  empieza a trabajar ya dañado, "solamente por el hecho de haber sido mal
  manipulado", como dice el curso (que usa "rodaje" como sinónimo de
  rodamiento, uso habitual en Perú).
- **Cargas dinámicas.** Aparecen con el equipo en marcha y se deben a
  problemas de la máquina: desbalance, desalineamiento, resonancia, entre
  otros. Generan un exceso de vibración que absorbe el rodamiento, y el curso
  indica que por esta vía la vida nominal se puede reducir **hasta ocho
  veces**.

El exceso de carga genera calor con rapidez, desgasta los sellos y favorece la
ruptura de la película de lubricante. Cuando la película se rompe hay
contacto metal con metal, se produce todavía más calor y el proceso se
acelera hasta la falla catastrófica. Para atacar las dos fuentes dinámicas
más frecuentes, vea las guías de
[desbalanceo](/posts/desbalanceo-mantenimiento-predictivo/) y de
[desalineación](/posts/desalineacion-tecnicas-prevencion/).

### Rama de lubricación: contaminación externa e interna

Los problemas de lubricación tienen su origen en dos fuentes:

- **Externas.** La suciedad que ingresa al sistema actúa como abrasivo y
  desgasta los componentes que giran. El **agua** es especialmente dañina:
  causa corrosión, reduce las propiedades del lubricante (sobre todo su
  capacidad de carga), favorece la concentración de ácidos y emulsiona el
  aceite, lo que dificulta su flujo. El curso suma otras vías de entrada: mal
  uso de filtros, mal almacenamiento del lubricante, tanques descuidados,
  mezcla de lubricantes con aditivos incompatibles y el propio proceso
  productivo, que puede aportar sólidos, líquidos o gases.
- **Internas.** Las partículas de desgaste que genera la propia máquina, que
  son abrasivas, y el agua que se condensa dentro del lubricante.

Las dos fuentes terminan igual que la rama mecánica: película rota, contacto
metal con metal y falla. Si trabaja con grasa, la
[guía de grasas lubricantes](/posts/grasas-lubricantes-tipos-espesantes-grado-nlgi-seleccion/)
explica por qué no deben mezclarse espesantes distintos; si trabaja con aceite,
la de [intervalos de cambio y contaminación](/posts/intervalos-cambio-contaminacion-aceite/)
detalla cómo controlar partículas y agua.

## Cómo se ven las fallas en las pistas

El curso de Tecsup se queda en las causas. Al desmontar un rodamiento dañado,
lo que se ve en pistas, elementos rodantes y jaula permite saber cuál de esas
causas actuó. Los modos de falla más conocidos están clasificados en normas
internacionales y en las guías de los fabricantes; estos son los que más se
repiten en campo:

| Modo de falla | Cómo se ve | Causa típica | Rama del árbol |
| --- | --- | --- | --- |
| Descascarado por fatiga | Desprendimiento de escamas de material en la zona cargada | Fin de vida normal, o fatiga adelantada por sobrecarga o película insuficiente | Mecánica o lubricación |
| Desgaste abrasivo | Superficies opacas, holgura interna aumentada | Partículas en el lubricante, sellos deficientes | Lubricación externa o interna |
| Marcas por partículas | Pequeñas abolladuras repartidas por la pista | Partículas duras atrapadas entre rodillo y pista | Lubricación |
| Brinelado verdadero | Hendiduras a la distancia entre elementos rodantes | Golpes en el montaje o sobrecarga con el equipo detenido | Mecánica estática |
| Falso brinelado | Marcas brillantes o rojizas a la distancia entre elementos rodantes, sin deformación del material | Vibración con el rodamiento detenido (transporte, equipos de reserva) | Mecánica estática |
| Corrosión por humedad | Manchas oscuras o picaduras, a menudo al paso de los elementos | Agua en el lubricante, almacenamiento húmedo | Lubricación externa o interna |
| Corrosión de contacto | Óxido rojizo en el diámetro interior o exterior de los aros | Ajuste flojo entre aro y eje o alojamiento, con micromovimiento | Mecánica |
| Erosión eléctrica | Cráteres diminutos o estrías transversales en forma de tabla de lavar | Paso de corriente por el rodamiento, frecuente en motores con variador de frecuencia | Ninguna de las dos: es una causa eléctrica |
| Recalentamiento | Pistas y rodillos de color pajizo, azulado o marrón; lubricante carbonizado | Falta o exceso de lubricante, precarga excesiva | Lubricación o mecánica |
| Rotura de jaula | Jaula deformada o partida | Lubricación deficiente, vibración, aceleraciones bruscas | Ambas |

Dos observaciones sobre la tabla. Primero, la **erosión eléctrica** no aparece
en el curso y conviene tenerla presente en motores alimentados por variadores:
la solución pasa por conectar el eje a tierra con escobillas, usar
rodamientos aislados o híbridos, según lo que indique el fabricante del
motor. Segundo, el **descascarado por fatiga** es el final esperado de
cualquier rodamiento, pero si aparece mucho antes de la vida calculada casi
siempre hay una sobrecarga o una película insuficiente detrás.

## Cómo detectar la falla a tiempo

Como el daño avanza de forma exponencial, el objetivo del mantenimiento
predictivo es detectarlo lo antes posible para tener margen de planificación.
Cada técnica ve una etapa distinta del proceso.

### Vibraciones

El análisis de vibraciones es la herramienta principal. Un defecto localizado
en una pista genera un impacto cada vez que un elemento rodante pasa sobre él,
y esos impactos se repiten a frecuencias que dependen solo de la geometría del
rodamiento y de la velocidad del eje. Las cuatro frecuencias de falla clásicas
son:

- **BPFO**, paso de elementos por la pista exterior:
  `BPFO = (n/2) · fr · (1 − (d/D) · cos θ)`
- **BPFI**, paso de elementos por la pista interior:
  `BPFI = (n/2) · fr · (1 + (d/D) · cos θ)`
- **BSF**, giro del elemento rodante:
  `BSF = (D/2d) · fr · (1 − ((d/D) · cos θ)²)`
- **FTF**, giro de la jaula:
  `FTF = (fr/2) · (1 − (d/D) · cos θ)`

donde *n* es el número de elementos rodantes, *fr* la velocidad de giro del
eje en hertz, *d* el diámetro del elemento rodante, *D* el diámetro primitivo
y *θ* el ángulo de contacto. En la práctica no hace falta medir el rodamiento:
los fabricantes y el software de análisis traen estas frecuencias en sus bases
de datos. Lo importante es que **no son múltiplos exactos de la velocidad del
eje**, y por eso se distinguen del desbalance o la desalineación en el
espectro.

La evolución típica de una falla se describe en etapas. Al principio solo la
detectan las mediciones de alta frecuencia (ultrasonido, técnicas de
envolvente o demodulación). Después aparecen en el espectro las frecuencias de
falla con sus armónicos. Luego surgen bandas laterales y el defecto crece. Al
final el espectro se llena de ruido de banda ancha, la vibración global sube y
la temperatura también. Para el detalle de la medición en soportes, vea
[análisis de vibraciones en chumaceras](/posts/analisis-vibraciones-chumaceras/)
y los fundamentos en
[la esencia del análisis de vibraciones](/posts/analisis-de-vibraciones/).

### Temperatura, ultrasonido y aceite

- **Temperatura.** Es fácil de medir con termómetro infrarrojo o
  termografía, pero sube de forma notoria cuando el daño ya es avanzado o la
  lubricación ya falló. Vigile la tendencia y compare rodamientos gemelos.
- **Ultrasonido.** Detecta la fricción de una película insuficiente y los
  primeros impactos. Además permite engrasar "escuchando": se aplica grasa
  hasta que el nivel de ruido baja, y se evita el exceso.
- **Análisis de aceite.** En rodamientos lubricados por aceite, el conteo de
  partículas, el contenido de agua y el análisis de partículas de desgaste
  muestran tanto la contaminación externa como el desgaste interno del árbol
  de causas.

| Técnica | Qué detecta mejor | Cuándo avisa |
| --- | --- | --- |
| Vibración en alta frecuencia y envolvente | Defectos incipientes en pistas | Temprano |
| Espectro de vibración | Tipo de defecto (pista exterior, interior, elemento, jaula) y causas dinámicas | Temprano a intermedio |
| Ultrasonido | Lubricación insuficiente, primeros impactos | Temprano |
| Análisis de aceite | Agua, partículas, desgaste | Temprano a intermedio |
| Temperatura | Lubricación fallida, daño avanzado | Tarde |

## Buenas prácticas que atacan cada causa

- **Almacenamiento.** Guarde los rodamientos en su embalaje original, en un
  lugar seco, limpio y libre de vibraciones. No los saque de la caja hasta el
  momento del montaje.
- **Transporte.** Trabe el eje de motores y bombas durante el traslado para
  evitar el falso brinelado.
- **Montaje.** Aplique la fuerza solo sobre el aro que se ajusta, nunca a
  través de los elementos rodantes. Use calentador por inducción o
  herramientas de montaje, no el soplete ni el martillo directo. Respete el
  ajuste y el juego interno que indica el fabricante.
- **Causas dinámicas.** Balancee, alinee con láser o reloj comparador, corrija
  holguras de base y evite operar cerca de una resonancia.
- **Lubricación.** Use el lubricante especificado, en la cantidad y con la
  frecuencia que indica el fabricante. Rotule los puntos de engrase para no
  mezclar productos.
- **Contaminación.** Mantenga sellos, respiraderos y filtros en buen estado,
  almacene los lubricantes cerrados y transfiéralos con equipos limpios.
- **Equipos de reserva.** Gírelos periódicamente a mano o arránquelos según el
  plan, para que la carga no quede siempre sobre los mismos puntos.

## Errores comunes

- **Cambiar el rodamiento sin buscar la causa.** Si la falla venía de una
  desalineación o de agua en el aceite, el repuesto nuevo seguirá el mismo
  camino.
- **Engrasar "por si acaso".** El exceso de grasa calienta el rodamiento tanto
  como la falta, y puede reventar los sellos.
- **Montar a golpes.** Un martillazo sobre el aro equivocado deja hendiduras
  en las pistas antes de la primera vuelta.
- **Mezclar grasas sin comprobar compatibilidad.** Algunos espesantes se
  ablandan o se separan al mezclarse.
- **Confiar solo en la temperatura.** Cuando el alojamiento quema, el margen
  para planificar el cambio ya es corto.
- **Cambiar por calendario rodamientos sanos.** Cada desmontaje innecesario es
  un costo y un riesgo de maltrato.
- **Ignorar las corrientes por el eje en motores con variador.** Las estrías
  de erosión eléctrica se confunden con desgaste si no se las conoce.

## Para seguir leyendo

Para ubicar el rodamiento dentro de un programa completo, lea
[mantenimiento predictivo: vibración, aceite, termografía y ultrasonido](/posts/componentes-clave-mantenimiento-predictivo/).
La medición sobre soportes está en
[análisis de vibraciones en chumaceras](/posts/analisis-vibraciones-chumaceras/),
y las dos fuentes de carga dinámica más frecuentes en
[desbalanceo](/posts/desbalanceo-mantenimiento-predictivo/) y
[desalineación](/posts/desalineacion-tecnicas-prevencion/). Para elegir el
lubricante correcto, la
[guía de grasas lubricantes](/posts/grasas-lubricantes-tipos-espesantes-grado-nlgi-seleccion/)
es el siguiente paso.

**Fuentes:** material del curso de mantenimiento predictivo de Tecsup, unidad
2 "Fallas en los equipos rotatorios", publicado en
[Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/6767-curso-equipos-rotatorios-fallas-causas-principales-rodamientos-problemas-tipos).
Las proporciones de causas y el factor de ocho veces son los que presenta el
curso; los modos de falla y las técnicas de detección corresponden a
conocimiento general de ingeniería de rodamientos. Valores referenciales;
prevalece el manual de servicio del equipo.

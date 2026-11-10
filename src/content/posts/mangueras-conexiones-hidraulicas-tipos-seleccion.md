---
title: "Mangueras y conexiones hidráulicas: tipos, selección y fallas"
published: 2026-11-10
draft: false
featured: false
description: "Cómo está hecha una manguera hidráulica, qué significan SAE 100R y EN 853/856, cómo elegirla con el método STAMPED y qué roscas y errores de montaje evitar."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "mangueras-hidraulicas"
  - "conexiones-hidraulicas"
  - "sae-100r"
  - "en-853"
  - "crimpado"
  - "sistema-hidraulico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistemas-hidraulicos/mangueras-conexiones-hidraulicas-tipos-seleccion
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué significa SAE 100R2 o EN 853 2SN en una manguera?"
    a: "Son normas que describen la construcción y el desempeño de la manguera. SAE 100R2 y EN 853 2SN corresponden a una manguera con dos mallas trenzadas de alambre de acero, apta para presiones altas en líneas de presión de equipos móviles. EN 853 1SN equivale a una malla (similar a SAE 100R1). Las familias EN 856 (4SP, 4SH) usan cuatro capas de alambre en espiral y se reservan para presiones mayores y servicio pesado con impulsos intensos."
  - q: "¿Qué es el método STAMPED para elegir una manguera?"
    a: "Es una lista de verificación de siete puntos: Size (diámetro interior), Temperature (del fluido y del ambiente), Application (movimiento, vibración, abrasión, espacio), Media (fluido transportado y compatibilidad del tubo interior), Pressure (de trabajo, picos e impulsos), Ends (tipo de conexiones en ambos extremos) y Delivery (disponibilidad, tiempos y certificación). Omitir un punto es la causa más común de mangueras que fallan antes de tiempo."
  - q: "¿Se puede reutilizar una manguera hidráulica o sus conexiones?"
    a: "Las conexiones prensadas (crimpadas) son permanentes: no se deben reutilizar ni reprensar. Existen conectores reutilizables que se arman con herramientas básicas, pero en líneas de alta presión de maquinaria pesada la práctica recomendada por los fabricantes es ensamblar un conjunto nuevo con la máquina de prensado y la combinación manguera-conector aprobada. Mezclar manguera de una marca con conector de otra invalida cualquier garantía de presión."
  - q: "¿Con qué frecuencia se deben cambiar las mangueras hidráulicas?"
    a: "No hay un intervalo universal: depende de presión, temperatura, impulsos y ambiente. Muchos fabricantes de maquinaria fijan reemplazos preventivos por horas o años (por ejemplo, 6 años de vida total como referencia habitual de la industria, incluida la bodega), y exigen cambio inmediato ante grietas en la cubierta, alambre expuesto, ampollas, fugas en el conector o torsión visible. En minería y climas muy cálidos conviene acortar los intervalos y registrar la fecha de fabricación impresa en la manguera."
  - q: "¿Qué hago si el aceite hidráulico me penetra la piel?"
    a: "Es una emergencia médica aunque se vea como un pinchazo pequeño. El aceite a alta presión puede inyectarse bajo la piel y causar daño profundo, infección o amputación. No lo limpie ni lo apriete: busque atención médica inmediata e informe que fue una inyección de fluido a presión. Para prevenir, nunca busque una fuga con la mano: use un cartón o una tabla, despresurice el sistema y use protección facial y guantes."
sources:
  - title: "Curso de conexiones y mangueras hidráulicas (Strobbe) — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/1274-curso-conexiones-mangueras-hidraulicas"
  - title: "SAE J517 — Hydraulic Hose"
    url: "https://www.sae.org/standards/content/j517_202009/"
    author: "SAE International"
  - title: "ISO 18752 — Rubber hoses and hose assemblies: wire or textile reinforced hydraulic types, classification by pressure"
    url: "https://www.iso.org/standard/60956.html"
    author: "ISO"
  - title: "SAE J1273 — Recommended Practices for Hydraulic Hose Assemblies"
    url: "https://www.sae.org/standards/content/j1273_201510/"
    author: "SAE International"
  - title: "Parker — Safety Guide for Selecting and Using Hose, Tubing and Fittings"
    url: "https://www.parker.com/"
    author: "Parker Hannifin"
  - title: "Gates — Hydraulic Hose Assembly and Safety Guide"
    url: "https://www.gates.com/"
    author: "Gates Corporation"
related:
  - fluidos-hidraulicos-propiedades-tipos-aceites
  - valvulas-hidraulicas-tipos-funcionamiento
  - fallas-comunes-sistema-hidraulico-diagnostico
---

Si las bombas son el corazón de la máquina y los cilindros sus
músculos, las **mangueras** son las venas y arterias. Son también la
pieza que con más frecuencia revienta, gotea o se rompe en una
excavadora, un cargador o un camión minero. Casi siempre por el mismo
motivo: se eligió mal, se armó mal o se instaló mal.

Este artículo profundiza en lo que el texto genérico sobre
[tuberías, mangueras y conexiones en sistemas hidráulicos móviles](/posts/tuberias-mangueras/)
solo menciona: cómo está construida una manguera, cómo leer las
normas, cómo elegirla con un método ordenado, qué roscas existen y
cómo evitar los errores de instalación que acortan su vida. Si busca
el panorama del circuito completo, empiece por
[qué es un sistema hidráulico](/posts/que-es-un-sistema-hidraulico-fundamentos/).

## Cómo está construida una manguera

Una manguera hidráulica es un sándwich de tres capas con funciones
distintas:

<figure class="diagram">
<svg viewBox="0 0 800 330" role="img" aria-labelledby="mch-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="mch-d1-title">Corte transversal de una manguera hidráulica con tubo interior, refuerzo de alambre y cubierta</title>
<g transform="translate(190,165)">
<circle r="140" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<circle r="108" fill="none" stroke="#f59e0b" stroke-width="14" stroke-dasharray="10 5"/>
<circle r="86" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<circle r="58" fill="none" stroke="currentColor" stroke-width="2"/>
<text y="6" text-anchor="middle" font-size="15" fill="currentColor">Aceite</text>
</g>
<g font-size="15" fill="currentColor" stroke="currentColor" stroke-width="1">
<line x1="190" y1="25" x2="190" y2="12" stroke-opacity="0"/>
<path d="M300 76 L440 56 H470" fill="none"/>
<path d="M280 112 L440 120 H470" fill="none"/>
<path d="M240 165 L440 184 H470" fill="none"/>
<path d="M190 215 L440 248 H470" fill="none"/>
</g>
<g font-size="15" fill="currentColor">
<text x="478" y="52" font-weight="bold">Cubierta exterior</text>
<text x="478" y="70" font-size="14">Protege de ozono, UV y abrasión</text>
<text x="478" y="116" font-weight="bold" fill="#f59e0b">Refuerzo</text>
<text x="478" y="134" font-size="14">Malla o espiral de acero: resiste la presión</text>
<text x="478" y="180" font-weight="bold">Capa intermedia</text>
<text x="478" y="198" font-size="14">Une y protege las capas de refuerzo</text>
<text x="478" y="244" font-weight="bold">Tubo interior</text>
<text x="478" y="262" font-size="14">NBR o similar: compatible con el aceite</text>
</g>
</svg>
<figcaption>Esquema simplificado: de afuera hacia adentro, cubierta, refuerzo, capa intermedia y tubo interior. La resistencia a la presión la aporta casi por completo el refuerzo.</figcaption>
</figure>

- **Tubo interior**: caucho sintético (típicamente nitrilo, NBR)
  compatible con el aceite. Debe resistir el fluido, la temperatura y
  los impulsos de presión sin endurecerse ni agrietarse.
- **Refuerzo**: una o varias capas de fibra textil o de alambre de
  acero, trenzadas o en espiral. Es lo que realmente contiene la
  presión.
- **Cubierta**: caucho sintético resistente a ozono, rayos UV,
  abrasión y aceites externos. Es la primera barrera contra el
  ambiente.

Cuando la cubierta se agrieta o se desgasta, el alambre queda expuesto,
se oxida y se rompe por fatiga. Por eso una cubierta dañada no es un
problema estético: es el aviso previo de una falla del refuerzo.

## Familias de mangueras y normas

Las normas **SAE J517** (series 100R) y **EN 853 / EN 856** clasifican
las mangueras por tipo de refuerzo y rango de presión. La
clasificación internacional por presión está en **ISO 18752**. La
tabla resume las familias más comunes en maquinaria móvil. Las
presiones son rangos orientativos que dependen del diámetro: a mayor
diámetro, menor presión admisible. Verifique siempre el catálogo del
fabricante.

| Norma (equivalencias) | Refuerzo | Presión de trabajo típica | Uso habitual |
|---|---|---|---|
| SAE 100R1 / EN 853 1SN | 1 malla de alambre | Media (hasta ~250 bar en diámetros pequeños) | Líneas de presión media, retornos exigentes |
| SAE 100R2 / EN 853 2SN | 2 mallas de alambre | Alta (hasta ~400 bar en diámetros pequeños) | Líneas de presión de equipos móviles |
| EN 853 2SN-K | 2 mallas, diseño compacto | Alta | Espacios reducidos, alto número de ciclos |
| SAE 100R4 | Espiral de alambre | Baja (succión y retorno) | Succión desde el depósito |
| SAE 100R12 / EN 856 4SP | 4 espirales | Muy alta (~280-450 bar según diámetro) | Cilindros de excavadoras, impulsos fuertes |
| EN 856 4SH | 4 espirales (servicio pesado) | Muy alta | Líneas principales de alta presión |
| SAE 100R13 / 100R15 | 4 a 6 espirales | Extra alta (~350 bar o más) | Minería, grandes excavadoras |

La ventaja de las construcciones en espiral es la **resistencia a los
impulsos** (ciclos de presión). A modo de referencia, una 1SN puede
soportar del orden de 150.000 ciclos de ensayo, una 2SN del orden de
200.000, y las espirales (R12, R13, R15) del orden de 500.000 o más.
Cuanto más oscilante sea la presión de su máquina (pensemos en un
martillo hidráulico), más justifica pagar una familia superior.

## Seleccionar con el método STAMPED

Una lista de siete letras evita casi todos los errores de compra.

| Letra | Pregunta | Qué verificar |
|---|---|---|
| **S** (Size) | ¿Qué diámetro interior? | Tamaño en "dash" (en dieciseisavos de pulgada: -4 = 1/4", -8 = 1/2", -16 = 1"). Una velocidad de fluido típica de 3 a 6 m/s (máx. ~8) evita calentamiento y erosión del tubo. |
| **T** (Temperature) | ¿Cuánto calor? | Temperatura del aceite y del ambiente, incluida la cercanía a turbo, escape o bloque. |
| **A** (Application) | ¿Cómo trabaja? | Movimiento, vibración, roce con estructura, espacio, radio de curvatura. |
| **M** (Media) | ¿Qué fluido? | Compatibilidad del tubo con aceite mineral, biodegradable o fluidos resistentes al fuego (consulte [fluidos hidráulicos](/posts/fluidos-hidraulicos-propiedades-tipos-aceites/)). |
| **P** (Pressure) | ¿Qué presión? | Presión de trabajo, **picos** y ciclos de impulso, no solo la nominal del sistema. |
| **E** (Ends) | ¿Qué extremos? | Tipo de rosca o brida, ángulo y orientación de cada conector. |
| **D** (Delivery) | ¿Se consigue? | Plazo, trazabilidad, certificación y disponibilidad de repuesto en faena. |

Un factor práctico: el **tamaño de la manguera se elige por caudal y
velocidad**, no "al ojo". Una manguera subdimensionada genera pérdida
de carga, calienta el aceite y endurece el tubo interior. Para
dimensionar tuberías y caudales consulte
[circuitos hidráulicos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/).

## Conexiones: cómo sellan y cómo identificarlas

Una conexión hidráulica tiene dos partes: el **terminal** (rosca o
brida) y el **sello**. Una máxima del taller: *la conexión no gotea por
el tipo de sello, gotea por una mala elección o instalación*. Existen
tres principios de sellado:

1. **Sello por la rosca** (cónica): el ajuste de los filetes sella. Es
   el caso de NPT y BSPT. Dependen de roscas bien formadas y suelen
   necesitar sellador de roscas.
2. **Sello por asiento** (metal con metal): dos conos que se aprietan,
   como en JIC 37° o SAE 45°. No requiere cinta de teflón. Las fugas
   suelen venir de ángulos incompatibles, caras rayadas o falta de
   apriete.
3. **Sello por O-ring**: es el más fiable para alta presión. Se usa en
   ORFS (asiento plano), O-ring boss, bridas y métricas con O-ring.

### Hoja de identificación rápida

| Tipo | Ángulo / sello | Rosca típica | Dónde se ve |
|---|---|---|---|
| **JIC 37°** | Asiento cónico metal-metal | UNF | Muy común en EE. UU. y maquinaria global |
| **SAE 45°** | Asiento cónico a 45° | UNF | Refrigeración, equipos de baja presión |
| **ORFS** (O-ring face seal) | O-ring sobre cara plana | UNF | Alta presión, vibración fuerte, cero fugas |
| **O-ring boss (ORB)** | O-ring en el puerto | UNF | Puertos de bombas, bloques y válvulas |
| **BSPP** | Sello con arandela o O-ring | Rosca paralela (Whitworth) | Maquinaria europea y asiática |
| **BSPT / NPT** | Sello por la rosca cónica | Rosca cónica | Instrumentos, tapones, líneas de menor exigencia |
| **Métrica 24° (Light/Heavy)** | Cono 24° con O-ring o anillo | Métrica (DIN 2353) | Maquinaria europea (series L y S) |
| **Brida SAE Code 61 / 62** | O-ring sobre cara plana, 4 pernos | Brida | Diámetros grandes; 61 media presión, 62 alta presión |

Error clásico en LATAM: una máquina japonesa o europea con puertos
BSPP o métricos recibe racores JIC "que más o menos entran". Las
roscas pueden enganchar unos pocos filetes, pero no sellan o se
dañan. Mida paso y diámetro con un calibre de roscas antes de comprar,
y nunca fuerce un conector.

### Conectores y adaptadores

- **Conectores prensables**: se arman una sola vez con una máquina de
  prensado. Son los más seguros y económicos. Pueden venir
  *prearmados* (férrula unida a la espiga) o de *dos piezas*.
- **Conectores reutilizables**: se arman con herramientas básicas.
  Útiles en emergencia o campo, menos recomendables en alta presión.
- **Adaptadores**: no se conectan a la manguera sino entre
  componentes. Cambian de rosca, de diámetro o de dirección (rectos,
  a 45°, a 90°, tees, cruces, reductores, tapones). Cada adaptador
  añade una posible fuga: use el menor número posible.

## Armado y crimpado

El conector tiene una **espiga** (dentro del tubo) y una **férrula**
(afuera). Al prensar, el metal se deforma de forma permanente y el
caucho, que es prácticamente incompresible, queda atrapado entre
ambas. Dos reglas definen un buen resultado:

- **Diámetro de prensado correcto**: se verifica con el calibre y la
  tabla del fabricante del conector. Un orden de magnitud: la espiga
  interior debe deformarse de forma controlada, del orden del 5 %.
- **Combinación aprobada**: la manguera, la espiga y la férrula deben
  ser compatibles entre sí.

Si prensa de menos, la manguera puede salir disparada del conector
bajo presión. Si prensa de más, corta el refuerzo y el tubo interior,
y la manguera falla en el cuello del conector. Otro dato de armado es
la **longitud de corte (cut-off)**: la longitud del conector que no
está en contacto con la manguera. Hay que descontarla al calcular la
longitud de corte para que el conjunto quede del largo correcto. Y
nunca prense con restos de corte o suciedad en el interior: limpie el
conjunto con proyectil o aire.

**Contexto latinoamericano.** En muchos países conviven talleres de
prensado serios con otros que improvisan con equipos sin calibrar.
Dos prácticas ayudan: exigir manguera y conectores de una misma marca
con marcado visible, y desconfiar de mangueras sin marcas legibles de
fabricante, norma y fecha, porque las **falsificaciones** circulan
sobre todo en repuestos "equivalentes" de bajo precio.

## Instalación: qué hacer y qué evitar

Gran parte de las fallas prematuras son de montaje. Según estudios y
guías de fabricantes, una manguera de alta presión doblada o torcida
incluso pocos grados respecto a su eje puede perder buena parte de su
vida útil.

<figure class="diagram">
<svg viewBox="0 0 800 300" role="img" aria-labelledby="mch-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="mch-d2-title">Comparación de instalación incorrecta y correcta de una manguera hidráulica</title>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="20" y="40" width="360" height="230" rx="8" stroke-opacity="0.4"/>
<rect x="420" y="40" width="360" height="230" rx="8" stroke-opacity="0.4"/>
</g>
<text x="40" y="68" font-size="16" font-weight="bold" fill="#f59e0b">Incorrecto</text>
<text x="440" y="68" font-size="16" font-weight="bold" fill="currentColor">Correcto</text>
<g fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2">
<rect x="40" y="140" width="22" height="40"/>
<rect x="338" y="170" width="22" height="40"/>
<rect x="440" y="140" width="22" height="40"/>
<rect x="738" y="140" width="22" height="40"/>
</g>
<path d="M62 160 H130 Q146 160 146 176 Q146 192 130 192 H128 L338 190" fill="none" stroke="#f59e0b" stroke-width="9" stroke-linecap="round"/>
<path d="M462 160 H520 Q560 160 570 185 Q580 205 620 205 H650 Q690 205 700 185 Q710 160 738 160" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-opacity="0.8"/>
<g font-size="14" fill="currentColor">
<text x="40" y="234">Curva muy cerrada junto al conector</text>
<text x="40" y="254">y tramo tenso, sin holgura</text>
<text x="440" y="234">Curva amplia, holgura para la</text>
<text x="440" y="254">dilatación; sin torsión ni roce</text>
</g>
</svg>
<figcaption>Instalación incorrecta (izquierda): radio de curvatura demasiado pequeño y manguera tensada. Correcta (derecha): curva amplia y holgura para dilatación y movimiento.</figcaption>
</figure>

| Haga | Evite |
|---|---|
| Respete el **radio mínimo de curvatura** del catálogo y deje un tramo recto junto al conector | Curvas cerradas pegadas al conector |
| Deje un 2-4 % de holgura de longitud: la manguera se acorta bajo presión | Instalarla tensa, "a tope" |
| Use codos o adaptadores a 45° y 90° para orientar | Forzar la manguera a doblar |
| Apriete con la manguera relajada y marque la línea de estampado para detectar torsión | **Torcerla** al apretar el conector |
| Proteja con camisas, espiral o abrazaderas con goma donde roce | Dejarla rozar contra estructuras o con otras mangueras |
| Aleje de escapes, turbos y colectores o use funda térmica | Pasar junto a superficies calientes |

El ambiente también cuenta. En obra al sol (altas altitudes con fuerte
radiación UV, climas tropicales), la cubierta se resquebraja más
rápido, sobre todo si la manguera además está doblada. En minería, el
polvo abrasivo y el roce con el chasis desgastan la cubierta en meses:
fundas de nylon o poliuretano suelen ser una buena inversión.

## Qué hace fallar a una manguera

Los factores que más acortan su vida son siempre los mismos y suelen
sumarse:

- **Presión**: picos por encima de lo previsto fatigan el alambre y
  causan reventones.
- **Temperatura**: aceite o ambiente demasiado calientes endurecen el
  tubo interior y lo agrietan. Un aceite recalentado suele ser
  síntoma de otro problema (véase
  [diagnóstico de fallas hidráulicas](/posts/fallas-comunes-sistema-hidraulico-diagnostico/)).
- **Radio de curvatura** reducido y **torsión**.
- **Ambiente**: UV, ozono, abrasión, productos químicos.
- **Velocidad excesiva del fluido**: subdimensionamiento.

La combinación de presión máxima, temperatura máxima y curvatura mínima
al mismo tiempo es la receta del fallo temprano.

## Inspección y criterios de reemplazo

Inspeccione con la máquina apagada y despresurizada, y con buena luz.
Cambie la manguera sin esperar si observa cualquiera de estos signos:

- Cubierta con grietas, cortes o desgaste que deja ver el alambre.
- Ampollas, abultamientos o zonas blandas.
- Fugas o humedad en el conector, o conector desplazado.
- Manguera aplastada, retorcida o con la línea de estampado en espiral.
- Endurecimiento extremo o cubierta craquelada por calor.
- Marcas ilegibles, fecha de fabricación demasiado antigua o mangueras
  de procedencia desconocida.

Registre la fecha de montaje en una etiqueta del conjunto. Al cambiar
una manguera, cambie también sus pares simétricos (por ejemplo, las dos
de un cilindro) si tienen la misma edad.

## Seguridad: inyección de fluido y látigo

- **Inyección cutánea**: un chorro fino de aceite a alta presión puede
  atravesar la piel. Parece una herida mínima, pero causa daño profundo
  y puede terminar en amputación. Nunca busque fugas con la mano.
  Use un cartón. Si ocurre, es una urgencia médica.
- **Efecto látigo**: una manguera que se suelta bajo presión puede
  golpear con violencia. En líneas de alta presión use protecciones o
  cables de retención, y no se ubique en la línea de un conector.
- **Presión residual**: antes de intervenir, apague, baje los
  implementos y libere la presión del circuito (según el manual de la
  máquina). Los acumuladores pueden guardar presión por mucho tiempo.
- **Aceite caliente**: salpicaduras pueden quemar. Use protección
  facial, guantes y ropa resistente.

## En resumen

Una manguera hidráulica no es un accesorio, es un componente de
seguridad. Las tres capas (tubo, refuerzo, cubierta) hacen cada una su
trabajo, y las normas SAE 100R y EN 853/856 ayudan a elegir la familia
correcta según presión e impulsos. El método **STAMPED** ordena la
decisión, la identificación correcta de roscas evita fugas, y un buen
crimpado e instalación (sin torsión, con radio amplio y protección)
duplica la vida útil.

Para seguir en esta serie, lea cómo
[las válvulas controlan el caudal](/posts/valvulas-hidraulicas-tipos-funcionamiento/)
y cómo diagnosticar problemas con
[fallas comunes del sistema hidráulico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/).

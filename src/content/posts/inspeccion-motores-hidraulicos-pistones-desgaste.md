---
title: "Inspección de motores hidráulicos de pistones: qué piezas se reutilizan"
published: 2026-11-10
draft: false
featured: false
description: "Cómo juzgar en un overhaul si las piezas internas de un motor o bomba de pistones se reutilizan: patrones de contacto, desgaste, daños típicos y criterios."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "motores-hidraulicos"
  - "bombas-de-pistones"
  - "overhaul"
  - "inspeccion-de-componentes"
  - "transmision-hidrostatica"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistemas-hidraulicos/inspeccion-motores-hidraulicos-pistones-desgaste
author: taller-diesel
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Qué es la prueba de contacto con azul de Prusia?"
    a: "Es un método para verificar cuánto de una superficie de sellado realmente toca a su pieza pareja. Se limpia la pieza, se aplica una película muy delgada de pintura azul de Prusia, se frota contra la pieza pareja con una presión controlada y se transfiere la huella a una cinta adhesiva que se pega sobre papel. Las zonas sin pintura transferida son zonas sin contacto. La guía de Komatsu para motores HST fija mínimos de porcentaje de contacto y exige que la banda de sellado no tenga interrupciones; los valores exactos dependen del modelo y están en el manual de servicio."
  - q: "¿Se puede rectificar o lapear un plato de válvulas o un bloque de cilindros?"
    a: "Sí, dentro de límites. El lapeado fino corrige rayas superficiales leves y restablece la planitud, pero retira material y reduce el espesor de la pieza. Si el rayado es profundo, hay erosión o quemado, o la pieza ya está en el límite de espesor, se reemplaza. Además, el lapeado exige planitud muy alta y limpieza absoluta: restos de pasta abrasiva incrustados destruyen el componente en pocas horas."
  - q: "¿Es mejor reparar el motor, comprar uno nuevo o uno remanufacturado?"
    a: "Depende de la extensión del daño y del costo de parada. Si el daño se limita a desgaste normal de caras y zapatas, la reparación con juego de partes suele ser la opción más barata. Si hay contaminación con metal por falla de rodamiento o rotura de pistones, el costo de limpiar todo el circuito pesa tanto como el componente. Un remanufacturado de fábrica ofrece garantía y plazo corto de entrega; uno nuevo se justifica en equipos jóvenes o críticos."
  - q: "¿Qué causa más fallas internas en motores y bombas de pistones?"
    a: "La contaminación del aceite encabeza la lista: partículas duras que rayan caras de contacto y erosionan holguras. Le siguen la cavitación y aireación por mala aspiración, el sobrecalentamiento por aceite degradado o enfriador obstruido, y el funcionamiento sin aceite en la carcasa durante el arranque. La mayoría de estas causas se corrigen en el sistema, por eso conviene encontrar la causa raíz antes de montar la pieza reparada."
  - q: "¿Cuándo conviene desarmar un motor hidráulico y cuándo no?"
    a: "Conviene desarmar cuando las pruebas en máquina (caudal de drenaje de carcasa, presiones, tiempos de ciclo) indican fugas internas fuera de especificación, o cuando el aceite o el filtro muestran partículas metálicas. Desarmar sin diagnóstico previo expone el componente a contaminación y a errores de reensamble, y puede ocultar la verdadera causa en otro lugar del sistema."
sources:
  - title: "Komatsu — Guidance for reusable parts: HST piston motors, contact checking of inner parts (vía HeavyEquipments.org)"
    url: "https://www.heavyequipments.org/blog/864-guide-reusable-parts-komatsu-piston-motors-contact-checking-inner-parts"
  - title: "Bosch Rexroth — Axial piston units: service and repair information"
    url: "https://www.boschrexroth.com/"
  - title: "Parker Hannifin — Hydraulic pump and motor troubleshooting"
    url: "https://www.parker.com/"
  - title: "ISO 4406 — Hydraulic fluid power: fluids, method for coding the level of contamination by solid particles"
    url: "https://www.iso.org/standard/67472.html"
related:
  - motores-hidraulicos-fundamentos-tipos
  - fallas-comunes-sistema-hidraulico-diagnostico
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
---

Un motor de pistones de traslación o una bomba de transmisión
hidrostática (HST) cuesta miles de dólares, y cuando falla la pregunta
no es solo "¿se repara?", sino **"¿qué piezas del interior sirven
todavía?"**. Reemplazar todo sin criterio es caro. Reusar una pieza
que no debía reusarse es más caro: el componente vuelve a fallar a las
pocas cientos de horas.

Este artículo es el paso siguiente a
[motores hidráulicos: fundamentos y tipos](/posts/motores-hidraulicos-fundamentos-tipos/):
ahí vimos cómo funciona un motor de pistones; aquí lo **abrimos** y
vemos cómo juzgar cada pieza. Si necesitas el diagnóstico a nivel de
sistema (antes de desarmar), mira
[fallas comunes y diagnóstico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/).

## La idea central: tres pares de superficies

La guía de piezas reutilizables de Komatsu para motores HST parte de
una afirmación clara: en un motor o bomba de pistones axiales, el punto
más importante de una reconstrucción es **lograr un contacto correcto
entre las superficies de acoplamiento** de unas pocas piezas vitales:
el **bloque de cilindros**, el **plato de válvulas** (también llamado
plato de distribución) y la **tapa final**.

Ese contacto es lo que sella el aceite a 300 bar. Si la superficie
no apoya bien, el aceite escapa hacia la carcasa, cae el rendimiento
volumétrico, el aceite se calienta y la máquina pierde fuerza.

<figure class="diagram">
<svg viewBox="0 0 800 420" role="img" aria-labelledby="imhp-title" style="width:100%;height:auto;font-family:inherit">
<title id="imhp-title">Corte esquemático de un motor de pistones axiales con las zonas de inspección resaltadas</title>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="70" y="110" width="660" height="200" rx="6" stroke-opacity="0.35"/>
<line x1="70" y1="210" x2="730" y2="210" stroke-dasharray="8 5" stroke-opacity="0.4"/>
<rect x="545" y="130" width="125" height="160" fill="currentColor" fill-opacity="0.08"/>
<rect x="520" y="130" width="25" height="160" fill="currentColor" fill-opacity="0.18"/>
<rect x="300" y="140" width="220" height="140" fill="currentColor" fill-opacity="0.12"/>
<rect x="150" y="160" width="30" height="100" fill="currentColor" fill-opacity="0.2"/>
<polygon points="180,140 230,160 230,260 180,280" fill="currentColor" fill-opacity="0.15"/>
<line x1="740" y1="210" x2="790" y2="210"/>
<line x1="30" y1="210" x2="150" y2="210" stroke-width="5"/>
<rect x="232" y="150" width="68" height="24" fill="currentColor" fill-opacity="0.2"/>
<rect x="232" y="246" width="68" height="24" fill="currentColor" fill-opacity="0.2"/>
<circle cx="266" cy="162" r="6"/>
<circle cx="266" cy="258" r="6"/>
<line x1="300" y1="162" x2="340" y2="162"/>
<line x1="300" y1="258" x2="340" y2="258"/>
</g>
<g fill="none" stroke="#f59e0b" stroke-width="3">
<rect x="222" y="148" width="86" height="28" rx="3"/>
<rect x="222" y="244" width="86" height="28" rx="3"/>
<line x1="520" y1="130" x2="520" y2="290"/>
<line x1="545" y1="130" x2="545" y2="290"/>
<rect x="172" y="136" width="64" height="148" rx="3" stroke-dasharray="6 4"/>
</g>
<g fill="currentColor" font-size="15">
<text x="55" y="190">Eje y estrías</text>
<text x="150" y="108">1 Plato oscilante</text>
<text x="205" y="320">2 Pistón + zapata</text>
<text x="340" y="205">3 Bloque de cilindros</text>
<text x="446" y="108">4 Plato de válvulas</text>
<text x="565" y="205">Tapa final</text>
<text x="560" y="345">5 Superficies fijas B/P y E/C</text>
</g>
<g fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.6">
<line x1="480" y1="112" x2="532" y2="140"/>
<line x1="290" y1="322" x2="266" y2="272"/>
<line x1="205" y1="110" x2="205" y2="134"/>
</g>
<text x="70" y="390" font-size="14" fill="currentColor" fill-opacity="0.8">Resaltado en ámbar: zonas que se revisan en cada desarme</text>
</svg>
<figcaption>Esquema simplificado (no a escala) de un motor de pistones axiales de plato oscilante. Las zonas ámbar son los pares de contacto que definen si el conjunto se reutiliza.</figcaption>
</figure>

## Qué se revisa, pieza por pieza

### Pistones y zapatas

Cada pistón termina en una **rótula** y una **zapata** que desliza
sobre el plato oscilante, sostenida por una película de aceite. Se
revisa:

- **Zapata**: cara de deslizamiento lisa y brillante, sin rayas
  profundas ni quemado azulado. La **holgura axial de la rótula**
  (juego entre la zapata y la bola del pistón) no debe superar el
  límite del fabricante; una zapata suelta indica fatiga o golpe
  hidráulico.
- **Pistón**: superficie cilíndrica con brillo uniforme. Rayas
  longitudinales marcadas, zonas oscurecidas o diámetro fuera de
  tolerancia lo descartan.

Los pistones y zapatas se cambian **siempre como juego completo**: un
solo pistón gastado mezclado con otros nuevos desbalancea el conjunto.

### Bloque de cilindros y plato de válvulas

Son el corazón del sellado. En el bloque se revisa la **cara de
distribución** (la que apoya contra el plato de válvulas) y el
**diámetro interior de cada cilindro**. En el plato, la cara de
deslizamiento y los bordes de las lumbreras en forma de riñón.

Aquí entra la **prueba de contacto**, que es el aporte más valioso de
la guía de Komatsu y que veremos más abajo.

### Plato oscilante y rodamientos

El plato oscilante (swash plate) y su asiento deben tener la superficie
de apoyo de las zapatas **sin escalonamiento ni anillos marcados**. Los
rodamientos del eje se revisan por giro suave, juego radial y
picaduras en pistas y rodillos; **un rodamiento dudoso se cambia
siempre**: es barato frente al riesgo de una falla que contamine todo.

### Eje y estrías

Se revisan las **estrías** (spline) por desgaste en los flancos y los
**sellos del eje** por la zona de asiento del labio. Estrías con
flancos "afilados" o escalón apreciable al tacto indican holgura de
acople: se cambia el eje y se revisa la pieza pareja del lado de la
máquina.

## Cómo se mide el contacto: azul de Prusia

El método descrito en la guía es simple y muy reproducible, y por eso
se usa en talleres de reconstrucción de todo el mundo:

1. **Limpiar** la pieza con paño y líquido de limpieza; confirmar que
   no hay rebabas, bordes vivos ni restos de pasta de lapeado. Si hay
   partículas incrustadas, se retiran presionando cinta adhesiva y se
   vuelve a limpiar.
2. **Pintar** la superficie con una película **muy fina** de azul de
   Prusia, extendida con el dedo hasta que casi desaparece el color. La
   guía muestra ejemplos de cantidad correcta, excesiva e insuficiente:
   con exceso de pintura todo parece contacto; con poca, parece que no
   hay.
3. **Frotar** la pieza contra su pareja con un collar centrador y presión
   uniforme, girando unos pocos grados de lado a lado, y repetir en
   cuatro posiciones a 45°.
4. **Transferir** la huella con cinta adhesiva en dos capas cruzadas y
   pegarla en papel.
5. **Comparar** con las muestras límite del manual.

El criterio de aprobación combina dos cosas: que la **banda de sellado
no tenga cortes** y que el **porcentaje de área en contacto** supere un
mínimo (en la guía, más exigente en la banda de sellado que en el
resto de la cara). Los valores concretos dependen del modelo; **usa
siempre los del manual de servicio de tu equipo**.

Tres pares se verifican de esta forma: bloque de cilindros contra plato
de válvulas o placa de apoyo, plato de válvulas contra su placa, y
placa contra la tapa final. Si algún par falla, se corrige (lapeado) o
se reemplaza la pieza antes de armar.

## Tabla de daños: qué ves, qué lo causó, qué hacer

| Lo que observas | Causa probable | Decisión típica |
| --- | --- | --- |
| Rayas finas, brillo uniforme en caras de distribución | Desgaste normal, partículas muy finas | Reusar si el contacto aprueba; lapear si el contacto es marginal |
| Rayas profundas que se sienten con la uña | Partículas duras en el aceite (contaminación) | Reemplazar o rectificar; corregir filtración antes de montar |
| Superficie opaca con huecos pequeños en bordes de lumbreras | Erosión por cavitación o aireación | Reemplazar; revisar aspiración, nivel y mangueras |
| Coloración azul o marrón, superficie rugosa | Sobrecalentamiento y falta de película de aceite | Reemplazar; revisar enfriador, aceite y ciclo de trabajo |
| Zapatas con cara quemada o rotura de cuello | Mala lubricación, golpe hidráulico, presión excesiva | Reemplazar juego completo de pistones y zapatas |
| Pistón con rayas o diámetro reducido | Contaminación o desalineación del bloque | Reemplazar conjunto; revisar cilindros del bloque |
| Bloque con cilindros ovalizados o rayados | Contaminación, desgaste prolongado | Reemplazar bloque; no se repara económicamente |
| Plato oscilante con anillos escalonados | Desgaste de zapatas, partículas | Rectificar o reemplazar según espesor remanente |
| Rodamiento con picaduras o juego | Fatiga, contaminación, mala alineación | Reemplazar siempre |
| Estrías con escalón o flancos afilados | Holgura de acople, torque pulsante | Reemplazar eje; revisar pareja |
| Partículas de bronce o acero en filtro y carcasa | Falla en curso de zapatas o rodamiento | No reusar nada sin descontaminar el circuito completo |

### Cómo se produce cada daño

- **Rayado (scoring)**: una partícula dura queda atrapada entre dos
  superficies que se mueven una contra otra. La contaminación sólida
  del aceite es la causa número uno; revisa el nivel de limpieza según
  [ISO 4406](https://www.iso.org/standard/67472.html) y el estado de
  [filtros y depósito](/posts/filtros-depositos-sistema-hidraulico/).
- **Erosión**: el aceite a gran velocidad por una holgura minúscula
  arranca material con el tiempo, sobre todo en bordes de lumbreras.
- **Picaduras por cavitación**: burbujas de vapor que implosionan sobre
  el metal. Nacen en la aspiración: aceite frío o muy viscoso, filtro
  de succión saturado, nivel bajo o manguera colapsada.
- **Quemado**: la película de aceite se corta, aparece contacto
  metal-metal y la temperatura local sube. Se ve como coloración y
  rugosidad.
- **Agarrotamiento (seizure)**: es el paso final del anterior: las
  piezas se sueldan localmente. Suele ir acompañado de partículas
  metálicas por todo el circuito.

## Flujo de trabajo en el desarme

1. **Registrar antes de abrir**: horas, síntomas, presiones, caudal de
   drenaje de carcasa. Es la referencia de lo que luego encuentras.
2. **Recoger el aceite de la carcasa** y filtrarlo sobre un paño o
   malla: la cantidad y el tipo de partículas anticipa la gravedad.
3. **Desarmar en banco limpio**, con las piezas ordenadas y marcadas.
   Pistón y zapata nunca se mezclan entre posiciones.
4. **Lavar y secar** todo con líquido limpio; nada de aire de taller
   sin filtrar.
5. **Inspección visual** con buena luz y aumento: caras, bordes de
   lumbreras, estrías.
6. **Medir** con instrumentos calibrados y compararlo con el manual:
   micrómetro para pistones, calibre telescópico o comparador para los
   cilindros, juego axial de rótulas, planitud de caras sobre superficie
   de referencia.
7. **Prueba de contacto** en los tres pares de superficies.
8. **Decidir** pieza por pieza y reemplazar el juego completo cuando
   corresponda.
9. **Remontar** con sellos nuevos, pares de apriete del manual y aceite
   limpio en la carcasa antes del arranque.
10. **Probar en banco** o en máquina, con arranque a baja carga y
    revisión de drenaje y temperatura.

### Consejos de medición

- Mide con las piezas **a temperatura ambiente estable**; el
  calentamiento por manipulación falsea tolerancias de micras.
- Una cara que se "siente" plana puede no serlo: la comprobación se
  hace con regla de filo o superficie de referencia y luz detrás.
- No uses la memoria del taller como criterio: el límite de
  servicio es el del fabricante para ese modelo exacto.

## Reparar, remanufacturar o comprar nuevo

| Opción | Cuándo conviene | Riesgo |
| --- | --- | --- |
| **Reparar con juego de partes** | Desgaste normal, sin contaminación metálica | Depende de la habilidad del taller y de la limpieza |
| **Remanufacturado** | Daño extenso; necesitas plazo corto y garantía | Calidad variable según el remanufacturador |
| **Nuevo** | Equipo joven, crítico o de poca vida restante de otras partes | Costo inicial más alto |

La lógica de costos: el precio de la pieza es solo una parte. En
**minería y en obras con maquinaria alquilada**, una máquina parada
cuesta más por día que la diferencia entre reparar y comprar. En
Latinoamérica, además, pesa la **disponibilidad**: los juegos de
pistones y platos de válvulas de algunas marcas se importan y pueden
tardar semanas; por eso los grandes operadores mantienen **componentes
de intercambio** (exchange) y mandan reparar el saliente en paralelo.

Antes de decidir, calcula así: costo de reparación + horas de parada +
riesgo de repetición, frente a costo del reemplazo + horas de parada.
Si el aceite estaba contaminado con metal, suma la **limpieza del
sistema** (lavado, cambio de filtros, revisión de la bomba y mangueras)
a ambas opciones.

## Causa raíz: no montes una pieza buena en un sistema malo

Una pieza reparada que vuelve al mismo sistema que la destruyó, falla
de nuevo. Antes de cerrar el trabajo:

- Verifica la **limpieza del aceite** y reemplaza filtros.
- Revisa la **aspiración**: nivel, mangueras, filtro de succión, ver
  [mangueras y conexiones](/posts/mangueras-conexiones-hidraulicas-tipos-seleccion/).
- Controla **temperatura de trabajo** y estado del enfriador.
- Comprueba **presiones de alivio** y calibraciones.
- Si es un [circuito cerrado](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/)
  HST, revisa bomba y motor como par: el metal de uno acaba en el otro.

## En resumen

Decidir qué se reutiliza en un motor o bomba de pistones no es
cuestión de intuición: es **inspección ordenada, medición contra el
manual y prueba de contacto**. La guía de Komatsu aporta el método más
práctico para lo último, y el resto de la disciplina (limpieza,
registro, causa raíz) es lo que hace que la reparación dure.

Resumen operativo: **aceite limpio antes que piezas nuevas, juegos
completos en pistones y zapatas, rodamientos siempre nuevos, contacto
verificado en los tres pares de superficies**, y datos exactos siempre
del manual de servicio del fabricante.

*Este artículo es una guía de orientación. Los límites de servicio,
pares de apriete y procedimientos de reparación deben tomarse del
manual del fabricante del equipo específico.*

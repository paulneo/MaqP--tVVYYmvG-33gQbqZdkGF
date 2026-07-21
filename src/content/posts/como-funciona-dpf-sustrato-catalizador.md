---
title: "Cómo funciona un DPF por dentro: sustrato, catalizador y washcoat"
published: 2026-08-02
draft: false
featured: false
description: "El DPF por dentro es una matriz cerámica con catalizador de platino y washcoat. Explicamos qué es cada capa, qué materiales se usan (cordierite vs carburo de silicio) y por qué."
category: mecanica-automotriz
formato: concepto
nivel: avanzado
tags:
  - "dpf"
  - "cordierite"
  - "carburo-silicio"
  - "catalizador-platino"
  - "sustrato-ceramico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/como-funciona-dpf-sustrato-catalizador
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Qué es el sustrato de un DPF?"
    a: "El sustrato es la matriz cerámica interna del DPF — la estructura tipo panal de abejas con miles de canales paralelos donde los gases circulan y el hollín se atrapa. Se fabrica en dos materiales principales: cordierite (más barato, menor tolerancia térmica) o carburo de silicio (más caro, mucha mejor resistencia al calor y a los ciclos de regeneración). Es el 'corazón' del DPF."
  - q: "¿Qué es el washcoat en un DPF?"
    a: "El washcoat es una capa muy delgada de material cerámico poroso (típicamente alúmina o silicato de aluminio) aplicada sobre las paredes del sustrato. Su función es aumentar drásticamente la superficie donde el catalizador puede depositarse. Sin washcoat, el catalizador tendría contacto solo con la superficie plana del canal; con washcoat, se distribuye en una microestructura porosa con superficie efectiva miles de veces mayor. Es lo que permite catalizar reacciones con muy poca cantidad de platino."
  - q: "¿Por qué el DPF usa platino como catalizador?"
    a: "El platino tiene propiedades químicas únicas para catalizar la oxidación a temperaturas relativamente bajas (200-350 °C). En el DPF sirve para tres cosas: (1) oxidar hidrocarburos no quemados y CO durante el flujo normal, (2) generar NO₂ a partir del NO del escape (el NO₂ ayuda a la regeneración pasiva), y (3) reducir la temperatura necesaria para quemar el hollín. Alternativas como el paladio o el rodio se usan combinadas con platino según diseño, pero el platino sigue siendo dominante por su balance costo/eficiencia."
  - q: "¿Cuál es mejor: cordierite o carburo de silicio (SiC)?"
    a: "Depende del uso. Cordierite es más barato, más ligero y tiene bajo coeficiente de expansión térmica — bueno para motores on-highway con ciclos térmicos moderados. Carburo de silicio (SiC) tolera temperaturas mucho mayores (hasta 1.400 °C sostenido vs 900-1.000 °C de cordierite) y es más resistente al choque térmico, lo que lo hace ideal para maquinaria pesada, minería y aplicaciones con regeneraciones activas frecuentes. La contra del SiC es su costo — puede triplicar el precio del DPF. En Cat off-highway, se usa cordierite en la mayoría de aplicaciones estándar y SiC en las de mayor exigencia."
  - q: "¿Cuánto platino hay en un DPF típico?"
    a: "Muy poco en peso pero mucho en costo: un DPF típico de camión contiene entre 2 y 5 gramos de platino (a veces también paladio y rodio). Con el precio del platino en 2025 (~USD 30-35/gramo), eso significa USD 60-175 solo en metales preciosos. Un DPF de camión completo cuesta USD 3.000-6.000 nuevo — el resto del costo está en el sustrato cerámico, el housing metálico, los sensores, el washcoat y la fabricación. En excavadoras grandes con DPF dual, la cantidad de platino puede llegar a 10-15 gramos."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Corning — Cordierite DPF Substrates Technical Documentation"
    url: "https://www.corning.com/"
  - title: "NGK Insulators — Silicon Carbide DPF Technology"
    url: "https://www.ngk.co.jp/"
  - title: "DieselNet — DPF Materials and Substrate Technology"
    url: "https://dieselnet.com/tech/dpf.php"
related:
  - que-es-un-dpf-diesel-particulate-filter
  - regeneracion-dpf-pasiva-activa-forzada
  - sensores-componentes-dpf
---

Un DPF **no es una caja mágica** que atrapa hollín. Es una pieza de ingeniería
de precisión con materiales de alta tecnología: una **matriz cerámica de miles
de canales**, recubierta con **una capa porosa microestructurada** llamada
washcoat, sobre la que se deposita un **catalizador de metales preciosos** —
típicamente platino, a veces con paladio o rodio.

Cada capa tiene una función específica. Entender cómo se combinan es la base
para saber por qué un DPF puede fallar, por qué unos duran más que otros, y por
qué el diesel de mala calidad o el aceite equivocado lo pueden destruir en
horas.

## Anatomía del DPF: 3 capas superpuestas

Cuando cortás un DPF por la mitad y miras al microscopio, ves tres cosas:

1. **El sustrato**: la matriz cerámica con miles de canales tipo panal.
2. **El washcoat**: capa porosa que recubre las paredes del sustrato.
3. **El catalizador**: partículas microscópicas de metales preciosos
   depositadas sobre el washcoat.

Vamos capa por capa.

## Capa 1: el sustrato cerámico

El sustrato es la **estructura física** del DPF. Determina cuánto hollín
puede atrapar, cuánto flujo de gas puede pasar, y cuánta temperatura puede
aguantar.

### Estructura wall-flow

La geometría del sustrato se llama **wall-flow** (flujo por paredes). Los
canales están **alternadamente cerrados**:

- Un canal está tapón del lado de entrada del gas.
- El canal vecino está tapón del lado de salida.
- El siguiente, del lado de entrada. Y así sucesivamente.

Esta alternancia obliga a los gases a **pasar por las paredes porosas** entre
canal y canal para llegar del lado de entrada al de salida. Y es en esas
paredes donde queda atrapado el hollín.

Un sustrato típico tiene **200-300 canales por pulgada cuadrada (CPSI)** y
paredes de **300-400 micrones** de espesor.

### Los dos materiales dominantes

El sustrato se fabrica principalmente en dos materiales cerámicos:

#### Cordierite

Es un mineral silicato de magnesio y aluminio (Mg₂Al₄Si₅O₁₈). Se produce por
sinterizado de arcillas y talco a alta temperatura.

**Ventajas**:
- **Bajo costo** (relativamente hablando; sigue siendo cerámica avanzada).
- **Bajo coeficiente de expansión térmica** — no se agrieta con cambios de
  temperatura pequeños.
- **Baja densidad** — sustratos más ligeros, DPFs completos de menos peso.

**Desventajas**:
- **Punto de fusión relativamente bajo** (~1.450 °C).
- **Tolerancia térmica sostenida limitada** — no aguanta más de 900-1.000 °C
  por períodos prolongados.
- **Menos resistente al choque térmico severo** — si hay una regeneración
  descontrolada que llega a 1.100 °C, puede fisurarse.

**Aplicación típica**: camiones on-highway, maquinaria pesada de exigencia
media, buses, generadores estacionarios.

#### Carburo de silicio (SiC)

Es un compuesto de silicio y carbono (SiC), producido por sinterizado
industrial a temperaturas de 2.000 °C+.

**Ventajas**:
- **Punto de fusión muy alto** (2.700 °C).
- **Tolerancia térmica sostenida hasta 1.400 °C** — resiste regeneraciones
  agresivas y ciclos térmicos severos.
- **Excelente conductividad térmica** — la temperatura se distribuye
  uniformemente, evitando puntos calientes que puedan fisurar el material.
- **Alta resistencia mecánica** — soporta vibraciones y choques.

**Desventajas**:
- **Costo alto** — puede triplicar el precio del sustrato de cordierite.
- **Mayor densidad y peso** — DPFs más pesados.
- **Mayor rigidez térmica** — requiere segmentación (varios bloques ensamblados)
  para acomodar la expansión, lo que agrega complejidad de fabricación.

**Aplicación típica**: minería (donde los ciclos de trabajo son extremos),
maquinaria pesada de alta exigencia, aplicaciones marinas y ferroviarias.

En la línea Cat ACERT, la mayoría de aplicaciones estándar usan **cordierite**;
las de gran exigencia (camiones mineros 793, excavadoras 6015+) llevan
**carburo de silicio**.

## Capa 2: el washcoat

Sobre las paredes del sustrato se aplica una **capa muy delgada y muy porosa**
llamada washcoat. Es una lechada de óxidos cerámicos (típicamente alúmina
Al₂O₃, a veces mezclada con silicatos y estabilizadores) que se aplica en
suspensión líquida y luego se calcina.

### Función principal: superficie efectiva

El washcoat **NO filtra hollín** ni **NO cataliza reacciones**. Su función es
puramente estructural: **aumentar la superficie donde el catalizador puede
depositarse**.

Sin washcoat, el catalizador tendría contacto solo con la superficie plana de
las paredes del sustrato — muy poca área. Con washcoat, se crea una
**microestructura porosa** con superficie efectiva **cientos a miles de veces
mayor**. Esto permite catalizar reacciones con muy poco metal precioso.

### Requerimientos técnicos

Un buen washcoat tiene que:

- Adherirse firmemente al sustrato aún con ciclos térmicos extremos.
- Mantener su porosidad después de miles de horas a alta temperatura.
- Ser químicamente estable frente a los gases del escape (sulfatos, hollín,
  agua, ácidos).
- No obstruir excesivamente el flujo del gas.

Cuando el washcoat se degrada (envejecimiento térmico, contaminación por
azufre o metales del aceite), pierde superficie efectiva y el catalizador
queda "encapsulado" — el DPF **deja de funcionar bien** aunque el sustrato
esté intacto. Es una causa común de reemplazo prematuro.

## Capa 3: el catalizador de platino

Sobre el washcoat se depositan **partículas microscópicas de metales
preciosos** — típicamente:

- **Platino (Pt)**: el actor principal. Cataliza la oxidación de HC, CO y
  la formación de NO₂ que ayuda a la regeneración pasiva.
- **Paladio (Pd)**: a veces se combina con platino para mejorar la
  actividad a bajas temperaturas y reducir costo.
- **Rodio (Rh)**: menos común en DPF (más usado en catalizadores de tres
  vías de motores nafta), pero aparece en algunos diseños.

### Cantidad y costo

Un DPF típico contiene **entre 2 y 5 gramos de platino** distribuidos en
toda la superficie interna. Puede parecer poco pero:

- Precio del platino en 2025: **USD 30-35 por gramo**.
- Contenido de metales preciosos por DPF: **USD 60-175**.

Es una fracción considerable del costo total del componente. Por eso los
DPFs usados tienen valor de reventa como scrap para recuperación de
metales.

### Qué reacciones cataliza

El catalizador de platino en el DPF cumple tres funciones simultáneas:

1. **Oxidación de HC**: hidrocarburos no quemados + O₂ → CO₂ + H₂O
2. **Oxidación de CO**: 2CO + O₂ → 2CO₂
3. **Formación de NO₂**: 2NO + O₂ → 2NO₂

La tercera es crítica: el **NO₂ es un oxidante mucho más agresivo que el
O₂**, y ayuda a **quemar el hollín acumulado** a temperaturas mucho más
bajas (200-350 °C) que la oxidación con oxígeno puro (que necesita 550+ °C).

Es el mecanismo detrás de la **regeneración pasiva** del DPF — el filtro se
va limpiando solo mientras el motor opera en condiciones normales, sin
necesidad de intervención.

## Qué destruye estas 3 capas

Cada capa tiene su enemigo:

### Enemigos del sustrato
- **Regeneraciones descontroladas** que superan 1.100 °C (cordierite) o
  1.400 °C (SiC) → fisuras internas.
- **Choque térmico** por acumulación excesiva de hollín seguida de
  regeneración forzada.
- **Vibraciones extremas** sin montaje elástico adecuado.

### Enemigos del washcoat
- **Envejecimiento térmico** a temperatura sostenida alta → pérdida de
  porosidad.
- **Contaminación por sulfatos** del combustible con azufre.
- **Metales del aceite motor** (Ca, Zn, P) que se depositan y "envenenan"
  la superficie.

### Enemigos del catalizador
- **Azufre en el combustible** → el S se une al platino y bloquea la
  actividad catalítica. Por eso se usa **ULSD (Ultra Low Sulfur Diesel,
  <15 ppm)**.
- **Metales pesados del aceite motor** — mismo mecanismo. Por eso se usa
  aceite **CJ-4 o CK-4 con SAPS bajos** (Sulfated Ash, Phosphorus, Sulfur).
- **Envenenamiento por combustibles alternativos** mal formulados
  (biodiesel B100 sin certificación adecuada, GLP mal quemado en
  aplicaciones dual-fuel).

## En resumen

El DPF combina tres capas de tecnología: un sustrato cerámico que estructura
el filtro y aguanta el calor, un washcoat que multiplica la superficie
efectiva, y un catalizador de metales preciosos que acelera las reacciones
químicas dentro del filtro.

Cada capa es sensible a factores específicos —temperatura extrema, azufre,
metales del aceite— y **mantenerlas todas en buen estado depende del combustible
y del aceite que uses**. Usar diesel ULSD y aceite CJ-4/CK-4 no es una
recomendación de marketing — es un requerimiento técnico para que las tres
capas trabajen como se diseñaron.

En próximos artículos vamos a ver cómo funciona la regeneración —el proceso
que quema el hollín acumulado— y cómo se hace el mantenimiento y limpieza de
cenizas cuando el DPF ya no puede autolimpiarse.

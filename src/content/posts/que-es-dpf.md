---
title: "Qué es un DPF (Diesel Particulate Filter): función, tipos y montaje"
published: 2026-07-31
draft: false
featured: false
description: "El DPF atrapa el hollín del escape diesel antes de que salga al ambiente. Guía completa: cómo trabaja, single vs dual, montaje horizontal o vertical, y cuándo lleva cada tipo."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "dpf"
  - "diesel-particulate-filter"
  - "filtro-particulas"
  - "sistema-acert"
  - "emisiones-diesel"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/que-es-dpf
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Qué es exactamente un DPF?"
    a: "DPF significa Diesel Particulate Filter (filtro de partículas diesel). Es un componente del sistema de escape que atrapa físicamente el hollín (particulate matter, PM) producido por la combustión del diesel, antes de que salga al ambiente. Internamente es una matriz cerámica con miles de canales alternadamente cerrados que fuerza a los gases a pasar por paredes porosas — el hollín queda atrapado en esas paredes."
  - q: "¿Todos los motores diesel modernos tienen DPF?"
    a: "Todos los motores diesel on-highway vendidos en EE.UU., Canadá y Europa desde 2007 llevan DPF de fábrica. En maquinaria pesada (off-highway) el DPF apareció con Tier 4 Interim (2011-2013) y se universalizó con Tier 4 Final (2014-2015). En Latinoamérica depende del país y año del equipo: motores importados nuevos suelen traer DPF, pero mucha maquinaria usada de años previos a 2011 todavía opera sin él."
  - q: "¿Cuál es la diferencia entre DPF single y dual?"
    a: "Un DPF single es un solo canister filtrante en el escape, típico para motores hasta 600 HP. Un DPF dual son dos canisters gemelos en paralelo, usado en motores de 600 HP o más porque necesitan mayor capacidad de filtrado para el volumen de gases que manejan. En excavadoras clase 40T+ y camiones mineros grandes es común ver DPF dual. En excavadoras clase 20-30T o cargadores medianos, single alcanza."
  - q: "¿Se puede montar el DPF horizontal o vertical?"
    a: "Sí, ambas orientaciones son válidas. Cat y otros fabricantes ofrecen el mismo DPF con kits de montaje horizontal o vertical según el diseño del vehículo o máquina. En camiones tractores es común el montaje horizontal debajo del chasis. En excavadoras el DPF suele ir vertical junto al motor por limitaciones de espacio. La orientación no afecta la eficiencia del filtrado, siempre que se respeten los sensores de temperatura y presión en las posiciones correctas."
  - q: "¿Se puede quitar el DPF para 'liberar' el motor?"
    a: "Legalmente no. En EE.UU., Canadá, UE y varios países de Latam, quitar el DPF (DPF delete) es una infracción ambiental que puede acarrear multas de miles de dólares por unidad y hasta secuestro del vehículo. En Perú y Chile la revisión técnica vehicular (RTV) rechaza equipos que tengan DPF removido si la opacidad supera los límites. Además, quitar el DPF puede generar una gran cantidad de hollín visible por el escape (opacidad 100%), lo que hace obvio el delete y lo hace fácil de detectar. Técnicamente, quitarlo NO da más potencia — la ECU está calibrada para operar con DPF instalado y responde con códigos de error si detecta su ausencia."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "US EPA — Diesel Particulate Filters Fact Sheet"
    url: "https://www.epa.gov/verified-diesel-tech"
  - title: "DieselNet — Wall-Flow Diesel Particulate Filters"
    url: "https://dieselnet.com/tech/dpf_wall-flow.php"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - como-funciona-dpf-sustrato-catalizador
  - regeneracion-dpf-pasiva-activa-forzada
---

Cuando un motor diesel arranca, el combustible se mezcla con aire dentro del
cilindro y arde con una explosión controlada. Ese proceso, por perfecto que sea,
**siempre genera hollín** — pequeñas partículas de carbono que no llegaron a
quemarse por completo. Sin nada que las contenga, ese hollín sale por el escape,
se ve como humo negro y contamina el aire.

El **DPF (Diesel Particulate Filter)** es la solución que la industria adoptó
para capturar ese hollín antes de que salga al ambiente. Desde 2007 es un
componente **obligatorio** en motores diesel on-highway en EE.UU., y desde
2011-2015 también en maquinaria pesada bajo la norma Tier 4 Interim/Final.
Cualquier técnico que trabaje con motores modernos —Cat, Cummins, Volvo,
Detroit, Komatsu, John Deere— tiene que entender qué es, cómo trabaja y cuándo
lleva cada tipo.

## Qué hace exactamente un DPF

En una frase: **atrapa el hollín físicamente**.

Internamente, un DPF es un cilindro metálico que contiene una matriz cerámica
con **miles de canales paralelos**. Los canales están **alternadamente cerrados**:
uno está tapado del lado de entrada, el vecino del lado de salida, el siguiente
del lado de entrada, y así.

Cuando los gases del escape entran, no pueden salir en línea recta —
obligadamente tienen que pasar **por las paredes porosas** de los canales para
llegar al canal vecino. Esas paredes actúan como filtro: dejan pasar los gases
(CO₂, H₂O, N₂, algo de NOx residual) pero **retienen las partículas sólidas**
de hollín.

El resultado: **más del 90% del particulado queda atrapado** dentro del filtro.
Los gases limpios salen al escape final.

## Los dos tipos de montaje según capacidad: single y dual

Los fabricantes ofrecen dos configuraciones según el tamaño del motor:

### DPF single (individual)

Un solo canister filtrante, usado en motores de **hasta ~600 HP**. Es la
configuración más común:

- Excavadoras clase 20-30 toneladas (Cat 320, 330, 336).
- Cargadores frontales medianos (Cat 950, 962, 966).
- Camiones tractocamiones on-highway.
- Buses interurbanos.
- Generadores estacionarios de 200-500 kVA.

Un DPF single mide entre 30 y 60 cm de largo por 25-40 cm de diámetro,
dependiendo del tamaño del motor. Pesa entre 25 y 55 kg.

### DPF dual (doble)

Dos canisters gemelos montados en paralelo, usados en motores de **600 HP en
adelante**. Se necesita más superficie filtrante para manejar el mayor volumen
de gases:

- Camiones mineros (Cat 777, 785, 793).
- Excavadoras muy grandes (Cat 390F, 395, 6015B).
- Cargadores frontales gigantes (Cat 988K, 990K, 993K).
- Motoniveladoras grandes (Cat 24M).
- Generadores estacionarios de 800+ kVA.

Los dos DPFs se conectan a un colector común, dividen el flujo del escape en
dos, cada uno filtra su parte, y los gases limpios se juntan en otro colector
antes de salir. Los sensores de temperatura y presión están duplicados —
Particulate Trap #1 y Particulate Trap #2.

## Los dos tipos de montaje según orientación: horizontal y vertical

La misma unidad DPF puede ir **horizontal o vertical** según el equipo:

### Montaje horizontal

Típico en:

- **Camiones tractocamiones**: bajo el chasis, entre las ruedas.
- **Buses interurbanos**: bajo la carrocería.
- **Camiones articulados de obra**: entre chasis y tolva.

Ventajas: menos altura total, menor centro de gravedad, más fácil de acceder
para mantenimiento desde abajo con un pit.

### Montaje vertical

Típico en:

- **Excavadoras**: junto al motor, ocupando el espacio vertical de la
  contracubierta.
- **Cargadores frontales**: verticalmente al costado del motor.
- **Motoniveladoras**: vertical entre motor y capot trasero.
- **Generadores estacionarios**: verticalmente sobre el escape del motor.

Ventajas: menor huella horizontal, más compacto lateralmente, mejor para
equipos con poco espacio a los lados.

**La orientación no afecta la eficiencia del filtrado**, pero sí requiere que
los sensores estén posicionados en los puntos correctos según el diagrama del
fabricante.

## ¿Qué NO es un DPF? Confusiones comunes

Es importante distinguir el DPF de otros componentes del sistema de escape que
a veces se confunden:

- **DOC (Diesel Oxidation Catalyst)**: catalizador de oxidación diesel. Va
  antes o después del DPF. Se encarga de oxidar hidrocarburos no quemados
  (HC) y monóxido de carbono (CO) — **no filtra particulado**.
- **SCR (Selective Catalytic Reduction)**: catalizador de reducción selectiva
  con urea/AdBlue. Reduce NOx — **tampoco filtra particulado**.
- **Silenciador**: reduce el ruido del escape — **no trata emisiones**.

En un motor Tier 4 Final o Euro VI moderno, todos estos componentes coexisten
en secuencia. Un sistema típico: motor → turbo → DOC → DPF → SCR → silenciador
→ salida. Cada uno con función específica.

## Por qué no se puede simplemente quitar el DPF

Muchos operadores y talleres —en Latinoamérica sobre todo— se han visto
tentados a **quitar el DPF** ("DPF delete") pensando que el motor va a rendir
más. Es un error técnico y legalmente riesgoso:

**Técnicamente**:

- La ECU está calibrada para **operar CON DPF instalado**. Al quitarlo, los
  sensores de presión diferencial y temperatura reportan valores fuera de
  rango y la ECU tira códigos de error (`Diagnostic Flash Codes` DFC 100,
  101, 102 en Cat).
- La ECU puede entrar en modo **derateo** (potencia reducida) o incluso
  **shutdown** protectivo si detecta ausencia de DPF por mucho tiempo.
- Sin DPF, el motor genera **opacidad extrema** — humo negro visible desde
  cientos de metros. Falla cualquier revisión técnica.

**Legalmente**:

- En EE.UU., quitar el DPF viola la Clean Air Act. Multa federal: hasta
  **USD 4.735 por unidad por día**. Cientos de casos judiciales existentes.
- En Chile, Colombia, Perú: la revisión técnica vehicular (RTV) mide
  opacidad y rechaza equipos que no cumplen. En Chile además hay
  responsabilidad ambiental civil.
- En obra en zonas urbanas, autoridades ambientales locales sancionan la
  operación de equipos con emisiones no controladas.

**La única forma correcta de "extender la vida" del DPF es mantenimiento
preventivo**: limpieza de cenizas periódica, chequeo de sensores, uso de
diesel ULSD (bajo azufre) y aceite motor CJ-4 o CK-4 (bajo contenido de
cenizas sulfatadas).

## Cuánto dura un DPF

En condiciones normales de operación:

- **Regeneración**: cada 8-24 horas de operación (la ECU la decide según la
  presión diferencial y la temperatura).
- **Limpieza de cenizas** (ash cleaning): cada 4.500-6.000 horas de
  operación. Se saca el DPF, se envía a un servicio especializado que
  usa aire comprimido inverso y a veces horno para quemar residuos.
- **Reemplazo del sustrato**: cada 15.000-20.000 horas o cuando la limpieza
  ya no baja la presión diferencial al rango normal. Costo típico:
  USD 3.000-6.000 para camiones, USD 6.000-12.000 para maquinaria pesada
  grande.

Un DPF mal mantenido puede tapar en 3.000-5.000 horas. Uno bien mantenido
llega tranquilamente a las 20.000 horas antes del reemplazo. **La diferencia
está en el mantenimiento**.

## En resumen

El DPF es el componente que hace que un motor diesel moderno sea legal en
la mayoría del mundo desarrollado. Filtra físicamente el hollín antes de que
salga al ambiente, con una eficiencia superior al 90%.

Existe en versiones single (motores hasta 600 HP) y dual (motores más
grandes), y se monta horizontal o vertical según el diseño del equipo. Es
un componente relativamente robusto pero **sensible al mantenimiento**: usar
diesel de mala calidad, aceite equivocado o saltear la limpieza de cenizas
lo puede matar prematuramente.

En próximos artículos vamos a abrir el DPF por dentro, ver cómo funciona la
regeneración, y cómo se hace el diagnóstico cuando algo falla.

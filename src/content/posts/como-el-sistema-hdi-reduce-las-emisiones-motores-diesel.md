---
title: "Sistema HDi common rail: cómo reduce las emisiones del diésel"
published: 2024-09-07
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo funciona la inyección HDi common rail: componentes, presiones, inyección piloto, principal y post, efecto en emisiones, evolución piezoeléctrica y fallas típicas."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "hdi"
  - "common-rail"
  - "emisiones"
  - "motores-diesel"
  - "inyeccion-directa"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/como-el-sistema-HDI-reduce-las-emisiones-motores-diesel
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué significa HDi y es lo mismo que common rail?"
    a: "HDi significa High-pressure Direct Injection, nombre comercial que usan Peugeot y Citroën para sus motores diésel con inyección directa de alta presión. Técnicamente es un sistema common rail: una bomba de alta presión llena un conducto común, el riel, y los inyectores se abren por orden de la ECU. Otras marcas lo llaman de otra manera (JTD, CDI, dCi, TDCi), pero el principio es el mismo."
  - q: "¿Por qué se inyecta una cantidad pequeña antes de la inyección principal?"
    a: "La inyección piloto quema una pequeña cantidad de combustible antes de la principal y eleva un poco la presión y la temperatura de la cámara. Así, cuando entra la carga principal, el retraso de encendido es corto, la subida de presión es menos brusca, baja el golpeteo característico del diésel y disminuye la formación de óxidos de nitrógeno. Es una de las razones por las que los diésel modernos son más silenciosos."
  - q: "¿Qué es la inyección post y para qué sirve?"
    a: "Es una inyección posterior a la principal. La post cercana ayuda a quemar hollín en la cámara. La post tardía no se quema en el cilindro: sale con los gases y eleva la temperatura de escape para que el filtro de partículas regenere. Si el filtro se regenera con frecuencia y el motor funciona mal, puede aparecer combustible diluido en el aceite, por eso el nivel de aceite debe revisarse."
  - q: "¿Cuáles son las fallas más comunes de un sistema HDi?"
    a: "Combustible contaminado con agua o suciedad que daña la bomba de alta presión y los inyectores, filtro de combustible tapado, entrada de aire en el circuito de baja presión, inyectores con fuga o que gotean, válvula EGR atascada con hollín, filtro de partículas obstruido por trayectos cortos y sensores de presión de riel fuera de rango. Casi todas empiezan con arranque difícil, humo, pérdida de potencia o modo de emergencia."
  - q: "¿Qué precaución hay que tener al intervenir un circuito de alta presión?"
    a: "Nunca se aflojan líneas de alta presión con el motor en marcha ni recién apagado: el combustible puede inyectarse a través de la piel y causar lesiones graves. Se deja que la presión baje según el manual, se limpia antes de abrir cualquier conexión y se tapan los orificios. La limpieza importa tanto como la seguridad: una partícula diminuta puede rayar un inyector o la bomba."
---

Un motor diésel moderno emite mucho menos que uno de hace veinte años, y buena parte de ese cambio viene de cómo se inyecta el combustible. El sistema HDi de Peugeot y Citroën es una aplicación de la inyección directa **common rail**: una bomba genera la presión, un riel la almacena y la ECU decide, inyector por inyector, cuánto y cuándo inyectar. Esta guía explica sus componentes, qué hacen las inyecciones piloto, principal y post, cómo se vincula eso con las emisiones y qué fallas conviene reconocer.

> **Importante.** Los valores de presión y los códigos son referenciales. El manual del fabricante y el escáner del vehículo mandan. El sistema de alta presión es peligroso y exige limpieza extrema.

## Por qué el diésel contamina y qué se busca controlar

La combustión del diésel produce cuatro familias de emisiones que preocupan:

- **NOx (óxidos de nitrógeno):** se forman con temperaturas altas y exceso de aire dentro de la cámara.
- **Partículas (hollín):** aparecen donde el combustible se quema con poco aire o llega a la pared de la cámara.
- **HC y CO:** combustible sin quemar o parcialmente quemado, sobre todo en frío y a baja carga.
- **CO₂:** proporcional al combustible consumido; solo baja si baja el consumo.

Lo difícil es que NOx y partículas se mueven en sentidos opuestos: lo que reduce una suele aumentar la otra. Por eso un diésel limpio necesita varias herramientas a la vez: una inyección precisa, recirculación de gases (EGR), un filtro de partículas y, en los casos exigentes, reducción catalítica selectiva.

## Cómo funciona el common rail

En un sistema anterior, la presión dependía del régimen: a bajas rpm la inyección era pobre. En el common rail la presión se **genera independientemente** del régimen y de la posición de los pistones, y se mantiene acumulada. Eso permite inyectar con alta presión incluso a ralentí y repetir varias inyecciones por ciclo.

### Componentes principales

1. **Circuito de baja presión:** depósito, bomba de transferencia, filtro con separador de agua. Alimenta la bomba de alta presión.
2. **Bomba de alta presión:** comprime el combustible y lo envía al riel. En muchos motores es de pistones radiales accionada por la distribución.
3. **Válvula reguladora o dosificadora:** ajusta cuánto combustible entra a la bomba o cuánto vuelve, para que el riel mantenga la presión pedida.
4. **Riel (rail):** acumulador común de los inyectores. Amortigua las pulsaciones.
5. **Sensor de presión del riel:** informa a la ECU; es un dato crítico.
6. **Inyectores:** solenoides o piezoeléctricos, abren por orden de la ECU y pulverizan en la cámara.
7. **ECU y sensores:** caudalímetro de aire, sensor de cigüeñal y de árbol de levas, temperatura de refrigerante y de combustible, posición del pedal.

### Presiones típicas

Las primeras generaciones trabajaban cerca de **1 350 bar**; luego se llegó a 1 600 bar y a más de 2 000 bar en las generaciones recientes, y algunos fabricantes hablan de valores aún mayores. Presión mayor significa gotas más finas, mejor mezcla y menos hollín. En ralentí la presión es mucho menor que a plena carga, del orden de unos cientos de bar; el valor exacto lo da el manual del motor y el escáner en datos en vivo.

## Las tres fases de la inyección

La ECU divide la entrega en varios pulsos por ciclo:

| Fase | Cuándo | Qué logra |
| --- | --- | --- |
| **Piloto (pre-inyección)** | Antes de la principal; puede haber una o dos | Suaviza el aumento de presión, reduce ruido y NOx |
| **Principal** | Alrededor del punto muerto superior | Entrega la mayor parte del par |
| **Post-inyección** | Después de la principal | Cercana: reduce hollín. Tardía: calienta el escape para regenerar el filtro de partículas |

Los **inyectores piezoeléctricos** conmutan más rápido que los de solenoide y permiten pulsos más cortos y más separados, con más control de la cantidad inyectada. Eso mejora la atomización, baja las emisiones y el ruido, y permite afinar la combustión según carga y temperatura.

## Cómo reduce las emisiones cada elemento

- **Alta presión y atomización fina:** menos combustible llega a la pared del cilindro y se quema con más aire, con menos hollín y menos HC.
- **Control electrónico:** la ECU ajusta el avance y la cantidad con la temperatura del motor, la carga y la presión de admisión, y mantiene la combustión dentro de los márgenes para NOx.
- **EGR:** lleva parte de los gases de escape de vuelta a la admisión. Baja la temperatura de combustión y, con ello, los NOx. Con el tiempo tapa el conducto y la válvula con hollín.
- **Filtro de partículas (FAP o DPF):** retiene las partículas y las quema en regeneración. En varios PSA usa un aditivo a base de cerina que se repone en un depósito aparte. Véase [cómo funciona el DPF y su catalizador](/posts/como-funciona-dpf-sustrato-catalizador/).
- **Catalizador de oxidación:** convierte HC y CO en CO₂ y agua, y ayuda a calentar el escape.
- **SCR con AdBlue:** inyecta una solución de urea en el escape que reduce los NOx a nitrógeno y agua. Es la solución más efectiva contra NOx; ver [ACERT frente a SCR](/posts/acert-vs-scr-tecnologias-emisiones/).
- **Hibridación y mejoras de eficiencia:** al consumir menos, bajan también las emisiones de CO₂.

Las normas Euro (y los estándares EPA en Estados Unidos) fijan límites cada vez más bajos; desde Euro 5 el filtro de partículas se volvió práctica habitual en turismos diésel.

## Fallas típicas, causas y comprobaciones

| Síntoma | Causas posibles | Qué revisar |
| --- | --- | --- |
| Arranque difícil, solo en caliente o en frío | Presión de riel baja, inyectores con fuga, entrada de aire | Presión de riel en datos en vivo durante el arranque; retornos de inyectores; mangueras de baja presión |
| Pérdida de potencia, modo de emergencia | Presión insuficiente, caudalímetro sucio, EGR atascada, filtro de partículas lleno | Códigos, caudalímetro, válvula EGR, presión diferencial del filtro |
| Humo negro | Mezcla rica, inyector goteando, falta de aire, turbo con fuga | Filtro de aire, turbo, inyectores, EGR |
| Humo blanco o azulado | Inyector defectuoso, combustible sin quemar, aceite en la combustión | Balance de cilindros, compresión, nivel y olor del aceite |
| Motor irregular o con golpeteo | Inyector pegado o con fuga | Prueba de retornos y corrección por cilindro |
| Códigos de presión de riel (por ejemplo P0087 o P0088, presión baja o alta) | Filtro tapado, bomba de alta presión, regulador, sensor | Filtro de combustible, presión de baja, sensor y regulador |

Dos causas aparecen en todos los talleres. **El agua y la suciedad en el combustible**: destruyen la bomba de alta presión y los inyectores, y la contaminación metálica de una bomba dañada recorre todo el circuito. El drenaje periódico del separador es barato; véase [cómo vaciar el agua del combustible](/posts/vaciado-agua-combustible/). **Los trayectos cortos**: impiden que el filtro de partículas regenere y lo saturan; ayuda un recorrido a velocidad constante y cargada cuando el vehículo lo pide. Para interpretar códigos del filtro, véase [códigos de error y diagnóstico del DPF](/posts/codigos-error-diagnostico-dpf/).

### Ejemplo de diagnóstico: arranque largo en caliente

Un HDi tarda varios segundos en arrancar cuando está caliente, pero en frío arranca normal. Causa probable: uno o más inyectores con fuga interna, que al calentarse dejan escapar combustible hacia el retorno y el riel no alcanza la presión de arranque. Cómo se confirma, en orden:

1. Con el escáner, se observa la presión de riel durante el arranque. Si sube muy despacio o no llega al umbral que pide la ECU, hay una pérdida o una bomba débil.
2. Se descarta el circuito de baja presión: filtro, mangueras y entrada de aire. Un filtro tapado o una toma de aire dan el mismo síntoma.
3. Se hace la prueba de retorno de inyectores: cada inyector devuelve un volumen pequeño en un tiempo fijo, y se comparan los cuatro. Uno que devuelve mucho más que los demás es el culpable. Los valores de aceptación los da el fabricante.
4. Si los retornos son normales, se sospecha de la bomba de alta presión o del regulador.

Cambiar inyectores sin esta secuencia es caro y falla con frecuencia: la causa a menudo es combustible contaminado que seguirá dañando las piezas nuevas.

### Reglas de trabajo en alta presión

- No se aflojan conexiones con el motor en marcha ni sin dejar caer la presión.
- Se limpia el exterior antes de abrir cualquier unión y se tapan las bocas abiertas.
- Los inyectores se vuelven a montar con juntas nuevas y con el par del manual.
- Tras cambiar un inyector o la bomba, la ECU suele necesitar codificar el inyector o hacer un aprendizaje con el escáner.
- Se usa el combustible y el filtro especificados; los aditivos no reemplazan al mantenimiento.

## Lo que hay que llevarse

El HDi no reduce las emisiones por sí solo: crea las condiciones para que la combustión sea limpia y deja que EGR, catalizador, filtro y, si corresponde, SCR terminen el trabajo. Para el mecánico, eso se traduce en tres hábitos: combustible limpio, diagnóstico con datos en vivo de presión de riel y correcciones de inyectores, y respeto estricto por la limpieza y la seguridad en el circuito de alta presión.

---
title: "Sistema CGI (Cooled Gas Induction) en Cat: válvula, cooler y sensor"
published: 2026-07-11
draft: false
featured: false
description: "El CGI reduce hasta 40% del NOx recirculando gases de escape enfriados. Explicamos válvula, cooler, flow sensor y las fallas más comunes."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "cgi"
  - "egr"
  - "reduccion-nox"
  - "sistema-acert"
  - "recirculacion-gases"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/sistema-cgi-cooled-gas-induction
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué es CGI y qué diferencia tiene con EGR?"
    a: "CGI (Cooled Gas Induction) es el nombre que Caterpillar le da a su sistema de recirculación de gases de escape enfriados. Es técnicamente equivalente al EGR (Exhaust Gas Recirculation) de otros fabricantes — misma idea, misma función, pero Cat lo llama con su propio marketing. Las diferencias son más de detalle de implementación (mapping específico, calibración) que de tecnología. En documentos técnicos de Cat verás CGI; en documentos genéricos o de otras marcas verás EGR. Ambos se refieren a lo mismo."
  - q: "¿Cómo reduce el NOx la recirculación de gases?"
    a: "El NOx se forma cuando el nitrógeno del aire alcanza temperaturas mayores a 1.500 °C durante la combustión. Al reintroducir gases de escape enfriados a la admisión, estos: (1) desplazan parte del oxígeno fresco, reduciendo la 'agresividad' de la combustión; (2) tienen alta capacidad calorífica y absorben calor del pico de combustión; (3) el resultado es que la temperatura pico baja unos 200-400 °C, reduciendo la formación de NOx en un 30-50%. Es una solución in-cylinder que trabaja en la fuente del problema."
  - q: "¿Por qué es crítico el CGI Cooler?"
    a: "Los gases de escape salen del motor a 400-600 °C. Si se reintrodujeran calientes a la admisión, en vez de REDUCIR la temperatura de combustión la AUMENTARÍAN — y el NOx subiría en vez de bajar. El CGI Cooler enfría estos gases a 100-150 °C usando el refrigerante del motor. Sin cooler funcionando, todo el sistema CGI se vuelve contraproducente. Es por eso que un cooler tapado o con fuga interna es una falla crítica que dispara múltiples códigos de error."
  - q: "¿Qué le pasa al motor si falla el CGI?"
    a: "Depende del tipo de falla. Si la válvula CGI se queda ABIERTA (no cierra cuando debe): el motor recibe demasiado gas recirculado, pierde potencia, humo negro, consumo alto, códigos de emisiones. Si se queda CERRADA: el NOx sube fuera de norma, pero el motor 'anda mejor' subjetivamente. Si el cooler tiene fuga interna (mezcla gases con refrigerante): pérdida de coolant, sobrecalentamiento, códigos, y a veces daño interno del motor. La ECU detecta estos escenarios y puede entrar en modo derateo protectivo."
  - q: "¿Cuánto tiempo dura el CGI Cooler?"
    a: "Vida útil típica de 8.000-15.000 horas de operación en condiciones normales. Los enemigos del cooler son: (1) hollín acumulado en el lado de gases, que obstruye el flujo y reduce transferencia térmica; (2) sedimentos y corrosión en el lado de refrigerante, que reduce eficiencia; (3) choque térmico repetido que fatiga las soldaduras internas y eventualmente causa fugas. Un mantenimiento preventivo del sistema de refrigeración (cambio de coolant en tiempo, buen inhibidor de corrosión) puede duplicar la vida del cooler."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "SAE International — Cooled EGR Technology for Diesel Engines"
    url: "https://www.sae.org/"
  - title: "Cat Service Information System — CGI System Diagnostics"
    url: "https://www.cat.com/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - diagrama-sistema-acert-2007
  - las-emisiones-reguladas-del-motor-diesel
---

Reducir el NOx sin sacrificar potencia es uno de los problemas más difíciles
de la ingeniería de motores diesel modernos. La solución que adoptó Caterpillar
—y que se conoce como **CGI (Cooled Gas Induction)**— es una variante refinada
de EGR (Exhaust Gas Recirculation): recircular gases de escape enfriados a la
admisión para **reducir la temperatura pico de combustión** y con ella la
formación de óxidos de nitrógeno.

Este artículo abre el sistema CGI componente por componente: la válvula, el
cooler, el flow sensor, y explica cómo se controla, cómo diagnostica fallas, y
qué mantenimiento requiere.

## El problema que resuelve el CGI

Como vimos en el [artículo sobre emisiones diesel](/posts/las-emisiones-reguladas-del-motor-diesel/),
el NOx (óxidos de nitrógeno) se forma cuando el N₂ del aire reacciona con el O₂
a temperaturas mayores a **1.500 °C** dentro del cilindro. Cuanto más eficiente
y "caliente" es la combustión, más NOx se produce.

Esto crea un dilema:

- **Combustión más caliente y eficiente** → mejor potencia, menos PM, menos
  CO... pero **más NOx**.
- **Combustión más fría** → menos NOx... pero **más PM, más HC, y menos
  potencia**.

Los ingenieros necesitaban una forma de bajar la temperatura pico de
combustión **sin arruinar el resto de las emisiones ni la potencia**. La
respuesta: **recircular gases de escape enfriados a la admisión**.

## Cómo funciona la reducción de NOx por CGI

Cuando los gases de escape enfriados (100-150 °C) se mezclan con el aire
fresco en la admisión, ocurren tres efectos simultáneos:

**1. Dilución del oxígeno**: los gases de escape ya tienen poco O₂ (el motor
lo consumió en la combustión previa). Reintroducirlos reduce el porcentaje
de O₂ en la mezcla → combustión menos agresiva, más lenta, menos temperatura
pico.

**2. Absorción de calor**: los gases de escape (mayoritariamente CO₂, H₂O,
N₂) tienen alta **capacidad calorífica específica**. Absorben parte del
calor generado durante la explosión, bajando la temperatura pico.

**3. Menor tiempo de residencia a alta temperatura**: la combustión más
lenta significa que los picos de temperatura son más bajos y de menor
duración. La formación de NOx es exponencial con la temperatura — bajar 200
°C puede reducir NOx un 30-50%.

Resultado neto: reducción de **NOx de hasta 40-50%** con impacto moderado en
el consumo de combustible (típicamente +2-4%).

## Los 3 componentes del sistema CGI

### 1. CGI Valve (válvula de recirculación)

Es una válvula controlada electrónicamente que **abre y cierra el paso de
gases de escape hacia la admisión**. La ECU la comanda según el mapa de
operación:

- **Ralentí**: casi cerrada — poca demanda, poco NOx a bajar.
- **Carga baja-media**: parcialmente abierta — recirculación moderada.
- **Carga alta**: más abierta, hasta alcanzar el máximo que la calibración
  permita.
- **Regeneración del DPF**: cerrada — para permitir alta temperatura del
  escape.

Ubicación física: **en la línea que conecta el escape (aguas abajo del
turbo de baja presión) con la admisión (aguas abajo del ATAAC)**.

El actuador de la válvula suele ser un **motor paso a paso** o un
**solenoide con posición variable**. La ECU lee la posición actual
mediante un sensor integrado y ajusta.

**Falla común**: la CGI valve se **atasca por depósitos de hollín** que se
acumulan en el eje y las paredes. Los gases de escape traen hollín aún
después del turbo, y con el enfriamiento se depositan como una capa
carbonosa dentro de la válvula. Con las horas puede pegarla o hacer que se
mueva errático.

### 2. CGI Cooler (intercambiador de calor)

Es un **radiador de tubos** ubicado entre la CGI valve y el ATAAC. Su función:
enfriar los gases de escape que van a ser recirculados.

**Construcción típica**:

- Cuerpo cilíndrico o rectangular de acero inoxidable resistente a corrosión.
- Interior con **múltiples tubos delgados** por donde pasan los gases del
  escape.
- **Alrededor de los tubos** circula el refrigerante del motor.
- Enfriamiento por convección: los gases calientes ceden calor al refrigerante.

**Temperaturas típicas**:

- **Entrada de gases**: 400-600 °C.
- **Salida de gases**: 100-150 °C.
- **Refrigerante**: ~85-95 °C (temperatura normal del motor).

**Fallas comunes**:

1. **Obstrucción por hollín** en los tubos internos. Reduce eficiencia
   térmica y aumenta contrapresión. Requiere limpieza o reemplazo.
2. **Fuga interna** — grieta en algún tubo hace que gases entren al
   circuito de refrigerante o el refrigerante entre al circuito de
   gases. Ambas son fallas críticas:
   - Gas → refrigerante: burbujas en el radiador, presión en el sistema
     de coolant.
   - Refrigerante → gas: pérdida de coolant sin fuga externa, humo blanco
     por el escape.
3. **Corrosión externa** por combinación de coolant viejo + calor +
   vibraciones. Se ve como fugas visibles hacia afuera.

Vida útil típica: **8.000-15.000 horas**. Reemplazo cuesta USD 800-2.500
según modelo del motor.

### 3. Flow Sensor (sensor de flujo)

Es un sensor que mide **cuántos gases están efectivamente recirculando**.
Se ubica típicamente entre el CGI Cooler y la conexión a la admisión.

Puede ser:

- **Sensor másico de flujo** (MAF adaptado para gases sucios) — mide masa
  por unidad de tiempo.
- **Sensor de presión diferencial** con orificio calibrado — mide diferencia
  de presión antes y después de un orificio y calcula flujo.

La ECU usa este dato para **cerrar el loop de control**: si abre la CGI
valve un 30% pero el flujo real es solo el 15% del esperado, hay un problema
(válvula agarrada, cooler tapado, fuga en línea) y genera código de error.

**Falla común**: sensor de flujo contaminado por hollín → reporta lecturas
erráticas. Requiere limpieza o reemplazo.

## Cómo la ECU controla el CGI

El sistema CGI es un **loop cerrado** controlado por la ECU. El flujo de
control:

1. La ECU calcula **cuánto NOx debería estar produciendo el motor** según
   las condiciones actuales (RPM, torque demandado, temperatura, altura).
2. Consulta la **tabla de calibración** que dice cuánto gas debe recircular
   para ese punto de operación.
3. Comanda a la **CGI Valve** a la posición correspondiente.
4. Lee el **Flow Sensor** para confirmar que el flujo real coincide con el
   esperado.
5. Si hay diferencia, ajusta la posición de la válvula.
6. Monitorea temperaturas del cooler para verificar que el enfriamiento
   funciona.
7. Si algún parámetro está fuera de rango → **código de error**.

Todo esto ocurre en **milisegundos, continuamente**. Es una de las funciones
más complejas de la ECU.

## Mantenimiento del sistema CGI

**Preventivo (recomendado)**:

- **Cambio de refrigerante en tiempo** (cada 6.000 horas o 3-5 años según
  fabricante). Refrigerante viejo pierde inhibidores anticorrosión y
  ataca el cooler internamente.
- **Uso de coolant Cat OEM o equivalente ELC** (Extended Life Coolant).
  Coolants baratos genéricos pueden ser incompatibles químicamente.
- **Chequeo periódico del sistema de refrigeración**: presión, ausencia
  de fugas, radiador limpio.
- **Limpieza externa del CGI valve** cada 4.000-6.000 horas: desmontar y
  limpiar depósitos con solvente específico.

**Correctivo (cuando falla)**:

- **Válvula agarrada**: desmontar, limpiar mecánicamente, verificar
  movimiento libre. Si el actuador falla, reemplazar.
- **Cooler tapado**: limpieza química con productos específicos. Si no
  se restaura eficiencia, reemplazo.
- **Cooler con fuga interna**: reemplazo (no se puede reparar).
- **Flow sensor errático**: limpieza y reinstalación, o reemplazo.

## En resumen

El sistema CGI es la respuesta de Cat al desafío de reducir NOx sin
sacrificar el resto del motor. Recirculando **gases de escape enfriados**
a la admisión, baja la temperatura pico de combustión y reduce el NOx un
40-50%.

Tres componentes hacen el trabajo: la **válvula CGI** (comanda el flujo),
el **cooler** (enfría los gases), y el **flow sensor** (verifica que
efectivamente esté recirculando lo esperado). Cada uno puede fallar con
síntomas distintos y requiere diagnóstico específico.

Es también el componente del sistema ACERT que **más mantenimiento
preventivo agradece** — un cooler bien cuidado dura el doble que uno
descuidado, y una válvula limpia se atasca mucho menos que una con años
de hollín acumulado. La diferencia está en la disciplina de servicio.

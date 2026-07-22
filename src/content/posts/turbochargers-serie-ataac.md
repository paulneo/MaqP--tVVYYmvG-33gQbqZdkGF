---
title: "Turbochargers en serie y ATAAC en motores Cat ACERT"
published: 2026-07-14
draft: false
featured: false
description: "Los motores ACERT usan dos turbos en serie + ATAAC para presiones de hasta 4 bar. Cómo funciona cada etapa y por qué la temperatura importa."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "turbocharger"
  - "turbo-serie"
  - "ataac"
  - "sobrealimentacion"
  - "sistema-acert"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/turbochargers-serie-ataac
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué dos turbos en serie en vez de uno solo más grande?"
    a: "Un solo turbo grande tiene mucho lag (retardo) a bajas RPM y no logra las presiones altas requeridas para las emisiones EPA Tier 3+. Dos turbos en serie resuelven ambos problemas: el turbo pequeño de alta presión responde rápido a bajas RPM (bajo lag), y el turbo grande de baja presión se hace cargo a altas RPM/carga (alto flujo). Es lo mejor de ambos mundos: respuesta inmediata + alta presión máxima. La contra: mayor complejidad, más componentes que pueden fallar, mayor costo."
  - q: "¿Cuál es la diferencia entre intercooler y aftercooler?"
    a: "En sentido estricto no hay diferencia — ambos términos se refieren a lo mismo: un intercambiador que enfría el aire comprimido después del turbo, antes de que entre al motor. 'Intercooler' es más común en autos y motos. 'Aftercooler' es el término técnico preferido en motores industriales pesados. Cat usa 'ATAAC' (Air-to-Air Aftercooler) porque el aire comprimido se enfría con aire ambiente atravesando un radiador, en vez de con refrigerante líquido. Otros fabricantes usan aftercoolers 'aire-agua' (con refrigerante); Cat eligió aire-aire por simplicidad y confiabilidad."
  - q: "¿Cuánto se calienta el aire al ser comprimido?"
    a: "Al comprimir aire aumenta su temperatura según la relación de compresión. En un motor ACERT típico con dos turbos en serie, el aire entra a temperatura ambiente (25-40 °C), sale del primer turbo (baja presión) a 100-150 °C, y sale del segundo turbo (alta presión) a 180-230 °C. Si ese aire caliente entrara directo al motor, la densidad sería baja (menos oxígeno por volumen), la eficiencia caería, y el NOx se dispararía por altas temperaturas de combustión. Por eso el ATAAC lo enfría a 40-60 °C antes de la admisión."
  - q: "¿Qué es el 'boost' y cuánto es lo normal en un ACERT?"
    a: "El boost es la presión de aire por encima de la atmosférica que produce el turbo. Se mide en bar, psi o kPa. Un motor atmosférico opera a 1 bar (presión ambiente); un motor turboalimentado agrega presión adicional (el boost). En motores ACERT bajo carga plena, el boost total puede alcanzar 2.5-4 bar (36-58 psi). Esto significa que en el cilindro entra 2.5-4 veces más aire que en un motor atmosférico equivalente, permitiendo quemar más combustible y producir más potencia sin aumentar el tamaño del motor."
  - q: "¿Qué fallas típicas tienen los turbos en serie ACERT?"
    a: "Las más comunes son: (1) fugas de aceite del turbo por sellos gastados — el aceite entra al aire de admisión y aumenta emisiones de PM; (2) turbo agarrado (compresor o turbina bloqueados) por depósitos o daño interno — pérdida de potencia notable; (3) fugas en las mangueras y ductos entre turbo, ATAAC y admisión — pérdida de boost, humo negro, potencia caída; (4) ATAAC obstruido externamente (barro, polvo, insectos) — sobrecalentamiento del aire de admisión; (5) sensores de presión de boost sucios o descalibrados — códigos de error y modo protectivo del motor. El diagnóstico requiere lecturas con Cat ET del boost real vs esperado en cada etapa."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "SAE International — Series Turbocharging in Heavy-Duty Diesel Engines"
    url: "https://www.sae.org/"
  - title: "Cat Service Information System — Air Induction System"
    url: "https://www.cat.com/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - sistema-cgi-cooled-gas-induction
  - diagrama-sistema-acert-2007
---

Uno de los cambios más importantes del sistema ACERT respecto de motores
diesel previos es cómo comprime y prepara el aire antes de meterlo al
cilindro. Ya no es un turbo simple con enfriador básico: son **dos
turbochargers en serie** más un **ATAAC (Air-to-Air Aftercooler)**
optimizado, todo controlado electrónicamente.

Este artículo abre el circuito de aire de admisión componente por
componente. Explica por qué se necesitan dos turbos, por qué la
temperatura del aire importa tanto como la presión, y qué fallas típicas
aparecen con las horas.

## El circuito de aire completo en un ACERT

Vamos a seguir el recorrido de una molécula de aire desde que entra hasta
que llega al cilindro:

```
Filtro de aire → Turbo LP (baja presión) → Turbo HP (alta presión) →
  → ATAAC (enfriador aire-aire) → Colector de admisión →
  → CGI mezcla con gases recirculados → Válvula de admisión → Cilindro
```

Y el escape, en paralelo:

```
Cilindro → Válvula de escape → Colector de escape →
  → Turbo HP (turbina) → Turbo LP (turbina) →
  → DPF (filtro de partículas) → Silenciador → Atmósfera
```

Cada componente tiene una función crítica. Un fallo en cualquiera degrada
las emisiones y la potencia del motor. Veamos cada uno.

## Los dos turbochargers en serie

### Turbo LP (Low Pressure, baja presión)

Es el **turbo grande**, ubicado más lejos del motor. Su turbina recibe los
gases de escape ya expandidos (con menos energía) del turbo HP. Su
compresor toma aire atmosférico fresco del filtro.

**Características**:

- Turbina y compresor **grandes** — alto flujo másico.
- Relación de presión típica: **2:1 a 2.5:1**.
- Óptimo a **altas RPM y alta carga** — cuando hay mucho gas de escape.
- Menos eficiente a bajas RPM (poco flujo de gas de escape).

**Función**: hacer el trabajo grueso de compresión cuando el motor está
demandando mucha potencia.

### Turbo HP (High Pressure, alta presión)

Es el **turbo pequeño**, ubicado más cerca del motor. Su turbina recibe
gases de escape directos del colector (llenos de energía). Su compresor
toma aire ya pre-comprimido por el turbo LP.

**Características**:

- Turbina y compresor **pequeños** — bajo momento de inercia.
- Relación de presión típica: **1.8:1 a 2:1**.
- Óptimo a **bajas RPM** — reacciona rápido, sin lag.
- Se puede **bypass-ear** a altas RPM/carga mediante una válvula wastegate
  cuando el LP ya está haciendo suficiente trabajo.

**Función**: eliminar el turbo lag a bajas RPM y complementar al LP en
transientes.

### La magia de tenerlos en serie

Con dos turbos en serie, la presión final se **multiplica**, no se suma:

```
Boost total = Presión LP × Presión HP
```

Ejemplo típico bajo carga plena:

- Turbo LP comprime aire de 1.0 bar (atmosférica) a 2.2 bar → factor 2.2.
- Turbo HP recibe aire a 2.2 bar y lo comprime a 3.8 bar → factor 1.7.
- **Boost total: 3.8 bar** (equivalente a un motor atmosférico con 3.8×
  más aire).

Un motor con dos turbos en serie puede alcanzar boosts totales de **4-4.5
bar**, algo prácticamente imposible con un solo turbo sin lag intolerable.

## El ATAAC (Air-to-Air Aftercooler)

Cuando el aire sale del turbo HP a 200-230 °C, es una masa gaseosa
caliente y **poco densa**. La densidad del aire disminuye con la
temperatura. Si entrara así al motor:

- Habría **menos moles de O₂ por unidad de volumen** — quemarías menos
  combustible por ciclo.
- La temperatura pico de combustión sería **muy alta** — NOx elevado.
- La eficiencia térmica caería.

El ATAAC resuelve esto **enfriando el aire comprimido** antes de que
entre al motor.

### Construcción del ATAAC

Es un **radiador aire-aire** ubicado típicamente en la parte delantera de
la máquina, en el mismo bloque de radiadores que el del refrigerante y el
del aceite hidráulico.

**Componentes**:

- **Núcleo (core)**: tubos delgados de aluminio con aletas de disipación.
- **Tanques laterales** de entrada y salida del aire comprimido.
- **Ventilador**: el mismo ventilador principal del sistema de
  refrigeración le pasa aire ambiente al ATAAC.

### Rendimiento típico

- **Entrada de aire**: 200-230 °C, 3.5-4 bar.
- **Salida de aire**: 40-60 °C, 3.3-3.9 bar (leve pérdida de presión).
- **Eficiencia**: 75-85% (de qué tanto de la diferencia entrada-ambiente
  se recupera).

### Fallas comunes

1. **Obstrucción externa**: barro, tierra, polvo, insectos taponando las
   aletas. Reduce el flujo de aire ambiente que enfría el core → aire de
   admisión sale caliente → NOx sube → códigos de error.
2. **Obstrucción interna**: raro, pero puede pasar si el aceite del turbo
   se filtra y se deposita en los tubos.
3. **Fisuras y fugas**: por golpes o fatiga por vibraciones. Se pierde
   boost.
4. **Mangueras y abrazaderas**: los conductos de goma que unen turbo con
   ATAAC y ATAAC con colector se agrietan con el tiempo y el calor. Fuga
   silenciosa que reduce potencia.

### Mantenimiento

- **Limpieza externa cada 250-500 horas** con aire comprimido a baja
  presión (sin dañar aletas) y agua a presión moderada.
- **Inspección visual de mangueras** cada servicio (grietas, abrazaderas
  flojas).
- **Chequeo de boost real vs esperado** con Cat ET si hay síntomas de
  pérdida de potencia.

## Sensores del circuito de aire

Todo este sistema está monitoreado por sensores que reportan a la ECU:

- **MAF (Mass Air Flow) sensor**: masa de aire entrando al motor.
- **Boost pressure sensor (LP)**: presión después del turbo LP.
- **Boost pressure sensor (HP)**: presión después del turbo HP.
- **Intake manifold pressure sensor**: presión en el colector de
  admisión (después de mezclarse con CGI).
- **Intake manifold temperature sensor**: temperatura después del ATAAC.
- **Barometric pressure sensor**: presión ambiente para corrección por
  altura.

Si cualquier lectura está fuera de rango, la ECU:

1. Genera un **DFC (Diagnostic Flash Code)**.
2. Entra en **modo protectivo** (reduce potencia o RPM).
3. Ajusta la calibración de inyección para minimizar daño.

## Cómo diagnosticar problemas del circuito de aire

**Síntomas típicos**:

- Pérdida de potencia notable, sobre todo bajo carga.
- Humo negro (falta de aire = mezcla rica).
- Consumo alto.
- Códigos de error relacionados con boost o temperatura de admisión.

**Procedimiento**:

1. Con **Cat ET** conectado, leer **boost real vs esperado** a distintas
   RPM/carga.
2. Si boost real < esperado → fuga en algún ducto o turbo dañado.
3. Chequear **temperatura de admisión después del ATAAC** — si está muy
   alta con ambiente normal, el ATAAC está tapado o dañado.
4. Inspección visual del **ATAAC exterior** (obstrucción).
5. Prueba de **presurización** del sistema con aire comprimido para
   ubicar fugas.
6. Chequeo de **movimiento libre** de los turbos (eje sin play
   excesivo).

## En resumen

Los motores ACERT usan una arquitectura de aire mucho más sofisticada
que los motores diesel de generaciones previas. Dos turbos en serie
—uno pequeño para respuesta rápida a bajas RPM y uno grande para alto
flujo bajo carga— logran boosts de hasta 4 bar sin lag intolerable.

El **ATAAC** enfría el aire comprimido de más de 200 °C a menos de 60
°C, aumentando la densidad y reduciendo la temperatura pico de
combustión. Sin él, el resto del sistema ACERT no podría cumplir con
las normas EPA.

Toda la cadena está monitoreada por sensores que permiten a la ECU
detectar cualquier degradación y activar modos protectivos antes de
que ocurra un daño mayor. Pero la ECU no puede corregir un ATAAC
tapado o un turbo con play — eso es trabajo del técnico. Ahí es donde
la disciplina de mantenimiento marca la diferencia.

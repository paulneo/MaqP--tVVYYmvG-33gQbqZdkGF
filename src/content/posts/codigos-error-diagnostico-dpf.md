---
title: "Códigos de error del DPF: los más comunes y cómo resolverlos"
published: 2026-07-08
draft: false
featured: false
description: "Los 12 códigos DFC más comunes del DPF, qué significa cada uno, flujo de diagnóstico paso a paso y herramientas necesarias en taller."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "dpf"
  - "codigos-error"
  - "diagnostico-motor"
  - "cat-et"
  - "troubleshooting"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/codigos-error-diagnostico-dpf
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Qué herramienta uso para leer los códigos del DPF en un motor Cat?"
    a: "La herramienta oficial es Cat ET (Electronic Technician), el software de Caterpillar que se conecta al puerto de diagnóstico del motor (conector CAT/J1939) mediante una interface. Cat ET permite leer códigos activos y históricos, ver parámetros live (presión, temperatura, flujo), y ejecutar procedimientos de diagnóstico específicos (test de sensores, regeneración forzada, calibraciones). Costo: licencia anual USD 400-800. Alternativas: JPRO Professional Diagnostic (multimarca), Nexiq, y scanners genéricos J1939 más limitados."
  - q: "¿Qué es un Diagnostic Flash Code (DFC)?"
    a: "Es el sistema de códigos de diagnóstico específico de Caterpillar. Cada código es un número que identifica una condición particular (ejemplo: DFC 100 = presión diferencial DPF alta). Además de leerse con Cat ET, algunos DFC se pueden ver como parpadeos de la luz de check engine del tablero: N parpadeos, pausa, M parpadeos = código NM. Es útil cuando no hay scanner disponible. Los DFC más críticos también aparecen como texto en el display del operador."
  - q: "¿Qué significa que el motor esté en modo derateo?"
    a: "Derateo (o 'derate' en inglés) es cuando la ECU reduce voluntariamente la potencia máxima disponible del motor para protegerlo. Se dispara ante condiciones que si no se atienden pueden dañar el motor o sus componentes de emisiones. Niveles típicos: nivel 1 (75-90% de potencia), nivel 2 (50-70%), nivel 3 (25-40% o solo ralentí). El DPF muy tapado, sensores fallados, o falta de urea son causas típicas. Se soluciona resolviendo la causa raíz y limpiando los códigos con Cat ET."
  - q: "¿Puedo borrar los códigos sin resolver el problema?"
    a: "Sí técnicamente, pero es una PÉSIMA idea. Cat ET permite borrar códigos activos con un clic, pero si la condición sigue presente el código volverá a aparecer en minutos. Peor: la ECU sigue monitoreando el problema y puede escalar al modo derateo o shutdown protectivo. Borrar códigos solo tiene sentido DESPUÉS de haber resuelto la causa raíz — para confirmar que el fix funcionó. Borrar códigos como parche temporal es una práctica que a veces se ve en talleres improvisados y termina en motores dañados."
  - q: "¿Qué causa que aparezcan códigos DPF sin una razón aparente?"
    a: "Las causas más comunes son: (1) sensor fallado (temperatura o presión diferencial) que reporta datos erráticos — muy común, sobre todo con conectores oxidados; (2) obstrucción parcial en las mangueras de los taps de presión — se llenan con hollín/agua y dan lecturas falsas; (3) fuga de escape antes del DPF que desestabiliza las lecturas; (4) filtro de aire tapado que genera exceso de hollín; (5) inyectores gastados; (6) cambio de combustible a uno con más azufre. El flujo de diagnóstico es siempre: verificar sensores → verificar mangueras → verificar mecánica del motor."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Cat Service Information System — DPF Diagnostic Trouble Codes"
    url: "https://www.cat.com/"
  - title: "Cummins — SAE J1939 Diagnostic Trouble Codes"
    url: "https://www.cummins.com/"
related:
  - que-es-un-dpf-diesel-particulate-filter
  - regeneracion-dpf-pasiva-activa-forzada
  - mantenimiento-limpieza-cenizas-dpf
  - diagnostico-fallas-sistema-acert
---

Cuando un motor Cat con sistema ACERT tira un código de error relacionado al
DPF, el operador ve una luz encendida en el tablero, a veces un mensaje de
texto ("Regeneration Required", "Excessive Backpressure"), y en casos serios
el motor entra en **modo derateo** con potencia reducida.

Este artículo es la guía técnica para técnicos que necesitan diagnosticar
estos códigos: cuáles son los más frecuentes, qué significan, y cómo se
resuelven paso a paso.

## Cómo se estructuran los códigos Cat

Caterpillar usa un sistema propio llamado **Diagnostic Flash Codes (DFC)**
que identifica cada condición con un número. Los códigos se ven de tres
formas:

1. **Cat ET (Electronic Technician)** — el scanner oficial. Muestra el
   código completo con descripción de texto.
2. **Parpadeos en luz de check engine** — para códigos críticos, la luz
   parpadea un patrón que se puede decodificar sin scanner. Método útil en
   campo cuando no hay computadora.
3. **Display del operador** — algunos modelos muestran mensajes de texto
   directo ("DPF Regen Required", "Coolant Temp High").

Los códigos J1939 (protocolo estándar de la industria) también se usan como
sistema paralelo — un "SPN" (Suspect Parameter Number) + "FMI" (Failure
Mode Identifier) identifican la falla.

## Los 12 códigos DPF más comunes

### DFC 100 / SPN 3251 — DPF Restriction (High Backpressure)

**Qué significa**: la presión diferencial del DPF está por encima del rango
normal para las condiciones actuales de operación.

**Causas comunes**:
- Hollín acumulado esperando regeneración.
- Cenizas cerca del límite (limpieza atrasada).
- Sensor diferencial fallado o mangueras obstruidas.
- Fuga de escape aguas arriba del DPF.

**Diagnóstico**:
1. Verificar en Cat ET la lectura live de presión diferencial. ¿Es
   consistente con las horas de operación?
2. Si es alta pero razonable → intentar regeneración activa/parked.
3. Si es alta pero el DPF debería estar limpio → chequear sensor y
   mangueras.

### DFC 101 / SPN 3609 — DPF Temperature (Inlet)

**Qué significa**: sensor de temperatura de entrada del DPF fuera de rango.

**Causas comunes**:
- Sensor fallado (muy común, 60% de los casos).
- Cable/conector con corrosión.
- Fuga de escape antes del sensor.

**Diagnóstico**:
1. Ver lectura live en Cat ET: ¿0 °C, valor absurdo, error de comunicación?
2. Medir resistencia del sensor con multímetro contra spec del manual.
3. Si sensor OK, revisar cable y conector.

### DFC 102 / SPN 3610 — DPF Temperature (Outlet)

**Qué significa**: sensor de temperatura de salida del DPF fuera de rango.

**Causas**: idénticas a DFC 101 pero del sensor de salida.

### DFC 103 — DPF Regeneration Failed

**Qué significa**: se intentó una regeneración activa o forzada y la
temperatura del DPF no llegó al valor objetivo.

**Causas comunes**:
- Post-inyección insuficiente (inyectores gastados).
- DOC (Diesel Oxidation Catalyst) degradado — no genera calor esperado.
- Sensores de temperatura reportando mal.
- Fuga de escape reduce temperatura efectiva.

### DFC 104 — DPF Excessive Regeneration Frequency

**Qué significa**: el sistema está pidiendo regeneraciones más frecuentes
de lo normal.

**Causas comunes**:
- Motor operando en carga muy baja crónicamente (ralentí prolongado).
- Inyectores mal atomizando → más hollín por ciclo.
- Turbo con problemas → aire insuficiente → combustión pobre.
- Filtro de aire sucio.

### DFC 105 — DPF Ash Cleaning Required

**Qué significa**: acumulación de cenizas cerca del límite. Requiere
limpieza física del DPF por servicio especializado.

**Solución**: llevar el DPF a limpieza profesional (ver artículo específico
de mantenimiento).

### DFC 108 / SPN 3701 — CGI Cooler Efficiency

**Qué significa**: el CGI Cooler no está enfriando lo suficiente los gases
de recirculación.

**Causas comunes**:
- Cooler obstruido internamente por hollín o depósitos.
- Fuga interna en el cooler (mezcla gases con refrigerante).
- Problemas en el circuito de refrigeración del motor.
- Termostato del refrigerante fallado.

### DFC 110 — CGI Valve Position Error

**Qué significa**: la válvula CGI no está en la posición que la ECU le pidió.

**Causas comunes**:
- Válvula agarrada por depósitos (muy común, el CGI valve trabaja con
  gases sucios).
- Motor del actuador de válvula fallado.
- Sensor de posición del actuador con problema.

### DFC 200 — Fuel Rail Pressure

**Qué significa**: la presión del riel de inyectores está fuera del target.

**Causas comunes**:
- Bomba de alta presión con desgaste.
- Válvula reguladora de presión (PRV) fallada.
- Inyector con fuga (aunque más común es que aparezca código específico).

### DFC 300 — Injector Malfunction

**Qué significa**: uno o más inyectores están reportando comportamiento
anómalo.

**Causas comunes**:
- Inyector con fuga interna → cilindro con mala combustión.
- Bobina del inyector abierta o corta.
- Cable/conector con problema.

### DFC 428 — Air Filter Restriction

**Qué significa**: el filtro de aire está restringiendo el flujo más de lo
normal.

**Solución**: reemplazar filtro de aire.

### DFC 900 — Engine Derate

**Qué significa**: la ECU activó modo derateo por combinación de otras
fallas activas.

**Solución**: resolver los códigos originales (no es un código en sí
mismo, es consecuencia de otros).

## Flujo de diagnóstico estándar

Cuando aparece un código DPF, el procedimiento es siempre el mismo:

### Paso 1: leer todos los códigos con Cat ET

Conectar el scanner y sacar tanto los códigos **activos** (falla actualmente
presente) como los **históricos** (que aparecieron y desaparecieron).
Fotografiar la pantalla para referencia.

### Paso 2: identificar código principal vs secundarios

Muchos códigos aparecen en cascada. Un sensor fallado puede generar 5
códigos derivados. Identificá cuál es el **root cause** (el primero
cronológicamente, no siempre el que aparece primero en la lista).

### Paso 3: verificar el sensor mencionado en el código

En Cat ET, buscá la lectura live del sensor específico. ¿Devuelve valores
razonables? ¿Los valores cambian coherentemente con las condiciones del
motor?

### Paso 4: verificar cableado y conector

**El 60% de los códigos de sensor son problema de cable, no del sensor
mismo**. Revisar:
- Conector limpio, sin corrosión.
- Cable sin cortes ni raspaduras.
- Continuidad entre conector y ECU con multímetro.
- Voltaje de referencia en pines correctos.

### Paso 5: verificar el sensor con multímetro

Si el cable está OK, medir resistencia del sensor. Cat da valores
específicos para cada modelo — típicamente 500-1.500 ohms a temperatura
ambiente.

### Paso 6: si sensor OK, buscar la causa física

Si tanto sensor como cable están OK y el código persiste, la causa es
física en el sistema. Ejemplos:
- Presión diferencial alta → hollín/cenizas acumuladas → limpieza requerida.
- Temperatura outlet baja → DOC degradado → reemplazo.
- CGI position error → válvula pegada → limpieza mecánica.

### Paso 7: reemplazar componente o hacer intervención

Ejecutar la acción correctiva. En Cat ET, después de resolver, borrar los
códigos y hacer una prueba de operación para confirmar.

## Herramientas necesarias en el taller

Para diagnóstico serio de sistema ACERT:

- **Cat ET (Electronic Technician)** con interface (Comm Adapter III o
  similar). Costo: licencia + adapter USD 800-1.500.
- **Multímetro digital de calidad** (Fluke 87V o similar): medir
  resistencia, voltaje, continuidad.
- **Manómetro digital para presión de escape** — verificar sensor
  diferencial contra medición real.
- **Termómetro infrarrojo** o **pinza de temperatura de escape** —
  verificar sensores de temperatura del DPF.
- **Kit de manómetros de presión de aire** (0-1 bar) para diagnóstico de
  restricciones.
- **Osciloscopio automotor** (opcional, para casos difíciles) —
  visualizar señales de sensores con ruido.

## En resumen

Los códigos de error del DPF no son "el motor falló" — son la ECU
avisando que **algo está fuera de lo normal**. Con Cat ET, un multímetro y
el flujo de diagnóstico correcto, se resuelve el 90% de los casos sin
reemplazar componentes caros.

La regla de oro: **nunca reemplazar sin diagnosticar**. Cambiar un DPF
completo por USD 8.000 cuando el problema real era un sensor de USD 300 o
un conector oxidado es un error caro y evitable. Tomarse el tiempo para
seguir el flujo diagnóstico paso a paso es lo que separa a un buen técnico
de un cambiapiezas.

---
title: "Diagnóstico de fallas en motores ACERT: Cat ET, códigos DFC y flujo de trabajo del técnico"
published: 2026-08-20
draft: false
featured: false
description: "Un motor ACERT que empieza a fallar necesita diagnóstico electrónico serio. Explicamos el uso de Cat ET, los códigos DFC más comunes, el flujo lógico para diagnosticar y las herramientas de taller indispensables."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "diagnostico-fallas"
  - "cat-et"
  - "codigos-dfc"
  - "sistema-acert"
  - "servicio-caterpillar"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/diagnostico-fallas-acert-herramientas
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Qué es Cat ET y por qué es esencial?"
    a: "Cat ET (Electronic Technician) es el software oficial de Caterpillar para diagnóstico de motores y máquinas equipadas con ECU/ECM. Corre en una laptop Windows y se conecta al motor mediante un cable adaptador (Communication Adapter III o IV) al puerto de diagnóstico J1939. Permite: leer códigos activos e históricos, ver parámetros en vivo (RPM, presiones, temperaturas, boost, etc.), ejecutar tests activos (cutout de cilindros, sweep de solenoides), reprogramar la ECU, calibrar sensores. Sin Cat ET no se puede hacer diagnóstico serio de un motor ACERT — es equivalente al OBD-II para autos modernos. Licencia oficial USD 500-1.500 anual, más el cable USD 300-800."
  - q: "¿Qué diferencia hay entre un código 'activo' y uno 'histórico'?"
    a: "Un código ACTIVO significa que la falla está ocurriendo AHORA — el sensor está reportando un valor fuera de rango en este momento. Un código HISTÓRICO significa que la falla ocurrió antes pero ya no está activa; queda registrada para diagnóstico. Los códigos también tienen 'contadores de ocurrencia' que indican cuántas veces se ha activado esa condición. Un código activo con muchas ocurrencias es prioridad alta — significa que el problema es recurrente y persistente. Un código histórico sin ocurrencias recientes puede ser un evento aislado ya resuelto (por ejemplo, arranque en frío extremo)."
  - q: "¿Puedo diagnosticar con OBD-II genérico?"
    a: "No. Los motores Cat ACERT usan protocolo J1939 (para vehículos pesados), no OBD-II (para autos livianos). Los códigos DFC de Cat son específicos y no aparecen en los scanners genéricos automotrices. Podés leer datos básicos con un scanner J1939 genérico, pero no vas a poder ejecutar tests activos ni interpretar códigos específicos de Cat. Solo Cat ET (o clones muy específicos) puede hacer diagnóstico completo. Es una realidad frustrante para talleres que no son concesionarios oficiales — la barrera de entrada es alta."
  - q: "¿Cuál es el orden lógico para diagnosticar un motor ACERT que falla?"
    a: "El flujo estándar es: (1) escuchar al operador — cuándo empezó el problema, en qué condiciones ocurre, síntomas específicos; (2) inspección visual — buscar lo obvio (fugas, mangueras rotas, luces encendidas, olor a combustible); (3) chequeo de niveles y fluidos — aceite, refrigerante, combustible; (4) conectar Cat ET, leer códigos activos e históricos; (5) revisar contadores de ocurrencia y datos congelados (freeze frame); (6) parámetros en vivo — comparar valores actuales vs esperados; (7) tests activos según los códigos (cylinder cutout, sensor sweep, actuator test); (8) reparación específica según diagnóstico; (9) borrar códigos, prueba de operación, confirmar reparación. Nunca saltarse pasos — sobre todo el (1) escuchar al operador, que suele dar la clave."
  - q: "¿Qué hago si Cat ET no se conecta al motor?"
    a: "Chequear en este orden: (1) que la máquina esté en 'ignition ON' pero motor apagado; (2) que el cable adaptador esté firmemente conectado en ambos extremos (laptop y puerto J1939 del motor); (3) que los drivers del cable estén instalados correctamente (Windows Device Manager); (4) que el firmware del cable esté actualizado; (5) que la licencia de Cat ET esté vigente; (6) intentar con otro puerto USB de la laptop; (7) verificar que el puerto J1939 del motor no tenga pines dañados o corrosión; (8) chequear que las baterías del motor estén con voltaje adecuado (menos de 11V puede impedir comunicación). Si todo eso está bien y no conecta, puede ser un problema del harness de comunicación del motor mismo — requiere diagnóstico eléctrico con multímetro."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Cat Electronic Technician User Manual"
    url: "https://www.cat.com/"
  - title: "SAE J1939 — Serial Control and Communications Vehicle Network"
    url: "https://www.sae.org/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - codigos-error-diagnostico-dpf
  - mantenimiento-preventivo-acert
---

Cuando un motor ACERT empieza a fallar, el operador experimentado nota
los síntomas: pérdida de potencia, humo raro, luces del tablero, un
ruido nuevo. Pero traducir esos síntomas en una **causa raíz específica**
requiere una herramienta que los motores diesel mecánicos no
necesitaban: **electrónica de diagnóstico**.

Este artículo cierra el círculo del sistema ACERT explicando cómo se
diagnostica en la práctica: qué es Cat ET, cómo leer códigos DFC, y
cuál es el flujo lógico que sigue un técnico serio para no gastar tiempo
ni piezas cambiando "por probar".

## Cat ET: la herramienta madre del diagnóstico

**Cat ET (Electronic Technician)** es el software oficial de
Caterpillar para diagnóstico de motores y máquinas.

### Componentes del sistema

- **Software Cat ET** instalado en una laptop Windows.
- **Communication Adapter III o IV** — un dispositivo que conecta la
  laptop al motor. Se conecta por USB a la laptop y por un cable
  Deutsch de 9 pines al **puerto J1939** del motor.
- **Puerto J1939** en el motor — típicamente en la cabina, debajo del
  volante o cerca de la ECU.

### Qué se puede hacer con Cat ET

1. **Leer códigos de falla** (activos e históricos) con descripción,
   contadores y freeze frame.
2. **Parámetros en vivo** — ver RPM, presiones, temperaturas, boost,
   flujo de combustible, etc., en tiempo real.
3. **Tests activos** — comandar componentes específicos (por ejemplo,
   activar un solenoide, hacer cutout de un cilindro) para verificar
   funcionamiento.
4. **Datos de eventos** — cuando se activó un código, en qué
   condiciones (velocidad, carga, temperatura).
5. **Reprogramación de ECU** — actualizar firmware, cargar mapas
   modificados, cambiar parámetros configurables.
6. **Calibración de sensores** — resetear valores de referencia
   después de reemplazar componentes.
7. **Contadores de servicio** — horas totales, horas desde el último
   servicio, ciclos de regeneración del DPF, etc.

### Costo

- **Software Cat ET**: USD 500-1.500 anuales según nivel de licencia.
- **Communication Adapter oficial**: USD 300-800.
- **Cable Deutsch**: USD 50-150.
- **Laptop Windows** compatible: USD 500-1.500.

Total inversión inicial: **USD 1.500-4.000** por técnico. Es una
barrera de entrada real para talleres pequeños.

### Alternativas

Existen clones no oficiales del Communication Adapter y versiones
crackeadas de Cat ET. **NO SE RECOMIENDAN** por:

1. Riesgo de dañar la ECU con firmware no oficial.
2. Falta de soporte y actualizaciones.
3. Reprogramaciones incorrectas pueden dejar el motor inservible.
4. Anulación de garantía.

Si vas a trabajar con motores Cat, invertí en las herramientas
oficiales.

## Los códigos DFC (Diagnostic Flash Codes)

Cada componente electrónico del motor tiene condiciones específicas que
la ECU monitorea. Cuando algo se sale de rango, se genera un **DFC**.

### Estructura de un código

Un DFC tiene tres partes principales:

1. **Número del código** (ej. `320-05`, donde 320 = SPN Suspect
   Parameter Number, 05 = FMI Failure Mode Identifier).
2. **Descripción**: "Injector Solenoid Cylinder #3 — Open Circuit".
3. **Severidad**: Advisory (bajo), Warning (medio), Critical (alto).

Los códigos siguen el estándar **SAE J1939** con extensiones
específicas de Cat.

### Tipos de códigos por sistema

**Sistema de aire/turbos**:

- Boost pressure fuera de rango.
- Air filter restriction excesiva.
- Intake manifold temperature alta.
- MAF sensor sin señal.

**Sistema CGI**:

- CGI valve position error.
- CGI cooler efficiency low.
- CGI flow sensor fuera de rango.
- Coolant temperature high.

**Sistema de inyección**:

- Fuel rail pressure fuera de rango.
- Injector solenoid open/short.
- Cylinder misfire detected.
- Fuel filter restriction.

**Sistema DPF**:

- DPF differential pressure high.
- DPF regeneration required.
- DPF temperature sensor fault.
- Ash cleaning required (ver [Códigos DPF](/posts/codigos-error-diagnostico-dpf/)).

**Sistema ECU y comunicaciones**:

- CAN bus communication error.
- ECU internal fault.
- Sensor supply voltage low.

### Códigos activos vs históricos

- **Activo**: la condición está ocurriendo AHORA. Prioridad alta.
- **Histórico**: ocurrió antes, ya no está. Igual investigar si tiene
  muchas ocurrencias.

Cat ET muestra ambos en pantallas separadas.

### Contadores de ocurrencia

Cada código tiene un contador de cuántas veces se ha activado. Un
código activo con **50 ocurrencias** es prioridad crítica — el sistema
está batallando persistentemente con ese problema. Un código histórico
con **1 ocurrencia** hace 2.000 horas probablemente es irrelevante.

## Freeze frame: la foto del momento

Cuando un código se activa, la ECU guarda un **snapshot** de los
parámetros del motor en ese instante:

- RPM.
- Carga en % del máximo.
- Temperatura del refrigerante.
- Temperatura del aire de admisión.
- Boost.
- Presión del rail de combustible.
- Voltaje de batería.
- Etc.

Esta "foto congelada" es oro para diagnóstico. Por ejemplo, si un
código de "boost pressure low" solo se activa a altas RPM con carga
plena y ambiente caliente, ya tenés una pista de dónde buscar: el
ATAAC o el turbo LP bajo condiciones extremas.

## Flujo de diagnóstico paso a paso

Un técnico serio no salta directo a "cambiar el sensor". Sigue un flujo
lógico que minimiza cambios innecesarios de piezas.

### Paso 1: Escuchar al operador

**Nunca subestimar** la información del operador. Preguntar:

- ¿Cuándo empezó el problema?
- ¿Ocurre siempre o solo en ciertas condiciones (frío, calor, carga,
  velocidad)?
- ¿Fue gradual o repentino?
- ¿Hubo alguna intervención reciente (cambio de aceite, filtros,
  reparación)?
- ¿Qué síntomas específicos nota (potencia, humo, ruido, luces)?

Muchas fallas se diagnostican solo con esta conversación.

### Paso 2: Inspección visual

Antes de conectar Cat ET:

- Compartimento del motor limpio y ordenado.
- Fugas visibles (aceite, refrigerante, combustible).
- Mangueras y correas — grietas, tensión.
- Filtros — restricción visual.
- Baterías y conexiones.
- Luces del tablero encendidas.

### Paso 3: Chequeo de fluidos

- Aceite: nivel, color, olor.
- Refrigerante: nivel, color, contaminación con aceite/combustible.
- Combustible: sin agua ni sedimento.
- Aceite hidráulico (si aplica).

### Paso 4: Conectar Cat ET y leer códigos

- Ignition ON, motor apagado.
- Cable conectado, laptop encendida, Cat ET abierto.
- Leer códigos activos.
- Leer códigos históricos.
- Anotar todos con sus contadores y freeze frames.

### Paso 5: Priorizar códigos

- Códigos activos primero.
- Códigos históricos con muchas ocurrencias segundo.
- Códigos "sistema" (comunicación, alimentación) antes que códigos
  de componente específico — un problema de bus puede generar
  códigos falsos en muchos sensores.
- Códigos "críticos" antes que "advisory".

### Paso 6: Análisis del freeze frame

Para el código prioritario, mirar el freeze frame:

- ¿Bajo qué condiciones ocurre?
- ¿Otros parámetros muestran algo raro simultáneamente?
- ¿Hay correlación con RPM, carga, temperatura?

### Paso 7: Parámetros en vivo

- Arrancar el motor.
- En Cat ET, monitorear los parámetros relacionados con el código.
- Comparar valores reales vs esperados.
- Correlacionar con RPM y carga.

### Paso 8: Tests activos

Según el código, ejecutar el test correspondiente:

- **Cylinder cutout test**: para diagnosticar inyectores o cilindros.
- **Solenoide sweep**: para verificar respuesta de actuadores.
- **Manual DPF regeneration**: si el problema es regeneración.
- **Sensor calibration**: si un sensor está mal calibrado.

### Paso 9: Reparación

Con el diagnóstico ya sólido, ejecutar la reparación específica:

- Reemplazo del componente defectuoso.
- Limpieza de circuitos.
- Reprogramación si aplica.

### Paso 10: Confirmación

- Borrar códigos.
- Arrancar y probar el motor.
- Verificar que no reaparezcan los códigos.
- Probar bajo carga si es posible.
- Documentar la reparación en el service log.

## Herramientas complementarias al Cat ET

Cat ET no lo hace todo. Un taller serio necesita también:

**Diagnóstico eléctrico**:

- **Multímetro digital** con buena resolución.
- **Osciloscopio** de 2 canales (útil para diagnosticar señales de
  sensores y CAN bus).
- **Pinza amperimétrica** DC.

**Diagnóstico mecánico**:

- **Manómetros** de boost, presión de aceite, presión de combustible.
- **Tester de compresión** con adaptador diesel.
- **Vacuómetro**.
- **Termómetro infrarrojo** para chequeos térmicos rápidos.

**Herramientas de escape/emisiones**:

- **Analizador de gases** (para chequear emisiones de escape).
- **Presurizador del sistema de admisión** (para detectar fugas de
  boost).

**Software adicional**:

- **Cat SIS** (Service Information System) — manuales de servicio
  online.
- **Cat Parts** — despieces y números de parte.

## Errores comunes del técnico junior

Los técnicos que recién empiezan con motores ACERT suelen caer en
estos errores:

**1. Cambiar sensores "por probar"**. Un sensor caro puede parecer
la solución fácil pero rara vez es la causa. La causa suele ser el
cableado, el conector, o el componente que el sensor monitorea.

**2. Ignorar códigos "advisory"**. Los códigos advisory son la
advertencia temprana. Ignorarlos hoy significa códigos críticos
mañana.

**3. Borrar códigos sin diagnosticar**. Si borrás sin investigar,
perdés información valiosa (contadores, freeze frames). Anotá todo
primero.

**4. No leer códigos históricos**. Un código histórico puede
explicar por qué el motor "no anda igual desde el mes pasado".

**5. Saltarse la inspección visual**. Un manguera rota o un
conector suelto puede resolverse en 5 minutos si mirás primero.
Diagnóstico electrónico solo no te va a mostrar eso.

**6. No documentar la reparación**. Sin log, la próxima vez que
falle no vas a saber qué se ha probado antes.

## En resumen

Diagnosticar un motor ACERT es un ejercicio de método y disciplina.
No es magia ni es cambiar piezas hasta que ande. Es un flujo lógico
que combina **escucha al operador + inspección visual + análisis
electrónico + tests activos + confirmación**.

La herramienta base es **Cat ET**, y sin ella no se puede llegar al
fondo de casi ningún problema en un motor moderno con ECU. Es una
inversión indispensable para cualquier taller que trabaje seriamente
con Cat.

Pero la herramienta no reemplaza al criterio. Un técnico con Cat ET
pero sin método puede gastar más piezas que uno experimentado con un
multímetro. La tecnología acelera el diagnóstico — no lo hace
automáticamente.

Como decíamos en el [artículo sobre mantenimiento preventivo](/posts/mantenimiento-preventivo-acert/):
la disciplina es la diferencia entre un motor que dura 20.000 horas
y uno que rompe a las 10.000. Y esa disciplina empieza con
diagnóstico serio, no con "cambiar y probar".

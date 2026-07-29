---
title: "Turbocompresor y admisión de aire del Cummins Signature/ISX"
published: 2026-07-16
draft: false
featured: false
description: "El turbo del ISX puede ser fijo o de geometría variable (VGT). Explicamos filtro de aire, intercooler, boost y las fallas típicas del sistema de admisión."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "cummins"
  - "turbocompresor"
  - "vgt"
  - "admision-aire"
  - "isx"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/cummins-volvo-aceite/turbocompresor-admision-cummins-isx
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué es un VGT en un motor Cummins?"
    a: "VGT (Variable Geometry Turbocharger) es un turbocompresor con ALETAS AJUSTABLES en la turbina de escape. En un turbo fijo, las aletas están estáticas y el turbo tiene 'lag' (retardo) a bajas RPM porque no hay suficiente flujo de escape. En un VGT, las aletas se cierran a bajas RPM (acelerando el flujo sobre la turbina) y se abren a altas RPM (evitando saturación). Resultado: boost consistente en TODO el rango de RPM, con mínimo lag. Los ISX modernos (post-2007) usan VGT en la mayoría de las configuraciones."
  - q: "¿Cuánta presión de boost genera un ISX típico?"
    a: "En operación normal: 1,5-2,5 bar (22-36 psi) sobre presión atmosférica en carga plena. Al ralentí: cerca de 0 bar (sin boost). El manual especifica una MÁXIMA CAÍDA PERMISIBLE de presión a través del enfriador de carga de aire de 14 kPa (2 psi) — mayor caída indica intercooler tapado o mangueras dañadas. La presión exacta varía según calibración del ECM, carga del motor, altitud y estado general del sistema."
  - q: "¿Qué es el intercooler o CAC (Charge Air Cooler)?"
    a: "El intercooler o CAC (Charge Air Cooler / enfriador de aire de carga) es un radiador que enfría el aire caliente que sale del turbocompresor ANTES de que entre al motor. El aire comprimido por el turbo puede salir a 150-200°C — si entra así al motor, la densidad sería baja y aumentaría el NOx. El intercooler lo enfría a 40-70°C, aumentando densidad del aire y mejorando combustión. Es aire-aire en la mayoría de camiones (el aire ambiente lo enfría atravesando aletas)."
  - q: "¿Cómo sé si mi turbo Cummins está fallando?"
    a: "Cinco señales claras. (1) Pérdida de potencia notable, especialmente en aceleración. (2) Humo negro excesivo (falta de aire = combustión rica). (3) Ruido nuevo del turbo (silbido agudo, chirrido, resonancia). (4) Fuga de aceite visible del turbo (por sellos vencidos). (5) Consumo de aceite aumentado sin fuga externa visible (el aceite se va al escape por sellos del turbo). Diagnóstico: chequear boost real con Cummins INSITE vs valor esperado. Boost bajo indica falla del turbo o fuga en el sistema de admisión."
  - q: "¿Cuánto cuesta un turbocompresor Cummins ISX?"
    a: "Turbo nuevo genuino Cummins: USD 3.500-6.000. Turbo remanufacturado oficial: USD 2.000-3.500. Turbo aftermarket de marca reconocida (Garrett, BorgWarner): USD 1.500-3.000. Instalación: USD 500-1.500 según complejidad. Total típico USD 2.500-8.000. La reparación por rectificación de compresores gastados existe pero solo se justifica en talleres especializados; usualmente el cambio completo es más económico y confiable."
sources:
  - title: "Manual de Diagnóstico y Reparación Cummins ISX — Sección 10 (Sistema de Admisión)"
    url: "https://www.maquinariaspesadas.org/blog/2853-manual-motores-signature-isx-qsx15-cummins-diagnostico-reparacion"
related:
  - sistema-combustible-cummins-common-rail
  - diagnostico-fallas-cummins-isx
  - sistema-escape-cummins-aftertreatment
---

El **sistema de admisión de aire** es lo que permite al Cummins ISX
generar sus 400-600 HP. Sin el aire correcto (cantidad, presión,
temperatura, limpieza) el mejor combustible del mundo no serviría —
la combustión sería incompleta, la potencia sería baja, y las
emisiones se irían al techo.

Este artículo cubre filtro de aire, turbocompresor (VGT), intercooler
(CAC) y colector de admisión, según la **Sección 10 del manual
oficial de Cummins**.

## El aire en el motor diesel

Un motor diesel funciona con **relación aire-combustible** de 15:1 a
25:1 (mucho más aire que combustible). Un ISX a plena potencia consume:
- **Combustible**: ~50 litros por hora.
- **Aire**: **~1.500 m³ por hora** — o sea, 25.000 litros de aire por
  minuto.

Es una cantidad enorme, que solo se logra con **turbocompresor**. Sin
turbo, el motor solo aspira aire por vacío del pistón (aire
atmosférico) — capacidad limitada a ~4.000 litros/min. Insuficiente
para 600 HP.

## Filtro de aire

**Primera línea de defensa**. Retiene polvo, insectos, y contaminantes
del aire ambiente.

**Especificaciones del manual**:

- **Restricción máxima con filtro limpio**:
  - Automotriz e Industrial: 250 mm H2O (10 pulg. H2O).
  - Generación de Potencia: 381 mm H2O (15 pulg. H2O).
- **Restricción máxima con filtro sucio** (limite para reemplazo): 635
  mm H2O (25 pulg. H2O).

### Indicador de restricción

Todo ISX tiene un **indicador de restricción del filtro de aire** —
generalmente en el chasis del filtro, cerca de la salida.

- **Verde**: filtro OK.
- **Amarillo**: cerca del límite, planificar cambio.
- **Rojo**: filtro saturado, CAMBIAR INMEDIATAMENTE.

Un filtro saturado causa el 60% de los problemas de humo negro en
ISX. Es 15 minutos y USD 40-100 de repuesto — no hay excusa para no
cambiarlo a tiempo.

### Precauciones del manual

El manual advierte específicamente:

> *El aire de admisión del motor debe filtrarse para impedir que
> suciedad y desechos entren al motor. Si la tubería del aire de
> admisión está dañada o floja, el aire sin filtrar entrará al motor
> y causará desgaste prematuro.*

Cualquier fisura en las mangueras entre el filtro y el motor deja
entrar aire NO FILTRADO — polvo que directamente destruye anillos y
camisas.

## Turbocompresor

**El componente estrella** del sistema de admisión. Comprime el aire
antes de meterlo al motor.

### Cómo funciona

Un turbocompresor tiene dos "ruedas" en un mismo eje:

**Lado escape (turbina)**:
- Gases de escape del motor la hacen girar.
- Convierten energía "gratis" del escape en rotación (10.000-100.000
  RPM).

**Lado admisión (compresor)**:
- Gira al mismo eje.
- Absorbe aire ambiente y lo comprime.
- Presión de salida: 1,5-2,5 bar sobre atmosférica en carga plena.

**Beneficio**: mucho más aire por unidad de tiempo entra al motor.
Con más aire, se puede quemar más combustible, generar más potencia,
y hacerlo con combustión más limpia.

### Turbo fijo vs VGT (Variable Geometry Turbocharger)

**Turbo fijo**: aletas de turbina estáticas. Diseñado para un punto
óptimo — bueno a RPM medio-altas, pero con "lag" (retardo) a bajas
RPM.

**VGT (Variable Geometry Turbocharger)**:
- Aletas móviles en la turbina.
- A bajas RPM: se cierran, aceleran el flujo de escape sobre la
  turbina.
- A altas RPM: se abren, evitan saturación.
- Resultado: boost consistente en TODO el rango.

Los Cummins ISX modernos usan casi exclusivamente **VGT**. Ofrecen:
- Menos lag (respuesta más rápida).
- Boost estable en todo el rango.
- Mejor eficiencia general.
- Puede funcionar también como **freno de motor auxiliar**.

### Especificaciones del manual

- **Resistencia del solenoide del control de cuatro pasos de la
  compuerta de descarga**: 7 a 8 ohms.
- **Máxima caída permisible de presión a través del enfriador de carga
  de aire (intercooler)**:
  - Automotriz/Industrial: 14 kPa (2 psi) o 102 mm Hg (4 pulg. Hg).
- **Máxima caída permisible de presión de la salida del turbo al
  múltiple de admisión (aplicable a generación de potencia)**: 14 kPa
  (2 psi).

## Intercooler / CAC (Charge Air Cooler)

**Función**: enfriar el aire comprimido antes de que entre al motor.

### Por qué es necesario

Cuando el turbo comprime el aire, la temperatura sube por
compresión adiabática:

- **Aire entrada**: 25-40°C (ambiente).
- **Aire salida turbo**: 150-200°C.

Si ese aire caliente entrara al motor:
- **Densidad baja** → menos oxígeno por volumen → menos combustible
  quemable → menos potencia.
- **Temperatura pico de combustión más alta** → más NOx.
- **Estrés térmico** en válvulas y cámaras.

El intercooler es un intercambiador aire-aire (el aire ambiente lo
atraviesa perpendicular) que **enfría el aire comprimido a 40-70°C**.

### Estructura típica

- Panal de aluminio con aletas.
- Ubicado delante del radiador (recibe aire ambiente primero).
- Tanques de entrada y salida.
- Mangueras gruesas de conexión al turbo y al motor.

### Fallas del intercooler

**1. Obstrucción externa** por polvo/barro:
- Reduce el flujo de aire ambiente.
- El aire de admisión sale del intercooler más caliente.
- Consecuencia: pérdida de potencia y aumento de NOx.

**2. Fugas internas**:
- Grietas por fatiga metálica o corrosión.
- Pérdida de presión (boost bajo).
- Consecuencia: humo negro, pérdida de potencia notable.

**3. Aceite del turbo en el intercooler**:
- Sellos del turbo vencidos permiten aceite hacia el intercooler.
- El aceite ensucia y reduce eficiencia térmica.
- Consecuencia: mismo síntoma que obstrucción externa.

**Diagnóstico**: presurizar el intercooler con aire (25-30 psi) y ver
si mantiene presión. Fugas se detectan por caída de presión.

## Colector de admisión

Distribuye el aire desde el intercooler a cada uno de los 6 cilindros.

En el ISX suele ser una pieza de aluminio fundido, con:
- Entrada única desde el intercooler.
- 6 salidas hacia la culata (una por cilindro).
- Punto de conexión para el sensor MAP (Manifold Absolute Pressure).
- Punto de conexión para EGR en configuraciones con recirculación.

## Recirculación de gases de escape (EGR)

En los ISX 2007+, hay un sistema de **EGR** (Exhaust Gas
Recirculation) que reintroduce parte de los gases de escape a la
admisión para **reducir NOx**.

**Componentes**:
- **Válvula EGR**: comandada por ECM, regula cuánto gas se recircula.
- **Enfriador EGR**: baja la temperatura de los gases antes de
  reintroducirlos.
- **Filtro EGR**: retiene hollín para no contaminar la admisión.

**Falla común del EGR**: válvula pegada por depósitos de hollín.
Consecuencias:
- Pegada abierta: pérdida de potencia, humo negro.
- Pegada cerrada: NOx alto, códigos de falla, motor puede entrar en
  modo derateo.

## Diagnóstico de problemas de admisión

### Con Cummins INSITE

- **Presión de boost real vs esperado** en distintas RPM/carga.
- **Temperatura de admisión** después del intercooler.
- **Posición de aletas VGT** (comando vs real).
- **Presión de EGR** y temperatura.

### Test manuales

- **Presurizar sistema de admisión** con aire para detectar fugas.
- **Test de restricción de filtro** con manómetro U.
- **Chequeo mecánico de aletas VGT** (movimiento libre con motor
  apagado).

## Mantenimiento típico

**Filtro de aire**:
- Cambio cuando indicador está en amarillo.
- Nunca sacudirlo para "limpiarlo" — arruina las fibras.
- Nunca reutilizar un filtro rojo.

**Intercooler**:
- Limpieza externa cada 250-500 horas (aire comprimido a baja presión).
- Inspección visual periódica de mangueras y abrazaderas.

**Turbocompresor**:
- Enfriamiento post-operación 3-5 minutos antes de apagar (baja el
  aceite caliente del turbo).
- No arrancar y apagar rápidamente (estresa térmicamente el turbo).
- Cambio de aceite en tiempo (aceite viejo destruye rodamientos del
  turbo).

## En resumen

El **sistema de admisión de aire** del Cummins ISX es lo que permite
al motor generar sus 400-600 HP. Sus componentes principales son:
**filtro de aire** (primer defensa), **turbocompresor VGT** (comprime
el aire), **intercooler CAC** (enfría el aire comprimido) y
**colector de admisión** (distribuye a los cilindros).

En motores 2007+ hay también **EGR** para reducir NOx, con sus
propias fallas típicas (válvula pegada).

Las fallas más comunes son: **filtro de aire saturado** (fácil de
resolver, USD 40-100), **turbo con fugas de aceite** (USD 2.500-8.000
reemplazo), **intercooler obstruido externamente** (limpieza
regular), y **EGR pegada** (limpieza o reemplazo).

Con **filtros al día**, **enfriamiento del turbo respetado**, y
**limpieza periódica del intercooler**, el sistema dura las mismas
horas que el motor entero — 500.000-1.000.000 km sin intervenciones
mayores.

---
title: "Cómo identificar tu motor Cummins ISX/Signature: placa y ECM"
published: 2026-07-07
draft: false
featured: false
description: "El motor Cummins tiene dos placas de datos clave: la del motor (ESN) y la del ECM. Explicamos qué información traen y por qué las necesitás para pedir repuestos."
category: mecanica-automotriz
formato: guia
nivel: basico
tags:
  - "cummins"
  - "identificacion-motor"
  - "numero-serie"
  - "ecm"
  - "isx"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/cummins-volvo-aceite/identificacion-motor-cummins-numeros-serie
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Dónde está la placa de datos del motor Cummins ISX?"
    a: "En la PARTE SUPERIOR DE LA CUBIERTA DE BALANCINES del motor. Es una placa metálica remachada, generalmente cerca del centro de la culata, visible al abrir el capó. En algunos modelos también hay una duplicada en el frente del block. La ubicación varía ligeramente por año de fabricación pero SIEMPRE está en la parte alta del motor para acceso rápido. Si no la encontrás, chequeá el manual del vehículo o consultá al fabricante del chasis."
  - q: "¿Qué es el ESN (Engine Serial Number)?"
    a: "Es el Número de Serie del Motor — un identificador único de 8-10 caracteres alfanuméricos que Cummins asigna a cada motor que sale de fábrica. Es el equivalente al VIN de un auto pero solo para el motor. Con el ESN, Cummins puede rastrear: año exacto de fabricación, calibración original, historia de servicio (si se registró en Cummins), lista de partes específicas de tu motor. TODO pedido de repuesto o consulta técnica arranca con el ESN — sin él no se puede identificar tu motor con precisión."
  - q: "¿Qué es el ECM en un motor Cummins?"
    a: "El ECM (Módulo de Control Electrónico, Electronic Control Module) es la computadora del motor. Recibe señales de todos los sensores del motor (temperatura, presión, RPM, posición del cigüeñal, etc.) y comanda los actuadores (inyectores, válvulas de EGR, turbocompresor variable, etc.). Es la unidad que ejecuta la calibración del motor y monitorea funcionamiento en tiempo real. Cada ECM tiene su propia placa de datos con P/N, S/N y D/C, distintos a los del motor."
  - q: "¿Puedo cambiar el ECM de un motor por otro de un motor idéntico?"
    a: "Técnicamente sí PERO hay que tener en cuenta que cada ECM viene programado con la CALIBRACIÓN ESPECÍFICA de su motor de origen — que incluye afinaciones de potencia, mapeo de emisiones, y datos de aprendizaje acumulados. Si intercambiás ECMs sin reprogramar, el motor va a arrancar pero puede tener rendimiento subóptimo o códigos de falla. Lo correcto es hacer un intercambio + REFLASH con la calibración correcta usando Cummins INSITE. Los talleres autorizados hacen esto rutinariamente."
  - q: "¿Qué significan las siglas P/N, S/N y D/C en la placa del ECM?"
    a: "Del manual oficial de Cummins: P/N = Número de Parte (Part Number), identifica el modelo específico del ECM. S/N = Número de Serie (Serial Number), único de esta unidad ECM. D/C = Código de Fecha (Date Code), indica cuándo se fabricó el ECM. Los tres son necesarios cuando se solicita reemplazo o reprogramación al Taller Autorizado Cummins. Sin ellos, el proveedor no puede confirmar que el ECM de reemplazo sea compatible con tu motor."
sources:
  - title: "Manual de Diagnóstico y Reparación Motores Signature, ISX y QSX15 — Sección E"
    url: "https://www.maquinariaspesadas.org/blog/2853-manual-motores-signature-isx-qsx15-cummins-diagnostico-reparacion"
  - title: "Cummins — Engine Serial Number Lookup"
    url: "https://www.cummins.com/"
related:
  - motores-cummins-signature-isx-qsx15
  - diagnostico-fallas-cummins-isx
  - sistema-combustible-cummins-common-rail
---

Cuando llamás a Cummins o a un taller autorizado para consultar sobre
tu motor, lo primero que te van a pedir son **dos números**: el
**Engine Serial Number (ESN)** y los datos del **ECM**. Sin esos
números, no pueden identificar exactamente qué motor tenés — y con
20 años de producción del ISX en distintas configuraciones, no se
puede improvisar.

Este artículo cubre dónde están esas placas, qué información contienen,
y cómo usarla para pedir repuestos, historial de servicio, o consultas
técnicas. Todo basado en la **Sección E - Identificación del Motor**
del manual oficial de Cummins.

## Por qué la identificación es crítica

Un motor Cummins ISX puede tener:

- **20+ variantes de calibración** según año y aplicación.
- **3-5 configuraciones de sistema de emisiones** distintas según norma
  EPA (2002, 2007, 2010, 2013).
- **Múltiples opciones de accesorios** (bombas, alternadores,
  compresores).
- **Diferentes componentes específicos** por familia de aplicación
  (marino, industrial, generación).

Todo eso significa que una **pieza que sirve para un ISX 2005 puede no
servir para un ISX 2015** — aunque parezcan "el mismo motor" desde
afuera. Por eso Cummins insiste en pedir el ESN antes de cualquier
consulta.

## Placa de Datos del Motor

Según el manual, esta placa está colocada en la **parte superior de la
cubierta de balancines** — es decir, en la parte más alta del motor,
sobre la culata. Es una placa metálica remachada, generalmente cerca
del centro.

### Información obligatoria en la placa

El manual especifica **4 datos** que son obligatorios cuando se
solicitan partes o servicio:

**1. Número de Serie del Motor (ESN)**
- El identificador único del motor.
- 8-10 caracteres alfanuméricos.
- Formato típico: `35xxxxxxx` o similar según año.
- Es lo primero que te va a pedir un taller autorizado.

**2. Lista de Partes Críticas (Critical Parts List — CPL)**
- Un código específico que identifica qué partes de "servicio crítico"
  usa tu motor.
- Diferentes CPLs implican diferentes: pistones, camisas, anillos,
  cojinetes, bombas.
- Ejemplo: dos motores ISX con la misma potencia pueden tener CPLs
  distintos si son de años distintos.

**3. Modelo**
- Ej: `ISX15`, `Signature`, `QSX15`.
- Aparentemente redundante pero es cross-check.

**4. Potencia y RPM Indicadas**
- La calibración de fábrica del motor.
- Ej: `525 HP @ 1800 RPM`.
- Importante porque el mismo motor puede tener varias calibraciones
  disponibles.

### Qué NO trae la placa del motor

- **Año exacto de fabricación**: se deduce del ESN pero no está
  impreso literal.
- **Norma de emisiones** (EPA 2007, 2010, etc.): NO está en la placa.
  Hay que buscarla en documentación de compra o por cross-reference
  del ESN.
- **Historia de servicio**: obviamente no.

## Placa de Datos del ECM

Además de la placa del motor, el **ECM (Electronic Control Module)**
tiene su propia placa. Del manual oficial de Cummins:

> *La placa de datos del módulo de control electrónico (ECM) está
> colocada en el frente del ECM.*

El ECM en un ISX suele estar montado **sobre la culata o al costado**
del motor, cerca del sistema de combustible. Es una caja metálica
cerrada, típicamente aluminio, con múltiples conectores eléctricos
saliendo de ella.

### Las 3 abreviaciones clave

Del manual, las abreviaciones en la placa del ECM se explican como
sigue:

- **P/N** = **Part Number** (Número de parte).
- **S/N** = **Serial Number** (Número de serie).
- **D/C** = **Date Code** (Código de fecha).

Estos 3 códigos son los que se usan para:

- **Pedir un ECM de reemplazo** compatible.
- **Diagnosticar problemas** con Cummins INSITE.
- **Reflashear** el ECM con nueva calibración.
- **Confirmar compatibilidad** entre ECM y motor.

### El ECM es el "cerebro" del motor

Un ECM Cummins moderno maneja simultáneamente:

- **Timing de inyección** en 6 cilindros (nanosegundos de precisión).
- **Presión de rail de combustible** (bomba HPCR).
- **Temperatura del refrigerante** (control de termostatos activos).
- **EGR** (recirculación de gases de escape).
- **Turbocompresor variable** (geometría variable en modelos que la
  tienen).
- **Regeneración del DPF** (en motores 2007+).
- **Dosificación de urea/DEF** (en motores 2010+ con SCR).
- **Diagnóstico continuo**: monitorea 200+ parámetros en tiempo real.

Perder o cambiar el ECM sin reprogramarlo correctamente puede dejar el
motor **inoperante o con rendimiento comprometido**.

## Cómo usar los números para pedir repuestos

**Escenario 1**: se te fue una biela.
1. Necesitás el **ESN + CPL** de tu motor.
2. Con esos dos números, Cummins te da la **lista exacta de partes**
   compatibles con tu ISX específico.
3. NO uses "biela para ISX15" genérico — puede no servir.

**Escenario 2**: te falla el ECM.
1. Necesitás **P/N + S/N + D/C** del ECM actual.
2. Además el **ESN del motor** (porque el ECM se calibra según el
   motor específico).
3. Cummins autoriza el reemplazo y programa la calibración correcta.

**Escenario 3**: consulta técnica genérica (ej. cómo diagnosticar un
código de falla).
1. **ESN** es suficiente para consultas básicas.
2. Con el ESN, Cummins accede al historial (si el motor está
   registrado) y al manual específico de tu configuración.

## Cómo NO se debe hacer

Errores comunes que causan gastos inútiles:

### 1. Comprar partes "para ISX" sin especificar año/CPL

Un pistón para ISX 2005 puede no calzar en un ISX 2013. Aunque los
motores parezcan iguales, hay diferencias en compresión, altura y
material.

### 2. Cambiar ECM sin reprogramar

El ECM viejo tenía tu calibración. El nuevo tiene una genérica de
fábrica. El motor va a arrancar pero:

- Puede quedar con potencia limitada.
- Puede tirar códigos de falla que no existían antes.
- Emisiones pueden salirse de norma.

### 3. Improvisar con motores usados

Si comprás un motor "para trasplantar" a otro chasis, necesitás el
ESN y CPL del donante Y del receptor. La compatibilidad puede
requerir cambios de:

- **Volante inercial** (distinto para transmisión manual vs
  automática).
- **Cárter de aceite** (industrial vs automotriz).
- **Accesorios frontales** (compresor de A/A, alternador, bomba de
  dirección).

## Verificación del ESN por Cummins

Cummins tiene un servicio online donde podés verificar tu ESN. Al
ingresarlo, te da:

- **Año exacto de fabricación**.
- **Configuración original** de calibración.
- **Historial de campañas de servicio** (recalls, actualizaciones).
- **Manuales específicos** para tu configuración exacta.

Para tener acceso completo hay que registrarse como taller autorizado
o como propietario del vehículo. Los talleres independientes pueden
acceder a información básica gratis.

## Cómo leer una placa dañada

Placas oxidadas o rayadas son un problema común en motores viejos.
Alternativas:

1. **Frotar con papel de lija fino** (grano 400) suavemente para
   revelar los grabados.
2. **Aplicar tinta y limpiar** — los surcos retienen la tinta.
3. **Consultar el VIN del vehículo** — algunas veces el ESN puede
   rastrearse desde el VIN de fábrica.
4. **Cross-reference desde el ECM**: si el ECM funciona y podés
   conectar Cummins INSITE, el software puede leer el ESN vinculado.

## En resumen

Cada motor Cummins Signature/ISX/QSX15 tiene **dos placas de datos**
que juntas contienen toda la información necesaria para identificarlo:

- **Placa del motor** en la cubierta de balancines: ESN + CPL +
  Modelo + Potencia.
- **Placa del ECM** en el frente del módulo: P/N + S/N + D/C.

Estos números son la **primera cosa** que te va a pedir cualquier
taller o distribuidor de repuestos. No son burocracia: son la única
forma confiable de identificar exactamente qué motor tenés entre las
decenas de variantes producidas por Cummins durante 20+ años.

Tomate 5 minutos y anotá estos datos en un lugar seguro (foto en el
teléfono + copia en papel) apenas compres un motor nuevo o adquieras
una unidad usada. El día que necesités un repuesto crítico te vas a
agradecer haberlo hecho.

---
title: "Mantenimiento preventivo de motores Cat ACERT: guía práctica"
published: 2026-07-17
draft: false
featured: false
description: "Los motores ACERT son más limpios pero más exigentes. Repasamos los intervalos críticos, qué mirar en cada componente y qué NO hacer."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "mantenimiento-preventivo"
  - "sistema-acert"
  - "servicio-caterpillar"
  - "vida-util-motor"
  - "servicio-1000-horas"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/mantenimiento-preventivo-acert
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Cada cuántas horas se hace servicio a un motor ACERT?"
    a: "Depende del intervalo de servicio. Cat recomienda tres niveles principales: (1) Servicio A (chequeo diario/pre-operación) — inspección visual, niveles, filtros de aire; (2) Servicio B (cada 250-500 horas) — cambio de aceite motor, filtros de aceite y combustible, chequeo de baterías, inspección de mangueras; (3) Servicio C (cada 1.000-2.000 horas) — todo lo anterior más cambio de refrigerante inhibidor, análisis de aceite (SOS), inspección del sistema CGI, limpieza del ATAAC. Y a las 5.000-6.000 horas viene un servicio mayor con evaluación del DPF y componentes de emisiones."
  - q: "¿Qué aceite debo usar en un motor ACERT?"
    a: "Cat especifica CJ-4 o CK-4 según el modelo — son categorías API específicas para motores diesel con DPF. NO USES aceites CI-4, CH-4 o CG-4 (categorías antiguas) en un motor ACERT porque tienen alto contenido de cenizas (ash) que taparán el DPF prematuramente. Los aceites CJ-4/CK-4 son 'low SAPS' (Sulfated Ash, Phosphorus, Sulfur) — menos de 1.0% de cenizas. El viscosity grade recomendado en clima templado es 15W-40; en clima frío 10W-30 o 5W-40 sintético. Siempre chequeá la Owners Manual del motor específico."
  - q: "¿Cuál es el error de mantenimiento más caro en un motor ACERT?"
    a: "Usar aceite equivocado. Un operador que use CI-4 barato en vez de CJ-4 durante 1.000-2.000 horas puede tapar el DPF con cenizas al punto que requiera reemplazo — USD 3.000-8.000 en costo directo, más el tiempo muerto de la máquina. Otro error muy común es no cambiar el filtro de combustible en tiempo — combustible sucio destruye los inyectores de alta presión (USD 400-1.500 cada uno, típicamente 6-8 por motor). Un tercer error es no limpiar el ATAAC externamente — polvo acumulado sobrecalienta el aire de admisión, aumenta el NOx y estresa todo el motor."
  - q: "¿Cuánto tiempo dura un motor ACERT con buen mantenimiento?"
    a: "Con mantenimiento riguroso siguiendo todas las especificaciones de Cat, un motor ACERT industrial puede alcanzar 20.000-30.000 horas antes de un overhaul mayor. El DPF típicamente requiere limpieza a fondo o reemplazo alrededor de las 8.000-12.000 horas. El sistema CGI aguanta bien si el refrigerante se mantiene en condiciones. Los turbos son la pieza que más falla en el mediano plazo — 10.000-15.000 horas típicamente. Con mantenimiento pobre, esos números se reducen a la mitad o menos: turbos a 5.000 horas, DPF colapsado a 3.000-5.000 horas, motor con overhaul a 10.000-12.000 horas."
  - q: "¿Se puede modificar/deletear un motor ACERT para quitar el DPF y el CGI?"
    a: "Técnicamente sí, existen kits de 'delete' que remueven físicamente el DPF y el CGI y reprograman la ECU para ignorar las restricciones. PERO: (1) es ilegal en la mayoría de países con normas de emisiones — multas de miles de dólares por unidad; (2) anula completamente la garantía del motor; (3) puede reducir la reventa un 30-40%; (4) hoy los turbos, inyectores e incluso el manifold están calibrados para operar CON el sistema completo — deletearlo produce combustión más caliente, más NOx en el aire, y a mediano plazo puede acelerar el desgaste del motor mismo. La recomendación técnica es: si el motor da problemas, hay que arreglar el sistema correctamente, no deletearlo. Solo se justifica el delete en aplicaciones muy específicas fuera de rutas públicas y bajo asesoría legal."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Cat Operation and Maintenance Manual — Diesel Engines"
    url: "https://www.cat.com/"
  - title: "Cat Service Information System — Preventive Maintenance Guidelines"
    url: "https://www.cat.com/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - mantenimiento-limpieza-cenizas-dpf
  - sistema-cgi-cooled-gas-induction
  - turbochargers-serie-ataac
---

Los motores ACERT le dieron a la industria pesada un salto grande en
limpieza de emisiones y eficiencia. Pero también trajeron una realidad
nueva: **son más exigentes en mantenimiento** que los motores diesel
mecánicos que reemplazaron.

Un motor 3406 de los 90 podía tolerar aceite genérico, combustible con
azufre, filtros baratos y aún así durar 20.000 horas. Un ACERT castiga
cada uno de esos errores multiplicando el costo de operación.

Esta guía es un checklist práctico de qué mirar, cada cuánto, y qué NO
hacer si querés que el motor te acompañe muchas horas.

## La jerarquía del mantenimiento ACERT

Cat organiza el mantenimiento en **cuatro niveles de servicio**:

| Servicio | Frecuencia         | Alcance                                         |
| -------- | ------------------ | ----------------------------------------------- |
| **A**    | Diario             | Inspección visual, niveles, filtros de aire     |
| **B**    | 250-500 h          | Aceite motor, filtros, baterías, mangueras      |
| **C**    | 1.000-2.000 h      | Servicio B + refrigerante + análisis + sistema CGI |
| **D**    | 5.000-6.000 h      | Servicio C + DPF + emisiones + overhaul menor   |

Los intervalos exactos varían según el modelo del motor y la aplicación
(construcción, minería, marino, generación). Siempre consultá el
**Operation and Maintenance Manual** del motor específico.

## Servicio A: rutina diaria (10-15 minutos)

Esto lo hace el operador antes de arrancar la máquina. Es la primera
línea de defensa.

**Checklist**:

- **Nivel de aceite del motor** — con el motor frío y en superficie
  plana. Rellenar si es necesario con aceite del mismo grado y tipo.
- **Nivel de refrigerante** — en el tanque de expansión. Si está bajo,
  investigar por qué (fuga o consumo interno).
- **Nivel de combustible** — obvio pero clave.
- **Nivel de aceite hidráulico** (en máquinas hidráulicas).
- **Inspección visual del compartimento del motor**: manchas frescas
  de aceite, refrigerante o combustible.
- **Filtro de aire**: chequear el indicador de restricción. Si está
  rojo, reemplazar el elemento.
- **ATAAC exterior**: chequear que no esté tapado con barro o polvo.
- **Correas y mangueras**: inspección visual de grietas o
  desgaste.
- **Tuercas de rueda, cadenas, presión de neumáticos** en máquinas
  móviles.

**Regla de oro**: si algo se ve raro (mancha nueva, ruido nuevo,
temperatura subiendo antes), NO ARRANQUES sin investigar. Es más
barato detectar temprano que romper después.

## Servicio B: cada 250-500 horas

Es el servicio "básico" que hace un mecánico. Aquí se cambian los
consumibles principales.

**Aceite motor**:

- **Grado y tipo correctos** — CJ-4 o CK-4, viscosidad según clima.
- **Cambio en tiempo** — no extender más allá del intervalo
  recomendado, incluso si el análisis dice que "aún sirve". Los
  aditivos se consumen aunque el aceite se vea limpio.
- **Filtro de aceite** — reemplazar SIEMPRE con el cambio de aceite.
  Usar filtro Cat o equivalente de calidad certificada — no genéricos.

**Filtros de combustible**:

- **Reemplazar según intervalo del fabricante**, típicamente cada 500
  horas o el servicio B, lo que ocurra primero.
- Si trabajás en zona con **combustible dudoso**, considerá reducir
  el intervalo a la mitad (250 horas).
- Vaciar los **water separators** cada semana.

**Filtro de aire**:

- **Reemplazar si el indicador de restricción lo pide**.
- No sacudir el filtro para "limpiarlo" — daña las fibras y no lo
  reactiva. Reemplazá o dejalo.

**Baterías y arranque**:

- Chequear voltaje en vacío y con carga.
- Limpiar bornes si hay corrosión.
- Verificar amperaje del arrancador si empieza a "colgarse".

**Mangueras y correas**:

- Inspección detallada, no solo visual.
- Correas: chequear tensión con el método específico del motor.
- Mangueras: apretar levemente para detectar zonas endurecidas o
  agrietadas.

## Servicio C: cada 1.000-2.000 horas

Es el servicio mayor donde se atienden sistemas críticos que un
servicio B no toca.

### Refrigerante del motor

- **Cambio de refrigerante o refresco de inhibidor** según programa.
- Cat recomienda **ELC (Extended Life Coolant)** que dura 6.000 horas
  o 5 años. No mezclar con coolants tradicionales.
- Chequear pH, densidad y contenido de inhibidor con tester.

**Por qué es crítico**: refrigerante viejo pierde inhibidores
anticorrosión → **corrosión interna del CGI Cooler, del ATAAC, del
radiador**. Un cooler CGI corroído es una falla de USD 1.500-3.000.

### Análisis de aceite (SOS — Scheduled Oil Sampling)

Cat ofrece el programa **SOS**: se envía una muestra de aceite al
laboratorio y devuelven un reporte con:

- **Metales presentes**: cobre (bujes), hierro (camisas), aluminio
  (pistones), cromo (segmentos), plomo (cojinetes), etc. Cada uno
  indica desgaste de una parte específica.
- **Combustible, agua, refrigerante en el aceite**: presencia de
  cualquiera es una señal grave.
- **Viscosidad, TBN (basicidad total), TAN (acidez)**: estado del
  aceite mismo.

**Beneficio**: detectar problemas ANTES de que rompan algo. Un motor
que empieza a mostrar cobre elevado en el análisis puede tener bujes
gastándose — se puede planificar el arreglo antes de que fallen en
plena operación.

### Sistema CGI

- **Inspección visual** de la CGI valve y mangueras.
- **Limpieza externa** del CGI Cooler si hay signos de obstrucción.
- **Chequeo de códigos** con Cat ET — ¿hay algo latente?

### ATAAC

- **Limpieza a fondo del núcleo** con aire comprimido y agua a baja
  presión.
- **Chequeo de fugas** en mangueras y conexiones.
- **Chequeo de temperaturas** de aire después del ATAAC bajo carga.

### Turbos

- **Chequeo de play axial y radial** del eje.
- **Inspección visual** por fugas de aceite.
- **Chequeo de boost real vs esperado** con Cat ET.

## Servicio D: cada 5.000-6.000 horas

Es el servicio pesado. Ya no es "cambiar filtros" — es intervención
mayor.

### DPF

- **Limpieza a fondo del DPF** — remoción de cenizas acumuladas. En
  este punto ninguna regeneración activa lo puede limpiar; hay que
  desmontarlo y limpiarlo en equipos especializados, o reemplazarlo.
- **Reprogramación de contadores** de la ECU.

Ver la guía completa sobre [mantenimiento y limpieza del DPF](/posts/mantenimiento-limpieza-cenizas-dpf/).

### Inyectores

- **Balance test** con Cat ET.
- **Cylinder cutout test** para detectar inyectores débiles.
- **Reemplazo** de inyectores que estén trimando más de ±5-8%.
- Reemplazar en juego completo si hay 3 o más inyectores fuera de
  spec.

### Válvulas y timing

- **Ajuste de válvulas** — luz de válvulas correcta.
- **Verificación de timing** de inyección.
- **Chequeo de correa de distribución** si aplica (algunos motores usan
  cadena, otros engranajes).

### Cojinetes y sellos

- **Inspección de sellos** frontales y traseros del cigüeñal.
- **Chequeo de compresión** en cada cilindro.

## Lo que NO hay que hacer

Errores frecuentes que aceleran el desgaste:

**1. Usar aceite de categoría incorrecta**. CI-4/CH-4 en motor ACERT
tapa el DPF con cenizas. Usá SIEMPRE CJ-4 o CK-4.

**2. Extender intervalos "porque el aceite se ve limpio"**. Los
aditivos se consumen aunque el color no cambie. Cambio en tiempo,
punto.

**3. Ignorar códigos de falla**. Un DFC en "advisory" hoy es un
motor derateado mañana y una falla catastrófica pasado.

**4. Usar combustible sucio o con agua**. Los inyectores de alta
presión no perdonan. Tanques con sedimento o combustible "de
cualquier lado" son suicidio a mediano plazo.

**5. Delete del DPF/CGI para "aumentar potencia"**. Ilegal, anula
garantía, y a mediano plazo daña el motor mismo (temperaturas más
altas, turbos estresados).

**6. No limpiar el ATAAC externamente**. Es el error más subestimado
— polvo acumulado sobrecalienta el aire de admisión, sube NOx y
temperatura de todo el motor.

**7. Escuchar "expertos" de Facebook y foros**. Consultá el Manual
del motor y a técnicos certificados Cat, no a un vecino que "hace
tiempo trabaja con motores".

## Herramientas indispensables

Para dar servicio serio a un motor ACERT, un taller necesita mínimo:

- **Cat ET (Electronic Technician)** — software de diagnóstico
  oficial. USD 500-1.500 licencia anual + cable adaptador.
- **Tester de refrigerante** (pH, densidad, inhibidor).
- **Presurizador del sistema de refrigeración** para chequear
  fugas.
- **Kit de test de compresión** con adaptadores diesel.
- **Torquímetros calibrados** hasta 400 Nm mínimo.
- **Manómetros de boost y presión de combustible**.
- **Herramientas específicas Cat** — hay algunas piezas que
  requieren tools especiales (extractores, adaptadores).

Sin Cat ET no se puede hacer diagnóstico serio de un motor ACERT.
Es como intentar diagnosticar un motor de auto moderno sin OBD-II
— podés hacer inspecciones básicas pero no llegás al fondo de nada.

## Costo del mantenimiento preventivo vs correctivo

Estimación aproximada por motor ACERT industrial mediano (C9-C13),
para 10.000 horas de vida:

**Con mantenimiento riguroso**:

- Servicios A/B/C/D en programa: **USD 15.000-25.000** total.
- Overhaul menor a las 10.000 horas: **USD 8.000-15.000**.
- Total: **USD 25.000-40.000**.

**Con mantenimiento pobre**:

- Servicios omitidos o retrasados: ahorro aparente **USD 5.000-10.000**.
- Reemplazo prematuro de turbos: **USD 3.000-6.000**.
- Reemplazo prematuro de DPF: **USD 3.000-8.000**.
- Reemplazo de inyectores por combustible sucio: **USD 4.000-8.000**.
- CGI Cooler corroído: **USD 1.500-3.000**.
- Overhaul a las 6.000-8.000 horas (prematuro): **USD 15.000-25.000**.
- Total: **USD 30.000-55.000** — Y encima con más tiempo muerto y
  reventa menor.

El "ahorro" del mantenimiento pobre es una ilusión. Termina saliendo
más caro y con menos vida útil.

## En resumen

Los motores ACERT recompensan la disciplina y castigan la improvisación.
Aceite CJ-4/CK-4, refrigerante ELC en tiempo, filtros de calidad,
combustible ULSD, servicios en programa, y diagnósticos periódicos con
Cat ET.

Con esa disciplina, un ACERT industrial puede llegar a **20.000-30.000
horas** antes de un overhaul mayor. Sin ella, cae a **10.000-15.000
horas** con múltiples fallas caras en el camino.

Y como en toda máquina compleja, el operador es la primera línea de
defensa. Un chequeo diario de 10 minutos previene fallas que un
mecánico tarda días en reparar.

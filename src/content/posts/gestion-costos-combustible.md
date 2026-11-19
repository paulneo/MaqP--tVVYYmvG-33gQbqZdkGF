---
title: "Gestión del combustible en flotas pesadas: consumo, ralentí y telemetría"
published: 2024-08-02
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo medir y reducir el gasto de combustible de una flota de maquinaria: consumo por hora, ralentí, telemática, control de despachos y un ejemplo de ahorro calculado."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "consumo-de-combustible"
  - "ralenti"
  - "telematica"
  - "costos-operativos"
  - "gestion-de-flota"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/costos-combustible
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Cuál es la métrica correcta para medir el consumo de una máquina?"
    a: "Litros por hora de motor, porque la maquinaria pesada no se mide en kilómetros. Pero esa cifra sola engaña: una excavadora que consume más por hora puede estar moviendo más material. Por eso se completa con litros por unidad productiva (por m³ movido, por tonelada o por viaje) y se separa el consumo en trabajo del consumo en ralentí."
  - q: "¿Cuánto combustible se pierde en ralentí?"
    a: "Depende del motor y del régimen. Un motor diésel en ralentí no produce trabajo pero sí consume combustible, y además acumula horas de motor, desgaste y carbonilla sin generar producción. La cifra real de cada máquina sale de la telemática o de una prueba controlada, no de un promedio general."
  - q: "¿Cómo detecto robo o pérdida de combustible?"
    a: "Cruzando tres datos: litros despachados por vale o surtidor, consumo reportado por el computador del motor o la telemática, y horas trabajadas. Si el despacho supera de forma sostenida el consumo esperado (un umbral que cada empresa define, por ejemplo más de 5 %), se investiga: fugas, calibración del surtidor, carga fuera de registro o desvío."
  - q: "¿Vale la pena instalar telemática en una flota pequeña?"
    a: "Normalmente sí cuando el combustible es uno de los mayores costos operativos. Basta con que reduzca el ralentí y detecte consumos anómalos en pocas máquinas para recuperar la inversión. Antes de comprar, define qué decisiones vas a tomar con los datos; sin ellas, el sistema solo produce gráficos."
  - q: "¿El mantenimiento influye en el consumo?"
    a: "Mucho. Filtros de aire tapados, inyectores desgastados, combustible contaminado con agua, neumáticos con baja presión, fugas hidráulicas o un circuito de refrigeración sucio elevan el consumo por hora. Muchas veces el gasto extra aparece en el combustible antes que en cualquier alarma."
related:
  - productividad-telescopico-telematica
  - vaciado-agua-combustible
  - mantenimiento-vims-caterpillar
  - mantenimiento-basico-de-maquinaria-pesada
---

El combustible suele ser uno de los dos o tres costos más grandes de
operar maquinaria pesada, y es el que más fácil se pierde sin darse
cuenta: se pierde en ralentí, en una mala técnica de operación, en un
filtro tapado o en un surtidor mal calibrado. El precio del diésel sube
y baja fuera del control de la empresa; el **consumo** sí se puede
gestionar.

Esta guía explica qué medir, cómo calcularlo, qué datos aporta la
telemática y cómo estimar el ahorro de una medida con un ejemplo
numérico.

## Qué medir: tres números por máquina

1. **Consumo por hora de motor (L/h).** Litros consumidos entre horas de
   motor del periodo. Es la base de todo.
2. **Consumo por unidad productiva.** Litros por m³ movido, por tonelada
   cargada, por viaje de camión o por hectárea. Responde si la máquina
   gasta más porque trabaja más o porque trabaja peor.
3. **Porcentaje de ralentí.** Horas de motor encendido sin trabajo
   productivo sobre horas totales de motor.

Con esos tres datos se pueden comparar máquinas del mismo modelo,
operadores distintos y turnos, y detectar desviaciones antes de que el
gasto aparezca en la factura.

### Cómo obtener los datos

- **Cálculo manual:** vales de despacho más horómetro de cada máquina.
  Simple, pero depende de que el registro se llene bien.
- **Computador del motor (ECM):** guarda litros consumidos, horas en
  ralentí y horas en carga. Se puede leer con la herramienta del
  fabricante.
- **Telemática:** transmite esos datos en línea, junto con posición,
  alarmas y horas. Reduce la carga administrativa y permite alertas.
  Más en
  [telemática y productividad](/posts/productividad-telescopico-telematica/).
- **Sensor de nivel en el tanque o caudalímetros:** miden directamente y
  ayudan a detectar fugas y extracciones.

## Ralentí: el ahorro más rápido

Un motor en ralentí consume combustible, suma horas de motor (y por
tanto adelanta los servicios) y no produce nada. En obra es habitual
dejar la máquina encendida mientras el operador baja, espera un camión o
almuerza. Cada máquina tiene su consumo en ralentí, que se obtiene de la
telemática o de una prueba corta con consumo medido en ese régimen.

Medidas que funcionan sin inversión:

- Regla escrita: si la espera pasa de cierto tiempo (por ejemplo,
  5 minutos), se apaga el motor. Respeta lo que indique el fabricante
  para turbocompresores: algunos requieren unos minutos de enfriamiento
  antes del apagado.
- Función de apagado automático por ralentí, disponible en muchos
  motores y configurable.
- Reporte semanal de % de ralentí por operador, comentado en la reunión
  de seguridad; lo que se mide y se muestra mejora.

## Otros factores que elevan el consumo

| Causa | Síntoma | Qué revisar |
|---|---|---|
| Filtro de aire obstruido | Humo oscuro, falta de potencia | Indicador de restricción, estado del elemento |
| Combustible con agua o sucio | Inyectores dañados, filtros que se tapan | Drenado del separador y tanque; ver [agua en combustible](/posts/vaciado-agua-combustible/) |
| Inyectores o bomba desgastados | Más consumo con menos potencia | Diagnóstico del sistema de inyección |
| Presión baja en neumáticos | Mayor resistencia a la rodadura | Medición de presión con regularidad |
| Radiador sucio o ventilador mal calibrado | Temperatura alta, ventilador funcionando todo el tiempo | Limpieza del núcleo, correa y control del ventilador |
| Fugas hidráulicas o presiones fuera de rango | Ciclos lentos, motor trabajando de más | Ajuste de presiones, estado de bombas y mangueras |
| Técnica del operador | Régimen alto sin necesidad, pasadas con balde mal llenado | Capacitación y modos de potencia del fabricante |

Muchas máquinas modernas ofrecen modos de potencia (económico, estándar,
potencia). Usar el modo más alto para tareas livianas gasta combustible
sin ganar productividad.

## Ejemplo: cuánto vale reducir el ralentí

Datos supuestos para ilustrar el cálculo (reemplázalos por los de tu
flota):

- 10 excavadoras de tamaño medio.
- 1.600 horas de motor por máquina al año.
- Consumo en trabajo: 16 L/h; en ralentí: 3 L/h.
- Ralentí actual: 30 % de las horas de motor.
- Meta: bajar el ralentí a 15 %.
- Precio supuesto del diésel: 1,00 USD por litro.

**Situación actual (por máquina):**

- Horas en ralentí: 1.600 × 0,30 = 480 h → 480 × 3 = 1.440 L.
- Horas en trabajo: 1.120 h → 1.120 × 16 = 17.920 L.
- Total: 19.360 L al año.

**Con ralentí en 15 %:**

- Horas en ralentí: 1.600 × 0,15 = 240 h. Las 240 h que se evitan ya no
  tienen el motor encendido.
- Ahorro por máquina: 240 × 3 = 720 L al año.
- Ahorro de la flota: 720 × 10 = **7.200 L**, es decir, **7.200 USD al
  año** al precio supuesto, un 3,7 % del consumo.

A ese ahorro se suma otro, menos visible: 240 h de motor menos por
máquina retrasan los servicios y reducen desgaste. Y el costo para
lograrlo fue una regla, una configuración y un reporte.

### Costo por unidad productiva

Si la misma excavadora carga 120 m³ por hora de trabajo con 16 L/h,
su consumo es 16 / 120 = **0,13 L/m³**. Si otro operador, con la misma
máquina, carga 100 m³/h con 17 L/h, el consumo sube a **0,17 L/m³**: el
gasto es 30 % mayor por el mismo trabajo. Ese es el tipo de diferencia
que el L/h solo no muestra.

## Técnica del operador

La diferencia entre un operador y otro con la misma máquina puede ser
grande. Los hábitos que más pesan:

- Trabajar en el régimen y el modo de potencia que pide la tarea, y no
  siempre al máximo.
- Llenar el cucharón o la caja de manera uniforme; muchas pasadas
  medio vacías gastan lo mismo que las llenas.
- Reducir distancias y giros innecesarios al posicionar la máquina y
  los camiones.
- No dejar el motor a plena aceleración mientras espera.
- Evitar cargar el motor contra el tope de un movimiento hidráulico
  (el brazo o el cucharón en fin de carrera con la palanca accionada).
- En camiones y equipos de transporte, mantener velocidad estable,
  anticipar frenadas y respetar la presión de neumáticos.

La capacitación funciona mejor con datos: mostrar al operador su L/h y
su % de ralentí frente al promedio de la flota, sin sanciones, y
reconocer las mejoras.

## Ejemplo de conciliación semanal

Una máquina trabajó 40 h de motor en la semana, con 28 h en trabajo y
12 h en ralentí. Con 16 L/h y 3 L/h, el consumo esperado es
28 × 16 + 12 × 3 = 448 + 36 = **484 L**. Los vales de despacho suman
530 L. La diferencia es 46 L, 9,5 % sobre lo esperado, por encima del
umbral de 5 % que fijó la empresa. Se revisa: fugas en mangueras de
combustible, vale duplicado, litros cargados a otra máquina o un
consumo mayor por trabajo en pendiente. Sin esa conciliación, la
diferencia habría pasado inadvertida dentro del gasto total.

## Control de despachos y pérdidas

El combustible que sale del tanque debe cuadrar con el que entra en las
máquinas:

1. Surtidores y medidores calibrados y precintados, con revisión
   periódica.
2. Vale o registro electrónico por despacho: máquina, litros, horómetro,
   operador y firma.
3. Conciliación semanal: litros despachados frente a consumo esperado
   según horas y consumo por hora. Las desviaciones se investigan.
4. Tanques cerrados, con acceso controlado y, si es posible, sensor de
   nivel con alerta por descenso fuera de horario.
5. Muestreo y limpieza del combustible almacenado para evitar agua y
   sedimento.

## Decisiones de largo plazo

- **Selección de equipo.** Al comprar o alquilar, compara el consumo
  declarado por tamaño y por unidad productiva, no solo el precio de
  adquisición. Un modelo más eficiente puede compensar su costo en pocas
  temporadas si trabaja muchas horas.
- **Contratos.** En contratos de larga duración, incluye una cláusula de
  ajuste por variación del combustible, con un precio base y un
  disparador claro. Respalda el pedido con facturas y con tus propios
  datos de consumo.
- **Renta y reemplazo.** Máquinas muy antiguas con alto consumo y poco
  uso pueden costar más en combustible y mantenimiento que reemplazarlas.
  Lo confirma el análisis de costo por hora, como el de la
  [auditoría de mantenimiento](/posts/auditoria-mantenimiento/).
- **Tecnologías alternativas.** Equipos eléctricos o híbridos pueden
  convenir si hay infraestructura de carga y ciclos de trabajo
  adecuados; se evalúa caso por caso.

## Plan de acción en cuatro pasos

1. Línea base: L/h, L por unidad productiva y % de ralentí por máquina,
   durante al menos un mes.
2. Metas por máquina y por operador, con comparaciones justas (mismo
   modelo y tarea).
3. Tres medidas inmediatas: regla de apagado, revisión de filtros y
   neumáticos, conciliación de despachos.
4. Revisión mensual de resultados y ajuste. Reconoce las mejoras,
   no solo las desviaciones.

Un buen programa de
[mantenimiento básico](/posts/mantenimiento-basico-de-maquinaria-pesada/)
y la lectura de alarmas del equipo, como en
[VIMS](/posts/mantenimiento-vims-caterpillar/), mantienen el motor
trabajando en su rango eficiente y evitan que el consumo se degrade
con el tiempo.

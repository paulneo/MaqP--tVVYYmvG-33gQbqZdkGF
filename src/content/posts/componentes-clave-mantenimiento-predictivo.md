---
title: "Mantenimiento predictivo: vibración, aceite, termografía y ultrasonido"
published: 2024-03-24
updatedAt: 2026-11-19
draft: false
featured: false
description: "Qué detecta cada técnica de mantenimiento predictivo en maquinaria: análisis de vibraciones, de aceite, termografía y ultrasonido, con tabla comparativa y cómo montar un programa."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "mantenimiento-predictivo"
  - "analisis-de-vibraciones"
  - "analisis-de-aceite"
  - "termografia"
  - "ultrasonido"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/componentes-clave-mantenimiento-predictivo
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Qué diferencia hay entre mantenimiento predictivo y preventivo?"
    a: "El preventivo cambia o revisa componentes por calendario u horas de uso, haya o no desgaste. El predictivo mide la condición real (vibración, aceite, temperatura, ruido ultrasónico) y interviene cuando los datos muestran que el deterioro empezó. Evita tanto la falla sorpresa como el cambio de piezas que aún tenían vida útil."
  - q: "¿Qué técnica conviene empezar a usar en una flota de maquinaria móvil?"
    a: "El análisis de aceite, porque no requiere equipo propio ni instalación: se toma la muestra y el laboratorio reporta metales de desgaste, contaminación y estado del lubricante. En equipos fijos con elementos rotativos (trituradoras, bombas, ventiladores, motores eléctricos) la vibración suele dar el mejor retorno."
  - q: "¿Cuánto tiempo antes avisa cada técnica?"
    a: "Depende de la falla, pero como orden relativo el ultrasonido y la vibración de alta frecuencia detectan el daño de rodamientos primero, luego el análisis de aceite, después la vibración global y el aumento de temperatura, y por último el ruido y el calor perceptibles. Cuanto antes se detecta, más tiempo hay para planificar la reparación."
  - q: "¿Una cámara termográfica sirve para todo?"
    a: "No. Detecta diferencias de temperatura superficial, así que sirve para conexiones eléctricas flojas, rodamientos sobrecalentados, frenos que arrastran o bloqueos en radiadores. No ve el interior de un componente ni un daño que aún no genera calor. Además, la inspección debe hacerse con el equipo bajo carga."
  - q: "¿Hace falta un especialista para interpretar los datos?"
    a: "Para tomar mediciones básicas basta con capacitación. Para diagnosticar un espectro de vibración o interpretar un informe de aceite con varias alertas conviene un analista certificado (por ejemplo, con certificación según ISO 18436). El técnico de campo recoge el dato; el analista lo traduce en una decisión."
related:
  - analisis-de-vibraciones
  - desbalanceo-mantenimiento-predictivo
  - analisis-aceites-maquinaria
  - mantenimiento-basico-de-maquinaria-pesada
---

El mantenimiento predictivo parte de una idea simple: casi ninguna pieza
falla de golpe. Antes de romperse produce señales (más vibración, más
temperatura, partículas metálicas en el aceite, un silbido en una línea
de aire) y esas señales se pueden medir semanas o meses antes de la
parada. La habilidad está en elegir la técnica que ve el tipo de falla
que importa en cada equipo.

Esta guía describe las cuatro técnicas más usadas en maquinaria
industrial y pesada: vibración, análisis de aceite, termografía y
ultrasonido; qué detecta cada una, qué no, y cómo armar un programa
básico.

## Qué se mide y por qué avisa

Toda falla progresiva sigue una curva: empieza con un defecto
microscópico, crece, produce síntomas medibles, luego perceptibles
(ruido, calor) y finalmente rotura. El intervalo entre el primer síntoma
medible y la falla funcional es el que se aprovecha. Las técnicas se
distinguen por cuán temprano en esa curva detectan el problema y por el
tipo de falla que "ven".

Por eso ninguna técnica sola cubre todo. Una bomba con un rodamiento
dañado se ve en vibración y ultrasonido; un motor diésel con desgaste de
camisas se ve en el aceite; una conexión eléctrica floja se ve en
termografía.

## Análisis de vibraciones

Es la técnica principal para **maquinaria rotativa**: motores eléctricos,
bombas, ventiladores, reductores, ejes, trituradoras. Un sensor convierte
el movimiento mecánico en una señal eléctrica y el análisis separa esa
señal en sus componentes.

### Sensores

- **Acelerómetros.** Los más usados. Miden aceleración y son sensibles a
  frecuencias altas, donde aparecen los defectos de rodamientos y
  engranajes.
- **Transductores de velocidad.** Miden velocidad de vibración; sirven
  para evaluar severidad general (desbalance, desalineación, holguras).
- **Sondas de proximidad (desplazamiento).** Miden el movimiento del eje
  respecto a la carcasa; se usan en máquinas grandes con cojinetes
  lisos.

### Cómo se lee la señal

- **Nivel global.** Un valor único de vibración (por ejemplo, velocidad
  RMS). Sirve para comparar contra límites de severidad, como los de la
  norma ISO 20816, y para seguir la tendencia en el tiempo.
- **Forma de onda en el tiempo.** Muestra impactos y golpes repetitivos.
- **Espectro (FFT).** Descompone la señal en frecuencias. Cada falla
  deja una "huella" en frecuencias relacionadas con la velocidad de giro
  del eje.

### Huellas típicas en el espectro

| Falla | Dónde aparece |
|---|---|
| Desbalance | Pico dominante a 1 vez la velocidad de giro (1x), en dirección radial |
| Desalineación | Picos en 1x y 2x, a menudo con componente axial alta |
| Holgura mecánica | Armónicos múltiples de 1x, a veces subarmónicos |
| Rodamiento dañado | Frecuencias propias de cada pista y elemento rodante, que dependen de la geometría del rodamiento |
| Engranaje con desgaste | Frecuencia de engrane con bandas laterales a la velocidad del eje |

Una corrección respecto a la explicación habitual: un pico de
rodamiento no aparece a la "frecuencia natural" del cojinete, sino a las
frecuencias de defecto calculadas con su geometría y la velocidad de
giro (pista externa, interna, jaula, elementos rodantes). Muchos
programas incluyen estas frecuencias por modelo de rodamiento.

Ejemplo: en una bomba centrífuga, el nivel global sube de 2,0 a
4,5 mm/s en dos meses y el espectro muestra picos a la frecuencia de
defecto de la pista externa del rodamiento del lado acople. Aún no hay
ruido ni calor; se programa el cambio en la próxima parada y se pide
engrase y verificación de alineación para no repetir el problema.

Más detalle de diagnóstico en
[análisis de vibraciones](/posts/analisis-de-vibraciones/) y el caso del
[desbalanceo](/posts/desbalanceo-mantenimiento-predictivo/).

## Análisis de aceite

Es la técnica natural para **motores, transmisiones, mandos finales y
circuitos hidráulicos** de maquinaria móvil. Se toma una muestra del
aceite en servicio, con procedimiento limpio y siempre en el mismo
punto, y un laboratorio la analiza.

Qué entrega:

- **Metales de desgaste.** Hierro (cilindros, engranajes, cigüeñal),
  cobre y plomo (cojinetes, bujes, enfriadores), aluminio (pistones,
  carcasas). Una tendencia ascendente importa más que un valor aislado.
- **Contaminantes.** Silicio (polvo que entra por filtro de aire o
  sellos), agua, refrigerante, combustible diluido en el aceite.
- **Estado del lubricante.** Viscosidad, oxidación, reserva alcalina o
  acidez, aditivos.
- **Limpieza.** En sistemas hidráulicos, conteo de partículas según
  ISO 4406.

La utilidad práctica: el silicio alto avisa de un problema de admisión
antes de que se desgasten los cilindros; la presencia de refrigerante
en el aceite avisa de una fuga interna antes de que dañe los cojinetes.
Para el método de muestreo y la interpretación, consulta
[análisis de aceites en maquinaria](/posts/analisis-aceites-maquinaria/).

## Termografía infrarroja

Una cámara infrarroja muestra la distribución de temperatura superficial.
Es rápida y no requiere contacto, por lo que es muy útil en:

- Tableros, conexiones y fusibles eléctricos (una conexión floja
  calienta antes de fallar).
- Rodamientos, acoples y motores sobrecalentados.
- Frenos que arrastran, embragues que patinan.
- Radiadores y enfriadores obstruidos, tuberías y refractarios.

Condiciones para que el resultado sea válido: equipo **operando bajo
carga normal**, emisividad ajustada al material (los metales brillantes
engañan), comparación con componentes similares o con el mismo punto en
inspecciones anteriores y seguridad eléctrica al abrir tableros. Una
imagen sin referencia no es diagnóstico: lo que importa es la
diferencia respecto a lo normal.

## Ultrasonido

Detecta ondas de sonido de alta frecuencia, fuera del rango audible, que
generan fricción, fugas e impactos. Se usa con un detector manual
y auriculares.

- **Fugas** de aire comprimido, vacío o gases: la turbulencia genera
  ultrasonido y se localiza el punto exacto.
- **Rodamientos:** detecta falta de lubricación y daño incipiente muy
  temprano, y permite engrasar controlando el nivel de señal en lugar
  de hacerlo "a ojo".
- **Descargas eléctricas** (efecto corona, arcos) en instalaciones.
- **Válvulas y trampas de vapor** con fugas internas.

## Comparación rápida

| Técnica | Detecta mejor | Limitaciones | Se aplica en |
|---|---|---|---|
| Vibración | Desbalance, desalineación, holguras, rodamientos, engranajes | Requiere equipo y analista; menos útil en motores alternativos | Máquinas rotativas fijas |
| Aceite | Desgaste interno, contaminación, degradación | No localiza el componente exacto; depende del muestreo | Motores, transmisiones, hidráulicos |
| Termografía | Puntos calientes eléctricos y mecánicos | Solo superficie; exige carga y emisividad correcta | Tableros, rodamientos, frenos |
| Ultrasonido | Fugas, lubricación, fallas incipientes | Ruido ambiente; requiere acceso | Aire comprimido, rodamientos, eléctricos |

## Equipos móviles y equipos fijos

La mezcla de técnicas cambia según el tipo de equipo:

- **Maquinaria móvil** (excavadoras, cargadores, camiones): el peso
  principal lo lleva el análisis de aceite de motor, transmisión, mandos
  finales y circuito hidráulico, complementado con termografía de
  frenos, conexiones y radiadores, y con las alarmas del monitoreo del
  propio equipo, como en
  [VIMS de Caterpillar](/posts/mantenimiento-vims-caterpillar/). La
  vibración se usa menos porque el motor alternativo y el trabajo
  irregular dificultan interpretar el espectro.
- **Equipos fijos o de planta** (trituradoras, cintas, bombas,
  ventiladores, reductores): domina la vibración, con ultrasonido para
  lubricación y fugas, y termografía para el sistema eléctrico.

## Niveles de alarma y qué hacer con cada uno

Un programa útil define al menos tres niveles para cada medición:

| Nivel | Significado | Respuesta típica |
|---|---|---|
| Normal | Dentro del rango de la línea base | Continuar con la frecuencia habitual |
| Alerta | Tendencia ascendente o valor sobre el límite de aviso | Aumentar la frecuencia de medición, confirmar con otra técnica y planificar |
| Acción | Valor sobre el límite de intervención | Programar la reparación con plazo y evaluar si la máquina puede seguir operando |

Los límites se toman de la norma o del fabricante cuando existen, y si
no, de la historia del propio equipo. Un valor aislado dice poco; la
**tendencia** entre dos o tres mediciones suele decir más que cualquier
límite absoluto. Y si una técnica da alerta, confírmala con otra antes
de abrir el equipo: una vibración alta con hierro alto en el aceite del
reductor es un diagnóstico mucho más firme que cualquiera de las dos
por separado.

## Cómo montar un programa básico

1. **Lista de equipos críticos.** Prioriza los que paran la producción
   o cuya falla es costosa o peligrosa.
2. **Modos de falla.** Para cada equipo, anota qué falla es probable y
   qué técnica la ve.
3. **Puntos y frecuencia de medición.** Define puntos fijos (siempre el
   mismo lugar y condición) y una frecuencia: mensual para rotativos
   críticos, cada cambio de aceite o intervalo fijo para análisis de
   fluidos.
4. **Línea base y alarmas.** Registra el estado "sano" y fija niveles de
   alerta y de acción.
5. **Acción documentada.** Cada alarma genera una orden de trabajo con
   plazo. El dato sin acción no previene nada.
6. **Revisión de resultados.** Cada trimestre revisa qué se detectó a
   tiempo, qué se escapó y ajusta.

Este programa se integra con el plan preventivo y los indicadores de la
[auditoría de mantenimiento](/posts/auditoria-mantenimiento/): si el
predictivo funciona, sube el MTBF y baja el trabajo de emergencia.

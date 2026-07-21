---
title: "EPA Tier 4, Euro Stage V y normas de emisiones diesel en Latam: qué obligan y cómo afectan a operadores"
published: 2026-08-24
draft: false
featured: false
description: "Las normas EPA Tier 4 Final y Euro Stage V redefinieron el motor diesel moderno. Pero Latam va detrás — con normas más laxas o inexistentes en varios países. Repasamos qué exige cada norma y qué implica para el operador latinoamericano."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "epa-tier-4"
  - "euro-stage-v"
  - "normas-emisiones"
  - "latam"
  - "sistema-acert"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/normas-emisiones-tier4-eurov-latam
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Qué es EPA Tier 4 Final y qué motores afecta?"
    a: "EPA Tier 4 Final es la norma de emisiones más estricta actualmente vigente en Estados Unidos para motores diesel off-highway (o sea, no de carretera): construcción, minería, agricultura, generación estacionaria, marinos. Entró en vigor gradualmente entre 2014 y 2015 según el tamaño del motor. Sus límites: NOx 0.4 g/kWh, PM 0.02 g/kWh, HC 0.19 g/kWh, CO 3.5 g/kWh. Esto es una reducción del ~95% en NOx y ~90% en PM respecto de los motores pre-2000. Para cumplirla los fabricantes tuvieron que integrar sistemas complejos: DPF, SCR, DOC, EGR/CGI, alta presión de inyección. Es la norma que forzó la industria a la arquitectura actual de motores diesel."
  - q: "¿Y Euro Stage V?"
    a: "Es el equivalente europeo, entró en vigor en 2019-2020 según el tipo de motor. Es muy similar en límites a EPA Tier 4 Final, pero con algunas diferencias: (1) Euro Stage V es MÁS estricta en PM por número de partículas (PN), no solo por masa — mide cuántas partículas ultrafinas hay, no solo su peso total; (2) obliga uso de DPF prácticamente en todos los motores off-highway; (3) los ciclos de prueba son ligeramente diferentes. En general, un motor certificado EPA Tier 4 Final cumple también Euro Stage V con mínimos ajustes. La UE es el mercado más exigente en emisiones diesel a nivel mundial junto con Japón y California."
  - q: "¿Qué normas de emisiones diesel hay en Latam?"
    a: "Muy variables según el país. México: para transporte terrestre requiere norma NOM-044 equivalente a EPA 2010 (US 2010) — bastante estricta; para off-highway (construcción, minería) no hay requisito estricto todavía. Brasil: PROCONVE tiene fases equivalentes a Euro; la P8 (2023) equivale aproximadamente a Euro VI. Argentina: sigue normas europeas con retraso, Euro V vigente. Chile: bastante estricto, sigue Euro y a veces EPA en paralelo. Perú, Colombia, Ecuador, Bolivia: más laxos, en muchos casos no hay norma específica para off-highway. Uruguay y Paraguay: siguen normativa MERCOSUR alineada con Brasil. El operador latinoamericano típico tiene mucha más flexibilidad para operar motores más antiguos que en USA o Europa, pero eso está cambiando lentamente."
  - q: "¿Puedo importar una máquina con motor pre-Tier 4 a mi país?"
    a: "Depende del país y del año de fabricación. En USA y Europa la importación de motores diesel viejos está muy restringida — necesita certificación EPA/Euro vigente. En la mayoría de países de Latam la restricción es menor y sí se pueden importar máquinas usadas con motores pre-Tier 4, aunque hay tendencia creciente a exigir certificaciones al menos equivalentes a Euro V. Chile y México son los más estrictos; Perú, Bolivia, Ecuador son los más flexibles. Antes de comprar máquina usada importada, verificá siempre la normativa aduanera y ambiental vigente en tu país específico — cambia con frecuencia."
  - q: "Si Latam es más laxo, ¿por qué los fabricantes venden acá motores Tier 4?"
    a: "Por razones económicas y comerciales, no legales. (1) Fabricar motores diferentes por región es carísimo — es más barato producir un solo diseño global; (2) los grandes clientes multinacionales (mineras, constructoras internacionales) piden motores Tier 4 aunque operen en país donde no se exija, porque tienen políticas globales de responsabilidad ambiental; (3) el diesel Tier 4 requiere combustible ULSD (baja azufre), que se está estandarizando en toda Latam gradualmente; (4) mantener certificación en múltiples versiones es un dolor de cabeza para el fabricante. Resultado: el operador latinoamericano hoy termina comprando motores tecnológicamente sofisticados que las normas de su país no exigen — y a veces sufriendo el mantenimiento complejo de sistemas de emisiones que 'no le sirven' localmente. Es un tema tema controvertido en la industria."
sources:
  - title: "US EPA — Nonroad Diesel Engine Emissions Standards Tier 4"
    url: "https://www.epa.gov/"
  - title: "European Commission — Stage V Emission Standards for Non-Road Machinery"
    url: "https://ec.europa.eu/"
  - title: "PROCONVE — Programa de Controle da Poluição do Ar por Veículos Automotores (Brasil)"
    url: "https://www.gov.br/"
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
related:
  - historia-normas-epa-diesel
  - las-emisiones-reguladas-del-motor-diesel
  - acert-vs-scr-tecnologias-emisiones
  - sistema-acert-caterpillar-que-es-como-funciona
---

Todo el edificio técnico del sistema ACERT, del SCR, del DPF, del CGI
y de los turbos en serie que vimos en esta serie fue construido para
cumplir con **normas de emisiones**. Sin esas normas, los motores
diesel no habrían cambiado tanto en los últimos 30 años.

Este último artículo de la serie cierra el ciclo mirando el panorama
regulatorio actual: qué exige EPA Tier 4, qué exige Euro Stage V, y
qué exige (o no exige) el marco normativo en Latam. Y sobre todo,
qué implica para el operador latinoamericano en la práctica.

## EPA Tier 4 Final: la norma "madre"

EPA (Environmental Protection Agency) de Estados Unidos es
históricamente el regulador que marca el paso mundial en normas
diesel. Su serie Tier fue endureciendo los límites gradualmente desde
1996:

| Norma       | Año   | NOx (g/kWh) | PM (g/kWh) |
| ----------- | ----- | ----------- | ---------- |
| **Tier 1**  | 1996  | 9.2         | 0.54       |
| **Tier 2**  | 2001  | 6.4         | 0.20       |
| **Tier 3**  | 2006  | 4.0         | 0.20       |
| **Tier 4 Interim** | 2011 | 2.0    | 0.02       |
| **Tier 4 Final**   | 2014 | 0.4    | 0.02       |

Los cambios de Tier 3 a Tier 4 Final son **dramáticos**:

- **NOx**: de 4.0 a 0.4 g/kWh — reducción del **90%**.
- **PM**: mantiene 0.02 pero con ciclos de prueba más rigurosos.

Para cumplir Tier 4 Final, los fabricantes tuvieron que integrar:

1. **DPF** — obligatorio para PM.
2. **SCR o EGR/CGI + DPF avanzado** para NOx.
3. **DOC** para HC y CO.
4. **Alta presión de inyección** con múltiples pulsos.
5. **Combustible ULSD** obligatorio (menos de 15 ppm de azufre).

Es la norma que **forzó la arquitectura completa** del motor diesel
moderno.

## Euro Stage V: el rival europeo

La Unión Europea sigue su propia numeración de normas. Para off-highway:

| Norma           | Año       | NOx (g/kWh) | PM (g/kWh) | PN (#/kWh)    |
| --------------- | --------- | ----------- | ---------- | ------------- |
| **Stage IIIA**  | 2006      | 4.0         | 0.20       | -             |
| **Stage IIIB**  | 2011      | 2.0         | 0.025      | -             |
| **Stage IV**    | 2014      | 0.4         | 0.025      | -             |
| **Stage V**    | 2019-2020 | 0.4         | 0.015      | 1×10¹²        |

La diferencia clave de **Stage V** respecto de Tier 4 Final es:

- Introduce **límite de número de partículas (PN)** además de masa.
  Esto ataca las **partículas ultrafinas** (nanopartículas) que son
  las más peligrosas para la salud pero pesan poco. En la práctica
  esto **hace obligatorio el DPF** en casi todas las aplicaciones.
- **Límite de PM más bajo** (0.015 vs 0.02 g/kWh).

Cumplir Stage V requiere DPF + SCR + DOC + control muy fino de la
combustión. Es la norma más estricta del mundo actualmente para
motores off-highway.

Un motor certificado Tier 4 Final **casi siempre cumple también Stage
V**, aunque hay ajustes menores. Los fabricantes globales típicamente
certifican para ambas.

## Latinoamérica: mapa fragmentado

A diferencia de EPA (que aplica en todo USA) y Euro (que aplica en
toda la UE), en **Latinoamérica no hay una norma unificada**. Cada
país tiene su propia regulación.

### México: NOM-044 y NOM-045

**NOM-044-SEMARNAT-2017**: aplica a vehículos pesados de carretera
(camiones, buses). Alineada con EPA 2010 y Euro V.

**NOM-045-SEMARNAT-2017**: opacidad de humos negros — ataca PM
gruesa.

Para **off-highway** (construcción, minería, agricultura): **no hay
norma específica** todavía. La maquinaria puede operar con motores
Tier 2 o 3, incluso mecánicos, sin problema legal.

### Brasil: PROCONVE

**PROCONVE** (Programa de Controle da Poluição do Ar por Veículos
Automotores) tiene fases sucesivas:

- **P7** (2012): equivalente a Euro V.
- **P8** (2023): equivalente aproximadamente a Euro VI.

Para maquinaria off-highway, **MAR-1** (2019) aplica límites similares
a Tier 3 y luego evoluciona.

Brasil es el mercado latinoamericano con más regulación diesel.

### Chile: alineación con Euro

Chile sigue las normas Euro con retraso variable. Actualmente **Euro V
para transporte** obligatorio, y hay presión creciente para Euro VI en
zonas de alta contaminación (Santiago, zona central).

Para off-highway hay menos regulación pero está en discusión.

### Argentina: Euro V vigente

**Ley 24.449** y regulaciones específicas fijan Euro V para vehículos
nuevos de carretera. Off-highway sin regulación específica.

### Perú, Colombia, Ecuador, Bolivia

Marcos regulatorios más laxos. Se admite operar maquinaria con
motores pre-Tier 4 en la mayoría de los casos. Las normas específicas,
cuando existen, están orientadas a transporte urbano en las capitales
(buses, taxis) y muy poco a industrial.

Hay presión ambiental creciente pero implementación lenta.

### Uruguay y Paraguay

Siguen normativa MERCOSUR alineada con Brasil.

## Implicancias para el operador latinoamericano

Si operás maquinaria pesada en Latam, esta fragmentación regulatoria
tiene consecuencias prácticas.

### 1. Podés comprar máquina más "vieja" legalmente

En la mayoría de países latinoamericanos, importar una máquina usada
con motor Tier 2 o Tier 3 es **legalmente viable**. Esto abre un
mercado grande de maquinaria de segunda mano proveniente de USA,
Europa y Japón.

Ventaja: **precio mucho menor**. Un motor mecánico o electrónico
simple vs uno Tier 4 puede tener 30-50% de diferencia en precio de
compra.

Desventaja: **combustible cada vez más problemático** — si el país
está migrando a ULSD (baja azufre), los motores viejos siguen
funcionando pero pierden alguna eficiencia. Y el combustible con más
azufre está desapareciendo lentamente.

### 2. Tenés que operar motores modernos aunque no los "necesites"

Cuando comprás maquinaria nueva en Latam, en la mayoría de los casos
te viene con motor **Tier 4 Final o Stage V** aunque la ley local no
lo exija. Como discutimos: los fabricantes no producen versiones
"low-tech" solo para Latam.

Resultado: **operás motores complejos** con DPF, SCR, CGI en un
entorno donde:

- El combustible puede no ser el mejor (aunque ULSD ya es
  ampliamente disponible).
- El AdBlue puede no estar en todas las estaciones.
- Los técnicos capacitados pueden ser escasos fuera de las
  capitales.
- El servicio oficial Cat/Volvo/Cummins puede estar lejos.

### 3. El mantenimiento del sistema de emisiones es un dolor de cabeza

Motores Tier 4 requieren:

- DPF con regeneraciones periódicas.
- Aceite CJ-4/CK-4 (a veces caro y no siempre local).
- Filtros de combustible finos (2-4 micras).
- AdBlue si tiene SCR.
- Diagnóstico con Cat ET o equivalente.

Todo esto es más caro que el mantenimiento de un motor mecánico
viejo. Y en zonas rurales o remotas, puede ser logísticamente
complicado.

### 4. Deletes: la tentación local

Frente a esta complejidad, muchos operadores latinoamericanos caen
en la tentación del **DPF delete + CGI delete + reprogramación de
ECU** para "simplificar" el motor.

Como discutimos en el [artículo sobre mantenimiento preventivo](/posts/mantenimiento-preventivo-acert/),
esto tiene consecuencias:

- **Ilegal si el país tiene norma equivalente** — cada vez más
  países.
- Anula garantía.
- Reduce valor de reventa.
- Puede acelerar desgaste de otras partes del motor.
- Aumenta emisiones que respirás vos y tu comunidad.

Es una decisión que requiere análisis serio caso por caso. En una
mina en el altiplano peruano a 4.500 msnm sin acceso a AdBlue, con
combustible dudoso, y sin técnico Cat cercano, el análisis es
distinto que en una obra en Buenos Aires.

## El futuro: hacia la descarbonización

Las normas de emisiones se enfocaron 30 años en NOx, PM, HC y CO. Lo
próximo es **CO₂ — el gas de efecto invernadero**.

**Europa** ya tiene targets agresivos de CO₂ para vehículos pesados
(-30% para 2030). USA sigue con propuestas similares. Latam está
lejos de esto todavía, pero la tendencia global es clara.

Esto va a forzar:

- **Motores diesel aún más eficientes** — mejorando 5-10% adicional.
- **Combustibles renovables** — HVO (Hydrotreated Vegetable Oil),
  biodiesel avanzado.
- **Híbridos diesel-eléctricos** en construcción y minería.
- **Motores 100% eléctricos** en aplicaciones ligeras y medias.
- **Motores a hidrógeno** en desarrollo para pesados.

El motor diesel ACERT tal como lo conocimos va a evolucionar
lentamente hacia estas tecnologías. Pero por 20-30 años más va a
seguir siendo el corazón de la mayoría de la maquinaria pesada del
mundo — incluyendo la de Latam.

## En resumen

**EPA Tier 4 Final** y **Euro Stage V** son las normas actuales más
estrictas y las que definieron la arquitectura del motor diesel
moderno. Sin ellas, no existiría el sistema ACERT, ni el DPF, ni el
SCR tal como los conocemos.

**Latinoamérica** va detrás — con normas fragmentadas por país,
mucho más laxas en promedio, especialmente en aplicaciones
off-highway. Esto crea oportunidades (máquinas más baratas usadas) y
dolores de cabeza (mantenimiento complejo de motores Tier 4 en
entornos que no lo exigen).

El operador latinoamericano tiene que **decidir informado**: qué
motor comprar, qué mantenimiento sostener, cómo operar dentro del
marco regulatorio local pero también con vista al mercado
internacional.

Y con esto cerramos la serie sobre motores ACERT. Empezamos con
qué es ACERT y por qué existe, pasamos por cada uno de sus
componentes técnicos —CGI, DPF, turbos, inyección de alta presión,
válvulas electrónicas—, cubrimos el mantenimiento y el diagnóstico
en la práctica, comparamos con SCR, y ahora cerramos con el marco
regulatorio que le dio origen.

Los motores diesel modernos son un ejemplo notable de ingeniería
—complejos, precisos, exigentes— y a la vez de política pública:
sin las normas de emisiones nunca habrían existido. Entender ambas
dimensiones es entender por qué la maquinaria pesada actual es
como es.

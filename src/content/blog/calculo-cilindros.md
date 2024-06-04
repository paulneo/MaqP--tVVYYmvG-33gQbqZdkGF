---
title: "Cálculos de Cilindros"
description: "Cálculo de cilindros neumáticos: esencial para diseño en automatización. Incluye fuerza del émbolo, longitud de carrera, velocidad y consumo de aire"
pubDate: "Mar 18 2024"
heroImage: "/images/calculo-cilindros.jpg"
tags: ["Cilindros", "Maquinaria"]
category: maquinarias_pesadas
---

Los cálculos de cilindros son esenciales para el diseño y la aplicación correcta de sistemas neumáticos en la automatización industrial. A continuación, se presenta un resumen detallado de los aspectos cruciales a considerar al calcular un cilindro neumático, directamente basado en la sección 3.5 del manual proporcionado.

## Fuerza del Émbolo

La fuerza que un cilindro puede ejercer depende principalmente de la presión del aire, el diámetro del cilindro y el rozamiento de las juntas. La fuerza teórica se calcula mediante la fórmula:

```markdown
F teórica = P · A
Donde:
F = teórica: ​es la fuerza del émbolo en Kgf
P = es la presión relativa en Kg/cm²
A = es la superficie del émbolo en cm²
```

Es importante considerar que, en la práctica, la fuerza real se verá afectada por los rozamientos, representando entre un 3% a un 20% de la fuerza calculada.

## Longitud de Carrera

La longitud de carrera de los cilindros neumáticos no debe superar los 2000 mm. Esto se debe a que cilindros con carreras largas y diámetros grandes pueden resultar económicamente desventajosos debido al elevado consumo de aire y coste de los actuadores. Para carreras largas, se recomienda utilizar vástagos de diámetro superior al normal para evitar problemas de pandeo.

## Velocidad del Émbolo

La velocidad del émbolo en cilindros neumáticos depende de varios factores, incluyendo la presión del aire y la longitud de la tubería. La velocidad media está entre 0.1 y 1.5 m/s, aunque con cilindros especiales pueden alcanzarse velocidades de hasta 10 m/s.

## Consumo de Aire

El consumo de aire de un cilindro se calcula para conocer el gasto de energía de la instalación, utilizando la fórmula:

```markdown
Q=2(S⋅n⋅q)
Donde:
Q = es el caudal nominal (Nl/min)
n = el número de carreras por minuto
S = la carrera en cm
q = el consumo por carrera
```

#### Ejemplo de tabla para el calculo de caudales

| ∅ Cilindro | 5      | 7      | 9      | 11     | 13     | 15     |
| ---------- | ------ | ------ | ------ | ------ | ------ | ------ |
| 6          | 0,0016 | 0,0022 | 0,0027 | 0,0033 | 0,0038 | 0,0044 |
| 12         | 0,007  | 0,009  | 0,011  | 0,013  | 0,015  | 0,018  |
| 16         | 0,011  | 0,016  | 0,020  | 0,024  | 0,028  | 0,032  |
| 25         | 0,029  | 0,038  | 0,048  | 0,057  | 0,067  | 0,076  |
| 35         | 0,056  | 0,075  | 0,093  | 0,112  | 0,131  | 0,149  |
| 40         | 0,073  | 0,097  | 0,122  | 0,146  | 0,171  | 0,195  |
| 50         | 0,115  | 0,153  | 0,191  | 0,229  | 0,267  | 0,305  |
| 70         | 0,225  | 0,299  | 0,374  | 0,448  | 0,523  | 0,597  |
| 100        | 0,459  | 0,610  | 0,736  | 0,915  | 1,067  | 1,219  |
| 140        | 0,899  | 1,197  | 1,495  | 1,793  | 2,091  | 2,389  |
| 200        | 1,835  | 2,443  | 3,052  | 3,660  | 4,268  | 4,876  |
| 250        | 2,867  | 3,817  | 4,768  | 5,718  | 6,668  | 7,619  |

#### Fijaciones

El tipo de fijación es esencial para asegurar una instalación adecuada y la funcionalidad del cilindro dentro del sistema neumático. Existen varias opciones, incluidas fijaciones por pies, brida, oscilante, medio cilindro, y posterior, permitiendo una amplia versatilidad en la aplicación y montaje del cilindro​​.

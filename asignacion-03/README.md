# EconoRutas
**Asignación 3 — Desarrollo Web Frontend Esencial · ITSU**

| | |
|---|---|
| **Desarrollador** | Alexis González |
| **Cédula** | V-21.622.104 |
| **Correo** | alexisgonzalez.itsu@gmail.com |

## ¿Qué es?
Un catálogo web interactivo diseñado para recopilar opciones de salidas, paseos y actividades en Caracas y sus alrededores, clasificadas por rango de precio. Está pensado para demostrar que el esparcimiento local es accesible para todos.

## Problema que resuelve
Elimina la ansiedad financiera al organizar salidas. Muchas personas se cohíben de salir por miedo a gastar de más; esta aplicación aporta transparencia mostrando opciones viables (incluso gratuitas) ideales para compartir en pareja o con grupos de estudio sin desajustar el presupuesto.

## CTA principal
"Descubrir planes por menos de $10" y explorar visualmente el catálogo interactivo para tomar decisiones rápidas.

## Estructura de componentes
```text
App
├── Header (Branding y navegación estática)
├── Hero (Presentación visual y filtros decorativos)
├── CatalogSection (Contenedor inteligente de la cuadrícula)
│   └── FeatureCard × 5 ← renderizado dinámicamente con .map()
└── Footer (Cierre institucional)
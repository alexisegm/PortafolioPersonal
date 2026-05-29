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
```

**Justificación:** Se aplicó el principio de separación de responsabilidades. `CatalogSection` actúa como el componente padre inteligente que maneja la importación de datos y la iteración, mientras que `FeatureCard` es un componente presentacional puro ("hijo") que solo se encarga de renderizar la información que recibe, lo que lo hace altamente escalable y reutilizable.

## Props utilizadas

| Componente | Props que recibe |
|---|---|
| FeatureCard | `title`, `description`, `budget`, `locationName`, `mapUrl`, `vibe`, `priceCategory` |

## Array de datos
El array principal se llama `planesEconoRutas` y está aislado en el archivo `/src/data/rutas.js`. Contiene 5 objetos que alimentan la interfaz mediante el método `.map()`.

## IA utilizada

**¿Qué le pedí a la IA?**
Asistencia en la configuración inicial del entorno con Vite para asegurar el despliegue correcto en GitHub Pages (`base: './'`), así como la estructuración del esqueleto de componentes base y la lógica semántica de colores en CSS sin librerías.

**¿Qué modifiqué o corregí yo?**
La conceptualización del negocio (EconoRutas), los datos reales de los lugares, la inyección manual de las `props` dentro del `.map()` y la organización de la arquitectura de archivos del repositorio.

## Requisitos técnicos
- [x] Header
- [x] Hero con CTA
- [x] Mínimo 2 secciones de contenido
- [x] Footer
- [x] Componente reutilizable con props
- [x] Array de datos + `.map()` con `key`
- [x] CSS responsivo (funciona en móvil)
- [x] Sin librerías externas de UI

## Screenshot del Resultado Final
![Interfaz de EconoRutas](./docs/screenshot.png)
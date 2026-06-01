# Especificaciones Técnicas (Spec) - EconoRutas

## 1. Descripción General
EconoRutas es una aplicación web Frontend estática construida bajo una arquitectura basada en componentes. Su propósito es renderizar un catálogo interactivo de destinos turísticos y de esparcimiento local categorizados por presupuesto.

## 2. Stack Tecnológico
* **Entorno:** Node.js + Vite (Empaquetador de módulos ultrarrápido).
* **Librería Principal:** React (v18+).
* **Estilos:** CSS3 nativo (sin frameworks) enfocado en variables globales (Custom Properties) y diseño responsivo (Mobile-First).
* **Despliegue:** GitHub Pages (vía directorio `/dist`).

## 3. Arquitectura y Estructura
El proyecto abandona el paradigma monolítico de Vanilla JavaScript para adoptar ES Modules nativos y principios SOLID, dividiendo responsabilidades:
* **Capa de Datos (`/src/data`):** Aislamiento de la base de datos local (Array de objetos).
* **Capa UI (`/src/components`):** Componentes funcionales independientes (`Header`, `Hero`, `CatalogSection`, `Footer`).
* **Componentes Presentacionales (`FeatureCard`):** Plantillas reutilizables alimentadas dinámicamente mediante `props`.

## 4. Requerimientos de Funcionalidad
* Renderizado dinámico de listas utilizando el método `.map()`.
* Asignación estricta de `keys` únicas para optimización del Virtual DOM.
* Lógica semántica en CSS aplicada dinámicamente mediante interpolación de variables en JSX.
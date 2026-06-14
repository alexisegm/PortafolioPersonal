# TechCart — Catálogo de Productos
**Asignación 05— Patrón Contenedor/Presentación (DWF)**

| | |
|---|---|
| **Desarrollador** | Alexis E. Gonzalez M. |

## ¿Qué es?
Una interfaz de catálogo de productos dinámico desarrollada bajo una arquitectura moderna orientada a componentes. Permite la visualización, selección y gestión de productos en un carrito de compras persistente.

## Funcionalidades principales
* **Gestión de Carrito:** Sistema de agrupación de productos (incremento/decremento de cantidades).
* **Persistencia:** Los datos del carrito se mantienen tras recargar la página mediante `localStorage`.
* **Arquitectura:** Patrón de Separación de Responsabilidades (SRP) entre componentes inteligentes y presentacionales.
* **UX/UI:** Manejo de estados de carga, carrito vacío y cálculos dinámicos de impuestos/descuentos.

## Estructura
```text
App (Smart Component)
├── Header (Gestión de Carrito, Envíos, Cupones)
└── Main (Grid de productos con ProductList y ProductCard)
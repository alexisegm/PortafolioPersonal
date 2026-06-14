# Especificaciones Técnicas (Spec) - TechCart

## 1. Gestión de Estado
La aplicación utiliza `useState` centralizado en `App.jsx`.
* **Persistencia:** Sincronización en tiempo real con `localStorage` mediante `useEffect`.
* **Agrupación:** Lógica de carrito que agrupa ítems por ID/título, gestionando la propiedad `cantidad` para evitar duplicados.

## 2. Lógica de Negocio
* **Cálculos:** El `subtotal` y `total` son derivados reactivos (`reduce`) que consideran precio y cantidad.
* **Sorting:** Implementación de filtrado dinámico mediante criterios de ordenamiento (Precio, Relevancia, Novedades).
* **Comunicación:** Integración de canal directo de atención mediante protocolo `wa.me`.

## 3. Arquitectura
* **Smart Components:** `App.jsx` (Gestión de estado y persistencia), `Header.jsx` (Lógica de Carrito, WhatsApp y Sorting).
* **Presentational Components:** `ProductCard.jsx` (Renderizado puro de datos), `ProductList.jsx` (Listado y ordenamiento).
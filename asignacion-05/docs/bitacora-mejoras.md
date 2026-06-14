# Reporte de Mejoras e Iteraciones

## 1. Mejoras Finales (Sprint 3)
* **Atención al Cliente:** Se añadió el icono de acceso directo a WhatsApp en el `Header`, utilizando `window.open` para redirección a soporte.
* **Sistema de Sorting:** Se integró un menú desplegable (dropdown) en el `Header` con 5 criterios de ordenamiento:
    1. Los más vendidos esta semana
    2. Precio: Menor a mayor
    3. Precio: Mayor a menor
    4. Novedades (Lo último)
    5. Mejor valorados
* **Refactorización de UI:** Se consolidó el `Header` como componente central de navegación (Carrito, Soporte y Filtros).

## 2. Resumen de Ciclo de Vida
* El proyecto ha evolucionado desde una arquitectura monolítica hacia una estructura de componentes reactivos.
* Se ha priorizado la **Persistencia de Datos** y la **Usabilidad** por encima de validaciones complejas de backend, cumpliendo con los objetivos de la fase de despliegue.
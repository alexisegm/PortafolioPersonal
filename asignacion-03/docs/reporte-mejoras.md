# Reporte de Mejoras e Iteraciones

## 1. Transición Estructural
Se realizó una migración desde un diseño web tradicional hacia un ecosistema moderno con React. La mejora principal fue la modularización: el `index.html` dejó de alojar cientos de líneas de código para convertirse en un simple contenedor (`<div id="root">`), delegando el renderizado a componentes aislados de JavaScript.

## 2. Mejoras de Diseño (UI/UX)
* **Identidad Visual:** Implementación de un tema oscuro ("Modo Dark") por defecto, utilizando un fondo carbón elegante y contrastes claros para reducir la fatiga visual.
* **Categorización Semántica:** Se creó un sistema de etiquetas de colores (verde, amarillo, naranja) gestionadas dinámicamente desde el array de datos, lo que permite al usuario identificar el nivel de presupuesto de un vistazo.
* **Navegación:** Se integró un menú de navegación superior y una sección Hero con "botones de filtro" visuales para mejorar la experiencia de usuario (UX) en la primera carga de la landing page.
* **Responsividad:** Ajustes en los *media queries* para garantizar que la cuadrícula de tarjetas (`grid`) transicione fluidamente a una columna única en dispositivos móviles.
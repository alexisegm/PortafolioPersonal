### Sección 6 – Para ir más allá: Implementación y Aprendizaje (Asignación 04 – CryptoDash)

Como parte de la mejora continua del proyecto CryptoDash y con el objetivo de erradicar los anti-patrones detectados en la auditoría técnica, procedí a implementar de manera práctica la **Propuesta 1 (Prioridad Alta)**, enfocada en la separación de la capa de presentación.

#### Lo que cambié
Removí por completo el nodo contenedor de la malla (`bento-grid`) junto con el bucle `.map()` que renderizaba de forma individual cada tarjeta `<CryptoCard />` desde el componente raíz `CryptoBoard.jsx`. En su lugar, creé un nuevo archivo y componente independiente llamado `CryptoGrid.jsx`. 

Este nuevo componente fue diseñado bajo el enfoque de **Componente Presentacional Puro** (Componente "hijo"), lo que significa que no conoce la procedencia de los datos ni maneja lógica de efectos secundarios, simplemente recibe la propiedad `coins` con el arreglo ya filtrado. Además, apliqué una optimización avanzada envolviendo el componente en la función `memo` de React para evitar re-renderizados innecesarios. Finalmente, en `CryptoBoard.jsx` invoqué el nuevo componente pasando la propiedad correspondiente: `<CryptoGrid coins={filteredCoins} />`.

#### Lo que aprendí en el proceso
Esta implementación práctica me permitió asimilar de forma tangible el patrón de **Componentes Contenedores y Presentacionales**. Pude experimentar cómo el archivo principal `CryptoBoard.jsx` se volvió inmediatamente mucho más limpio, legible y fácil de mantener, reduciendo significativamente su carga visual y estructural al delegar la responsabilidad del renderizado.

Comprendí el verdadero valor del Principio de Responsabilidad Única: si el día de mañana decido transformar la cuadrícula en una lista o tabla, sé exactamente que solo debo modificar `CryptoGrid.jsx` sin temor a romper la lógica de búsqueda o el consumo de la API en el componente padre. Asimismo, aprendí la importancia de la optimización con `React.memo`, entendiendo que al aislar componentes de presentación, protegemos a la aplicación de cálculos innecesarios en la interfaz gráfica, mejorando la fluidez del entorno de desarrollo.
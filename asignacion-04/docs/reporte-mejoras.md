# Reporte de Mejoras e Iteraciones

> **Nota del Desarrollo:** Este reporte documenta exclusivamente el estado y los logros técnicos alcanzados en el **despliegue inicial (MVP)** de CryptoDash. Posteriormente, tras nuevas auditorías y monitoreo en dispositivos físicos, se realizarán iteraciones y refactorizaciones que se actualizarán en este mismo documento.

## 1. Transición Estructural y Lógica
* **Salto al Ecosistema Asíncrono:** La aplicación superó la barrera de los datos estáticos (arrays predefinidos locales) migrando al consumo de datos dinámicos mediante `fetch` directamente desde la API RESTful de CoinGecko.
* **Separación de Responsabilidades (Smart/Dumb):** El contenedor principal (`CryptoBoard`) se estructuró como el único "cerebro" encargado de pedir información, evaluar errores y mutar el estado de red. La lógica visual recayó integralmente y de manera aislada sobre sus hijos (`CryptoCard`, `CryptoHeader`).

## 2. Mejoras de Diseño (UI/UX) - Despliegue Inicial
* **Arquitectura Visual Híbrida ("Cyber-Bento"):** Tras evaluar deficiencias de contraste en hardware simulado, se ajustó el esquema visual a una estructura de superficies sólidas de alto contraste (fondo oscuro puro / blanco limpio) manteniendo sutiles contornos de cristal.
* **Jerarquía de Pantalla:** Implementación de una "Hero Card" destacada asimétricamente para la moneda líder (Bitcoin), atrayendo automáticamente la vista.
* **Ambient Glow Adaptativo:** Se diseñó un resplandor atmosférico de luces virtuales (Cian/Magenta) que baña fluidamente la pantalla, ajustando sus métricas (`vw` frente a píxeles fijos) para no sobrecargar los navegadores móviles y mantener coherencia visual.
* **Micro-interacciones Inmersivas:** Creación de animaciones inmersivas en estados vacíos (Skeleton Screens *pulse*) y un interruptor funcional interactivo que muta de aspecto cromático y posicional entre estados (Modo Claro/Modo Oscuro).

## 3. Iteraciones Post-Despliegue (Fase 9)
* **Buscador Dinámico:** Se implementó una barra de búsqueda reactiva (estado `searchTerm`) que filtra el renderizado de la cuadrícula en tiempo real.
* **Datos Estructurales Extendidos:** Se expandió el consumo de la API inyectando los valores de Precio Máximo y Mínimo (Rango de 24h) en cada tarjeta para mayor profundidad analítica.
* **Optimización de Renderizado (React.memo):** Se refactorizó el componente `CryptoCard` encapsulándolo en `memo()` para evitar re-renderizados innecesarios, eliminando cuellos de botella en la GPU durante la transición de temas.
* **Refinamiento UI/UX y Responsividad:** * Reestructuración del layout móvil mediante el reseteo del modelo de caja (`box-sizing: border-box`) para evitar desbordamientos laterales de Flexbox.
  * Inyección de favicon semántico (`📈`) directamente vía SVG para evitar dependencias de archivos estáticos.
  * Inclusión de un `CryptoFooter` descriptivo anclado dinámicamente al límite inferior del DOM.
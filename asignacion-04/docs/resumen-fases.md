# Resumen de Fases (Oleadas de Desarrollo)

El proyecto CryptoDash fue estructurado, ejecutado y auditado siguiendo una arquitectura de control progresivo segmentada en 9 fases operativas:

* **Fase 1: Configuración de Entorno e Instalación.**
  Inicialización limpia de Vite + React. Limpieza de código por defecto (*boilerplate*) y configuración de los componentes raíz.
* **Fase 2: Consumo Asíncrono de APIs (Fetch).**
  Declaración del hook `useEffect` en el contenedor padre, consumo exitoso de la API de CoinGecko y volcado de datos crudos (`<pre>`) en pantalla como validación inicial.
* **Fase 3: Control y Gestión de Estados.**
  Implementación estricta de variables de estado (`useState`) para el manejo independiente de los flujos de red: `loading`, `error` y data exitosa.
* **Fase 4: Modularización y Jerarquía de Componentes.**
  Estructuración de la arquitectura "Padre/Hijo" aislando los componentes presentacionales (Dumb) del gestor inteligente (Smart).
* **Fase 5: Inyección de Datos y Renderizado de Listas.**
  Generación del componente dinámico `CryptoCard` y el renderizado iterativo mediante `.map()`, incluyendo directivas `key` unívocas.
* **Fase 6: UI, Maquetación y Estilos (Cyber-Bento).**
  Declaración de variables globales (`:root`), inyección paramétrica del *Ambient Glow*, creación de layouts asimétricos y programación de alternancia de tema Claro/Oscuro mediante un switch funcional.
* **Fase 7: Auditoría Técnica y Limpieza.**
  Aseguramiento de la integridad del software: simulación de roturas de red (pruebas de estrés), supresión de warnings, y limpieza profunda del código sobrante en el montaje base.
* **Fase 8: Integración, Empaquetado y Despliegue.**
  Configuración en `vite.config.js` (`base: './'`), ejecución de proceso de construcción (`build`), y conexión final a la web mediante rutas relativas hacia el Portafolio Global.
* **Fase 9: Iteraciones, Mejoras y Posterior Implementación.**
  Fase activa para evaluación post-despliegue en dispositivos físicos (resolución de cuellos de botella en renderizado de GPU) y planeamiento de futuras expansiones de la interfaz (footer semántico, controles tipográficos actualizados y nuevas utilidades operativas).
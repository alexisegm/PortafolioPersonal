# Planificación y Uso de IA Generativa

En la concepción, desarrollo y auditoría técnica de CryptoDash, se integró activamente el soporte de IA Generativa como arquitecto estructural y revisor, asumiendo el desarrollador el rol de líder técnico con capacidad de toma de decisiones, ajuste y refinamiento arquitectónico.

## 1. Casos de Uso Específicos
* **Asistencia en Asincronía:** Soporte técnico y ejemplos de estructura para el manejo óptimo de `fetch` y Promesas dentro del hook `useEffect` en React.
* **Diseño del Sistema de Estados:** Propuesta para aislar los flujos de "Happy Path", "Loading" (Skeleton Screen) y "Error", logrando que la interfaz no sufra rupturas por la espera de red.
* **Optimización Visual (Glassmorphism & Neumorphism):** Generación de reglas CSS complejas de sombreado y difuminado (Ambient Glow) a través de los seudoelementos `::before` y `::after`.
* **Solución de Conflictos de Rendimiento (GPU):** Diagnóstico y refactorización guiada para reducir la carga de renderizado del Glassmorphism nativo y transicionar a un diseño "Híbrido de Superficies Sólidas" sin sacrificar el estilo Cyber-Bento.
* **Configuración del Despliegue (Build):** Guía exacta para la configuración de la ruta estática (`base: './'`) en `vite.config.js` y adaptación de rutas relativas dentro de los archivos `index.html`.

## 2. Decisiones Humanas (No delegadas)
* **Revisión de Accesibilidad y Contraste:** Decisiones críticas de abandonar un efecto Glassmorphism puro para favorecer fondos sólidos limpios, exigiendo a la IA refactorizar en base a directrices manuales de contraste y jerarquía de color.
* **Arquitectura del Interruptor de Tema (Switch):** Exigencia estricta para descartar un botón estándar a favor de un interruptor ovalado ("Thumb switch") para emular el comportamiento logrado en proyectos anteriores como la Bitácora de Entrenamiento.
* **Pruebas de Estrés en Dispositivos:** Identificación de las debilidades del CSS original en pantallas estrechas (Móviles) y solicitud de correcciones asimétricas (`padding` responsivo y reescalado absoluto de luces ambientales).
* **Aprobación Final de Código (Auditoría Técnica):** Detención del proceso de commit en vivo hasta garantizar *Zero Warnings* en la consola del navegador y limpiar remanentes innecesarios del código fuente (e.g., comentarios sobrantes en `App.jsx`).
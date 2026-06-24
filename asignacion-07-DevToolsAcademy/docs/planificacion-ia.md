# Planificación y Uso de IA Generativa

Durante la concepción y desarrollo de DevTools Academy, se implementó un flujo de trabajo asistido por IA Generativa. El desarrollador asumió el rol de arquitecto y líder técnico, delegando la generación de estructuras repetitivas a la IA, mientras mantenía el control absoluto sobre las decisiones de arquitectura de software y prevención de anti-patrones.

## 1. Casos de Uso Específicos (Delegados)
* **Resolución de Dependencias:** Soporte técnico para la integración y configuración inicial del nuevo puente `@tailwindcss/postcss` requerido por Tailwind CSS v4 en entornos Vite.
* **Estructuración de Estado Global:** Generación del esqueleto base para el `DevToolsContext`, asegurando la correcta implementación de `createContext` y el *Custom Hook* de consumo.
* **Maquetación Rápida (Tailwind):** Generación de las clases de utilidad para componentes visuales estándar (como los *spinners* de carga y la distribución en grilla de las características).
* **Población de Datos Estáticos:** Redacción del contenido didáctico (descripciones, consejos pro y listas de características) para el archivo `devtoolsData.js`.

## 2. Decisiones Humanas (No delegadas)
* **Definición de la Estructura de Directorios:** Exigencia estricta de una arquitectura modular separando `layout`, `ui`, `features`, `hooks` y `context` para asegurar escalabilidad.
* **Prevención del "God Component":** Decisión arquitectónica de fragmentar la interfaz en `Sidebar` y `ToolDetail`, impidiendo que `App.jsx` concentrara responsabilidades de renderizado.
* **Implementación de Componentes Defensivos:** Diseño conceptual y exigencia de integrar un componente `FallbackImage` y un botón de inhabilitación (`DisableButton`) para cumplir con estándares de experiencia de usuario (UX).
* **Control de Efectos:** Auditoría del código para garantizar que los ciclos de vida (`useEffect`) estuvieran atados a dependencias estrictas, evitando el anti-patrón de *uncontrolled effects*.
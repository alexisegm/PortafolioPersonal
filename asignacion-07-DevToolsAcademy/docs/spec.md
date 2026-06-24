# Especificaciones Técnicas (Spec) - DevTools Academy

## 1. Descripción General
DevTools Academy es una plataforma interactiva y didáctica de escritorio diseñada para documentar y enseñar el uso de las herramientas de desarrollador de los navegadores web (DevTools). Su objetivo es proporcionar un entorno de aprendizaje estructurado donde los usuarios puedan explorar las 9 pestañas fundamentales (Elements, Console, Sources, Network, Memory, Application, Security, Lighthouse y Recorder) a través de una interfaz fluida, tolerante a fallos y con persistencia de estado.

## 2. Stack Tecnológico
* **Entorno de Desarrollo:** Node.js + Vite.
* **Librería Core:** React (v18+).
* **Estilos:** Tailwind CSS (v4) configurado mediante PostCSS, con enfoque en clases utilitarias para un diseño limpio y moderno.
* **Gestión de Estado:** React Context API (para evitar el *Prop Drilling*).
* **Almacenamiento:** LocalStorage nativo gestionado a través de un Custom Hook seguro.

## 3. Arquitectura y Estructura Modular
La aplicación implementa un patrón estricto de separación de responsabilidades (*Separation of Concerns*) para erradicar anti-patrones como el *God Component*:
* **`MainLayout` (Contenedor Estructural):** Define la distribución espacial bidimensional (Sidebar lateral y Workspace central) sin involucrarse en la lógica de datos.
* **`DevToolsContext` (Nube de Estado):** Proveedor global que orquesta la información estática (`devtoolsData.js`) y el estado dinámico del tab activo.
* **`ToolDetail` (Componente Orquestador):** Evalúa el estado actual y decide qué vista renderizar, delegando la carga visual a componentes UI aislados.
* **Componentes UI (Reutilizables):** Elementos puros y modulares (`LoadingState`, `EmptyState`, `ErrorMessage`, `FallbackImage`, `DisableButton`) que estandarizan el comportamiento de la interfaz ante distintos escenarios.

## 4. Requerimientos de Funcionalidad
* **Gestión de Fallos (Defensive Programming):** Uso de *Optional Chaining* y renderizado condicional para evitar caídas si la estructura de datos es incompleta.
* **Persistencia Segura:** Implementación de `useSafeLocalStorage` que envuelve las llamadas a la memoria del navegador en bloques `try/catch` para prevenir bloqueos por políticas de privacidad del usuario.
* **Manejo de Excepciones Visuales:** Simulación de latencia y fallos de red (ej. en la pestaña Security) para demostrar capacidades de recuperación a través de un `RetryButton`.
* **Carga Segura de Assets:** Sustitución automática de enlaces rotos mediante la intercepción del evento `onError` en el componente `FallbackImage`.
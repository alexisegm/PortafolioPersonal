# Especificaciones Técnicas (Spec) - CryptoDash

## 1. Descripción General
CryptoDash es un dashboard financiero dinámico desarrollado bajo una arquitectura orientada a componentes. Su función principal es consultar, organizar y renderizar el top de criptoactivos del mercado mediante consumo de red asíncrono, presentado a través de una interfaz táctil, reactiva y visualmente moderna (estética híbrida "Cyber-Bento").

## 2. Stack Tecnológico
* **Entorno de Desarrollo:** Node.js + Vite (Empaquetado ultrarrápido).
* **Librería Core:** React (v18+).
* **Fuentes de Datos:** CoinGecko API (API RESTful pública para datos del mercado cripto).
* **Estilos:** CSS3 nativo enfocado en variables CSS (Custom Properties), efectos de GPU (Backdrop filter/Blur) y Media Queries estructurados (Mobile-First).
* **Despliegue:** GitHub Pages (con control de rutas relativas desde el directorio `/dist`).

## 3. Arquitectura y Estructura
La aplicación implementa el patrón de "Contenedor/Presentación" (Smart/Dumb components) aislando lógicas de estado y de renderizado visual:
* **`CryptoBoard` (Smart Component/Padre):** Único componente responsable del ciclo de vida, la solicitud de red (Fetch) y la manipulación de estados principales (`loading`, `error`, `coins`). Delega la renderización pura a sus hijos.
* **`CryptoHeader` (Dumb Component/Hijo):** Módulo presentacional que recibe parámetros (props) para gestionar exclusivamente el estado del tema y alojar el interruptor táctil (Switch) sin tocar lógica financiera.
* **`CryptoCard` (Dumb Component/Hijo):** Plantilla de diseño (Tarjeta híbrida) que hereda datos financieros individuales para pintarlos en el DOM.

## 4. Requerimientos de Funcionalidad
* **Manejo de asincronía:** Uso estricto de `useEffect` para el disparo de peticiones y prevención de bucles infinitos en el montaje del componente.
* **Rutas de renderizado condicional:** Control explícito de la UI para estados asíncronos (`if (loading)`, `if (error)`).
* **Renderizado de listas:** Uso iterativo del método `.map()` inyectando props únicas (`key`) para preservar el Virtual DOM.
* **Manejo de Tema Global:** Interpolación de clases lógicas atadas a estados React que permutan variables en el `:root` CSS, generando transiciones de Modo Claro a Oscuro instantáneamente.
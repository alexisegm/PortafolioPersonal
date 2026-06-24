# 🎓 DevTools Academy

Bienvenido a **DevTools Academy**, una plataforma interactiva diseñada para transformar la manera en que los desarrolladores junior y estudiantes de programación interactúan con su navegador. 

Entender las herramientas de desarrollador (DevTools) es el salto definitivo entre escribir código a ciegas y tener control total sobre el comportamiento de una aplicación web. Este proyecto documenta y simula el entorno de las 9 herramientas fundamentales (Elements, Console, Network, Memory, etc.) en un espacio amigable, didáctico y a prueba de errores.

## 🎯 Propósito del Proyecto
* **Educativo:** Proporcionar "Consejos Pro", resúmenes y listas de características clave para cada herramienta del navegador.
* **Interactivo:** Experimentar con estados de carga, fallos de red simulados y componentes resilientes de una forma segura.
* **Arquitectónico:** Servir como caso de estudio práctico (asignación académica) sobre cómo estructurar una aplicación React moderna aplicando buenas prácticas de la industria.

## 🚀 Tecnologías Utilizadas
* **React 18** (Vite).
* **Tailwind CSS v4** (PostCSS).
* **React Context** (Gestión de estado global).

## 🏗️ Arquitectura y Buenas Prácticas Aplicadas
Esta aplicación fue construida bajo la premisa de limitar la presencia de anti-patrones desde el día cero:
* **Modularidad Extrema:** Separación estricta de lógicas (*Separation of Concerns*) evitando los temidos *God Components* y el *Misplaced State*.
* **Zero Prop Drilling:** Uso estratégico del Contexto para compartir la información de la lección activa sin pasar *props* por múltiples niveles.
* **Convenciones Profesionales de UI:**
  * ⏳ **LoadingState:** Feedback visual durante transiciones.
  * 📭 **EmptyState:** Manejo de datos ausentes.
  * ⚠️ **ErrorMessage & RetryButton:** Recuperación ante simulaciones de fallos (ej. en la pestaña Security).
  * 🖼️ **Fallback Image:** Auto-recuperación ante enlaces multimedia rotos para proteger la maquetación.
  * 🚫 **Disable Button:** Prevención de acciones concurrentes.
  * 💾 **Safe LocalStorage:** Custom hook que recuerda tu última lección, blindado contra políticas de privacidad restrictivas.

## 🛠️ Instrucciones de Ejecución
1. Clonar el repositorio y navegar al directorio del proyecto.
2. Instalar dependencias:
   ```bash
   npm install
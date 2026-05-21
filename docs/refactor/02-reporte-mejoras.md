# Reporte de Mejoras (Bitácora de Entrenamiento)

**Metadatos**
- Repositorio: Proyecto DWF
- Equipo / autor: Alexis González - Xamuel Romero
- Fecha: 20 de mayo de 2026
- Patrón detectado: Patrón A (Monolito en app.js con estado global mutable)

**Resumen ejecutivo**
El proyecto de la bitácora es completamente funcional y cumple los objetivos de la Fase 2 (renderizado, temporizador, modo oscuro). Sin embargo, el archivo `app.js` concentra la configuración, el estado y la manipulación del DOM en un solo bloque. Es necesario refactorizar mediante módulos ES para proteger los datos y facilitar la futura migración a React, aislando primero los datos estáticos del renderizado de la UI.

**Problemas por severidad**

| Severidad | Problema | Ubicación | Impacto |
| :--- | :--- | :--- | :--- |
| Alta | Mezcla de responsabilidades (Estado + DOM + APIs de navegador) dentro de los escuchadores de eventos. | `app.js` (Listeners de `btn-timer` y `btn-reset`) | Alto riesgo de romper la UI al querer modificar la lógica de los tiempos de descanso. |
| Media | Variables globales mutables (`weeklyRoutine`, `timerInterval`) expuestas a cualquier función. | `app.js` (Ámbito global) | Dificultad para rastrear qué bloque de código cambia el estado de los ejercicios. |
| Baja | Archivo único extenso que dificulta la lectura y la separación mental de capas. | `app.js` | Curva de dificultad mayor para integrar nuevas "features" (como guardar datos). |

**Quick wins**
1. Extraer `WEEKLY_GOAL` y la estructura base de `weeklyRoutine` a un archivo de configuración.
2. Aislar la matemática del temporizador (`timeLeft--`) de las actualizaciones del DOM (`timerDisplay.textContent`).
3. Agrupar las funciones puras de actualización de progreso.

**Puntos críticos (usabilidad → refactor)**

| Prioridad | Mejora de producto que quiero | Qué hay que ordenar en código primero |
| :--- | :--- | :--- |
| Must | Mantener la bitácora estable y funcional sin perder características de la Fase 2. | Separar los datos estáticos de las funciones operativas en `app.js`. |
| Should | Preparar el terreno para la Fase 3 (Migración a React). | Implementar Vite o ES Modules (`<script type="module">`). |
| Could | Temporizadores dinámicos por tipo de ejercicio. | Desacoplar la lógica matemática del evento click del botón de descanso. |

**Deuda que puede esperar**
- Implementación de `localStorage` o base de datos real (por ahora usaremos mock modules).
- Refactorización de las clases CSS hacia un sistema estricto de Design Tokens.

**Próximo paso**
Ver plan de acción para extracción de Configuración y Datos Mock.
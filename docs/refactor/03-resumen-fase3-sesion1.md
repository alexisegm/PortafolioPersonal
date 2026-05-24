# Resumen de Cambios: Fase 3 (Sesión 1)

## Paso 1: Habilitación de ES Modules
- Se añadió el atributo `type="module"` a la etiqueta del script principal.
- El HTML ahora delegará la resolución de dependencias (futuros imports) al navegador o a Vite.
- El código dentro de `app.js` se ejecutará automáticamente en "modo estricto" (strict mode).
- No se tocó ninguna lógica de JavaScript en este paso.

## Oleada 1: Extracción de Datos
**Paso 2:**
- Se creó de manera aislada la estructura de directorios `src/config/`.
- Se encapsularon los datos estáticos (`WEEKLY_GOAL`) y el modelo mock (`weeklyRoutine`) usando la instrucción `export`.
- Se removió la declaración de datos del archivo central de lógica (`app.js`).

**Paso 3:**
- Se estableció una línea de importación explícita al inicio de la aplicación.
- Los datos mock ahora entran a `app.js` a través de un canal controlado y modularizado, respetando la separación de la capa de Configuración.
- No se modificó ninguna de las funciones de renderizado ni los escuchadores de eventos inferiores.

## Oleada 2: Temporizador de Descanso
- Se creó el módulo `src/domain/timer.js` para aislar la lógica matemática de la cuenta regresiva (`setInterval` y decremento de segundos).
- Se eliminó la variable global mutable `timerInterval` del archivo principal `app.js`.
- Se reestructuró el evento del botón `btn-timer` en `app.js` para actuar únicamente como UI/Controller.
- Se delegó el conteo al dominio mediante *callbacks* (`onTick` y `onComplete`).
- Se aislaron los efectos secundarios, manteniendo la manipulación directa del DOM, la API de voz y las alertas en la capa de la interfaz.

## Oleada 3: Centralización del Estado
- Se creó el módulo de dominio puro `src/domain/progress.js` encargado exclusivamente de gestionar la lógica de negocios sobre los datos (mutaciones del estado de los ejercicios).
- Se exportaron las funciones `toggleExerciseCompletion` y `resetAllProgress` para aislar las reglas lógicas.
- Se importó el nuevo módulo en `app.js`.
- Se eliminó el código de iteración y alteración directa del arreglo de datos que residía en los listeners de los checkboxes y del botón de reset.
- `app.js` ahora delega la mutación de los datos a `progress.js`, limitando su propia responsabilidad a escuchar eventos de interacción y reflejar (renderizar) de vuelta a la pantalla los cambios aplicados en el dominio.
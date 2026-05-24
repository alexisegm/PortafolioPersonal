# 🏋️‍♂️ Bitácora de Entrenamiento - PRO

Aplicación web frontend interactiva para el registro, seguimiento y control de rutinas de acondicionamiento físico semanal. Actualmente en **Fase 3 (Refactorización)**, evolucionando de un monolito hacia una arquitectura limpia en 3 capas (Configuración, Dominio y UI) utilizando ES Modules nativos.

## 👥 Integrantes
* **Xamuel Romero**
* **Alexis González**

## 🚀 Características Principales
* **Arquitectura Modular (Nuevo):** Separación estricta de responsabilidades mediante ES Modules (`<script type="module">`). Los datos estáticos, la lógica del temporizador y el estado de la aplicación ahora residen en módulos independientes.
* **Estructura Semanal Expandida:** Rutina organizada de Lunes a Sábado.
* **Control de Progreso Individual:** Contador dinámico por día que registra los ejercicios completados en tiempo real, gestionado por un módulo de dominio puro.
* **Panel de Resumen Semanal:** Barra de progreso global interactiva que calcula el porcentaje de avance de toda la semana.
* **Controles Globales:** * Botón de reinicio completo de la semana con confirmación de seguridad y flujo unidireccional de datos.
  * Temporizador de descanso de 45 segundos con alertas visuales, asistencia por voz (Text-to-Speech) y lógica matemática desacoplada de la interfaz.
* **Diseño e Interfaz Avanzada:** * Menú lateral de navegación tipo sándwich (*Sidebar*) con desplazamiento suave (*smooth scrolling*).
  * Selector de tema (*Toggle Switch*) con soporte completo para **Modo Oscuro (Dark Mode)**.
  * Diseño 100% responsivo adaptable a dispositivos móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura semántica, maquetación de componentes e importación nativa de módulos JS.
* **CSS3:** Diseño de cuadrícula responsivo (CSS Grid, Flexbox), animaciones y variables dinámicas para la gestión de temas.
* **JavaScript (ES Modules):** Modularización del código, arquitectura basada en capas, encapsulamiento del estado, manipulación del DOM y API nativa de síntesis de voz.

## 📋 Instrucciones para Ampliar la Plantilla Semanal
El proyecto ha sido refactorizado aislando por completo la capa de datos y configuración. Si se desea agregar nuevos días de entrenamiento, modificar las repeticiones o cambiar las rutas de los videos demostrativos, el proceso se realiza **exclusivamente** en el módulo de configuración:

1. Abra el archivo `src/config/data.js`.
2. Ubique el arreglo principal exportado denominado `weeklyRoutine`.
3. Para añadir un nuevo día, inserte un nuevo objeto dentro del arreglo respetando la siguiente estructura técnica:

```javascript
{
    id: 7, // Identificador único secuencial del día
    name: "Domingo - Descanso Activo", // Nombre visible en la cabecera de la tarjeta
    exercises: [
        { 
            id: 701, // ID único para el ejercicio (Convención: ID_DIA + Secuencial)
            name: "Estiramientos Flexibilidad", 
            details: "20 minutos de movilidad", 
            completed: false, // Debe iniciar obligatoriamente en false
            videoUrl: "URL_DE_GOOGLE_DRIVE" // Opcional (si se omite, el enlace no se renderiza)
        }
    ]
}
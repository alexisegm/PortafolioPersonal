import { WEEKLY_GOAL, weeklyRoutine } from './src/config/data.js';
import { startCountdown } from './src/domain/timer.js';
import { toggleExerciseCompletion, resetAllProgress, calculateWeeklyProgress } from './src/domain/progress.js';
import { createDayCardHTML, updateWeeklySummaryUI } from './src/ui/components.js';
import { initLayout } from './src/ui/layout.js';

/* =========================================
   [JS-2 y JS-5] RENDERIZADO Y RESUMEN SEMANAL
   ========================================= */
const appContainer = document.getElementById('app-container');

function updateWeeklySummary() {
    // 1. Calculamos los datos en el dominio
    const stats = calculateWeeklyProgress(weeklyRoutine);
    // 2. Pintamos los datos en la UI
    updateWeeklySummaryUI(stats, WEEKLY_GOAL);
}

function renderApp() {
    // Renderizado declarativo: Mapeamos los datos directamente a componentes visuales
    appContainer.innerHTML = weeklyRoutine.map(day => createDayCardHTML(day)).join('');
    updateWeeklySummary();
}

/* =========================================
   INICIALIZACIÓN DE INTERFAZ SECUNDARIA
   ========================================= */
// Ejecutamos los listeners del Modo Oscuro y Menú Lateral
initLayout();

/* =========================================
   EVENTOS PRINCIPALES (Checkboxes, Reset, Timer)
   ========================================= */

appContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('exercise-checkbox')) {
        const checkbox = event.target;
        const exerciseItem = checkbox.closest('.exercise-item');
        const dayCard = checkbox.closest('.day-card');
        
        const exerciseId = parseInt(exerciseItem.dataset.exerciseId);
        const dayId = parseInt(dayCard.dataset.dayId);

        // Delegamos la mutación del estado al dominio
        toggleExerciseCompletion(weeklyRoutine, dayId, exerciseId, checkbox.checked);

        // Actualización puramente visual (UI)
        exerciseItem.classList.toggle('is-completed', checkbox.checked);
        
        // Leemos el estado del dominio para actualizar el texto local
        const day = weeklyRoutine.find(d => d.id === dayId);
        const newCompletedCount = day.exercises.filter(ex => ex.completed).length;
        dayCard.querySelector('.day-progress').textContent = `${newCompletedCount} de ${day.exercises.length} completados`;

        updateWeeklySummary();
    }
});

document.getElementById('btn-reset').addEventListener('click', () => {
    const confirmar = confirm("¿Estás seguro de que quieres reiniciar todos tus progresos de esta semana?");
    if (confirmar) {
        // Delegamos la limpieza del estado al dominio
        resetAllProgress(weeklyRoutine);
        renderApp(); 
    }
});

document.getElementById('btn-timer').addEventListener('click', (event) => {
    const btnTimer = event.target;
    const timerDisplay = document.getElementById('timer-display');
    const duration = 45; 

    btnTimer.disabled = true;

    startCountdown(
        duration,
        (timeLeft) => {
            timerDisplay.textContent = `⏳ ${timeLeft}s`;
        },
        () => {
            timerDisplay.textContent = "";
            btnTimer.disabled = false;
            
            const speech = new SpeechSynthesisUtterance("Tiempo de descanso finalizado. ¡A darle!");
            window.speechSynthesis.speak(speech);
            
            alert("¡Tiempo de descanso finalizado! Prepárate para la siguiente serie.");
        }
    );
});

// Inicializamos la aplicación
renderApp();
import { WEEKLY_GOAL, weeklyRoutine } from './src/config/data.js';
import { startCountdown } from './src/domain/timer.js';

/* =========================================
   [JS-2 y JS-5] RENDERIZADO Y RESUMEN SEMANAL
   ========================================= */
const appContainer = document.getElementById('app-container');

function updateWeeklySummary() {
    let totalExercises = 0;
    let completedExercises = 0;

    weeklyRoutine.forEach(day => {
        totalExercises += day.exercises.length;
        completedExercises += day.exercises.filter(ex => ex.completed).length;
    });

    document.getElementById('weekly-progress-text').textContent = `${completedExercises} de ${totalExercises} ejercicios completados`;
    
    const percentage = totalExercises === 0 ? 0 : (completedExercises / totalExercises) * 100;
    document.getElementById('weekly-progress-bar').style.width = `${percentage}%`;

    const achievementMessage = document.getElementById('achievement-message');
    if (completedExercises >= WEEKLY_GOAL) {
        achievementMessage.classList.remove('hidden');
    } else {
        achievementMessage.classList.add('hidden');
    }
}

function renderApp() {
    appContainer.innerHTML = '';

    weeklyRoutine.forEach(day => {
        const completedCount = day.exercises.filter(ex => ex.completed).length;
        
        const dayCard = document.createElement('section');
        dayCard.className = 'day-card';
        // Agregamos id para que el menú de navegación funcione
        dayCard.id = `day-${day.id}`;
        dayCard.dataset.dayId = day.id;

        dayCard.innerHTML = `
            <header class="day-card-header">
                <h2 class="day-title">${day.name}</h2>
                <p class="day-progress">${completedCount} de ${day.exercises.length} completados</p>
            </header>
            <ul class="exercise-list">
                ${day.exercises.map(exercise => {
                    // Condicional para renderizar el enlace solo si existe videoUrl
                    const videoLinkHTML = exercise.videoUrl 
                        ? `<a href="${exercise.videoUrl}" target="_blank" class="video-link">🎥 ¿Cómo realizar este ejercicio?</a>` 
                        : '';

                    return `
                    <li class="exercise-item ${exercise.completed ? 'is-completed' : ''}" data-exercise-id="${exercise.id}">
                        <input type="checkbox" id="ex-${exercise.id}" class="exercise-checkbox" ${exercise.completed ? 'checked' : ''}>
                        <label for="ex-${exercise.id}" class="exercise-label">
                            <span class="exercise-name">${exercise.name}</span>
                            <span class="exercise-details">${exercise.details}</span>
                            ${videoLinkHTML}
                        </label>
                    </li>
                    `;
                }).join('')}
            </ul>
        `;
        appContainer.appendChild(dayCard);
    });

    updateWeeklySummary();
}

/* =========================================
   [NUEVO] LÓGICA DEL MENÚ LATERAL Y MODO OSCURO
   ========================================= */

// Modo Oscuro
const themeCheckbox = document.getElementById('theme-checkbox');
themeCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Menú Lateral (Sidebar)
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

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

        const day = weeklyRoutine.find(d => d.id === dayId);
        const exercise = day.exercises.find(ex => ex.id === exerciseId);
        exercise.completed = checkbox.checked;

        exerciseItem.classList.toggle('is-completed', exercise.completed);
        
        const newCompletedCount = day.exercises.filter(ex => ex.completed).length;
        dayCard.querySelector('.day-progress').textContent = `${newCompletedCount} de ${day.exercises.length} completados`;

        updateWeeklySummary();
    }
});

document.getElementById('btn-reset').addEventListener('click', () => {
    const confirmar = confirm("¿Estás seguro de que quieres reiniciar todos tus progresos de esta semana?");
    if (confirmar) {
        weeklyRoutine.forEach(day => {
            day.exercises.forEach(ex => ex.completed = false);
        });
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
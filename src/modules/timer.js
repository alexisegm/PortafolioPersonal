// src/modules/timer.js

export function initTimer() {
    const btnTimer = document.getElementById('btn-timer');
    const timerDisplay = document.getElementById('timer-display');
    let timerInterval;

    // Solo ejecutamos si el botón existe para evitar errores
    if (!btnTimer) return;

    btnTimer.addEventListener('click', (event) => {
        let timeLeft = 45; 

        btnTimer.disabled = true;
        timerDisplay.textContent = `⏳ ${timeLeft}s`;

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `⏳ ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "";
                btnTimer.disabled = false;
                
                const speech = new SpeechSynthesisUtterance("Tiempo de descanso finalizado. ¡A darle!");
                window.speechSynthesis.speak(speech);
                alert("¡Tiempo de descanso finalizado! Prepárate para la siguiente serie.");
            }
        }, 1000);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.getElementById('rain-container');
    const rainSound = document.getElementById('rainSound');
    const rainToggle = document.getElementById('rainToggle');

    // Функция для создания капель дождя
    function createRain() {
        rainContainer.innerHTML = ''; // Очистка капель
        for (let i = 0; i < 100; i++) {
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            raindrop.style.left = `${Math.random() * 100}vw`;
            raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
            raindrop.style.animationDelay = `${Math.random() * 2}s`;
            rainContainer.appendChild(raindrop);
        }
    }

    // Включение/выключение дождя
    rainToggle.addEventListener('change', () => {
        if (rainToggle.checked) {
            rainContainer.style.display = 'block';
            rainSound.play();
            createRain();
        } else {
            rainContainer.style.display = 'none';
            rainSound.pause();
            rainSound.currentTime = 0;
        }
    });
});

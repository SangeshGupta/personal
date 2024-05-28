document.addEventListener('DOMContentLoaded', function () {
    const openCardBtn = document.querySelector('.open-card');
    const closeCardBtn = document.querySelector('.close-card');
    const card = document.querySelector('.card');
    const heartContainer = document.querySelector('.heart-container');

    openCardBtn.addEventListener('click', function() {
        card.classList.add('open');
        startHeartRain();
    });

    closeCardBtn.addEventListener('click', function() {
        card.classList.remove('open');
        stopHeartRain();
    });

    function startHeartRain() {
        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 10 + 's';
            heartContainer.appendChild(heart);
        }
        setTimeout(stopHeartRain, 10000); // Stop heart rain after 5 seconds
    }

    function stopHeartRain() {
        heartContainer.innerHTML = ''; // Remove all hearts
    }
});

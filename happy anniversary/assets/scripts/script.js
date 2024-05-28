const openCardBtn = document.querySelector('.open-card');
const closeCardBtn = document.querySelector('.close-card');
const card = document.querySelector('.card');

openCardBtn.addEventListener('click', function() {
    card.classList.add('open');
});

closeCardBtn.addEventListener('click', function() {
    card.classList.remove('open');
});


document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.querySelector('.open-card');
    const closeButton = document.querySelector('.close-card');
    const heartContainer = document.querySelector('.heart-container');

    openButton.addEventListener('click', function () {
        openCard();
        startHeartRain();
    });

    closeButton.addEventListener('click', function () {
        closeCard();
    });

    function openCard() {
        document.querySelector('.card-cover').style.display = 'none';
        document.querySelector('.card-inner').style.display = 'flex';
    }

    function closeCard() {
        document.querySelector('.card-cover').style.display = 'flex';
        document.querySelector('.card-inner').style.display = 'none';
        stopHeartRain();
    }

    function startHeartRain() {
        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 10 + 's';
            heartContainer.appendChild(heart);
        }
        setTimeout(stopHeartRain, 5000); // Stop heart rain after 5 seconds
    }

    function stopHeartRain() {
        heartContainer.innerHTML = ''; // Remove all hearts
    }
});

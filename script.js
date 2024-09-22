function generateFlower(color) {
    const flowerContainer = document.getElementById('flowerContainer');
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Crear los pétalos
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.backgroundColor = color;
        petal.style.transform = `translate(-50%, -50%) rotate(${i * 60}deg)`;
        flower.appendChild(petal);
    }

    // Crear el centro de la flor con efecto de brillo
    const center = document.createElement('div');
    center.classList.add('center');
    flower.appendChild(center);

    flowerContainer.appendChild(flower);
}

function setDayNightCycle() {
    const date = new Date();
    const hour = date.getHours();
    const sunMoon = document.getElementById('sunMoon');
    const stars = document.getElementById('stars');

    if (hour >= 6 && hour < 18) {
        // Mostrar el sol durante el día
        sunMoon.style.background = 'radial-gradient(circle, #ffeb3b 60%, #f57f17 100%)';
        stars.style.display = 'none';  // Ocultar las estrellas
    } else {
        // Mostrar la luna durante la noche
        sunMoon.style.background = 'radial-gradient(circle, #ffffff 60%, #f3e5ab 100%)';
        stars.style.display = 'block';  // Mostrar las estrellas
    }
}

setDayNightCycle();  // Llamar cuando la página cargue

// Detener otros videos cuando uno se reproduce
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('video');  // Cambia a video para seleccionar etiquetas <video>

    videos.forEach(function (video) {
        video.addEventListener('play', function () {
            videos.forEach(function (otherVideo) {
                if (otherVideo !== video) {
                    otherVideo.pause();  // Pausa otros videos
                }
            });
        });
    });
});



let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    // Ocultar la imagen actual
    slides[currentSlide].style.display = 'none';

    // Calcular la nueva posición
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Mostrar la nueva imagen
    slides[currentSlide].style.display = 'block';
}

// Inicializar el carrusel
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-image');
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none'; // Mostrar solo la primera imagen
    });
});

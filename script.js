let currentSlide = 0;

function nextSlide() {
    const slider = document.querySelector('.hero-slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
}

function prevSlide() {
    const slider = document.querySelector('.hero-slider');

    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
}

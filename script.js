document.addEventListener('DOMContentLoaded', () => {
    // Carrusel principal
    const carousel = document.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    const totalItems = items.length;
    let intervalId;

    function showItem(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextItem() {
        showItem(currentIndex + 1);
    }

    function prevItem() {
        showItem(currentIndex - 1);
    }

    function startAutoSlide() {
        intervalId = setInterval(nextItem, 3000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    prevBtn.addEventListener('click', () => {
        prevItem();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextItem();
        stopAutoSlide();
        startAutoSlide();
    });

    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);


    startAutoSlide();


    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
        console.log('Menú clickeado');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("#phone");

    // Inicializar intl-tel-input
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: "auto", // Detecta el país automáticamente basado en la IP
        preferredCountries: ["us", "mx", "ca"], // Puedes ajustar los países preferidos
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Script adicional para validación
    });

const phoneNumber = iti.getNumber();
if (iti.isValidNumber()) {
    console.log("El número es válido:", phoneNumber);
} else {
    console.log("Número de teléfono no válido");
}

});

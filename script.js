document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 1;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
    //aca pondriamos la logica del menu desplegable
        console.log('Menú clickeado');
    });
});
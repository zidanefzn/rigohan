const testiSwiper = new Swiper('.testi-slider-wrapper', {
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    }
});
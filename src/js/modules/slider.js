
const slider = () => {
    new Swiper('.slider', {
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        initialSlide: 1,
    });
}

export default slider;
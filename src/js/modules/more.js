const more = () => {
    const about = document.querySelectorAll('.more'),
        btn = document.querySelector('.sentence__circle'),
        desc = document.querySelector('#card-mobile'),
        title = document.querySelector('.sentence__title'),
        span = btn.querySelector('.return');

    btn.addEventListener('click', ()=> {

        if (window.innerWidth > 768) {
            span.classList.toggle('more');
            about.forEach(item => {
            item.classList.toggle('more');
        });
    } else {
        span.classList.toggle('more');
        desc.classList.toggle('card');
        title.classList.toggle('card');
        about.forEach(item => {
            item.classList.toggle('more');
        });
    };
    });
}

export default more;
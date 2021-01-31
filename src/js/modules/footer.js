const footer = () => {
    const items = document.querySelectorAll('.footer__item'),
        title = document.querySelectorAll('.footer__title'),
        lists = document.querySelectorAll('.footer__wrapper-list');

            items.forEach((item, i) => {
                item.addEventListener('click', () => {
                    lists[i].classList.toggle('footer__wrapper-list-active');
                    title[i].classList.toggle('footer__title-active');
            });
            
        });
        
}

export default footer;
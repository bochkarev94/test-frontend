const select = () => {
    const selectHeader = document.querySelector('.select__current'),
        selectBody = document.querySelector('.select__body'),
        selectItem = document.querySelectorAll('.select__item');

    selectHeader.addEventListener('click', () => {
        selectBody.classList.toggle('select__body-active');
    });

    selectItem.forEach(item => {
        item.addEventListener('mouseenter', function(){
            let text = this.innerText;
            selectHeader.innerText = text;
        });
    });

    selectItem.forEach(item => {
        item.addEventListener('click', () => {
            selectBody.classList.remove('select__body-active');
        });
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 200) {
            selectBody.classList.remove('select__body-active');
        }
    });
}

export default select;
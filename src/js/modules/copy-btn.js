const copyBtn = (trigger, idSelect, btnSelect) => {
        const mailTrigger = document.querySelector(trigger),
            btn = document.querySelector(btnSelect);

        function copy (idSelect) {
            const textarea = document.createElement('textarea');

            textarea.id = 'temp_element';
            textarea.style.height = 0;
            document.body.appendChild(textarea);
            textarea.value = document.getElementById(idSelect).innerText;

            const selector = document.querySelector('#temp_element');

            selector.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
    };
    
    mailTrigger.addEventListener('click', () => {
        mailTrigger.classList.add('menu__item-active');
        btn.style.display = 'block';
    });
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.header__text-copy').innerText='Текст скопирован в буфер обмена.';

        copy(idSelect);
        setTimeout(() => {
            document.querySelector('.header__text-copy').innerText='';
            mailTrigger.classList.remove('menu__item-active');
            btn.style.display='none';
        }, 1000);
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            mailTrigger.classList.remove('menu__item-active');
            btn.style.display='none';
        }
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 80) {
            mailTrigger.classList.remove('menu__item-active');
            btn.style.display='none';
        }
    });

}
export default copyBtn;
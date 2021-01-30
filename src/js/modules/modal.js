import {showModal, hiddenModal} from './modalOverlay';

const modal = (trigger, overlaySelector, modalSelector, closeSelector) => {
    const btn = document.querySelector(trigger),
        overlay = document.querySelector(overlaySelector),
        modal = document.querySelector(modalSelector),
        inputs = document.querySelectorAll('input'),
        numInput = document.querySelector('[name="phone"]'),
        textInput = document.querySelector('[name="name"]'),
        close = document.querySelector(closeSelector);


    modal.classList.add('animated', 'fadeIn');


    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    textInput.addEventListener('input', () => {
            if (textInput.value.match(/[0-9]/ig)) {
                textInput.value = '';
            }
        });

    numInput.addEventListener('input', () => {
        numInput.value = numInput.value.replace(/\D/, '');
    });

    btn.addEventListener('mouseenter', (e) => {

        e.preventDefault();
        btn.classList.add('menu__item-active');
        showModal(overlay, modal, 'block');
    });

    close.addEventListener('click', () => {
        btn.classList.remove('menu__item-active');
        hiddenModal(overlay, modal);
        clearInputs();
    });
    
    overlay.addEventListener ('click', (e) => {
        if (e.target === overlay) {
            btn.classList.remove('menu__item-active');
            hiddenModal(overlay, modal);
            clearInputs();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            btn.classList.remove('menu__item-active');
            hiddenModal(overlay, modal);
            clearInputs();
        }
    });
}
export default modal;
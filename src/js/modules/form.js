import {hiddenModal} from './modalOverlay';

const formModal = (statusSelector, overlaySelector, modalSelector) => {
    const form = document.querySelectorAll('form'),
        status = document.querySelector(statusSelector),
        overlay = document.querySelector(overlaySelector),
        modal = document.querySelector(modalSelector),
        inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжимся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        status.innerHTML = message.loading;

        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    form.forEach (item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(item);

            postData('server.php', formData)
                .then(res => {
                    console.log(res);
                    status.textContent = message.success;
                })
                .catch(() => status.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        status.textContent = '';
                        hiddenModal(overlay, modal);
                    }, 2000);
                })
        });
    })
        
}

export default formModal;
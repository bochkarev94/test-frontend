import {showModal, hiddenModal} from './modalOverlay';

const modalMenu = (trigger, idSelector, overlaySelector, display) => {

    const btn = document.querySelector(trigger),
        modal = document.querySelector(idSelector),
        overlay = document.querySelector(overlaySelector);

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.menu__outlers').forEach (modal => {
                modal.style.display='none';
            });

            if (overlay.style.display === 'block') {
                hiddenModal(overlay, modal);
            } else {
                showModal(overlay, modal, display);
            }
        });

        overlay.addEventListener ('click', (e) => {
        if (e.target === overlay) {
            hiddenModal(overlay, modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            hiddenModal(overlay, modal);
        }
    });
}

export default modalMenu;
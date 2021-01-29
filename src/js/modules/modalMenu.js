import {showModal, hiddenModal} from './modalOverlay';

const menu = (trigger, idSelector, overlaySelector, display) => {

    const btn = document.querySelector(trigger),
        menu = document.querySelector(idSelector),
        overlay = document.querySelector(overlaySelector);

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.menu__outlers').forEach (menu => {
                menu.style.display='none';
            });

            if (overlay.style.display === 'block') {
                hiddenModal(overlay, menu);
            } else {
                showModal(overlay, menu, display);
            }
        });

        overlay.addEventListener ('click', (e) => {
        if (e.target === overlay) {
            hiddenModal(overlay, menu);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            hiddenModal(overlay, menu);
        }
    });

    
}

export default menu;
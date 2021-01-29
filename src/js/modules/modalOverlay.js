 import calcScroll from './calcScroll';
 
 const showModal = (overlay, modal, display) => {
        overlay.style.display = 'block';
        modal.style.display = display;
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScroll()}px`
    };

    const hiddenModal = (overlay, modal) => {
        overlay.style.display = 'none';
        modal.style.display='none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    };

    export {showModal, hiddenModal}
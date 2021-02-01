
const hamburger = (trigger, idSelector, overlaySelector, closeMenu) => {

    const hamburger = document.querySelector(trigger),
        menu = document.querySelector(idSelector),
        overlay = document.querySelector(overlaySelector),
        close = document.querySelector(closeMenu);

        hamburger.addEventListener('click', () => {
            overlay.style.display = 'block';
            menu.style.marginLeft = `0px`;
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            menu.style.marginLeft = `-500px`;
            document.body.style.overflow = '';
        });
}
export default hamburger;
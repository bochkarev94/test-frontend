import hamburger from './modules/hamburger';
import menu from './modules/menu';
import copyBtn from './modules/copy-btn';
import modal from './modules/modal';
import formModal from './modules/form';
import more from './modules/more';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

hamburger('.header__hamburger', '#header-menu', '.overlay__hamburger', '.menu__close');
menu('[data-menu="short"]', '#short', '.overlay');
menu('[data-menu="long"]', '#long', '.overlay');
copyBtn('[data-mail="copy"]', 'mail', '.btn__copy');
modal('[data-modal="phone"]', '.overlay__modal', '.modal', '.modal__close');
formModal('.modal__status', '.overlay__modal', '.modal');
more();
slider();
})
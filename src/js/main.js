import hamburger from './modules/hamburger';
import modalMenu from './modules/modalMenu';
import copyBtn from './modules/copy-btn';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

hamburger('.header__hamburger', '#header-menu', '.overlay__tp', '.menu__close');
modalMenu('[data-menu="long"]', '#long', '.overlay', 'grid');
modalMenu('[data-menu="short"]', '#short', '.overlay', 'grid');
copyBtn('[data-mail="copy"]', 'mail', '.btn__copy');
})
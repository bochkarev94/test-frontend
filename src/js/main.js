import modalMenu from './modules/modalMenu';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

modalMenu('[data-menu="long"]', '#long', '.overlay', 'grid');
modalMenu('[data-menu="short"]', '#short', '.overlay', 'grid');
})
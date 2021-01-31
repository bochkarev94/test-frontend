const search = (searchSelector, overlaySelector) => {
    const input = document.querySelector('.search__input'),
        overlay = document.querySelector(overlaySelector),
        searchList = document.querySelector(searchSelector);
    const filterList = document.querySelectorAll('.search__drop a');
        
    input.addEventListener('keyup', () => {
        const filterInput = input.value.toLowerCase();

        filterList.forEach(item => {
            if(item.innerHTML.toLowerCase().indexOf(filterInput) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    input.addEventListener('focus', (e) => {
        e.preventDefault();
        searchList.classList.add('search__pos-active');
        overlay.style.display = 'block';
    })

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 80) {
            searchList.classList.remove('search__pos-active');
            overlay.style.display='none';
        }
    });

    overlay.addEventListener ('click', (e) => {
        if (e.target === overlay) {
            searchList.classList.remove('search__pos-active');
            overlay.style.display='none';
        }
    })
}

export default search;
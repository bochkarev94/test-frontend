const bd = () => {

    class SearchDown {
        constructor(title, subtitle) {
            this.title = title;
            this.subtitle = subtitle;
            this.parent = document.querySelector('.search__drop');
        }
        render() {
            const element = document.createElement('a');
            element.innerHTML = `
                ${this.title}<span>${this.subtitle}</span>
            `;
            this.parent.append(element);
        }
    }

    new SearchDown(
        'Посудомоечная машина купольного типа МПК-700К  ',
        'Посудомоечное',
    ).render();
    new SearchDown(
        'Посудомоечная машина купольного типа МПК-800К    ',
        'Посудомоечное',
    ).render();
    new SearchDown(
        'Посудомоечная машина купольного типа МПК-900К  ',
        'Посудомоечное',
    ).render();
    new SearchDown(
        'Посудомоечная машина купольного типа МПК-700К ',
        'Посудомоечное',
    ).render();
    new SearchDown(
        'Посудомоечная машина купольного типа МПК-800К   ',
        'Посудомоечное',
    ).render();
    new SearchDown(
        'Посудомоечная машина купольного типа МПК-900К   ',
        'Посудомоечное',
    ).render();
    new SearchDown(
        'Посудомоечная машина купольного типа МПК-700К  ',
        'Посудомоечное',
    ).render();

    new SearchDown(
        'Морозильная камера типа МПК-700К  ',
        'Холодилньое',
    ).render();
    new SearchDown(
        'Морозильная камера типа МПК-800К    ',
        'Холодилньое',
    ).render();
    new SearchDown(
        'Морозильная камера типа МПК-900К  ',
        'Холодилньое',
    ).render();
    new SearchDown(
        'Морозильная камера типа МПК-700К ',
        'Холодилньое',
    ).render();
    new SearchDown(
        'Морозильная камера типа МПК-800К   ',
        'Холодилньое',
    ).render();
    new SearchDown(
        'Морозильная камера типа МПК-900К   ',
        'Холодилньое',
    ).render();
    new SearchDown(
        'Морозильная камера типа МПК-700К  ',
        'Холодилньое',
    ).render();
};
export default bd;
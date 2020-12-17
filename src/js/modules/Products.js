class Products {
    constructor() {
        this.tabs = document.querySelectorAll('.products__options__unit')
        this.tabContainer = document.querySelector('.products__options');
        this.containers = document.querySelectorAll('.products__container');
    }

    init = () => {
        this
            .tabContainer
            .addEventListener('click', e => {
                // getting the clicked tab
                const clicked = e
                    .target
                    .closest('.products__options__unit');

                if (!clicked) 
                    return;
                
                // remove active modifier from all tabs
                this
                    .tabs
                    .forEach(tab => tab.classList.remove('products__options__unit--active'));

                // add active modifier to the clicked tab
                clicked
                    .classList
                    .add('products__options__unit--active');

                // remove active modifier from all containers
                this
                    .containers
                    .forEach(container => container.classList.remove('products__container--active'));
                console.log(clicked.dataset.tab);

                // add active modifier to the container related to the tab
                document
                    .getElementById(`container--${clicked.dataset.tab}`)
                    .classList
                    .add('products__container--active');
            });
    }

}

export default Products;

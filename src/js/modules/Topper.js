class Topper {
    constructor() {
        this.topper = document.getElementById("topper");
        this.navbar = document.querySelector(".navbar");
    }

    init = () => {
        this
            .topper
            .addEventListener('click', (e) => {
                this.topFunction();
            });
    }

    scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.topper.style.opacity = 1;
        } else {
            this.topper.style.opacity = 0;
        }
    }

    topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

export default Topper;

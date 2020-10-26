class Hamburger {
    constructor(){
        this.hamburgerBtn = document.querySelector(".hamburger");
        this.hamburgerNavbar = document.querySelector(".ham-navbar");
        this.hamburgerExit = document.getElementById("ham-exit");
        this.page = document.querySelector("html");

    }

    addListeners = () => {
        this.hamburgerBtn.addEventListener('click', this.openHamburger);
        this.hamburgerExit.addEventListener('click', this.closeHamburger);
    }

    openHamburger = (e) => {
        this.hamburgerNavbar.classList.add('ham-active');
        this.page.style.overflowY = "hidden";
    }

    closeHamburger = (e) => {
        this.hamburgerNavbar.classList.remove('ham-active');
        this.page.style.overflowY = "scroll";
    }

    init(){
        this.addListeners();
    }
}

export default Hamburger;

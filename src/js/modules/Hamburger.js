class Hamburger {
    constructor(){
        this.hamburgerBtn = document.querySelector(".hamburger");
        this.hamburgerNavbar = document.querySelector(".ham-navbar");
        this.hamburgerExit = document.querySelector(".ham-exit");
        this.page = document.querySelector("html");
        this.links = Array.from(document.querySelectorAll(".ham-navbar__links__link"));
        this.arrows = Array.from(document.querySelectorAll(".arrow-right"));
    }

    addListeners = () => {
        this.hamburgerBtn.addEventListener('click', this.openHamburger);
        this.hamburgerExit.addEventListener('click', this.closeHamburger);
        this.links.forEach(link => {
            link.addEventListener('click', this.openDropdown);
        })
    }

    openHamburger = (e) => {
        this.hamburgerNavbar.classList.add('ham-active');
        this.page.style.overflowY = "hidden";
    }

    closeHamburger = (e) => {
        this.hamburgerNavbar.classList.remove('ham-active');
        this.page.style.overflowY = "scroll";
    }

    openDropdown = (e) => {

        this.links.forEach((link) => {
            if(link == e.target.parentElement){
                link.children[0].firstElementChild.classList.toggle("arrow-right");     
                link.children[0].firstElementChild.classList.toggle("arrow-left");
                link.children[1].classList.toggle("hidden");
            } else if(link == e.target.parentElement.parentElement.parentElement){
                this.hamburgerNavbar.classList.remove('ham-active');
                link.children[0].firstElementChild.classList.toggle("arrow-right");     
                link.children[0].firstElementChild.classList.toggle("arrow-left");
                link.children[1].classList.toggle("hidden");
            } else {
               link.classList.toggle("hidden");
            }
        })

    }

    init(){
        this.addListeners();
    }
}

export default Hamburger;

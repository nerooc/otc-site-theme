class Hamburger {
    constructor(){
        this.hamburgerBtn = document.getElementById("ham");
        this.hamburgerNavbar = document.getElementById("ham-nav");
        this.hamburgerExit = document.getElementById("ham-x");
        this.page = document.querySelector("html");
        this.links = Array.from(document.querySelectorAll(".ham-navbar__links__link"));
        this.arrows = Array.from(document.querySelectorAll(".arrow-right"));
    }

    init = () => {
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

    linkHandle = (element) => {
        element.children[0].firstElementChild.classList.toggle("arrow-right");     
        element.children[0].firstElementChild.classList.toggle("arrow-left");
        element.children[1].classList.toggle("hidden");
    }

    openDropdown = (e) => {

        this.links.forEach((link) => {
            if(link == e.target.parentElement){
                this.linkHandle(link);
            } else if(link == e.target.parentElement.parentElement){
                this.hamburgerNavbar.classList.remove('ham-active');
                this.linkHandle(link);
            } else {
               link.classList.toggle("hidden");
            }
        })

    }
}

export default Hamburger;

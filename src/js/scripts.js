import Slider from "./modules/Slider.js";
import Hamburger from "./modules/Hamburger.js";
import Products from "./modules/Products.js";
import Topper from "./modules/Topper.js";
import "../style.scss";

// Instantiate new objects using our modules/classes
let slider = new Slider();
let hamburger = new Hamburger();
let products = new Products();
let topper = new Topper();

products.init();
hamburger.init();
topper.init();
document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);


window.onscroll = function () {
    topper.scrollFunction();
};

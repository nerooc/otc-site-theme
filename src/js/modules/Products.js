class Products {
    constructor() {
        this.option1 = document.getElementById("op1");
        this.option2 = document.getElementById("op2");
        this.option3 = document.getElementById("op3");

        this.mediatorCont = document.getElementById("containerMediator");
        this.terminalCont = document.getElementById("containerTerminal");
        this.winflectorCont = document.getElementById("containerWinflector");
    }

    init = () => {
        this
            .option1
            .addEventListener("click", this.openOption1)
        this
            .option2
            .addEventListener("click", this.openOption2)
        this
            .option3
            .addEventListener("click", this.openOption3)
    }

    openOption1 = (e) => {
        this
            .option1
            .classList
            .add('active');
        this
            .option2
            .classList
            .remove('active');
        this
            .option3
            .classList
            .remove('active');

        this.mediatorCont.style.display = "flex";
        this.terminalCont.style.display = "none";
        this.winflectorCont.style.display = "none";
    }

    openOption2 = (e) => {
        this
            .option1
            .classList
            .remove('active');
        this
            .option2
            .classList
            .add('active');
        this
            .option3
            .classList
            .remove('active');

        this.mediatorCont.style.display = "none";
        this.terminalCont.style.display = "flex";
        this.winflectorCont.style.display = "none";
    }

    openOption3 = (e) => {
        this
            .option1
            .classList
            .remove('active');
        this
            .option2
            .classList
            .remove('active');
        this
            .option3
            .classList
            .add('active');

        this.mediatorCont.style.display = "none";
        this.terminalCont.style.display = "none";
        this.winflectorCont.style.display = "flex";
    }
}

export default Products;

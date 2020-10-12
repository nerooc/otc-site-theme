var option1 = document.getElementById("op1");
var option2 = document.getElementById("op2");
var option3 = document.getElementById("op3");

var mediatorCont = document.getElementById("containerMediator");
var terminalCont = document.getElementById("containerTerminal");
var winflectorCont = document.getElementById("containerWinflector");


option1.addEventListener("click", function () {
    option1.classList.add('active');
    option2.classList.remove('active');
    option3.classList.remove('active');

    mediatorCont.style.display = "flex";
    terminalCont.style.display = "none";
    winflectorCont.style.display = "none";
});

option2.addEventListener("click", function () {
    option1.classList.remove('active');
    option2.classList.add('active');
    option3.classList.remove('active');

    mediatorCont.style.display = "none";
    terminalCont.style.display = "flex";
    winflectorCont.style.display = "none";
});

option3.addEventListener("click", function () {
    option1.classList.remove('active');
    option2.classList.remove('active');
    option3.classList.add('active');

    mediatorCont.style.display = "none";
    terminalCont.style.display = "none";
    winflectorCont.style.display = "flex";
});

//BACK2TOP BUTTON
b2t = document.querySelector(".back-to-top");


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        b2t.style.opacity = 1;
    } else {
        b2t.style.opacity = 0;
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
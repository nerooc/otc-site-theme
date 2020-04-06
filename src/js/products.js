var option1 = document.getElementById("op1");
var option2 = document.getElementById("op2");
var option3 = document.getElementById("op3");


option1.addEventListener("click", function () {
    option1.classList.add('active');
    option2.classList.remove('active');
    option3.classList.remove('active');
});

option2.addEventListener("click", function () {
    option1.classList.remove('active');
    option2.classList.add('active');
    option3.classList.remove('active');
});

option3.addEventListener("click", function () {
    option1.classList.remove('active');
    option2.classList.remove('active');
    option3.classList.add('active');
});

//BACK2TOP BUTTON
b2t = document.getElementById("b2t");


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
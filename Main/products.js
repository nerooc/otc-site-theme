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
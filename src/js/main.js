$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 3
        },
        600: {
            items: 4
        },
        800: {
            items: 6
        },
        1000: {
            items: 6
        }
    }
});

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click", () => {
    if (a > 0) {
        a--;
        a = (a > 10) ? "" + a : a;
        num.innerText = a;
    }
});

const plus1 = document.querySelector(".plus-1");
const minus1 = document.querySelector(".minus-1");
const num1 = document.querySelector(".num-1");

let a1 = 1;

plus1.addEventListener("click", () => {
    a1++;
    a1 = (a1 < 10) ? "" + a1 : a1;
    num1.innerText = a1;
    console.log(a1);
});

minus1.addEventListener("click", () => {
    if (a1 > 0) {
        a1--;
        a1 = (a1 > 10) ? "" + a1 : a1;
        num1.innerText = a1;
    }
});

const plus2 = document.querySelector(".plus-2");
const minus2 = document.querySelector(".minus-2");
const num2 = document.querySelector(".num-2");

let a2 = 1;

plus2.addEventListener("click", () => {
    a2++;
    a2 = (a2 < 10) ? "" + a2 : a2;
    num2.innerText = a2;
    console.log(a2);
});

minus2.addEventListener("click", () => {
    if (a2 > 0) {
        a2--;
        a2 = (a2 > 10) ? "" + a2 : a2;
        num2.innerText = a2;
    }
});

const plus3 = document.querySelector(".plus-3");
const minus3 = document.querySelector(".minus-3");
const num3 = document.querySelector(".num-3");

let a3 = 1;

plus3.addEventListener("click", () => {
    a3++;
    a3 = (a3 < 10) ? "" + a3 : a3;
    num3.innerText = a3;
    console.log(a3);
});

minus3.addEventListener("click", () => {
    if (a3 > 0) {
        a3--;
        a3 = (a3 > 10) ? "" + a3 : a3;
        num3.innerText = a3;
    }
});

const plus4 = document.querySelector(".plus-4");
const minus4 = document.querySelector(".minus-4");
const num4 = document.querySelector(".num-4");

let a4 = 1;

plus4.addEventListener("click", () => {
    a4++;
    a4 = (a4 < 10) ? "" + a4 : a4;
    num4.innerText = a4;
    console.log(a4);
});

minus4.addEventListener("click", () => {
    if (a4 > 0) {
        a4--;
        a4 = (a4 > 10) ? "" + a4 : a4;
        num4.innerText = a4;
    }
});


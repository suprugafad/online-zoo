let dark = document.querySelector('.dark');

function changeToColour1() {
    dark.classList.toggle('darkness');
}

let box = document.getElementsByClassName('menu__box');

dark.onclick = function() {
    console.log('hide')
    box.style.display = 'none'
}

let items = document.querySelectorAll('.item');
let items2 = document.querySelectorAll('.item2');
let currentItem = 0;
let isEnable = true;
let el = document.querySelectorAll('.next, .card__animal');

console.log(items)

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnable = false;
    items[currentItem].classList.add(direction);
    items2[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
    items2[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items2[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnable = true;
    });
    items2[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnable = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.left').addEventListener('click', function () {
    if (isEnable) {
        previousItem(currentItem);
    }
});

document.querySelector('.right').addEventListener('click', function () {
    if (isEnable) {
        nextItem(currentItem);
    }
});


document.querySelector('.left2').addEventListener('click', function () {
    if (isEnable) {
        previousItem(currentItem);
    }
});

document.querySelector('.right2').addEventListener('click', function () {
    if (isEnable) {
        nextItem(currentItem);
    }
});

// let range = document.querySelector('input[type="range"]');
// let testimonialsItems = document.querySelectorAll('.testimonial__card');
// console.log(testimonialsItems);
// let rangeValueNum = +range.value;
// let isEnabled = true;
//
// function hideCard(direction, i) {
//     isEnabled = false;
//     console.log(i);
//     testimonialsItems[i].classList.add(direction);
//     testimonialsItems[i].addEventListener('animationend', function () {
//         this.classList.remove('active__card', direction);
//     });
// }
//
// function showCard(direction, i) {
//     testimonialsItems[i].classList.add('next__card', direction);
//     testimonialsItems[i].addEventListener('animationend', function () {
//         this.classList.remove('next__card', direction);
//         this.classList.add('active__card');
//         isEnabled = true;
//     });
// }
//
// function previousCard(n) {
//     hideCard('to-right', +n + 3);
//     showCard('from-left', +n - 1);
// }
//
// function nextCard(n) {
//     hideCard('to-left', +n);
//     showCard('from-right', +n + 4);
// }
//
// let rangeValue = function(){
//     if (rangeValueNum < +range.value) {
//         nextCard(rangeValueNum);
//     } else if (rangeValueNum > range.value){
//         previousCard(rangeValueNum);
//     }
//     rangeValueNum = +range.value;
// }
//
// range.addEventListener("input", rangeValue);




let a = 3;
let b = 4;
let range = document.querySelector('input[type="range"]');
if (document.documentElement.scrollWidth === 1000) {
    console.log("small screen");
    document.getElementById('inv1000').classList.remove("active__card");
    a = 2;
    b = 3;
}
let testimonialsItems = document.querySelectorAll('.testimonial__card');

console.log(testimonialsItems);
console.log(testimonialsItems.length);
console.log(testimonialsItems[4]);
let rangeValueNum = +range.value;
let isEnabled = true;

function hideCard(direction, i) {
    isEnabled = false;
    console.log(i);
    testimonialsItems[i].classList.add(direction);
    testimonialsItems[i].addEventListener('animationend', function () {
        this.classList.remove('active__card', direction);
    });
}

function showCard(direction, i) {
    testimonialsItems[i].classList.add('next__card', direction);
    testimonialsItems[i].addEventListener('animationend', function () {
        this.classList.remove('next__card', direction);
        this.classList.add('active__card');
        isEnabled = true;
    });
}

function previousCard(n) {
    hideCard('to-right', +n + a);
    showCard('from-left', +n - 1);
}

function nextCard(n) {
    hideCard('to-left', +n);
    showCard('from-right', +n + b);
}

let rangeValue = function(){
    if (rangeValueNum < +range.value) {
        nextCard(rangeValueNum);
    } else if (rangeValueNum > range.value){
        previousCard(rangeValueNum);
    }
    rangeValueNum = +range.value;
}

range.addEventListener("input", rangeValue);











function replace(el1, el2){
    let tempdiv = document.createElement('span'), parent = el1.parentNode;
    parent.insertBefore(tempdiv, el1);
    parent.insertBefore(el1, el2);
    parent.insertBefore(el2, tempdiv);
    parent.removeChild(tempdiv);
}

function shuffle(el) {
    for (let i = el.length - 1; i > 0; i--) {
        let num = Math.floor(Math.random() * (i +1));
        if(i !== num){
            replace(el[i], el[num])
        }
    }
}



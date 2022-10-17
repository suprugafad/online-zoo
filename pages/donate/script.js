let range = document.querySelectorAll('.nums p');
let input = document.querySelector('input[type="number"]');
let smallCircles = document.querySelectorAll('.small__circle');
let currentActive = document.querySelector('.active__circle');
let size = 0;

if (document.documentElement.scrollWidth <= 1000 && document.documentElement.scrollWidth > 640) {
    let current = currentActive.id - 1;
    size = 1;
    currentActive.classList.remove('active__circle');
    smallCircles[current].classList.add('active__circle');
    currentActive = smallCircles[current];
} else if (document.documentElement.scrollWidth <= 640) {
    let current = currentActive.id - 3;
    size = 3;
    currentActive.classList.remove('active__circle');
    smallCircles[current].classList.add('active__circle');
    currentActive = smallCircles[current];
}

input.value = document.querySelector('.active').innerHTML.slice(1);

document.body.addEventListener('click', (event) => {
    if (event.target.matches('.small__circle')) {
        changeNumInInput(event, size);
    }
});

function changeNumInInput(event, size) {
    let num = event.target.id;
    // if (currentActive) {
        currentActive.classList.remove('active__circle');
        smallCircles[num].classList.add('active__circle');
        range[+currentActive.id + size].classList.remove('active');
        range[+num + +size].classList.add('active');
        currentActive = smallCircles[num];
        input.value = range[+num + size].innerHTML.slice(1);
    // } else {
    //     smallCircles[num].classList.add('active__circle');
    //     range[+num + +size].classList.add('active');
    //     currentActive = smallCircles[num];
    //     input.value = range[+num + size].innerHTML.slice(1);
    // }
}

input.oninput = function() {
    for ( let i = 0; i < range.length; i++) {
        if (input.value == range[i].innerHTML.slice(1)) {
            // if (currentActive) {
                currentActive.classList.remove('active__circle');
                smallCircles[i - size].classList.add('active__circle');
                range[+currentActive.id + size].classList.remove('active');
                range[i].classList.add('active');
                currentActive = smallCircles[i - size];
            // } else {
            //     smallCircles[i].classList.add('active__circle');
            //     range[i + size].classList.add('active');
            //     currentActive = smallCircles[i];
            // }
        // } else {
        //     // if (currentActive) {
        //         currentActive.classList.remove('active__circle');
        //         range[+currentActive.id + size].classList.remove('active');
        //         currentActive = '';
        //     // }
        }
    }
}




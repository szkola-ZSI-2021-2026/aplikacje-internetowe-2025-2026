const text = document.querySelector('.text > p');

const btnMinus = document.querySelector('.sizeDown');
const btnPlus = document.querySelector('.sizeUp');
const btnColor = document.querySelector('.color');

console.log(text.textContent);

let font = 20;
function sizeDown() {
    if(font == 0) return;
    font -= 2;
    text.style.fontSize = `${font}px`;
    console.log(font);
}

function sizeUp() {
    font += 2;
    text.style.fontSize = `${font}px`;
    console.log(font);
}

let max = 255;
let min = 0;
function zmienKolor () {
    let r = Math.floor(Math.random()*(max-min+1)+min);
    let g = Math.floor(Math.random()*(max-min+1)+min);
    let b = Math.floor(Math.random()*(max-min+1)+min);

    text.style.color = `rgb(${r}, ${g}, ${b})`;
    console.log(`rgb (${r}, ${g}, ${b})`);
}

btnMinus.addEventListener('click', sizeDown);
btnPlus.addEventListener('click', sizeUp);
btnColor.addEventListener('click', zmienKolor);
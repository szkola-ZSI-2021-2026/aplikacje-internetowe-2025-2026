const square = document.querySelector('.square');

const btnRed = document.querySelector('.btnRed');
const btnBlue = document.querySelector('.btnBlue');
const btnRst = document.querySelector('.reset');

function zmienKolor(kolor) {
    square.style.backgroundColor = `${kolor}`;
    console.log(kolor);
}

btnRed.addEventListener('click', () => zmienKolor('Red'));
btnBlue.addEventListener('click', () => zmienKolor('Blue'));
btnRst.addEventListener('click', () => zmienKolor('gold'));
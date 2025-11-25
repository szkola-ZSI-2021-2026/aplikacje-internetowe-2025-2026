const indigoButton = document.querySelector('#indigo');
const steelBlueButton = document.querySelector('#steelBlue');
const oliveButton = document.querySelector('#olive');
const main = document.querySelector('main');
const fontColorListOption = document.querySelectorAll('.options');
const fontColorList = document.querySelectorAll('.fontColorList');
const fontSizeInput = document.querySelectorAll('#fontSize');

function kolorTla(kolor) {
    main.style.backgroundColor = kolor;
}

function kolorCzcionki(option) {
    console.log(option);
    console.log(option.value);
}

console.log(fontColorList);

fontColorListOption.forEach( (option) => {
    option.addEventListener('click', () => kolorCzcionki(option.value));
});

function rozmiarCzcionki() {
    console.log('rozmiar');
    main.style.fontSize = fontSizeInput.value;
}

indigoButton.addEventListener('click', () => kolorTla('indigo'));
steelBlueButton.addEventListener('click', () => kolorTla('steelBlue'));
oliveButton.addEventListener('click', () => kolorTla('olive'));
fontSizeInput.addEventListener('blur', () => rozmiarCzcionki());

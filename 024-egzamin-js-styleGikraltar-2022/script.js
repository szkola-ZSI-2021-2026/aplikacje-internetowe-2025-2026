const indigoButton = document.querySelector('#indigo');
const steelBlueButton = document.querySelector('#steelBlue');
const oliveButton = document.querySelector('#olive');
const main = document.querySelector('main');
const mainImg = document.querySelector('#mainImg');
const czyRamkaCheckBox = document.querySelector('#czyRamka');
const fontColorList = document.querySelectorAll('#fontColorList');
const fontSizeInput = document.querySelector('#fontSize');
const radioInputs = document.querySelectorAll('.radioInput');
const unorderedList = document.querySelector('ul');

function kolorTla(kolor) {
    main.style.backgroundColor = kolor;
}

function kolorCzcionki(kolor) {
    main.style.color = kolor;
}

function rozmiarCzcionki() {
    main.style.fontSize = fontSizeInput.value;
}

let czyRamka = 1;  
function zmianaStanuRamki() {
    switch (czyRamka) {
        case 0:
            mainImg.style.border = '1px solid white';
            czyRamka = 1;
            break;
        case 1:
            mainImg.style.border = 'none';
            czyRamka = 0;
            break;
    }
}

function zmianaPunktowListy(radio) {
    unorderedList.style.listStyleType = `${radio.value}`;
}

indigoButton.addEventListener('click', () => kolorTla('indigo'));
steelBlueButton.addEventListener('click', () => kolorTla('steelBlue'));
oliveButton.addEventListener('click', () => kolorTla('olive'));
fontSizeInput.addEventListener('blur', () => rozmiarCzcionki());
fontColorList.forEach( (option) => {
    option.addEventListener('change', () => kolorCzcionki(option.value));
});
czyRamkaCheckBox.addEventListener('click', zmianaStanuRamki);
radioInputs.forEach( (radio) => {
    radio.addEventListener('click', () => zmianaPunktowListy(radio));
});
const header = document.querySelector('h1');

const btn1 = document.querySelector('.color1');
const btn2 = document.querySelector('.color2');
const btn3 = document.querySelector('.color3');

const zmianaKoloru = (kolor) => {
    header.style.color = `${kolor}`;
    header.style.textTransform = 'none';
    console.log(kolor);
}

btn1.addEventListener('click', () => zmianaKoloru('yellow'));
btn2.addEventListener('click', () => zmianaKoloru('green'));
btn3.addEventListener('click', () => zmianaKoloru('tomato'));

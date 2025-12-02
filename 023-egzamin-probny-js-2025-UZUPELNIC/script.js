const pMain = document.querySelector('#main-p');
const neonTextInput = document.querySelector('#neon-text');
const neonSizeInput = document.querySelector('#neon-size');
const leftButton = document.querySelector('#left-button');
const rColor = document.querySelector('#R-color');
const gColor = document.querySelector('#G-color');
const bColor = document.querySelector('#B-color');

let Red = 255;
let Green = 0;
let Blue = 0;
function changeMainTextColor(color, value) {
    console.log(color + ' ' + value);
    switch (color) {
        case 'red':
            Red = value;
            break;
        case 'green':
            Green = value;
            break;
        case 'blue':
            Blue = value;
            break;    
    }
    // console.log(`rgb(${Red}, ${Green}, ${Blue})`);
    pMain.style.color = `rgb(${Red}, ${Green}, ${Blue})`;
}

function changeMainText() {
    pMain.innerHTML = neonTextInput.value;
}

function changeTextSize() {
    value = neonSizeInput.value;

    if(value < 0 || value > 300) return;
    
    pMain.style.fontSize = `${neonSizeInput.value}px`;
}

leftButton.addEventListener('click', changeMainText);
neonSizeInput.addEventListener('change', changeTextSize);
rColor.addEventListener('mousemove', () => changeMainTextColor('red', rColor.value));
gColor.addEventListener('mousemove', () => changeMainTextColor('green', gColor.value));
bColor.addEventListener('mousemove', () => changeMainTextColor('blue', bColor.value));

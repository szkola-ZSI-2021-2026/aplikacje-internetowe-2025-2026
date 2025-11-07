const cytat1 = document.querySelector('#quote1');
const cytat2 = document.querySelector('#quote2');
const cytat3 = document.querySelector('#quote3');
const section = document.querySelector('section');

let x = 0;
function zmienCytat() {
    // console.log(x);
    switch (x % 3) {
        case 0:
            cytat1.style.display = 'none';
            cytat2.style.display = 'block';
            break;
        case 1: 
            cytat2.style.display = 'none';
            cytat3.style.display = 'block';
            break;
        case 2:
            cytat3.style.display = 'none';
            cytat1.style.display = 'block';
        default:
            break;
    }
    x++;
}

// cytat1.addEventListener('click', () => zmienCytat());
// cytat2.addEventListener('click', () => zmienCytat());
// cytat3.addEventListener('click', () => zmienCytat());
section.addEventListener('click', zmienCytat);
const sekcja1Baza = document.querySelector('#section1');
const sekcja2Opis = document.querySelector('#section2');
const sekcja3Galeria = document.querySelector('#section3');
const blok1Baza = document.querySelector('#blok1');
const blok2Opis = document.querySelector('#blok2');
const blok3Galeria = document.querySelector('#blok3');

function funkcja1(div) {
    blok1Baza.style.backgroundColor = '#FFAEA5';
    blok2Opis.style.backgroundColor = '#FFAEA5';
    blok3Galeria.style.backgroundColor = '#FFAEA5';
    sekcja1Baza.style.display = 'none';
    sekcja2Opis.style.display = 'none';
    sekcja3Galeria.style.display = 'none';

    switch(div) {
        case 'baza':
            blok1Baza.style.backgroundColor = 'MistyRose';
            sekcja1Baza.style.display = 'block';
            break;
        case 'opis':
            blok2Opis.style.backgroundColor = 'MistyRose';
            sekcja2Opis.style.display = 'block';
            break;
        case 'galeria':
            blok3Galeria.style.backgroundColor = 'MistyRose';
            sekcja3Galeria.style.display = 'block';
            break;
    }
}
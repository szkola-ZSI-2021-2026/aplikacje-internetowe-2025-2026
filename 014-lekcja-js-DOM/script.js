// DOM (Document Model Object) - model obiektowy dokumentu html, który tworzy przeglądarka w pamięci. Dzięki niemu możemy w JS dynamicznie zmieniać stronę. Przetwarza kod HTML na drzewko elementów.

// Głównym obiektem w przeglądarce jest WINDOW, a podrzędnym DOKUMENT, który reprezentuje stronę i zapewnia dostęp do wszystkich elementów.

console.log(document.body);
console.log(document.title);

console.log("--- POBIERANIE ELEMENTÓW ---");
// starsza metoda
const el2 = document.getElementById('el2');
console.log(el2);

const tagLi = document.getElementsByTagName('li');
console.log(tagLi); // HTMLCollection - obiekt tablicopodobny (żywa kolekcja)

const classElem = document.getElementsByClassName('elem');
console.log(classElem); // HTMLCollection

// nowsza metoda
const ol = document.querySelector('ol');
console.log(ol);

const el2Id = document.querySelector('#el2');
console.log(el2Id);

const classElem2 = document.querySelectorAll('.elem');
console.log(classElem2); // NodeList - obeikt tablicopodobny

const tagLi2 = document.querySelectorAll('li');
console.log(tagLi2); // NodeList

// HTMLCollection vs NodeList
// HTMLCollection to żywa kolekcja, która przechowuje elementy, które zostały stworzone dynamicznie
// NodeList przechowuje elementy istniejące "w pliku HTML"

// ZADANKO 1
let header = document.querySelector('h2');
console.log(header);

let paragrafy = document.querySelectorAll('p');
console.log(paragrafy);

let blokDiv = document.querySelector('.blok');
console.log(blokDiv);

let blokDiv_p = blokDiv.querySelector('#akapit'); // zawężenie poszukiwać
console.log(blokDiv_p);

console.log("--- Tworzenie i dodawanie dynamicznych elementów na stronie ---");
const ulList = document.createElement('ul');
const listItem = document.createElement('li');
console.log(document.body);
console.log(ulList);
console.log(listItem);
document.body.appendChild(ulList);
ulList.appendChild(listItem);

// dodawanie / edytowanie / wyświetlanie treści
console.log(header.textContent);
header.textContent = 'test';
// textContent - zwraca tylko zawartość tekstową elementu, bez żadnych znaczników HTML
listItem.textContent = 'dodany tekst (textContent)'; // dodawanie
listItem.textContent = 'zamieniony tekst (textContent)'; // zamiana
listItem.textContent = '<u>zamieniony tekst (textContent) </u>'; // nie działa

const listItem2 = document.createElement('li');
ulList.appendChild(listItem2);
// innerHTML - zwraca całą zawartość HTML danego elementu, nawet ze znacznikami
listItem2.innerHTML = 'dodany text (innerHTML)'; // dodawanie
listItem2.innerHTML = 'zamieniony text (innerHTML)'; // zamiana
listItem2.innerHTML = '<u>2 krotnie zmienoniy tekst text (innerHTML) </u>'; // zamiana

console.log(listItem2.innerHTML);

/* 
    stworz diva w JS, następnie w nim utwórz p, do którego dodasz tekst "dodany paragraf"
*/
const div1 = document.createElement('div');
const div1_paragraf = document.createElement('p');
document.body.appendChild(div1);
div1.appendChild(div1_paragraf);
div1_paragraf.innerHTML = "<i style='color:pink'> dodany paragraf </i>";

console.log('--- Usuwanie elementów ---');
const delP = document.querySelector('#del');
blokDiv.removeChild(delP);

console.log('--- Zastępowanie elementów ---');
const div2 = document.createElement('div');
const oldP = document.createElement('p');
oldP.textContent = 'Stary tekst';
document.body.appendChild(div2);
div2.appendChild(oldP);

const newP = document.createElement('p');
newP.textContent = 'Nowy tekst';

// rodzic.replaceChild(nowe, stare) - zastępuje rodzicowi nowym dzieckiem stare
div2.replaceChild(newP, oldP);

console.log('--- addEventListener ---');
// addEventListener() - metoda w JS, która w momencie wystąpienia zdarzenia wysołuje funkcje, powinny znajdować się na końcu pliku

// addEl możemy nadawać na dokument, window i pojedynczy element na stronie

const btn1 = document.querySelector('.btn-click');
const btn2 = document.querySelector('.btn-mouse');
const btn3 = document.querySelector('.btn-dblclick');

const klinij = () => console.log('Kliknięto mnie');
const najedz = () => console.log('Najechano mnie');
const kliknijPodwojnie = () => console.log('Kliknięto mnie podwójnie');

function test() {
    console.log('TEST');
}

btn1.addEventListener('click', klinij);
btn1.addEventListener('click', test);
btn2.addEventListener('mouseover', najedz);
btn3.addEventListener('dblclick', kliknijPodwojnie);




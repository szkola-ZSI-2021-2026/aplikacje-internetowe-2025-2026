// DOM (Document Model Object) - model obiektowy dokumentu html, który tworzy przeglądarka w pamięci. Dzięki niemu możemy w JS dynamicznie zmieniać stronę. Przetwarza kod HTML na drzewko elementów.

// Głównym obiektem w przeglądarce jest WINDOW, a podrzędnym DOKUMENT, który reprezentuje stronę i zapewnia dostęp do wszystkich elementów.

console.log(document.body);
console.log(document.title);

console.log("--- POBIERANIE ELEMENTÓW ---");
// starsza metoda
const el2 = document.getElementById('el2');
console.log(el2);

const tagLi = document.getElementsByTagName('li');
console.log(tagLi); // HTMLCollection - obiekt tablicopodobny

const classElem = document.getElementsByClassName('elem');
console.log(classElem); // HTMLCollection




// nowsza metoda
const ol = document.querySelector('ol');
console.log(ol);

const el2Id = document.querySelector('#el2');
console.log(el2Id);

const classElem2 = document.querySelectorAll('.elem');
console.log(classElem2); // NodeList - obeikt tablicopodobny
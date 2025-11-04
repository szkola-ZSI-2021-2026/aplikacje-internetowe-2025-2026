const img = document.querySelector('img');
const a = document.querySelector('a');
const input = document.querySelector('input');
const button = document.querySelector('button');

// dodawanie atrybutów
// element . setAttribute ( ' Atrybut ' , ' wartosc ' ) - ustawia nowąwartość dla podanego atrybutu (jeśli atrybut istnieje, zmienia wartość na podaną)
img.setAttribute('alt', 'ziemia');
img.setAttribute('src','drzewo.jpg');
img.setAttribute('height','200');
a.setAttribute('target', '_blank');
button.setAttribute('id', 'mode');

// pobieranie atrybutów
// element . getAttribute ( ' atrybut ' ) - pobiera wartość atrybutu lub zwraca null jeśli takiego nie ma.
let aHref = a.getAttribute('href');
console.log(aHref);
console.log(img.getAttribute('src'));
console.log(input.getAttribute('id'));

// sprawdzanie obecności atrybutu
// element . hasAttribute ( ' atrybut ' ) - zwraca true/false w zależności czy element posiada atrybut
console.log(input.hasAttribute('type'));
input.setAttribute('value', 'wartosc');
if(input.hasAttribute('value')) {
    let wartosc = input.getAttribute('value');
    console.log(`Podano wartość : ${wartosc}`);
} else {
    console.log('Nie podano żadnej wartości');
}
// 1. Utworz zmienna wynik. Zmienna wynik ma przechowywac informacje czy 15 jest liczba parzysta czy nie. Wynik pokaz w konsoli.
let wynik = 15;
console.log(wynik % 2 == 0);


// 2. Utworz zmienna liczba i przypisz jej wartosc 8. Za pomoca inkrementacji, zwieksz wartosc zmiennej do 10. Wynik pokaz w konsoli.
let liczba = 8;
liczba++;
liczba++;
console.log(liczba);


// 3. Stworz zmienna x i y. Przypisz do nich liczby 5 i 10. Nastepnie za pomoca operatorow przypisania (zapis skrocony) wypisz w konsoli wynik mnozenia oraz dzielenia x przez y razem z komunikatami wykorzystujac template stringa.
let x = 5;
let y = 10;
console.log(`x * y = ${x *= y}`); // template string jest wtedy, gdzy używamy ````````````
console.log(`x / y = ${x /= y}`);

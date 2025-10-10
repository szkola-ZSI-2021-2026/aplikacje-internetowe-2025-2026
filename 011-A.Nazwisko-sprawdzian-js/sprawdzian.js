console.log('Zadanie 1');
let password1 = 'abc';
let password2 = 'abc';
let text = (password1 === password2) ? 'Zalogowano pomyślnie' : 'Błędne hasło';
console.log(text);


console.log('Zadanie 2');
let imie = 'Michał';
let nazwisko = 'Mleczko';
if(imie.length + nazwisko.length > 10) {
    console.log(imie.toUpperCase() + ' ' + nazwisko.toUpperCase());
} else {
    console.log(imie.toLowerCase() + ' ' + nazwisko.toLowerCase());
}

console.log('Zadanie 3');
let num1 = 12; 
let num2 = 13;
let iloczyn = num1 * num2;
if (iloczyn > 0) {
    console.log(`Wynik ${num1} * ${num2} jest dodatni`);
} else if(iloczyn == 0) {
    console.log(`Wynik ${num1} * ${num2} jest równy 0`);
} else {
    console.log(`Wynik ${num1} * ${num2} jest ujemny`);
}

console.log('Zadanie 4');
let wiek = 12;
console.log(`Wiek: ${wiek}`);
if(wiek >= 0 && wiek < 10) {
    console.log('Dziecko');
} else if(wiek >= 10 && wiek < 18) {
    console.log('Nastolatek');
} else if(wiek >= 18) {
    console.log('Dorosły')
} else {
    console.log('Wartość podana nie jest wiekiem');
}

console.log('Zadanie 5');
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log('Zadanie 6');
let j = 0;
while(j <= 100) {
    if(j % 2 == 0 && j % 5 == 0) {
        console.log(j);
    }
    j++;
}

console.log('Zadanie 7');
let wynik;
for(let k = 10; k >=1; k-=3) {
    wynik = k * 3;
    console.log(`Wynik ${k}*3 to ${wynik}`);
}
console.log('Zadanie 1');
const imie = 'Imie';
const nazwisko = 'Nazwisko';
const data_urodzin = 'data urodzenia';
console.log(`Nazywam się ${imie} ${nazwisko}. Data moich urodzin to ${data_urodzin}`);

console.log('Zadanie 2');
console.log(typeof data_urodzin);
console.log(nazwisko.toUpperCase());

console.log('Zadanie 3');
let zmienna1 = 3.14;
let zmienna2 = 5.1;
let dzielenie = (zmienna1 / zmienna2);
// console.log(dzielenie);
let zaokroglenie = ((dzielenie * 10).toFixed()) / 10;
// console.log(zaokroglenie);
console.log(`Wynik po zaokrągleniu: ${zmienna1}/${zmienna2} = ${zaokroglenie}`);
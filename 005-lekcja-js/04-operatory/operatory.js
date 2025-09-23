let x = 11;
let y = 5;

// + - * / % **

console.log('------ OPERATORY ARYTMETYCNE --------');

let suma = x + y;
console.log(`Suma: ${suma}`);

let roznica = x - y;
console.log(`Roznica: ${roznica}`);

let iloczyn = x * y;
console.log(`Iloczyn: ${iloczyn}`);

let iloraz = x * y;
console.log(`Iloraz: ${iloraz}`);

let modulo = x % y;
console.log(`Reszta z dzielenia: ${modulo}`);

let potega = x ** y;
console.log(`Potegowanie: ${potega}`)

console.log('------ OPERATORY PRZYPISANIA --------');
// inkrementacja i dekrementacja
// post oraz pre
// operatory skrócone += -= *= /= %= **=
        // na starcie x = 11
x++;    // 12
x+=2    // 14
x-=10;  // 4
--x;    // 3
x *= 3; // 9
x--;    // 9
x /= 4; // 2
console.log('x po modyfikacjach = '+x);

console.log('------ OPERATORY PORÓWNANIA --------'); // zwracają wartość logiczną true/false

console.log(10 == '10');

console.log(10 === '10'); // sprawdza wartość i typ

console.log(10 !== '10'); // sprawdza wartość i typ

console.log(10 != '10'); // sprawdza wartość i typ

console.log(10 < 5); // <=

console.log(10 > 5); // >=

console.log('------ OPERATORY LOGICZNE --------'); 
// AND &&
// OR ||
// XOR ^
// NOT !

let a = 5;
let b = 7;
// and
console.log(5 & 7);
console.log(1 & 1);
console.log(100 & 300);

// or
console.log(0 || 0);

// xor
console.log(1 ^ 0);

// not
console.log(!1);




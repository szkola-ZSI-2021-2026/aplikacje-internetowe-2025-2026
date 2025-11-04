console.log('Zadanie 1');
let tabLiczby = [3,4,5,6,7,8];
for (const liczba of tabLiczby) {
    console.log(liczba);
}

console.log('Zadanie 2');
tabLiczby.unshift(1);
tabLiczby.push(9);
tabLiczby.splice(1,0,2);
console.log(tabLiczby);

console.log('Zadanie 3');
if(tabLiczby.length > 5) {
    for(let i=0; i<tabLiczby.length; i++) {
        if(tabLiczby[i] % 2 == 0) {
            console.log(tabLiczby[i]);
        }
    }
}else {
    console.log('Za mało elementów');
}

console.log('Zadanie 4');
let nowaTabLiczby = [];
for(let j=0; j<tabLiczby.length; j++) {
    nowaTabLiczby[j] = tabLiczby[j] * 3;
}
console.log(nowaTabLiczby);

console.log('Zadanie 5');
function obwodKola(r) {
    let obwod = 2 * Math.PI * r;
    let zaokroglonyObwod = Math.ceil(obwod*100)/100;
    console.log(`Obwód koła o promieniu ${r} wynosi ${zaokroglonyObwod}`);
}
obwodKola(3);

console.log('Zadanie 6');
let dzialanie = (a=3, b=2, c=1) => {
    return a + b * c;
}
console.log(dzialanie());
console.log(dzialanie(2,3,4));

console.log('Zadanie 7');
let min = 30;
let max = 60;
let losowanie = Math.floor(Math.random()*(max-min+1)+min);
let pierwiastek = Math.sqrt(losowanie);
console.log(`Wylosowana liczba to ${losowanie}, pierwiastek z tej liczby wynosi ${pierwiastek}`);
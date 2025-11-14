const buttonPolicz = document.querySelector('#policz');
const m2 = document.querySelector('#m2');
const divObliczonyWynik = document.querySelector('#obliczonyWynik');

function policzPowierzchnie() {
    // 1 puszka = 1 l farby
    // 1 l farby = 4m2
    console.log('wejscie do funkcji');
    console.log(m2.value);

    let powierzchnia = m2.value;

    let liczbaPotrzbnychPuszek = Math.ceil(powierzchnia / 4);

    console.log(liczbaPotrzbnychPuszek);

    divObliczonyWynik.innerHTML = `<p>Liczba potrzebnych puszek: ${liczbaPotrzbnychPuszek} </p>`;
}

buttonPolicz.addEventListener('click', policzPowierzchnie);
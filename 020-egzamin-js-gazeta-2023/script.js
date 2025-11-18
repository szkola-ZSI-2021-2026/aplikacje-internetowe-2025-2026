// przyciski
const buttonWiadomosciZKraju = document.querySelector("#buttonWiadomosciZKraju");
const buttonsSportSection = document.querySelector("#buttonsSportSection");
const buttonAktualnosciSection = document.querySelector("#buttonAktualnosciSection");
const buttonOgloszeniaSection = document.querySelector("#buttonOgloszeniaSection");
// artykoly
const articleWiadomosciZKraju = document.querySelector("#article1");
const articleSportSection = document.querySelector("#article2");
const articleAktualnosciSection = document.querySelector("#article3");
const articleOgloszeniaSection = document.querySelector("#article4");

function showHideText(sekcja) {
    articleWiadomosciZKraju.style.display = 'none';
    articleSportSection.style.display = 'none';
    articleAktualnosciSection.style.display = 'none';
    articleOgloszeniaSection.style.display = 'none';
    switch (sekcja) {
        case 'kraj':
            articleWiadomosciZKraju.style.display = 'block';
            break;

        case 'sport':
            articleSportSection.style.display = 'block';
            break;

        case 'aktualnosci':
            articleAktualnosciSection.style.display = 'block';
            break;

        case 'ogloszenia':
            articleOgloszeniaSection.style.display = 'block';
            break;
    }
}

buttonWiadomosciZKraju.addEventListener('click', () => showHideText('kraj'));
buttonsSportSection.addEventListener('click', () => showHideText('sport'));
buttonAktualnosciSection.addEventListener('click', () => showHideText('aktualnosci'));
buttonOgloszeniaSection.addEventListener('click', () => showHideText('ogloszenia'));
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const glowneZdjecie = document.querySelector('#glowneZdjecie');
const miniatury = document.querySelectorAll('.miniatura');

let currImg = 5; // 5.jpg
let zdjecie;

function changeImage(change){
    currImg += change;
    if(currImg == 6) {currImg = 1};
    if(currImg == 0) {currImg = 5};

    zdjecie = `${currImg}.jpg`;
    glowneZdjecie.setAttribute('src', zdjecie);

    // console.log(zdjecie);
}

function changeAtImage(miniatura) {
    // console.log(miniatura);
    zdjecie = miniatura.getAttribute('src');
    // console.log(zdjecie);
    glowneZdjecie.setAttribute('src', zdjecie);
    imgNumber = zdjecie.slice(0,1);
    // console.log(imgNumber);
    currImg = parseInt(imgNumber);
    // console.log(currImg);
}

nextButton.addEventListener('click', () => changeImage(1));
prevButton.addEventListener('click', () => changeImage(-1));


miniatury.forEach((miniatura) => {
    miniatura.addEventListener('click', () => changeAtImage(miniatura));
});
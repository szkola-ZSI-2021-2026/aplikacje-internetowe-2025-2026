const radios = document.getElementsByName('obraz1');
const section1Image = document.querySelector('#s1img');
const section2Image = document.querySelector('#s2img');
const section3Image = document.querySelector('#s3img');
const section4Image = document.querySelector('#s4img');
const rangeInputS3 = document.querySelector('#rangeInputS3');
const rangeInputS4 = document.querySelector('#rangeInputS4');

function transformacja1() {
    console.log(radios);
    radios.forEach((radio) => {
        if(radio.checked){
            zmianaObrazu1(radio.getAttribute('id'));
        }
    });
}

function zmianaObrazu1(zmiana) {
    switch(zmiana) {
        case 'blur':
            section1Image.style.filter = `blur(5px)`;
            break;

        case 'sepia':
            section1Image.style.filter = `sepia(100%)`;
            break;

        case 'negatyw':
            section1Image.style.filter = `invert(100%)`;
            break;
    }
} 

function transformacja2(kolor) {
    switch (kolor) {
        case 'monochromatyk':
            section2Image.style.filter = 'grayscale(100%)';
            // console.log('mono');
            break;
        case 'kolor':
            section2Image.style.filter = 'grayscale(0%)';
            // console.log('kolor');
            break;
    }
}

function transformacja3() {
    // console.log('transformacja3');
    section3Image.style.filter = `opacity(${rangeInputS3.value}%)`;
}

function transformacja4() {
    section4Image.style.filter = `brightness(${rangeInputS4.value}%)`;
}
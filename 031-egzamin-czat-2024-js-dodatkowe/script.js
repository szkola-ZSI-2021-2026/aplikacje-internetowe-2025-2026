const chatBox = document.querySelector('#chat');

function sendMessage(person, text) {
    let img = document.createElement('img');
    img.setAttribute('src', `${person}.jpg`);
    let p = document.createElement('p');
    p.innerHTML = `${text}`;
    let div = document.createElement('div');
    div.setAttribute('class', `messages ${person}Messages`);
    div.appendChild(img);
    div.appendChild(p);
    chatBox.appendChild(div);
}

let KrzysztofResponses = 
    [
        "Świetnie!",
        "Kto gra główną rolę?",
        "Lubisz filmy Tego reżysera?",
        "Będę 10 minut wcześniej",
        "Może kupimy sobie popcorn?",
        "Ja wolę Colę",
        "Zaproszę jeszcze Grześka",
        "Tydzień temu też byłem w kinie na Diunie",
        "Ja funduję bilety"
    ]
function generateRandomResponse(person) {
    let min = 0;
    let max = 8;
    let randomIndex = Math.round(Math.random() * (max - min) + min);
    console.log(randomIndex);
    sendMessage(person, KrzysztofResponses[randomIndex]);
}
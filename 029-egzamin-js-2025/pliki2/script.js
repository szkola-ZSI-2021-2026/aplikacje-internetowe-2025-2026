function wykonane(element) {
    // console.log('wykonane');
    element.parentElement.style.textDecoration = 'line-through';
}

function dodaj() {
    // console.log('dodaj');
    let dane = document.querySelector("#dodajZadanie").value;
    let li = document.createElement("li");
    li.textContent = dane;
    let button  = document.createElement("button");
    button.textContent = 'Wykonane';
    button.setAttribute("onclick", "wykonane(this)");
    li.appendChild(button);
    let ul = document.querySelector('ul');
    ul.appendChild(li);
    // console.log(dane);
}
fetch('https://breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data => {
    allCharacters = data;
    renderPerson(allCharacters);
})

function renderPerson(array) { //se pone un array genérico para que cuando se llame a la función se elija como argumento el array deseado (el array filtrado o el array genérico)
    article.innerHTML = '';
    for(const articleEl of array) {
        article.innerHTML += `<li><article id="${array.id}">
        <img src=${articleEl.img} alt="foto personaje" />
        <p>${articleEl.name}</p>
        <p>${articleEl.status}</p>
        </article></li>`;
    }
}

function searchPerson(ev) {
    ev.preventDefault();
    const inputValue = searchName.value;

    const showNames = allShips.filter(articleEl => articleEl.name.includes(inputValue));
    renderPerson(showNames);
}

btn.addEventListener("click", searchPerson);
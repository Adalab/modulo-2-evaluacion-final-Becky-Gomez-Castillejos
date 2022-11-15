fetch('https://breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data => {
    allCharacters = data;
    renderPerson(allCharacters);
})

const savedFavourites = JSON.parse(localStorage.getItem('favourites'));
console.log(savedFavourites);
if(savedFavourites !== null) {

    favouriteCharacters = savedFavourites;
    addFavourites();
}


function renderPerson(array) { //se pone un array genérico para que cuando se llame a la función se elija como argumento el array deseado (el array filtrado o el array genérico)
    article.innerHTML = '';
    for(const articleEl of array) {
        article.innerHTML += `<li class= "js_li" id="${articleEl.char_id}"><article>
        <img src=${articleEl.img} alt="foto personaje" class="photo" />
        <p>${articleEl.name}</p>
        <p>${articleEl.status}</p>
        </article></li>`;
    }
    const liList = document.querySelectorAll(".js_li");
    for(const liEl of liList) {
        liEl.addEventListener("click", handleClickCharacters);
    }
}

function searchPerson(ev) {
    ev.preventDefault();
    const inputValue = searchName.value;

    const showNames = allCharacters.filter(articleEl => articleEl.name.includes(inputValue));
    renderPerson(showNames);
}

btn.addEventListener("click", searchPerson);
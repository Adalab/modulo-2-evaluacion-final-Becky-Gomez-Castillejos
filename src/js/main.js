'use strict';

const article = document.querySelector('.js_article');
let allShips = [];
let favouriteCharacters = [];
const searchName = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');
const favouriteCharacter = document.querySelector('.js_article_favourites');

fetch('https://breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data => {
    articles = data;
    renderPerson(allShips);
})

function renderPerson(array) { //se pone un array genérico para que cuando se llame a la función se elija como argumento el array deseado (el array filtrado o el array genérico)
    article.innerHTML = '';
    for(const articleEl of array) {
        article.innerHTML += `<li id="img"><img src=${articleEl.img} alt="foto personaje" />
        </li><li id="name"><p>${articleEl.name}</p></li><li id="status">
        <p>${articleEl.status}</p></li>`;
    }
}

function searchPerson(ev) {
    ev.preventDefault();
    const inputValue = searchName.value;

    const showNames = articles.filter(articleEl => articleEl.name.includes(inputValue));
    renderPerson(showNames);
}

btn.addEventListener("click", searchPerson);

//pintar los personajes favoritos

function addFavourites() {
    favouriteCharacter.innerHTML = '';
    for(const favouriteEl of favouriteCharacters) {
        favouriteCharacter.innerHTML += `<li><img src=${favouriteEl.img} alt="foto personaje" />
        </li><li><p>${favouriteEl.name}</p></li><li>
        <p>${favouriteEl.status}</p></li>`;
    }
   

}


function renderFavouritesCharacters() {

    for(let i = 0; i < favouriteCharacters.length; i++) {
        favouriteCharacter.innerHTML += renderPerson(favouriteCharacters[i]);
    }
    addFavourites();
}

function handleClickShip(event) {

}




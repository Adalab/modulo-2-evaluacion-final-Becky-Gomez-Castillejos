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
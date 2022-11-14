function addFavourites() {
    favouriteCharacter.innerHTML = '';
    for(const favouriteEl of favouriteCharacters) {
        favouriteCharacter.innerHTML += `<li><img src=${favouriteEl.img} alt="foto personaje" />
        </li><li><p>${favouriteEl.name}</p></li><li>
        <p>${favouriteEl.status}</p></li>`;
    }
   

}


function renderFavouritesCharacters() {
    favouriteCharacter.innerHTML = '';
    for(let i = 0; i < favouriteCharacters.length; i++) {
        favouriteCharacter.innerHTML += renderPerson(favouriteCharacters[i]);
    }
    addFavourites();
}

function handleClickCharacters(event) {
    event.currentTarget.classList.toggle("selected");
    console.log(event.currentTarget.char_id);

    const selectedCharacter = allCharacters.find((eachCharacterObj) => eachCharacterObj.char_id === event.currentTarget.char_id);
    console.log(selectedCharacter);

    const charactersInFavouritesIndex = favouriteCharacters.findIndex((eachCharacterObj) => eachCharacterObj.char_id === event.currentTarget.char_id);

    if(charactersInFavouritesIndex === -1) {
        favouriteCharacters.push(selectedCharacter);
    }
    else {
        favouriteCharacters.splice(charactersInFavouritesIndex, 1);
    }
   
    renderFavouritesCharacters();
}
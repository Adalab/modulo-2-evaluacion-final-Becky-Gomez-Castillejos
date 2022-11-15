function addFavourites() {
    favouriteCharacter.innerHTML = '';
    for(const favouriteEl of favouriteCharacters) {
        favouriteCharacter.innerHTML += `<li><article><img src=${favouriteEl.img} alt="foto personaje" class="favourite_photo" />
        </li><li><p>${favouriteEl.name}</p></li><li>
        <p>${favouriteEl.status}</p></article></li>`;
    }
   

}


/*function renderFavouritesCharacters() {
    favouriteCharacter.innerHTML = '';
    
        favouriteCharacter.innerHTML += addFavourites(favouriteCharacters[i]);
    
   
}*/

function handleClickCharacters(event) {
    console.log("hola");
    event.currentTarget.classList.toggle("selected");
    console.log(event.currentTarget.id);

    const selectedCharacter = allCharacters.find((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));
    console.log(selectedCharacter);

    const charactersInFavouritesIndex = favouriteCharacters.findIndex((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));

    if(charactersInFavouritesIndex === -1) {
        favouriteCharacters.push(selectedCharacter);
        
        localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
    }
    else {
        favouriteCharacters.splice(charactersInFavouritesIndex, 1);
        localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
    }
   
    addFavourites();
}


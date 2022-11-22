'use strict';

fetch('https://randomuser.me/api/?results=10')
    
    .then((response) => response.json())
    .then((data) => {
        people = data.results.map((eachUser) => {
            const object = {
                id: eachUser.id, 
                picture: eachUser.picture.medium,
                name: eachUser.name.first,
                location: eachUser.location.city,
                userName: eachUser.login.username,
                isFriend: false 
            }
            
            return object;
        });
        console.log(people);
        renderPeople();
        handleClickCharacters(event)
    });
    

    function handleClickCharacters() {
        //console.log("hola");
        //let selectedProfile = people.find((eachProfile) => eachProfile.id.value === event.currentTarget.id);
        //console.log(selectedProfile);
        for(const person of people) {
            if(person.isFriend) {
                person.isFriend = true;
                person.classList.add("selected");
            } else {
                person.classList.remove("selected");
            }
            person.addEventListener("click", () => {
                console.log('¡Has añadido un amigo!');
            });
    
        }
           
        }






/*const savedFavourites = JSON.parse(localStorage.getItem('favourites'));
console.log(savedFavourites);
if (savedFavourites !== null) {
    favouriteCharacters = savedFavourites;
    addFavourites();
}*/


//cuando se quiere pintar un elemento se puede poner el la contante del elemento en vacío y luego rellenarlo
function renderPeople() { 
    list.innerHTML = '';
    for (const listEl of people) {
        list.innerHTML += `<li class= "js_li" id="${listEl.id}"><article>
        <img src=${listEl.picture} alt="foto personaje" class="photo" />
        <p>${listEl.name}</p>
        <p>${listEl.location}</p>
        <p>${listEl.userName}</p>
        </article></li>`;
    }


    /*const liList = document.querySelectorAll(".js_li");
    for (const liEl of liList) {
        liEl.addEventListener("click", handleClickCharacters);
    }*/
}

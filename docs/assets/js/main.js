"use strict";const article=document.querySelector(".js_article");let allCharacters=[],favouriteCharacters=[];const searchName=document.querySelector(".js_input"),btn=document.querySelector(".js_button"),favouriteCharacter=document.querySelector(".js_article_favourites");fetch("https://breakingbadapi.com/api/characters").then(e=>e.json()).then(e=>{allCharacters=e,renderPerson(allCharacters)});const savedFavourites=JSON.parse(localStorage.getItem("favourites"));function renderPerson(e){article.innerHTML="";for(const r of e)article.innerHTML+=`<li class= "js_li" id="${r.char_id}"><article>\n        <img src=${r.img} alt="foto personaje" class="photo" />\n        <p>${r.name}</p>\n        <p>${r.status}</p>\n        </article></li>`;const r=document.querySelectorAll(".js_li");for(const e of r)e.addEventListener("click",handleClickCharacters)}function searchPerson(e){e.preventDefault();const r=searchName.value;renderPerson(allCharacters.filter(e=>e.name.includes(r)))}function addFavourites(){favouriteCharacter.innerHTML="";for(const e of favouriteCharacters)favouriteCharacter.innerHTML+=`<li><article><img src=${e.img} alt="foto personaje" class="favourite_photo" />\n        </li><li><p>${e.name}</p></li><li>\n        <p>${e.status}</p></article></li>`}function handleClickCharacters(e){console.log("hola"),e.currentTarget.classList.toggle("selected"),console.log(e.currentTarget.id);const r=allCharacters.find(r=>r.char_id===parseInt(e.currentTarget.id));console.log(r);const t=favouriteCharacters.findIndex(r=>r.char_id===parseInt(e.currentTarget.id));-1===t?(favouriteCharacters.push(r),localStorage.setItem("favourites",JSON.stringify(favouriteCharacters))):(favouriteCharacters.splice(t,1),localStorage.setItem("favourites",JSON.stringify(favouriteCharacters))),addFavourites()}console.log(savedFavourites),null!==savedFavourites&&(favouriteCharacters=savedFavourites,addFavourites()),btn.addEventListener("click",searchPerson);
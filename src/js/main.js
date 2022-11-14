'use strict';

const article = document.querySelector('.js_article');
let articles = [];
const searchName = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');

fetch('https://breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data => {
  
    articles = data;
    renderPerson(articles);
    
})

function renderPerson(array) { //se pone un array genérico para que cuando se llame a la función se elija como argumento el array deseado (el array filtrado o el array genérico)
    article.innerHTML = '';
    for(const articleEl of array) {
        article.innerHTML += `<li><img src=${articleEl.img} alt="foto personaje" />
        </li><li><p>${articleEl.name}</p></li><li>
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




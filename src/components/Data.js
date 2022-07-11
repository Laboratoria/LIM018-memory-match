import pokemon from '../data/pokemon/pokemon.js';

//Un componente siempre devuelve un elemento, no un string
const Data = () => { // parámetro jugador
  //array de objetos que están en pokemon.js
  const arr = pokemon.items;
  //duplicar cartas
  const myArr = arr.concat(arr);
  //barajar cartas
  function suffle(myArr){
    for (let i = 0; i< myArr.length;i++){
      let random = Math.floor(Math.random()*myArr.length);
      let temPosition = "";
      let currentArray = myArr[i];
      let randomPosition = myArr[random];
      temPosition = currentArray;
      myArr[i] = randomPosition;
      myArr[random] = temPosition;

    } 
    return myArr;
  } 
  suffle(myArr);
  //Dibujar cartas // todo esto debe ser cambiado
  let card = "";
  let name = "";
  let img = "";
  let color = "";

  for (let i = 0; i < myArr.length; i++){
    name = myArr[i].id;
    img = myArr[i].image;
    color = myArr[i].bgColor;
    card +=`<div class= "card" style="background-color: ${color}"><img src="${img}"><p class= "pokemon_name">${name.charAt(0).toUpperCase()}${name.slice(1)}</p></div>`;
  
}

//crear un elemento asignarle al innerHTML el contenido de la variable, retorno el elemento 
const div_container_play = document.createElement('div'); //Div donde se dibujan las cartas
div_container_play.className = "div_container_play";//padre de las cartas

div_container_play.innerHTML = card;

return div_container_play;
    
  }

export default Data;

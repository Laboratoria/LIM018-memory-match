import pokemon from '../data/pokemon/pokemon.js';
const Data = () => {
  //array de objetos que están en pokemon.js
  const arr = pokemon.items;
  //duplicar cartas
  const myArr = arr.concat(arr);
  //barajar cartas
  /* function suffle(myArr){
    for (let i = 0; i< myArr.length;i++){

    } 
  } */
  //Dibujar cartas
  let card = "";
  let name = "";
  let img = "";
  let color = "";

  for (let i = 0; i < myArr.length; i++){
    name = myArr[i].id;
    img = myArr[i].image;
    color = myArr[i].bgColor;
    card +=`<div class= "card" style="background-color: ${color}"> <img src="${img}" ><p class= "pokemon_name">${name.charAt(0).toUpperCase()}${name.slice(1)}</p></div>`;
 
}
return card;
    
  }

export default Data;

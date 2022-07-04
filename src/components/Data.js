import pokemon from '../data/pokemon/pokemon.js';
const Data = () => {

  const myArr = pokemon.items;
  //duplicar cartas
  //barajar cartas
  //Dibujar cartas
  let card = "";
  let name = "";
  let img = "";
  let color = "";

  for (let i = 0; i < myArr.length; i++){
    name = myArr[i].id;
    img = myArr[i].image;
    color = myArr[i].bgColor;
    card +=`<div style="background-color: ${color}"> <img src="${img}"><p>${name.charAt(0).toUpperCase()}${name.slice(1)}</p></div>`;
 
}
return card;
    
  }

export default Data;
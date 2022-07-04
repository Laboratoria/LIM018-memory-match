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
    card +=`<div  style="background-color: ${color}"> <p>${name}</p> <img src="${img}"></div>`;

    
}
return card;
    
  }

export default Data;
import pokemon from '../data/pokemon/pokemon.js';

//Un componente siempre devuelve un elemento, no un string
const Data = () => { // parámetro jugador
  //array de objetos que están en pokemon.js
  //console.log(name_player);
  const arr = pokemon.items;
  //duplicar cartas
  const myArr = arr.concat(arr);
  //barajar cartas
  myArr.sort(()=> Math.random()-0.5);
  
  //Dibujar cartas // todo esto debe ser cambiado
    const div_box = document.createElement('div');
    div_box.className = 'div_box';
    myArr.forEach((item)=>{
    
    const div_table = document.createElement('div');
    div_table.className = 'div_table';
    
    const card = document.createElement('div');
    card.classList = 'card';
    
    card.setAttribute('id', item.id);
    //card.setAttribute('style', item.bgColor);

    const face = document.createElement('img');
    face.classList = 'face';
    face.src = item.image;

    const back = document.createElement('div');
    back.classList = 'back';

    
    card.appendChild(face);
    card.appendChild(back);
    div_table.appendChild (card);
    div_box.appendChild(div_table);

    card.addEventListener('click', (e)=>{
      e.preventDefault();
      face.classList.toggle('toggleCard');
      card.classList.toggle('toggleCard');

    });
    
  });

return div_box;
}

export default Data;

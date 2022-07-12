import pokemon from '../data/pokemon/pokemon.js';

//Un componente siempre devuelve un elemento, no un string
const App = () => { // parámetro jugador
  //array de objetos que están en pokemon.js
  //console.log(name_player);
  const arr = pokemon.items;
  //duplicar cartas
  const myArr = arr.concat(arr);
  //barajar cartas
  myArr.sort(()=> Math.random()-0.5);
  
  //Dibujar cartas // 
  const div_box = document.createElement('div');
  div_box.classList = 'div_box'; 
  
    myArr.forEach((item)=>{
  
    
    const card = document.createElement('div');
    card.classList = 'card';
    
    card.setAttribute('id', item.id);
  

    const face = document.createElement('img');
    face.classList = 'face';
    face.src = item.image;
    /* face.innerText =  `${item.id}`;
    console.log(face.innerText); */
   /*  const span_name = document.createElement('span');
    span_name.innerText = `${item.id}`
    face.appendChild(span_name); */

    const back = document.createElement('div');
    back.classList = 'back';

    
    div_box.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    

    card.addEventListener('click', (e)=>{
      e.preventDefault();
      face.classList.toggle('toggleCard');
      card.classList.toggle('toggleCard');
      //check(e);
    });
    
  });

  //Emparejar cartas

  /* const check = (e) => {
    const clicked = e.target;
  } */

return div_box;
}

export default App;

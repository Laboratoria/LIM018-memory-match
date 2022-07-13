import pokemon from '../data/pokemon/pokemon.js';

//Un componente siempre devuelve un elemento, no un string
const App = () => { 
  //array de objetos que están en pokemon.js
  //console.log(name_player);
  const arr = pokemon.items;
  //duplicar cartas y barajar
  const myArr = arr.concat(arr).sort(()=> Math.random()-0.5);
  //barajar cartas
  
  
  //Dibujar cartas // 
  const div_box = document.createElement('div');
  div_box.classList = 'div_box'; 

  
    myArr.forEach((item)=>{
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('id', item.id); //revisar esta línea de código
  
    const face = document.createElement('img');
    face.classList = 'face';
    face.src = item.image;
    //card.setAttribute('id', item.id);
    /* face.innerText =  `${item.id}`;
    console.log(face.innerText); */
   /*  const span_name = document.createElement('span');
    span_name.innerText = `${item.id}`
    face.appendChild(span_name); */

    const back = document.createElement('div');
    back.classList = 'back';
    
    
    card.appendChild(face);
    card.appendChild(back);
    div_box.appendChild(card);

    card.addEventListener('click', (e)=>{
      e.preventDefault();
      
      face.classList.toggle('toggleCard');
      card.classList.toggle('toggleCard');  
   //lógica de validación
               
    });
    
  });

  //Emparejar cartas

    
return div_box;
}

export default App;

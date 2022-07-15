import Start from './components/Start.js';
import Head from './components/Head.js';
import App from './components/App.js';

const root = document.getElementById('root'); //hizo la magia-comprendido 

root.appendChild(Start());
root.appendChild(App());

//console.log(Start());
//innetHTML = ""; borro el contenido (a Root), sobreescribo Data
//limpiar la página y añadir el componente

const btn_play = root.querySelector('.btn_play');
const input_name = root.querySelector('.input_name');
//console.log(input_name);
btn_play.addEventListener('click', (event) => {
  event.preventDefault();
  if (input_name.value === "") {
    alert('Escribe tu nombre para empezar a jugar');

  } else {
    root.innerHTML = "";
   // debugger;
    root.appendChild(Head(input_name));
    root.appendChild(App());

  }

}); 

card.addEventListener('click', (e) => {
  //e.preventDefault();
  card.classList.toggle('toggleCard');
  checkCards(e);
       
});

 //Emparejar cartas
const checkCards = (e) => {

  const clicked_cards = e.target;
  clicked_cards.classList.add('flipped'); //esta clase solo sirve para validar

  const flipped_cards = document.querySelectorAll('.flipped');
  //const toggle_cards = document.querySelectorAll('div.toggleCard');
  //lógica de validación
  if(flipped_cards.length === 2){//se valida las 2 cartas elegidas
    if(flipped_cards[0].getAttribute('id') === flipped_cards[1].getAttribute('id')){
      console.log('match')
      flipped_cards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      })
    } else {
      console.log('wrong')
      flipped_cards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'),1000);
      })
    }
  }
}

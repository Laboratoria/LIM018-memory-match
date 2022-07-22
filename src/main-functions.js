import Head from './components/Head.js';
import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
import Modal from './components/Modal.js';

//import Start from './components/Start.js';

//const root = document.getElementById('root');
let cards;

//Emparejar cartas
export const checkCards = (e) => {
  
  const clicked_cards = e.target;
  clicked_cards.classList.add('flipped'); //esta clase solo sirve para validar

  const flipped_cards = document.querySelectorAll('.flipped');
  const toggle_cards = document.querySelectorAll('.card.toggleCard');
  let cards_match;
  //lógica de validación
  if (flipped_cards.length === 2) {//solo se selecionan 2 cartas
    cards_match = flipped_cards[0].getAttribute('id') === flipped_cards[1].getAttribute('id'); //se valida las 2 cartas seleccionadas
    if (cards_match) {
      //console.log('match')
      flipped_cards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      })
    } else {
      //console.log('wrong')
      flipped_cards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 1000);
      })
    }
  }

  //console.log(toggle_cards.length)
  if (toggle_cards.length === 2 && cards_match) {
    root.appendChild(Modal('Ganaste esta partida. ¡Volver a jugar!'));
    const btn_modal_ok = root.querySelector('.ok-btn');
    btn_modal_ok.addEventListener('click', (event) => {
      event.preventDefault();
      //play(root, input_name); //no funciona mostrar el 
      root.classList.remove('popup-overlay'); //pensar primero en el usuario
      root.innerHTML = "";
      //root.appendChild(Start());
      play(); //no funciona
    })

  }
}
//empezar a jugar 
export const play = (root, input_name) => {
  
  root.innerHTML = "";
  // debugger;
  root.appendChild(Head(input_name));
  root.appendChild(App(pokemon.items));
  cards = root.querySelectorAll('.card'); // Nodelist que funciona como un array de elementos 
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      checkCards(e);
    })
  })



}
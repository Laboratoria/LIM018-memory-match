import Head from './components/Head.js';
import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
import Modal from './components/Modal.js';

let cards;

export const checkCards = (e, root, input_name) => { //Emparejar cartas
  const clicked_cards = e.target;
  clicked_cards.classList.add('flipped'); //esta clase solo sirve para validar

  const flipped_cards = document.querySelectorAll('.flipped');
  const toggle_cards = document.querySelectorAll('.card.toggleCard');
  let cards_match;

  if (flipped_cards.length === 2) { //lógica de validación
    cards_match = flipped_cards[0].getAttribute('data-id') === flipped_cards[1].getAttribute('data-id'); //se valida las 2 cartas seleccionadas
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
  const all_cards = 2;
  if (toggle_cards.length === all_cards && cards_match) {
    root.appendChild(Modal('Ganaste esta partida. ¡Volver a jugar!'));
    //debugger;
    let btn_modal_ok = root.querySelector('.ok-btn');
    btn_modal_ok.addEventListener('click', function () {
      root.classList.remove('popup-overlay'); //pensar primero en el usuario
      play(root, input_name);
    })

  }
}

export const play = (root, input_name) => { //empezar a jugar 
  root.innerHTML = "";
  // debugger;
  root.appendChild(Head(input_name));
  root.appendChild(App(pokemon.items));
  cards = root.querySelectorAll('.card'); // Nodelist que funciona como un array de elementos 
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      checkCards(e, root, input_name);
    })
  })
}

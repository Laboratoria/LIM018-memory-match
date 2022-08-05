import Head from './components/Head.js';
import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
import Modal from './components/Modal.js';

let cards;

export const init_events = (root) => {
  let btn_play = root.querySelector('.btn_play');
  const input_name = root.querySelector('.input_name');
  btn_play.addEventListener('click', function () {

    if (input_name.value === "") {
      const text_name = 'Escribe tu nombre'
      const modal_name = root.appendChild(Modal(text_name));
      let btn_modal_ok = root.querySelector('.ok-btn');
      btn_modal_ok.addEventListener('click', function () {
        modal_name.classList.remove('popup-overlay'); //pensar primero en el usuario
        modal_name.innerHTML = "";

      })
    } else {
      drawCards(root, input_name);

    }

  })
}

export const drawCards = (root, input_name) => { //empezar a jugar 
  root.innerHTML = ""; // debugger;
  root.appendChild(Head(input_name));
  root.appendChild(App(pokemon.items));
  play(root, input_name);
}

export const play = (root, input_name) => {

  cards = root.querySelectorAll('.card'); // Nodelist que funciona como un array de elementos 

  cards.forEach((card) => {

    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      checkCards(e, root, input_name);

    })
  })
}

export const checkCards = (e, root, input_name) => { //Emparejar cartas

  const clicked_cards = e.target; //cada e.target se añade la clase 
  clicked_cards.classList.add('flipped'); //esta clase solo sirve para validar

  const flipped_cards = document.querySelectorAll('.flipped'); //nodeList de la clase flipped
  const toggle_cards = document.querySelectorAll('.card.toggleCard'); //nodeList de las cartas volteadas
  let cards_match;

  if (flipped_cards.length === 2) { //lógica de validación

    cards_match = flipped_cards[0].getAttribute('data-id') === flipped_cards[1].getAttribute('data-id'); //se valida las 2 cartas seleccionadas
    if (cards_match) {
      //console.log('match')

      flipped_cards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      })
    }
    else {
      //console.log('wrong')

      flipped_cards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 1000);
      })

    }
  }
  endGame(root, input_name, toggle_cards, cards_match)
  //console.log(toggle_cards.length)

}


export const endGame = (root, input_name, toggle_cards, cards_match) => {
  const all_cards = 18;
  if (toggle_cards.length === all_cards && cards_match) {
    const text_winner = 'Ganaste esta partida. ¡Volver a jugar!'
    root.appendChild(Modal(text_winner));
    //debugger;
    let btn_modal_ok = root.querySelector('.ok-btn');
    btn_modal_ok.addEventListener('click', function () {
      root.classList.remove('popup-overlay'); //pensar primero en el usuario
      drawCards(root, input_name);
    })

  }
}
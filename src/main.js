import Start from './components/Start.js';
import Head from './components/Head.js';
import App from './components/App.js';
import Modal from './components/Modal.js';

const root = document.getElementById('root'); //hizo la magia (comprendido) 

const start = root.appendChild(Start());


const btn_play = root.querySelector('.btn_play');
const input_name = root.querySelector('.input_name');

let cards;

btn_play.addEventListener('click', (event) => {
  //console.log("hola")
  event.preventDefault();
  

  if (input_name.value === "") {

    const modal_name = root.appendChild(Modal('escribe tu nombre'));
    const btn_modal_ok = root.querySelector('.ok-btn');
    btn_modal_ok.addEventListener('click', (event) => {
      event.preventDefault();
      modal_name.innerHTML = "";
      modal_name.classList.remove('popup-overlay');

    })
  } else {
    root.innerHTML = "";
    // debugger;
    
    root.appendChild(Head(input_name));
    root.appendChild(App());
    cards = root.querySelectorAll('.card'); // Nodelist que funciona como un array de elementos 
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
      })
    })

  }

})


//Emparejar cartas
const checkCards = (e) => {

  const clicked_cards = e.target;
  clicked_cards.classList.add('flipped'); //esta clase solo sirve para validar

  const flipped_cards = document.querySelectorAll('.flipped');
  const toggle_cards = document.querySelectorAll('.card.toggleCard');
  //lógica de validación
  if (flipped_cards.length === 2) {//se valida las 2 cartas elegidas
    if (flipped_cards[0].getAttribute('id') === flipped_cards[1].getAttribute('id')) {
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
  if (toggle_cards.length === 18) {

    root.appendChild(Modal('ganaste esta partida'));
    const btn_modal_ok = root.querySelector('.ok-btn');
    btn_modal_ok.addEventListener('click', (event) => {
      event.preventDefault();
      restart();

    })

  }
}

const restart = () => {
  root.innerHTML = "";
    // debugger;
    
    root.appendChild(Head(input_name));
    root.appendChild(App());
    cards = root.querySelectorAll('.card'); // Nodelist que funciona como un array de elementos 
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
      })
    })

}
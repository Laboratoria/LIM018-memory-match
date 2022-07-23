import Start from './components/Start.js';
import Modal from './components/Modal.js';
import { play } from './main-functions.js'

const root = document.getElementById('root'); //hizo la magia (comprendido) 

root.appendChild(Start());

let btn_play = root.querySelector('.btn_play');
const input_name = root.querySelector('.input_name');

btn_play.addEventListener('click', function () {
  if (input_name.value === "") {
    const modal_name = root.appendChild(Modal('Escribe tu nombre'));
    let btn_modal_ok = root.querySelector('.ok-btn');
    btn_modal_ok.addEventListener('click', function () {
      modal_name.classList.remove('popup-overlay'); //pensar primero en el usuario
      modal_name.innerHTML = "";
      
    })
  } else {
    play(root, input_name);

  }

})

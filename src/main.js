import Start from './components/Start.js';
import Head from './components/Head.js';
import App from './components/App.js';

const root = document.getElementById('root'); //hizo la magia (comprendido) 


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
 


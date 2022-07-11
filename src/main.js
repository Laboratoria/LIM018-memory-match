import Start from './components/Start.js';
//import App from './components/App.js';
import Data from './components/Data.js';

const root = document.getElementById('root'); //hizo la magia
root.appendChild(Start());
console.log(Start());
//innetHTML = ""; borro el contenido (a Root), sobreescribo Data
//limpiar la página y añadir el componente
//document.getElementById('root').appendChild(App());


const btn_play = root.querySelector('.btn_play');
const input_name = root.querySelector('.input_name');

btn_play.addEventListener('click', (event) => {
  event.preventDefault();

  ///let name_player = input_name.value;
  if(input_name.value===""){
   //window.prompt("Escribe tu nombre para empezar a jugar");
   //message.innerText = "Escribe tu nombre para jugar";
   alert('Escribe tu nombre para empezar a jugar');
    
  } else {
   root.innerHTML = ""; 
   //Header 
   root.appendChild(Data());

   
  }

 });



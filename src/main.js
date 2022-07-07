// import Start from './components/Start.js';
import App from './components/App.js';
// import final from './components/final.js';
 import Data from './components/Data.js';
// document.getElementById('root').appendChild(Start());
// document.getElementById('root').appendChild(App());
//document.getElementById('root').appendChild(Data());

let root = document.getElementById('root');//el contenedor general de nuestra aplicación



const div_container_play = document.createElement('div'); //Div donde se dibujan las cartas
div_container_play.className= "div_container_play";//padre de las cartas
div_container_play.innerHTML = Data();//escribo sobre el div contenedor div_container_play

// console.log(div_container_play);
root.appendChild(div_container_play);

//-------------//al hacer inner al root con finaldeljuego reemplazo todo el root
// let finalDelJuego = document.createElement('div');
// finalDelJuego.innerHTML = "vuelve a intentarlo";
// finalDelJuego.innerHTML = final();
// root.appendChild(finalDelJuego);
//import Start from './components/Start.js';
//import App from './components/App.js';
import Data from './components/Data.js';
//document.getElementById('root').appendChild(Start());
//document.getElementById('root').appendChild(App());
//document.getElementById('root').appendChild(Data());

let container_general = document.getElementById('root');
//Div donde se dibujan las cartas
const div_container_play = document.createElement('div');
div_container_play.innerHTML = Data();

container_general.appendChild(div_container_play);

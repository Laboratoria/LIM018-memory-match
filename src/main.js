import Start from './components/Start.js';
import { init_events } from './main-functions.js';

const root = document.getElementById('root'); //hizo la magia (comprendido) 

root.appendChild(Start());

init_events(root);



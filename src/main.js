import Start from './components/Start.js';
import Head from './components/Head.js';
import App from './components/App.js';

const root = document.getElementById('root'); //hizo la magia-comprendido 

//consitas que aprendí con David Granados = variable espacio de memoria en el navegador
//Es estratégico guardar nodos dentro de una variable... pues cuando borramos el contenido con innerHTML = "" (se borra todo lo que se escribe en el DOM, pero no que se almacena en las variables)
//También aprendí debbuger con la consola (que son como los breakpoint), cuando está en verde esa línea no se ha ejecutado aún (debagger).
//puedo crear las ramas para hacer cambios e ir probando 
//para salir de una rama solo es necesario hacer git commit 
//para borrar una rama: git branch -D prueba

//root.appendChild(Start());
root.appendChild(App());
//console.log(Start());
//innetHTML = ""; borro el contenido (a Root), sobreescribo Data
//limpiar la página y añadir el componente

/* const btn_play = root.querySelector('.btn_play');
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
 */


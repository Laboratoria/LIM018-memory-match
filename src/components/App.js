//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import pokemon from '../data/pokemon/pokemon.js';
//console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//


import webdev from '../data/webdev/webdev.js';
console.log(webdev.items);

  const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

 const board = document.createElement('div')

 board.className = 'board'
 el.appendChild(board)


 let items = webdev.items
 for(let i=0; i<items.length; i++){
  let iconos = items[i].image
  let iconoCards = document.createElement('img');
  iconoCards.className = 'estiloCards'
  iconoCards.src = iconos
 
  board.appendChild(iconoCards)
 }

 

  
  return el;
};

export default App;

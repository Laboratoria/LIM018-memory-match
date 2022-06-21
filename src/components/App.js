//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);

import webdev from '../data/webdev/webdev.js' // importo la data de webdev
//console.log(webdev)
//console.log(webdev.items[0])
//console.log(webdev.items[0].image)

//----
let itemss = webdev.items 
for (let i=0; i<itemss.length; i++) {
  let imagen = itemss[i].image
  console.log(imagen)
    //console.log(items[i])
}
//---

//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  //el.textContent = 'Hola mundo!';

  //---
  const divCartas = document.createElement('div')

  divCartas.className = 'divCartas'
  el.appendChild(divCartas)

  let items = webdev.items
  let dobleItems = items.slice()
  console.log(dobleItems)
  for (let i=0; i<items.length; i++) {
    let imagen = items[i].image
    //console.log(typeof(imagen))
    let imgCartas = document.createElement('img')
    imgCartas.className = 'estiloCartas'
    imgCartas.src = imagen  // accedemos a la url de la etiqueta img
    divCartas.appendChild(imgCartas)
  }

  //let imgCartas = document.createElement('img')
  //imgCartas.src = items[0].image
 // el.appendChild(imgCartas)




  return el;
};


export default App;

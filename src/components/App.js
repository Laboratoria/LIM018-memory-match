//import pokemon from '../data/pokemon/pokemon.js';
//Un componente siempre devuelve un elemento, no un string
const App = (arr) => {
  const myArr = arr.concat(arr).sort(() => Math.random() - 0.5); //duplicar cartas y barajar
  const div_box = document.createElement('div'); //Dibujar cartas 
  div_box.classList = 'div_box';

  myArr.forEach((item) => {
    const card = document.createElement('div');
    card.classList = 'card'; //variable que almacena la carta 
    card.setAttribute('data-id', item.id);

    const face = document.createElement('div');
    const img_pokemon = document.createElement('img');
    img_pokemon.classList = 'img_pokemon';
    const text_pokemon = document.createElement('span');
    text_pokemon.classList = 'text_pokemon';
    face.classList = 'face';
    img_pokemon.src = item.image;
    face.style.background = item.bgColor;
    text_pokemon.textContent = item.id.charAt(0).toUpperCase() + item.id.slice(1);
    face.appendChild(img_pokemon);
    face.appendChild(text_pokemon);
    face.classList.toggle('toggleCard');

    const back = document.createElement('div');
    back.classList = 'back';

    card.appendChild(face);
    card.appendChild(back);
    div_box.appendChild(card);

  });

  return div_box;
}

export default App;

// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import pokemon from '../data/pokemon/pokemon.js';
//console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//const root = document.getElementById('root');
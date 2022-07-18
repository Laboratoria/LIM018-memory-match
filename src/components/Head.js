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

const Head = (input_name) => {

  const head = document.createElement('div');
  head.className = 'head';

  const img_title_table = document.createElement('img');
  img_title_table.className = 'img_title_table';
  img_title_table.src = '../img/title.png';
  img_title_table.alt = 'title_table';
  head.appendChild(img_title_table);

  const input_name_player = document.createElement('div');
  input_name_player.className = 'input_name_player';
  input_name_player.innerText = `Jugador: ${input_name.value.charAt(0).toUpperCase() + input_name.value.slice(1)}`;
  head.appendChild(input_name_player);

  return head;

};

export default Head;

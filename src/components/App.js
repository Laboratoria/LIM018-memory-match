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

const App = () => {
  const div_end = document.createElement('div');
  div_end.className = 'div_end'
  const input_name = document.createElement('input');
  input_name.className = 'input_name';
  input_name.placeholder = "Escribe tu nombre";
  const btn_play = document.createElement('button');
  btn_play.className = 'btn_play';
  const btn_text = document.createTextNode('Jugar')
  btn_play.appendChild(btn_text);
  div_end.appendChild(input_name);
  div_end.appendChild(btn_play);
 
  /* end.className = 'App';
  end.textContent = 'Soy Jackie!'; */

  return div_end;
  //return `${inputName}` + `${btn_play}`;
};

export default App;

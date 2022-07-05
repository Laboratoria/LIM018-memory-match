
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.

// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

const App = () => {
  // Dibujar aquí el tablero
  
//     const div_titlePoke = document.createElement('div');
//     div_titlePoke.id = ('div_titlePoke');
//     div_titlePoke.className = ('div_titlePoke');
//     boardContainer('div_titlePoke');

//     const titlePoke = document.createElement('h1');
//     titlePoke.id = ('title');
//     titlePoke.className =('title');
//     titlePoke.innerText =('POKEMON MATCH');
//     boardContainer.appendChild(titlePoke);
    
//     const gameBoard =  document.createElement('div');
//     gameBoard.id = ('gameBoard');
//     gameBoard.className = ('poke');
//     boardContainer.appendChild('gameBoard');
  
//    const div_pokemon = document.createElement('div');
//     div_pokemon.className= 'poke';
//     div_pokemon.innerHTML = Data()
//     gameBoard.appendChild(div_pokemon);//
//     div_contenedor.appendChild( gameBoard);

     

};

export default App;

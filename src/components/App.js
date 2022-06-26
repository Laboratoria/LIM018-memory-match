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
  input_name.placeholder = "Escribe tu nombre";
  input_name.className = 'input_name';
  
  const btn_play = document.createElement('button');
  btn_play.className = 'btn_play';
  const btn_text = document.createTextNode('Jugar')
  
  const message = document.createElement('span');

  btn_play.appendChild(btn_text);
  div_end.appendChild(input_name);
  div_end.appendChild(btn_play);
  div_end.appendChild(message);

  btn_play.addEventListener("click", (event) => {
    event.preventDefault();
    //let name = input_name.value;
    if(input_name.value===""){
      
      message.innerText = "Escribe tu nombre para jugar";
      //alert("Escribe tu nombre para empezar a jugar");
      
    } else {
      
      message.innerText = `Vamos a jugar ${input_name.value}!!!`;
      //alert(input_name.value);
    }
  })
  


  /* end.className = 'App';
  end.textContent = 'Soy Jackie!'; */

  return div_end;
  //return `${inputName}` + `${btn_play}`;
};

export default App;

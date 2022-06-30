//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';

// importo la data de webdev
import webdev from '../data/webdev/webdev.js' 
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

//------Duplicar data 
let arrayWebdev = webdev.items
let arrayDoble = arrayWebdev.concat(arrayWebdev)
//console.log(arrayDoble)

//------Funcion mezclar cartas Fisher-Yates
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) { // Bucle para pasar por todos los elementos del array, empezando desde el ultimo elemento.
    let j = Math.floor(Math.random() * (i + 1)) // El metodo Math.random() devuele un numero aleatorio entre el 0 y 1, Math.floor devuelve el maximo entero menor o igual a un numero (si es 5.99 devolvera 5)
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
//let arrayExam = ['carro','dos','tres','cuatro','cinco','seis']
//console.log(shuffle(arrayExam))

let arrayRandom = shuffle(arrayDoble)
//console.log(arrayRandom)

//----- Creando etiquetas div y img

const divCard = document.createElement('div')
divCard.className = 'divCartas'

arrayRandom.forEach(element => {
  let imgCard = element.image
  //console.log(imagenesCartas)
  let divIcons = document.createElement('img')
  divIcons.src = imgCard
  divIcons.className = 'estiloCartas'
  
  divCard.appendChild(divIcons)
//console.log(imagenesCartas)
})

//---------
const usuario = (nombre) => {
  let usuarioId = prompt('Ingresa tu nombre')
  let usuario = document.getElementById('usuario')
  usuario.innerHTML = usuarioId

  return  usuario
}


/*function usuario() {
  //let botonAJugar = document.getElementById('botonAJugar')

  //.addEventListener ('click', () =>{
    let usuarioId = document.getElementById('userName').value
    let usuario = document.getElementById('usuario')
    usuario.innerHTML = usuarioId
  //})
}*/

//--------
const App = () => {
  const el = document.createElement('div');
  //el.textContent = 'Hola mundo!';
  //return el;
  
  el.appendChild(divCard)

  usuario()

  return el;
};

export default App;

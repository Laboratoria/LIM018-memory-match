//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
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
/*const App = () => {
  const el = document.createElement('div');
  //el.textContent = 'Hola mundo!';
  //return el;
  
  el.appendChild(divCard)

  usuario()
  return el;
 
};
export default App;*/




//-----Iniocio de Memory Match

import webdev from '../data/webdev/webdev.js';
console.log(webdev.items);

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  //el.textContent = 'Hola mundo!';

  //saludo usuario
  document.addEventListener("click", function(){
    let nombre = document.querySelector('#nombre').value
    document.getElementById("usuario").innerHTML = 'Hola ' + nombre;
  });    

  //crear tablero 
  let cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard'
  el.appendChild(cardBoard)  

  let webdevArray = webdev.items
  let dobleItems = webdevArray.concat(webdevArray)

  // Barajar cartas
  dobleItems = dobleItems.sort(()=>{return Math.random()-0.5});
  console.log(dobleItems);

  // mostrar imagenes en tablero 
  dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image

    let memoryCard = document.createElement('div');
    memoryCard.className = 'memoryCard'
    cardBoard.appendChild(memoryCard)
  
    let divIconos = document.createElement('img');
    divIconos.className ='front-face' 
    divIconos.src = imagenesCartas
    memoryCard.appendChild(divIconos)

    let divIconos2 = document.createElement('img');
    divIconos2.className ='back-face' 
    divIconos2.setAttribute ('src', '../imagenes/carta tapada.jpg');
    memoryCard.appendChild(divIconos2)
  });

  
  return el;
 
};

//console.log(typeof(App))
export default App;














/*
    function checkForMarch(){
      let isMatch = firstCard.dataset.card === secondCard.dataset.card;
      !isMatch ? disableCards():true;
    }

    function disableCards(){
      lockCard = true;

      setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
      }, 1000);  
    }
    

    function resetCards(isMatch = false){
      if (isMatch){
        firstCard.removeEvenListener('click', flipCard);
        secondCard.removeEvenListener('click', flipCard);
      }
       [firstCard,secondCard,lockCard] = [null, null, false];   
    }*/








/*

let mostrarMoves = document.getElementById('moves');
  let mostrarScore = document.getElementById('score');

    // crear tablero 
    const cardBoard = document.createElement('div');
    cardBoard.className = 'cardBoard'
    el.appendChild(cardBoard)
    
    
    // mostrar imagenes en tablero 

    let webdevArray = webdev.items
    let dobleItems = webdevArray.concat(webdevArray)
      //console.log(dobleItems)

    dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image
    let divIconos = document.createElement('img')
        divIconos.setAttribute ('src', '../imagenes/carta tapada.jpg')
        divIconos.className ='estiloCartas'
        divIconos.src = imagenesCartas
        divIconos.addEventListener('click', destapar)
        divCartas.appendChild(divIconos)

      });

    */
  

  



    /*cardBoard.innerHTML = cardHTML + cardHTML;

    const cards = document.querySelectorAll('.memory-card');
      let = firstCard, secondCard;
      let lockCard = false;

    function flipCard(){
      if(lockCard) return false;
      this.classList.add('flip');

      if(!firstCard){
        firstCard = this; 
        return false;
      }
      secondCard = this;
    }
    function checkForMarch(){
      let isMatch = firstCard.dataset.card === secondCard.divCartas.card;
      !isMatch ? disableCards():true;
    }

    function disableCards(){
      lockCard = true;
      setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
      }, 1000);  
    }

    function resetCards(isMatch = false){
      if (isMatch){
        firstCard.removeEvenListener('click', flipCard);
        secondCard.removeEvenListener('click', flipCard);
      }
       [firstCard,secondCard,lockCard] = [null, null, false];   
    }
       cards.forEach(card => card.addEventListener('click',flipCard));




/* let tarjetasDestapadas = 0;
    let tarjeta1 = null;
    let tarjeta2 = null; 
    let primerResultado = null;
    let segundoResultado = null;
    let moves = 0;
    let score = 0;
        
  //dar vuelta a las tarjetas
    function destapar(id){
      tarjetasDestapadas++;
      console.log(tarjetasDestapadas);

      if(tarjetasDestapadas==1){
  //mostrar primera tarjeta
         tarjeta1 = document.getElementById(id);
         primerResultado = dobleItems[id]
         tarjeta1.innerHTML = primerResultado;

  //deshabilitar primer boton
        tarjeta1.disabled = true;
        }else if (tarjetasDestapadas ==2){
  //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = dobleItems[id];
        tarjeta2.innerHTML = segundoResultado;

   //deshabilitar segundo boton
        tarjeta2.disabled = true;

  // incrementar movimientos
        movimientos++;
        mostrarMoves.innerHTML = `Moves:${moves}`;
            
      if (primerResultado == segundoResultado){
  //Encerar contador tarjetas destapadas
          tarjetasDestapadas = 0;

  //Aumentar score
        score++;
        mostrarScore.innerHTML = `Score:${score}`;

            }

          };
          
        }*/


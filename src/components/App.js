//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import data from '../data/pokemon/pokemon.js';
import  '../components/timer.js';

//console.log(data);
const itemsPokemon = data.items;
const dobleitems = [];
const mensaje = document.getElementById("mensaje");
const puntaje = document.getElementById("puntos");
const lives = document.getElementById("vidas");
let selecciones =[];
let score = 0;
let counterLife = 15;

//const barajar = document.getElementById("barajar");


  for(let i=0; i<itemsPokemon.length ; i++ ){
    dobleitems.push (itemsPokemon[i], itemsPokemon[i]);
  }

function shuffle (dobleitems){    // Función para barajar cartas y desordenarlas
  return dobleitems.sort(()=>{return Math.random()-0.5})  //utilizamos sort para desordenar los 18 items mediante el método math.random
}

const createCards = () => {
  const areaCarta = document.getElementById("areaCarta");

  shuffle(dobleitems).forEach(function(item){
    //Creando div "tarjeta"
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.setAttribute("data-pokemonid",`${item.id}`);
    areaCarta.appendChild(tarjeta);

    //Creando div "cara posterior"
    const caraPosterior = document.createElement("div");
    caraPosterior.className = "cara posterior";
    caraPosterior.setAttribute("id", "posterior");
    //Creando variable para presentar imagen de pokemon
    const imagePokemon = document.createElement("img");
    imagePokemon.src = `${item.image}`;
    caraPosterior.appendChild(imagePokemon);

    //Creando div "cara superior"  
    const caraSuperior = document.createElement("div");
    caraSuperior.className = "cara superior";
    //Creando variable para presentar imagen de signo de interrogación
    const imagePregunta = document.createElement("img");
    imagePregunta.src = "./img/signo-de-interrogacion.png";
    caraSuperior.appendChild(imagePregunta);

    tarjeta.appendChild(caraPosterior);
    tarjeta.appendChild(caraSuperior);

  });

  const tarjetas = document.querySelectorAll(".tarjeta");
 
  
  //console.log(e.currentTarget.dataset.pokemonid)
  
  const flipCards = function (tarjetas) {
    tarjetas.style.transform = "rotateY(180deg)";
    selecciones.push(tarjetas);
    const selectLength= selecciones.length
    
    if (selectLength == 2){
    deseleccionar(selecciones);
    winner(selecciones);
    counterLives(selecciones);
      selecciones = [];
    }

    function deseleccionar(selecciones) {
      setTimeout(()=> {
          if (selecciones[0].dataset.pokemonid != selecciones[1].dataset.pokemonid){
            selecciones[0].style.transform = "rotateY(0deg)";
            selecciones[1].style.transform = "rotateY(0deg)";
          }
        },1100);
      }

    function winner(selecciones){
      if (selecciones[0].dataset.pokemonid == selecciones[1].dataset.pokemonid){
        score +=100
        puntaje.innerHTML = `${score}`
        if(score == 900) {
        const win = document.createElement ("div");
        win.className = "ganador"
        win.textContent = "Ganaste"
        mensaje.appendChild(win);

        }
      }
    }

    function counterLives(selecciones){
      if(selecciones[0].dataset.pokemonid != selecciones[1].dataset.pokemonid){
        counterLife--
        console.log(counterLife)
        lives.innerHTML = `${counterLife}`
      }
    }

  }

  for(let i=0; i<tarjetas.length ; i++ ){
    tarjetas[i].addEventListener("click",function () {
      return flipCards(tarjetas[i]);
      });
    
  }


 

 
  
 
}

export default createCards;


//console.log(createCards())

/*function () {
  return filpCards(tarjetas[i]);
  }*/

   /*barajar.addEventListener("click", ()=>{
      tarjetas[i].removeEventListener("click",flipCards)
    } )*/
  
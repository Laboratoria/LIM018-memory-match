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
const dobleitems = []
const mensaje = document.getElementById("mensaje")
const puntaje = document.getElementById("puntos")
const barajar = document.getElementById("barajar")


for(let i=0; i<itemsPokemon.length ; i++ ){
  dobleitems.push (itemsPokemon[i])
  dobleitems.push (itemsPokemon[i])

}
//console.log(dobleitems)


function shuffle (dobleitems){    // Función para barajar cartas y desordenarlas
  return dobleitems.sort(()=>{
    return Math.random()-0.5})  //utilizamos sort para desordenar los 18 items mediante el método math.random
}



const createCards = () => {
  const areaCarta = document.getElementById("areaCarta")
  shuffle(dobleitems).forEach(function(item){
    //console.log(item)
    areaCarta.innerHTML +=
     `<div class="tarjeta"  data-pokemonid="${item.id}"> 
    <div class="cara posterior" id="posterior"> <img src ='${item.image}' width ="80px" heigth="80px" >  </div>
    <div class="cara superior">
    <img src="./img/signo-de-interrogacion.png" width = "80px" heigth="80px">
    </div>
    </div>`
  })
  const tarjetas = document.querySelectorAll(".tarjeta");
  let selecciones =[];
  let score = 0;
  //console.log(tarjetas)
  for(let i=0; i<tarjetas.length ; i++ ){
    tarjetas[i].addEventListener("click", (e) =>{
      tarjetas[i].style.transform = "rotateY(180deg)";
      selecciones.push(tarjetas[i])
      //console.log(e.currentTarget.dataset.pokemonid)
      //console.log(selecciones)
      const selectLength= selecciones.length
      if (selectLength == 2){
      deseleccionar(selecciones)
      winner(selecciones)
        selecciones = []
        //console.log(selecciones)
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
    })
  }
  barajar.addEventListener("click", () => {
    //tarjetas.style.transform = "rotateY(180deg)";
    shuffle(dobleitems);
  })
}
export default createCards; shuffle;


//console.log(createCards())
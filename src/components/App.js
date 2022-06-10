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
//console.log(data);
const itemsPokemon = data.items;
const dobleitems = []


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
  const tarjet = document.getElementById("areaCarta")
  shuffle(dobleitems).forEach(function(item){
    //console.log(item)
    tarjet.innerHTML += `<div class="tarjeta"  data-pokemonid="${item.id}"> 
    <div class="cara posterior" id="posterior"> <img src ='${item.image}' width ="80px" heigth="80px" >  </div>
    <div class="cara superior">
    <img src="./img/signo-de-interrogacion.png" width = "80px" heigth="80px">
    </div>
    </div>`
  })
  const tarjetas = document.querySelectorAll(".tarjeta");
  let selecciones =[]
  //console.log(tarjetas)
  for(let i=0; i<tarjetas.length ; i++ ){
    tarjetas[i].addEventListener("click", (e) =>{
      tarjetas[i].style.transform = "rotateY(180deg)";
      selecciones.push(tarjetas[i])
      //console.log(e.currentTarget.dataset.pokemonid)
      console.log(selecciones)
      const selectLength= selecciones.length
      if (selectLength == 2){
        if (selecciones[0].dataset.pokemonid != selecciones[1].dataset.pokemonid){
          //setTimeout((selecciones)=> {
          selecciones[0].style.transform = "rotateY(0deg)";
          selecciones[1].style.transform = "rotateY(0deg)";
          //},1000);
        }

        selecciones = []
        console.log(selecciones)
      }
    })
    
   /* function deseleccionar(selecciones) {
      setTimeout(()=> {
        let posterior1= document.getElementById("posterior" + selecciones[0]);
        let posterior2= document.getElementById("posterior" + selecciones[1]);
        if (posterior1 != posterior2){
          let tarjeta1= document.querySelector(".tarjeta" + selecciones[0]);
          let tarjeta2= document.querySelector(".tarjeta" + selecciones[1]);
          tarjeta1.style.transform="rotateY(0deg)";
          tarjeta2.style.transform="rotateY(0deg)";
        }
      },1000)
    }*/
   
   
  }
    
    
  

  /*let selecciones 
 function seleccionartarjeta (i) {
    let tarjeta = document.getElementById(`tarjeta ${i}`)
      selecciones.push(i)
      console.log(selecciones)
  }
  if (selecciones.length ==2) {
    deseleccionar(selecciones)
    selecciones = []
  }*/


  
  
}

export default createCards;
console.log(createCards())
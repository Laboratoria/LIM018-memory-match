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


dobleitems.sort(()=> {return Math.random()-0.5})
console.log(dobleitems)

const createCards = () => {
  const tarjet = document.getElementById("areaCarta")
  dobleitems.forEach(function(item){
    //console.log(item)
    tarjet.innerHTML += `<div class ="tarjeta" > 
    <div class="cara posterior"> ${item.id} <img src ='${item.image}' >  </div>
    <div class="cara superior"></div>
    </div>`
    //tarjet.className = 'cara superior';
    //el.textContent = 'Hola mundo!';
  })
  //return itemsPokemon
  let selecciones 
 function seleccionartarjeta (i) {
    let tarjeta = document.getElementById(`tarjeta ${i}`)
    if (tarjeta.style.transform != "rotateY(180deg)")
      tarjeta.style.transform == "rotateY(180deg)"
      selecciones.push(i)
      console.log(selecciones)
  }
  if (selecciones.length ==2) {
    deseleccionar(selecciones)
    selecciones = []
  }
  
}

export default createCards;
console.log(createCards())
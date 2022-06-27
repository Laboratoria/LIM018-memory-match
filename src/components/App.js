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
//


import webdev from '../data/webdev/webdev.js';
console.log(webdev.items);

  const App = () => {
  const el = document.createElement('div');
    el.className = 'App';
  //el.textContent = 'Hola mundo!';

  /*saludo usuario
  
  function saludo(click){
    var usuario= document.getElementById('usuario');
    var username = usuario.value;

  }*/

  //crear tablero 
   /* const cardBoard = document.createElement('#cardBoard');
    el.appendChild(cardBoard)
    
   
    let webdevArray = webdev.items
    let dobleItems = webdevArray.concat(webdevArray)
    console.log(dobleItems)
    let cardHTML = '';
    dobleItems.forEach(img => {
      cardHTML += `
      <div class='memory-card'>
       <img class="front-face" src="dobleItems/${img}">
       <img class="back-face" src="imagenes/carta tapada.jpg">
      </div>
      `;
    });

    cardBoard.innerHTML = cardHTML;

*/









  let webdevArray = webdev.items
  let dobleItems = webdevArray.concat(webdevArray)
  let tarjetasDestapadas = 0;
  let tarjeta1 = null;
  let tarjeta2 = null; 
  let primerResultado = null;
  let segundoResultado = null;
  let moves = 0;
  let score = 0;


      //crear tablero 
    const divCartas = document.createElement('div')
    divCartas.className = 'divCartas'
    el.appendChild(divCartas)
    let mostrarMoves = document.getElementById('moves');
    let mostrarScore = document.getElementById('score');

     // algoritmo de Fisher Yates / barajar cartas
     dobleItems = dobleItems.sort(()=>{return Math.random()-0.5});
     console.log(dobleItems);

     // mostrar imagenes en tablero 
      dobleItems.forEach(mostrarCartas => {
      let imagenesCartas = mostrarCartas.image
      let divIconos = document.createElement('img')
          divIconos.setAttribute ('src', '../imagenes/carta tapada.jpg')
          divIconos.className ='estiloCartas'
          divIconos.src = imagenesCartas
          divIconos.addEventListener('click', destapar)
          divCartas.appendChild(divIconos)
    
    });
        
        

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
          
        }





  
  return el;
};

console.log(typeof(App))
export default App;

//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon.items);

const App = () => {
 















    // const div_contenedor = document.createElement('div');
    // const div_title = document.createElement('div');

    // const title = document.createElement("h1");
    // title.className = 'title';
    // title.innerText = "MEMORY MATCH";
    // div_title.appendChild(title);
    // const sub_title = document.createElement("h2");
    // sub_title.className = 'sub_title';
    // sub_title.innerText = "Bienvenidos";
    // div_title.appendChild(sub_title);
    
    // const div_img_int = document.createElement("div");
    // div_img_int.className = 'div_img_int';

  
    // const img = document.createElement("img");
    // img.className = 'img';
    // img.src = "ash-pikachu.2.png";
    // img.alt = "Logo ash y pikachu";
    // div_img_int.appendChild(img);
    

    // const content = document.createTextNode(` INSTRUCCIONES 
    //  1. Debajo de cada carta hay una imagen
    //  2. Cada vez que hagas un click sobre una carta, ésta se volteará y verás la imagen que esconde.
    //  3. Ahora tendrás que buscar dicha imagen volteando otra carta. Si las imágenes son idénticas las cartas se quedarán volteadas, en otro caso se esconderán.
    //  4. Para ganar tendrás que voltear todas las cartas con sus pares.`);
    //  content.className = 'content'
    //  div_img_int.appendChild(content);                                        
    
    //  div_contenedor.appendChild(div_title);
    //  div_contenedor.appendChild(div_img_int);
   

    //  return div_contenedor ;




    //  crea un nuevo div
    // y añade contenido
    // var newDiv = document.createElement("div");
    // var newContent = document.createTextNode(` INSTRUCCIONES 
    //  1.Debajo de cada carta hay una imagen
    //  2. Cada vez que hagas un click sobre una carta, esta se volteará y verás la imagen que esconde.
    //  3. Ahora tendrás que buscar dicha imagen volteando otra carta. Si las imágenes son idénticas las cartas se quedarán volteadas, en otro caso se esconderán.
    //  4. Para ganar tendrás que voltear todas las cartas con sus pares.`);
    // newDiv.appendChild(newContent); //añade texto al div creado.
    // // // // añade el elemento creado y su contenido al DOM
    // var currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);

  
    //
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.

// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

    
  // el.className = 'App';
  // el.textcontent = 'Hola mundo';
// el.innerHTML = 'Hola mundo';

};

export default App;

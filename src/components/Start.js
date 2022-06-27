const Start = () => {
 
    const div_contenedor = document.createElement('div'); //abuelo
    const div_title = document.createElement('div');//padre1

    const title = document.createElement('h1');//hijo de div title
    title.className = 'title';
    title.innerText = 'MEMORY MATCH';
    div_title.appendChild(title);
    const sub_title = document.createElement('h2');//hijo de div title
    sub_title.className = 'sub_title';
    sub_title.innerText = 'Bienvenidos';
    div_title.appendChild(sub_title);
    
    const div_img_text = document.createElement('div');//padre2
    div_img_text.className = 'div_img_text';


    const img = document.createElement('img');//hijo de padre 2( div img int)
    img.className = 'img';
    img.src = 'ash-pikachu.2.png';
    img.alt = 'Logo ash y pikachu';
    div_img_text.appendChild(img);

    const div_text = document.createElement('div');//hijo de padre2  (div img int)
    div_img_text.appendChild(div_text);
     
     const title_text = document.createElement('h3');//hijo de div text
     title_text.className = 'title_text';
     title_text.innerText = 'INSTRUCCIONES';
     div_text.appendChild(title_text);

    
    const div_p = document.createElement('div');
    div_p.className = 'div_p';
    div_text.appendChild(div_p);
    

     const p1 = document.createElement('p1');
     p1.className = 'p1';
     p1.innerText = '1. Debajo de cada carta hay una imagen';
     div_p.appendChild(p1);
     const p2 = document.createElement('p2');
     p2.className = 'p2';
     p2.innerText = '2. Cada vez que hagas un click sobre una carta, ésta  se volteará y verás la imagen que esconde.';
     div_p.appendChild(p2);
     const p3 = document.createElement('p3');
     p3.className = 'p3';
     p3.innerText = ' 3. Ahora tendrás que buscar dicha imagen volteando otra carta. Si las imágenes son idénticas las cartas se quedarán volteadas, en otro caso se esconderán.';
     div_p.appendChild(p3);
     const p4 = document.createElement('p4');
     p4.className = 'p4';
     p4.innerText = ' 4. Para ganar tendrás que voltear todas las cartas con sus pares.';
     div_p.appendChild(p4);
     

    
     
     
     div_contenedor.appendChild(div_title);
     div_contenedor.appendChild(div_img_text);
    

     return div_contenedor ;




    

  
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

export default Start;
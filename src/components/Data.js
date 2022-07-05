import pokemon from '../data/pokemon/pokemon.js';


const Data = () => {

const arrPokemon = pokemon.items; //9
// console.log(arrPokemon); 
const newarrPokemon = arrPokemon.concat(arrPokemon);  //18
// console.log(newarrPokemon)
let tarjeta_pokemon = "";


for ( let i=0 ; i<newarrPokemon.length;i++){
  console.log(newarrPokemon[i]);
   const nombre_pokemon = newarrPokemon[i].id;
   const img_pokemon = newarrPokemon[i].image;
   const color_pokemon = newarrPokemon[i].bgColor;
    tarjeta_pokemon = `<div style= "background-color: ${color}"> <p> ${nombre}</p> <img src="${img}"></img> `
}




const div_contenedorPokemon = document.createElement('div');
const div_pokemon = document.createElement('div');
  

}


 
       
      
                          
return ;



 

export default {Data};




// div_pokemon.className= 'div_pokemon'; 
//  //creando tarjetas para imagenes pokemon
//  const tarjetaPokemon = document.createElement('div'); 
//  tarjetaPokemon.classList.add('tarjetaPokemon');//creando clase para tarjetas de pokemon
//  div_pokemon.appendChild(tarjetaPokemon);
//  // tarjetaPokemon.style.backgroundColor = newarrPokemon[i].bgColor;

//  //creando img
//  const contenedorImagen = document.createElement('img');
//  contenedorImagen.src += newarrPokemon[i].image ;
//  contenedorImagen.classList.add('imagenPokemon');
//  tarjetaPokemon.appendChild(contenedorImagen);

//  //creando div nombre pokemon
//  const contenedorNombrePokemon =  document.createElement('div');
//  contenedorNombrePokemon.classList.add('contenedorNombrePokemon');
//  contenedorNombrePokemon.innerHTML+= newarrPokemon[i].id ;
//  contenedorNombrePokemon.style.backgroundColor = newarrPokemon[i].bgColor
//  tarjetaPokemon.appendChild(contenedorNombrePokemon);
   












 







      

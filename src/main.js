import createCards from './components/App.js';


createCards();
//document.getElementById('root').appendChild(App());

//INPUT
const player = document.getElementById("player")
const nombre = document.getElementById("nombre")

//BOTONES
const vamos = document.getElementById("button")
const jugar = document.getElementById("play")
const volver = document.getElementById("back")


//SECCIONES DE PAGINA
const container = document.getElementById("container")
const secondPage = document.getElementById("second")
const game = document.getElementById("game")

vamos.addEventListener("click", () => {
    player.textContent= `Hola ${nombre.value} !`
    container.className = "disabled";
    secondPage.className= "enabled";
    
});

jugar.addEventListener("click", ()=>{
    secondPage.className= "disabled";
    game.className="enabled";
})

volver.addEventListener("click", ()=>{
    location.reload();
})


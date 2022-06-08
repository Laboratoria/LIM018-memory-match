import createCards from './components/App.js';

//document.getElementById('root').appendChild(App());

//BOTONES
const vamos = document.getElementById("button")
const jugar = document.getElementById("play")
const volver = document.getElementById("back")

//SECCIONES DE PAGINA
const container = document.getElementById("container")
const secondPage = document.getElementById("second")
const game = document.getElementById("game")

vamos.addEventListener("click", () => {
    container.className = "disabled";
    secondPage.className= "enabled";

});

jugar.addEventListener("click", ()=>{
    secondPage.className= "disabled";
    game.className="enabled";
})

volver.addEventListener("click", ()=>{
    game.className="disabled";
    container.className="enabled";
})
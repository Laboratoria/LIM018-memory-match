let segundos = 60 ;
let intervaloTiempo = 0;

const timer = document.getElementById("timer")
const mensaje = document.getElementById("mensaje")

const createTimer = () => {
    if (segundos === 0){
        stopCounter();
        setTimeout(function(){
            const perdiste = document.createElement ("div");
            perdiste.className = "perdedor";
            mensaje.appendChild(perdiste);
           perdiste.textContent = " INTÉNTALO OTRA VEZ";
        }
        ,1000);
    }
    let minutes= Math.floor(segundos/60);
    let secons =segundos - (minutes*60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (secons < 10){
        secons = '0'+secons;
    }
    const textTimer= minutes + ':' + secons;
    timer.innerText = textTimer;
    segundos --;
    return timer
}

const jugar = document.getElementById("play")
const startCounter =() =>{
    intervaloTiempo = setInterval(createTimer,1000);

}

const stopCounter =() =>{
    clearInterval(intervaloTiempo);
}

if (jugar){
    jugar.addEventListener('click', startCounter);
}



import App from './components/App.js';




document.getElementById('root').appendChild(App());

const cards = document.querySelectorAll('.memoryCard');
    let firstCard,secondCard; 
    let lockCard = false;

    function flipCard(){
      //console.log('hola')
      if(lockCard)return false;
      this.classList.add('flip');

    if (!firstCard){
        firstCard=this;
        return false;
       }

       secondCard=this;
       checkForMarch();
    }

    
    cards.forEach(card => card.addEventListener('click', flipCard))














//-------
let objetoCartas = document.getElementById('imagenes');


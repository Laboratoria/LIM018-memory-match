import pokemon from '../data/pokemon/pokemon.js';
//Un componente siempre devuelve un elemento, no un string
const App = () => {
  //array de objetos que están en pokemon.js
  //console.log(name_player);
  const arr = pokemon.items;
  //duplicar cartas y barajar
  const myArr = arr.concat(arr).sort(() => Math.random() - 0.5);
  //Dibujar cartas // 
  const div_box = document.createElement('div');
  div_box.classList = 'div_box';

  myArr.forEach((item) => {
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('id', item.id);

    const face = document.createElement('div');
    const img_pokemon = document.createElement('img');
    img_pokemon.classList = 'img_pokemon';
    const text_pokemon = document.createElement('span');
    text_pokemon.classList = 'text_pokemon';
    face.classList = 'face';
    img_pokemon.src = item.image;
    face.style.background = item.bgColor;
    text_pokemon.innerText = item.id.charAt(0).toUpperCase() + item.id.slice(1);
    face.appendChild(img_pokemon);
    face.appendChild(text_pokemon);
    face.classList.toggle('toggleCard');

    const back = document.createElement('div');
    back.classList = 'back';

    card.appendChild(face);
    card.appendChild(back);
    div_box.appendChild(card);
    //aparecen 2 eventos
    card.addEventListener('click', (e) => {
      //e.preventDefault();
      card.classList.toggle('toggleCard');
      checkCards(e);

    });
    //Emparejar cartas
    const checkCards = (e) => {

      const clicked_cards = e.target;
      clicked_cards.classList.add('flipped'); //esta clase solo sirve para validar

      const flipped_cards = document.querySelectorAll('.flipped');
      //const toggle_cards = document.querySelectorAll('div.toggleCard');
      //lógica de validación
      if (flipped_cards.length === 2) {//se valida las 2 cartas elegidas
        if (flipped_cards[0].getAttribute('id') === flipped_cards[1].getAttribute('id')) {
          //console.log('match')
          flipped_cards.forEach((card) => {
            card.classList.remove('flipped');
            card.style.pointerEvents = 'none';
          })
        } else {
          //console.log('wrong')
          flipped_cards.forEach((card) => {
            card.classList.remove('flipped');
            setTimeout(() => card.classList.remove('toggleCard'), 1000);
          })
        }
      }
    }


  });


  return div_box;
}

export default App;

import { checkCards, drawCards, drawGame } from './main-functions.js';
//import { play } from './main-functions.js'

import Start from './components/Start.js';
import Head from './components/Head.js';
import App from './components/App.js';
//import Modal from './components/Modal.js';

//jest.mock('../data/pokemon/pokemon.js');


describe('checkCards', () => {
  it('should toggle flipped class', () => {
    // DADO crear el entorno que controlo (identificar el entorno)    
    const mockEvent = {
      target: document.createElement('div') //es un objeto
    }
    checkCards(mockEvent); // CUANDO pasar la función o funciones a evaluar (el accionar)
    const result = mockEvent.target.classList.contains('flipped'); // ENTONCES escribir las pruebas que queremos que ejucte Jest - primero evaluar el entorno a testear con consolo.log()
    expect(result).toBe(true);
  })

  it('should 2 toggle cards at time', () => {

    const mockRoot = document.createElement('div');
    mockRoot.appendChild(Start());
    const mockInputName = mockRoot.querySelector('.input_name');


    drawCards(mockRoot, mockInputName);
    //console.log(mockRoot.innerHTML)
    const allCards = mockRoot.querySelectorAll('.card'); //mockear el arreglo

    const card1 = allCards[0];
    const card2 = allCards[1];

    //CUANDO    
    card1.dispatchEvent(new Event('click'));
    card2.dispatchEvent(new Event('click'));

    // ENTONCES
    const mockFlippedCards = mockRoot.querySelectorAll('.flipped');

    const allFlippedCards = mockFlippedCards.length;

    expect(allFlippedCards).toBe(2);

  })
  it('should evaluate if these cards are equal', () => {
    
    const mockRoot = document.createElement('div');
    
    const mockInputName = document. createElement('input');
    mockInputName.value = "Mock_input_name_player";
    
    const mockPokemons = [
      { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#4DAD5B' },
      { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#4DAD5B' },
      { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png', bgColor: '#4DAD5B' },
      { id: 'charmander', image: 'https://www.serebii.net/pokemongo/pokemon/004.png', bgColor: '#E6BC2F' },
      { id: 'charmeleon', image: 'https://www.serebii.net/pokemongo/pokemon/005.png', bgColor: '#E6BC2F' },
      { id: 'charizard', image: 'https://www.serebii.net/pokemongo/pokemon/006.png', bgColor: '#E6BC2F' },
      { id: 'squirtle', image: 'https://www.serebii.net/pokemongo/pokemon/007.png', bgColor: '#2a75bb' },
      { id: 'wartortle', image: 'https://www.serebii.net/pokemongo/pokemon/008.png', bgColor: '#2a75bb' },
      { id: 'blastoise', image: 'https://www.serebii.net/pokemongo/pokemon/009.png', bgColor: '#2a75bb' },
   
    ];
    mockRoot.appendChild(Head(mockInputName));
    mockRoot.appendChild(App(mockPokemons));

    play(mockRoot, mockInputName); 
    const allCards = mockRoot.querySelectorAll('.card'); //mockear el arreglo
      
   const card1 = allCards[0];
   const card2 = allCards[1];

    //CUANDO    
    const mockFlippedCards = mockRoot.querySelectorAll('.flipped');
    card1.dispatchEvent(new Event('click'));
    card2.dispatchEvent(new Event('click'));
        
    // ENTONCES
    //const mockFlippedCards = mockRoot.querySelectorAll('.flipped');
    const mock_cards_1 = allCards[0].getAttribute('data-id');
    const mock_cards_2 = allCards[1].getAttribute('data-id');
    //checkCards(mockRoot);
    console.log(mockFlippedCards);
    console.log('Soy un pokemon', mock_cards_1);
    console.log('Soy otro poquemon', mock_cards_2);
    //console.log('Soy la función CheckCards', checkCards(mockRoot));
      //console.log(allCards[0].getAttribute('data-id'),allCards[1].getAttribute('data-id'))
   //console.log('Check function',mock_checkCards(mockRoot,mockInputName));
   //expect(mock_cards_match).toEqual(false);
  /*  expect(checkCards(mockRoot)).includes(mock_cards_1);
   expect(checkCards(mockRoot)).includes(mock_cards_2); */
   //expect(mock_cards_1 != mock_cards_2).toBe(false);
   //expect(allCards[0].getAttribute('data-id') === allCards[1].getAttribute('data-id')).toBe();
  })
  
})
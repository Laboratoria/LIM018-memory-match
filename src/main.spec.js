import { checkCards, drawCards, drawGame } from './main-functions.js';
//import { play } from './main-functions.js'

import Start from './components/Start.js';
//import Head from './components/Head.js';
//import App from './components/App.js';
//import Modal from './components/Modal.js';

jest.mock('./data/pokemon/pokemon.js');


describe('Testing checkCards function and play function', () => {
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
})
import { checkCards } from './main-functions.js';
//import { play } from './main-functions.js'
import Start from './components/Start.js';
import Head from './components/Head.js';
import App from './components/App.js';

describe('Testing checkCards function and play function', () => {
  it('should toggle flipped class', () => {
    // DADO crear el entorno que controlo (identificar el entorno)
    const mockEvent = {
      target: document.createElement('div') //es un objeto
    }
   
    // CUANDO pasar la función o funciones a evaluar (el accionar)
    checkCards(mockEvent)
    // ENTONCES escribir las pruebas que queremos que ejucte Jest
    //primero evaluar el entorno a testear con consolo.log()
    const result = mockEvent.target.classList.contains('flipped')
    expect(result).toBe(true);
  })
  it('should 2 toggle cards at time', () => {
    // DADO crear el entorno que controlo (identificar el entorno)
    const mockEvent = {
      target: document.createElement('div') //es un objeto
    }
    const mockRoot = document.createElement('div');
    mockRoot.appendChild(Start());
    const mockInputName = mockRoot.querySelector('.input_name');
    const mockArr = [
      { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#4DAD5B' },
      { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#4DAD5B' },
      { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png', bgColor: '#4DAD5B' },
      { id: 'charmander', image: 'https://www.serebii.net/pokemongo/pokemon/004.png', bgColor: '#E6BC2F' },
      
    ];
  
    mockRoot.appendChild(Head(mockInputName));
    mockRoot.appendChild(App(mockArr));
    
    let mockClicked = mockEvent.target;

     mockClicked.addEventListener('click', function () { 
        mockClicked.classList.add('flipped');
      });

   

    // CUANDO pasar la función o funciones a evaluar (el accionar)
    checkCards(mockEvent, mockRoot, mockInputName);
      // ENTONCES escribir las pruebas que queremos que ejucte Jest
    //primero evaluar el entorno a testear con consolo.log()
    const checkingFlipped = mockEvent.target.classList.contains('flipped');
    const  mockMatch =  mockArr.id === mockArr.id;
    const mockToggle = mockRoot.querySelectorAll('.toggleCard');
    
    
    expect(checkingFlipped).toBe(true);
    expect(Start(mockInputName) instanceof HTMLDivElement).toBe(true);
    expect(App(mockArr) instanceof HTMLDivElement).toBe(true);
    expect(mockMatch).toBe(true);
    expect(mockToggle.length).toBe(8);
    
  })
})
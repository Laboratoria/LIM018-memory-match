import { checkCards } from './main-functions.js';
//import { play } from './main-functions.js'
import Start from './components/Start.js';
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
    const mockRoot = document.createElement('div')
    mockRoot.appendChild(Start());
        
    const mockInputName = mockRoot.querySelector('.input_name');
       
    
    let mockClicked = mockEvent.target;

     mockClicked.addEventListener('click', function () {
        mockClicked.classList.add('flipped');
      });

/* let clickEvent = new Event('click');
mockClicked.dispatchEvent(clickEvent); */

    // CUANDO pasar la función o funciones a evaluar (el accionar)
    checkCards(mockEvent, mockRoot, mockInputName)
    
    const checking = mockEvent.target.classList.contains('flipped')
    expect(checking).toBe(true);
    // ENTONCES escribir las pruebas que queremos que ejucte Jest
    //primero evaluar el entorno a testear con consolo.log()
    
  })
})
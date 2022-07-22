import { checkCards } from './main-functions.js'

describe('pruebas de checkCards', () => {
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
    expect(result).toBe(true)
  })
})
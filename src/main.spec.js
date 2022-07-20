import { checkCards } from './main-function-test'


describe('pruebas de checkCards', () => {
  it('should toggle flipped class', () => {
    // DADO crear el entorno que controlo
    const mockEvent = {
      target: document.createElement('div')
    }

    // CUANDO pasar la función o funciones a evaluar
    checkCards(mockEvent)
    
    // ENTONCES escribir las pruebas que queremos que ejucte Jest
    //primero evaluar el entorno a testear con consolo.log()
    const result = mockEvent.target.classList.contains('flipped')
    expect(result).toBe(true)
  })
})
import Head from './Head.js';

describe('Head testing', () => {
  it('Head component should render without crashing includes input value', () => {
    
    const input_name = document.createElement('input'); // DADO (mocks - que necesitamos para correr la prueba - escenario)
    input_name.value = 'test_input_value';
    
    const el = Head(input_name); //CUANDO (Ejecutamos la función - renderizamos el componente...)
    
    expect(el instanceof HTMLDivElement).toBe(true); // ENTONCES (expects - evaluamos las ejecuciones del cuando)
    
    expect(el.textContent.includes('Test_input_value')).toBe(true);
  });
});

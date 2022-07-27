import Head from './Head.js';

describe('Head', () => {
  it('Head component should render without crashing', () => {
    
    const input_name = document.createElement('input'); // DADO (mocks - que necesitamos para correr la prueba - escenario)

    const el = Head(input_name); //CUANDO (Ejecutamos la función - renderizamos el componente...)
   
    expect(el instanceof HTMLDivElement).toBe(true); // ENTONCES (expects - evaluamos las ejecuciones del cuando)
  });
});

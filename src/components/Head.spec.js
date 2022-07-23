import Head from './Head.js';

describe('Head', () => {
  it('Head component should render without crashing', () => {
    // DADO (mocks - que necesitamos para correr la prueba - escenario)
    const input_name = document.createElement('input')

    //CUANDO (Ejecutamos la función - renderizamos el componente...)
    const el = Head(input_name);

    // ENTONCES (expects - evaluamos las ejecuciones del cuando)
    expect(el instanceof HTMLDivElement).toBe(true);
  });
});

import Start from './Start';

describe('Start', () => {
  it('should render without crashing', () => {
    const el = Start();

    document.body.innerHTML = el.innerHTML
    const btn_play = document.querySelector('.btn_play');
    btn_play.addEventListener('click', () => {console.log("test")})

    btn_play.click()

    expect(el instanceof HTMLDivElement).toBe(true);

    expect(new Date("01/01/2022").tosSting()).toBe("lune primero de eneo")
    expect(el.innerHTML.includes("ZOOM")).toBe(false)
    expect(el.innerHTML.includes('<button clas="boton">Juegar</button>')).toBe(true)*/
    
  });
});

//Jest expect 

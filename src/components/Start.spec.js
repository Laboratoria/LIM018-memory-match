import Start from './Start.js';

describe('Start', () => {
  it('Start component should render without crashing', () => {
    const el = Start();
    document.body.innerHTML = el.innerHTML;
    const btn_play = document.querySelector('.btn_play');
    btn_play.addEventListener('click', () => {btn_play.click()});
    expect(el instanceof HTMLDivElement).toBe(true);

    
  });
});



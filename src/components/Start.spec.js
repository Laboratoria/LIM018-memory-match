import Start from './Start.js';
import { init_events } from '../main-functions.js';



describe('Start', () => {
  it('Start component should render without crashing', () => {
    const el = Start();
    expect(el instanceof HTMLDivElement).toBe(true);


  });
  it('Start component should view a Modal component', () => {
    const el = Start();

    init_events(el);
    const btn_play = el.querySelector('.btn_play');

    btn_play.click();
    const popup = el.getElementsByClassName('popup-overlay');
    expect(popup.length).toBe(1);

  });

  it('Start component should next view if input is valid', () => {

    const el = Start();
    //const init_events = jest.requireActual('../main-functions.js');
    init_events(el);
    const btn_play = el.querySelector('.btn_play');
    const input_name = el.querySelector('.input_name');
    input_name.value = 'mock_input_name';

    btn_play.click();

  });
});



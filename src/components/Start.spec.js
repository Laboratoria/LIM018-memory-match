import Start from './Start.js';
import { init_events } from '../main-functions.js';



describe('Start testing', () => {
  const el = Start();
  it('Start component should render without crashing', () => {
    
    expect(el instanceof HTMLDivElement).toBe(true);
    

  });
  it('Start component should view a Modal component', () => {
    
    init_events(el);
    const btn_play = el.querySelector('.btn_play');

    btn_play.click();
    const popup = el.getElementsByClassName('popup-overlay');
    expect(popup.length).toBe(1);
    
  });

  it('Start component should next view if input is valid', () => {
    
    //const init_events = jest.requireActual('../main-functions.js');
    //console.log('soy yo', init_events)
    init_events(el);
    const btn_play = el.querySelector('.btn_play');
    const input_name = el.querySelector('.input_name');
    input_name.value = 'mock_input_name';
    
    btn_play.click();

    expect(input_name.value).toBe('mock_input_name');
        
  });
});



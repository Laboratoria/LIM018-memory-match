import App from './App.js';
//import pokemon from '../data/pokemon/pokemon.js';
describe('App', () => {
  const arr_p = [
    { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#4DAD5B' },
    { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#4DAD5B' },
    { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png', bgColor: '#4DAD5B' },
    { id: 'charmander', image: 'https://www.serebii.net/pokemongo/pokemon/004.png', bgColor: '#E6BC2F' },
    { id: 'charmeleon', image: 'https://www.serebii.net/pokemongo/pokemon/005.png', bgColor: '#E6BC2F' },
    { id: 'charizard', image: 'https://www.serebii.net/pokemongo/pokemon/006.png', bgColor: '#E6BC2F' },
    { id: 'squirtle', image: 'https://www.serebii.net/pokemongo/pokemon/007.png', bgColor: '#2a75bb' },
    { id: 'wartortle', image: 'https://www.serebii.net/pokemongo/pokemon/008.png', bgColor: '#2a75bb' },
    { id: 'blastoise', image: 'https://www.serebii.net/pokemongo/pokemon/009.png', bgColor: '#2a75bb' },
 
  ];

  const cards = App(arr_p);
  const cards_html = cards.querySelectorAll('.card');
  it('App component should render without crashing', () => {

    expect(cards instanceof HTMLDivElement).toBe(true);
  });

  it('App component should create cards', () => {
    expect(cards_html.length).toBe(arr_p.length*2);

  });
});
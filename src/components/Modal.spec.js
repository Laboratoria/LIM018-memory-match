import Modal from './Modal.js';

describe('Modal testing', () => {
  it('Modal component should render without crashing with text content', () => {
    
    const el = Modal('mock_text');
        
    //document.body.innerHTML = el.innerHTML;
  
    expect(el instanceof HTMLDivElement).toBe(true);
    expect(el.textContent.includes('mock_text')).toBe(true);
  });

  
});


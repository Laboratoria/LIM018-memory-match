import Modal from './Modal.js';

describe('Modal', () => {
  it('Modal component should render without crashing', () => {
    const el = Modal();
    document.body.innerHTML = el.innerHTML;

    expect(el instanceof HTMLDivElement).toBe(true);
  });
});
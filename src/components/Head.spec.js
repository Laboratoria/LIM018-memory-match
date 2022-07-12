import Head from './Head';

describe('Head', () => {
  it('should render without crashing', () => {
    const el = Head();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

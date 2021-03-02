import { polishers } from './polishers';

describe('polishers.clearName()', () => {
  test('should return correct val', () => {
    expect(polishers.clearName('John Doe')).toBe('John Doe');
    expect(polishers.clearName('John_')).toBe('John');
    expect(polishers.clearName('Ar. Gen')).toBe('Ar. Gen');
    expect(polishers.clearName(`Mathias d'Arras`)).toBe(`Mathias d'Arras`);
    expect(polishers.clearName(`Martin Luther King, Jr.`)).toBe(`Martin Luther King, Jr.`);
    expect(polishers.clearName(`aaaaabbbbbcccccaaaaabbbbbccccceeeeeddddd`)).toBe(`aaaaabbbbbcccccaaaaabbbbbccccceeeee`);
  });
});

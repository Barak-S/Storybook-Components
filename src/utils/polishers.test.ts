import { polish } from './polishers';

describe('polish.name()', () => {
  test('should return correct val', () => {
    expect(polish.name('John Doe')).toBe('John Doe');
    expect(polish.name('John_')).toBe('John');
    expect(polish.name('Ar. Gen')).toBe('Ar. Gen');
    expect(polish.name(`Mathias d'Arras`)).toBe(`Mathias d'Arras`);
    expect(polish.name(`Martin Luther King, Jr.`)).toBe(`Martin Luther King, Jr.`);
    expect(polish.name(`aaaaabbbbbcccccaaaaabbbbbccccceeeeeddddd`)).toBe(`aaaaabbbbbcccccaaaaabbbbbccccceeeee`);
  });
});

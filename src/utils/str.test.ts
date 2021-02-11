import { pad, capitalizeFirstLetter, errToStr } from './str';

describe('pad()', () => {
  it('should add zeros', () => {
    expect(pad(11, 3)).toBe('011');
    expect(pad('11', 3)).toBe('011');
    expect(pad(0, 3)).toBe('000');
  });
});

describe('capitalizeFirstLetter()', () => {
  it('should capitalize first letter', () => {
    expect(capitalizeFirstLetter('ranch')).toBe('Ranch');
    expect(capitalizeFirstLetter('Ranch')).toBe('Ranch');
    expect(capitalizeFirstLetter('first second')).toBe('First second');
    expect(capitalizeFirstLetter('')).toBe('');
  });
});

describe('errToStr()', () => {
  it('should convert error to string', () => {
    expect(errToStr(undefined)).toBe(undefined);
    expect(errToStr('description')).toBe('description');
    expect(errToStr(new Error('description'))).toBe('description');
    expect(errToStr(10)).toBe('10');
    expect(errToStr({ toString: () => 'description' })).toBe('description');
  });
});

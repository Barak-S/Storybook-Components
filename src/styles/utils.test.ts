import { ms, mc, px } from './utils';

describe('ms()', () => {
  test('should merge styles', () => {
    // Empty
    expect(ms()).toEqual({});
    // Merge two objects
    expect(ms({ color: 'red' }, { fontSize: 10 })).toEqual({ color: 'red', fontSize: 10 });
    // Merge array
    expect(ms([{ color: 'red' }, { fontSize: 10 }])).toEqual({ color: 'red', fontSize: 10 });
    // Merge boolean
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    expect(ms({ color: 'red' }, { fontSize: 10 } && false)).toEqual({ color: 'red' });
  });
});

describe('px()', () => {
  test('should return str with px', () => {
    expect(px(10)).toBe('10px');
  });
});

describe('mc()', () => {
  test('should merge simple names', () => {
    expect(mc('one', 'two', undefined, 'three')).toBe('one two three');
    expect(mc(['one', 'two', undefined, 'three'])).toBe('one two three');
    expect(mc()).toBe('');
  });
  test('should merge several arrays', () => {
    expect(mc('one', 'two', undefined, 'three')).toBe('one two three');
    expect(mc('one', 'two', ['three'], 'four')).toBe('one two three four');
  });
});

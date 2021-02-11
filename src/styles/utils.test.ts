import { m, px } from './utils';

describe('m()', () => {
  test('should merge styles', () => {
    // Empty
    expect(m()).toEqual({});
    // Merge two objects
    expect(m({ color: 'red' }, { fontSize: 10 })).toEqual({ color: 'red', fontSize: 10 });
    // Merge array
    expect(m([{ color: 'red' }, { fontSize: 10 }])).toEqual({ color: 'red', fontSize: 10 });
    // Merge boolean
    expect(m({ color: 'red' }, { fontSize: 10 } && false)).toEqual({ color: 'red' });
  });
});

describe('px()', () => {
  test('should return str with px', () => {
    expect(px(10)).toBe('10px');
  });
});

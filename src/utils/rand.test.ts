import { genId } from './rand';

describe('genId()', () => {
  test('should generate random ids', () => {
    const a = genId();
    const b = genId();
    expect(typeof a).toBe('string');
    expect(typeof b).toBe('string');
    expect(a).not.toBe(b);
  });
});

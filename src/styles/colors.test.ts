import { withAlpha } from './colors';

describe('withAlpha()', () => {
  test('should generate color with alpha', () => {
    expect(withAlpha('#000000', 0.5)).toBe('rgba(0, 0, 0, 0.5)');
    expect(withAlpha('#eee', 0.5)).toBe('rgba(238, 238, 238, 0.5)');
  });
});

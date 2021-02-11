import { validators } from './validators';

describe('validators.getPasswordErr()', () => {
  it('should return err when password is not correct', () => {
    expect(validators.getPasswordErr('')).not.toBeUndefined();
    expect(validators.getPasswordErr('abcdabcd')).not.toBeUndefined();
    expect(validators.getPasswordErr('1bcdabcd')).not.toBeUndefined();
  });
  it('should not return err when password is correct', () => {
    expect(validators.getPasswordErr('Abcdefg1!')).toBeUndefined();
  });
  it('should not return err when password is not required', () => {
    expect(validators.getPasswordErr(undefined, { required: false })).toBeUndefined();
    expect(validators.getPasswordErr('abcdef', { required: false })).not.toBeUndefined();
  });
  it('should return custom required error', () => {
    expect(validators.getPasswordErr(undefined, { required: true, requiredErr: 'Second password is required' })).toBe(
      'Second password is required',
    );
  });
});

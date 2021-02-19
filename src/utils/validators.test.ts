import { validators } from './validators';

describe('validators.getNameErr()', () => {
  it('should return err with wrong value', () => {
    expect(validators.getNameErr(undefined)).not.toBeUndefined();
    expect(validators.getNameErr('')).not.toBeUndefined();
    expect(validators.getNameErr('1')).not.toBeUndefined();
    expect(validators.getNameErr('abcdfkensfabcdfkensfabcdfkensfabcdfkensf')).not.toBeUndefined();
  });
  it('should not return err when value is correct', () => {
    expect(validators.getNameErr('Abcdefg')).toBeUndefined();
  });
  it('should not return err when value is not required', () => {
    expect(validators.getNameErr(undefined, { required: false })).toBeUndefined();
    expect(validators.getNameErr('1', { required: false })).not.toBeUndefined();
  });
  it('should return custom required error', () => {
    expect(validators.getNameErr(undefined, { required: true, requiredMsg: 'Lastname is required' })).toBe(
      'Lastname is required',
    );
  });
});

describe('validators.getEmailErr()', () => {
  it('should return err with wrong value', () => {
    expect(validators.getEmailErr(undefined)).not.toBeUndefined();
    expect(validators.getEmailErr('')).not.toBeUndefined();
    expect(validators.getEmailErr('1')).not.toBeUndefined();
    expect(validators.getEmailErr('abcdfkensfabcdfkensfabcdfkensfabcdfkensf')).not.toBeUndefined();
  });
  it('should not return err when value is correct', () => {
    expect(validators.getEmailErr('some@gmail.com')).toBeUndefined();
  });
  it('should not return err when value is not required', () => {
    expect(validators.getEmailErr(undefined, { required: false })).toBeUndefined();
    expect(validators.getEmailErr('1', { required: false })).not.toBeUndefined();
  });
  it('should return custom required error', () => {
    expect(validators.getEmailErr(undefined, { required: true, requiredMsg: 'Target email is required' })).toBe(
      'Target email is required',
    );
  });
});

describe('validators.getPasswordErr()', () => {
  it('should return err with wrong value', () => {
    // Empty
    expect(validators.getPasswordErr('')).not.toBeUndefined();
    // Don't have a number
    expect(validators.getPasswordErr('abcdabcd')).not.toBeUndefined();
    // Don't have upper case letter
    expect(validators.getPasswordErr('1bcdabcd')).not.toBeUndefined();
    // Too long
    expect(
      validators.getPasswordErr(
        'Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa1Aaaaaaaaa11',
      ),
    ).not.toBeUndefined();
  });
  it('should not return err when value is correct', () => {
    expect(validators.getPasswordErr('Abcdefg1!')).toBeUndefined();
  });
  it('should not return err when value is not required', () => {
    expect(validators.getPasswordErr(undefined, { required: false })).toBeUndefined();
    expect(validators.getPasswordErr('abcdef', { required: false })).not.toBeUndefined();
  });
  it('should return custom required error', () => {
    expect(validators.getPasswordErr(undefined, { required: true, requiredMsg: 'Second password is required' })).toBe(
      'Second password is required',
    );
  });
});

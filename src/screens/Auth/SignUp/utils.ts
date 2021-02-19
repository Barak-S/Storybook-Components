import { clearNameStr, isDictEmpty, validators } from 'utils';

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export type FormErrs = Partial<Record<keyof FormData, string>> & { request?: string };

/**
 * Check form data for errors
 * @param data - form data
 */
export const getFormErrs = (data: FormData): FormErrs | undefined => {
  const errs: FormErrs = {
    firstName: validators.getNameErr(data.firstName, { required: true, requiredMsg: 'First name required' }),
    lastName: validators.getNameErr(data.lastName, { required: true, requiredMsg: 'Last name required' }),
    email: validators.getEmailErr(data.email, { required: true, requiredMsg: 'Email required' }),
    password: validators.getPasswordErr(data.password, { required: true, requiredMsg: 'Password required' }),
    confirmPassword: validators.getPasswordErr(data.confirmPassword, {
      required: true,
      requiredMsg: 'Password confirmation',
    }),
  };
  if (!isDictEmpty(errs)) {
    return errs;
  }
  if (data.password !== data.confirmPassword) {
    return { confirmPassword: 'Passwords should be the same' };
  }
  return undefined;
};

/**
 * Clear form data
 * @param val - modify form data
 */
export const polishFormData = (val: FormData): FormData => {
  let modVal: FormData = { ...val };
  if (modVal.firstName) {
    modVal.firstName = clearNameStr(modVal.firstName);
    if (modVal.firstName.length > 35) {
      modVal = { ...modVal, firstName: modVal.firstName.substring(0, 35) };
    }
  }
  if (modVal.lastName) {
    modVal.lastName = clearNameStr(modVal.lastName);
    if (modVal.lastName.length > 35) {
      modVal = { ...modVal, lastName: modVal.lastName.substring(0, 35) };
    }
  }
  if (modVal.email && modVal.email.length > 35) {
    modVal = { ...modVal, firstName: modVal.email.substring(0, 35) };
  }
  if (modVal.password && modVal.password.length > 100) {
    modVal = { ...modVal, firstName: modVal.password.substring(0, 100) };
  }
  if (modVal.confirmPassword && modVal.confirmPassword.length > 100) {
    modVal = { ...modVal, firstName: modVal.confirmPassword.substring(0, 100) };
  }
  return modVal;
};

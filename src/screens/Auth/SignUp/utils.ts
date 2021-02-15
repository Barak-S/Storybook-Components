import { clearNameStr, validators } from 'utils';

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export type FormErrs = Partial<Record<keyof FormData, string>>;

/**
 * Check form data for errors
 * @param data - form data
 */
export const getFormErrs = (data: FormData): FormErrs | undefined => {
  const { firstName, lastName, email, password, confirmPassword } = data;
  if (!firstName) {
    return { firstName: 'First name required' };
  }
  if (!lastName) {
    return { lastName: 'Last name required' };
  }
  const emailErr = validators.getEmailErr(email, {
    required: true,
    requiredErr: 'Email required',
  });
  if (emailErr) {
    return { email: emailErr };
  }
  const passErr = validators.getPasswordErr(confirmPassword, {
    required: true,
    requiredErr: 'Password required',
  });
  if (passErr) {
    return { password: passErr };
  }
  const confirmPassErr = validators.getPasswordErr(confirmPassword, {
    required: true,
    requiredErr: 'Password confirmation required',
  });
  if (confirmPassErr) {
    return { confirmPassword: confirmPassErr };
  }
  if (password !== confirmPassword) {
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

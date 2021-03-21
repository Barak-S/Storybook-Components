import { isDictEmpty, polish, validators } from 'utils';

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
  const confirmPassValidatorsErr = validators.getPasswordErr(data.confirmPassword, {
    required: true,
    requiredMsg: 'Password confirmation',
  });
  const passesNotSameErr = data.password !== data.confirmPassword ? 'Passwords should be the same' : undefined;
  const errs: FormErrs = {
    firstName: validators.getNameErr(data.firstName, { required: true, requiredMsg: 'First name required' }),
    lastName: validators.getNameErr(data.lastName, { required: true, requiredMsg: 'Last name required' }),
    email: validators.getEmailErr(data.email, { required: true, requiredMsg: 'Email required' }),
    password: validators.getPasswordErr(data.password, { required: true, requiredMsg: 'Password required' }),
    confirmPassword: confirmPassValidatorsErr || passesNotSameErr,
  };
  return !isDictEmpty(errs) ? errs : undefined;
};

/**
 * Clear form data
 * @param val - modify form data
 */
export const polishFormData = (val: FormData): FormData => ({
  firstName: polish.name(val.firstName),
  lastName: polish.name(val.lastName),
  email: polish.email(val.email),
  password: polish.password(val.password),
  confirmPassword: polish.password(val.confirmPassword),
});

interface ValidatorOpt {
  required?: boolean;
  requiredMsg?: string;
}

export const validators = {
  getNameErr: (val: string | undefined, opt?: ValidatorOpt): undefined | string => {
    const { required, requiredMsg } = opt || { required: true };
    if (!val && required) {
      return requiredMsg || 'Name is required';
    }
    if (val && val.length < 2) {
      return 'Name could not be shorter than two symbols';
    }
    if (val && val.length > 35) {
      return 'Name could not be longer than 35 symbols';
    }
    return undefined;
  },
  getEmailErr: (val: string | undefined, opt?: ValidatorOpt): undefined | string => {
    const { required, requiredMsg } = opt || { required: true };
    if (!val && required) {
      return requiredMsg || 'Email is required';
    }
    // eslint-disable-next-line max-len
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (val && !regex.test(val)) {
      return 'Wrong email format';
    }
    return undefined;
  },
  getPasswordErr: (val: string | undefined, opt?: ValidatorOpt): undefined | string => {
    const { required, requiredMsg } = opt || { required: true };
    if (!val && required) {
      return requiredMsg || 'Password is required';
    }
    if (val && val.length > 100) {
      return 'Password is too long';
    }
    if (val && !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,100}$/g.test(val)) {
      return 'Password should be 8 symbols long minimum and contains numbers, uppercase, and lowercase letters';
    }
    return undefined;
  },
};

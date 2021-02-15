interface ValidatorOpt {
  required?: boolean;
  requiredErr?: string;
}

export const validators = {
  getEmailErr: (val: string | undefined, opt: ValidatorOpt = { required: true }): undefined | string => {
    const { required, requiredErr } = opt;
    if (!val && required) {
      return requiredErr || 'Email is required';
    }
    // eslint-disable-next-line max-len
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (val && !regex.test(val)) {
      return 'Wrong email format';
    }
    return undefined;
  },
  getPasswordErr: (val: string | undefined, opt: ValidatorOpt = { required: true }): undefined | string => {
    const { required, requiredErr } = opt;
    if (!val && required) {
      return requiredErr || 'Password is required';
    }
    if (val && !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,100}$/g.test(val)) {
      return 'The password should be 8 symbols long minimum and contains numbers, uppercase, and lowercase letters';
    }
    return undefined;
  },
};

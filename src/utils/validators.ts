interface ValidatorOpt {
  required?: boolean;
  requiredErr?: string;
}

export const validators = {
  getPasswordErr: (val: string | undefined, opt: ValidatorOpt = { required: true }): undefined | string => {
    const { required, requiredErr } = opt;
    if (!val && required) {
      return requiredErr || 'Password is required';
    }
    if (val && !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,100}$/g.test(val)) {
      return 'The password should be 8 symbols long minimum and contains numbers, uppercase, and lowercase letters.';
    }
    return undefined;
  },
};

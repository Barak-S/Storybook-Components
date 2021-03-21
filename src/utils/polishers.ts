interface ClearNameOpt {
  maxLength?: number;
}

const clearName = (val: string | undefined, opt?: ClearNameOpt): string | undefined => {
  const { maxLength = 35 } = opt || {};
  if (!val) {
    return val;
  }
  const newVal = val.replace(/[^A-Za-z\s,.'‘-]+/g, '');
  return setMaxSize(newVal, maxLength);
};

const clearEmail = (val: string | undefined): string | undefined => setMaxSize(val, 50);

const clearPassword = (val: string | undefined): string | undefined => setMaxSize(val, 100);

const setMaxSize = (val: string | undefined, maxSize: number): string | undefined => {
  if (!val) {
    return val;
  }
  return val.length > maxSize ? val.substring(0, maxSize) : val;
};

export const polish = {
  name: clearName,
  email: clearEmail,
  password: clearPassword,
  setMaxSize,
};

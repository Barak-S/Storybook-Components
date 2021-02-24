interface ClearNameOpt {
  maxLength?: number;
}

const clearName = (val: string | undefined, opt?: ClearNameOpt): string | undefined => {
  const { maxLength = 35 } = opt || {};
  if (!val) {
    return val;
  }
  let newVal = val;
  newVal = val.replace(/[^\w\s,.'-]+/g, '');
  if (newVal.length > maxLength) {
    newVal = newVal.substring(0, maxLength);
  }
  return newVal;
};

const clearEmail = (val: string | undefined): string | undefined => setMaxSize(val, 50);

const clearPassword = (val: string | undefined): string | undefined => setMaxSize(val, 100);

const setMaxSize = (val: string | undefined, maxSize: number): string | undefined => {
  if (!val) {
    return val;
  }
  return val.length > maxSize ? val.substring(0, maxSize) : val;
};

export const polishers = {
  clearName,
  clearEmail,
  clearPassword,
  setMaxSize,
};

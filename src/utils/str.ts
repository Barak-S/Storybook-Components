export const pad = (val: number | string, max: number): string => {
  const str = val.toString();
  return str.length < max ? pad(`0${str}`, max) : str;
};

export const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

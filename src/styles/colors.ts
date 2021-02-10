import color from 'color';

const base = {
  red: '#D8434E',
  green: '#4CAF50',
  blue: '#3273dc',
  white: '#fff',
  back: '#000',
  lightGrey: '#BDC3C7',
  gray: '#5C5C5C',
};

const named = {
  primary: '#012169',
  error: '#ff1744',
  link: '#407DC8',
};

export const withAlpha = (val: string, alpha: number) => color(val).alpha(alpha).toString();

export const colors = {
  ...base,
  ...named,
  withAlpha,
};

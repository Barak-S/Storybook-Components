import color from 'color';

const base = {
  red: '#D8434E',
  green: '#4CAF50',
  blue: '#3273dc',
  white: '#FFFFFF',
  back: '#000000',
  lightGrey: '#BDC3C7',
  gray: '#5C5C5C',
};

const named = {
  background: '#F7F7F7',
  primary: '#012169',
  error: '#ff1744',
  link: '#407DC8',
};

const zeplin = {
  white: '#ffffff',
  whiteTwo: '#fafafa',
  paleGrey: '#f2f3f4',
  paleGreyTwo: '#eff3f8',
  paleGreyThree: '#f2f3f4',
  lightPeriwinkle: '#dddfe1',
  veryLightPinkFour: '#dedede',
  veryLightPinkThree: '#e7e7e7',
  lightBlueGrey: '#cdcfd0',
  veryLightPink: '#d8d8d8',
  silver: '#cfd0d0',
  silverTwo: '#dddfe1',
  greyish: '#b9b9b9',
  veryLightPinkTwo: '#b9b9b9',
  coolGrey: '#9ea1a1',
  blueGrey: '#8e8e93',
  brownGrey: '#939393',
  brownGreyTwo: '#959595',
  warmGrey: '#707070',
  brownishGreyTwo: '#707070',
  brownishGreyThree: '#5f5f5f',
  brownishGrey: '#5c5c5c',
  greyishBrown: '#4a4a4a',
  blackTwo: '#1f1f1f',
  black: '#000000',
  cloudyBlue: '#9fbee4',
  blueyGrey: '#8090b4',
  softBlueTwo: '#6f9ed6',
  softBlue: '#66a0e6',
  dodgerBlue: '#3894fa',
  clearBlue: '#2e84ed',
  coolBlue: '#407dc8',
  coolBlueTwo: '#407ec9',
  windowsBlue: '#3972bd',
  midBlue: '#2867b2',
  blue: '#015bd7',
  denimBlue: '#40588e',
  marine: '#011e5c',
  marineBlue: '#012169',
  darkIndigo: '#082241',
  paleRed: '#de5246',
  rustyRed: '#d12d17',
  vermillion: '#e8331d',
  gunmetal: '#536d6d',
  darkGreen: '#223c3c',
  green: '#17d142',
  lightViolet: '#d8c6df',
  warmPurple: '#702f8a',
  warmPurpleTwo: '#702f8a',
};

export const withAlpha = (val: string, alpha: number) => color(val).alpha(alpha).toString();

export const withDark = (val: string, darken: number) => color(val).darken(darken).toString();

export const colors = {
  ...base,
  ...named,
  ...zeplin,
  withAlpha,
  withDark,
};

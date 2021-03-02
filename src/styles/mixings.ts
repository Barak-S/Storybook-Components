import { isString } from 'lodash';

import { Style } from './types';

const borderBottom = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderBottom: `${isString(width) ? width : `${width}px`} ${style} ${color}`,
});

const borderTop = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderTop: `${isString(width) ? width : `${width}px`} ${style} ${color}`,
});

const borderLeft = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderLeft: `${isString(width) ? width : `${width}px`} ${style} ${color}`,
});

const borderRight = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderRight: `${isString(width) ? width : `${width}px`} ${style} ${color}`,
});

const font = (
  size: Style['fontSize'] | number,
  color: Style['color'] = 'inherit',
  weight: Style['fontWeight'] = 'normal',
): Style => ({
  fontSize: typeof size === 'number' ? `${size}px` : size,
  color,
  fontWeight: weight,
});

const zIndexMap = {
  base: {
    zIndex: 20,
  },
  underBase: {
    zIndex: 10,
  },
  overBase: {
    zIndex: 20,
  },
  mobileTabs: {
    zIndex: 30,
  },
  mobileMenu: {
    zIndex: 31,
  },
};

export const mx = {
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  font,
  zIndex: zIndexMap,
};

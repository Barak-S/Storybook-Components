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

export const mx = {
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
};

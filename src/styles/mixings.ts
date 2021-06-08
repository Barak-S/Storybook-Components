import { isString } from 'lodash';

import { Style } from './types';

const border = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  border: `${isString(width) ? width : `${width}px`} ${String(style)} ${color}`,
});

const borderBottom = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderBottom: `${isString(width) ? width : `${width}px`} ${String(style)} ${color}`,
});

const borderTop = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderTop: `${isString(width) ? width : `${width}px`} ${String(style)} ${color}`,
});

const borderLeft = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderLeft: `${isString(width) ? width : `${width}px`} ${String(style)} ${color}`,
});

const borderRight = (width: number | string, style: Style['borderStyle'], color: string): Style => ({
  borderRight: `${isString(width) ? width : `${width}px`} ${String(style)} ${color}`,
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
    zIndex: 1200,
  },
  underBase: {
    zIndex: 1200,
  },
  overBase: {
    zIndex: 1200,
  },
  mobileTabs: {
    zIndex: 1200,
  },
  mobileMenu: {
    zIndex: 1200,
  },
  appbar: {
    zIndex: 1200,
  },
};

const square = (size: Style['width'] | number): Style => {
  const value = typeof size === 'number' ? `${size}px` : size;

  return {
    width: value,
    height: value,
  };
};

const overlay = (): Style => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const centeredContent = (): Style => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const threeDots: Style = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export const mx = {
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  font,
  square,
  overlay,
  centeredContent,
  threeDots,
  w100: { width: '100%' },
  zIndex: zIndexMap,
};

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

const zIndexMap = [
  {
    name: 'base',
    zIndex: 20,
  },
  {
    name: 'underBase',
    zIndex: 10,
  },
  {
    name: 'overBase',
    zIndex: 20,
  },
  {
    name: 'mobileTabs',
    zIndex: 30,
  },
  {
    name: 'mobileMenu',
    zIndex: 31,
  },
];

const zIndex = (searchedName: string) => {
  return zIndexMap.find(({ name }) => searchedName === name)?.zIndex || zIndexMap[0].zIndex;
};

export const mx = {
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  zIndex,
};

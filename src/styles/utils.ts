import { each, isArray, isBoolean, flattenDeep, compact, isString } from 'lodash';

import { MergeStyleVals, Style } from './types';

/**
 * Merge styles
 * @param {MergeStyleVals} arr - styles
 */
export const m = (...arr: MergeStyleVals[]): Style => {
  if (!arr || !arr.length) {
    return {};
  }
  let style: Style = {};
  each(arr, (rawItem: MergeStyleVals) => {
    const item = isArray(rawItem) ? m(...rawItem) : rawItem;
    if (isBoolean(item)) {
      return;
    }
    if (!item) {
      return;
    }
    style = { ...style, ...item };
  });
  return style;
};

export const px = (val: number) => `${val}px`;

type ClassNameItem = string | undefined | null | boolean;
type ClassNameArr = ClassNameItem[];

/** Merge class names */
export const mc = (...arr: (ClassNameItem | ClassNameArr)[]): string =>
  compact(flattenDeep(arr)).filter(isString).join(' ');

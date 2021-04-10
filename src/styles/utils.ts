import { each, isArray, isBoolean, flattenDeep, compact, isString } from 'lodash';
import { useState } from 'react';
import { withAlpha } from './colors';
import { useScreenSizes } from './sizes';

import { MergeStyleVals, Style, Styles } from './types';

/**
 * Merge styles
 * @param {MergeStyleVals} arr - styles
 */
export const ms = (...arr: MergeStyleVals[]): Style => {
  if (!arr.length) {
    return {};
  }
  let style: Style = {};
  each(arr, (rawItem: MergeStyleVals) => {
    const item = isArray(rawItem) ? ms(...rawItem) : rawItem;
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
export const mc = (...arr: (ClassNameItem | ClassNameArr)[]): string => compact(flattenDeep(arr)).filter(isString).join(' ');

/** Scroll to top */
export const scrollToTop = () => window.scrollTo(0, 0);

/**
 * Hook for helping manage hover state
 * @returns `hover` - boolean indicates is hovered or not,
 * `hoverProps` - props required to detect hover
 */
export const useHover = () => {
  const [hover, setHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseOver = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const onMouseOut = () => {
    setHover(false);
  };

  return { hover, hoverProps: { onMouseEnter, onMouseLeave, onMouseOut, onMouseOver } };
};

type MakeStylesFnOpts = { ms: typeof ms } & { withAlpha: typeof withAlpha } & ReturnType<typeof useScreenSizes>;

type MakeStylesFn = (opt: MakeStylesFnOpts) => Styles;

export const buildStyles = (fn: MakeStylesFn) => () => {
  const sizes = useScreenSizes();
  return fn({ ms, withAlpha, ...sizes });
};

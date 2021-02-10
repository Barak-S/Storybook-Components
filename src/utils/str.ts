import { isError, isFunction, isNumber, isString } from 'lodash';
import { isUnknowDict } from './types';

export const pad = (val: number | string, max: number): string => {
  const str = val.toString();
  return str.length < max ? pad(`0${str}`, max) : str;
};

export const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

// Errors

/**
 * Convert unknown error to string
 * @param err - Error, string, number or an object with `toString()` property
 */
export const errToStr = (err: unknown): string | undefined => {
  if (!err) {
    return undefined;
  }
  if (isError(err)) {
    return err.message;
  }
  if (isString(err)) {
    return err;
  }
  if (isNumber(err)) {
    return `${err}`;
  }
  if (isUnknowDict(err) && isFunction(err.toString)) {
    return err.toString();
  }
  return undefined;
};

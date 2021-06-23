import { isArray, isBoolean, isEmpty, isNull, isNumber, isString, isUndefined, values } from 'lodash';

export interface UnknowDict {
  [index: string]: unknown;
}

export const isUnknowDict = (candidate: unknown): candidate is UnknowDict => typeof candidate === 'object' && candidate !== null;

export interface UndefDict {
  [index: string]: undefined;
}

/**
 * Check if all properties of the object are undefined
 * @param val - object
 */
export const isUndefDict = (val: UnknowDict): val is UndefDict => Object.values(val).every(el => el === undefined);

/**
 * Return data or undefinde value
 * @param val - input value
 */
export const dataOrUndef = <T>(val: T | null | undefined): T | undefined => (val ? val : undefined);

/**
 * Checks if all propertis of the object are empty
 * @param val - Some object
 */
export const isDictEmpty = (val: UnknowDict): boolean => values(val).every(isEmpty);

export const select = <K extends string | number, T extends unknown>(key: K, data: Record<K, T>) => data[key];

export const removeNullProps = <T>(obj: T): T => {
  if (isArray(obj)) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return (obj.map(itm => removeNullProps(itm)) as unknown) as T;
  }
  if (isNumber(obj) || isString(obj) || isBoolean(obj)) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return (obj as unknown) as T;
  }
  if (!isUnknowDict(obj)) {
    return obj;
  }
  const newObj: T = { ...obj };
  for (const key in newObj) {
    if (isNull(newObj[key])) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete newObj[key];
    }
    if (isUnknowDict(newObj[key])) {
      newObj[key] = removeNullProps(newObj[key]);
    }
  }
  return newObj;
};

export const removeUndefProps = <T>(obj: T): T => {
  if (!isUnknowDict(obj)) {
    return obj;
  }
  const newObj: T = { ...obj };
  for (const key in newObj) {
    if (isUndefined(newObj[key])) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete newObj[key];
    }
  }
  return newObj;
};

/**
 * Basic template for the type guards
 * @returns Does the `val` is type of `T`
 */
export type TypeGuard<T> = (val: unknown) => val is T;

export const isStrOrUndef = (val: unknown) => isString(val) || isUndefined(val);

export const isStr = isString;
export const isUndef = isUndefined;
export const isBool = isBoolean;
export const isNum = isNumber;
export { isDate } from 'lodash';

export const lastIndex = (itms: unknown[]) => itms.length - 1;

// Forms

export type GenericFormData<T> = Partial<T>;

export type GenericFormErrors<T> = Partial<Record<keyof T, string>>;

export type GenericFormProcessing<T> = Partial<Record<keyof T, boolean>>;

export type GenericFormValid<T> = Partial<Record<keyof T, boolean>>;

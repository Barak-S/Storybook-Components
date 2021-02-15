export interface UnknowDict {
  [index: string]: unknown;
}

export const isUnknowDict = (candidate: unknown): candidate is UnknowDict =>
  typeof candidate === 'object' && candidate !== null;

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

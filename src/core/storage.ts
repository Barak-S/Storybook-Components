import { Log } from 'utils';
import { isString } from 'lodash';

const log = Log('core.storage');

const keyPrefix = 'do';

const fkey = (key: string) => `${keyPrefix}:${key}`;

export const getStorageVal = <T = unknown>(key: string): T | undefined => {
  const fullKey = fkey(key);
  const valStr = localStorage.getItem(fullKey);
  if (!isString(valStr)) {
    return undefined;
  }
  let val: unknown;
  try {
    val = JSON.parse(valStr);
  } catch (err: unknown) {
    log.err(err);
    return undefined;
  }
  // TODO: Add type guard
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return val as T;
};

export const setStorageVal = <T = unknown>(key: string, val: T) => {
  const fullKey = fkey(key);
  const valStr = JSON.stringify(val);
  localStorage.setItem(fullKey, valStr);
};

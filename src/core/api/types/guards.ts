import { isBoolean, isString } from 'lodash';
import { isStr, isUnknowDict } from 'utils';

import { AssetsImage } from './assets';
import { User } from './user';

/** Shortcuts */

const isUD = isUnknowDict;
const isS = isString;
const isB = isBoolean;

/** User */

export const isUser = (val: unknown): val is User =>
  isUD(val) && isS(val.id) && isS(val.email) && isB(val.confirmed) && isS(val.firstName) && isS(val.lastName);

// Assets

export const isAssetsImage = (val: unknown): val is AssetsImage => isUD(val) && isStr(val.url);

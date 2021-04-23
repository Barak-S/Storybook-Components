import { isBoolean, isString } from 'lodash';
import { isStr, isUnknowDict } from 'utils';
import { AssetsImage, AssetsImageResp } from './assets';

import { User, UserResp, UserSettings, UserSettingsResp } from './user';

/** Shortcuts */

const isUD = isUnknowDict;
const isS = isString;
const isB = isBoolean;

/** User */

export const isUser = (val: unknown): val is User =>
  isUD(val) && isS(val.id) && isS(val.email) && isB(val.confirmed) && isS(val.firstName) && isS(val.lastName);

export const isUserResp = (val: unknown): val is UserResp => isUD(val) && isUser(val.user);

export const isUserSettings = (val: unknown): val is UserSettings => isUD(val);

export const isUserSettingsResp = (val: unknown): val is UserSettingsResp => isUD(val) && isUserSettings(val.settings);

// Assets

export const isAssetsImage = (val: unknown): val is AssetsImage => isUD(val) && isStr(val.url);

export const isAssetsImageResp = (val: unknown): val is AssetsImageResp => isUD(val) && isAssetsImage(val.image);

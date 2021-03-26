import { isBoolean, isNumber, isString, isUndefined } from 'lodash';
import { isUnknowDict, TypeGuard } from 'utils';

import { AccountProfile, AccountProfileCompany, AccountProfileOnboarding } from './account';
import { TeamMemberInvite } from './team';

/** Shortcuts */

const isUD = isUnknowDict;
const isU = isUndefined;
const isS = isString;
const isSorUn = (val: unknown) => isS(val) || isU(val);
const isB = isBoolean;
const isN = isNumber;
const isTorUn = <T>(val: unknown, g: TypeGuard<T>): val is T | undefined => g(val) || isU(val);

/** Account */

export const isAccountProfile = (val: unknown): val is AccountProfile =>
  isUD(val) &&
  isS(val.uid) &&
  isS(val.email) &&
  isB(val.confirmed) &&
  isS(val.firstName) &&
  isS(val.lastName) &&
  isAccountProfileOnboarding(val.onboarding) &&
  isSorUn(val.role) &&
  isSorUn(val.bio) &&
  isTorUn(val.company, isAccountProfileCompany) &&
  isN(val.createdAt) &&
  isN(val.updatedAt);

export const isAccountProfileCompany = (val: unknown): val is AccountProfileCompany => isUD(val) && isS(val.name);

export const isAccountProfileOnboarding = (val: unknown): val is AccountProfileOnboarding =>
  isS(val) && ['profile', 'team', 'theme', 'event', 'done'].includes(val);

/** Team */

export const isTeamMemberInvite = (val: unknown): val is TeamMemberInvite =>
  isUD(val) &&
  isS(val.firstName) &&
  isS(val.lastName) &&
  isS(val.email) &&
  isS(val.userGroup) &&
  isS(val.companyType) &&
  isS(val.message);

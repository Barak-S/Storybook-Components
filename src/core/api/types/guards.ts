import { isBool, isNum, isStr, isStrOrUndef, isUndef, isUnknowDict } from 'utils';

import { AccountProfile, AccountProfileCompany, AccountProfileOnboarding } from './account';
import { TeamMemberInvite } from './team';

/**
 * Account
 */

export const isAccountProfile = (val: unknown): val is AccountProfile =>
  isUnknowDict(val) &&
  isStr(val.uid) &&
  isStr(val.email) &&
  isBool(val.confirmed) &&
  isStr(val.firstName) &&
  isStr(val.lastName) &&
  isAccountProfileOnboarding(val.onboarding) &&
  isStrOrUndef(val.role) &&
  isStrOrUndef(val.bio) &&
  (isAccountProfileCompany(val.company) || isUndef(val.company)) &&
  isNum(val.createdAt) &&
  isNum(val.updatedAt);

export const isAccountProfileCompany = (val: unknown): val is AccountProfileCompany => isUnknowDict(val) && isStr(val.name);

export const isAccountProfileOnboarding = (val: unknown): val is AccountProfileOnboarding =>
  isStr(val) && ['profile', 'team', 'theme', 'event', 'done'].includes(val);

/**
 * Team
 */

export const isTeamMemberInvite = (val: unknown): val is TeamMemberInvite =>
  isUnknowDict(val) &&
  isStr(val.firstName) &&
  isStr(val.lastName) &&
  isStr(val.email) &&
  isStr(val.userGroup) &&
  isStr(val.companyType) &&
  isStr(val.message);

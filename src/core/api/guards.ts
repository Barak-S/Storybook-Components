import { isString } from 'lodash';
import { isUnknowDict } from 'utils';
import { TeamMemberInvite } from './types';

export const isTeamMemberInvite = (val: unknown): val is TeamMemberInvite =>
  isUnknowDict(val) &&
  isString(val.firstName) &&
  isString(val.lastName) &&
  isString(val.email) &&
  isString(val.userGroup) &&
  isString(val.companyType) &&
  isString(val.message);

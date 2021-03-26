import { AccountProfile, AccountProfilePatch } from './types';

/** API */

export const isStatus200 = (status: number) => status >= 200 && status <= 299;

/** Profile */

export const accountProfileToPatch = (data: AccountProfile | undefined): AccountProfilePatch => {
  if (!data) {
    return {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { uid, email, confirmed, createdAt, updatedAt, ...patchData } = data;
  return { ...patchData };
};

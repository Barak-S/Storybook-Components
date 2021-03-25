import { AccountProfile, AccountProfilePatch } from './account';

export const accountProfileToPatch = (data: AccountProfile | undefined): AccountProfilePatch => {
  if (!data) {
    return {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { uid, email, confirmed, createdAt, updatedAt, ...patchData } = data;
  return { ...patchData };
};

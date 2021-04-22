import { User, UserUpdate } from './types';

/** API */

export const isStatus200 = (status: number) => status >= 200 && status <= 299;

/** Profile */

export const userToUpdate = (data: User | undefined): UserUpdate => {
  if (!data) {
    return {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, email, confirmed, createdAt, updatedAt, ...patchData } = data;
  return { ...patchData };
};

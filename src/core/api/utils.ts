import { omit } from 'lodash';

import { User, UserUpdate } from './types';

// API

export const isStatus200 = (status: number) => status >= 200 && status <= 299;

// Profile

export const userToUpdate = (data: User | undefined): UserUpdate =>
  data ? omit(data, ['id', 'email', 'confirmed', 'createdAt', 'updatedAt']) : {};

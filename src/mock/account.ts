import { AccountProfile } from 'core/api';
import faker from 'faker';

import { MockBasicOpt } from './type';

export const mockAccountProfile = ({ seed }: MockBasicOpt = {}): AccountProfile => {
  if (seed) {
    faker.seed(seed);
  }
  return {
    uid: faker.random.uuid(),
    email: faker.internet.email(),
    confirmed: true,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    onboarding: 'profile',
    createdAt: 0,
    updatedAt: 0,
  };
};

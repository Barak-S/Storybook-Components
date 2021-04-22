import { User } from 'core/api';
import faker from 'faker';

import { MockBasicOpt } from './type';

export const mockUser = ({ seed }: MockBasicOpt = {}): User => {
  if (seed) {
    faker.seed(seed);
  }
  return {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    confirmed: true,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  };
};

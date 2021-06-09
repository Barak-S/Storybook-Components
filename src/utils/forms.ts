import { upperFirst } from 'lodash';

export const formKeyToFieldName = (key: string): string => {
  switch (key) {
    case 'phone':
      return 'Phone number';
    case 'firstName':
      return 'First name';
    case 'lastName':
      return 'Last name';
    default:
      return upperFirst(key);
  }
};

import Auth, { CognitoUser } from '@aws-amplify/auth';
import { isString } from 'lodash';
import { errToStr, isUnknowDict } from 'utils';

// SignUp

export interface AuthSignUpInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface CognitoErrResponse {
  code: string;
  message: string;
  name: string;
}

export const isCognitoErrResponse = (val: unknown): val is CognitoErrResponse =>
  isUnknowDict(val) && isString(val.code) && isString(val.message) && isString(val.name);

// Current user

export const authGetCurrentUser = async (): Promise<CognitoUser | undefined> => {
  try {
    return await Auth.currentAuthenticatedUser();
  } catch (err) {
    if (errToStr(err) === 'The user is not authenticated') {
      return undefined;
    } else {
      throw err;
    }
  }
};

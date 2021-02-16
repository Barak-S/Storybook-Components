import Auth, { CognitoUser } from '@aws-amplify/auth';
import { isString } from 'lodash';
import { errToStr, isUnknowDict, Log } from 'utils';

const log = Log('core.api.auth.utils');

// SignUp

export interface AuthSignUpInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface CognitoSignUpResponse {
  user: CognitoUser;
}

interface CognitoErrResponse {
  code: string;
  message: string;
  name: string;
}

export const isCognitoErrResponse = (val: unknown): val is CognitoErrResponse =>
  isUnknowDict(val) && isString(val.code) && isString(val.message) && isString(val.name);

export const authUserSignUp = async ({
  email,
  firstName,
  lastName,
  password,
}: AuthSignUpInput): Promise<CognitoUser> => {
  log.info('signup with firstName=', firstName, ', lastName=', lastName, ', email=', email);
  const attributes = { email, 'custom:firstName': firstName, 'custom:lastName': lastName };
  const { user } = (await Auth.signUp({
    username: email,
    password,
    attributes,
  })) as CognitoSignUpResponse;
  return user;
};

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

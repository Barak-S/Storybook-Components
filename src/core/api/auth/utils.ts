import Auth, { CognitoUser } from '@aws-amplify/auth';
import { appConfig } from 'core/configs';
import { isString } from 'lodash';
import { errToStr, isUnknowDict, Log } from 'utils';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

const log = Log('core.api.auth.context');

// Meta

export const getCognitoMetadata = () => ({
  type: 'web',
  version: appConfig.version,
  env: appConfig.env,
  url: appConfig.url,
});

// SignUp

export interface CognitoSignUpInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface CognitoSignUpResponse {
  user: CognitoUser;
}

export const cogntitoUserSignUp = async ({
  email,
  firstName,
  lastName,
  password,
}: CognitoSignUpInput): Promise<CognitoUser> => {
  log.info('signup with firstName=', firstName, ', lastName=', lastName, ', email=', email);
  const attributes = { email, 'custom:firstName': firstName, 'custom:lastName': lastName };
  const { user } = (await Auth.signUp({
    username: email,
    password,
    attributes,
    clientMetadata: getCognitoMetadata(),
  })) as CognitoSignUpResponse;
  return user;
};

// User

export const getCognitoCurUser = async (): Promise<CognitoUser | undefined> => {
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

const getUserAccessToken = async (user: CognitoUser): Promise<string | undefined> =>
  new Promise((resolve, reject) => {
    user.getSession((err: null | Error, session: CognitoUserSession | null) => {
      if (err) {
        return reject(err);
      }
      if (!session) {
        return resolve(undefined);
      }
      return resolve(session.getAccessToken().getJwtToken());
    });
  });

// Confirmation

export const isCognitoUserEmailComfirmed = async (user: CognitoUser): Promise<boolean> =>
  new Promise((resolve, reject) => {
    log.debug('getting user attributes');
    user.getUserAttributes((err, data) => {
      if (err) {
        log.err('getting user attributes err=', err);
        return reject(err);
      }
      log.debug('getting user attributes done');
      const attr = data?.find(itm => itm.Name === 'email_verified');
      if (!attr) {
        log.warn('email_verified attribute not found');
        return resolve(false);
      }
      log.trace('email_verified attr=', attr);
      resolve(attr.Value === 'true' ? true : false);
    });
  });

export const verifyCognitoEmail = async (user: CognitoUser): Promise<void> => {
  log.info('verify cognito email');
  const accessToken = await getUserAccessToken(user);
  if (!accessToken) {
    throw new Error('Unable to receive an access token');
  }
  return Auth.verifyUserAttribute(user, 'email', { ...getCognitoMetadata(), accessToken });
};

export const verifyCognitoEmailSubmit = async (user: CognitoUser, code: string): Promise<string> => {
  log.info('verify cognito email submit');
  return Auth.verifyUserAttributeSubmit(user, 'email', code);
};

// Errors

interface CognitoErrResponse {
  code: string;
  message: string;
  name: string;
}

export const isCognitoErrResponse = (val: unknown): val is CognitoErrResponse =>
  isUnknowDict(val) && isString(val.code) && isString(val.message) && isString(val.name);

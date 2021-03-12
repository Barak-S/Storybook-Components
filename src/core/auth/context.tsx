import Auth, { CognitoUser } from '@aws-amplify/auth';
import { appConfig } from 'core/configs';
import { Log } from 'core/log';
import React, { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';

import {
  CognitoSignUpInput,
  cogntitoUserSignUp,
  getCognitoCurUser,
  getCognitoMetadata,
  isCognitoUserEmailComfirmed,
  verifyCognitoEmail,
} from './utils';

const log = Log('core.api.auth.context');

interface AuthContext {
  loaded: boolean;
  userConfirmed: boolean;
  user?: CognitoUser;
  signIn: (email: string, password: string) => Promise<CognitoUser>;
  signUp: (data: CognitoSignUpInput) => Promise<CognitoUser>;
  forgotPassowrd: (email: string) => Promise<void>;
  forgotPasswordSubmit: (username: string, code: string, pass: string) => Promise<void>;
  resendEmailConfirmation: () => Promise<void>;
  signOut: () => void;
}

const Context = createContext<AuthContext | undefined>(undefined);

const mockFn = () => {
  throw new Error('Mock function');
};

export const useAuth = (): AuthContext => {
  const val = useContext(Context);
  const mockData: AuthContext = {
    userConfirmed: false,
    loaded: false,
    signIn: mockFn,
    signUp: mockFn,
    forgotPassowrd: mockFn,
    forgotPasswordSubmit: mockFn,
    resendEmailConfirmation: mockFn,
    signOut: () => undefined,
  };
  return val ? val : mockData;
};

export const AuthProvider: FC = ({ children }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<CognitoUser | undefined>(undefined);
  const [userConfirmed, setUserConfirmed] = useState<boolean>(false);

  useEffect(() => {
    loadCurUser().catch(err => log.err(err));
  }, []);

  const loadCurUser = async () => {
    log.info('loading cur user');
    try {
      const curUser = await getCognitoCurUser();
      log.info(curUser ? 'user authrized' : 'user not authorized');
      if (curUser) {
        const isEmailConfirmed = await isCognitoUserEmailComfirmed(curUser);
        setUserConfirmed(isEmailConfirmed);
      }
      setUser(curUser);
    } catch (err: unknown) {
      log.err('loading user err=', err);
    } finally {
      setLoaded(true);
    }
  };

  // Sign in

  const signIn = async (email: string, password: string): Promise<CognitoUser> => {
    // ESLint rule dissabled cos of wrong return parameter from the @aws-amplify lib
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const user = await (Auth.signIn(email, password) as Promise<CognitoUser>);
    // Sending email verification after sign in
    const isEmailConfirmed = await isCognitoUserEmailComfirmed(user);
    if (!isEmailConfirmed) {
      await verifyCognitoEmail(user);
    }
    setUserConfirmed(isEmailConfirmed);
    setUser(user);
    return user;
  };

  // Sign up

  const signUp = async (data: CognitoSignUpInput): Promise<CognitoUser> => {
    const user = await cogntitoUserSignUp(data);
    return user;
  };

  // Forgot password

  const forgotPassowrd = async (email: string) => Auth.forgotPassword(email, getCognitoMetadata());

  const forgotPasswordSubmit = async (username: string, code: string, pass: string) =>
    Auth.forgotPasswordSubmit(username, code, pass, getCognitoMetadata());

  // Email confirmation

  const resendEmailConfirmation = async (): Promise<void> => {
    if (!user) {
      log.warn('trying to resend email confirmation while user is empty');
      return;
    }
    return verifyCognitoEmail(user);
  };

  // Sign out

  const signOut = () => {
    getCognitoCurUser()
      .then(curUser => {
        if (curUser) {
          curUser.signOut();
          if (appConfig.features.socialSignIn) {
            // navigateToSignOutUrl();
          }
        } else {
          log.err('trying to sign out user when user not authorized');
        }
        setUser(undefined);
      })
      .catch(err => {
        log.err('user sign out err=', err);
        setUser(undefined);
      });
  };

  // const navigateToSignOutUrl = () => {
  //   location.replace(
  //     `https://${appConfig.cognito.domain}/logout?${objToQs({
  //       client_id: appConfig.cognito.userPoolWebClientId,
  //       logout_uri: appConfig.url,
  //     })}`,
  //   );
  // };

  const value = useMemo(
    () => ({
      loaded,
      userConfirmed,
      user,
      signIn,
      signUp,
      signOut,
      forgotPassowrd,
      forgotPasswordSubmit,
      resendEmailConfirmation,
    }),
    [loaded, user, userConfirmed],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

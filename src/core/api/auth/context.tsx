import Auth, { CognitoUser } from '@aws-amplify/auth';
import { appConfig } from 'core/configs';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { errToStr, Log } from 'utils';

import { authGetCurrentUser, AuthSignUpInput, authUserSignUp } from './utils';

const log = Log('core.api.auth.context');

interface AuthContext {
  loaded: boolean;
  user?: CognitoUser;
  signIn: (email: string, password: string) => Promise<CognitoUser>;
  signUp: (data: AuthSignUpInput) => Promise<CognitoUser>;
  forgotPassowrd: (email: string) => Promise<void>;
  forgotPasswordSubmit: (username: string, code: string, pass: string) => Promise<void>;
  signOut: () => void;
}

const Context = createContext<AuthContext | undefined>(undefined);

const mockFn = () => {
  throw new Error('Mock function');
};

const getClientMetadata = () => ({
  version: appConfig.version,
  env: appConfig.env,
});

export const useAuth = (): AuthContext => {
  const val = useContext(Context);
  const mockData = {
    loaded: false,
    signIn: mockFn,
    signUp: mockFn,
    forgotPassowrd: mockFn,
    forgotPasswordSubmit: mockFn,
    signOut: () => undefined,
  };
  return val ? val : mockData;
};

export const AuthProvider: FC = ({ children }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<CognitoUser | undefined>(undefined);

  useEffect(() => {
    loadCurUser();
  }, []);

  const loadCurUser = async () => {
    log.info('loading cur user');
    try {
      const user = await getCurUser();
      log.info(user ? 'user authrized' : 'user not authorized');
      setUser(user);
      setLoaded(true);
    } catch (err) {
      setLoaded(true);
      log.err('loading user err=', err);
    }
  };

  const getCurUser = async (): Promise<CognitoUser | undefined> => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (err) {
      if (['The user is not authenticated', 'No current user'].includes(errToStr(err) || '')) {
        return undefined;
      } else {
        throw err;
      }
    }
  };

  const signIn = async (email: string, password: string): Promise<CognitoUser> => {
    const user = await Auth.signIn(email, password);
    setUser(user);
    return user;
  };

  const forgotPassowrd = async (email: string) => Auth.forgotPassword(email, getClientMetadata());

  const forgotPasswordSubmit = async (username: string, code: string, pass: string) =>
    Auth.forgotPasswordSubmit(username, code, pass, getClientMetadata());

  const signUp = async (data: AuthSignUpInput): Promise<CognitoUser> => {
    const user = await authUserSignUp(data);
    return user;
  };

  const signOut = () => {
    authGetCurrentUser()
      .then(curUser => {
        if (curUser) {
          curUser.signOut();
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

  return (
    <Context.Provider value={{ loaded, user, signIn, signUp, signOut, forgotPassowrd, forgotPasswordSubmit }}>
      {children}
    </Context.Provider>
  );
};

import Auth, { CognitoUser } from '@aws-amplify/auth';
import { appConfig } from 'core/configs';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { Log } from 'utils';

import { authGetCurrentUser, AuthSignUpInput, authUserSignUp } from './utils';

const log = Log('core.api.auth.context');

interface AuthContext {
  loaded: boolean;
  user?: CognitoUser;
  signIn: (email: string, password: string) => Promise<CognitoUser>;
  signUp: (data: AuthSignUpInput) => Promise<CognitoUser>;
  signOut: () => void;
}

const Context = createContext<AuthContext | undefined>(undefined);

export const useAuth = (): AuthContext => {
  const val = useContext(Context);
  return val
    ? val
    : {
        loaded: false,
        signIn: () => {
          throw new Error('Mock function');
        },
        signUp: () => {
          throw new Error('Mock function');
        },
        signOut: () => undefined,
      };
};

export const AuthProvider: FC = ({ children }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<CognitoUser | undefined>(undefined);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    log.info('updading data');
    try {
      const user = await authGetCurrentUser();
      log.info(user ? 'user authrized' : 'user not authorized');
      setUser(user);
      setLoaded(true);
    } catch (err) {
      setLoaded(true);
      log.err('loading user err=', err);
    }
  };

  const signIn = async (email: string, password: string): Promise<CognitoUser> => {
    const user = await Auth.signIn(email, password, {
      version: appConfig.version,
      env: appConfig.env,
    });
    setUser(user);
    return user;
  };

  const signUp = async (data: AuthSignUpInput): Promise<CognitoUser> => {
    const user = await authUserSignUp(data);
    setUser(user);
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

  return <Context.Provider value={{ loaded, user, signIn, signUp, signOut }}>{children}</Context.Provider>;
};

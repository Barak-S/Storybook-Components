import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from 'screens/consts';

import AuthRecoverPassScreen from './RecoverPass';
import AuthResetPass from './ResetPass';
import AuthSignInScreen from './SignIn';
import AuthSignUpScreen from './SignUp';

export const AuthScreens: FC = () => {
  return (
    <Switch>
      <Route path={routes.auth.signup}>
        <AuthSignUpScreen />
      </Route>
      <Route path={routes.auth.signin}>
        <AuthSignInScreen />
      </Route>
      <Route path={routes.auth.recover}>
        <AuthRecoverPassScreen />
      </Route>
      <Route path={routes.auth.reset}>
        <AuthResetPass />
      </Route>
      <Redirect to={routes.auth.signin} />
    </Switch>
  );
};

export default AuthScreens;

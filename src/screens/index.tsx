import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AuthSignInScreen from './Auth/SignIn';
import AuthSignUpScreen from './Auth/SignUp';
import { routes } from './consts';

export const Screens: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.signup}>
          <AuthSignUpScreen />
        </Route>
        <Route path={routes.signin}>
          <AuthSignInScreen />
        </Route>
        <Redirect to={routes.signup} />
      </Switch>
    </Router>
  );
};

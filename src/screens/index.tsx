import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AuthSignUpScreen from './Auth/SignUp';
import { routes } from './consts';

export const Screens: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.signup}>
          <AuthSignUpScreen />
        </Route>
        <Redirect to={routes.signup} />
      </Switch>
    </Router>
  );
};

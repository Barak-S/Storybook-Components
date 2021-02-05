import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AuthScreen from './Auth';
import { routes } from './consts';

export const Screens: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.auth}>
          <AuthScreen />
        </Route>
        <Redirect to={routes.auth} />
      </Switch>
    </Router>
  );
};

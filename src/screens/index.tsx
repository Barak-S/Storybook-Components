import { useAuth } from 'core/api';
import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AuthSignInScreen from './Auth/SignIn';
import AuthSignUpScreen from './Auth/SignUp';
import { routes } from './consts';
import DashboardScreen from './Dashboard';

const ProtectedRoute: FC<{ path: string; exact?: boolean }> = ({ path, exact, children }) => {
  const { user: authUser } = useAuth();
  const authorized = !!authUser;
  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) =>
        authorized ? children : <Redirect to={{ pathname: routes.signin, state: { from: location } }} />
      }
    />
  );
};

export const Screens: FC = () => {
  const { loaded: authLoaded, user: authUser } = useAuth();

  if (!authLoaded) return null;

  return !authLoaded ? null : (
    <Router>
      {!authUser ? (
        <Switch>
          <Route path={routes.signup}>
            <AuthSignUpScreen />
          </Route>
          <Route path={routes.signin}>
            <AuthSignInScreen />
          </Route>
          <Redirect to={routes.signin} />
        </Switch>
      ) : (
        <Switch>
          <ProtectedRoute path={routes.dashboard}>
            <DashboardScreen />
          </ProtectedRoute>
          <Redirect to={routes.dashboard} />
        </Switch>
      )}
    </Router>
  );
};

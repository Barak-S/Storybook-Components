import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AuthScreens from './Auth';
import { routes } from './consts';
import DashboardScreens from './Dashboard';

interface Props {
  logined: boolean;
}

export const Screens: FC<Props> = ({ logined }) => {
  return (
    <Router>
      {!logined ? (
        <AuthScreens />
      ) : (
        <Switch>
          <Route path={routes.dashboard.index}>
            <DashboardScreens />
          </Route>
          <Redirect to={routes.dashboard.index} />
        </Switch>
      )}
    </Router>
  );
};

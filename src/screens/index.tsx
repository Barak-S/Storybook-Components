import { Text } from 'components/Common';
import { useAuth } from 'core/api';
import { appConfig } from 'core/configs';
import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Styles, mx } from 'styles';

import AuthScreens from './Auth';
import { routes } from './consts';
import DashboardScreens from './Dashboard';

export const Screens: FC = () => {
  const { loaded, user } = useAuth();
  return !loaded ? null : (
    <>
      <Router>
        {!user ? (
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
      {appConfig.env !== 'prd' && (
        <Text style={styles.envLabel} block={true}>{`v${appConfig.version} (${appConfig.env})`}</Text>
      )}
    </>
  );
};

const styles: Styles = {
  envLabel: {
    position: 'fixed',
    right: 8,
    bottom: 8,
    ...mx.font(10, 'inherit', 500),
    zIndex: 100,
  },
};

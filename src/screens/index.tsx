import React, { FC } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import AuthScreens from './Auth';
import DashboardScreens from './Dashboard';
// import PaywallScreens from './Paywall';

interface Props {
  loggedIn: boolean;
}

export const Screens: FC<Props> = ({ loggedIn }) => {
  //
  // TODO: Need to check subscription status here
  //
  // const user = useSelector(s => s.user.data);

  return (
    <Router>
      {!loggedIn ? (
        <AuthScreens />
      ) : (
        // ) : user?.org?.subscriptions?.length === 0 ? ( // something like this.... i'm guessing.
        // <PaywallScreens />
        <DashboardScreens />
      )}
    </Router>
  );
};

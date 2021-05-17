import React, { FC } from 'react';
// import { useSelector } from 'store';

import { BrowserRouter as Router } from 'react-router-dom';

import AuthScreens from './Auth';
import DashboardScreens from './Dashboard';
// import RegisterScreens from './Registration';

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
        // ) : user && user.subscriptions && user.subscriptions.length === 0 ? ( // something like this.... i'm guessing.
        //   <RegisterScreens />
        <DashboardScreens />
      )}
    </Router>
  );
};

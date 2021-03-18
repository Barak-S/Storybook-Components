import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthScreens from './Auth';
import DashboardScreens from './Dashboard';

interface Props {
  logedIn: boolean;
}

export const Screens: FC<Props> = ({ logedIn }) => {
  return <Router>{!logedIn ? <AuthScreens /> : <DashboardScreens />}</Router>;
};

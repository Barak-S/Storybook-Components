import { action } from '@storybook/addon-actions';
import React from 'react';

import DashboardAppBar from '.';

export default {
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
};

export const Basic = () => (
  <DashboardAppBar
    onLogoClick={action('onLogoClick')}
    onLogoutClick={action('onLogoutClick')}
    onMobileMenuClick={action('onMobileMenuClick')}
    onMenuBtnClick={action('onMenuBtnClick')}
  />
);

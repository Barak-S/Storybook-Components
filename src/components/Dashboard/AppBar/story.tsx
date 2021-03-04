import { action } from '@storybook/addon-actions';
import React, { FC } from 'react';

import DashboardAppBar, { DashboardAppBarProps } from '.';

export default {
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
};

export const Basic: FC<Partial<DashboardAppBarProps>> = props => (
  <DashboardAppBar
    onLogoClick={action('onLogoClick')}
    onLogoutClick={action('onLogoutClick')}
    onMobileMenuClick={action('onMobileMenuClick')}
    onMenuBtnClick={action('onMenuBtnClick')}
    {...props}
  />
);

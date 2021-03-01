import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React, { FC } from 'react';

import DashboardAppBar, { DashboardAppBarProps } from '.';

export default {
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
  decorators: [withKnobs],
};

const DashboardAppBarWrap: FC<Omit<DashboardAppBarProps, 'tabValue' | 'onTabClick'>> = props => {
  return <DashboardAppBar tabValue={0} {...props} />;
};

export const Basic = () => (
  <DashboardAppBarWrap
    onTabChange={action('onTabChange')}
    onLogoClick={action('onLogoClick')}
    onLogoutClick={action('onLogoutClick')}
  />
);

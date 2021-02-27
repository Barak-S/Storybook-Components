import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React, { FC, useState } from 'react';

import DashboardAppBar, { DashboardAppBarProps } from '.';

export default {
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
  decorators: [withKnobs],
};

const DashboardAppBarWrap: FC<Omit<DashboardAppBarProps, 'tabValue' | 'onTabClick'>> = props => {
  const [value, setValue] = useState<number>(0);

  const handleTabClick = (value: number) => {
    action('onTabClick')();
    setValue(value);
  };

  return <DashboardAppBar tabValue={value} onTabClick={handleTabClick} {...props} />;
};

export const Basic = () => (
  <DashboardAppBarWrap
    onTabChange={action('onTabChange')}
    onLogoClick={action('onLogoClick')}
    onLogoutClick={action('onLogoutClick')}
  />
);

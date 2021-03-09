import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import DashboardAppBar, { DashboardAppBarProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
}))();

export const Basic: StoryFC<Props> = props => (
  <DashboardAppBar
    onLogoClick={action('onLogoClick')}
    onLogoutClick={action('onLogoutClick')}
    onMobileMenuClick={action('onMobileMenuClick')}
    onMenuBtnClick={action('onMenuBtnClick')}
    {...props}
  />
);

import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, StoryMeta } from 'styles';

import DashboardAppBar, { DashboardAppBarProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
  args: {
    onLogoClick: action('onLogoClick'),
    onLogoutClick: action('onLogoutClick'),
    onMobileMenuClick: action('onMobileMenuClick'),
    onMenuBtnClick: action('onMenuBtnClick'),
  },
}))();

export const Basic: Story<Props> = args => <DashboardAppBar {...args} />;

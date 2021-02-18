import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import DashboardAppBar from '.';

export default {
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
  decorators: [withKnobs],
};

export const Basic = () => (
  <DashboardAppBar onLogoClick={action('onLogoClick')} onLogoutClick={action('onLogoutClick')} />
);

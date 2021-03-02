import { action } from '@storybook/addon-actions';
import React from 'react';

import DashboardEmailConfirmScene from '.';

export default {
  title: 'screens/Dashboard/Events/scenes/EmailConfirm',
  component: DashboardEmailConfirmScene,
};

export const Basic = () => <DashboardEmailConfirmScene onSubmit={action('onSubmit')} />;

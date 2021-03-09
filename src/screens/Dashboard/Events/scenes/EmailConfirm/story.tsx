import { action } from '@storybook/addon-actions';
import React, { FC } from 'react';

import DashboardEmailConfirmView from './view';

export default {
  title: 'screens/Dashboard/Events/scenes/EmailConfirm',
  component: DashboardEmailConfirmView,
};

export const Basic: FC = props => <DashboardEmailConfirmView onSubmit={action('onSubmit')} {...props} />;

import { action } from '@storybook/addon-actions';
import React, { FC } from 'react';

import DashboardEmailConfirmScene, { DashboardEmailConfirmSceneProps } from '.';

export default {
  title: 'screens/Dashboard/Events/scenes/EmailConfirm',
  component: DashboardEmailConfirmScene,
};

export const Basic: FC<DashboardEmailConfirmSceneProps> = args => (
  <DashboardEmailConfirmScene onSubmit={action('onSubmit')} {...args} />
);

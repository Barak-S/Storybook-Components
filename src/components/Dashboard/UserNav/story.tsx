import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import DashboardUseNav from '.';

export default {
  title: 'components/Dashboard/UserNav',
  component: DashboardUseNav,
  decorators: [withKnobs],
};

export const Basic = () => <DashboardUseNav onBtnClick={action('onBtnClick')} />;

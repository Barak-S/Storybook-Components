import { action } from '@storybook/addon-actions';
import React from 'react';

import DashboardUseNav from '.';

export default {
  title: 'components/Dashboard/UserNav',
  component: DashboardUseNav,
};

export const Basic = () => <DashboardUseNav onBtnClick={action('onBtnClick')} />;

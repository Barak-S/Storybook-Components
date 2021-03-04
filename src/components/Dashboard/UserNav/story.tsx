import { action } from '@storybook/addon-actions';
import React, { FC } from 'react';

import DashboardUseNav, { DashboardUserNavProps } from '.';

export default {
  title: 'components/Dashboard/UserNav',
  component: DashboardUseNav,
  argTypes: {
    btnsBackgroundColor: {
      control: 'color',
    },
  },
};

export const Basic: FC<Partial<DashboardUserNavProps>> = props => (
  <DashboardUseNav onBtnClick={action('onBtnClick')} {...props} />
);

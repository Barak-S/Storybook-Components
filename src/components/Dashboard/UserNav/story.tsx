import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import DashboardUseNav, { DashboardUserNavProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/UserNav',
  component: DashboardUseNav,
  argTypes: {
    btnsBackgroundColor: {
      control: 'color',
    },
  },
}))();

export const Basic: Story<Props> = props => <DashboardUseNav onBtnClick={action('onBtnClick')} {...props} />;

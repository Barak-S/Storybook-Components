import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import DashboardUseNav, { DashboardUserNavProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Dashboard/UserNav',
  component: DashboardUseNav,
  argTypes: {
    btnsBackgroundColor: {
      control: 'color',
    },
  },
}))();

export const Basic: StoryFC<Props> = props => <DashboardUseNav onBtnClick={action('onBtnClick')} {...props} />;

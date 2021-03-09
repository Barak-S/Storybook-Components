import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import DashboardEmailConfirmView, { DashboardEmailConfirmViewProps as Props } from './view';

export default ((): StoryConf<Props> => ({
  title: 'screens/Dashboard/Events/scenes/EmailConfirm',
  component: DashboardEmailConfirmView,
  args: {
    onSubmit: action('onSubmit'),
  },
}))();

export const Basic: StoryFC<Props> = props => <DashboardEmailConfirmView {...props} />;

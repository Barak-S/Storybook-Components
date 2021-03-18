import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import DashboardEmailConfirmView, { DashboardEmailConfirmViewProps as Props } from './view';

export default ((): StoryMeta<Props> => ({
  title: 'screens/Dashboard/Events/scenes/EmailConfirm',
  component: DashboardEmailConfirmView,
  args: {
    onSubmit: action('onSubmit'),
  },
}))();

export const Basic: Story<Props> = args => <DashboardEmailConfirmView {...args} />;

import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import DashboardEmailConfirmView, { DashboardEmailConfirmViewProps as Props } from './view';

export default ((): StoryMeta<Props> => ({
  title: 'screens/Dashboard/Events/scenes/EmailConfirm',
  component: DashboardEmailConfirmView,
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <DashboardEmailConfirmView {...args} />;

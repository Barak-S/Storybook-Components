import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import DashboardAppBar, { DashboardAppBarProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
  args: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <DashboardAppBar {...args} />;

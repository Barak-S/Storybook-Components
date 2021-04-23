import { mockUser } from 'mock';
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import DashboardAppBar, { DashboardAppBarProps as Props } from '.';

const user = mockUser();

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/AppBar',
  component: DashboardAppBar,
  args: {
    user,
  },
  parameters: {
    layout: 'fullscreen',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <DashboardAppBar {...args} />;

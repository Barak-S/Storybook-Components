import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import DashboardUseNav, { DashboardUserNavProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/UserNav',
  component: DashboardUseNav,
  argTypes: {
    btnsBackgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <DashboardUseNav {...args} />;

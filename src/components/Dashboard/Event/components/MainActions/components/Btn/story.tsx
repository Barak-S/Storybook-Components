import React from 'react';
import { colors } from 'styles';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import DashboardEventMainActionsBtn, { DashboardEventMainActionsBtnProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Event/components/MainActions/components/Btn',
  component: DashboardEventMainActionsBtn,
  args: {
    icon: 'envelope',
    children: 'Invite Team Members',
  },
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
    backgrounds: {
      default: 'paleGreyTwo',
      values: [{ name: 'paleGreyTwo', value: colors.paleGreyTwo }],
    },
  },
}))();

export const Basic: Story<Props> = args => <DashboardEventMainActionsBtn {...args} />;

import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import TeamMemberInviteCard, { TeamMemberInviteCardProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Team/MemberInviteCard',
  component: TeamMemberInviteCard,
  args: {
    data: {
      id: '1',
      firstName: 'Eddie',
      lastName: 'Hunt',
      email: 'eddie.hunt@example.com',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      role: 'manager',
      status: 'pending',
      createdAt: new Date(0).toISOString(),
      updatedAt: new Date(0).toISOString(),
    },
  },
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => <TeamMemberInviteCard {...args} />;

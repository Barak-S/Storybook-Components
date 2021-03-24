import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import TeamMemberInviteCard, { TeamMemberInviteCardProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Team/MemberInviteCard',
  component: TeamMemberInviteCard,
  args: {
    data: {
      firstName: 'Eddie',
      lastName: 'Hunt',
      companyName: 'Some company name',
      email: 'eddie.hunt@example.com',
      userGroup: 'Admins',
      companyType: 'Iris inc.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => <TeamMemberInviteCard {...args} />;

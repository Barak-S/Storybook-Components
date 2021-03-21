import React from 'react';
import { Story, StoryMeta } from 'utils';

import AccountSection, { ProfileAccountSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/AccountSection',
  component: AccountSection,
}))();

export const Basic: Story<Props> = args => <AccountSection {...args} />;

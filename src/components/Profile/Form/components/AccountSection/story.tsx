import React from 'react';
import { Story, StoryMeta } from 'styles';

import AccountSection, { ProfileFormAccountSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/AccountSection',
  component: AccountSection,
}))();

export const Basic: Story<Props> = args => <AccountSection {...args} />;

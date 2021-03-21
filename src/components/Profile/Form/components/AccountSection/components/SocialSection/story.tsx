import React from 'react';
import { Story, StoryMeta } from 'utils';

import SocialSection, { ProfileFormAccountSectionSocialSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/AccountSection/components/SocialSection',
  component: SocialSection,
}))();

export const Basic: Story<Props> = args => <SocialSection {...args} />;

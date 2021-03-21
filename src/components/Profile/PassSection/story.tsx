import React from 'react';
import { Story, StoryMeta } from 'utils';

import ProfilePassSection, { ProfilePassSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/PassSection',
  component: ProfilePassSection,
}))();

export const Basic: Story<Props> = args => <ProfilePassSection {...args} />;

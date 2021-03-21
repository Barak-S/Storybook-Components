import React from 'react';
import { Story, StoryMeta } from 'utils';

import ProfileFormPasswordSection, { ProfileFormPasswordSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/PasswordSection',
  component: ProfileFormPasswordSection,
}))();

export const Basic: Story<Props> = args => <ProfileFormPasswordSection {...args} />;

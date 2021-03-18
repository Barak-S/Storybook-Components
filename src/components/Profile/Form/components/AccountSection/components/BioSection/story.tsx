import React from 'react';
import { Story, StoryMeta } from 'styles';

import BioSection, { ProfileFormAccountSectionBioSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/AccountSection/components/BioSection',
  component: BioSection,
}))();

export const Basic: Story<Props> = args => <BioSection {...args} />;

import React from 'react';
import { Story, StoryMeta } from 'styles';

import ImageSection, { ProfileFormAccountSectionImageSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/AccountSection/components/ImageSection',
  component: ImageSection,
}))();

export const Basic: Story<Props> = args => <ImageSection {...args} />;

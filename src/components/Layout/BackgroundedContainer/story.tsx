import React from 'react';
import { StoryMeta, Story } from 'utils';

import BackgroundedContainer, { BackgroundedContainerProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Layout/BackgroundedContainer',
  component: BackgroundedContainer,
}))();

export const Basic: Story<Props> = args => <BackgroundedContainer {...args}>{'%children%'}</BackgroundedContainer>;

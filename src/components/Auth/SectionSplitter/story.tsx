import React from 'react';
import { StoryMeta, Story } from 'utils';

import AuthSectionSplitter, { AuthSectionSplitterProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Auth/SectionSplitter',
  component: AuthSectionSplitter,
}))();

export const Basic: Story<Props> = args => <AuthSectionSplitter {...args}>{'Text'}</AuthSectionSplitter>;

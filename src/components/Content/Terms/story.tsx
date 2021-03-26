import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import ContentTerms, { ContentTermsProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Content/Terms',
  component: ContentTerms,
  args: {},
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <ContentTerms {...args} />;

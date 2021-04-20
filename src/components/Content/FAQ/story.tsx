import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import ContentFAQ, { ContentFAQProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Content/FAQ',
  component: ContentFAQ,
  args: {},
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <ContentFAQ {...args} />;

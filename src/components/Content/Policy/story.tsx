import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import ContentPolicy, { ContentPolicyProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Content/Policy',
  component: ContentPolicy,
  args: {},
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <ContentPolicy {...args} />;

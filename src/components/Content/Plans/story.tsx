import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import ContentPlans, { ContentPlansProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Content/Plans',
  component: ContentPlans,
  args: {},
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <ContentPlans {...args} />;

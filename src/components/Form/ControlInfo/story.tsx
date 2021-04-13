import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormControlInfo, { FormControlInfoProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/ControlInfo',
  component: FormControlInfo,
  args: {
    title: 'Control Title',
    description: 'Control Description',
    hint: 'Control Hint',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormControlInfo {...args} />;

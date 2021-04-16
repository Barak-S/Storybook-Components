import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormRadioInput, { FormRadioInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/RadioInput',
  component: FormRadioInput,
  args: {
    label: 'Radio',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormRadioInput {...args} />;

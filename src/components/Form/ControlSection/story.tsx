import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormControlSection, { FormControlSectionProps as Props } from '.';
import FormTextInput from '../TextInput';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/ControlSection',
  component: FormControlSection,
  args: {
    title: 'Title',
    description: 'Description',
    hint: 'Hint',
    children: <FormTextInput />,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormControlSection {...args} />;

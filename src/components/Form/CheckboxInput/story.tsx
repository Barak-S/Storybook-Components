import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormCheckboxInput, { FormCheckboxInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/CheckboxInput',
  component: FormCheckboxInput,
  args: {
    label: 'Checkbox',
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormCheckboxInput {...args} />;

export const DefaultChecked: Story<Props> = args => <FormCheckboxInput {...args} defaultChecked />;

export const Disabled: Story<Props> = args => <FormCheckboxInput {...args} disabled />;

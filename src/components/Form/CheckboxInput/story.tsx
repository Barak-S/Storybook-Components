import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

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

export const Basic: Story<Props> = props => <FormCheckboxInput {...props} />;

export const DefaultChecked: Story<Props> = props => <FormCheckboxInput {...props} defaultChecked />;

export const Disabled: Story<Props> = props => <FormCheckboxInput {...props} disabled />;

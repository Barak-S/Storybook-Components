import React from 'react';
import { Story, StoryMeta } from 'styles';

import FormSelect, { FormSelectProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/Select',
  component: FormSelect,
  args: {
    title: 'Items',
    placeholder: 'Placeholder',
    options: [
      { value: 0, label: 'item1' },
      { value: 1, label: 'item2' },
    ],
  },
  parameters: {
    layout: 'centered',
  },
}))();

export const Base: Story<Props> = props => <FormSelect {...props} />;

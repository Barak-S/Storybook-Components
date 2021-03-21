import { View } from 'components/Common';
import React from 'react';
import { Story, StoryMeta } from 'utils';

import FormSelect, { FormSelectProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/Select',
  component: FormSelect,
  args: {
    label: 'Select item',
    options: [{ value: 'option 1' }, { value: 'option 2' }, { value: 'option 3' }, { value: 'option 4' }],
  },
  parameters: {
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => {
  return (
    <View style={{ width: 300 }}>
      <FormSelect {...args} />
    </View>
  );
};

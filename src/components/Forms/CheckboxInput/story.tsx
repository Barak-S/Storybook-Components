import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import CheckboxInput, { CheckboxInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Forms/CheckboxInput',
  component: CheckboxInput,
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <CheckboxInput label="Checkbox" {...props} />
    <CheckboxInput label="Password" defaultChecked {...props} />
    <CheckboxInput label="Password" disabled {...props} />
  </View>
);

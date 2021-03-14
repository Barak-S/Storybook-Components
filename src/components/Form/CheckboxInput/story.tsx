import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import FormCheckboxInput, { FormCheckboxInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/CheckboxInput',
  component: FormCheckboxInput,
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormCheckboxInput label="Checkbox" {...props} />
    <FormCheckboxInput label="Password" defaultChecked {...props} />
    <FormCheckboxInput label="Password" disabled {...props} />
  </View>
);

import { View } from 'components/Common';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import CheckboxInput, { CheckboxInputProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Forms/CheckboxInput',
  component: CheckboxInput,
}))();

export const Basic: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <CheckboxInput label="Checkbox" {...props} />
    <CheckboxInput label="Password" defaultChecked {...props} />
    <CheckboxInput label="Password" disabled {...props} />
  </View>
);

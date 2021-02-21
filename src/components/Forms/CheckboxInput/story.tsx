import React from 'react';

import CheckboxInput from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Forms/CheckboxInput',
  component: CheckboxInput,
};

export const Basic = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <CheckboxInput label="Checkbox" />
    <CheckboxInput label="Password" defaultChecked />
    <CheckboxInput label="Password" disabled />
  </View>
);

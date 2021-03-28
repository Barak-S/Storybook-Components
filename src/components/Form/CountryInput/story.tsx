import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormCountryInput, { FormCountryInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/CountryInput',
  component: FormCountryInput,
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => {
  return (
    <View style={{ width: 300 }}>
      <FormCountryInput {...args} />
    </View>
  );
};

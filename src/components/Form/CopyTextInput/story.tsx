import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormCopyTextInput, { FormCopyTextInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/FormCopyTextInput',
  component: FormCopyTextInput,
  args: {
    url: 'https://www.digital-oasis.com/eventname',
  },
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => {
  return (
    <View style={{ width: 500 }}>
      <FormCopyTextInput {...args} />
    </View>
  );
};

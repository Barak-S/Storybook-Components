import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, sbStyles, Story, StoryMeta } from 'utils';

import TextButton, { TextButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/Text',
  component: TextButton,
  args: {
    children: 'Text button',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => (
  <View column>
    <TextButton {...args} style={sbStyles.mb10} />
    <TextButton {...args} disabled />
  </View>
);

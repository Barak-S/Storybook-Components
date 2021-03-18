import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import LineAwesomeIcon, { LineAwesomeIconProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Icons/LineAwesome',
  component: LineAwesomeIcon,
  argTypes: {
    color: {
      control: 'color',
      defaultValue: '#000',
    },
    size: {
      control: 'range',
      defaultValue: 20,
      min: 0,
      max: 100,
      step: 1,
    },
  },
}))();

export const Basic: Story<Props> = args => (
  <View row style={{ display: 'flex', width: 300, padding: 20 }}>
    <LineAwesomeIcon {...args} type="skull-crossbones" />
    <LineAwesomeIcon {...args} type="radiation-alt" />
    <LineAwesomeIcon {...args} type="envira" />
  </View>
);

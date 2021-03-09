import { View } from 'components/Common';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import LineAwesomeIcon, { LineAwesomeIconProps as Props } from '.';

export default ((): StoryConf<Props> => ({
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

export const Basic: StoryFC<Props> = props => (
  <View row style={{ display: 'flex', width: 300, padding: 20 }}>
    <LineAwesomeIcon type="skull-crossbones" {...props} />
    <LineAwesomeIcon type="radiation-alt" {...props} />
    <LineAwesomeIcon type="envira" {...props} />
  </View>
);

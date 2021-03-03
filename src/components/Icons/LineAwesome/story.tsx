import { View } from 'components/Common';
import React, { FC } from 'react';

import LineAwesomeIcon, { LineAwesomeIconProps } from '.';

export default {
  title: 'Components/Icons/LineAwesomeIcon',
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
};

export const Basic: FC<Partial<LineAwesomeIconProps>> = props => (
  <View row style={{ display: 'flex', width: 300, padding: 20 }}>
    <LineAwesomeIcon type="skull-crossbones" {...props} />
    <LineAwesomeIcon type="radiation-alt" {...props} />
    <LineAwesomeIcon type="envira" {...props} />
  </View>
);

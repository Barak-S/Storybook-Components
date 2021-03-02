import React from 'react';

import { View } from 'components/Common';
import LineAwesomeIcon from '.';

export default {
  title: 'Components/Icons/LineAwesomeIcon',
  component: LineAwesomeIcon,
};

export const Basic = () => (
  <View row style={{ display: 'flex', width: 300, padding: 20 }}>
    <LineAwesomeIcon style={{ color: 'red' }} type="skull-crossbones" />
    <LineAwesomeIcon style={{ color: 'orange' }} type="radiation-alt" />
    <LineAwesomeIcon style={{ color: 'green' }} type="envira" />
  </View>
);

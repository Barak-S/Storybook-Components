import React from 'react';

import Icon from '.';
import { View } from 'components/Common';
import LineAwesomeIcon from '../LineAwesome';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Basic = () => (
  <View row style={{ display: 'flex', width: 300, padding: 20 }}>
    <LineAwesomeIcon style={{ color: 'red' }} type="skull-crossbones" />
    <LineAwesomeIcon style={{ color: 'orange' }} type="radiation-alt" />
    <LineAwesomeIcon style={{ color: 'green' }} type="envira" />
  </View>
);

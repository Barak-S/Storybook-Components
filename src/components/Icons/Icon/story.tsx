import React from 'react';

import Icon from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Basic = () => (
  <View row style={{ display: 'flex', width: 300, padding: 20 }}>
    <Icon style={{ color: 'red' }} className="las la-skull-crossbones" />
    <Icon style={{ color: 'orange' }} className="las la-radiation-alt" />
    <Icon style={{ color: 'green' }} className="lab la-envira" />
  </View>
);

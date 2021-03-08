import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';

import AnimatedEventButton from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Buttons/AnimatedEventButton',
  component: AnimatedEventButton,
};

export const Basic: FC = () => (
  <View
    row
    style={{
      width: '500px',
      margin: '0 auto',
      background: '#f1f1f1',
      padding: 50,
    }}
  >
    <AnimatedEventButton onClick={action('onClick')} iconType="envelope">
      {'Invite Team Members'}
    </AnimatedEventButton>
  </View>
);

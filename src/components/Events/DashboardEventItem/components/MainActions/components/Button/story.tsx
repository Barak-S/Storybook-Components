import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';

import DashboardEventItemMainActionsBtn from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Buttons/AnimatedEventButton',
  component: DashboardEventItemMainActionsBtn,
};

export const Basic: FC = props => (
  <View
    row
    style={{
      width: '500px',
      margin: '0 auto',
      background: '#f1f1f1',
      padding: 50,
    }}
  >
    <DashboardEventItemMainActionsBtn onClick={action('onClick')} icon="envelope" {...props}>
      {'Invite Team Members'}
    </DashboardEventItemMainActionsBtn>
  </View>
);

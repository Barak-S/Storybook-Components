import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { Story, StoryMeta } from 'styles';

import DashboardEventItemMainActionsBtn, { DashboardEventItemMainActionsBtnProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Events/DashboardEventItem/components/MainActions/components/Button',
  component: DashboardEventItemMainActionsBtn,
  args: {
    onClick: action('onClick'),
  },
  parameters: {},
}))();

export const Basic: Story<Props> = props => (
  <View
    row
    style={{
      width: '500px',
      margin: '0 auto',
      background: '#f1f1f1',
      padding: 50,
    }}
  >
    <DashboardEventItemMainActionsBtn {...props} icon="envelope">
      {'Invite Team Members'}
    </DashboardEventItemMainActionsBtn>
  </View>
);

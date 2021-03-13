import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { Story, StoryMeta } from 'styles';

import DashboardEventMainActionsBtn, { DashboardEventMainActionsBtnProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Event/components/MainActions/components/Btn',
  component: DashboardEventMainActionsBtn,
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
    <DashboardEventMainActionsBtn {...props} icon="envelope">
      {'Invite Team Members'}
    </DashboardEventMainActionsBtn>
  </View>
);

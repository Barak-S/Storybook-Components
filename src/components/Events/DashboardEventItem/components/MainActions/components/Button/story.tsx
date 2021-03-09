import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import DashboardEventItemMainActionsBtn, { DashboardEventItemMainActionsBtnProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Events/DashboardEventItem/components/MainActions/components/Button',
  component: DashboardEventItemMainActionsBtn,
}))();

export const Basic: StoryFC<Props> = props => (
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

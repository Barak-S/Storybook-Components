import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import DashboardEventHeader, { DashboardEventHeaderProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Event/components/EventHeader',
  component: DashboardEventHeader,
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => (
  <View column style={{ width: '100%', padding: 20 }}>
    <DashboardEventHeader {...args} url="eventplaceholder.com/event-name" />
  </View>
);

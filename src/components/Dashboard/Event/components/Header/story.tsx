import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import DashboardEventHeader, { DashboardEventHeaderProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Event/components/EventHeader',
  component: DashboardEventHeader,
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: '100%', padding: 20 }}>
    <DashboardEventHeader
      {...props}
      url="eventplaceholder.com/event-name"
      onClick={action('onClick')}
      onEditClick={action('onEditClick')}
      onCloneClick={action('onCloneClick')}
      onArchiveClick={action('onArchiveClick')}
      onRemoveClick={action('onRemoveClick')}
    />
  </View>
);

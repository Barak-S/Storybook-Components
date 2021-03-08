import React from 'react';
import { action } from '@storybook/addon-actions';

import DashboardEventUrl from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Events/DashboardEventUrl',
  component: DashboardEventUrl,
};

export const Basic = () => (
  <View column={true} style={{ width: '100%', padding: 20 }}>
    <DashboardEventUrl
      url="eventplaceholder.com/event-name"
      onClick={action('onClick')}
      onEditClick={action('onEditClick')}
      onCloneClick={action('onCloneClick')}
      onArchiveClick={action('onArchiveClick')}
      onRemoveClick={action('onRemoveClick')}
    />
  </View>
);

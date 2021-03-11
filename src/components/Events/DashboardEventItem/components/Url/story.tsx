import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import DashboardEventUrl, { DashboardEventItemUrlProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Events/DashboardEventItem/components/Url',
  component: DashboardEventUrl,
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: '100%', padding: 20 }}>
    <DashboardEventUrl
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

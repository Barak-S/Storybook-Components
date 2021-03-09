import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import DashboardEventUrl, { DashboardEventItemUrlProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Events/DashboardEventItem/components/Url',
  component: DashboardEventUrl,
}))();

export const Basic: StoryFC<Props> = props => (
  <View column={true} style={{ width: '100%', padding: 20 }}>
    <DashboardEventUrl
      url="eventplaceholder.com/event-name"
      onClick={action('onClick')}
      onEditClick={action('onEditClick')}
      onCloneClick={action('onCloneClick')}
      onArchiveClick={action('onArchiveClick')}
      onRemoveClick={action('onRemoveClick')}
      {...props}
    />
  </View>
);

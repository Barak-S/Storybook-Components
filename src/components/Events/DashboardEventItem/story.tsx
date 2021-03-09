import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StoryConf } from 'styles';

import DashboardEventItem, { DashboardEventItemProps } from '.';

export default ((): StoryConf<DashboardEventItemProps> => ({
  title: 'Components/Events/DashboardEventItem',
  component: DashboardEventItem,
  args: {
    status: 'event-setup',
    title: 'Celebrate the Best in Video Games & Esports',
    url: 'https://eventplaceholder.com/event-name',
    regUrl: 'https://digital-oasis.io/event-name/event-registration/form',
    image: '',
    date: new Date(),
    regStartDate: new Date(),
    onSetupRegistrationClick: action('onSetupRegistrationClick'),
    onRegContinueClick: action('onRegContinueClick'),
    onInviteTeamMembersClick: action('onInviteTeamMembersClick'),
    onAddPresenterClick: action('onAddPresenterClick'),
    onEditSessionsClick: action('onEditSessionsClick'),
    onEditClick: action('onEditClick'),
    onCloneClick: action('onCloneClick'),
    onArchiveClick: action('onArchiveClick'),
    onRemoveClick: action('onRemoveClick'),
    onCopyToClipboardClick: action('onCopyToClipboardClick'),
  },
  argTypes: {
    date: {
      control: 'date',
    },
    regStartDate: {
      control: 'date',
    },
  },
}))();

export const Basic: FC<DashboardEventItemProps> = props => (
  <View column={true} style={{ width: '100%', padding: 20 }}>
    <DashboardEventItem {...props} />
  </View>
);

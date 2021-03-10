import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta } from 'styles';

import DashboardEventItem, { DashboardEventItemProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Events/DashboardEventItem',
  component: DashboardEventItem,
  args: {
    status: 'event-setup',
    title: 'Celebrate the Best in Video Games & Esports',
    url: 'https://eventplaceholder.com/event-name',
    regUrl: 'https://digital-oasis.io/event-name/event-registration/form',
    image: 'https://picsum.photos/id/1036/300/200',
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
    status: { table: { category: 'Info' } },
    title: { table: { category: 'Info' } },
    url: { table: { category: 'Info' } },
    image: { table: { category: 'Info' } },
    date: { table: { category: 'Info' }, control: 'date' },
    regUrl: { table: { category: 'Registration' } },
    regStartDate: { table: { category: 'Registration' }, control: 'date' },
    onSetupRegistrationClick: { table: { category: 'Registration' } },
    onRegContinueClick: { table: { category: 'Registration' } },
    subscrUsersCount: { table: { category: 'Active' } },
    activeUsersCount: { table: { category: 'Active' } },
    onInviteTeamMembersClick: { table: { category: 'Actions' } },
    onAddPresenterClick: { table: { category: 'Actions' } },
    onEditSessionsClick: { table: { category: 'Actions' } },
    onEditClick: { table: { category: 'Actions' } },
    onCloneClick: { table: { category: 'Actions' } },
    onArchiveClick: { table: { category: 'Actions' } },
    onRemoveClick: { table: { category: 'Actions' } },
    onCopyToClipboardClick: { table: { category: 'Actions' } },
    style: { table: { category: 'Style' } },
  },
  parameters: {},
}))();

export const Basic: Story<Props> = props => (
  <View column={true} style={{ width: '100%', padding: 20 }}>
    <DashboardEventItem {...props} />
  </View>
);

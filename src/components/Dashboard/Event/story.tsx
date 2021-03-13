import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import React from 'react';
import { StoryMeta } from 'styles';

import DashboardEvent, { DashboardEventProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Event',
  component: DashboardEvent,
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

export const Basic: Story<Props> = props => <DashboardEvent {...props} />;

export const EventSetupState: Story<Props> = props => <DashboardEvent {...props} status="event-setup" />;

export const RegistrationSetupState: Story<Props> = props => <DashboardEvent {...props} status="registration-setup" />;

export const WaitingState: Story<Props> = props => <DashboardEvent {...props} status="waiting" />;

export const ActiveState: Story<Props> = props => <DashboardEvent {...props} status="active" />;

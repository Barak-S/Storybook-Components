import { Story } from '@storybook/react';
import React from 'react';
import { sbAutoDetectActionProps, sbChromaticDefViewports, StoryMeta } from 'utils';

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
    date: new Date('2021-03-18T11:00:00.000Z'),
    regStartDate: new Date('2021-03-18T11:00:00.000Z'),
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
  parameters: {
    layout: 'fullscreen',
    actions: { ...sbAutoDetectActionProps },
    chromatic: { ...sbChromaticDefViewports },
  },
}))();

export const Basic: Story<Props> = args => <DashboardEvent {...args} />;

export const EventSetupState: Story<Props> = args => <DashboardEvent {...args} status="event-setup" />;

EventSetupState.argTypes = { status: { control: false } };

export const RegistrationSetupState: Story<Props> = args => <DashboardEvent {...args} status="registration-setup" />;

RegistrationSetupState.argTypes = { status: { control: false } };

export const WaitingState: Story<Props> = args => <DashboardEvent {...args} status="waiting" />;

WaitingState.argTypes = { status: { control: false } };

export const ActiveState: Story<Props> = args => <DashboardEvent {...args} status="active" />;

ActiveState.argTypes = { status: { control: false } };

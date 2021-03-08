import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import DashboardEventItem, { EventStatus } from '.';
import { View } from 'components/Common';
import { Button } from '@material-ui/core';

export default {
  title: 'Components/Events/DashboardEventItem',
  component: DashboardEventItem,
};

export const Basic = () => {
  const [status, setStatus] = useState<EventStatus>('event-setup');

  return (
    <View column={true} style={{ width: '100%', padding: 20 }}>
      <View row style={{ width: '100%', marginBottom: 20 }}>
        <Button variant="contained" onClick={() => setStatus('event-setup')}>
          event-setup
        </Button>
        <Button variant="contained" onClick={() => setStatus('registration-setup')}>
          registration-setup
        </Button>
        <Button variant="contained" onClick={() => setStatus('waiting')}>
          waiting
        </Button>
        <Button variant="contained" onClick={() => setStatus('active')}>
          active
        </Button>
      </View>
      <DashboardEventItem
        status={status}
        date={new Date()}
        regStartDate={new Date()}
        title="Celebrate the Best in Video Games & Esports"
        url="eventplaceholder.com/event-name"
        regUrl="digital-oasis.io/event-name/event-registration/form"
        image=""
        onSetupRegistrationClick={action('onSetupRegistrationClick')}
        onRegContinueClick={action('onRegContinueClick')}
        onInviteTeamMembersClick={action('onInviteTeamMembersClick')}
        onAddPresenterClick={action('onAddPresenterClick')}
        onEditSessionsClick={action('onEditSessionsClick')}
        onEditClick={action('onEditClick')}
        onCloneClick={action('onCloneClick')}
        onArchiveClick={action('onArchiveClick')}
        onRemoveClick={action('onRemoveClick')}
        onCopyToClipboardClick={action('onCopyToClipboardClick')}
      />
    </View>
  );
};

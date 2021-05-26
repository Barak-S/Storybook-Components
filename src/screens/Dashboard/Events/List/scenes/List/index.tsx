import { DashboardEvent } from 'components/Dashboard';
import { useSnackbar } from 'components/Feedback';
import { EventStatus } from 'core/api';
import { copyTextToClipboard } from 'core/clipboard';
import React, { FC, useState } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardEventsListScene: FC<Props> = ({ style }) => {
  const [status, setStatus] = useState<EventStatus>('event-setup');
  const { showSnackbar } = useSnackbar();

  const handleCopyToClipboardClick = async (text: string) => {
    try {
      await copyTextToClipboard(text);
      showSnackbar('Text copied to the clipboard', 'success');
    } catch (err: unknown) {
      showSnackbar('Copy text to the clipboard error', 'error');
    }
  };

  return (
    <DashboardEvent
      style={style}
      status={status}
      title="Celebrate the Best in Video Games & Esports"
      url="https://eventplaceholder.com/event-name"
      regUrl="https://digital-oasis.io/event-name/event-registration/form"
      image="https://picsum.photos/id/1036/300/200"
      date={new Date()}
      regStartDate={new Date()}
      onSetupRegistrationClick={() => setStatus(status === 'event-setup' ? 'registration-setup' : 'waiting')}
      onRegContinueClick={() => setStatus('active')}
      onCopyToClipboardClick={handleCopyToClipboardClick}
    />
  );
};

export type DashboardEventsListSceneProps = Props;
export default DashboardEventsListScene;

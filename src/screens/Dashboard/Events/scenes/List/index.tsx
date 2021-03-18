import { DashboardEvent } from 'components/Dashboard';
import { EventStatus } from 'components/Events';
import React, { FC, useState } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardEventsListScene: FC<Props> = ({ style }) => {
  const [status, setStatus] = useState<EventStatus>('event-setup');
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
    />
  );
};

export type DashboardEventsListSceneProps = Props;
export default DashboardEventsListScene;

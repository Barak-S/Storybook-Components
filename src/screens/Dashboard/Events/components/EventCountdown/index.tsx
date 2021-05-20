import React, { FC, useState, useEffect, useMemo } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import EventDataTile from '../EventDataTile';
import { pad } from 'utils';

interface Props {
  deadline: number | Date;
}

export const EventCountdown: FC<Props> = ({ deadline }) => {
  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = useState<number>(new Date().getTime());

  const diffInSeconds = differenceInSeconds(deadline, currentTime);

  const getCoundown = () => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor((diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE);
    const seconds = diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const countdown = useMemo(getCoundown, [currentTime]);

  useEffect(() => {
    const handler = setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);
    return () => clearInterval(handler);
  }, []);

  return (
    <EventDataTile
      eventData={`${countdown.days}:${pad(countdown.hours, 2)}:${pad(countdown.minutes, 2)}:${pad(countdown.seconds, 2)}`}
      title="EVENT COUNTDOWN"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    />
  );
};

export type EventCountdownProps = Props;
export default EventCountdown;

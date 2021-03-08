import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { Text } from 'components/Common';

interface Props extends StyleProps {
  date: Date;
  className?: string;
}

export const DashboardEventDate: FC<Props> = ({ date, className, style }) => {
  const transformDate = (date: Date): string => {
    const monthsMap = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = date.getDate();
    const year = date.getFullYear();
    const month = monthsMap[date.getMonth()];

    return `${month} ${day} • ${year}`;
  };

  return (
    <Text className={className} style={style}>
      {transformDate(date)}
    </Text>
  );
};

export default DashboardEventDate;

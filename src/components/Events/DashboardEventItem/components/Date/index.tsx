import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { Text } from 'components/Common';
import { dateToMonthName, valToDate } from 'utils';

interface Props extends StyleProps {
  date: Date | string | number;
  className?: string;
}

export const DashboardEventItemDate: FC<Props> = ({ date, className, style }) => {
  const transformDate = (date: Date): string => {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = dateToMonthName(date);
    return `${month} ${day} • ${year}`;
  };

  return (
    <Text className={className} style={style}>
      {transformDate(valToDate(date))}
    </Text>
  );
};

export default DashboardEventItemDate;

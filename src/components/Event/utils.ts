import { Event, EventUpdate } from 'core/api';
import { dateToMonthName, isSameMonth, isSameYear } from 'utils';

export const eventToDateStr = (item: Event | EventUpdate): string => {
  const start = item.start ? item.start : 0;
  const end = item.end ? item.end : 0;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const sDay = startDate.getDate();
  const sMonth = dateToMonthName(startDate);
  const sYear = startDate.getFullYear();
  const eDay = endDate.getDate();
  const eMonth = dateToMonthName(endDate);
  const eYear = endDate.getFullYear();
  if (isSameMonth(startDate, endDate)) {
    return `${sMonth} ${sDay}-${eDay} • ${sYear}`;
  }
  if (isSameYear(startDate, endDate)) {
    return `${sMonth} ${sDay} - ${eMonth} ${eDay} • ${sYear}`;
  }
  return `${sMonth} ${sDay} ${sYear} - ${eMonth} ${eDay} ${eYear}`;
};

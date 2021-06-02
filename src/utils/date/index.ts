import { TimeZoneData, timeZones } from './timezones';

// Consts

export const secMs = 1000;
export const minMs = secMs * 60;
export const hourMs = minMs * 60;
export const dayMs = hourMs * 24;
export const weekMs = dayMs * 24;
export const monthMs = weekMs * 4;

// Conversions

export const valToDate = (val: string | number | Date): Date => {
  if (typeof val === 'string' || typeof val === 'number') {
    return new Date(val);
  }
  return val;
};

export const dateToMonthName = (val: Date): string => {
  const map = [
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
  return map[val.getMonth()];
};

// Manipulations

export const isSameMonth = (a: Date, b: Date) => a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

export const isSameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear();

export const getTs = () => new Date().getTime();

export const dateToStr = (val: Date): string => val.toISOString();

// Time zones

export const getCurTimeZone = (): TimeZoneData | undefined => {
  const code = getCurTimeZoneCode();
  return timeZones.find(itm => itm.code === code);
};

export const getCurTimeZoneCode = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone.toLocaleLowerCase();

export * from './timezones';

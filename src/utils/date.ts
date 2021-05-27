/* istanbul ignore file */
export const secMs = 1000;
export const minMs = secMs * 60;
export const hourMs = minMs * 60;
export const dayMs = hourMs * 24;
export const weekMs = dayMs * 24;
export const monthMs = weekMs * 4;

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

export const isSameMonth = (a: Date, b: Date) => a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

export const isSameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear();

/**
 * Converts object to a query string like `name1=val1&name2=val2`
 * @param obj - any object with a fields
 */
export const objToQs = (obj: Record<string, string | number | boolean>): string =>
  Object.keys(obj)
    .map(key => `${key}=${String(obj[key])}`)
    .join('&');

import { useLocation } from 'react-router-dom';

export const useQuery = (): Record<string, string> => {
  const { search } = useLocation();
  return parseUrlSearchStr(search);
};

export const parseUrlSearchStr = (val: string): Record<string, string> => {
  if (!val || val.length === 1) {
    return {};
  }
  const items = val.slice(1, val.length).split('&');
  const data: Record<string, string> = {};
  for (const item of items) {
    const [key, val] = item.split('=');
    data[key] = decodeURIComponent(val);
  }
  return data;
};

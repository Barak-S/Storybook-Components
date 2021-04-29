import { StoreState } from 'store/reducers';

export const stateToCurOrgData = (s: StoreState) => {
  const item = stateToCurOrgItem(s);
  return item ? item.data : undefined;
};

const stateToCurOrgItem = (s: StoreState) => {
  const cur = s.orgs.cur;
  if (!cur) {
    return undefined;
  }
  return s.orgs.items[cur];
};

export const stateToCurOrgId = (s: StoreState) => s.orgs.cur;

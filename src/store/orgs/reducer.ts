import { Organization, OrganizationInvite, OrganizationMember } from 'core/api';
import { keys, pick } from 'lodash';
import { StoreAction } from 'store/actions';

export type OrgsState = {
  cur?: string;
  items: Record<string, OrgsStateItem>;
};

type OrgsStateItem = { data: Organization; invites: OrganizationInvite[]; members: OrganizationMember[] };

const initial: OrgsState = { items: {} };

const orgsArrToObj = (items: Organization[]): Record<string, OrgsStateItem> => {
  const obj: Record<string, OrgsStateItem> = {};
  for (const item of items) {
    obj[item.id] = { data: item, invites: [], members: [] };
  }
  return obj;
};

export const reducer = (state: OrgsState = initial, action: StoreAction): OrgsState => {
  switch (action.type) {
    case 'orgs/cur/Set': {
      return { ...state, cur: action.id };
    }
    case 'orgs/items/Set': {
      return { ...state, items: action.data ? orgsArrToObj(action.data) : {} };
    }
    case 'orgs/items/Remove': {
      const otherIds = keys(state.items).filter(id => id !== action.id);
      return { ...state, items: pick(state.items, otherIds) };
    }
    case 'orgs/items/data/Modify': {
      const { id, data: newData } = action;
      const curItem = state.items[id];
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!curItem) {
        return state;
      }
      const data = { ...curItem.data, ...newData };
      const items = { ...state.items, [id]: { ...curItem, data } };
      return { ...state, items };
    }
    case 'auth/SignOut':
      return initial;
    default:
      return state;
  }
};

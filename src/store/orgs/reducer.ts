/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Organization, OrganizationInvite, OrganizationMember } from 'core/api';
import { keys, pick } from 'lodash';
import { StoreAction } from 'store/actions';

export type OrgsState = {
  cur?: string;
  items: Record<string, OrgsStateItem>;
};

type OrgsStateItem = { data: Organization; invites?: OrganizationInvite[]; members?: OrganizationMember[] };

const initial: OrgsState = { items: {} };

const orgsArrToObj = (items: Organization[]): Record<string, OrgsStateItem> => {
  const obj: Record<string, OrgsStateItem> = {};
  for (const item of items) {
    obj[item.id] = { data: item };
  }
  return obj;
};

const updateItems = (
  oldItems: Record<string, OrgsStateItem>,
  newItems: Record<string, OrgsStateItem>,
): Record<string, OrgsStateItem> => {
  const res: Record<string, OrgsStateItem> = {};
  for (const key in newItems) {
    const oldItem = oldItems[key];
    const newItem = newItems[key];
    res[key] = oldItem ? { ...oldItem, ...newItem } : { ...newItem };
  }
  return res;
};

export const reducer = (state: OrgsState = initial, action: StoreAction): OrgsState => {
  switch (action.type) {
    case 'orgs/cur/Set': {
      return { ...state, cur: action.id };
    }
    case 'orgs/items/Set': {
      return { ...state, items: action.data ? orgsArrToObj(action.data) : {} };
    }
    case 'orgs/items/Update': {
      return { ...state, items: updateItems(state.items, orgsArrToObj(action.data)) };
    }
    case 'orgs/items/Remove': {
      const otherIds = keys(state.items).filter(id => id !== action.id);
      return { ...state, items: pick(state.items, otherIds) };
    }
    case 'orgs/items/data/Modify': {
      const { id, data: newData } = action;
      const curItem = state.items[id];
      if (!curItem) {
        return state;
      }
      const data = { ...curItem.data, ...newData };
      const items = { ...state.items, [id]: { ...curItem, data } };
      return { ...state, items };
    }
    case 'orgs/items/invites/Set': {
      const { id, data: invites } = action;
      const curItem = state.items[id];
      return curItem ? { ...state, items: { ...state.items, [id]: { ...curItem, invites } } } : state;
    }
    case 'orgs/items/invites/Add': {
      const { id, data: invite } = action;
      const curItem = state.items[id];
      if (!curItem) {
        return state;
      }
      const invites = curItem.invites ? [...curItem.invites, invite] : [invite];
      return { ...state, items: { ...state.items, [id]: { ...curItem, invites } } };
    }
    case 'orgs/items/invites/Remove': {
      const { id, inviteId } = action;
      const curItem = state.items[id];
      if (!curItem) {
        return state;
      }
      const invites = curItem.invites?.filter(itm => itm.id !== inviteId);
      return { ...state, items: { ...state.items, [id]: { ...curItem, invites } } };
    }
    case 'auth/SignOut':
      return initial;
    default:
      return state;
  }
};

import { Event, EventTheme } from 'core/api';
import { uniqBy } from 'lodash';
import { StoreAction } from 'store/actions';

export interface EventsState {
  items: Event[];
  themes: EventTheme[];
}

const initial: EventsState = { items: [], themes: [] };

export const reducer = (state: EventsState = initial, action: StoreAction): EventsState => {
  switch (action.type) {
    case 'events/items/Set': {
      return { ...state, items: action.data };
    }
    case 'events/items/Add': {
      return { ...state, items: uniqBy([...state.items, action.data], itm => itm.id) };
    }
    case 'events/items/Modify': {
      return { ...state, items: state.items.map(itm => (itm.id !== action.id ? itm : { ...itm, ...action.data })) };
    }
    case 'events/items/Remove': {
      return { ...state, items: state.items.filter(itm => itm.id !== action.id) };
    }
    case 'events/themes/Set': {
      return { ...state, themes: action.data };
    }
    case 'events/themes/Add': {
      return { ...state, themes: uniqBy([...state.themes, action.data], itm => itm.id) };
    }
    case 'events/themes/Modify': {
      return { ...state, themes: state.themes.map(itm => (itm.id !== action.id ? itm : { ...itm, ...action.data })) };
    }
    case 'events/themes/Remove': {
      return { ...state, themes: state.themes.filter(itm => itm.id !== action.id) };
    }
    case 'auth/SignOut':
      return initial;
    default:
      return state;
  }
};

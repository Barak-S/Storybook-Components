import { User, UserSettings } from 'core/api';
import { StoreAction } from 'store/actions';

export type UserState = {
  data?: User;
  settings: UserSettings;
};

const initial: UserState = { settings: {} };

export const reducer = (state: UserState = initial, action: StoreAction): UserState => {
  switch (action.type) {
    case 'user/data/Set': {
      return { ...state, data: action.data };
    }
    case 'user/data/Modify': {
      return { ...state, data: state.data ? { ...state.data, ...action.data } : undefined };
    }
    case 'auth/SignOut':
      return initial;
    default:
      return state;
  }
};

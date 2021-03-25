import { AccountProfile } from 'core/api';
import { StoreAction } from 'store/actions';

export type ProfileState = {
  data?: AccountProfile;
};

const initial: ProfileState = {};

export const reducer = (state: ProfileState = initial, action: StoreAction): ProfileState => {
  switch (action.type) {
    case 'profile/Set': {
      return { ...state, data: action.data };
    }
    case 'profile/Modify': {
      return { ...state, data: state.data ? { ...state.data, ...action.data } : undefined };
    }
    case 'auth/SignOut':
      return initial;
    default:
      return state;
  }
};

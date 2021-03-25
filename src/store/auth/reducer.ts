import { StoreAction } from 'store/actions';

export interface AuthState {
  token?: string;
}

const initial: AuthState = {};

export const reducer = (state: AuthState = initial, action: StoreAction): AuthState => {
  switch (action.type) {
    case 'auth/Set': {
      return { ...state, token: action.token };
    }
    case 'auth/SignOut':
      return initial;
    default:
      return state;
  }
};

import { StoredForms } from 'core/types';
import { StoreAction } from 'store/actions';

export type FormsState = StoredForms;

const initial: FormsState = { onboarding: { theme: {} }, auth: {} };

export const reducer = (state: FormsState = initial, action: StoreAction): FormsState => {
  switch (action.type) {
    case 'forms/Set': {
      const { name, data } = action;
      return { ...state, [name]: data };
    }
    case 'forms/Modify': {
      const { name, data } = action;
      return { ...state, [name]: { ...state[name], ...data } };
    }
    case 'forms/Reset': {
      const { name } = action;
      return { ...state, [name]: initial[name] };
    }
    case 'auth/SignOut': {
      return { ...initial, auth: state.auth };
    }
    default:
      return state;
  }
};

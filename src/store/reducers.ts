import { ReducersMapObject } from 'redux';

import { StoreAction } from './actions';
import { AuthState, reducer as auth } from './auth/reducer';
import { ProfileState, reducer as profile } from './profile/reducer';

export interface StoreState {
  auth: AuthState;
  profile: ProfileState;
}

export const reducers: ReducersMapObject<StoreState, StoreAction> = {
  auth,
  profile,
};

import { ReducersMapObject } from 'redux';

import { StoreAction } from './actions';
import { AuthState, reducer as auth } from './auth/reducer';
import { UserState, reducer as user } from './user/reducer';

export interface StoreState {
  auth: AuthState;
  user: UserState;
}

export const reducers: ReducersMapObject<StoreState, StoreAction> = {
  auth,
  user,
};

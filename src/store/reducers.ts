import { ReducersMapObject } from 'redux';

import { StoreAction } from './actions';
import { AuthState, reducer as auth } from './auth/reducer';
import { UserState, reducer as user } from './user/reducer';
import { OrgsState, reducer as orgs } from './orgs/reducer';
import { PaywallState, reducer as paywall } from './paywall/reducer';

export interface StoreState {
  auth: AuthState;
  user: UserState;
  orgs: OrgsState;
  paywall: PaywallState;
}

export const reducers: ReducersMapObject<StoreState, StoreAction> = {
  auth,
  user,
  orgs,
  paywall,
};

import { ReducersMapObject } from 'redux';

import { StoreAction } from './actions';
import { AuthState, reducer as auth } from './auth/reducer';
import { EventsState, reducer as events } from './events/reducer';
import { OrgsState, reducer as orgs } from './orgs/reducer';
import { PaywallState, reducer as paywall } from './paywall/reducer';
import { reducer as user, UserState } from './user/reducer';

export interface StoreState {
  auth: AuthState;
  user: UserState;
  orgs: OrgsState;
  paywall: PaywallState;
  events: EventsState;
}

export const reducers: ReducersMapObject<StoreState, StoreAction> = {
  auth,
  user,
  orgs,
  paywall,
  events,
};

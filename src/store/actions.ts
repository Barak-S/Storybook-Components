import { AccountProfile } from 'core/api';
import { Action } from 'redux';

type AuthAction = (Action<'auth/Set'> & { token?: string }) | Action<'auth/SignOut'>;

type ProfileAction =
  | (Action<'profile/Set'> & { data?: AccountProfile })
  | (Action<'profile/Modify'> & { data: Partial<AccountProfile> });

export type StoreAction = AuthAction | ProfileAction;

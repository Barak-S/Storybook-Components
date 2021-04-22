import { User, UserSettings } from 'core/api';
import { Action } from 'redux';

type AuthAction = (Action<'auth/Set'> & { token?: string }) | Action<'auth/SignOut'>;

type UserAction =
  | (Action<'user/data/Set'> & { data?: User })
  | (Action<'user/data/Modify'> & { data: Partial<User> })
  | (Action<'user/settings/Set'> & { data?: UserSettings })
  | (Action<'user/settings/Modify'> & { data: Partial<UserSettings> });

export type StoreAction = AuthAction | UserAction;

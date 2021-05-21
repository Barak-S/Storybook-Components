import { Organization, OrganizationInvite, StripeProduct, User, UserSettings } from 'core/api';
import { Action } from 'redux';

type AuthAction = (Action<'auth/Set'> & { token?: string }) | Action<'auth/SignOut'>;

type UserAction =
  | (Action<'user/data/Set'> & { data?: User })
  | (Action<'user/data/Modify'> & { data: Partial<User> })
  | (Action<'user/settings/Set'> & { data?: UserSettings })
  | (Action<'user/settings/Modify'> & { data: Partial<UserSettings> });

type OrgsAction =
  | (Action<'orgs/cur/Set'> & { id?: string })
  | (Action<'orgs/items/Set'> & { data?: Organization[] })
  | (Action<'orgs/items/Remove'> & { id: string })
  | (Action<'orgs/items/data/Modify'> & { id: string; data: Partial<Organization> })
  | (Action<'orgs/items/invites/Set'> & { id: string; data: OrganizationInvite[] })
  | (Action<'orgs/items/invites/Add'> & { id: string; data: OrganizationInvite })
  | (Action<'orgs/items/invites/Remove'> & { id: string; inviteId: string });

type PaywallAction = Action<'paywall/prodcuts/Set'> & { data: StripeProduct[] };

export type StoreAction = AuthAction | UserAction | OrgsAction | PaywallAction;

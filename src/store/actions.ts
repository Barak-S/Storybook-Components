import { Organization, OrganizationInvite, StripeProduct, User, UserSettings, Event, EventTheme } from 'core/api';
import { StoredForms } from 'core/types';
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
  | (Action<'orgs/items/Update'> & { data: Organization[] })
  | (Action<'orgs/items/Remove'> & { id: string })
  | (Action<'orgs/items/data/Modify'> & { id: string; data: Partial<Organization> })
  | (Action<'orgs/items/invites/Set'> & { id: string; data: OrganizationInvite[] })
  | (Action<'orgs/items/invites/Add'> & { id: string; data: OrganizationInvite })
  | (Action<'orgs/items/invites/Remove'> & { id: string; inviteId: string });

type PaywallAction = Action<'paywall/prodcuts/Set'> & { data: StripeProduct[] };

type EventsAction =
  | (Action<'events/items/Set'> & { data: Event[] })
  | (Action<'events/items/Add'> & { data: Event })
  | (Action<'events/items/Modify'> & { id: string; data: Event })
  | (Action<'events/items/Remove'> & { id: string })
  | (Action<'events/themes/Set'> & { data: EventTheme[] })
  | (Action<'events/themes/Add'> & { data: EventTheme })
  | (Action<'events/themes/Modify'> & { id: string; data: EventTheme })
  | (Action<'events/themes/Remove'> & { id: string });

type FormsAction =
  | (Action<'forms/Set'> & { name: keyof StoredForms; data: StoredForms[keyof StoredForms] })
  | (Action<'forms/Modify'> & { name: keyof StoredForms; data: Partial<StoredForms[keyof StoredForms]> })
  | (Action<'forms/Reset'> & { name: keyof StoredForms });

export type StoreAction = AuthAction | UserAction | OrgsAction | PaywallAction | EventsAction | FormsAction;

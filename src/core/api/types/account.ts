export interface AccountProfile {
  uid: string;
  email: string;
  confirmed: boolean;

  firstName: string;
  lastName: string;
  onboarding: AccountProfileOnboarding;
  thumbnail?: string;
  role?: string;
  bio?: string;
  company?: AccountProfileCompany;
  settings?: AccountProfileSettings;

  createdAt: number;
  updatedAt: number;
}

export type AccountProfileOnboarding = 'profile' | 'team' | 'theme' | 'event' | 'done';

export interface AccountProfileCompany {
  name: string;
  phone: string;
  country: string;
  state: string;
  city: string;
}

export interface AccountProfileSettings {
  event?: AccountProfileEventSettings;
  subscriptions?: AccountProfileSubscrSettings;
}

export interface AccountProfileEventSettings {
  notifyAboutNewParticipants?: boolean;
  notifyAboutSoldOutTickets?: boolean;
}

export interface AccountProfileSubscrSettings {
  productUpdate?: boolean;
  offersAndDeals?: boolean;
  eventsNearMe?: boolean;
}

export type AccountProfileUpdate = Omit<AccountProfile, 'uid' | 'email' | 'confirmed' | 'createdAt' | 'updatedAt'>;

export type AccountProfilePatch = Partial<AccountProfileUpdate>;

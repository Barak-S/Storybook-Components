import { ApiDataResp } from './api';
import { Social } from './common';

export interface User {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  confirmed: boolean;

  bio?: string;
  thumbnail?: string;
  socials?: Social[];

  createdAt: string;
  updatedAt: string;
}

export type UserCreate = Omit<User, 'createdAt' | 'updatedAt'>;
export type UserUpdate = Partial<Omit<User, 'id' | 'email' | 'confirmed' | 'createdAt' | 'updatedAt'>>;
export type UserResp = ApiDataResp<User>;

export interface UserSettings {
  onboarding?: UserSettingsOnboarding;
  notifyAboutNewParticipants?: boolean;
  notifyAboutSoldOutTickets?: boolean;
  subscrProductUpdate?: boolean;
  subscrOffersAndDeals?: boolean;
  subscrEventsNearMe?: boolean;
}

export type UserSettingsResp = ApiDataResp<UserSettings>;

export type UserSettingsOnboarding = 'profile' | 'team' | 'theme' | 'event' | 'done';

export const userSettingsOnboarding: UserSettingsOnboarding[] = ['profile', 'team', 'theme', 'event', 'done'];

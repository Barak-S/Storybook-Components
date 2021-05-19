import Joi from 'joi';
import { firstNameMaxSize, lastNameMaxSize, longTextMaxSize, urlMaxSize } from 'utils';

import { Social, SocialSchema } from './common';

// Settings

export interface UserSettings {
  onboarding?: UserSettingsOnboarding;
  notifyAboutNewParticipants?: boolean;
  notifyAboutSoldOutTickets?: boolean;
  subscrProductUpdate?: boolean;
  subscrOffersAndDeals?: boolean;
  subscrEventsNearMe?: boolean;
}

export type UserSettingsOnboarding = 'profile' | 'team' | 'theme' | 'event' | 'done';

const userSettingsOnboardingArr: UserSettingsOnboarding[] = ['profile', 'team', 'theme', 'event', 'done'];

export const UserSettingsSchema = Joi.object<UserSettings>({
  notifyAboutNewParticipants: Joi.boolean(),
  notifyAboutSoldOutTickets: Joi.boolean(),
  subscrProductUpdate: Joi.boolean(),
  subscrOffersAndDeals: Joi.boolean(),
  subscrEventsNearMe: Joi.boolean(),
  onboarding: Joi.string().valid(...userSettingsOnboardingArr),
});

export const isUserSettings = (val: unknown): val is UserSettings => UserSettingsSchema.validate(val).error === undefined;

// Data

export interface User {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  confirmed: boolean;

  bio?: string;
  thumbnail?: string;
  settings?: UserSettings;
  socials?: Social[];

  createdAt: string;
  updatedAt: string;
}

export const UserSchema = Joi.object<User>({
  id: Joi.string().required(),
  firstName: Joi.string().max(firstNameMaxSize).required(),
  lastName: Joi.string().max(lastNameMaxSize).required(),
  email: Joi.string().required(),
  confirmed: Joi.bool().required(),
  bio: Joi.string().max(longTextMaxSize),
  thumbnail: Joi.string().max(urlMaxSize).uri(),
  socials: Joi.array().items(SocialSchema),
  settings: UserSettingsSchema,
});

export type UserCreate = Omit<User, 'createdAt' | 'updatedAt'>;
export type UserUpdate = Partial<Omit<User, 'id' | 'email' | 'confirmed' | 'createdAt' | 'updatedAt'>>;

export const UserUpdateSchema = Joi.object({
  firstName: Joi.string().max(firstNameMaxSize),
  lastName: Joi.string().max(lastNameMaxSize),
  bio: Joi.string().max(longTextMaxSize),
  thumbnail: Joi.string().max(urlMaxSize).uri(),
  socials: Joi.array().items(SocialSchema),
});

export const isUserUpdate = (val: unknown): val is UserUpdate => UserUpdateSchema.validate(val).error === undefined;

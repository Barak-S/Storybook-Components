import Joi from 'joi';
import { longTextMaxSize } from 'utils';

import { NameSchema } from './common';
import { Social, SocialSchema } from './social';

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

// User

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
  firstName: NameSchema.required(),
  lastName: NameSchema.required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  confirmed: Joi.bool().required(),
  bio: Joi.string().max(longTextMaxSize),
  thumbnail: Joi.string().uri(),
  settings: UserSettingsSchema,
  socials: Joi.array().items(SocialSchema),
  createdAt: Joi.string(),
  updatedAt: Joi.string(),
});

export const isUser = (val: unknown): val is User => UserSchema.validate(val).error === undefined;

export type UserCreate = Omit<User, 'createdAt' | 'updatedAt'>;
export type UserUpdate = Partial<Omit<User, 'id' | 'email' | 'confirmed' | 'createdAt' | 'updatedAt'>>;

export const UserUpdateSchema = Joi.object({
  firstName: NameSchema,
  lastName: NameSchema,
  bio: Joi.string().max(longTextMaxSize),
  thumbnail: Joi.string().uri(),
  socials: Joi.array().items(SocialSchema),
  settings: UserSettingsSchema,
});

export const isUserUpdate = (val: unknown): val is UserUpdate => UserUpdateSchema.validate(val).error === undefined;

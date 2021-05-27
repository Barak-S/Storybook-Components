import Joi from 'joi';

import { colorValidatorFn, phoneValidatorFn, urlValidatorFn } from './common';
import { Social, SocialSchema } from './social';

// Colors

export interface EventThemeColors {
  background: string;
  largeHeadlines: string;
  mediumHeadlines: string;
  bodyText: string;
  subheads: string;
  linkedText: string;
}

export const EventThemeColorsSchema = Joi.object<EventThemeColors>({
  background: Joi.string().custom(colorValidatorFn).required(),
  largeHeadlines: Joi.string().custom(colorValidatorFn).required(),
  mediumHeadlines: Joi.string().custom(colorValidatorFn).required(),
  bodyText: Joi.string().custom(colorValidatorFn).required(),
  subheads: Joi.string().custom(colorValidatorFn).required(),
  linkedText: Joi.string().custom(colorValidatorFn).required(),
});

// Fonts

export interface EventThemeFonts {
  main: string;
}

export const EventThemeFontsSchema = Joi.object<EventThemeFonts>({
  main: Joi.string().required(),
});

// Settings

export interface EventThemeSettings {
  colors: EventThemeColors;
  fonts: EventThemeFonts;
}

export const EventThemeSettingsSchema = Joi.object<EventThemeSettings>({
  colors: EventThemeColorsSchema.required(),
  fonts: EventThemeFontsSchema.required(),
});

// Theme

export type EventThemeType = 'default' | 'custom';

export const EventThemeTypeArr: EventThemeType[] = ['default', 'custom'];

export interface EventTheme {
  id: string;
  orgId: string;

  name: string;
  type: EventThemeType;
  description?: string;
  thumbnail?: string;
  settings: EventThemeSettings;

  createdAt: string;
  updatedAt: string;
}

export const EventThemeSchema = Joi.object<EventTheme>({
  id: Joi.string().required(),
  orgId: Joi.string().required(),
  name: Joi.string().required(),
  type: Joi.string()
    .valid(...EventThemeTypeArr)
    .required(),
  description: Joi.string(),
  thumbnail: Joi.string(),
  settings: EventThemeSettingsSchema.required(),
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
});

export type EventThemeCreate = Omit<EventTheme, 'id' | 'orgId' | 'type' | 'createdAt' | 'updatedAt'>;

export const EventThemeCreateSchema = EventThemeSchema.keys({
  id: Joi.forbidden(),
  orgId: Joi.forbidden(),
  type: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

export type EventThemeUpdate = Partial<Omit<EventTheme, 'id' | 'orgId' | 'type' | 'createdAt' | 'updatedAt'>>;

export const EventThemeUpdateSchema = EventThemeSchema.keys({
  id: Joi.forbidden(),
  orgId: Joi.forbidden(),
  type: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),

  name: Joi.string(),
  settings: EventThemeSettingsSchema,
});

// Item

export type EventType = 'public' | 'public-with-registration' | 'private-with-registration';

export const EventTypeArr: EventType[] = ['public', 'public-with-registration', 'private-with-registration'];

export const EventTypeSchema = Joi.string().valid(...EventTypeArr);

export interface EventProfile {
  phone?: string;
  country?: string;
  state?: string;
  city?: string;
  socials?: Social[];
  website?: string;
  email?: string;
  logo?: string;
}

export const EventProfileSchema = Joi.object<EventProfile>({
  phone: Joi.string().custom(phoneValidatorFn),
  country: Joi.string(),
  state: Joi.string(),
  city: Joi.string(),
  socials: Joi.array().items(SocialSchema),
  website: Joi.string().custom(urlValidatorFn),
  email: Joi.string().email({ tlds: { allow: false } }),
  logo: Joi.string().custom(urlValidatorFn),
});

export interface EventSettings {
  title?: string;
  description?: string;
  multiFactorAuth?: boolean;
  registrationManualApproval?: boolean;
  allowedEmailDomains?: string[];
  emailValidation?: boolean;
  seoTags?: string[];
}

export const EventSettingsSchema = Joi.object<EventSettings>({
  title: Joi.string(),
  description: Joi.string(),
  multiFactorAuth: Joi.bool(),
  registrationManualApproval: Joi.bool(),
  allowedEmailDomains: Joi.array().items(Joi.string()),
  emailValidation: Joi.bool(),
  seoTags: Joi.array().items(Joi.string()),
});

export interface EventRegistration {
  start: string;
  end: string;
  description?: string;
  form?: {
    headline?: string;
    subhead?: string;
  };
  termsAndConditions?: string;
  marketingStatement?: string;
}

export const EventRegistrationSchema = Joi.object<EventRegistration>({
  start: Joi.string().required(),
  end: Joi.string().required(),
  description: Joi.string(),
  form: Joi.object({
    headline: Joi.string(),
    subhead: Joi.string(),
  }),
  termsAndConditions: Joi.string(),
  marketingStatement: Joi.string(),
});

export interface Event {
  id: string;
  orgId: string;

  name: string;
  type: EventType;
  start: string;
  end: string;
  url: string;
  themeId?: string;

  profile?: EventProfile;
  settings?: EventSettings;
  registration?: EventRegistration;

  createdAt: string;
  updatedAt: string;
}

export const EventSchema = Joi.object<Event>({
  id: Joi.string().required(),
  orgId: Joi.string().required(),
  name: Joi.string().required(),
  type: EventTypeSchema.required(),
  start: Joi.string().isoDate().required(),
  end: Joi.string().isoDate().required(),
  url: Joi.string().custom(urlValidatorFn).required(),
  themeId: Joi.string(),
  profile: EventProfileSchema,
  settings: EventSettingsSchema,
  registration: EventRegistrationSchema,
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
});

export type EventCreate = Omit<Event, 'id' | 'orgId' | 'url' | 'createdAt' | 'updatedAt'>;

export const EventCreateSchema = EventSchema.keys({
  id: Joi.forbidden(),
  orgId: Joi.forbidden(),
  url: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

export const isEventCreate = (val: unknown): val is EventCreate => EventCreateSchema.validate(val).error === undefined;

export type EventUpdate = Partial<Omit<Event, 'id' | 'orgId' | 'url' | 'createdAt' | 'updatedAt'>>;

export const EventUpdateSchema = EventSchema.keys({
  id: Joi.forbidden(),
  orgId: Joi.forbidden(),
  url: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),

  name: Joi.string(),
  type: EventTypeSchema,
  start: Joi.string().isoDate(),
  end: Joi.string().isoDate(),
});

export const isEventUpdate = (val: unknown): val is EventUpdate => EventUpdateSchema.validate(val).error === undefined;

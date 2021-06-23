import Joi from 'joi';

import {
  colorValidatorFn,
  EmptyStrSchema,
  EventTimezoneSchema,
  IdSchema,
  phoneValidatorFn,
  SlugSchema,
  TimeSchema,
  UrlSchema,
  urlValidatorFn,
} from './common';
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
  description: Joi.string().allow(''),
  thumbnail: Joi.string().allow(''),
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

// Event profile

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
  phone: EmptyStrSchema.custom(phoneValidatorFn),
  country: EmptyStrSchema,
  state: EmptyStrSchema,
  city: EmptyStrSchema,
  socials: Joi.array().items(SocialSchema),
  website: EmptyStrSchema.custom(urlValidatorFn),
  email: EmptyStrSchema.email({ tlds: { allow: false } }),
  logo: EmptyStrSchema.custom(urlValidatorFn),
});

export type EventProfileUpdate = Partial<EventProfile>;

export const EventProfileUpdateSchema = EventProfileSchema;

// Settings

export type EventSettingsPassRequirement =
  | 'one-letter'
  | 'one-capital-letter'
  | 'one-number'
  | 'one-special-character'
  | 'not-same-as-account-name';

export const EventSettingsPassRequirementArr: EventSettingsPassRequirement[] = [
  'one-letter',
  'one-capital-letter',
  'one-number',
  'one-special-character',
  'not-same-as-account-name',
];

export interface EventSettings {
  title?: string;
  description?: string;
  multiFactorAuth?: boolean;
  registrationManualApproval?: boolean;
  allowedEmailDomains?: string[];
  emailValidation?: boolean;
  seoTags?: string[];
  passRequirements?: EventSettingsPassRequirement[];
  purchaseOrderNumber?: string;
}

export const EventSettingsSchema = Joi.object<EventSettings>({
  title: EmptyStrSchema,
  description: EmptyStrSchema,
  multiFactorAuth: Joi.bool(),
  registrationManualApproval: Joi.bool(),
  allowedEmailDomains: Joi.array().items(Joi.string()),
  emailValidation: Joi.bool(),
  seoTags: Joi.array().items(Joi.string()),
  passRequirements: Joi.array().items(Joi.string().valid(...EventSettingsPassRequirementArr)),
  purchaseOrderNumber: EmptyStrSchema,
});

export type EventSettingsUpdate = Partial<EventSettings>;

export const EventSettingsUpdateSchema = EventSettingsSchema;

// Registration

export type EventRegistrationType = 'free' | 'fixed-price' | 'tiered-pricing';

export const EventRegistrationTypeArr: EventRegistrationType[] = ['free', 'fixed-price', 'tiered-pricing'];

export const EventRegistrationTypeSchema = Joi.string().valid(...EventRegistrationTypeArr);

export type EventRegistrationFormField = 'firstName' | 'lastName' | 'email' | 'password';

export const EventRegistrationFormFieldArr: EventRegistrationFormField[] = ['firstName', 'lastName', 'email', 'password'];

export const EventRegistrationFormFieldSchema = Joi.string().valid(...EventRegistrationFormFieldArr);

export type EventRegistrationSocialsIntegrationType = 'facebook' | 'google' | 'linkedin';

export const EventRegistrationSocialsIntegrationTypeArr: EventRegistrationSocialsIntegrationType[] = [
  'facebook',
  'google',
  'linkedin',
];

export const EventRegistrationSocialsIntegrationTypeSchema = Joi.string().valid(...EventRegistrationSocialsIntegrationTypeArr);

export interface EventRegistration {
  type?: EventRegistrationType;
  start: string;
  end: string;
  description?: string;
  form?: {
    headline?: string;
    subhead?: string;
    fields?: EventRegistrationFormField[];
  };
  socialsIntegration?: EventRegistrationSocialsIntegrationType[];
  termsAndConditions?: string;
  marketingStatement?: string;
}

export const EventRegistrationSchema = Joi.object<EventRegistration>({
  type: EventRegistrationTypeSchema,
  start: Joi.date().iso().required(),
  end: Joi.date().iso().greater(Joi.ref('start')).required(),
  description: EmptyStrSchema,
  form: Joi.object({
    headline: EmptyStrSchema,
    subhead: EmptyStrSchema,
    fields: Joi.array().items(EventRegistrationFormFieldSchema),
  }),
  socialsIntegration: Joi.array().items(EventRegistrationSocialsIntegrationTypeSchema),
  termsAndConditions: EmptyStrSchema.max(5000),
  marketingStatement: EmptyStrSchema.max(5000),
});

export type EventRegistrationUpdate = Partial<EventRegistration>;

export const EventRegistrationUpdateSchema = EventRegistrationSchema.keys({
  start: Joi.date().iso(),
  end: Joi.date().iso(),
});

// Session

export type EventSessionType =
  | '​​keynote'
  | '​​breakout'
  | '​​track-specific'
  | '​​watch-party'
  | '​​speed-networking'
  | '​​round-table';

export const EventSessionTypeArr: EventSessionType[] = [
  '​​keynote',
  '​​breakout',
  '​​track-specific',
  '​​watch-party',
  '​​speed-networking',
  '​​round-table',
];

export const EventSessionTypeSchema = Joi.string().valid(...EventSessionTypeArr);

export interface EventSession {
  id: string;
  type: EventSessionType;
  start: string;
  end: string;
  title: string;
  description?: string;
  maxAudienceSize?: number;
  artwork?: string;
  playerBackgroundImage?: string;
}

export const EventSessionSchema = Joi.object<EventSession>({
  id: IdSchema.required(),
  type: EventSessionTypeSchema.required(),
  start: TimeSchema.required(),
  end: TimeSchema.required(),
  title: Joi.string().trim().strict().max(200).required(),
  description: Joi.string(),
  maxAudienceSize: Joi.number().min(0),
  artwork: UrlSchema,
  playerBackgroundImage: UrlSchema,
});

export type EventSessionCreate = Omit<EventSession, 'id'>;

export const EventSessionCreateSchema = EventSessionSchema.keys({
  id: Joi.forbidden(),
});

export type EventSessionUpdate = Partial<Omit<EventSession, 'id'>>;

export const EventSessionUpdateSchema = EventSessionSchema.keys({
  id: Joi.forbidden(),
  type: EventSessionTypeSchema,
  start: TimeSchema,
  end: TimeSchema,
  title: Joi.string(),
});

// Event type

export type EventType = 'public' | 'public-with-registration' | 'private-with-registration';

export const EventTypeArr: EventType[] = ['public', 'public-with-registration', 'private-with-registration'];

export const EventTypeSchema = Joi.string().valid(...EventTypeArr);

// Event

export interface Event {
  id: string;
  orgId: string;

  name: string;
  type: EventType;
  start: string;
  end: string;
  timezone: string;
  slug: string;
  themeId: string;
  archived?: boolean;

  profile?: EventProfile;
  settings?: EventSettings;
  registration?: EventRegistration;
  sessions?: EventSession[];

  createdAt: string;
  updatedAt: string;
}

export const EventSchema = Joi.object<Event>({
  id: Joi.string().required(),
  orgId: Joi.string().required(),
  name: Joi.string().required(),
  type: EventTypeSchema.required(),
  start: Joi.date().iso().required(),
  end: Joi.date().iso().greater(Joi.ref('start')).required(),
  timezone: EventTimezoneSchema.required(),
  slug: SlugSchema.required(),
  themeId: Joi.string().required(),
  archived: Joi.bool(),
  profile: EventProfileSchema,
  settings: EventSettingsSchema,
  registration: EventRegistrationSchema,
  sessions: Joi.array().items(EventSessionSchema),
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
});

export type EventCreate = Omit<Event, 'id' | 'orgId' | 'createdAt' | 'updatedAt'>;

export const EventCreateSchema = EventSchema.keys({
  id: Joi.forbidden(),
  orgId: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

export const isEventCreate = (val: unknown): val is EventCreate => EventCreateSchema.validate(val).error === undefined;

export type EventUpdate = Partial<Omit<Event, 'id' | 'orgId' | 'url' | 'createdAt' | 'updatedAt'>>;

export const EventUpdateSchema = EventSchema.keys({
  id: Joi.forbidden(),
  orgId: Joi.forbidden(),
  slug: SlugSchema,
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),

  name: Joi.string(),
  timezone: EventTimezoneSchema,
  type: EventTypeSchema,
  start: Joi.date().iso(),
  end: Joi.date().iso(),
  themeId: Joi.string(),
});

export const isEventUpdate = (val: unknown): val is EventUpdate => EventUpdateSchema.validate(val).error === undefined;

export type EventStatus = 'event-setup' | 'registration-setup' | 'waiting' | 'active';

export interface Event {
  id: string;

  startDate: number;
  endDate: number;
  title: string;
  description: string;
  url: string;
  type: EventType;
  security: EventSecurity;
  tags?: string[];
  socials?: EventSocialAccount[];
  sessionsCount?: number;

  /** Small image */
  thumbnail?: string;
  /** Big image */
  banner?: string;

  company?: EventCompany;
  registration?: EventRegistration;
  theme?: EventTheme;
  settings?: EventSettings;
  statistics?: EventStatistics;
}

/** Event security level */
type EventSecurity = 'open' | 'public-reg' | 'private-reg';

type EventType = '';

export interface EventCompany {
  name: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  website?: string;
  email?: string;
}

interface EventSettings {
  /** Multi-factor Authentication & Manual Approval settings */
  auth?: EventAuthSettings;
  /** Email Domain Restriction */
  email?: EventEmailRestrictions;
  /** Password Requirements  */
  password?: EventPasswordSettings;
  /** Email Validation/Responce Requirements  */
  validation?: EventValidationSettings;
}

interface EventTheme {
  title: string;
  description: string;
  preview: string;
  colors: EventThemeColors;
  fonts?: string;
}

interface EventThemeColors {
  background: string;
  largeHeadline: string;
  mediumHeadline: string;
  bodyText: string;
  subhead: string;
  buttons: string;
}

interface EventAuthSettings {
  /** Multi-factor Authentication */
  multifactor?: boolean;
  /** Require manual approval of users who sign up */
  manual?: boolean;
}

/** Event theme email restriction rules */
interface EventEmailRestrictions {
  allowed: string[];
}

/** Event theme password related settings */
interface EventPasswordSettings {
  /** Have at least one letter */
  letter?: boolean;
  /** Have at least one capital letter */
  capitalLetter?: boolean;
  /** Have at least one number */
  number?: boolean;
  /** Have at least one special character */
  specialCharacter?: boolean;
  /** Not be the same as the account name */
  notAccountName?: boolean;
}

/** Event theme validation related settings */
interface EventValidationSettings {
  /** Validation of Email Addresses Required */
  email?: boolean;
}

interface EventSocialAccount {
  name: string;
  url: string;
  global?: boolean;
}

interface EventRegistration {
  /** Start of the registration */
  startDate?: number;
  /** Registration URL */
  url?: string;
}

interface EventStatistics {
  /** Subscribed users count */
  subscrUsersCount?: number;
  /** Active users count */
  activeUsersCount?: number;
}

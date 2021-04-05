export type EventStatus = 'event-setup' | 'registration-setup' | 'waiting' | 'active';

export interface Event {
  /** Small image */
  thumbnail?: string;
  /** Big image */
  banner?: string;
  /** Company related information */
  company: EventCompany;
  /** Theme */
  theme: EventTheme;
}

export interface EventCompany {
  name: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  website?: string;
  email?: string;
}

interface EventTheme {
  /** Main title */
  title: string;
  /** Main description */
  description: string;
  /** Preview image */
  preview: string;
  /** Multi-factor Authentication & Manual Approval settings */
  authSettings?: EventAuthSettings;
  /** Email Domain Restriction */
  emailRestrictions?: EventEmailRestrictions;
  /** Password Requirements  */
  passwordSettings?: EventPasswordSettings;
  /** Email Validation/Responce Requirements  */
  validationSettings?: EventValidationSettings;
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

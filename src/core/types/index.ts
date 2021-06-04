import { EventCreate, EventThemeUpdate, OrganizationInviteCreate, OrganizationUpdate } from 'core/api';

export interface StoredForms {
  auth: StoredAuthForm;
  onboarding: StoredOnboardingForm;
}

interface StoredAuthForm {
  lastEmail?: string;
}

interface StoredOnboardingForm {
  org?: OrganizationUpdate;
  invite?: Partial<OrganizationInviteCreate>;
  theme?: {
    id?: string;
    data?: EventThemeUpdate;
  };
  event?: Partial<EventCreate>;
}

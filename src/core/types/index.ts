import { EventCreate, OrganizationInviteCreate, OrganizationUpdate } from 'core/api';

export interface StoredForms {
  onboarding: StoredOnboardingForm;
}

interface StoredOnboardingForm {
  org?: OrganizationUpdate;
  invite?: Partial<OrganizationInviteCreate>;
  theme?: {
    id?: string;
  };
  event?: Partial<EventCreate>;
}

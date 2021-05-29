import { EventType } from './event';
import { OrganizationRole } from './organization';

export const organizationRoleToName = (val: OrganizationRole): string => {
  switch (val) {
    case 'owner':
      return 'Owner';
    case 'admin':
      return 'Admin';
    case 'manager':
      return 'Manager';
  }
};

export const eventTypeToName = (val: EventType): string => {
  switch (val) {
    case 'public':
      return 'Public';
    case 'public-with-registration':
      return 'Public with registration';
    case 'private-with-registration':
      return 'Private with registration';
  }
};

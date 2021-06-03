import { omit } from 'lodash';

import { Event, EventUpdate, EventTheme, EventThemeUpdate, Organization, OrganizationUpdate, User, UserUpdate } from './types';

// API

export const isStatus200 = (status: number) => status >= 200 && status <= 299;

// Errors

export class ApiError extends Error {
  public readonly status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

// Profile

export const userToUpdate = (data: User | undefined): UserUpdate =>
  data ? omit(data, ['id', 'email', 'confirmed', 'createdAt', 'updatedAt']) : {};

// Organizations

export const orgItemToUpdate = (item: Organization | undefined): OrganizationUpdate =>
  item ? omit(item, ['id', 'createdAt', 'updatedAt']) : {};

// Events

export const eventItemToUpdate = (item: Event | undefined): EventUpdate =>
  item ? omit(item, ['id', 'orgId', 'url', 'createdAt', 'updatedAt']) : {};

// Themes

export const eventThemeToUpdate = (item: EventTheme): EventThemeUpdate =>
  omit(item, ['id', 'orgId', 'type', 'createdAt', 'updatedAt']);

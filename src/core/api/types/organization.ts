import Joi from 'joi';
import { emailMaxSize, firstNameMaxSize, lastNameMaxSize, memberTitleMaxSize, shortTextMaxSize } from 'utils';

import { PhoneSchema, UrlSchema } from './common';
import { Social, SocialSchema } from './social';
import { User } from './user';

// Organization

export interface Organization {
  id: string;

  name: string;
  type: OrganizationType;
  email?: string;
  phone?: string;
  country?: string;
  state?: string;
  city?: string;
  postcode?: string;
  website?: string;
  logo?: string;
  socials?: Social[];

  createdAt: string;
  updatedAt: string;
}

export const OrganizationSchema = Joi.object<Organization>({
  id: Joi.string().required(),
  name: Joi.string().required(),
  type: Joi.string().required(),
  email: Joi.string(),
  phone: PhoneSchema,
  country: Joi.string(),
  state: Joi.string(),
  city: Joi.string(),
  postcode: Joi.string(),
  website: UrlSchema,
  logo: Joi.string(),
  socials: Joi.array().items(SocialSchema),
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
});

export const isOrganization = (val: unknown): val is Organization => OrganizationSchema.validate(val).error === undefined;

export type OrganizationCreate = Omit<Organization, 'id' | 'createdAt' | 'updatedAt'>;

export type OrganizationUpdate = Partial<Omit<Organization, 'id' | 'createdAt' | 'updatedAt'>>;

export type OrganizationType = 'company' | 'non-profit' | 'individual';

export const orgTypeArr: OrganizationType[] = ['company', 'non-profit', 'individual'];

export const OrganizationCreateSchema = Joi.object<Organization>({
  name: Joi.string().required(),
  type: Joi.string()
    .valid(...orgTypeArr)
    .required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  phone: PhoneSchema,
  country: Joi.string(),
  state: Joi.string(),
  city: Joi.string(),
  postcode: Joi.string(),
  website: UrlSchema,
  logo: Joi.string().uri(),
  socials: Joi.array().items(SocialSchema),
});

export const OrganizationUpdateSchema = Joi.object<Organization>({
  name: Joi.string(),
  type: Joi.string().valid(...orgTypeArr),
  email: Joi.string().email({ tlds: { allow: false } }),
  phone: PhoneSchema,
  country: Joi.string(),
  state: Joi.string(),
  city: Joi.string(),
  postcode: Joi.string(),
  website: UrlSchema,
  logo: Joi.string().uri(),
  socials: Joi.array().items(SocialSchema),
});

// Members

export interface OrganizationMember {
  id: string;
  title?: string;
  role: OrganizationRole;
  user: User;
}

export interface OrganizationMemberCreate {
  id: string;
  userId: string;
  orgId: string;
  title?: string;
  role: OrganizationRole;
}

export type OrganizationMemberUpdate = Pick<OrganizationMember, 'title' | 'role'>;

export type OrganizationRole = 'owner' | 'admin' | 'manager';

export const orgRoleArr: OrganizationRole[] = ['owner', 'admin', 'manager'];

export const OrganizationRoleSchema = Joi.string().valid(...orgRoleArr);

export const OrganizationMemberUpdateSchema = Joi.object<OrganizationMemberUpdate>({
  title: Joi.string(),
  role: Joi.string().valid(...orgRoleArr),
});

/**
 * Invites
 */

export type OrganizationInviteStatus = 'pending' | 'error' | 'done';

export const orgInviteStatusArr: OrganizationInviteStatus[] = ['pending', 'error', 'done'];

export const OrganizationInviteStatusSchema = Joi.string().valid(...orgInviteStatusArr);

export interface OrganizationInvite {
  id: string;
  firstName: string;
  lastName: string;
  message?: string;
  title?: string;
  email: string;
  role: OrganizationRole;
  status: OrganizationInviteStatus;
  createdAt: string;
  updatedAt: string;
}

export const OrganizationInviteSchema = Joi.object<OrganizationInvite>({
  id: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  message: Joi.string(),
  title: Joi.string(),
  email: Joi.string().required(),
  role: OrganizationRoleSchema,
  status: OrganizationInviteStatusSchema,
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
});

export const isOrganizationInvite = (val: unknown): val is OrganizationInvite =>
  OrganizationInviteSchema.validate(val).error === undefined;

export type OrganizationInviteCreate = Omit<OrganizationInvite, 'id' | 'status' | 'createdAt' | 'updatedAt'>;

export const orgInviteCreateSchema = Joi.object<OrganizationInviteCreate>({
  firstName: Joi.string().max(firstNameMaxSize).required(),
  lastName: Joi.string().max(lastNameMaxSize).required(),
  email: Joi.string()
    .max(emailMaxSize)
    .email({ tlds: { allow: false } })
    .required(),
  role: Joi.string()
    .valid(...orgRoleArr)
    .required(),
  message: Joi.string().max(shortTextMaxSize),
  title: Joi.string().max(memberTitleMaxSize),
});

export const isOrganizationInviteCreate = (val: unknown): val is OrganizationInviteCreate =>
  orgInviteCreateSchema.validate(val).error === undefined;

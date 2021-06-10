import Joi from 'joi';
import { shortTextMaxSize } from 'utils';

import { EmailSchema, EmptyStrSchema, IdSchema, NameSchema, PhoneSchema, UrlSchema } from './common';
import { Social, SocialSchema } from './social';
import { User } from './user';

// Type

export type OrganizationType = 'company' | 'non-profit' | 'individual';

export const OrganizationTypeArr: OrganizationType[] = ['company', 'non-profit', 'individual'];

export const OrganizationTypeSchema = Joi.string().valid(...OrganizationTypeArr);

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
  id: IdSchema.required(),
  name: NameSchema.required(),
  type: OrganizationTypeSchema.required(),
  email: EmailSchema.allow(''),
  phone: PhoneSchema.allow(''),
  country: EmptyStrSchema,
  state: EmptyStrSchema,
  city: EmptyStrSchema,
  postcode: EmptyStrSchema,
  website: UrlSchema.allow(''),
  logo: UrlSchema.allow(''),
  socials: Joi.array().items(SocialSchema),
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
});

export const isOrganization = (val: unknown): val is Organization => OrganizationSchema.validate(val).error === undefined;

export type OrganizationCreate = Omit<Organization, 'id' | 'createdAt' | 'updatedAt'>;

export const OrganizationCreateSchema = OrganizationSchema.keys({
  id: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

export type OrganizationUpdate = Partial<Omit<Organization, 'id' | 'createdAt' | 'updatedAt'>>;

export const OrganizationUpdateSchema = OrganizationSchema.keys({
  id: Joi.forbidden(),
  name: NameSchema,
  type: OrganizationTypeSchema,
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
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

export type OrganizationInviteStatus = 'pending' | 'error' | 'accepted' | 'rejected';

export const orgInviteStatusArr: OrganizationInviteStatus[] = ['pending', 'error', 'accepted', 'rejected'];

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
  !!val && OrganizationInviteSchema.validate(val).error === undefined;

export type OrganizationInviteCreate = Omit<OrganizationInvite, 'id' | 'status' | 'createdAt' | 'updatedAt'>;

export const orgInviteCreateSchema = Joi.object<OrganizationInviteCreate>({
  firstName: NameSchema.required(),
  lastName: NameSchema.required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  role: Joi.string()
    .valid(...orgRoleArr)
    .required(),
  message: Joi.string().max(shortTextMaxSize),
  title: Joi.string().max(100),
});

export const isOrganizationInviteCreate = (val: unknown): val is OrganizationInviteCreate =>
  !!val && orgInviteCreateSchema.validate(val).error === undefined;

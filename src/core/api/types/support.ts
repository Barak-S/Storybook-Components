import Joi from 'joi';
import { longTextMaxSize } from 'utils';

import { NameSchema, phoneValidatorFn } from './common';

export interface SupportContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  token: string;
}

export const SupportContactRequestSchema = Joi.object<SupportContactRequest>({
  firstName: NameSchema.required(),
  lastName: NameSchema.required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().custom(phoneValidatorFn),
  message: Joi.string().max(longTextMaxSize).required(),
  token: Joi.string().required(),
});

export const isSupportContactRequest = (val: unknown): val is SupportContactRequest =>
  SupportContactRequestSchema.validate(val).error === undefined;

import Joi from 'joi';
import { firstNameMaxSize, lastNameMaxSize, longTextMaxSize } from 'utils';

export interface SupportContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  token: string;
}

export const SupportContactRequestSchema = Joi.object<SupportContactRequest>({
  firstName: Joi.string().max(firstNameMaxSize).required(),
  lastName: Joi.string().max(lastNameMaxSize).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().required(),
  message: Joi.string().max(longTextMaxSize).required(),
  token: Joi.string().required(),
});

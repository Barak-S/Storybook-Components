import Joi, { CustomValidator } from 'joi';
import { isStr, timeZones } from 'utils';

// URL

export const urlValidatorFn: CustomValidator = (value, helpers) => {
  if (!isStr(value)) {
    return helpers.error('any.invalid');
  }
  if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(value)) {
    return value;
  }
  if (/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(value)) {
    return value;
  }
  return helpers.error('any.invalid');
};

export const UrlSchema = Joi.string().trim().strict().custom(urlValidatorFn);

export const isUrl = (val: unknown): val is string => !!val && UrlSchema.validate(val).error === undefined;

// Phone

export const phoneValidatorFn: CustomValidator = (value, helpers) => {
  if (!isStr(value)) {
    return helpers.error('any.invalid');
  }
  if (/^[+\d()-\s)]+$/.test(value)) {
    return value;
  }
  return helpers.error('any.invalid');
};

export const PhoneSchema = Joi.string().trim().strict().custom(phoneValidatorFn);

export const isPhone = (val: unknown): val is string => !!val && PhoneSchema.validate(val).error === undefined;

// Color

export const colorValidatorFn: CustomValidator = (value, helpers) => {
  if (!isStr(value)) {
    return helpers.error('any.invalid');
  }
  if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)) {
    return value;
  }
  if (/^#(?:[0-9a-fA-F]{3,4}){1,2}$/.test(value)) {
    return value;
  }
  if (/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.test(value)) {
    return value;
  }
  return helpers.error('any.invalid');
};

export const ColorSchema = Joi.string().trim().strict().custom(colorValidatorFn);

export const isColor = (val: unknown): val is string => !!val && ColorSchema.validate(val).error === undefined;

// Time Zone

export const EventTimezoneSchema = Joi.string().valid(...timeZones.map(itm => itm.code));

// Email

export const EmailSchema = Joi.string()
  .trim()
  .strict()
  .email({ tlds: { allow: false } });

// Different

export const StrSchema = Joi.string().trim().strict();

export const EmptyStrSchema = StrSchema.allow('');

export const IdSchema = Joi.string().trim().strict().max(30);

export const NameSchema = Joi.string().trim().strict().max(50);

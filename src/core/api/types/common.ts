import Joi, { CustomValidator } from 'joi';
import { isStr, timeZones } from 'utils';

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

export const phoneValidatorFn: CustomValidator = (value, helpers) => {
  if (!isStr(value)) {
    return helpers.error('any.invalid');
  }
  if (/^[+\d()-\s)]+$/.test(value)) {
    return value;
  }
  return helpers.error('any.invalid');
};

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

export const EventTimezoneSchema = Joi.string().valid(...timeZones.map(itm => itm.code));

export const EmptyStrSchema = Joi.string().allow('');

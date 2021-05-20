import Joi from 'joi';
import { idMaxSize, nameMaxSize } from 'utils';

export interface Social {
  id: string;
  name: string;
  url: string;
}

export const SocialSchema = Joi.object({
  id: Joi.string().max(idMaxSize).required(),
  name: Joi.string().max(nameMaxSize).required(),
  url: Joi.string().uri().required(),
});

export const isSocial = (val: unknown): val is Social => SocialSchema.validate(val).error === undefined;

export type SocialType = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'google' | 'youtube' | 'custom';

export const socialTypeArr: SocialType[] = ['facebook', 'twitter', 'linkedin', 'instagram', 'google', 'youtube', 'custom'];

export const isSocialType = (val: unknown): val is SocialType =>
  Joi.string()
    .valid(...socialTypeArr)
    .validate(val).error === undefined;

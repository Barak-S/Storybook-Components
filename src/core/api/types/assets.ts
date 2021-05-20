import Joi from 'joi';

export interface AssetsImage {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  etag: string;
}

export const AssetsImageSchema = Joi.object<AssetsImage>({
  id: Joi.string(),
  url: Joi.string(),
  width: Joi.number(),
  height: Joi.number(),
  format: Joi.string(),
  etag: Joi.string(),
});

export const isAssetsImage = (val: unknown): val is AssetsImage => AssetsImageSchema.validate(val).error === undefined;

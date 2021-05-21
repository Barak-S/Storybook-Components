import Joi from 'joi';

// Recurring

export interface StripePriceRecurring {
  aggregate_usage?: string;
  interval: 'month' | 'year' | 'week' | 'day';
  interval_count: number;
  usage_type: 'licensed' | 'metered';
}

export const StripePriceRecurringSchema = Joi.object<StripePriceRecurring>({
  aggregate_usage: Joi.string(),
  interval: Joi.string().valid('month', 'year', 'week', 'day').required(),
  interval_count: Joi.number().required(),
  usage_type: Joi.string().valid('licensed', 'metered').required(),
});

export const isStripePriceRecurring = (val: unknown): val is StripePriceRecurring =>
  StripePriceRecurringSchema.validate(val).error === undefined;

// Price

export interface StripePrice {
  id: string;
  object: 'price';
  active: boolean;
  billing_scheme: 'per_unit' | 'tiered';
  currency: string;
  livemode: boolean;
  metadata: StripeMetadata;
  product: string;
  type: 'one_time' | 'recurring';
  recurring: StripePriceRecurring;
  unit_amount?: number;
  unit_amount_decimal?: string;
  created: number;
}

export const StripePriceSchema = Joi.object({
  id: Joi.string().required(),
  object: Joi.string().valid('price'),
  active: Joi.bool().required(),
  billing_scheme: Joi.string().valid('per_unit', 'tiered').required(),
  currency: Joi.string().required(),
  livemode: Joi.bool().required(),
  metadata: Joi.object().required(),
  product: Joi.string().required(),
  type: Joi.string().valid('one_time', 'recurring').required(),
  recurring: StripePriceRecurringSchema,
  unit_amount: Joi.number().required(),
  unit_amount_decimal: Joi.string(),
  created: Joi.number().required(),
  updated: Joi.number(),
});

export const isStripePrice = (val: unknown): val is StripePrice => StripePriceSchema.validate(val).error === undefined;

// Producs

export interface StripeProduct {
  id: string;
  object: 'product';
  type?: string;
  active: boolean;
  description?: string;
  images: string[];
  attributes?: string[];
  livemode: boolean;
  metadata: StripeMetadata;
  name: string;
  shippable?: boolean;
  statement_descriptor?: string;
  unit_label?: string;
  url?: string;
  prices: StripePrice[];
  created: number;
  updated?: number;
}

export const StripeProductSchema = Joi.object<StripeProduct>({
  id: Joi.string().required(),
  object: Joi.string().valid('product').required(),
  type: Joi.string(),
  active: Joi.bool().required(),
  description: Joi.string(),
  images: Joi.array().items(Joi.string()).required(),
  attributes: Joi.array().items(Joi.string()),
  livemode: Joi.bool().required(),
  metadata: Joi.object().required(),
  name: Joi.string().required(),
  shippable: Joi.bool(),
  statement_descriptor: Joi.string(),
  unit_label: Joi.string(),
  url: Joi.string(),
  prices: Joi.array().items(StripePriceSchema).required(),
  created: Joi.number().required(),
  updated: Joi.number(),
});

export const isStripeProduct = (val: unknown): val is StripeProduct => StripeProductSchema.validate(val).error === undefined;

// Metadata

type StripeMetadata = Record<string, string>;

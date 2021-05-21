import Joi from 'joi';

import { ApiDataResp, ApiReqHandler, StripeProduct, StripeProductSchema } from '../types';

export const getPaywallRequests = (apiReq: ApiReqHandler) => {
  const products = async (): Promise<ApiDataResp<StripeProduct[]>> =>
    apiReq({ auth: false, path: '/paywall/products', schema: Joi.object({ data: Joi.array().items(StripeProductSchema) }) });
  return { products };
};

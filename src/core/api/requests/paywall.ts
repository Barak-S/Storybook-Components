import { ApiDataResp, ApiReqHandler, getRespArrSchema, StripeProduct, StripeProductSchema } from '../types';

export const getPaywallRequests = (apiReq: ApiReqHandler) => {
  const products = async (): Promise<ApiDataResp<StripeProduct[]>> =>
    apiReq({ auth: false, path: '/paywall/products', schema: getRespArrSchema(StripeProductSchema) });
  return { products };
};

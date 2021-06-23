import Joi from 'joi';
import { ApiDataResp, ApiReqHandler, getRespSchema, SlugSchema } from '../types';

const SuggestSlugRespSchema = getRespSchema(Joi.object({ slug: SlugSchema.required() }));

export const getEventsRequests = (apiReq: ApiReqHandler) => {
  const checkSlug = async (slug: string): Promise<void> =>
    apiReq({ auth: false, method: 'POST', path: `/events/slug/check`, data: { slug } });

  const suggestSlug = async (name: string): Promise<ApiDataResp<{ slug: string }>> =>
    apiReq({ auth: false, method: 'POST', path: `/events/slug/suggest`, data: { name }, schema: SuggestSlugRespSchema });

  return { checkSlug, suggestSlug };
};

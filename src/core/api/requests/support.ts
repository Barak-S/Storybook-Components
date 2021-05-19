import { ApiReqHandler, SupportContactRequest } from '../types';

export const getSupportRequests = (apiReq: ApiReqHandler) => {
  const contact = async (data: SupportContactRequest): Promise<void> =>
    apiReq({ auth: false, method: 'POST', path: `/support/contact`, data });
  return { contact };
};

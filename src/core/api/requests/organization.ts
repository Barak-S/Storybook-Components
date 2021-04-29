import {
  ApiDataResp,
  ApiReqHandler,
  getArrGuard,
  getRespGuard,
  isOrganization,
  Organization,
  OrganizationUpdate,
} from '../types';

export const getOrgsRequests = (apiReq: ApiReqHandler) => {
  const list = async (): Promise<ApiDataResp<Organization[]>> =>
    apiReq({ auth: true, path: '/orgs', guard: getRespGuard(getArrGuard(isOrganization)) });

  const get = async (orgId: string): Promise<ApiDataResp<Organization>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}`, guard: getRespGuard(isOrganization) });

  const modify = async (orgId: string, data: OrganizationUpdate): Promise<ApiDataResp<Organization>> =>
    apiReq({ auth: true, method: 'PUT', path: `/orgs/${orgId}`, guard: getRespGuard(isOrganization), data });

  const remove = async (orgId: string): Promise<void> => apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}` });

  return { list, get, modify, remove };
};

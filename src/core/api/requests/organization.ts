import {
  ApiDataResp,
  ApiReqHandler,
  getArrGuard,
  getRespGuard,
  isOrganization,
  isOrganizationInvite,
  Organization,
  OrganizationInvite,
  OrganizationInviteCreate,
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

  return { list, get, modify, remove, invites: getOrgsInvitesRequests(apiReq) };
};

const getOrgsInvitesRequests = (apiReq: ApiReqHandler) => {
  const list = async (orgId: string): Promise<ApiDataResp<OrganizationInvite[]>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/invites`, guard: getRespGuard(getArrGuard(isOrganizationInvite)) });

  const create = async (orgId: string, data: OrganizationInviteCreate): Promise<ApiDataResp<OrganizationInvite>> =>
    apiReq({ auth: true, method: 'POST', path: `/orgs/${orgId}/invites`, data, guard: getRespGuard(isOrganizationInvite) });

  const get = async (orgId: string, inviteId: string): Promise<ApiDataResp<OrganizationInvite>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/invites/${inviteId}`, guard: getRespGuard(isOrganizationInvite) });

  const remove = async (orgId: string, inviteId: string): Promise<void> =>
    apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}/invites/${inviteId}` });

  return { list, create, get, remove };
};

import {
  ApiDataResp,
  ApiReqHandler,
  getRespArrSchema,
  getRespSchema,
  Organization,
  OrganizationInvite,
  OrganizationInviteCreate,
  OrganizationInviteSchema,
  OrganizationSchema,
  OrganizationUpdate,
} from '../types';

export const getOrgsRequests = (apiReq: ApiReqHandler) => {
  const list = async (): Promise<ApiDataResp<Organization[]>> =>
    apiReq({ auth: true, path: '/orgs', schema: getRespArrSchema(OrganizationSchema) });

  const get = async (orgId: string): Promise<ApiDataResp<Organization>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}`, schema: getRespSchema(OrganizationSchema) });

  const modify = async (orgId: string, data: OrganizationUpdate): Promise<ApiDataResp<Organization>> =>
    apiReq({ auth: true, method: 'PUT', path: `/orgs/${orgId}`, schema: getRespSchema(OrganizationSchema), data });

  const remove = async (orgId: string): Promise<void> => apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}` });

  return { list, get, modify, remove, invites: getOrgsInvitesRequests(apiReq) };
};

const getOrgsInvitesRequests = (apiReq: ApiReqHandler) => {
  const list = async (orgId: string): Promise<ApiDataResp<OrganizationInvite[]>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/invites`, schema: getRespArrSchema(OrganizationInviteSchema) });

  const create = async (orgId: string, data: OrganizationInviteCreate): Promise<ApiDataResp<OrganizationInvite>> =>
    apiReq({ auth: true, method: 'POST', path: `/orgs/${orgId}/invites`, data, schema: getRespSchema(OrganizationInviteSchema) });

  const get = async (orgId: string, inviteId: string): Promise<ApiDataResp<OrganizationInvite>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/invites/${inviteId}`, schema: getRespSchema(OrganizationInviteSchema) });

  const remove = async (orgId: string, inviteId: string): Promise<void> =>
    apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}/invites/${inviteId}` });

  return { list, create, get, remove };
};

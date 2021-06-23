import {
  ApiDataResp,
  ApiReqHandler,
  EventTheme,
  EventThemeCreate,
  EventThemeSchema,
  EventThemeUpdate,
  getRespArrSchema,
  getRespSchema,
} from '../../types';

export const getOrganizationsThemesRequests = (apiReq: ApiReqHandler) => {
  const list = async (orgId: string): Promise<ApiDataResp<EventTheme[]>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/themes`, schema: getRespArrSchema(EventThemeSchema) });

  const get = async (orgId: string, themeId: string): Promise<ApiDataResp<EventTheme>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/themes/${themeId}`, schema: getRespSchema(EventThemeSchema) });

  const create = async (orgId: string, data: EventThemeCreate): Promise<ApiDataResp<EventTheme>> =>
    apiReq({
      auth: true,
      method: 'POST',
      path: `/orgs/${orgId}/themes`,
      data,
      schema: getRespSchema(EventThemeSchema),
    });

  const modify = async (orgId: string, themeId: string, data: EventThemeUpdate): Promise<ApiDataResp<EventTheme>> =>
    apiReq({
      auth: true,
      method: 'PUT',
      path: `/orgs/${orgId}/themes/${themeId}`,
      data,
      schema: getRespSchema(EventThemeSchema),
    });

  const remove = async (orgId: string, themeId: string): Promise<void> =>
    apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}/themes/${themeId}` });

  return { list, get, create, modify, remove };
};

import { ApiDataResp, ApiReqHandler, getRespGuard, isUser, isUserSettings, User, UserSettings, UserUpdate } from '../types';

export const getUserRequests = (apiReq: ApiReqHandler) => {
  const init = async (type: string = 'organization'): Promise<ApiDataResp<User>> =>
    apiReq({ auth: true, method: 'POST', params: { type }, path: '/user/init', guard: getRespGuard(isUser) });

  const confirm = async (): Promise<ApiDataResp<User>> =>
    apiReq({ auth: true, method: 'POST', path: '/user/confirm', guard: getRespGuard(isUser) });

  const get = async (): Promise<ApiDataResp<User>> => apiReq({ auth: true, path: '/user', guard: getRespGuard(isUser) });

  const modify = async (data: UserUpdate): Promise<ApiDataResp<User>> =>
    apiReq({ auth: true, path: '/user', method: 'PUT', data, guard: getRespGuard(isUser) });

  return { init, confirm, get, modify, settings: getUserSettingsRequests(apiReq) };
};

const getUserSettingsRequests = (apiReq: ApiReqHandler) => {
  const get = async (): Promise<ApiDataResp<UserSettings>> =>
    apiReq({ auth: true, path: '/user/settings', guard: getRespGuard(isUserSettings) });

  const modify = async (data: UserSettings): Promise<ApiDataResp<UserSettings>> =>
    apiReq({ auth: true, path: '/user/settings', method: 'PUT', data, guard: getRespGuard(isUserSettings) });

  return { get, modify };
};

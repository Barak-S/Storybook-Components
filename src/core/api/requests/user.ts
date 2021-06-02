import {
  ApiDataResp,
  ApiReqHandler,
  getRespSchema,
  User,
  UserSchema,
  UserSettings,
  UserSettingsSchema,
  UserUpdate,
} from '../types';

export const getUserRequests = (apiReq: ApiReqHandler) => {
  const init = async (type: string = 'organization'): Promise<ApiDataResp<User>> =>
    apiReq({ auth: true, method: 'POST', params: { type }, path: '/user/init', schema: getRespSchema(UserSchema) });

  const confirm = async (): Promise<ApiDataResp<User>> =>
    apiReq({ auth: true, method: 'POST', path: '/user/confirm', schema: getRespSchema(UserSchema) });

  const get = async (): Promise<ApiDataResp<User>> => apiReq({ auth: true, path: '/user', schema: getRespSchema(UserSchema) });

  const modify = async (data: UserUpdate): Promise<ApiDataResp<User>> =>
    apiReq({ auth: true, path: '/user', method: 'PUT', data, schema: getRespSchema(UserSchema) });

  return { init, confirm, get, modify, settings: getUserSettingsRequests(apiReq) };
};

const getUserSettingsRequests = (apiReq: ApiReqHandler) => {
  const get = async (): Promise<ApiDataResp<UserSettings>> =>
    apiReq({ auth: true, path: '/user/settings', schema: getRespSchema(UserSettingsSchema) });

  const modify = async (data: UserSettings): Promise<ApiDataResp<UserSettings>> =>
    apiReq({ auth: true, path: '/user/settings', method: 'PUT', data, schema: getRespSchema(UserSettingsSchema) });

  return { get, modify };
};

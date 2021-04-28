import axios from 'axios';
import appConfig from 'core/configs';
import { Log } from 'core/log';
import { secMs } from 'utils';

import {
  ApiOpt,
  ApiReqOpt,
  AssetsImageResp,
  isApiErrResp,
  isAssetsImageResp,
  isUserResp,
  isUserSettingsResp,
  UserResp,
  UserSettings,
  UserSettingsResp,
  UserUpdate,
} from './types';
import { ApiError, isStatus200 } from './utils';

const log = Log('core.api');

export const getApiWithOpt = ({ token }: ApiOpt) => {
  const apiReq = async <T>(opt: ApiReqOpt<T>): Promise<T> => {
    const { method = 'GET', path, params, data: reqData, timeout = secMs * 10, auth = true, guard } = opt;
    if (auth && !token) {
      log.err(`Trying to call "${path}" without a token`);
      throw new Error(`Trying to call "${path}" without a token`);
    }
    const url = `${appConfig.api.url}${path}`;
    const headers: Record<string, string> = {};
    if (token) {
      headers['Authorization'] = token;
    }
    if (reqData) {
      if (reqData instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
      } else {
        headers['Content-Type'] = 'application/json';
      }
    }
    const config = { method, url, headers, params, timeout, data: reqData, validateStatus: () => true };
    log.debug('req, config=', config);
    const { data, status, statusText } = await axios(config);
    log.debug('req done, status=', status, ', statusText=', statusText, ', data=', data);
    if (isStatus200(status)) {
      if (guard(data)) {
        return data;
      } else {
        log.err(`wrong resp data format, data=${JSON.stringify(data)}`);
        throw new Error(`Wrong response data format`);
      }
    }
    if (isApiErrResp(data)) {
      throw new ApiError(data.message, status);
    } else {
      throw new ApiError(statusText, status);
    }
  };

  // User

  const initUser = async (type: string = 'organization'): Promise<UserResp> =>
    apiReq({ auth: true, method: 'POST', params: { type }, path: '/user/init', guard: isUserResp });

  const confirmUser = async (): Promise<UserResp> =>
    apiReq({ auth: true, method: 'POST', path: '/user/confirm', guard: isUserResp });

  const getUser = async (): Promise<UserResp> => apiReq({ auth: true, path: '/user', guard: isUserResp });

  const modifyUser = async (data: UserUpdate): Promise<UserResp> =>
    apiReq({ auth: true, path: '/user', method: 'PUT', data, guard: isUserResp });

  const getUserSettings = async (): Promise<UserSettingsResp> =>
    apiReq({ auth: true, path: '/user/settings', guard: isUserSettingsResp });

  const modifyUserSettings = async (data: UserSettings): Promise<UserSettingsResp> =>
    apiReq({ auth: true, path: '/user/settings', method: 'PUT', data, guard: isUserSettingsResp });

  // Assets

  const uploadImage = async (file: File, folder?: string): Promise<AssetsImageResp> => {
    const data = new FormData();
    data.append('file', file);
    if (folder) {
      data.append('folder', folder);
    }
    return apiReq({ auth: true, path: '/assets/images', method: 'POST', data, timeout: secMs * 30, guard: isAssetsImageResp });
  };

  // Export

  return { initUser, confirmUser, getUser, modifyUser, getUserSettings, modifyUserSettings, uploadImage };
};

export type Api = ReturnType<typeof getApiWithOpt>;
export * from './types';
export * from './utils';

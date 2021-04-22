import axios from 'axios';
import appConfig from 'core/configs';
import { Log } from 'core/log';
import { secMs } from 'utils';

import {
  ApiOpt,
  ApiReqOpt,
  isApiErrResp,
  isUserResp,
  isUserSettingsResp,
  UserResp,
  UserSettings,
  UserSettingsResp,
  UserUpdate,
} from './types';
import { isStatus200 } from './utils';

const log = Log('core.api');

export const getApiWithOpt = ({ token }: ApiOpt) => {
  /** Basic */

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
      headers['Content-Type'] = 'application/json';
    }
    const config = { method, url, headers, params, timeout, data: reqData };
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
      throw new Error(data.message);
    } else {
      throw new Error(statusText);
    }
  };

  // User

  const getUser = async (): Promise<UserResp> => apiReq({ auth: true, path: '/user', guard: isUserResp });

  const modifyUser = async (data: UserUpdate): Promise<UserResp> =>
    apiReq({ auth: true, path: '/user', method: 'PUT', data, guard: isUserResp });

  const getUserSettings = async (): Promise<UserSettingsResp> =>
    apiReq({ auth: true, path: '/user/settings', guard: isUserSettingsResp });

  const modifyUserSettings = async (data: UserSettings): Promise<UserSettingsResp> =>
    apiReq({ auth: true, path: '/user/settings', method: 'PUT', data, guard: isUserSettingsResp });

  // Export

  return { getUser, modifyUser, getUserSettings, modifyUserSettings };
};

export type Api = ReturnType<typeof getApiWithOpt>;
export * from './types';
export * from './utils';

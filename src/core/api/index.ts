import axios from 'axios';
import appConfig from 'core/configs';
import { Log } from 'core/log';
import { secMs, TypeGuard } from 'utils';

import { AccountProfile, ApiOpt, ApiReqOpt, isApiErrResp, isAccountProfile, AccountProfilePatch } from './types';

const log = Log('core.api');

export const getApiWithOpt = ({ token }: ApiOpt) => {
  const apiReq = async <T>(opt: ApiReqOpt, guard: TypeGuard<T>): Promise<T> => {
    const { method = 'GET', path, params, data: reqData, timeout = secMs * 10, auth = true } = opt;
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

  const getAccountProfile = async (): Promise<AccountProfile> =>
    apiReq({ auth: true, path: '/account/profile' }, isAccountProfile);

  const modifyAccountProfile = async (data: AccountProfilePatch): Promise<AccountProfile> =>
    apiReq({ auth: true, path: '/account/profile', method: 'PATCH', data }, isAccountProfile);

  return { getAccountProfile, modifyAccountProfile };
};

const isStatus200 = (status: number) => status >= 200 && status <= 299;

export type Api = ReturnType<typeof getApiWithOpt>;
export * from './types';

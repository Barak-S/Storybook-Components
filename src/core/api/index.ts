import axios from 'axios';
import appConfig from 'core/configs';
import { Log } from 'core/log';
import { secMs } from 'utils';

import { getUserRequests, getAssetsRequests } from './requests';
import { getOrgsRequests } from './requests/organization';
import { ApiOpt, ApiReqOpt, isApiErrResp } from './types';
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
      if (guard) {
        if (guard(data)) {
          return data;
        } else {
          log.err(`wrong resp data format, data=${JSON.stringify(data)}`);
          throw new Error(`Wrong response data format`);
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return (data as unknown) as T;
      }
    }
    if (isApiErrResp(data)) {
      throw new ApiError(data.message, status);
    } else {
      throw new ApiError(statusText, status);
    }
  };

  return { user: getUserRequests(apiReq), orgs: getOrgsRequests(apiReq), assets: getAssetsRequests(apiReq) };
};

export type Api = ReturnType<typeof getApiWithOpt>;
export * from './types';
export * from './utils';

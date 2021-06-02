import axios from 'axios';
import appConfig from 'core/configs';
import { Log } from 'core/log';
import { secMs } from 'utils';

import {
  getAssetsRequests,
  getEventsRequests,
  getPaywallRequests,
  getSupportRequests,
  getThemesRequests,
  getUserRequests,
} from './requests';
import { getOrgsRequests } from './requests/organization';
import { ApiOpt, ApiReqOpt, isApiErrResp } from './types';
import { ApiError, isStatus200 } from './utils';

const log = Log('core.api');

export const getApiWithOpt = ({ token }: ApiOpt) => {
  const apiReq = async <T>(opt: ApiReqOpt<T>): Promise<T> => {
    const { method = 'GET', path, params, data: reqData, timeout = secMs * 10, auth = true, schema } = opt;
    if (auth && !token) {
      log.err(`trying to call "${path}" without a token`);
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
      if (schema) {
        const { error } = schema.validate(data);
        if (error) {
          log.err(`wrong resp data format, err=`, error);
        }
      }
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return (data as unknown) as T;
    }
    if (isApiErrResp(data)) {
      throw new ApiError(data.message, status);
    } else {
      throw new ApiError(statusText, status);
    }
  };

  return {
    user: getUserRequests(apiReq),
    orgs: getOrgsRequests(apiReq),
    assets: getAssetsRequests(apiReq),
    support: getSupportRequests(apiReq),
    paywall: getPaywallRequests(apiReq),
    themes: getThemesRequests(apiReq),
    events: getEventsRequests(apiReq),
  };
};

export type Api = ReturnType<typeof getApiWithOpt>;
export * from './types';
export * from './utils';

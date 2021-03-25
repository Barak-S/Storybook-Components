import { Method } from 'axios';
import { isString } from 'lodash';
import { isUnknowDict } from 'utils';

export interface ApiOpt {
  token?: string;
}

export interface ApiReqOpt {
  method?: Method;
  path: string;
  data?: unknown;
  params?: Record<string, string | number>;
  timeout?: number;
  auth?: boolean;
}

export interface ApiErrResp {
  message: string;
}

export const isApiErrResp = (val: unknown): val is ApiErrResp => isUnknowDict(val) && isString(val.message);

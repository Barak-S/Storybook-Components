import { Method } from 'axios';
import { isString } from 'lodash';
import { isUnknowDict, TypeGuard } from 'utils';

export interface ApiOpt {
  token?: string;
}

export interface ApiReqOpt<T> {
  method?: Method;
  path: string;
  data?: unknown;
  params?: Record<string, string | number>;
  timeout?: number;
  auth?: boolean;
  guard: TypeGuard<T>;
}

export interface ApiErrResp {
  message: string;
}

export const isApiErrResp = (val: unknown): val is ApiErrResp => isUnknowDict(val) && isString(val.message);

import { Method } from 'axios';
import { Schema } from 'joi';
import { isArray, isString } from 'lodash';
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
  guard?: TypeGuard<T>;
  schema?: Schema<T>;
}

export type ApiReqHandler = <T>(opt: ApiReqOpt<T>) => Promise<T>;

export interface ApiErrResp {
  message: string;
}

export type ApiDataResp<T> = { data: T };

export const getRespGuard = <T>(guard: TypeGuard<T>): TypeGuard<ApiDataResp<T>> => (val: unknown): val is ApiDataResp<T> =>
  isUnknowDict(val) && guard(val.data);

export const getArrGuard = <T>(guard: TypeGuard<T>): TypeGuard<T[]> => (val: unknown): val is T[] =>
  isArray(val) && val.reduce((memo, itm) => memo && guard(itm), true);

export const isApiErrResp = (val: unknown): val is ApiErrResp => isUnknowDict(val) && isString(val.message);

import { Method } from 'axios';
import Joi, { Schema } from 'joi';
import { isString } from 'lodash';
import { isUnknowDict } from 'utils';

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
  schema?: Schema<T>;
}

export type ApiReqHandler = <T>(opt: ApiReqOpt<T>) => Promise<T>;

export interface ApiErrResp {
  message: string;
}

export type ApiDataResp<T> = { data: T };

export const isApiErrResp = (val: unknown): val is ApiErrResp => isUnknowDict(val) && isString(val.message);

export const getRespSchema = (val: Schema) => Joi.object({ data: val });

export const getRespArrSchema = (val: Schema) => Joi.object({ data: Joi.array().items(val) });

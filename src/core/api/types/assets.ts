import { ApiDataResp } from './api';

export interface AssetsImage {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  etag: string;
}

export type AssetsImageResp = ApiDataResp<AssetsImage>;

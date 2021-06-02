import { secMs } from 'utils';

import { ApiDataResp, ApiReqHandler, AssetsImage, AssetsImageSchema, getRespSchema } from '../types';

export const getAssetsRequests = (apiReq: ApiReqHandler) => {
  const uploadImage = async (file: File, folder?: string): Promise<ApiDataResp<AssetsImage>> => {
    const data = new FormData();
    data.append('file', file);
    if (folder) {
      data.append('folder', folder);
    }
    return apiReq({
      auth: true,
      path: '/assets/images',
      method: 'POST',
      data,
      timeout: secMs * 30,
      schema: getRespSchema(AssetsImageSchema),
    });
  };

  return { uploadImage };
};

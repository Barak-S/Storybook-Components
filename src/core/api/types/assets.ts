export interface AssetsImage {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  etag: string;
}

export interface AssetsImageResp {
  image: AssetsImage;
}

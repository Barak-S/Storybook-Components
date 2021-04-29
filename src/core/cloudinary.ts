/* eslint-disable max-len */
interface CloudinaryOpt {
  transform?: CloudinaryTransform;
  version?: string;
}

/**
 * https://cloudinary.com/documentation/transformation_reference
 */
interface CloudinaryTransform {
  width?: number;
  height?: number;
  crop?: 'crop' | 'fill' | 'fill_pad';
}

/**
 * Add tranformation parameters to Cloudinary image
 * @param inputUrl - input URL
 * @param opt - transormation opt
 * @returns modified url
 *
 * The Cloudinary asset delivery URL takes the following structure:
 * https://res.cloudinary.com/<cloud_name>/<resource_type>/<type>/<transformations>/<version>/<public_id>.<format>
 *
 * `cloud_name` - The name of your Cloudinary account, a unique public identifier for URL building and API access.
 *
 * `resource_type` - (optional) The type of asset to deliver. Default: image. Valid values: image, raw, or video
 *
 * `type` - (optional) The delivery type. Default: upload. For details on all possible types, see Delivery types.
 *
 * `transformations` (optional) One or more transformation parameters in a single component, or a set of chained transformations in multiple components. When the transformation URL is first accessed, the derived media file is created on-the-fly and delivered to your user. The derived file is also cached on the CDN and is immediately available to all subsequent users requesting the same asset.
 *
 * `version` - (optional) You can add the version to your delivery URL to bypass the cached version on the CDN and force delivery of the latest resource (in the case that a resource has been overwritten with a newer file). For simplicity, the version component is generally not included in the example URLs on this page. For details, see Asset versions.
 *
 * `public_id` - The unique identifier of the resource, including the folder structure if defined.
 *
 * `format` - (optional) The file extension of the requested delivery format for the resource. Default: The originally uploaded format or the format determined by f_auto, when used.
 */
export const modCloudinaryUrl = (inputUrl: string, opt: CloudinaryOpt): string => {
  const data = parseCloudinaryUrl(inputUrl);
  if (!data) {
    return inputUrl;
  }
  return buildCloudinaryUrl(data, opt);
};

interface CloudinaryImgData {
  cloudName: string;
  publicId: string;
  extension: string;
  version?: string;
  path?: string;
}

export const parseCloudinaryUrl = (inputUrl: string): CloudinaryImgData | undefined => {
  const cloudNameMatch = /https:\/\/res\.cloudinary.com\/(.+?)\/image\/upload\//g.exec(inputUrl);
  if (!cloudNameMatch) {
    return undefined;
  }
  const cloudName = cloudNameMatch[1];

  const parts = inputUrl.replace(cloudNameMatch[0], '').split('/');
  const data: Partial<CloudinaryImgData> = {};
  const path: string[] = [];

  for (const part of parts) {
    if (/^v\d+$/.test(part)) {
      data.version = part;
      continue;
    }
    const extMatch = /^([\w\d]+?)\.(.+)$/.exec(part);
    if (extMatch) {
      data.publicId = extMatch[1];
      data.extension = extMatch[2];
      continue;
    }
    path.push(part);
  }

  if (!data.publicId || !data.extension) {
    return undefined;
  }

  const { publicId, extension } = data;
  const pathStr = path.length ? path.join('/') : undefined;
  return { ...data, path: pathStr, cloudName, publicId, extension };
};

export const buildCloudinaryUrl = (data: CloudinaryImgData, opt?: CloudinaryOpt): string => {
  const parts: string[] = ['https://res.cloudinary.com', data.cloudName, 'image', 'upload'];
  if (opt?.transform) {
    const formatStr = cloudinaryTransformOptToStr(opt.transform);
    if (formatStr) {
      parts.push(formatStr);
    }
  }
  if (opt?.version) {
    parts.push(opt.version);
  } else if (data.version) {
    parts.push(data.version);
  }
  if (data.path) {
    parts.push(data.path);
  }
  parts.push(`${data.publicId}.${data.extension}`);
  return parts.join('/');
};

const cloudinaryTransformOptToStr = (transform: CloudinaryTransform): string | undefined => {
  if (!Object.keys(transform).length) {
    return undefined;
  }
  const parts: string[] = [];
  if (transform.width) {
    parts.push(`w_${Math.round(transform.width || 0)}`);
  }
  if (transform.height) {
    parts.push(`h_${Math.round(transform.height || 0)}`);
  }
  if (transform.crop) {
    parts.push(`c_${transform.crop}`);
  }
  return parts.join(',');
};

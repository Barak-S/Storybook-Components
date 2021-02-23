import React, { FC } from 'react';
import { CustomIconProps } from './types';

export const FacebookIcon: FC<CustomIconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '17.535'}
      height={height || '17.784'}
      viewBox="0 0 17.535 17.784"
    >
      <path
        fill={fill || '#fff'}
        d="M15.656 2.25H1.879A1.892 1.892 0 0 0 0 4.155v13.973a1.892 1.892 0 0 0 1.879 1.905h5.372v-6.045H4.785v-2.846h2.466V8.973c0-2.467 1.448-3.83 3.666-3.83a14.735 14.735 0 0 1 2.173.192v2.422h-1.224a1.413 1.413 0 0 0-1.582 1.537v1.848h2.692l-.431 2.846h-2.261v6.046h5.372a1.892 1.892 0 0 0 1.879-1.905V4.155a1.892 1.892 0 0 0-1.879-1.905z"
        transform="translate(0 -2.25)"
      />
    </svg>
  );
};

export default FacebookIcon;
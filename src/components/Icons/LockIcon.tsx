import React, { FC } from 'react';
import { CustomIconProps } from './types';

export const LockIcon: FC<CustomIconProps> = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || '14.615'} height={height || '19'} viewBox="0 0 14.615 19">
      <path
        fill={fill || '#536d6d'}
        d="M13.308 3a5.136 5.136 0 0 0-5.116 5.115v2.192H6V22h14.615V10.308h-2.192V8.115A5.136 5.136 0 0 0 13.308 3zm0 1.462a3.661 3.661 0 0 1 3.654 3.654v2.192H9.654V8.115a3.661 3.661 0 0 1 3.654-3.653zm-5.846 7.307h11.692v8.769H7.462z"
        transform="translate(-6 -3)"
      />
    </svg>
  );
};

export default LockIcon;

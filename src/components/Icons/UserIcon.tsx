import React, { FC } from 'react';
import { CustomIconProps } from './types';

export const UserIcon: FC<CustomIconProps> = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || '20'} height={height || '22'} viewBox="0 0 20 22">
      <path
        fill={fill || '#536d6d'}
        d="M16 5a7 7 0 0 0-3.906 12.813A10.027 10.027 0 0 0 6 27h2a8 8 0 0 1 16 0h2a10.027 10.027 0 0 0-6.094-9.187A7 7 0 0 0 16 5zm0 2a5 5 0 1 1-5 5 4.985 4.985 0 0 1 5-5z"
        transform="translate(-6 -5)"
      />
    </svg>
  );
};

export default UserIcon;

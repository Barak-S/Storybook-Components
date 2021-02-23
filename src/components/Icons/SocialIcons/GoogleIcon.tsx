import React, { FC } from 'react';
import { CustomIconProps } from './types';

export const GoogleIcon: FC<CustomIconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '16.948'}
      height={height || '17.276'}
      viewBox="0 0 16.948 17.276"
    >
      <path
        fill={fill || '#fff'}
        d="M20.5 10.689l-.087-.37h-8.034v3.4h4.8a4.806 4.806 0 0 1-4.7 3.614 5.623 5.623 0 0 1-3.784-1.508 5.4 5.4 0 0 1-1.612-3.813A5.572 5.572 0 0 1 8.666 8.2a5.383 5.383 0 0 1 3.759-1.47 4.9 4.9 0 0 1 3.2 1.246l2.418-2.405a8.554 8.554 0 0 0-5.695-2.193 8.8 8.8 0 0 0-6.233 2.538 8.768 8.768 0 0 0-2.459 6.1 8.68 8.68 0 0 0 2.364 6 9.017 9.017 0 0 0 6.5 2.638 8.019 8.019 0 0 0 5.84-2.455 8.623 8.623 0 0 0 2.24-5.969 9.946 9.946 0 0 0-.1-1.541z"
        transform="translate(-3.656 -3.382)"
      />
    </svg>
  );
};

export default GoogleIcon;
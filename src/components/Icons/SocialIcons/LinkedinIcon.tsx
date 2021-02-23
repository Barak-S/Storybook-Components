import React, { FC } from 'react';
import { CustomIconProps } from './types';

export const LinkedinIcon: FC<CustomIconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '17.271'}
      height={height || '17.271'}
      viewBox="0 0 17.271 17.271"
    >
      <path
        fill={fill || '#fff'}
        d="M16.038 2.25H1.23A1.239 1.239 0 0 0 0 3.5v14.776a1.239 1.239 0 0 0 1.23 1.245h14.808a1.242 1.242 0 0 0 1.234-1.245V3.5a1.242 1.242 0 0 0-1.234-1.25zM5.22 17.054H2.66V8.812h2.564v8.243zM3.94 7.686A1.484 1.484 0 1 1 5.424 6.2 1.485 1.485 0 0 1 3.94 7.686zm10.876 9.368h-2.56v-4.009c0-.956-.019-2.186-1.33-2.186-1.334 0-1.538 1.041-1.538 2.117v4.079h-2.56V8.812h2.455v1.125h.035a2.7 2.7 0 0 1 2.425-1.33c2.591 0 3.073 1.708 3.073 3.928z"
        transform="translate(0 -2.25)"
      />
    </svg>
  );
};

export default LinkedinIcon;
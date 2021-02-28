import React, { FC } from 'react';
import { CustomIconProps } from './types';

export const EventIcon: FC<CustomIconProps> = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || '45'} height={height || '45'} viewBox="0 0 54 54">
      <path
        fill={fill || '#407ec9'}
        d="M-3064.313 519.145a26.989 26.989 0 0 1 6.612-17.7 27 27 0 0 1 20.388-9.3 26.833 26.833 0 0 1 19 7.817 26.808 26.808 0 0 1 8 19.183 27.031 27.031 0 0 1-27 27 27.031 27.031 0 0 1-27-27zm8.758-15.838a24.141 24.141 0 0 0-5.916 15.838 24.185 24.185 0 0 0 24.158 24.158 24.186 24.186 0 0 0 24.158-24.158 23.987 23.987 0 0 0-7.158-17.164 24.01 24.01 0 0 0-17-6.994 24.157 24.157 0 0 0-18.242 8.32zm17.035 28.627v-11.368h-11.368v-2.842h11.368v-11.369h2.842v11.369h11.369v2.842h-11.369v11.368z"
        transform="translate(3064.313 -492.145)"
      />
    </svg>
  );
};

export default EventIcon;

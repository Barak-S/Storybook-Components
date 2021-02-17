import React, { FC } from 'react';
import { FontIconProps } from './types';

export const LockIcon: FC<FontIconProps> = ({ style }) => {
  return <i style={style} className="las la-lock"></i>;
};

export default LockIcon;

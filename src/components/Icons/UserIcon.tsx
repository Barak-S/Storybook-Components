import React, { FC } from 'react';
import { FontIconProps } from './types';

export const UserIcon: FC<FontIconProps> = ({ style }) => {
  return <i style={style} className="lar la-user"></i>;
};

export default UserIcon;

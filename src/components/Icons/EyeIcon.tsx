import React, { FC } from 'react';
import { FontIconProps } from './types';

export const EyeIcon: FC<FontIconProps> = ({ style }) => {
  return <i style={style} className="lar la-eye" />;
};

export default EyeIcon;

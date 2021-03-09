import { Icon } from '@material-ui/core';
import React, { FC } from 'react';
import { ms, StyleProps } from 'styles';

import { LineAwesomeIconType } from './types';

interface Props extends StyleProps {
  type: LineAwesomeIconType;
  color?: string;
  size?: number;
}

export const LineAwesomeIcon: FC<Props> = ({ style, type, color, size }) => {
  const containerStyle = ms(!!color && { color }, !!size && { fontSize: `${size}px` }, style);
  return <Icon style={containerStyle} className={`las la-${type}`} />;
};

export { LineAwesomeIconType } from './types';
export type LineAwesomeIconProps = Props;
export default LineAwesomeIcon;

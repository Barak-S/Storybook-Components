import { Icon } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import { LineAwesomeIconType } from './types';

interface Props extends StyleProps {
  type: LineAwesomeIconType;
}

export const LineAwesomeIcon: FC<Props> = ({ style, type }) => {
  return <Icon style={style} className={`las la-${type}`} />;
};

export { LineAwesomeIconType } from './types';
export default LineAwesomeIcon;

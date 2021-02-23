import { Icon as MaterialIcon } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  type: IconType;
}

type IconType = 'times' | 'user' | 'lock' | 'bars';

export const LineAwesomeIcon: FC<Props> = ({ style, type }) => {
  return <MaterialIcon style={style} className={`las la-${type}`} />;
};

export type LineAwesomeIconType = IconType;
export default LineAwesomeIcon;

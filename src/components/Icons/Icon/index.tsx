import { Icon as MaterialIcon } from '@material-ui/core';
import React, { FC } from 'react';
import { Style } from 'styles';

interface Props {
  className?: string;
  style?: Style;
}

export const Icon: FC<Props> = ({ className, style }) => {
  return (
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <MaterialIcon className={className} />
    </span>
  );
};

export default Icon;

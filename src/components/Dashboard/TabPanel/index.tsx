import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  value: number;
  index: number;
  className?: string;
}

export const DashboardTabPanel: FC<Props> = ({ value, index, children, style, className }) => {
  return (
    <div
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={style}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default DashboardTabPanel;

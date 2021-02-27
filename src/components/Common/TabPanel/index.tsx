import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  value: string | number;
  index: number;
}

export const TabPanel: FC<Props> = ({ value, index, children, style }) => {
  return (
    <div
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

export default TabPanel;

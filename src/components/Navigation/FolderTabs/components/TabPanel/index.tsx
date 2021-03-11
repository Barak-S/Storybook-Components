import Box from '@material-ui/core/Box';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  index: number;
  value: number;
}

export const FolderTabPanel: FC<Props> = ({ style, children, value, index }) => {
  return (
    <div
      style={style}
      role="tabpanel"
      hidden={value !== index}
      id={`folder-tabpanel-${index}`}
      aria-labelledby={`folder-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

export default FolderTabPanel;

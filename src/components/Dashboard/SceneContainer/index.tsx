import { Paper } from '@material-ui/core';
import React, { FC } from 'react';
import { ms, Style, StyleProps, Styles, colors } from 'styles';

interface Props extends StyleProps {
  className?: string;
  style?: Style;
}

export const DashboardSceneContainer: FC<Props> = ({ className, style, children }) => {
  return (
    <Paper style={ms(styles.container, style)} className={className} elevation={3}>
      {children}
    </Paper>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.tint6,
  },
};

export default DashboardSceneContainer;

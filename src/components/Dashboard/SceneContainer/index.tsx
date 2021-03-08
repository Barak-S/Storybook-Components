import { Paper } from '@material-ui/core';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import { m, Style, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  className?: string;
  style?: Style;
}

export const DashboardSceneContainer: FC<Props> = ({ className, style, children }) => {
  return (
    <Paper style={m(styles.container, style)} className={className} elevation={3}>
      <BackgroundedContainer>{children}</BackgroundedContainer>
    </Paper>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
};

export default DashboardSceneContainer;

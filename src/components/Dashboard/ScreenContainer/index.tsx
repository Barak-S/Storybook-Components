import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { mc, Style, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
  style?: Style;
}

export const DashboardScreenContainer: FC<Props> = ({ className, style, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid style={style} className={mc(classes.container, className)}>
      {children}
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        padding: '40px 45px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '70px 80px',
      },
    },
  })();

export default DashboardScreenContainer;

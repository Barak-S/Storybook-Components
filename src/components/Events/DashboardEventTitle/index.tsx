import { makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';
import { Title } from 'components/Common';

type Props = StyleProps;

export const DashboardEventTitle: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Title type="h3" className={classes.container}>
      {children}
    </Title>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      fontSize: 24,
      color: colors.marineBlue,
      textTransform: 'none',
      letterSpacing: -0.12,
      lineHeight: 1.4,
      [theme.breakpoints.up('md')]: {
        marginBottom: 18,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 30,
        marginBottom: 0,
      },
    },
  })();

export default DashboardEventTitle;

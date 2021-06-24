import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const AuthFormContainer: FC<Props> = ({ style, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Paper className={classes.container} style={style} elevation={2}>
      {children}
    </Paper>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: '45px 20px',
      borderRadius: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      maxWidth: 740,
      [theme.breakpoints.up('sm')]: {
        padding: '45px 80px',
      },
    },
  })();

export type AuthFormContainerProps = Props;
export default AuthFormContainer;

import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
}

export const FormRow: FC<Props> = ({ style, className, children }) => {
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
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 30,
      '&:last-child': {
        marginBottom: 0,
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    },
  })();

export default FormRow;

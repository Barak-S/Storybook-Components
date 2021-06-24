import { Button, Grid, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import React, { FC, MouseEvent } from 'react';
import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  icon: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick: (e: MouseEvent) => void;
}

export const DashboardUserNavButton: FC<Props> = ({ icon, style, className, disabled, onClick, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.container}>
      <Paper style={style} className={mc(classes.styledBox, className)} elevation={3}>
        <Button className={classes.button} startIcon={icon} onClick={onClick} disabled={disabled}>
          {children}
        </Button>
      </Paper>
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
      maxWidth: 130,
      height: 130,
      fontSize: 14,
      padding: 7,
      [theme.breakpoints.up('md')]: {
        padding: 0,
        fontSize: 20,
        maxWidth: '18%',
        height: 138,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 23,
        height: 167,
      },
    },
    styledBox: {
      display: 'flex',
      width: '100%',
      height: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      fontSize: 'inherit',
      backgroundColor: colors.tint6,
    },
    button: {
      backgroundColor: colors.tint6,
      color: colors.textGray,
      width: '100%',
      height: '100%',
      textTransform: 'none',
      fontSize: 'inherit',
      cursor: 'pointer',
      '&:disabled': {
        color: colors.tint1,
        opacity: 0.5,
      },
      '& .MuiButton-label': {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'normal',
        lineHeight: 1.2,
      },
      '& .MuiButton-startIcon': {
        color: colors.windowsBlue,
        margin: '0 0 13px 0',
        [theme.breakpoints.up('lg')]: {
          transform: 'scale(1.2)',
        },
      },
    },
  })();

export default DashboardUserNavButton;

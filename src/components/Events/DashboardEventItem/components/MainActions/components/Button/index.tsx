import { Button, makeStyles, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, MouseEvent } from 'react';
import { StyleProps, colors, mx } from 'styles';

interface Props extends StyleProps {
  icon: LineAwesomeIconType;
  onClick?: (e: MouseEvent) => void;
}

export const DashboardEventItemMainActionsBtn: FC<Props> = ({ icon, onClick, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Button
      onClick={onClick}
      className={classes.container}
      startIcon={<LineAwesomeIcon type={icon} />}
      endIcon={<LineAwesomeIcon type="angle-right" size={25} style={{ color: colors.coolBlue }} />}
    >
      <span className={classes.label}>{children}</span>
    </Button>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      borderRadius: 12,
      height: 52,
      background: colors.white,
      color: colors.marineBlue,
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: 0.36,
      padding: 0,
      textTransform: 'capitalize',
      overflow: 'hidden',
      marginBottom: 15,
      '&:last-child': {
        marginBottom: 0,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 18,
        height: 64,
        marginBottom: 0,
      },
      '& .MuiButton-label': {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 20,
        [theme.breakpoints.up('lg')]: {
          paddingRight: 30,
        },
      },
      '& .MuiButton-startIcon': {
        width: '100%',
        background: colors.silver,
        ...mx.centeredContent(),
        maxWidth: 52,
        height: 52,
        transition: 'all .5s ease',
        flexShrink: 0,
        marginRight: 14,
        [theme.breakpoints.up('lg')]: {
          maxWidth: 64,
          ...mx.square(64),
        },
        '& .MuiIcon-root': {
          fontSize: 24,
          [theme.breakpoints.up('lg')]: {
            fontSize: 32,
          },
        },
      },
      '& .MuiButton-endIcon': {
        transition: 'all .5s ease',
        fontSize: 24,
        [theme.breakpoints.up('lg')]: {
          fontSize: 32,
        },
      },
      '&:hover': {
        background: colors.white,
        color: colors.withAlpha(colors.marineBlue, 0.7),
        '& .MuiButton-startIcon': {
          background: colors.coolBlue,
          color: colors.white,
        },
        '& .MuiButton-endIcon': {
          transform: 'translateX(10px)',
        },
      },
    },
    label: {
      width: '100%',
      textAlign: 'left',
    },
  })();

export type DashboardEventItemMainActionsBtnProps = Props;
export default DashboardEventItemMainActionsBtn;

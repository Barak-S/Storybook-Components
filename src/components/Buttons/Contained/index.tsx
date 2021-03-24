import { Button, CircularProgress, makeStyles, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, ms, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
  disabled?: boolean;
  color?: Color;
  size?: 'medium' | 'large';
  processing?: boolean;
  startIcon?: LineAwesomeIconType;
  endIcon?: LineAwesomeIconType;
  onClick?: () => void;
}

type Color = 'inherit' | 'primary' | 'secondary' | 'default' | 'red';

export const ContainedButton: FC<Props> = ({
  className,
  style,
  disabled,
  startIcon,
  endIcon,
  color = 'primary',
  processing,
  size = 'large',
  children,
  onClick,
}) => {
  const muiTheme = useTheme();
  const classes = useStyles(muiTheme);

  return (
    <Button
      className={mc(
        classes.container,
        size === 'medium' && classes.containerMedium,
        size === 'large' && classes.containerLarge,
        className,
      )}
      style={ms(color === 'red' && { backgroundColor: colors.rustyRed }, style)}
      variant="contained"
      color={color !== 'red' ? color : undefined}
      disabled={disabled}
      startIcon={startIcon && <LineAwesomeIcon type={startIcon} />}
      endIcon={endIcon && <LineAwesomeIcon type={endIcon} />}
      onClick={onClick}
    >
      {processing ? <CircularProgress color="secondary" size={20} /> : children}
    </Button>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
      color: colors.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      letterSpacing: 2.25,
      boxShadow: `0 3px 5px 0 ${colors.withAlpha(colors.black, 0.3)}`,
      borderRadius: 6,
    },
    containerLarge: {
      minHeight: 52,
      fontSize: 15,
      lineHeight: 1.4,
      '& .MuiIcon-root': {
        transform: 'translateY(-1px)',
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
      },
    },
    containerMedium: {
      height: 34,
      maxHeight: 34,
      fontSize: 13,
      '& .MuiButton-label': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      },
      '& .MuiIcon-root': {
        fontSize: 'inherit',
        marginTop: -2,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 14,
      },
    },
  })();

export type ContainedButtonProps = Props;
export default ContainedButton;

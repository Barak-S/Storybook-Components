import { Button, CircularProgress, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, ms, StyleProps, Styles, useHover } from 'styles';
import { getTestIdProps, select, TestIdProps } from 'utils';

interface Props extends StyleProps, TestIdProps {
  className?: string;
  disabled?: boolean;
  color?: Color;
  size?: Size;
  shadow?: boolean;
  processing?: boolean;
  startIcon?: LineAwesomeIconType;
  endIcon?: LineAwesomeIconType;
  onClick?: () => void;
}

type Color = 'inherit' | 'primary' | 'secondary' | 'default' | 'red';
type Size = 'small' | 'medium' | 'large';

export const ContainedButton: FC<Props> = ({
  className,
  style,
  disabled,
  startIcon,
  endIcon,
  shadow = true,
  color = 'primary',
  processing,
  size = 'large',
  testID,
  children,
  onClick,
}) => {
  const mainColor = select(color, {
    default: colors.primaryGradient,
    inherit: colors.primaryGradient,
    primary: colors.primaryGradient,
    secondary: colors.secondary,
    red: colors.alert,
  });
  const hoverColor = !disabled
    ? select(color, {
        default: colors.withAlpha(colors.primaryGradient, 0.7),
        inherit: colors.withAlpha(colors.primaryGradient, 0.7),
        primary: colors.withAlpha(colors.primaryGradient, 0.7),
        secondary: colors.withAlpha(colors.secondary, 0.7),
        red: colors.withAlpha(colors.alert, 0.7),
      })
    : undefined;
  const fontColor = disabled ? colors.tint2 : color === 'secondary' ? colors.textGray : colors.white;
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = getStyles(mainColor, hoverColor, fontColor, disabled, shadow, isMobile, processing);
  const { hover, hoverProps } = useHover();
  return (
    <Button
      className={mc(
        size === 'small' && classes.containerSmall,
        size === 'medium' && classes.containerMedium,
        size === 'large' && classes.containerLarge,
        className,
      )}
      style={ms(styles.container, hover && styles.hover, style)}
      variant="contained"
      color={color !== 'red' ? color : undefined}
      disabled={disabled}
      startIcon={startIcon && <LineAwesomeIcon type={startIcon} />}
      endIcon={endIcon && <LineAwesomeIcon type={endIcon} />}
      onClick={onClick}
      {...getTestIdProps(testID, 'btn')}
      {...hoverProps}
    >
      {processing ? <CircularProgress color="secondary" size={20} /> : children}
    </Button>
  );
};

const getStyles = (
  mainColor: string | undefined,
  hoverColor: string | undefined,
  fontColor: string,
  disabled: boolean | undefined,
  shadow: boolean,
  isMobile: boolean,
  processing: boolean | undefined,
): Styles => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: shadow ? `0 3px 5px 0 ${colors.withAlpha(colors.black, 0.3)}` : undefined,
    borderRadius: 12,
    background: disabled ? colors.tint4 : processing ? colors.withAlpha(mainColor, 0.7) : mainColor,
    color: fontColor,
  },
  hover: {
    transition: 'none',
    background: !isMobile ? hoverColor : undefined,
  },
});

const useStyles = makeStyles({
  containerLarge: {
    minHeight: 52,
    fontSize: 15,
    lineHeight: 1.4,
    '& .MuiIcon-root': {
      transform: 'translateY(-1px)',
    },
  },
  containerMedium: {
    height: 34,
    fontSize: 13,
    '& .MuiButton-label': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    '& .MuiIcon-root': {
      fontSize: 'inherit',
    },
  },
  containerSmall: {
    height: 34,
    fontSize: 11,
    fontWeight: 400,
    '& .MuiButton-label': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    '& .MuiIcon-root': {
      fontSize: 'inherit',
    },
  },
});

export type ContainedButtonProps = Props;
export default ContainedButton;

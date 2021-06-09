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
    default: undefined,
    inherit: undefined,
    primary: undefined,
    secondary: undefined,
    red: colors.rustyRed,
  });
  const hoverColor = !disabled
    ? select(color, {
        default: colors.coolBlueTwo,
        inherit: colors.coolBlueTwo,
        primary: colors.coolBlueTwo,
        secondary: undefined,
        red: colors.withAlpha(colors.rustyRed, 0.7),
      })
    : undefined;
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = getStyles(mainColor, hoverColor, shadow, isMobile);
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
  shadow: boolean,
  isMobile: boolean,
): Styles => ({
  container: {
    width: '100%',
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: shadow ? `0 3px 5px 0 ${colors.withAlpha(colors.black, 0.3)}` : undefined,
    borderRadius: 6,
    backgroundColor: mainColor,
  },
  hover: {
    backgroundColor: !isMobile ? hoverColor : undefined,
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

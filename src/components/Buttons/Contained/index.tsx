import { Button, CircularProgress, makeStyles, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
  disabled?: boolean;
  theme?: 'small';
  processing?: boolean;
  startIcon?: LineAwesomeIconType;
  endIcon?: LineAwesomeIconType;
  onClick?: () => void;
}

export const ContainedButton: FC<Props> = ({
  className,
  style,
  disabled,
  startIcon,
  endIcon,
  processing,
  theme,
  children,
  onClick,
}) => {
  const muiTheme = useTheme();
  const classes = useStyles(muiTheme);

  return (
    <Button
      className={mc(theme === 'small' && classes.smallThemeContainer, className)}
      style={style}
      variant="contained"
      color="primary"
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
    smallThemeContainer: {
      width: '100%',
      height: 34,
      maxHeight: 34,
      color: colors.white,
      fontSize: 13,
      letterSpacing: 2.25,
      boxShadow: `0 3px 5px 0 ${colors.withAlpha(colors.black, 0.3)}`,
      borderRadius: 6,
      padding: 0,
      '&:hover': {
        opacity: 0.8,
      },
      '& .MuiButton-label': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingRight: 10,
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

import { Button, CircularProgress, makeStyles, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, ms, mc, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  className?: string;
  disabled?: boolean;
  type?: 'plus' | 'done';
  theme?: 'red';
  icon?: LineAwesomeIconType;
  processing?: boolean;
  onClick?: () => void;
}

export const ContainedButton: FC<Props> = ({ className, style, disabled, type, processing, theme, icon, children, onClick }) => {
  const muiTheme = useTheme();
  const classes = useStyles(muiTheme);

  return (
    <Button
      className={mc(className, theme === 'red' && classes.redThemeContainer)}
      style={ms(styles.container, style)}
      variant="contained"
      color="primary"
      disabled={disabled}
      startIcon={type === 'done' && <LineAwesomeIcon type="check-circle" />}
      endIcon={type === 'plus' && <LineAwesomeIcon type="plus-circle" />}
      onClick={onClick}
    >
      {processing ? <CircularProgress color="secondary" size={20} /> : children}
      {icon && <LineAwesomeIcon type={icon} size={16} />}
    </Button>
  );
};

const styles: Styles = {
  container: {
    height: 52,
    width: '100%',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    redThemeContainer: {
      color: colors.white,
      fontSize: 13,
      letterSpacing: 2.25,
      height: 34,
      boxShadow: `0 3px 5px 0 ${colors.withAlpha(colors.black, 0.3)}`,
      background: colors.rustyRed,
      maxHeight: 34,
      borderRadius: 6,
      padding: 0,
      '&:hover': {
        background: colors.withAlpha(colors.rustyRed, 0.8),
      },
      '& .MuiIcon-root': {
        marginLeft: 5,
        transform: 'translateY(-1.5px)',
      },
      '& .MuiButton-label': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 14,
      },
    },
  })();

export type ContainedButtonProps = Props;
export default ContainedButton;

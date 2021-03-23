import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  label?: number;
  active: boolean;
  completed: boolean;
}

export const StepperIcon: FC<Props> = ({ style, label, active, completed }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={mc(classes.container, active && classes.active, completed && classes.completed)} style={style}>
      {!label && completed ? <LineAwesomeIcon size={16} type="check" /> : label}
    </div>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      background: colors.silver,
      color: 'inherit',
      fontSize: 0,
      fontWeight: 'bold',
      ...mx.square(13),
      ...mx.border(3, 'solid', 'currentColor'),
      [theme.breakpoints.up('md')]: {
        fontSize: 16,
        background: colors.white,
        ...mx.square(40),
      },
    },
    active: {
      fontSize: 16,
      background: colors.white,
      ...mx.square(40),
    },
    completed: {
      fontSize: 16,
      background: colors.warmPurple,
      color: colors.white,
      ...mx.square(25),
      ...mx.border(3, 'solid', colors.warmPurple),
      [theme.breakpoints.up('md')]: {
        ...mx.square(40),
      },
    },
  })();

export default StepperIcon;

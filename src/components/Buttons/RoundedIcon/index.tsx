import { IconButton, makeStyles } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  icon: LineAwesomeIconType;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const RoundedIconButton: FC<Props> = ({ icon, className, style, size = 24, onClick, disabled = false }) => {
  const classes = useStyles();
  return (
    <IconButton style={style} className={mc(classes.container, className)} onClick={onClick} disabled={disabled}>
      <LineAwesomeIcon type={icon} size={size} />
    </IconButton>
  );
};

const useStyles = makeStyles({
  container: {
    ...mx.square(45),
    background: colors.paleGrey,
    borderRadius: '50%',
    boxShadow: `0 0 20px ${colors.withAlpha(colors.black, 0.3)}`,
  },
});

export type RoundedIconButtonProps = Props;
export default RoundedIconButton;

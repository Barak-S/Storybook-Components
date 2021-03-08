import { Button, makeStyles } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  iconType: LineAwesomeIconType;
  onClick?: () => void;
  className?: string;
}

export const SmallButton: FC<Props> = ({ iconType, onClick, className, style, children }) => {
  const classes = useStyles();

  return (
    <Button style={style} className={mc(classes.container, className)} onClick={onClick}>
      {children}
      {iconType && <LineAwesomeIcon type={iconType} size={16} />}
    </Button>
  );
};

const useStyles = makeStyles({
  container: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 2.25,
    height: 34,
    boxShadow: `0 3px 5px 0 ${colors.withAlpha(colors.black, 0.3)}`,
    '&:hover': {
      background: colors.withAlpha(colors.rustyRed, 0.8),
    },
    '& .MuiIcon-root': {
      marginLeft: 5,
    },
  },
});

export default SmallButton;

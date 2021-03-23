import { makeStyles } from '@material-ui/core';
import React, { FC, MouseEvent } from 'react';
import { colors, mc, ms, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
  size?: number;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const TextButton: FC<Props> = ({ className, style, children, href, disabled, size = 14, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      return;
    }
    if (!href && onClick) {
      e.preventDefault();
      onClick();
    }
  };
  const classes = useStyles();

  return (
    <a
      className={mc(classes.container, disabled && classes.disabled, className)}
      style={ms({ fontSize: `${size}px` }, style)}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.coolBlueTwo,
    boxSizing: 'border-box',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
  disabled: {
    color: colors.greyish,
  },
}));

export type TextButtonProps = Props;
export default TextButton;

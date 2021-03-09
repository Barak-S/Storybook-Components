import { makeStyles } from '@material-ui/core';
import React, { FC, MouseEvent } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export const DashboardAppBarTextBtn: FC<Props> = ({ style, children, active, href, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href && onClick) {
      e.preventDefault();
      onClick();
    }
  };
  const classes = useStyles();

  return (
    <a
      className={classes.container}
      style={ms([styles.container, style, active && styles.active])}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.coolBlueTwo,
    padding: '0 16px',
    boxSizing: 'border-box',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    fontSize: 'inherit',
    transition: 'all .3s ease-in-out',
  },
  active: {
    backgroundColor: colors.white,
    color: colors.marineBlue,
  },
};

const useStyles = makeStyles(() => ({
  container: {
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

export type DashboardAppBarTextBtnProps = Props;
export default DashboardAppBarTextBtn;

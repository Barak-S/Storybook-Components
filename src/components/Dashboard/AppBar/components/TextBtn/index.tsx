import { makeStyles } from '@material-ui/core';
import React, { FC, MouseEvent } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { NavLink } from 'react-router-dom';

interface Props extends StyleProps {
  href: string;
  onClick?: () => void;
}

export const DashboardAppBarTextBtn: FC<Props> = ({ style, children, href, onClick }) => {
  const classes = useStyles();

  return (
    <NavLink
      style={ms([styles.container, style])}
      className={classes.container}
      activeStyle={{ color: colors.IRISyellow }}
      to={href}
      onClick={onClick && onClick}
    >
      {children}
    </NavLink>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 16px',
    boxSizing: 'border-box',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    fontSize: 'inherit',
    transition: 'all .2s ease-in-out',
  },
};

const useStyles = makeStyles(() => ({
  container: {
    color: colors.tint4,
    '&:hover': {
      color: colors.IRISyellow,
    },
  },
}));

export type DashboardAppBarTextBtnProps = Props;
export default DashboardAppBarTextBtn;

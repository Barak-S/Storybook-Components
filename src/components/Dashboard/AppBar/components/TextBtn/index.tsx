import { makeStyles } from '@material-ui/core';
import React, { FC, MouseEvent } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { NavLink } from 'react-router-dom';

interface Props extends StyleProps {
  href: string;
}

export const DashboardAppBarTextBtn: FC<Props> = ({ style, children, href }) => {
  const classes = useStyles();

  return (
    <NavLink
      style={ms([styles.container, style])}
      className={classes.container}
      activeStyle={{ color: colors.marineBlue }}
      to={href}
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
    color: colors.coolBlueTwo,
    padding: '0 16px',
    boxSizing: 'border-box',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    fontSize: 'inherit',
    transition: 'all .3s ease-in-out',
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

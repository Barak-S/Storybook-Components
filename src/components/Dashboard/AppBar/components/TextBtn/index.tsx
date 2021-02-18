import { makeStyles } from '@material-ui/core';
import { Text } from 'components/Common';
import React, { FC, MouseEvent } from 'react';
import { colors, m, StyleProps, Styles } from 'styles';

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
    <a className={classes.container} style={m([style, active && styles.active])} href={href} onClick={handleClick}>
      <Text className={classes.text}>{children}</Text>
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
    padding: 16,
    boxSizing: 'border-box',
    textDecoration: 'none',
    opacity: 1,
    transition: 'all .3s ease-in-out',
    '&:hover': {
      opacity: 0.7,
    },
  },
  text: {
    fontSize: 18,
  },
}));

const styles: Styles = {
  active: {
    backgroundColor: colors.white,
    color: colors.marineBlue,
  },
};

export type DashboardAppBarTextBtnProps = Props;
export default DashboardAppBarTextBtn;

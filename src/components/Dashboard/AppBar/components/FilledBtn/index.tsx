import { makeStyles } from '@material-ui/core';
import { Text } from 'components/Common';
import React, { FC, MouseEvent } from 'react';
import { colors, m, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export const DashboardAppBarFilledBtn: FC<Props> = ({ style, children, active, href, onClick }) => {
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
    backgroundColor: colors.whiteTwo,
    textDecoration: 'none',
    color: colors.brownGrey,
    fontWeight: 500,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: colors.white,
      color: colors.marineBlue,
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

export type DashboardAppBarFilledBtnProps = Props;
export default DashboardAppBarFilledBtn;

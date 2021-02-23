import { makeStyles, Theme } from '@material-ui/core';
import { colors, mx, Styles } from 'styles';

const dashboardHeight = 73;

export const styles: Styles = {
  container: {
    height: dashboardHeight,
    backgroundColor: colors.whiteTwo,
    ...mx.borderBottom(1, 'solid', colors.lightBlueGrey),
  },
  logoWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: dashboardHeight,
    width: dashboardHeight,
    ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
  },
  logo: {
    width: 50,
    height: 50,
  },
  mainItem: {
    height: dashboardHeight,
    width: 201,
    ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
    ...mx.borderBottom(1, 'solid', colors.lightBlueGrey),
  },
  rightSection: {
    paddingLeft: 16,
    height: dashboardHeight,
  },
  thumbWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: dashboardHeight,
    textDecoration: 'none',
    color: 'inherit',
  },
  thumb: {
    width: 55,
    height: 55,
    marginRight: 5,
  },
  thumbIcon: {
    fontSize: '11px',
  },
  mobileBtn: {
    transform: 'translateX(10px)',
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    menuWrap: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      minHeight: '100vh',
      paddingRight: 10,
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'space-between',
        paddingRight: 36,
      },
    },
    navbarWrap: {
      position: 'fixed',
      left: 0,
      top: dashboardHeight,
      zIndex: 10,
    },
  })();

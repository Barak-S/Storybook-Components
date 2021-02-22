import { makeStyles, Theme } from '@material-ui/core';
import { colors, mx, Styles } from 'styles';

const dashboardHeight = 73;

export const styles: Styles = {
  container: {
    height: dashboardHeight,
    backgroundColor: colors.whiteTwo,
    paddingRight: 36,
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
  splitter: {
    width: 1,
    height: 20,
    ...mx.borderRight(1, 'solid', colors.coolGrey),
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
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'space-between',
      },
    },
    mainSection: {
      width: '100%',
      display: 'flex',
      position: 'fixed',
      flexDirection: 'column',
      top: dashboardHeight,
      left: 0,
      maxWidth: 201,
      height: '100vh',
      zIndex: 10,
      background: colors.white,
      ...mx.borderRight(1, 'solid', colors.lightBlueGrey),

      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        maxWidth: 'initial',
        top: 'initial',
        left: 'initial',
        flexDirection: 'row',
        height: dashboardHeight,
        fontSize: 18,
        background: 'none',
        borderRight: 'none',
      },
    },
    supportLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('lg')]: {
        height: dashboardHeight,
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        fontSize: 18,
      },
    },
  })();

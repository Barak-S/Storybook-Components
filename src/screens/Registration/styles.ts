import { makeStyles, Theme } from '@material-ui/core';
import { colors, Styles, sizes } from 'styles';

export const styles: Styles = {
  container: {
    paddingTop: 58,
    justifyContent: 'space-between',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: sizes.h2,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: sizes.h6,
    marginBottom: 35,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    logoWrap: {
      position: 'fixed',
      top: theme.spacing(6),
      left: theme.spacing(6),
      // '@media screen and (min-width: 1366px)': {
      //   width: '100%',
      //   paddingLeft: 72,
      //   justifyContent: 'flex-start',
      // },
    },
    logo: {
      width: 112,
      height: 63,
      // [theme.breakpoints.up('lg')]: {
      //   width: 224,
      //   height: 126,
      // },
    },
  })();

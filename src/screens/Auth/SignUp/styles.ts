import { makeStyles, Theme } from '@material-ui/core';
import { colors, Styles, sizes } from 'styles';

export const styles: Styles = {
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
  password: {
    marginBottom: 30,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    logo: {
      '@media screen and (min-width: 1366px)': {
        position: 'absolute',
        left: 72,
        top: 58,
      },
    },
    copyright: {
      width: '100%',
      padding: 20,
      textAlign: 'center',

      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
  })();

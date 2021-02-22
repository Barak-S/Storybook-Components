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
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        left: 72,
        top: 58,
      },
    },
    copyright: {
      padding: 20,

      [theme.breakpoints.up('lg')]: {
        position: 'absolute',
        left: 82,
        bottom: 0,
        padding: 0,
      },
    },
  })();

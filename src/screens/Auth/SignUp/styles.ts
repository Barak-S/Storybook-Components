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
  password: {
    marginBottom: 30,
  },
  splitter: {
    margin: '0 10px',
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    logo: {
      display: 'flex',
      justifyContent: 'center',
      '@media screen and (min-width: 1366px)': {
        width: '100%',
        paddingLeft: 72,
        justifyContent: 'flex-start',
      },
    },
    copyright: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: 20,
      textAlign: 'center',

      '& span': {
        marginBottom: 20,
      },
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',

        '& span': {
          marginBottom: 0,
        },
      },
    },
  })();

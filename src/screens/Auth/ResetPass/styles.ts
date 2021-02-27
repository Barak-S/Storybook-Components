import { makeStyles, Theme } from '@material-ui/core';
import { Styles } from 'styles';

export const styles: Styles = {
  authScreen: {
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  authTitle: {
    marginBottom: 10,
  },
  authSubtitle: {
    marginBottom: 20,
  },
  passHint: {
    paddingTop: 0,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    logo: {
      marginBottom: 20,
      [theme.breakpoints.up('lg')]: {
        marginBottom: 50,
      },
    },
  })();

import { makeStyles, Theme } from '@material-ui/core';
import { Styles } from 'styles';

export const styles: Styles = {
  container: {
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
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

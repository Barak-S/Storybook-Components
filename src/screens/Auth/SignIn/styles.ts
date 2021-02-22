import { makeStyles, Theme } from '@material-ui/core';
import { colors, Styles } from 'styles';

export const styles: Styles = {
  headerText: {
    color: colors.coolGrey,
    marginRight: 17,
  },
  loginLink: {
    textTransform: 'capitalize',
    marginRight: 38,
    position: 'relative',
  },
  signupLink: {
    color: colors.brownishGrey,
  },
  logo: {
    width: 224,
    height: 126,
  },
  formTitle: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 500,
    color: colors.marineBlue,
  },
  resetPass: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
  },
  inputFields: {
    marginBottom: 10,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    textLink: {
      display: 'block',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: -19,
        display: 'block',
        height: 20,
        width: 0,
        borderRight: `1px solid ${colors.coolGrey}`,
      },
    },
    fields: {
      width: '100%',
      maxWidth: '100%',
      marginBottom: 29,

      [theme.breakpoints.up('sm')]: {
        maxWidth: 423,
      },
    },
    forgot: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-end',
      },
    },
    header: {
      position: 'relative',
      top: 0,
      padding: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,

      [theme.breakpoints.up('sm')]: {
        position: 'absolute!important',
        justifyContent: 'flex-end',
        padding: '35px 80px',
        fontSize: 18,
      },
    },
  })();

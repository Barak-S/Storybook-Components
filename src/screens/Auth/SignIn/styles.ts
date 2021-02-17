import { makeStyles } from '@material-ui/core';
import { colors, Styles } from 'styles';

export const styles: Styles = {
  header: {
    position: 'absolute',
    top: 0,
    padding: '35px 80px',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 18,
  },
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
  fields: {
    width: '100%',
    maxWidth: 423,
  },
  inputFields: {
    marginBottom: 10,
  },
  errWrap: {
    height: 40,
  },
  err: {
    color: colors.error,
    fontSize: 12,
    textAlign: 'center',
  },
};

export const useStyles = makeStyles({
  root: {
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
});

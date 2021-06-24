import { makeStyles, Theme } from '@material-ui/core';
import { colors, Styles, sizes } from 'styles';

export const styles: Styles = {
  title: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: sizes.h2,
    paddingBottom: 37,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: sizes.h6,
    marginBottom: 35,
    paddingTop: 14.5,
    width: '100%',
    display: 'block',
    borderTop: `1px solid ${colors.veryLightPinkTwo}`,
  },
  password: {
    marginBottom: 30,
  },
  splitter: {
    margin: '0 10px',
  },
  signupContainer: {
    width: '100%',
    maxWidth: 1460,
  },
  authForm: {
    padding: 0,
    overflow: 'hidden',
    boxShadow: '0px 0px 30px #4445454D',
    maxWidth: 1460,
  },
  sectionWrapper: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
  },
  irisImageBanner: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    transform: 'scale(1.2)',
  },
  signupForm: {
    maxWidth: 572.5,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      paddingTop: 96,
      justifyContent: 'space-between',
      minHeight: '100vh',
      [theme.breakpoints.down('md')]: {
        paddingTop: 65,
      },
    },
    logoWrap: {
      display: 'flex',
      justifyContent: 'center',
      '@media screen and (min-width: 1366px)': {
        width: '100%',
        paddingLeft: 72,
        justifyContent: 'flex-start',
      },
    },
    logo: {
      width: 112,
      height: 63,
      [theme.breakpoints.up('lg')]: {
        width: 224,
        height: 126,
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
    imgContainer: {
      maxWidth: 592,
      maxHeight: 740,
      width: '100%',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    formWrapper: {
      maxWidth: 868,
      maxHeight: 740,
      padding: '0 22.5px',
      paddingTop: 53,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '100%',
      },
    },
  })();

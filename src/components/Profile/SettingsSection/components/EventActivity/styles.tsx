import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      marginBottom: '34px',
      width: '-webkit-fill-available',
    },
    headerSection: {
      marginBottom: '22px',
    },
    title: {
      letterSpacing: '0px',
      color: colors.marine,
      display: 'block',
      paddingTop: 7,
      paddingBottom: 6,
      fontWeight: 500,
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    blockInf: {
      display: 'flex',
      marginBottom: '50px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginBottom: '10px',
      },
      '&>div': {
        width: '-webkit-fill-available',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'row-reverse',
        },
      },
    },
    blockInf2: {
      display: 'flex',
      marginBottom: '110px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginBottom: '10px',
      },
      '&>div': {
        width: '-webkit-fill-available',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'row-reverse',
        },
      },
    },
    switch: {
      maxWidth: '296px',
      minWidth: 'fit-content;',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        margin: 0,
      },
    },
    root: {
      '& .MuiIconButton-root': {
        color: colors.marineBlue,
      },
    },
  }))();

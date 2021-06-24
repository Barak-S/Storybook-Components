import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      width: '-webkit-fill-available',
    },
    headerSection: {
      marginBottom: 15,
    },
    title: {
      letterSpacing: '0px',
      color: colors.IRISteal,
      display: 'block',
      paddingTop: 7,
      paddingBottom: 6,
      fontWeight: 500,
    },
    subHeader: {
      letterSpacing: '0px',
      color: colors.IRISteal,
      display: 'block',
      paddingTop: 12,
      paddingBottom: 6,
      fontWeight: 500,
      fontSize: 14,
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    formRow: {
      maxWidth: 580,
      marginBottom: 27,
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column !important',
        marginBottom: 0,
      },
    },
    socBlock: {
      maxWidth: 616,
      display: 'flex',
      marginTop: '21px',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    inputFull: {
      maxWidth: 580,
      marginBottom: 27,
    },
    input: {
      maxWidth: 276,
      marginBottom: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginBottom: 27,
      },
    },
    input2: {
      maxWidth: 276,
      marginBottom: 'auto',
      marginRight: 10,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginBottom: 27,
        marginRight: 0,
      },
    },
    inputText: {
      maxWidth: 386,
      marginLeft: 34,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: 15,
        marginBottom: 5,
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
    },
    formSelect: {
      maxWidth: 266,
      marginRight: 10,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginBottom: 27,
        marginRight: 0,
      },
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
    socSelect: {
      maxWidth: 195,
      width: '100%',
    },
    selectAdornment: {
      '&.MuiButtonBase-root': {
        color: colors.brownishGrey,
        background: colors.veryLightPinkThree,
      },
    },
    selectRoot: {
      fontSize: 16,
      textTransform: 'capitalize',
    },
    contact: {
      display: 'flex',
      marginBottom: '37px',
    },
    contactSection: {
      maxWidth: 580,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    uploadSection: {
      paddingLeft: 55,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
      },
    },
    uploadImg: {
      maxHeight: 154,
      maxWidth: 631,
      marginTop: 18,
      paddingRight: 25,
    },
  }))();

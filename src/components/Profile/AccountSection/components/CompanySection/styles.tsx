import { Theme, makeStyles } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    contact: {
      display: 'flex',
      marginBottom: '37px',
    },
    headerSection: {
      marginBottom: '56px',
    },
    title: {
      letterSpacing: '0px',
      color: colors.coolBlue,
      display: 'block',
    },
    subtitle: {
      paddingTop: 6,
      paddingBottom: 20,
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    inputFull: {
      maxWidth: 526,
      marginBottom: 30,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    contactSection: {},
    inputInf: {},
    selectorInf: {
      marginBottom: '47px',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        width: 'inherit',
      },
    },
    uploadImg: {
      maxHeight: 156,
      maxWidth: 458,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    companySelect: {
      maxWidth: 266,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
  }))();

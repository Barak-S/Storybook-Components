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
    contactSection: {
      maxWidth: 526,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    inputInf: {
      marginRight: '40px',
      [theme.breakpoints.down('md')]: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '0px',
        marginLeft: '0px',
        margin: '0px',
      },
    },
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

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
      color: colors.marine,
      display: 'block',
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    blockInf: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    inputInf: {
      maxWidth: '526px',
      marginRight: '40px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'inherit',
        margin: '0',
      },
    },
    selectorInf: {
      marginBottom: '47px',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        width: 'inherit',
      },
    },
  }))();

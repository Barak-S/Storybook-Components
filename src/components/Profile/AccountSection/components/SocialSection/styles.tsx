import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    socSection: {
      marginBottom: '37px',
    },
    headerSection: {
      paddingBottom: '37px',
    },
    title: {
      letterSpacing: '0px',
      color: colors.marine,
      display: 'block',
      paddingBottom: 9,
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    blockInf: {
      paddingBottom: '52px',
      [theme.breakpoints.down('sm')]: {
        marginRight: '0',
      },
    },
    socBlock: {
      display: 'flex',
      alignItems: 'top',
      marginTop: '21px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    inputText: {
      maxWidth: 386,
      margin: '0 35px',
      [theme.breakpoints.down('sm')]: {
        margin: '15px 0',
        maxWidth: '100%',
      },
    },
    socSelect:{
      maxWidth: 198,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },  
    }
  }))();

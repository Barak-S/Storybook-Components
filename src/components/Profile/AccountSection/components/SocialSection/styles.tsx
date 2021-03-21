import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    socSection: {
      width: '-webkit-fill-available',
      marginBottom: '37px',
    },
    headerSection: {
      paddingBottom: '37px',
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
      margin: '0 35px',
      [theme.breakpoints.down('sm')]: {
        margin: '15px 0',
      },
    },
  }))();

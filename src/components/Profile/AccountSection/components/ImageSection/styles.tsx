import { Theme, makeStyles } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    avaBlock: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '10%',
      margin: '0px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '30px',
        marginRight: 0,
        height: '100%'
      },
    },
    avatar: {
      marginBottom: '26px',
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
      paddingTop: 10,
      paddingBottom: 12,
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    imgBlock:{
      [theme.breakpoints.down('sm')]: {
        marginTop: '35px',
      },
    }
  }))();

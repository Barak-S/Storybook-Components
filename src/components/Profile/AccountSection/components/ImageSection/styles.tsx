import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    avaBlock: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 212,
      marginTop: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginTop: 12,
      },
    },
    avatar: {
      marginBottom: '26px',
    },
    imgBlock: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '35px',
      },
    },
  }))();

import { Theme, makeStyles } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    contact: {
      marginBottom: '37px',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },

    wrapBtn: {
      display: 'flex',
      justifyContent: 'center',
    },
    btn: {
      background: colors.coolBlue,
      borderRadius: '6px',
      width: '166px!important',
      height: '52px',
    },
  }))();

import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      marginBottom: '37px',
      width: '-webkit-fill-available',
    },
    headerSection: {
      marginBottom: '24px',
    },
    title: {
      letterSpacing: '0px',
      color: colors.marine,
      display: 'block',
      paddingBottom: 10,
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
    switch: {
      maxWidth: 'fit-content;',
      marginRight: '60px',
    },
  }))();

import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles(() => ({
    ReaderSection: {
      marginBottom: '37px',
    },
    headerSection: {
      marginBottom: '24px',
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
      marginBottom: '50px',
      '&>div': {
        width: '-webkit-fill-available',
      },
    },
  }))();

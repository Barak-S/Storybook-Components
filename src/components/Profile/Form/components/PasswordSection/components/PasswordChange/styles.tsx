import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles(() => ({
    passSection: {
      marginBottom: '37px',
      width: '-webkit-fill-available',
    },
    headerSection: {
      marginBottom: '50px',
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
      marginBottom: '50px',
      maxWidth: '424px',
    },
    oldPass: {
      marginBottom: '50px',
    },
    newPass: {
      marginBottom: '30px',
    },
  }))();

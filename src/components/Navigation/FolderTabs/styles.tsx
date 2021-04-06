import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles(() => ({
    container: {
      backgroundColor: colors.white,
      boxShadow: 'none',
    },
    tabs: {
      backgroundColor: colors.white,
    },
    blockContent: {
      padding: '32px',
    },
    tab: {
      width: `344px`,
      height: `44px`,
      padding: `10px 65px`,
      margin: `2px 1px 0 1px`,
      color: colors.veryLightPinkFour,
      borderRadius: `12px 12px 0 0`,
      backgroundColor: colors.paleGrey,
    },
    content: {
      display: 'block',
      width: '100%',
      boxShadow: `0 0 10px 0 ${colors.silver}`,
    },
  }))();

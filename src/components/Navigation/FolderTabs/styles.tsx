import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles(() => ({
    container: {
      backgroundColor: colors.white,
      boxShadow: 'none',
    },
    tabs: {
      backgroundColor: colors.whiteTwo,
    },
    blockContent: {
      padding: '32px',
    },
    tab: {
      minWidth: 'fit-content',
      width: '100%',
      height: `44px`,
      color: colors.greyish,
      borderRadius: `12px 12px 0 0`,
      backgroundColor: colors.paleGrey,
      opacity: 1,
    },
    content: {
      display: 'block',
      width: '100%',
      boxShadow: `0 0 10px 0 ${colors.silver}`,
      backgroundColor: colors.white,
    },
  }))();

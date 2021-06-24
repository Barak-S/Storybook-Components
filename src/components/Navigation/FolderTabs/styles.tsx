import { makeStyles, Theme } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = (theme: Theme) =>
  makeStyles({
    root: {
      boxShadow: `inset 0px -12px 8px -10px #CCC !important`,
    },
    container: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '& [class*="-fixed"]': {
        overflow: 'visible !important',
      },
    },
    tabs: {
      backgroundColor: 'transparent',
    },
    blockContent: {
      padding: '32px',
    },
    tab: {
      fontSize: 20,
      margin: '0 2px',
      padding: '0px 3px',
      minWidth: 'fit-content',
      width: 'calc(20% - 4px)',
      height: `44px`,
      color: colors.greyish,
      borderRadius: `12px 12px 0 0`,
      backgroundColor: colors.paleGrey,
      opacity: 1,
      boxShadow: `inset 0px -11px 8px -10px #CCC`,
      '&:first-child': {
        marginLeft: 0,
        width: 'calc(20% - 2px)',
      },
      '&:last-child': {
        marginRight: 0,
        width: 'calc(20% - 2px)',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 17,
      },
    },
    content: {
      display: 'block',
      width: '100%',
      boxShadow: `0 -1px 5px 1px ${colors.silver}`,
      backgroundColor: colors.white,
    },
  })();

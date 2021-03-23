import { makeStyles } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

export const StyledToggle = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }),
)(Switch);

export const useStyles = () =>
  makeStyles(() => ({
    container: {
      height: '52px',
      alignItems:'center',
    },
    swicher: {
      padding: '2px',
      width: '34px',
      height: '20px',
      '& > span:first-child': {
        width: '22px',
        height: '20px',
      },
    },
    title: {
      marginLeft: '8px',
      font: 'normal normal normal 16px/23px Rubik',
      letterSpacing: '0px',
      color: 'colors.coolGrey',
    },
    inputText: {
      maxWidth: '536px',
    },
  }))();

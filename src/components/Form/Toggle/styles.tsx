import { makeStyles } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { colors } from 'styles';

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
      '&$checked': {
        transform: 'translateX(14.5px)',
        '& + $track': {
          opacity: 1,
          border: 'none',
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none',
      color: colors.white,
      border: `1px solid ${colors.tint1}`,
      transform: 'translateX(-1.5px)',
    },
    track: {
      border: `1px solid ${colors.tint1}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {
      '& $thumb': {
        border: 'none',
      },
    },
  }),
)(Switch);

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      height: '52px',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row-reverse !important',
        justifyContent: 'space-between',
      },
      '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
        background: colors.steal,
      },
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
      flexWrap: 'nowrap',
      marginLeft: '8px',
      font: 'normal normal normal 16px/23px Rubik',
      letterSpacing: '0px',
      color: colors.textGray,
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
      },
    },
    inputText: {
      maxWidth: '536px',
    },
  }))();

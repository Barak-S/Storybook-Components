import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      display: 'contents',
    },
    input: {
      width: '100%',
      transform: 'translateX(-2px)',
      border: colors.brownishGrey,
      boxShadow: 'none',
      '& > div': {
        width: '-webkit-fill-available',
        borderRadius: '12px!important',
        backgroundColor: colors.paleGrey,
        [theme.breakpoints.down('sm')]: {
          width: '-webkit-fill-available',
          height: 5,
        },
        '& > div': {
          [theme.breakpoints.down('sm')]: {
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
      '& > div:last-child': {
        position: 'inherit',
      },
      [theme.breakpoints.down('sm')]: {
        width: '-webkit-fill-available',
        height: 52,
      },
    },
    title: {
      display: 'flex',
    },
    error: {
      border: colors.error,
    },
  }))();

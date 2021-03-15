import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    input: {
      width: `259px`,
      transform: 'translateX(-2px)',
      border: colors.brownishGrey,
      boxShadow: 'none',
      '& > div': {
        width: '-webkit-fill-available',
        borderRadius: '12px!important',
        backgroundColor: colors.paleGrey,
        [theme.breakpoints.down('sm')]: {
          width: '-webkit-fill-available',
          height: '52px',
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
        height: '52px',
      },
    },
    title: {
      display: 'flex',
    },
    error: {
      border: 'red',
    },
  }))();

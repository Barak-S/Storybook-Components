import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    selectBlock: {
      width: '-webkit-fill-available',
      '& > div': {
        width: '-webkit-fill-available',
      },
    },
    input: {
      position: 'relative',
      width: '192px',
      transform: 'translateX(-2px)',
      border: colors.brownishGrey,
      boxShadow: 'none',
      [theme.breakpoints.down('sm')]: {
        width: '-webkit-fill-available',
      },
      '& > div': {
        width: '-webkit-fill-available',
        borderRadius: '12px!important',
        backgroundColor: colors.paleGrey,
        '& > div': {
          '& > div': {
            display: 'flex',
            alignItems: 'center',
            color: colors.brownishGrey,
            '& > span': {
              margin: '5px',
            },
          },
        },
      },
      '& > div:last-child': {
        position: 'inherit',
      },
    },
    title: {
      display: 'flex',
    },

    error: {
      border: 'red',
    },
  }))();

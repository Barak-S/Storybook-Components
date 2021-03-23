import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles(() => ({
    container: {
      textAlign: 'center',
      display: 'block',
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    input: {
      display: 'none',
    },
    iconBtn: {
      position: 'relative',
      width: `132px`,
      height: `132px`,
      border: `dashed 2px ${colors.lightPeriwinkle}`,
      backgroundColor: colors.paleGrey,
      '&:hover': {
        background: colors.paleGreyTwo,
      },
    },
    imagePrev: {
      position: 'absolute',
      width: '100%',
      height: '-webkit-fill-available',
      borderRadius: '100px',
    },
  }))();

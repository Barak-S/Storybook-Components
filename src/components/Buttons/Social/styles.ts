import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = (bgColor: string) =>
  makeStyles(() => ({
    container: {
      width: '100%',
      background: bgColor,
      height: 41,
      borderRadius: 50,
      padding: '0 25px',
      display: 'flex',
      alignItems: 'center',
      color: colors.white,
      fontSize: 12,
      fontWeight: 400,
      '&:last-child': {
        marginRight: 0,
        marginBottom: 0,
      },
      '&:hover': {
        background: colors.withAlpha(bgColor, 0.9),
      },
      '& [class*="-startIcon"]': {
        position: 'relative',
        marginRight: 20,
        '&::after': {
          content: '""',
          display: 'block',
          height: 25,
          borderRight: `1px solid ${colors.withAlpha(colors.white, 0.5)}`,
          position: 'absolute',
          top: '50%',
          right: -10,
          transform: 'translateY(-50%)',
        },
      },
    },
  }))();

import { makeStyles } from '@material-ui/core';
import { colors, Styles } from 'styles';

export const styles: Styles = {
  container: {
    width: '100%',
    maxWidth: 571,
  },
  text: {
    padding: '0 20px',
    background: colors.white,
    position: 'relative',
  },
  iconsList: {
    width: '100%',
    maxWidth: 153,
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginBottom: 21,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: '100%',
      borderBottom: `1px solid ${colors.veryLightPinkTwo}`,
    },
  },
}));

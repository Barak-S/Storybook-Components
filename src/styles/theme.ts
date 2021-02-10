import { colors } from './colors';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#407DC8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F7F7F7',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: 15,
        textTransform: 'uppercase',
      },
      contained: {
        textTransform: 'uppercase',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 17,
        paddingBottom: 17,
        borderRadius: 12,
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      },
    },
  },
});

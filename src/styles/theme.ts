import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './colors';

const mainFont = 'Rubik, sans-serif';

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.link,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.background,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontFamily: mainFont,
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
      input: {
        boxSizing: 'border-box',
        fontSize: 21,
        borderRadius: 12,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        color: colors.blackTwo,
        fontFamily: mainFont,
      },
    },
    MuiCheckbox: {
      root: {
        marginRight: 3,
      },
    },
  },
});

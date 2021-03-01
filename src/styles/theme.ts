import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './colors';
import { mx } from './mixings';

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
        '&.Mui-focused > .MuiInputBase-input': {
          background: colors.white,
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '&.Mui-focused.Mui-error > .MuiInputBase-input': {
          color: colors.error,
        },
        '&.Mui-focused > .MuiInputAdornment-positionStart': {
          borderColor: colors.withAlpha(colors.brownishGrey, 0.3),
        },
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
        background: colors.paleGrey,
        paddingLeft: 15,
        boxShadow: 'none',
        WebkitAppearance: 'none',
      },
      inputAdornedStart: {
        paddingLeft: 74,
      },
      inputAdornedEnd: {
        paddingRight: 50,
      },
    },
    MuiInput: {
      underline: {
        '&:before, &:after': {
          content: 'none',
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: 'translate(15px, 20px) scale(1)',
        textTransform: 'capitalize',
        fontSize: 16,
        ...mx.zIndex.base,
      },
      root: {
        '&.Mui-focused:not(.Mui-error)': {
          color: colors.link,
        },
        '&.Mui-focused:not(.Mui-error) + .MuiInputBase-root > .MuiInputBase-input': {
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '& + .MuiInput-formControl': {
          marginTop: 0,
        },
      },
      shrink: {
        transform: 'translate(0, -18px) scale(.75)',
      },
    },
    MuiFormLabel: {
      root: {
        pointerEvents: 'none',
      },
      filled: {
        color: colors.link,
        '& + .MuiInputBase-root > .MuiInputBase-input': {
          background: colors.white,
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '&.Mui-error + .MuiInputBase-root > .MuiInputBase-input': {
          background: colors.white,
          color: colors.error,
          borderColor: 'currentColor',
        },
        '&.Mui-error + .MuiInputBase-root > .MuiInputAdornment-positionStart': {
          borderColor: colors.error,
        },
      },
    },
    MuiInputAdornment: {
      positionStart: {
        boxSizing: 'border-box',
        top: 0,
        left: 0,
        width: 54,
        height: 52,
        maxHeight: 'initial',
        background: colors.veryLightPinkThree,
        justifyContent: 'center',
        marginRight: 0,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        border: '1px solid transparent',
        borderRight: 'none',
      },
      positionEnd: {
        right: 15,
        '& .MuiIconButton-edgeEnd': {
          widht: 44,
          height: 44,
        },
      },
    },
    MuiCheckbox: {
      root: {
        marginRight: 3,
      },
    },
    MuiTabs: {
      root: {
        height: '100%',
        overflow: 'visible',
      },
      flexContainer: {
        height: '100%',
      },
      scroller: {
        overflow: 'visible!important',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'inherit',
        fontSize: 'inherit',
        fontFamily: '"Rubik", sans-serif',
        maxWidth: 'initial',
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: '"Rubik", sans-serif',
      },
    },
  },
});

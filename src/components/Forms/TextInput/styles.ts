import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = (value: unknown, isStartIcon: boolean) =>
  makeStyles(() => ({
    root: {
      '& > div': {
        '&[class*="-formControl"]': {
          background: 'none',
        },
        '&[class*="-underline"]': {
          '&::before, &::after': {
            content: 'none',
          },
        },
        '&[class*="-focused"] > input': {
          background: colors.white,
          borderColor: colors.withAlpha(colors.brownishGrey, 0.3),
        },
        '&[class*="-focused"] > div[class*="MuiInputAdornment-positionStart"]': {
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
          borderRight: 'none',
        },
        '& > div[class*="MuiInputAdornment-positionStart"]': {
          position: 'absolute',
          top: 0,
          left: 0,
          margin: '0!important',
          width: 54,
          height: 52,
          maxHeight: 'initial',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          backgroundColor: colors.veryLightPinkThree,
          pointerEvents: 'none',
          '& + input': {
            paddingLeft: 74,
          },
        },
      },
      '& > label': {
        color: value ? colors.link : colors.brownishGrey,
        fontSize: value ? 14 : 16,
        textTransform: 'capitalize',
        top: '50%',
        transform: 'translate3D(12px, -50%, 0) scale(1)',
        '&[class*="-focused"]': {
          color: colors.link,
          fontSize: 14,
          transform: `translate3D(0, -300%, 0) scale(0.75)`,
        },
        '&[class*="-filled"][class*="-shrink"]:not([class*="-focused"])': {
          transform:
            isStartIcon && !value ? 'translate3D(65px, -50%, 0) scale(1)' : `translate3D(0, -300%, 0) scale(0.75)`,
        },
        '& + [class*="adorned"]': {
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
      '& input': {
        background: value ? colors.white : colors.paleGrey,
        border: `1px solid ${value ? colors.withAlpha(colors.brownishGrey, 0.3) : 'transparent'}`,
        padding: '0 15px',
        '& + div': {
          '&[class*="Adornment"]': {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
          },
          '&[class*="Adornment-positionEnd"]': {
            right: 0,
          },
          '&[class*="Adornment"] > button': {
            margin: 0,
            width: 44,
            height: 44,
          },
        },
      },
    },
  }))();

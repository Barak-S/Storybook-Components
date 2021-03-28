import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

interface StylesConfig {
  value: unknown;
  isStartIcon?: boolean;
  valid?: boolean;
  adornmentType?: 'transparent';
}

export const useStyles = ({ value, isStartIcon, valid, adornmentType }: StylesConfig) =>
  makeStyles(() => ({
    root: {
      '& .MuiInputAdornment-root': {
        position: 'absolute',
        ...(adornmentType === 'transparent' && {
          background: 'none',
          border: 'none',
        }),
      },
      '& > label': {
        '&[class*="-shrink"]:not([class*="-focused"])': {
          transform: isStartIcon && !value ? 'translate3D(65px, 20px, 0) scale(1)' : 'translate(0, -18px) scale(.75)',
        },
        ...(adornmentType === 'transparent' && {
          '&[class*="-shrink"]:not([class*="-focused"])': {
            transform: isStartIcon && !value ? 'translate3D(45px, 20px, 0) scale(1)' : 'translate(0, -18px) scale(.75)',
          },
        }),
        ...(isStartIcon && {
          '&[class*="-shrink"][class*="-filled"]': {
            transform: 'translate(0, -18px) scale(.75)',
          },
        }),
        ...(!!valid && {
          '&.Mui-focused:not(.Mui-error) + .MuiInputBase-root > .MuiInputBase-input, &.MuiFormLabel-filled + .MuiInputBase-root > .MuiInputBase-input, &.MuiFormLabel-filled + .MuiInputBase-root > .MuiInputAdornment-positionStart, & + .Mui-focused > .MuiInputAdornment-positionStart': {
            borderColor: colors.green,
          },
        }),
        '& .MuiFormLabel-asterisk': {
          color: colors.rustyRed,
          transform: 'translateX(-3px)',
          display: 'inline-flex',
        },
      },
      ...(adornmentType === 'transparent' && {
        '& .MuiInputBase-input': {
          paddingLeft: 45,
        },
      }),
    },
  }))();

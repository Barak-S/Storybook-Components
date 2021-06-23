import React, { FC, ReactNode, Ref } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { InputAdornment, makeStyles, CircularProgress } from '@material-ui/core';
import { colors, Styles } from 'styles';
import { mc, Style } from 'styles';
import { getTestIdProps, TestIdProps } from 'utils';

type Props = TextFieldProps & CustomProps & TestIdProps;

interface CustomProps {
  inputStyle?: Style;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  valid?: boolean;
  loading?: boolean;
  adornmentType?: 'transparent';
  maxLength?: number;
  forwardRef?: Ref<HTMLDivElement>;
  className?: string;
  placeholder?: string;
}

export const FormTextInput: FC<Props> = ({
  inputStyle,
  iconStart,
  iconEnd,
  valid,
  loading,
  adornmentType,
  maxLength,
  InputProps,
  forwardRef,
  className,
  placeholder,
  testID,
  ...props
}) => {
  const startIconProps = <InputAdornment position="start">{iconStart}</InputAdornment>;
  const isStartIcon = !!iconStart;
  const { value } = props;
  const classes = useStyles({ value, isStartIcon, valid, adornmentType });

  const getEndAdornment = () => {
    if (loading) {
      return (
        <InputAdornment position="end">
          <CircularProgress style={{ width: 22, height: 22 }} size="small" />
        </InputAdornment>
      );
    }
    if (iconEnd) {
      return <InputAdornment position="end">{iconEnd}</InputAdornment>;
    }
    return undefined;
  };

  return (
    <TextField
      ref={forwardRef}
      className={mc(classes.root, className)}
      fullWidth
      {...props}
      placeholder={placeholder}
      InputProps={{
        inputProps: { style: inputStyle, maxLength, ...getTestIdProps(testID, 'input') },
        startAdornment: iconStart ? startIconProps : undefined,
        endAdornment: getEndAdornment(),
        ...(InputProps ? InputProps : {}),
      }}
    />
  );
};

interface StylesConfig {
  value: unknown;
  isStartIcon?: boolean;
  valid?: boolean;
  adornmentType?: 'transparent';
  inputStyle?: Styles;
}

const useStyles = ({ value, isStartIcon, valid, adornmentType, inputStyle }: StylesConfig) =>
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
            transform: isStartIcon && !value ? 'translate3D(45px, 19px, 0) scale(1)' : 'translate(0, -18px) scale(.75)',
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
      ...(inputStyle && {
        '& .MuiInputBase-input': {
          ...inputStyle,
        },
      }),
    },
  }))();

export const useFormTextInputStyles = useStyles;
export type FormTextInputProps = Props;
export default FormTextInput;

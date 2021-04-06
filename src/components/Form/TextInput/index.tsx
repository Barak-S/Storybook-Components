import React, { FC, ReactNode } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';
import { Style } from 'styles';

type Props = TextFieldProps & CustomProps;

interface CustomProps {
  inputStyle?: Style;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  valid?: boolean;
  adornmentType?: 'transparent';
  maxLength?: number;
}

export const FormTextInput: FC<Props> = ({
  inputStyle,
  iconStart,
  iconEnd,
  valid,
  adornmentType,
  maxLength,
  InputProps,
  ...props
}) => {
  const startIconProps = <InputAdornment position="start">{iconStart}</InputAdornment>;
  const endIconProps = <InputAdornment position="end">{iconEnd}</InputAdornment>;
  const isStartIcon = !!iconStart;
  const { value } = props;
  const classes = useStyles({ value, isStartIcon, valid, adornmentType });

  return (
    <TextField
      className={classes.root}
      fullWidth
      {...props}
      InputProps={{
        inputProps: { style: inputStyle, maxLength },
        startAdornment: iconStart ? startIconProps : undefined,
        endAdornment: iconEnd ? endIconProps : undefined,
        ...(InputProps ? InputProps : {}),
      }}
    />
  );
};

export type FormTextInputProps = Props;
export default FormTextInput;

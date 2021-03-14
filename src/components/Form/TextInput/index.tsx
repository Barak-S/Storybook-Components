import React, { FC, ReactNode } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';

interface CustomProps {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  valid?: boolean;
}

type Props = TextFieldProps & CustomProps;

export const FormTextInput: FC<Props> = ({ iconStart, iconEnd, valid, InputProps, ...props }) => {
  const startIconProps = <InputAdornment position="start">{iconStart}</InputAdornment>;
  const endIconProps = <InputAdornment position="end">{iconEnd}</InputAdornment>;
  const isStartIcon = !!iconStart;
  const { value } = props;
  const classes = useStyles({ value, isStartIcon, valid });

  return (
    <TextField
      className={classes.root}
      fullWidth
      {...props}
      InputProps={{
        startAdornment: iconStart ? startIconProps : undefined,
        endAdornment: iconEnd ? endIconProps : undefined,
        ...(InputProps ? InputProps : {}),
      }}
    />
  );
};

export type FormTextInputProps = Props;
export default FormTextInput;

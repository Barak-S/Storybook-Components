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

export const TextInput: FC<Props> = ({ iconStart, iconEnd, valid, ...props }) => {
  const startIconProps = <InputAdornment position="start">{iconStart}</InputAdornment>;
  const endIconProps = <InputAdornment position="end">{iconEnd}</InputAdornment>;
  const isStartIcon = !!iconStart;
  const { value } = props;
  const classes = useStyles({ value, isStartIcon, valid });

  return (
    <TextField
      className={classes.root}
      fullWidth={true}
      {...props}
      InputProps={{
        startAdornment: iconStart ? startIconProps : undefined,
        endAdornment: iconEnd ? endIconProps : undefined,
        ...(props.InputProps ? props.InputProps : {}),
      }}
    />
  );
};

export type TextInputProps = Props;
export default TextInput;

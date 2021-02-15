import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';
import { TextInputProps } from './types';

export const TextInput = ({ iconStart, iconEnd, ...props }: TextInputProps) => {
  const { value } = props;
  const isStartIcon = Boolean(iconStart);
  const classes = useStyles(value, isStartIcon);
  const startIconProps = <InputAdornment position="start">{iconStart}</InputAdornment>;
  const endIconProps = <InputAdornment position="end">{iconEnd}</InputAdornment>;

  return (
    <TextField
      {...props}
      className={classes.root}
      InputProps={{
        startAdornment: iconStart ? startIconProps : undefined,
        endAdornment: iconEnd ? endIconProps : undefined,
      }}
    />
  );
};

export default TextInput;

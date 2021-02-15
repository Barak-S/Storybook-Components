import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { CheckboxInputProps } from './types';
import { useStyles } from './styles';

export const CheckboxInput = (props: CheckboxInputProps) => {
  const { label } = props;
  const classes = useStyles();
  return <FormControlLabel className={classes.root} control={<Checkbox {...props} />} label={label} />;
};

export default CheckboxInput;

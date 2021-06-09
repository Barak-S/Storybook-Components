import { Checkbox, CheckboxProps, FormControlLabel, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { colors } from 'styles';
import { getTestIdProps, TestIdProps } from 'utils';

interface Props extends CheckboxProps, TestIdProps {
  label?: string;
}

export const FormCheckboxInput: FC<Props> = props => {
  const { label } = props;
  const { testID, inputProps, ...checkboxProps } = props;
  const testIdProps = getTestIdProps(testID, 'input');
  const modInputProps = inputProps ? { ...inputProps, ...testIdProps } : { ...testIdProps };
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.container}
      control={<Checkbox {...checkboxProps} inputProps={modInputProps} />}
      label={label}
    />
  );
};

const useStyles = makeStyles(() => ({
  container: {
    marginRight: 0,
    '& [class*="MuiFormControlLabel"]': {
      color: colors.brownishGrey,
    },
  },
}));

export type FormCheckboxInputProps = Props;
export default FormCheckboxInput;

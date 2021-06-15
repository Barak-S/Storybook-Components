import { Checkbox, CheckboxProps, FormControlLabel, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, Styles } from 'styles';
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
      style={styles.container}
      className={classes.container}
      control={<Checkbox style={styles.input} {...checkboxProps} inputProps={modInputProps} />}
      label={label}
    />
  );
};

const styles: Styles = {
  container: {
    alignItems: 'flex-start',
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const useStyles = makeStyles(() => ({
  container: {
    marginRight: 0,
    '& [class*="MuiFormControlLabel"]': {
      color: colors.brownishGrey,
    },
    '& .MuiCheckbox-root': {
      paddingRight: 4,
    },
  },
}));

export type FormCheckboxInputProps = Props;
export default FormCheckboxInput;

import React, { FC } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

import { CheckboxProps } from '@material-ui/core';

interface Props extends CheckboxProps {
  label?: string;
}

export const CheckboxInput: FC<Props> = props => {
  const { label } = props;
  const classes = useStyles();
  return <FormControlLabel className={classes.container} control={<Checkbox {...props} />} label={label} />;
};

const useStyles = makeStyles(() => ({
  container: {
    marginRight: 0,
    '& [class*="MuiFormControlLabel"]': {
      color: colors.brownishGrey,
    },
  },
}));

export type CheckboxInputProps = Props;
export default CheckboxInput;

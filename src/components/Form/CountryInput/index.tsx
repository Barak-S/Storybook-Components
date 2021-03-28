import { makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { FC } from 'react';

import TextInput, { FormTextInputProps } from '../TextInput';
import countries, { CountryInfo } from './data';

type Props = FormTextInputProps;

export const FormCountryInput: FC<Props> = ({ style, label = 'country', required }) => {
  const options: CountryInfo[] = countries;
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.container}
      disableClearable
      style={style}
      options={options}
      getOptionLabel={option => option.name}
      classes={{
        endAdornment: classes.icon,
      }}
      renderInput={params => <TextInput {...params} required={required} label={label} />}
    />
  );
};

const useStyles = makeStyles({
  container: {
    '&.MuiAutocomplete-root .MuiAutocomplete-inputRoot': {
      paddingRight: 0,
    },
    '&.MuiAutocomplete-root .MuiFormControl-root .MuiInputBase-input': {
      paddingLeft: 15,
    },
  },
  icon: {
    display: 'none',
  },
});

export type FormCountryInputProps = Props;
export default FormCountryInput;

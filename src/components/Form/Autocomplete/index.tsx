import { makeStyles, TextField } from '@material-ui/core';
import { Autocomplete, AutocompleteProps, AutocompleteRenderInputParams } from '@material-ui/lab';
import React, { FC } from 'react';

type BaseProps = Omit<AutocompleteProps<string, undefined, undefined, undefined>, 'renderInput'>;

interface Props extends BaseProps {
  required?: boolean;
  label?: string;
}

export const FormAutocomplete: FC<Props> = ({ required, label, ...props }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      {...props}
      className={classes.container}
      classes={{
        endAdornment: classes.endAdornment,
      }}
      renderInput={params => <TextField {...params} required={required} label={label} />}
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
      paddingRight: 30,
    },
  },
  endAdornment: {
    right: 6,
  },
});

export interface FormAutocompleteInputProps {
  className?: string;
  required?: boolean;
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const useFormAutocompleteProps = (inputProps: FormAutocompleteInputProps) => {
  const classes = useStyles();
  return {
    className: classes.container,
    classes: {
      endAdornment: classes.endAdornment,
    },
    // eslint-disable-next-line react/display-name
    renderInput: (params: AutocompleteRenderInputParams) => <TextField {...params} {...inputProps} />,
  };
};

export type FormAutocompleteProps = Props;
export default FormAutocomplete;

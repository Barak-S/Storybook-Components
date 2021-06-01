import { Autocomplete } from '@material-ui/lab';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import { useFormAutocompleteProps } from '../Autocomplete';
import { countries } from 'utils';

interface Props extends StyleProps {
  required?: boolean;
  label?: string;
  value?: string;
  onChange?: (value?: string) => void;
}

export const FormCountryInput: FC<Props> = ({ label = 'country', value, required, onChange, ...props }) => {
  const customizeAutocompleteProps = useFormAutocompleteProps(required, label);
  return (
    <Autocomplete
      options={countries.map(itm => itm.name)}
      inputValue={value || ''}
      freeSolo
      onInputChange={(_e, val) => onChange && onChange(val)}
      {...props}
      {...customizeAutocompleteProps}
    />
  );
};

export type FormCountryInputProps = Props;
export default FormCountryInput;

import { Autocomplete } from '@material-ui/lab';
import React, { ChangeEvent, FC } from 'react';
import { ClassNameProps, StyleProps } from 'styles';
import { timeZones } from 'utils';

import { FormAutocompleteInputProps, useFormAutocompleteProps } from '../Autocomplete';

interface Props extends StyleProps, ClassNameProps, FormAutocompleteInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

const codeToItem = (code: string) => timeZones.find(itm => itm.code === code);

export const FormTimeZoneInput: FC<Props> = ({ style, value, required, label, error, helperText, onChange, ...props }) => {
  const customizeAutocompleteProps = useFormAutocompleteProps({ required, label, error, helperText });
  const curValue = value ? codeToItem(value) : undefined;

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (_e: ChangeEvent<{}>, label: string) => {
    if (!onChange) return;
    const itm = timeZones.find(itm => itm.label === label);
    if (itm) {
      onChange(itm.code);
    }
  };

  return (
    <Autocomplete
      style={style}
      options={timeZones.map(itm => itm.label)}
      value={curValue ? curValue.label : timeZones[0].label}
      disableClearable
      onChange={handleChange}
      {...props}
      {...customizeAutocompleteProps}
    />
  );
};

export type FormTimeZoneInputProps = Props;
export default FormTimeZoneInput;

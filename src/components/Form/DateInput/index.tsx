import { KeyboardDatePicker } from '@material-ui/pickers';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';
import { isDate, isNum, isStr } from 'utils';

import FormTextInput from '../TextInput';

interface Props extends StyleProps {
  value?: Date;
  onChange?: (newValue?: Date) => void;
}

export const FormDateInput: FC<Props> = ({ style, value = new Date(), onChange }) => {
  const handleChange = (newVal: unknown) => {
    if (onChange) {
      if (isDate(newVal)) {
        onChange(newVal);
      }
      if (isNum(newVal) || isStr(newVal)) {
        onChange(new Date(newVal));
      }
    }
  };

  /**
   * KeyboardDatePicker API:
   * https://material-ui-pickers.dev/api/KeyboardDatePicker
   */
  return (
    <KeyboardDatePicker
      style={style}
      value={value}
      disableToolbar
      autoOk
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      TextFieldComponent={fieldProps => (
        <FormTextInput
          // iconStart={<LineAwesomeIcon type="calendar" color={colors.brownishGrey} />}
          inputStyle={{
            color: colors.brownishGrey,
            fontSize: 16,
            // paddingLeft: 68,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          {...fieldProps}
        />
      )}
      onChange={handleChange}
    />
  );
};

export type FormDateInputProps = Props;
export default FormDateInput;

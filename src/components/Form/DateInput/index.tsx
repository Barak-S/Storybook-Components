import { makeStyles } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';
import { isDate, isNum, isStr } from 'utils';

import FormTextInput from '../TextInput';

interface Props extends StyleProps {
  value?: Date;
  onChange?: (newValue?: Date) => void;
}

export const FormDateInput: FC<Props> = ({ style, value = new Date(), onChange }) => {
  const [valid, setValid] = useState<boolean>(true);

  const handleDatePickerChange = (newVal: unknown) => {
    if (String(newVal) === 'Invalid Date') {
      setValid(false);
    } else {
      setValid(true);
    }

    if (onChange) {
      if (isDate(newVal)) {
        onChange(newVal);
      }
      if (isNum(newVal) || isStr(newVal)) {
        onChange(new Date(newVal));
      }
    }
  };

  const classes = useStyles(valid);
  const styles = getStyles();
  /**
   * KeyboardDatePicker API:
   * https://material-ui-pickers.dev/api/KeyboardDatePicker
   */
  return (
    <View style={ms(styles.container, style)}>
      <KeyboardDatePicker
        autoOk
        value={value}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        InputAdornmentProps={{
          position: 'start',
        }}
        TextFieldComponent={fieldProps => (
          <FormTextInput
            className={classes.picker}
            inputStyle={{
              color: colors.brownishGrey,
              fontSize: 16,
              paddingLeft: 68,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            {...fieldProps}
          />
        )}
        onChange={handleDatePickerChange}
      />
      <View style={styles.fakeBtn}>
        <LineAwesomeIcon type="calendar" color={colors.brownishGrey} />
      </View>
    </View>
  );
};

const getStyles = (): Styles => ({
  container: {
    position: 'relative',
  },
  fakeBtn: {
    position: 'absolute',
    left: 0,
    padding: 14,
    pointerEvents: 'none',
  },
});

export const useStyles = (valid: boolean) =>
  makeStyles(() => ({
    picker: {
      margin: 0,
      '& .MuiInputBase-root': {
        ...mx.border(1, 'solid', 'transparent'),
        borderColor: valid ? 'transparent' : colors.error,
      },
      '& .MuiSvgIcon-root': {
        opacity: 0,
      },
      '& .MuiButtonBase-root': {
        borderRadius: 0,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        padding: 14,
        left: -1,
      },
      '& .Mui-error.MuiFormHelperText-root': {
        display: 'none',
      },
    },
  }))();

export type FormDateInputProps = Props;
export default FormDateInput;

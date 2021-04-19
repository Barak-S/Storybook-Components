import { IconButton, TextField } from '@material-ui/core';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { ChangeEvent, FC } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';
import { pad } from 'utils';

interface Props extends StyleProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (newValue: number) => void;
}

export const FormNumberInput: FC<Props> = ({ style, value, min, max, onChange }) => {
  const handleClickMinus = () => {
    let newVal: number = value === undefined ? -1 : value - 1;
    if (min !== undefined && newVal < min) {
      newVal = min;
    }
    if (onChange) {
      onChange(newVal);
    }
  };

  const handleClickPlus = () => {
    let newVal: number = value === undefined ? 1 : value + 1;
    if (max !== undefined && newVal > max) {
      newVal = max;
    }
    if (onChange) {
      onChange(newVal);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStrVal = e.currentTarget.value;
    let newVal = parseInt(newStrVal, 10);
    if (isNaN(newVal)) {
      newVal = 0;
    }
    if (min && newVal < min) {
      newVal = min;
    }
    if (max && newVal > max) {
      newVal = max;
    }
    if (onChange) {
      onChange(newVal);
    }
  };

  const styles = getStyles(value === undefined);

  return (
    <View style={[styles.container, style]}>
      <TextField
        style={styles.inputRoot}
        InputProps={{
          inputProps: { style: styles.input },
          startAdornment: (
            <IconButton style={ms(styles.counterBtn)} onClick={handleClickMinus}>
              <LineAwesomeIcon style={styles.icon} type="minus" />
            </IconButton>
          ),
          endAdornment: (
            <IconButton style={ms(styles.counterBtn)} onClick={handleClickPlus}>
              <LineAwesomeIcon style={styles.icon} type="plus" />
            </IconButton>
          ),
        }}
        value={pad(value || 0, 2)}
        onChange={handleChange}
      />
    </View>
  );
};

const getStyles = (disabled: boolean): Styles => ({
  container: {
    width: '100%',
    maxWidth: 145,
    height: 52,
    borderRadius: 12,
    overflow: 'hidden',
    color: disabled ? colors.greyish : colors.brownishGrey,
    ...mx.border(1, 'solid', colors.brownishGrey),
  },
  counterBtn: {
    maxWidth: 35,
    height: '100%',
    borderRadius: 0,
    background: colors.veryLightPinkThree,
    border: 'none',
  },
  inputRoot: {
    height: '100%',
  },
  input: {
    padding: 0,
    textAlign: 'center',
    borderRadius: 0,
    height: '100%',
    border: 'none',
    ...(!disabled && { background: colors.white }),
    color: disabled ? colors.greyish : colors.brownishGrey,
  },
  icon: {
    color: disabled ? colors.greyish : colors.brownishGrey,
  },
});

export type FormNumberInputProps = Props;
export default FormNumberInput;

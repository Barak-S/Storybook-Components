import { InputAdornment } from '@material-ui/core';
import { Text, View } from 'components/Common';
import ColorPicker from 'material-ui-color-picker';
import React, { FC } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  value?: string;
  title?: string;
  onChange?: (value: string) => void;
}

export const FormColorPicker: FC<Props> = ({ value = '#000', title, style, onChange }) => {
  const styles = getStyles(value);

  const startAdornment = (
    <InputAdornment style={styles.pickerAdornment} position="start">
      <View style={styles.pickerAdornmentField} />
    </InputAdornment>
  );

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <View style={ms(styles.container, style)}>
      {title && (
        <Text style={styles.title} block>
          {title}
        </Text>
      )}
      <ColorPicker
        style={styles.colorPicker}
        name="color"
        value={value}
        onChange={handleChange}
        InputProps={{
          startAdornment,
          value: value,
        }}
      />
    </View>
  );
};

const getStyles = (color: string): Styles => ({
  container: {
    width: '100%',
    flexShrink: 0,
  },
  colorPicker: {
    position: 'relative',
  },
  pickerAdornment: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    left: -1,
  },
  pickerAdornmentField: {
    width: 52,
    height: 52,
    background: color,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    boxShadow: `inset 0 0 3px ${colors.withDark(color, 0.2)}`,
  },
  title: {
    color: colors.coolBlue,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 10,
    ...mx.threeDots,
  },
});

export type FormColorPickerProps = Props;
export default FormColorPicker;

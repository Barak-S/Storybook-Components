import { Grid, InputAdornment } from '@material-ui/core';
import { View } from 'components/Common';
import ColorPicker from 'material-ui-color-picker';
import React, { FC, useMemo, useState } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  value?: string;
  title?: string;
  onChange?: (value: string) => void;
}

export const FormColorPicker: FC<Props> = ({ value = '#000', title, style, onChange }) => {
  const [color, setColor] = useState<string>(value);
  const styles = useMemo(() => getStyles(color), [color]);

  const handleChange = (color: string) => {
    setColor(value);
    if (color && onChange) {
      return onChange(color);
    }
  };

  const startAdornment = (
    <InputAdornment style={styles.pickerAdornment} position="start">
      <View style={styles.pickerAdornmentField} />
    </InputAdornment>
  );

  return (
    <View style={ms(styles.container, style)}>
      {title && (
        <Grid component="label" style={styles.title}>
          {title}
        </Grid>
      )}
      <ColorPicker
        style={styles.colorPicker}
        name="color"
        value={color}
        onChange={color => handleChange(color)}
        InputProps={{
          startAdornment,
          value: color,
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
    // border: '1px solid black',
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
  },
});

export type FormColorPickerProps = Props;
export default FormColorPicker;

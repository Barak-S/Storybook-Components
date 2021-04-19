import React, { FC, useState } from 'react';
import ColorPicker from 'material-ui-color-picker';
import { mx, StyleProps, Styles, colors, ms } from 'styles';
import { Grid, InputAdornment } from '@material-ui/core';
import { View } from 'components/Common';

interface Props extends StyleProps {
  value?: string;
  title?: string;
  onChange?: (value: string) => void;
}

export const FormColorPicker: FC<Props> = ({ value = '#000', title, style, onChange }) => {
  const [color, setColor] = useState<string>(value);
  const styles = getStyles(color);

  const handleChange = (color: string) => {
    if (!color) {
      setColor(value);

      return;
    }

    onChange && onChange(color);
    setColor(color);
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
    left: -1,
  },
  pickerAdornmentField: {
    ...mx.square(52),
    background: color,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
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

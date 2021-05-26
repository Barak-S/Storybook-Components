import { Grid } from '@material-ui/core';
import { FormColorPicker } from 'components/Form';
import { EventThemeColors } from 'core/api';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles, useScreenSizes } from 'styles';

interface Props extends StyleProps {
  data?: EventThemeColors;
  onChange?: (data: EventThemeColors) => void;
}

export const defEventThemeColors: EventThemeColors = {
  background: colors.marineBlue,
  largeHeadlines: colors.coolBlue,
  mediumHeadlines: colors.marineBlue,
  bodyText: colors.blackTwo,
  subheads: colors.marineBlue,
  linkedText: colors.warmPurple,
};

export const EventThemeColorPaletteForm: FC<Props> = ({ style, data = defEventThemeColors, onChange }) => {
  const { isDesktop } = useScreenSizes();
  const styles = getStyles(isDesktop);

  const handleChange = (key: keyof EventThemeColors) => (val: string) => {
    if (onChange) {
      onChange({ ...data, [key]: val });
    }
  };

  return (
    <Grid style={ms(styles.container, style)}>
      <Grid style={styles.row}>
        <FormColorPicker title="background" value={data.background} style={styles.picker} onChange={handleChange('background')} />
        <FormColorPicker
          title="Large Headlines"
          value={data.largeHeadlines}
          style={styles.picker}
          onChange={handleChange('largeHeadlines')}
        />
        <FormColorPicker
          title="Medium Headlines"
          value={data.mediumHeadlines}
          style={styles.picker}
          onChange={handleChange('mediumHeadlines')}
        />
      </Grid>
      <Grid style={styles.row}>
        <FormColorPicker title="Body Text" value={data.bodyText} style={styles.picker} onChange={handleChange('bodyText')} />
        <FormColorPicker title="Subheads" value={data.subheads} style={styles.picker} onChange={handleChange('subheads')} />
        <FormColorPicker
          title="Buttons & Linked Text"
          value={data.linkedText}
          style={styles.picker}
          onChange={handleChange('linkedText')}
        />
      </Grid>
    </Grid>
  );
};

const getStyles = (isDesktop: boolean): Styles => ({
  container: {
    width: '100%',
    maxWidth: 630,
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: isDesktop ? 35 : 0,
  },
  picker: {
    maxWidth: 185,
    marginBottom: isDesktop ? 0 : 35,
    marginRight: 10,
  },
});

export default EventThemeColorPaletteForm;

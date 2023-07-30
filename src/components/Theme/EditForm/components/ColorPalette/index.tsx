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
  background: colors.steal,
  largeHeadlines: colors.coolBlue,
  mediumHeadlines: colors.steal,
  bodyText: colors.blackTwo,
  subheads: colors.steal,
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
    <Grid style={ms(styles.container, style)} container direction="column" spacing={2}>
      <Grid item container style={styles.row} direction="row" spacing={2}>
        <Grid item sm={4} xs={12}>
          <FormColorPicker
            title="background"
            value={data.background}
            style={styles.picker}
            onChange={handleChange('background')}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormColorPicker
            title="Large Headlines"
            value={data.largeHeadlines}
            style={styles.picker}
            onChange={handleChange('largeHeadlines')}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormColorPicker
            title="Medium Headlines"
            value={data.mediumHeadlines}
            style={styles.picker}
            onChange={handleChange('mediumHeadlines')}
          />
        </Grid>
      </Grid>
      <Grid item container style={styles.row} spacing={2}>
        <Grid item sm={4} xs={12}>
          <FormColorPicker title="Body Text" value={data.bodyText} style={styles.picker} onChange={handleChange('bodyText')} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormColorPicker title="Subheads" value={data.subheads} style={styles.picker} onChange={handleChange('subheads')} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormColorPicker
            title="Buttons & Linked Text"
            value={data.linkedText}
            style={styles.picker}
            onChange={handleChange('linkedText')}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const getStyles = (isDesktop: boolean): Styles => ({
  container: {},
  row: {},
  picker: {},
});

export default EventThemeColorPaletteForm;

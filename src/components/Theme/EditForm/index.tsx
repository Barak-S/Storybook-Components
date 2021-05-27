import { Grid } from '@material-ui/core';
import { FormControlSection, FormSelect } from 'components/Form';
import { EventThemeColors, EventThemeFonts, EventThemeSettings, EventThemeUpdate } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import EventColorPalette, { defEventThemeColors } from './components/ColorPalette';

interface Props extends StyleProps {
  data?: EventThemeUpdate;
  onChange?: (data: EventThemeUpdate) => void;
}

const defEventThemeSettings: EventThemeSettings = {
  colors: defEventThemeColors,
  fonts: {
    main: 'Helvetica',
  },
};

const defEventThemeUpdate: EventThemeUpdate = {
  settings: defEventThemeSettings,
};

export const ThemeEditForm: FC<Props> = ({ style, data = defEventThemeUpdate, onChange }) => {
  const handleSettingsChange = (newVal: Partial<EventThemeSettings>) => {
    if (onChange) {
      const settings: EventThemeSettings = data.settings
        ? { ...data.settings, ...newVal }
        : { ...defEventThemeSettings, ...newVal };
      onChange({ ...data, settings });
    }
  };

  const handleColorsChange = (colors: EventThemeColors) => {
    handleSettingsChange({ colors });
  };

  const handleFontChange = (key: keyof EventThemeFonts) => (val: string) => {
    const settings = data.settings ? data.settings : defEventThemeSettings;
    handleSettingsChange({ ...settings, fonts: { ...settings.fonts, [key]: val } });
  };

  return (
    <Grid style={style} component="form">
      <FormControlSection title="Color Palette" description="Adjust the below colors to align to your event branding.">
        <EventColorPalette data={data.settings?.colors} onChange={handleColorsChange} />
      </FormControlSection>
      <FormControlSection
        title="Fonts"
        description="Select from the below font listing and choose the font that is closest to your event branding."
      >
        <FormSelect<string>
          label="Main"
          options={['Helvetica']}
          value={data.settings?.fonts.main}
          keyExtractor={itm => itm}
          titleExtractor={itm => itm}
          onChange={handleFontChange('main')}
        />
      </FormControlSection>
    </Grid>
  );
};

export default ThemeEditForm;

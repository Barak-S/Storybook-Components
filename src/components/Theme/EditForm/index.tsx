import { Grid } from '@material-ui/core';
import { FormControlSection } from 'components/Form';
import { EventThemeColors, EventThemeSettings, EventThemeUpdate } from 'core/api';
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
    main: 'Helvatica',
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

  return (
    <Grid style={style} component="form">
      <FormControlSection title="Color Palette" description="Adjust the below colors to align to your event branding.">
        <EventColorPalette data={data.settings?.colors} onChange={handleColorsChange} />
      </FormControlSection>
    </Grid>
  );
};

export default ThemeEditForm;
